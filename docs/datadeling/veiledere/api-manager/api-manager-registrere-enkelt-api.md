---
description:
  "Oppskrift for hvordan man registrerer et enkelt API i Gravitee. I tillegg\
  \ til \xE5 registrere API m\xE5 man opprette en eller flere planer."
title: Registrere et enkelt API
---

# Registrere et enkelt API

Oppskrift for hvordan man registrerer et enkelt API i Gravitee. I tillegg til å registrere API må man opprette en eller flere planer.

Logg inn i API manager og gå på siden for API. For å kunne registrere API her må man ha rollen API Publisher. Kontakt adminstrator ved din enhet om du ikke har denne rollen.

Gå først til oversikten over API ved å enten trykke på brukerikonet øverst til høyre, for så å velge "Administration" eller ved å trykke på APIs i sidemenyen til venstre. Klikk så på sirkelen med pluss-tegnet. Om du ikke ser dette har du ikke tilgang til å registrere API.

![Ny API](/datadeling/img/image-20200924095643-2.png)

På neste side kan man velge om man vil importere API definisjonen eller opprette fra bunnen av. Om man har en eksport av API-et fra en annen Gravitee-installasjon eller har en API-definisjon i Open API-format/Swagger-fil, kan man bruke denne. Dette gjør registreringen raskere, men krever ofte at man gjør endringer eller retter opp i etterkant.

I denne veiledningen oppretter vi API-et fra bunnen av ved å trykke på den blå pilen.

### General

Fyll inn navn, versjonsnummer, beskrivelse og context-path for API-et. Bruk et godt beskrivende navn, og gi en utfyllende beskrivelse av funksjonen til API-et. Dette vil gjøre API-et mye mer nyttig for andre.

Context-path er en del av URL-en til APIet. Eksempelet over som fører til for UiOs gateway vil være tilgjengelig på URLen https://gw-uio.intark.uh-it.no/my-first-echo-api

Merk at disse path-ene er en begrenset ressurs. Registrerer man f.eks. et utviklings-API under /personer , vil en ikke ha mulighet til å registrere test-miljø under /personer/test. Da kan det være bedre å bruke f.eks. /personer/utv/v1

![Context path example](/datadeling/img/image-20200924102426-3.png)

### Gateway

Skriv inn URL til backend. Om API-et skal være åpent for alle er dette alt som trengs. Dersom API gateway må autentisere seg, konfigurerer vi dette senere.

![Legge til backend](/datadeling/img/image-20200924114923-2.png)

### Plan

Hvis det er ønskelig, kan man her opprette en plan. Det er også mulig å utsette dette ved å trykke "SKIP". I denne veiledningen er det kun mulig å opprette åpne planer eller planer som bruker API-nøkler. Vil man bruke OAuth 2 og/eller JWTs for autentisering må disse opprettes etterpå.

Her er et eksempel på en enkel plan. Den gir lese-tilgang til alle ressurser i APIet hvis man har en API-nøkkel. Siden dette er et echo-API er det ikke nødvendig å ha noe sikring. For å gjøre APIet helt åpent, velg Keyless (Public). For å kunne se hvem som bruker et API, men fortsatt tillate alle som ønsker å bruke det, kan man velge "auto-subscribe".

Under Path Authorization kan man hviteliste eller svarteliste tilgang til ressurser. For denne planen har vi valgt at alle kan kjøre oppslag ( GET http-verb ) for alle ressurser/"under-URLer" (/).

![Opprette plan](/datadeling/img/image-20200924132314-3.png)

### Doc

Her kan man laste opp dokumentasjon. Dette kan være html-sider (med f.eks. overordnet dokumentasjon) eller OpenAPI/swagger filer (brukes ofte som teknisk dokumentasjon). Det er også mulig å importere dokumentasjon fra nett (åpne websider eller git-repositories), eller skrive dokumentasjon direkte etter at API-et er opprettet.

![Legge til dokumentasjon](/datadeling/img/image-20200924133645-4.png)

### Deployment

På siste side kan du velge om du vil opprette API-et uten å starte det, eller opprette og starte med en gang.

---

Etter å ha gått gjennom veiledningen for å opprette API må man gjerne finpusse litt før API-et er helt klar til bruk.

Les mer om hvordan:

- [Opprette flere planer](/docs/datadeling/veiledere/api-manager/opprette-plan)
- [Autentisering mot backend](/docs/datadeling/veiledere/api-manager/backend)
- [Legge policyes på API](/docs/datadeling/veiledere/api-manager/legge-pa-enkel-policy)
- [Legge til flere mottakere av e-post](/docs/datadeling/veiledere/api-manager/varsling-for-api-eiere)
