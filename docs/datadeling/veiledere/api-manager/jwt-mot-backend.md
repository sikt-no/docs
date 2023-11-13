---
description:
  "Hvordan du kan setter opp JWT-autentisering i Gravitee, for eksempel for\
  \ Maskinporten, uten at hver API-eier trenger f\xE5 tilgang til n\xF8kkelen."
title: Backend-autentisering med JWTs
---

# Backend-autentisering med JWTs

Hvordan du kan skjule JWT-autentisering i Gravitee, for eksempel for Maskinporten, uten at hver API-eier trenger få tilgang til nøkkelen. Merk at dette er en generell oppskrift. For oppsett av JWT til Maskinporten spesifikt, se [her](https://docs.sikt.no/docs/datadeling/teknisk-plattform/api/maskinporten/#4-konfigurasjons-steg-i-gravitee).

## Bakgrunn

Flere API-er hos andre institusjoner, bl.a. DFØ, krever autentisering med maskinporten. Andre API kan kreve autentisering med andre Authorization servers. Som oftest er det best om applikasjonen får tilgang og autentiserer direkte mot Authorization serveren, men noen ganger kan det være hensiktsmessig å autentisere API gateway mot API gateway.

DFØ har satt opp API-ene sine i maskinporten slik at man er nødt til å bruke enten en assymetrisk nøkkel eller et virksomhetssertifikat til autentisering. Med mange integrasjoner og andre applikasjoner som skal ha tilgang til disse API-ene, blir disse hemmelighetene lagret flere steder hvis hver applikasjon skal autentisere selv. For å begrense antall steder hemmeligheter legges blir denne autentiseringen heller utført i Gravitee.

### Lage JWT i Gravitee

Velg API'et du vil legge til autentisering for. Gå til design i venstre sidemeny, og deretter videre til Policies. Bruk policyen "Generate JWT" for å lage en JWT. Denne kan brukes videre, f.eks. i policyen "Add header" eller "HTTP Callout".

Generate JWT:

[![Generate JWT policyen](/datadeling/img/image-20200928103116-1.png)](/datadeling/img/image-20200928103116-1.png)

Det er mange felt som må fylles inn, og hvilke som brukes avhenger av hvilken autorisasjons servere som brukes.

Disse er verdt å merke seg:

- Om sertifikatet er lagret på filsystemet (ta kontakt med IntArk-drift for dette), velg "The content of the private key is provided by reading a PKCS12/JKS/PEM file from file system" under "Key resolver". Path til riktig mappe skrives inn i "Private key / Secret key / key store path". Hvis ikke, velg "The content of the private key/secret is provided inline" og lim denne inn i "Private key / Secret key / key store path" lenger ned
- Passordet til den private nøkkelen blir vist i klartekst. Vær nøye og begrens hvem som har tilgang til API-et
- Om du har lastet opp sertifikatet til Authorization serveren skriv inn ID-en på nøkkelen i feltet "kid". Hvis det er virksomhetssertifikat, ikke fyll inn feltet "kid", men velg heller "Add a certificate chain as axn X5C attribute" i feltet "Certificate chain"
- Du kan legge på så mange ekstra Claims som du vil

### Bruke JWT til autentisering og motta bearer-token

Dette gjøres med HTTP Callout. Legg inn URL til autentiserings-endepunktet du skal bruke og evt. headere/parametere. Legg ved JWT-en som akkurat ble laget ved å bruke Expression Language-notasjon: $\{context.attributes['jwt.generated']}.

F.eks. for å bruke mot maskinporten må du legge ved følgende data: grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=$\{context.attributes['jwt.generated']}.

### Legge ved token

For å legge på bearer-token mottatt med HTTP Callaout-policyer: i "Transform Headers"-policy, klikk på plusstegnet under add, fyll inn Authorization som "Name" og som "value": Bearer \{#context.attributes['token']}.

### Eksempel: Maskinporten som API

I Gravitee har vi registrert maskinporten (p.t. versjon 2 test-løsningen) som et API.

- API-et er ikke publisert
- Det er sikret med API nøkkel og sperret til IP
- Backend server endpoint er for test: [https://ver2.maskinporten.no/token](https://ver2.maskinporten.no/token)

Det er satt opp med følgende policyer:

- IP Filtering: NRECs ip-adresser er hvitelistet
- Cache: Bruker parameteren scope som key, application som scope, og 3599 (sekunder) som maks varighet på cachede objekter. Policyen henter svar fra cache kun når http-metoden er GET.
- Generate JWT: Denne genererer JWT-filen som vi bruker for å autentisere mot maskinporten. iss (issuer) og scope hentes som parametere, resten av feltene er hardkodet
- Assign content: Legger på requesten ihht. oauth2-standard og med JWT som akkurat er generert som assertion
- Transform parameters: Fjerner parameterne iss og scope
- Transform headers: Legger til encoding
- Override HTTP method: Endrer til POST

API-et er også satt opp med en cache-ressurs.

Applikasjonene er i tillegg registrert i samarbeidsportalen. Foreløpig er det registrert én applikasjon med fire scope. Applikasjons-ID-en herfra er den som blir brukt som paramteren _iss_ (for Issuer). Denne er også registrert hos DFØ.

Virksomhetssertifikatet er opprettet som en secret i openshift-prosjektet og mountet som katalogen /certs på både API-manager og Gateway-podene. På denne måten trenger vi kun registrere path til filen i API-et. Det er ikke nødvendig, men man kan og lime inn base64-encoded virksomhetssertifikat rett inn i policyen.

### Bruk

API-ene som bruker dette for autentisering har to ekstra policyer:

- HTTP Callout: Denne gjør en callout til maskinporten-API-et som er registrert hos oss med http metode GET og parameter for riktig scope, riktig issuer og headeren X-Gravitee-Api-Key for å få tilgang
- Transform headers: Legger på headeren Authorization med verdien 'Bearer' og JWT-tokenet som maskinporten returnerer

I tillegg er de registrert som applikasjoner i API manager. Disse har og fått tilgang til maskinporten-API-et og API-nøkkelen er registrert i HTTP callout-policyen.

### Bruksanvisning

- For å registrere et API med maskinporten-autentisering må det registreres som en applikasjon, og søke om tilgang til maskinporten-API-et. Når tilgang er godkjent brukes API-nøkkelen i http callout-policyen
- På siden for å administrere API-et, velg Design i venstre sidemeny og dra policyen "HTTP Callout" til midten. Fyll inn:
  - scope: request
  - HTTP Method: GET (Kan også være POST. Da blir det generert nytt token hver gang. Det skaper unødvendig belastning på maskinporten og er tregt, men gjør feilsøking enklere)
  - URL: [https://gw-XXX.intark.uh-it.no/maskinporten-test/v2?iss=**\<ISSUER\>**&scope=**\<SCOPE\>**](https://gw-XXX.intark.uh-it.no/maskinporten-test/v2?iss=**<ISSUER>**&scope=**<SCOPE>**) (issuer finner du i samarbeidsportalen)
  - Legg til Header X-Gravitee-Api-Key. Verdien er API-nøkkelen fra forrige punkt
  - Legg til Context variabel med navn = Token og value = \{#jsonPath(#calloutResponse.content, '$.access_token')}
- Dra så policyen Transform Header inn i midten. Under Add/update headers, legg til en med navn Authorization og verdi Bearer \{#context.attributes['token']}

Ønsker man å sende med multiple scopes til maskinporten så støttes dette, men formatet på strengen med scopes bestemmes utifra hvordan man sender med scopes til maskinporten APIet.

- Sender man scopet med som en del av URI som eksempelet ovenfor gjør så må man selv huske på å manuelt urlencode strenger som inneholder scopene i Assign Content for den aktuelle planen så de blir sende slik ut:

```
dfo:scope1+dfo:scope_nr2+dfo:scope3
```

- Sender man scopet med som en header så skriver man navnene på scopene rett ut med mellomrom imellom i Assign Content for riktig plan. Eksempelet over blir nå da seende slikt ut:

```
dfo:scope1 dfo:scope/nr2 dfo:scope3
```
