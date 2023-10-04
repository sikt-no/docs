---
title: Maskinporten som token-tjeneste i Gravitee
---

# Maskinporten som token-tjeneste i Gravitee

Flere virksomheter krever at du autentiserer deg med Maskinporten før du kan
hente ut data fra deres API, for eksempel DFØ. I dette dokumentet får du en
beskrivelse på hvordan du setter opp en token-tjeneste i API Manager for
Maskinporten, slik at du kan bruke dette for API som krever det.

For mer informasjon og forklaring av oppsett, se [Backend-autentisering med
JWTs](/docs/datadeling/veiledere/api-manager/jwt-mot-backend).

Oppskriften er den samme for produksjons og testmiljøet til maskinporten. De 
stegene som er forskjellig har vi markert hva som gjelder for produksjon og 
hva som gjelder for test.

Husk at nøkler har varighet på **ett år** og må [fornyes](https://docs.digdir.no/docs/Maskinporten/maskinporten_feilsoking#invalid-assertion-client-authentication-failed-expired-key).

## 1 Få tilgang i Samarbeidsportalen

1. Opprett en bruker i [Samarbeidsportalen til
   Digdir](https://selvbetjening-samarbeid-ver2.difi.no). Hvis du vil kan du nå
   sette opp en integrasjon mot test-miljøet til Maskinporten.

2. Få delegert rollen _Selvbetjening av integrasjoner i
   ID-porten/Maskinporten_. Dette gjør at du kan sette opp integrasjoner for
   produksjonsmiljøet for Maskinporten, for din virksomhet. Dette må delegeres
   av hovedadministratoren til virksomheten - vanligvis universitetsdirektør
   eller høgskoledirektør. Se siden [Digdir: Tilgang i
   produksjonsmiljø](https://docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web.html#tilgang-i-produksjonsmilj%C3%B8)
   for hvordan dette gjøres.

Hvis du ikke kan få denne tilgangen må noen andre som har tilgang utføre
punktene nedenfor som gjøres i Samarbeidsportalen.


## 2 Generer nøkler lokalt

Lag en egen nøkkel for å bruke i Maskinporten:


1. Generer en nøkkel med ssh:
```bash
$ ssh-keygen -t rsa -b 4096 -m PEM -f maskinporten-rs256.key
```

2. Generer en offentlig nøkkel i PEM-format, med OpenSSL:
```bash
$ openssl rsa -in maskinporten-rs256.key -pubout -outform PEM -out maskinporten-rs256.key.pub.pem
```

3. Konverter nøkkelen til JWK-format (Java Web Key), siden det er dette
   Maskinporten krever. Dette kan gjøres på flere måter, men vi foreslår
   [pem_to_jwks.py](https://github.com/oyviaase/okta-jwks-to-pem.git):

```bash 
$ git clone git@github.com:oyviaase/okta-jwks-to-pem.git
$ cd okta-jwks-to-pem
$ python3 pem_to_jwks.py --kid maskinporten-uio ../maskinporten.key.pub.pem
```
**Husk** å notere parameteret du satt som `--kid`. Du vil trenge dette når du
setter opp Maskinporten-API-et i Gravitee senere.


## 3 Sett opp i Samarbeidsportalen

Hvis du allerede har satt opp Maskinporten i Samarbeidsportalen som du ønsker
gjenbruke, kan du hoppe til steg 4:

1. Logg inn i Samarbeidsportalen og velg _INTEGRASJONER_

2. Trykk på _+Ny integrasjon_. Pass på at det står _PRODUKSJON_ eller _VER2_(for **testmiljøet** til maskinporten) i
   knappen ved siden av:
   [![Administrer  integrasjoner](/datadeling/img/maskinporten/Samarbeidsportalen-administrasjon-av-tjeneste.png)](/datadeling/img/maskinporten/Samarbeidsportalen-administrasjon-av-tjeneste.png)

3. Fyll ut skjemaet:
   - _Difi-tjeneste_: Maskinporten 
   - _Scopes_: De du trenger. Ta eventuelt kontakt med leverandørene av API-et for å vite hvilke scopes de krever.
   - _Navn på integrasjonen_: Vårt eksempel: `uio-gravitee-(prod|test)`.
   - _Tillatte grant types_: `urn:ietf:params:oauth:grant-type:jwt-bearer`
   - _Klientautentiseringsmetode_: `private_key_jwt`
   - _Applikasjonstype_: web 
   - _Authorization levetid (sekunder)_: 0
   - _Access token levetid (sekunder)_: 0
   - _Refresh token levetid (sekunder)_: 0
   - _Refresh token type_: Engangs

   [![Lag en ny  integrasjon](/datadeling/img/maskinporten/Samarbeidsportalen-opprett-tjeneste.png)](/datadeling/img/maskinporten/Samarbeidsportalen-opprett-tjeneste.png)

4. Last opp JWT-nøkkel 
Velg integrasjonen du nettopp laget og velg _Egne public nøkler_. I dialog-vinduet kopierer du inn output fra kommandoen i steg 3 i [Lokale forberedelser](#Lokale-forberedelser), men med hakeparentes rundt innholdet. Et eksempel:
```
[{"alg": "RS256", "e": "AQAB", "n": "XXXXXXXXXXXXXX...XXXXXXXXXXXXX", "kid": "uio-gravitee-test", "kty": "RSA", "use": "sig"}]
```
   [![Last opp nøkkel](/datadeling/img/maskinporten/Samarbeidsportalen-last-opp-nokkel.png)](/datadeling/img/maskinporten/Samarbeidsportalen-last-opp-nokkel.png)

### 4 Konfigurasjons steg i Gravitee

1. [Last ned template for API-definisjonen for maskinporten.](./maskinporten-api-template.json) og last den opp i graviteee. Se [veileder for å registrere en tjeneste i API manager via fil](/docs/datadeling/veiledere/api-manager/importer-api).
2. Om dette er mot **produksjonsystem** i stedet for **test**, naviger til proxy og endpoint (under backend services) . Klikk på tannhjulet for PROD, fjern haken for backup endpoint. Slett TEST eller huk av for at test skal være backup endpint. **Husk å lagre**
3. Gå på design. Klikk på policy "Generate JWT" Fyll inn:
   - __Key ID_: det samme parameteren man satte som `--kid` i steg 3 i [Lokale forberedelser](#Lokale-forberedelser)
   - _audiences_: Settes til`https://maskinporten.no/`hvis det er **produksjon** eller `https://ver2.maskinporten.no/` hvis det er **test** miljøet man skal bruke
   - _Private key_ Den private nøkkelen laget i steg 1 i [Lokale forberedelser](#Lokale-forberedelser)
   - **Husk å lagre**
   [![Konfigurerer generateJWT](/datadeling/img/maskinporten/Samarbeidsportalen-last-opp-nokkel.png)](/datadeling/img/maskinporten/gravitee-generate-jwt-maskinporten.png)
4. Gå til Portal og details. Klikk på _START THE API_ og _PUBLISH THE API_. Vi anbefaler at du for dette APIet ikke klikker på _MAKE PUBLIC_




## 5 Alternative oppsett

Det som er beskrevet over er anbefalt måte å sette opp autentisering mot
Maskinporten. Det finnes noen andre alternativ, men som vi ikke anbefaler:

Den første er å bruke virksomhetssertifikatet direkte. Virksomhetssertifikatet
lastes da opp i API manager, slik at det brukes av token-tjenesten. Dette
anbefales ikke siden virksomhetssertifikatet generelt ikke bør deles utenfor
egen institusjon.

Det andre alternativet er å sette opp en mikrotjeneste som kjører lokalt hos
institusjonen, som håndterer tokens når API manager gjør API-kall mot
Maskinporten. Dette er noe mer komplisert enn anbefalingen, siden det krever at
du setter opp og drifter en lokal tjeneste.
