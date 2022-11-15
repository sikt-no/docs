---
title: Hva er IntArk i praksis, for utviklere
---

Hva du som utvikler trenger å vite om IntArk, enten du lager integrasjoner
eller tjenester. Dokumentet fordrer at du har lest det mer generelle [Hva er
IntArk](https://www.uninett.no/Intark).

## Hva er IntArk for meg som utvikler?

IntArk består av en del overordnede føringer for hvordan vi skal dele data i
sektoren, og noen tekniske verktøy for å gjøre dette enklere. Meningen med
IntArk er å gjøre det enklere å dele data i sektoren, for å enklere kunne
digitalisere.

For deg som utvikler finner du det mest praktiske i:

- Du må registrere dine API i institusjonens API manager, og styre data via
  institusjonen API gateway.
- Du må få tilgang til andre sine API via institusjonens API manager.
- Du kan få tilgang til notifikasjoner fra kildesystemer du har tilgang til.

Merk at du må også forholde deg til føringene fra IntArk, spesielt hvis du utvikler på en tjeneste som inneholder data som andre vil kunne bruke.

## Hva må jeg gjøre i praksis?

Du som utvikler kildesystemer må:

- Tilgjengeliggjøre dine data via [et API som følger anbefalingene fra IntArk](/docs/datadeling/god-praksis/api-design).
- Dokumentere ditt API. F.eks. med OpenAPI (swagger).
- Produsere [notifikasjoner som følger anbefalingene fra IntArk](/docs/datadeling/god-praksis/notifikasjonsdesign).
- Registrere ditt API i [institusjonens API manager](/docs/datadeling/teknisk-plattform/oversikt).

Som konsument må du:

- Finne og søke om tilgang til data fra kildesystemer. Tilganger og data skal gå gjennom institusjonens API manger og API gateway.

## Hva du må tenke på

IntArk setter noen føringer for integrasjoner, slik at vi enklere kan samarbeide om integrasjoner og datadeling. Noen føringer vil kunne gjøre det vanskeligere for enkelte, selv om det er til nytte for sektoren som helhet.

Noen eksempler på føringer fra IntArk:

- Du må være bevisst på dine data. Hvis ditt system inneholder data, må de defineres et felles sted i din institusjon, så andre kan finne de.
  - Hvis du trenger noen data, må du først sjekke om dette, eller noe tilsvarende, finnes i andre kildesystemer. Prioriter gjenbruk av data. Hvis det finnes tilsvarende data andre steder, men ikke kan brukes for eksempel grunnet for dårlig datakvalitet, plikter du å informere gitt dataeier om dette. Å produsere nye, tilnærmet like data, vil kunne skape forvirring og ekstraarbeid for institusjonen senere.
- Alle kildesystem må ha konkretisert en dataeier, som har ansvaret for å tilgjengeliggjøre data. Dette kan ofte vere den samme som tjenesteeier.
- Alle kildesystem er pliktige til å gjøre sine data tilgjengelige via et API. Det finnest føringer og anbefalinger rundt utforming av API, bruk av bransjestandarder, og beste praksis rundt bruk av protokoller.
- Kildesystem skal ikke utvikle skreddersøm per konsument, men er pliktig til å eksponere sine data i et mest mulig generelt grensesnitt. Konsumerende tjenester er selv ansvarlige for sin forretningslogikk.
- Som konsument kan du kreve tilgang til data fra andre kildesystemer, så lenge du har et reelt behov, men du kan ikke kreve spesialtilpasninger.
