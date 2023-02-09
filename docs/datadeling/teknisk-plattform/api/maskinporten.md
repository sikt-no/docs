---
title: Maskinporten som token-tjeneste i Gravitee
---

# Maskinporten som token-tjeneste i Gravitee

## Standardoppsett

Dette er standardopsett om man vil opprette en token-tjeneste i API Manager som gir deg token fra maskinporten som du kan bruke  for å autentisere mot APIer som krever dette

For mer informasjon og forklaring av oppsett [se denne siden](/docs/datadeling/veiledere/api-manager/jwt-mot-backend)

## Hvordan sette opp maskinporten API-et

For å sette opp maksinporten APIet så trenger man en bruker i [digitaliseringsdirektoratet sin Samarbeidsportal](https://selvbetjening-samarbeid-ver2.difi.no), hvem som helst kan sette opp en integrasjon mot test miljøet til maskinporten. 
For å sette opp en integrasjon mot maskinporten produksjon så trenger man enten å bli delegert rollen _Selvbetjening av integrasjoner i ID-porten/Maskinporten_ av hovedadministratoren til virksomheten vanligvis universitets/høyskole-direktøren, se digidir sin [dokumentasjon for hvordan dette tildeles](https://docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web.html#tilgang-i-produksjonsmilj%C3%B8). 
Hvis man ikke har tilgang selv så kan noen med tilgang gjøre stegene i [konfigurasjonsteg i Samarbeidsportalen](#Konfigurasjonsteg-i-Samarbeidsportalen) for deg.

Det er testet ut to forskjellige måter å autentisere seg mot maskinporten, den første er ved å bruke virksomhetssertifikatet, enten ved at sendes til på en sikker måte til IntArk drift, slik at de får lastet det opp i filsystemet til gravitee.
Eller ved at man har en mikrotjeneste kjørende hos seg som leverer sertifikatet til gravitee når man gjør api-kall mot maskinporten.

Det andre alternativet som er den vi annbefaler og har dokumentert her er å benytte seg av en selvsignert nøkkel som man laster opp i Samarbeidsportalen. 

### Lokale forberedelser

For å lage en egen nøkkel for maskinporten har vi følgende steg:

1. Bruk ssh til å generere en nøkkel
```bash
$ ssh-keygen -t rsa -b 4096 -m PEM -f maskinporten-rs256.key
```
2. Bruk openssl for å generere en offentlig nøkkel i pem formatet.
```bash
$ openssl rsa -in maskinporten-rs256.key -pubout -outform PEM -out maskinporten-rs256.key.pub.pem
```
3. Konverter nøkkelen til jwks formatet. 
Samarbeidsportalen krever at alle nøkler som skal lastes opp til bruk med maskinporten er i jwks formatet(JWK = Java Web Key). jwks er en egen base64-formatert presentasjon av offentlige nøkler.
Det finnes så vidt vi vet ingen standard cli-verktøy som konverterer til/fra jwks, men det finnes verktøy og kodesnutter online som utfører dette.
Verktøyene trenger kun den offentlige nøkkelen, så burde være uproblemtask å bruke det verktøyet man selv ønsker.
Vi har brukt [pem_to_jwks.py](https://github.com/oyviaase/okta-jwks-to-pem.git) siden skriptet er lettlest og bruker kjente bibliotek. 
Det finnes en PR som konverter skriptet til python 3 hvis man ønsker versjon av skriptet som er kompatibel med python3 istedenfor python2.
   1. Last ned konverterings verktøy for eksempel `pem_to_jwks.py`.
```bash 
$ git clone git@github.com:oyviaase/okta-jwks-to-pem.git
```
for python3 versjonen av skriptet
   2. Utfør konverteringen.
```bash
$ cd okta-jwks-to-pem
$ python3 pem_to_jwks.py --kid maskinporten-uio ../maskinporten.key.pub.pem
```
**HUSK** å notere ned parameteren man setter som `--kid` denne brukes senere når man setter opp maskinporten APIet i gravitee.

### Konfigurasjonsteg i Samarbeidsportalen

Vi antar dette er første gangen noen setter opp maskinporten i samarbeidsportalen, har man allerede satt opp en maskinporten integrasjon der man ønsker å gjennbruke så kan man gå rett til steg 4.

1. Logg inn i samarbeidsportalen og velg _INTEGRASJONER_
2. Trykk på _+Ny integrasjon_ og at det står _VER2_ eller _PRODUKSJON_ i knappen ved siden av se bilde hvis dette ble uklart.
   [![Administrer  integrasjoner](/datadeling/img/maskinporten/Samarbeidsportalen-administrasjon-av-tjeneste.png)](/datadeling/img/maskinporten/Samarbeidsportalen-administrasjon-av-tjeneste.png)
3. Fyll ut skjemaet med følgende informasjon:
   - _Difi-tjeneste_: Maskinporten 
   - _Scopes_: de man trenger(ta kontakt med leverandørene av systemene for å få en oversikt over scopene dere må sette) Scope settes ved å trykke på _Legg til scopes_ knappen 
   - _Navn på integrasjonen_: vi har brukt `uio-gravitee-(prod|test)` avhengig av om det er snakk om maskinporten produksjons miljø eller maskinporten test miljø.
   - _Beskrivelse_: hva en du ønsker
   - _Tillatte grant types_: `urn:ietf:params:oauth:grant-type:jwt-bearer`
   - _Klientautentiseringsmetode_: `private_key_jwt`
   - _Applikasjonstype_: web 
   - _Authorization levetid (sekunder)_: 0
   - _Access token levetid (sekunder)_: 0
   - _Refresh token levetid (sekunder)_: 0
   - _Refresh token type_: Engangs

Eventuelt se illustrasjonen: TODO legg til bilder
   [![Lag en ny  integrasjon](/datadeling/img/maskinporten/Samarbeidsportalen-opprett-tjeneste.png)](/datadeling/img/maskinporten/Samarbeidsportalen-opprett-tjeneste.png)

4. Last opp jwt nøkkel 
Velg integrasjonen man nettop har laget og trykk på _Egne pulic nøkler_ nesten neders på siden, nå får man opp et popupp vindu hvor man limer inn det man fikk ifra steg 3.2 med hakeparanteser rundt altså
```
[<output ifra steg 3.2>]
```
som kan se slik here ut:
```
[{"alg": "RS256", "e": "AQAB", "n": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "kid": "uio-gravitee-test", "kty": "RSA", "use": "sig"}]
```
   [![Last opp nøkkel](/datadeling/img/maskinporten/Samarbeidsportalen-last-opp-nokkel.png)](/datadeling/img/maskinporten/Samarbeidsportalen-last-opp-nokkel.png)

### Konfigurasjons steg i Gravitee

1. Kontakt support for å få fil med standardoppsett, og opprett tjenesten i API manager. Se [veileder for å registrere en tjeneste i API manager via fil](/docs/datadeling/veiledere/api-manager/importer-api).
2. Om dette er mot produksjonsystem i stedet for test, naviger til proxy og endpoint (under backend services) . Klikk på tannhjulet for PROD, fjern haken for backup endpoint. Slett TEST eller huk av for at test skal være backup endpint. **Husk å lagre**
3. Gå på design. Klikk på policy "Generate JWT" Fyll inn:
   - __Key ID_: det samme parameteren man satte som `--kid` i steg 3.2 i [Lokale forberedelser](#Lokale-forberedelser)
   - _audiences_: hvis produksjon endres den  til`https://maskinporten.no/`
   - _Private key_ Den private nøkkelen laget i steg 1 i [Lokale forberedelser](#Lokale-forberedelser)
   - **Husk å lagre**
4. Gå til Portal og details. Klikk på _START THE API_ og _PUBLISH THE API_. Vi anbefaler at du for dette APIet ikke klikker på _MAKE PUBLIC_
