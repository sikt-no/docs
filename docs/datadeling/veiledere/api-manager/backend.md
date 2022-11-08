---
description:
  "For at API gatewayen skal kunne snakke med APIet p\xE5 backend-serveren\
  \ m\xE5 API-gatewayen som oftest autentisere seg."
title: Konfigurere backend
---

# Konfigurere backend

For at API gatewayen skal kunne snakke med APIet på backend-serveren må API gatewayen som oftest autentisere seg.

For å konfigurere hvordan API gatewayen skal koble seg til API-et i bakgrunnen bruker du Gravitee.

Naviger til ditt API:

1. Velg "Proxy" i den venstre sidemenyen
2. Under "BACKEND SERVICES" velger du "Endpoints"
3. Trykk deretter på tannhjulet og menyen for "Endpoint configuration" vil åpnes

![Konfigurere endpoints](/datadeling/img/image-20200925142430-1.png)

Har du flere backend-servere koblet til en gitt API kan du velge å redigere dem som en gruppe slik at de har like innstillinger som vist i punkt 3. Ønsker du heller å redigere kun én aktuell backend-server kan du velge tannhjulet direkte bak denne for å legge inn unike innstillinger.

### Autentisering med API-nøkkel eller brukernavn og passord

For å konfigurere autentisering med enten API-nøkkel eller brukernavn og passord må dette legges inn som en HTTP-header.

1. Fra "Endpoint configuration" menyen, velg "CONFIGURATION"
2. Trykk på sirkelen med plusstegn ved siden av Headers
3. Fyll inn navnet til headeren og verdien (nøkkelen) som skal brukes

![Legg til header](/datadeling/img/image-20200925143000-3.png)

Er det en annen Gravitee-installasjon i bakgrunnen kan det f.eks. se slik ut:

![Eksempel header](/datadeling/img/image-20200925143832-4.png)

Andre systemer bruker ofte andre navn for Headers, f.eks, bare "X-API-Key".

Ved bruk av "Basic Access Authentication (BA)" autentiserer man med brukernavn og passord. Navnet på headeren settes til Authorization og inneholder teksten Basic + mellomrom + brukernavn/passord. Brukernavnet og passordet legges inn som en base64-encodet streng, skilt med : (kolon). F.eks. "brukernavn:passord".

Det finnes mange verktøy for å skifte mellom vanlig tekst og base64. I linux kan man f.eks. bruke følgende kommando i et terminalvindu for å enkode:

```text
echo -n brukernavn:passord | base64
```

Man kan sjekke at det ble riktig ved å legge inn den genererte koden etter echo med denne kommandoen:

```text
echo YnJ1a2VybmF2bjpwYXNzb3JkCg== | base64 -d
```

For dette eksempelet vil Header se slik ut i Gravitee:

![Ferdig header eksempel](/datadeling/img/image-20200925145447-5.png)

### Få alle requests fra samme IP-adresse

Gravitee er installert på en kubernetes-klynge. Den kan derfor kjøre på hvilken som helst server i klyngen, og klyngen kan endre seg (utvides/erstattes). I tillegg kjører vi alltid med minst to gatewayer åpent for å unngå nedetid. API gatewayen vil derfor kunne ha forskjellig ip-adresser. Mange backend-thenester ligger på sperrede nett eller åpner kun for enkelt-IP-adresser. For å unngå å eksponere backend-tjenester mer enn nødvendig kan man konfigurere et API til å bruke en HTTP-proxy. Forespørsler vil da først gå til proxy-serveren, og deretter omdirigerer proxy-serveren forespørselen videre til riktig server. For backend-serveren ser det derfor ut som om forespørselen kom fra ip-adressen til proxy-serveren.

For å kunne gjøre dette må man ha en proxy-server. Denne bør være sikret slik at ikke alle kan bruke denne. Den kan f.eks. sikres med brukernavn og passord, og kun tillate din bruker å ta kontakt med den aktuelle backend-serveren.

Proxy-konfigurasjon gjøres ogå under HTTP-konfigurasjon. I "CONFIGURATION" menyen, huk av for "HTTP proxy" slik at den markeres i grønt som "active", og fyll inn nødvendig informasjon. Felter som må fylles ut er markert med \* (stjerne).

![HTTP proxy oppsett](/datadeling/img/image-20200925151029-6.png)

### Token-basert

Ved token-basert autentisering menes som oftest autentisering med Java Web Tokens (JWTs). Disse er oftest kortvarige og må genereres med jevne mellomrom, f.eks. hver time eller hvert tiende minutt. De kan også være for engangsbruk. Som oftest må man lage et en-gangs-token, kontakte en Authorization Server med det genererte en-gangs-tokenet, og få tilbake et token som er gyldig i en kort stund.

Token-basert autentisering er sikkert og fleksibelt å ta i bruk, om enn litt mer komplisert å konfigurere. Dette gjøres ved hjelp av policies eller et annet API. [Se egen veiledning](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/jwt-mot-backend.html) for detaljert fremgangsmåte.

### Sertifikater

Gatewayen kan autentisere seg med et klient-sertifikat. Dette er, som token-basert autentisering, mye sikrere enn ved bruk av API-nøkkel eller brukernavn og passord. Konfigureres under.

SSL - Client Authentication
[TODO-\> teste dette]
Fyll inn type sertificat (PKCS#12,PFX, Java key store/PEM-sertifikat/nøkkel-par) samt lim inn sertifikat-fila (eller path til denne om den er gjort tilgjengelig på filsystemet til API gateway-en) og evt. passord

### Timeouts

Hvis man opplever problemer med at koblingen mellom Gravitee og endepunktet får en timeout kan man endre innstillingene til timeout som er satt i Gravitee ved å endre på feltene under "HTTP Configuration". Hvert felt har egen beskrivelse for sin funksjon, og de må alle fylles ut.

![Illustrasjon over hvor man setter timeout verdiene i gravitee](/datadeling/img/2021-11-19-13.33.01-api-qa.intark.uh-it.no-b0f451af01f7.jpg)
