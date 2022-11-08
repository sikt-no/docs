---
title: Hjelpespørsmål ved anskaffelser av IT-tjenester
---

Punkt til hjelp i vurderingen av IT-tjenester som enten vil inneholde data som
har potensiale for gjenbruk, eller som trenger data.

IT-tjenesten bør ha et API for å tilgjengeliggjøre sine data:

- Har systemet et åpent grensesnitt?
- Er grensesnittet godt nok dokumentert?
- Integrasjonen må kunne utvikles av hvem som helst, og ikke bare av
  leverandøren av IT-tjenesten. Kan institusjonen styre hvem som får tilgang til
  API-et, eller setter leverandøren begrensninger?
- Støtter tjenesten moderne teknologier og bransjestandarder?
- Er det praktisk mulig å hente ut data fra API-et? Har du brukere av API-et,
  dvs. konsumenter, som kan vurdere dette?
- Er **alle** kildedata tilgjengelige gjennom API-et?
- Har institusjonen tilgang til å **skrive** alle kildedata? Er noe bare
  tilgjengelig gjennom et grafisk grensesnitt (GUI)?
- Hvordan er ytelsen til API-et? Oppetid, responstid?
- Kan systemet gi ut data til alle mulige konsumenter, eller har leverandøren
  begrensinger? For eksempel maks antall spørringer over en periode eller maks
  antall konsumenter.
- Hvis sanntidsoppdateringer er ønskelig: Støtter systemet å sende ut
  notifikasjoner eller andre former for meldinger ved endringer i kildedata?

Hvis sluttbrukere skal logge på tjenesten:

- Støtter tjenesten pålogging med Feide?
- Støtter tjenestens API bruker-integrasjoner eller
  system-til-system-integrasjoner?

Hvis systemet skal provisjoneres:

- Støtter systemet provisjonering via API, eller må data skrives inn manuelt?
  Manuelle dobbelregistreringer må vektlegges tungt negativt, siden det skaper
  ekstraarbeid og dårligere datakvalitet.

- Har systemet egen provisjonering, som kan hente fra andre API, eller må vi
  utvikle dette selv? Hvis ikke bør vurderingen legge på ekstrakostnad ved
  utvikling av kobling for dette.

- Har API-et begrensinger ved skrivetilgang?
  - Noen skytjenester har for eksempel rate-limiting, som kan være et hinder
    ved f. eks. studiestart, når tusenvis av studenter vil måtte registreres på
    kort tid.
- Har systemet noen form for opprydding i gamle data?

Hvis systemet skal brukes som [datalager for andre presentasjonslag](/docs/datadeling/god-praksis/integrasjonsmonster/datalager):

- Støtter API-et OAuth2 mot Feide?
- Kan systemet knytte endringer opp mot riktig bruker?
- Hva er responstiden til API-et? Å bruke et API mot et presentasjonslag setter
  høye krav til ytelsen, siden sluttbrukerne forventer rask respons.
