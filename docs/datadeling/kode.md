---
slug: /datadeling/kode
title: Kode som bruker IntArk
---

Kode for å hjelpe deg i gang med IntArk.

## Enkle eksempler

- Du kan laste ned ferdig python-kode for å produsere og hente notifikasjoner
  for din applikasjon fra IntArks Selvbetjeningstjeneste for meldingskøer.
  Disse filene er ferdig satt opp med detaljer som hostname og navn på kø.
- [Enkel publisering av notifikasjoner for meldingskø (python)](/datadeling/publisering_simpel.py)
- [Enkel konsumering av notifikasjoner fra meldingskø (python)](/datadeling/konsument_simpel.py)
- [Se også RabbitMQ sine mer generelle introduksjoner, for ulike programmeringsspråk](https://www.rabbitmq.com/getstarted.html)

## Eksisterende tjenester

Eksisterene IntArk-kompatible tjenester som du kan se koden til og hente
inspirasjon fra:

- **Canvas-integrasjon** - En hendelsesbasert oppdatering av Canvas basert på
  notifikasjoner og data fra Felles Studentsystem, SAP og IGA. Denne er i bruk
  på UiO. Se [Designdokument for
  Canvas-integrasjonen](https://www.usit.uio.no/om/organisasjon/bnt/usitint/faglig/designdokumenter/designdokument-canvas-ms.html)
  for en overordnet forklaring på hva integrasjonen gjør.

- **TOFH** - Motor for å ta imot IntArk-notifikasjoner og reagere på disse.
  Denne brukes som en sentral komponent i flere mikrotjenester. Koden er
  skrevet i python. [Kode for TOFH i UiB sin
  gitlab](https://git.app.uib.no/it-bott-integrasjoner/tofh)

- **Kalenderdata** - Tjeneste som oppdaterer studenters og fagpersoners
  Exchange-kalendre med studieelementer, basert på notifikasjoner og data fra
  Felles Studentsystem og TP. Denne er i bruk på UiO og andre institusjoner. Se
  [Designdokument for
  Kalenderdata](https://www.usit.uio.no/om/organisasjon/bnt/usitint/faglig/designdokumenter/designdokument-kada.html)
  for en overordnet forklaring på hva integrasjonen gjør.

## Se også

- [Oversikt over BOTT-INTs integrasjoner for 2020-2021](https://www.bott-samarbeidet.no/fagsamarbeid/it-bott/prosjekter/it-bott-integrasjoner/integrasjoner/). Disse er laget på bestilling av prosjekt BOTT Økonomi og lønn, og et krav er at de skal følge IntArk.
- [Oversikt over den tekniske plattforme](/docs/datadeling/teknisk-plattform/oversikt), for tilkoblingsdetaljer i IntArk.
- [Universitetet i Oslo på Github](https://github.com/unioslo). Mer kode er
  tilgjengelig ved å henvende deg til integrasjon@uio.no.
