---
image: /prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/teknisk-plattform/figurer/rolf-picture.png
pictureAlt: "Rolf"
pictureCaption: "Rolf"
title: Rolf er et rolleregister, som blant annet brukes av UH-sak (sak og arkiv) for å forvalte personers forretningsroller, som brukes for UH-sak sin tilgangsstyring. "Rolf SA API" er Rolf sitt API som er det som brukes av UH-sak. Rolf driftes av UiO, se nettsidene [Rolf sektorverktøy for systematisk bruk av roller](https://www.uio.no/tjenester/it/adm-app/rolf) for mer informasjon
---

Rolf SA Api er en påkrevd delkomponent i UH-SAK.

## Kom i gang

Kortversjon:

0. Bestill oppsett av Rolf fra UiO, se [Bestill Rolf](https://www.uio.no/tjenester/it/adm-app/rolf/bestill-rolf.html). Du vil få tilsendt en JSON-fil du kan bruke videre for oppsettet.
1. Log inn i Gravitee som administrator.
2. Opprett et nytt API ved å trykke på pluss-knappen nede til høyre.
3. Trykk på "IMPORT"-knappen
4. Velg tilsendt .json fil
5. Trykk på "API out of sync, deploy your API" langs toppen.
   * Her kan du også gjøre evtuelle tilpasninger som skulle samsvare med din organisasjon.
6. Trykk Start API under General - Details
7. Når du er klar, trykk, Publish The API, under General - Details


## Hvordan importere API fra tilsendt json fil

- Opprett et nytt API ved å trykke på pluss-knappen nede til høyre.
![Importere API fra json](/datadeling/img/rolf-new-api_arrow.png)


- Trykk på "IMPORT"-knappen
![Importere API fra json](/datadeling/img/rolf-import-api_arrow.png)

- Trykk på "API out of sync, deploy your API" langs toppen.
- Trykk Start API under General - Details
- Når du er klar, trykk, Publish The API, under General - Details
![Importere API fra json](/datadeling/img/rolf-start-api_arrow.png)

## Opprette en API Application

.::.TODO
