---
slug: /datadeling/teknisk-plattform/
title: IntArk sin tekniske plattform
sidebar_position: 1
---

IntArk sin tekniske plattform hjelper deg med integrasjonsarbeidet, og utvides
ved behov. Verktøyene bygger på de [funksjonelle komponentene i
IntArk](/docs/datadeling/om/komponenter).

## API manager

![Gravitee](/datadeling/img/gravitee-logo.png)

### Administrasjon av dine API og tilganger

Vi bruker [Gravitee](/docs/datadeling/teknisk-plattform/gravitee) som API
Manager, og hver institusjon får sin egen, isolerte Gravitee-instans.

Mer detaljer om API manager:

- [Hvordan vi bruker Gravitee](/docs/datadeling/teknisk-plattform/gravitee)
- [Tekniske detaljer](/docs/datadeling/teknisk-plattform/oversikt)

[Veiledere for API manager](/docs/datadeling/veiledere):

- [Veileder for å komme i gang med IntArk](/docs/datadeling/veiledere/innforing)
- [Veileder for å registrere et API](/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api)
- [Veileder for å søke om tilgang til API](/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang)

## API Gateway

![Gravitee](/datadeling/img/gravitee-logo.png)

### Tilgangskontroll for dine API

API gateway er en proxy for ditt API, som brukes for tilgangskontroll og
logging. API gateway styres av API manager. Teknisk sett er dette to separate
komponenter i samme produkt.

Vi bruker [Gravitee](/docs/datadeling/teknisk-plattform/gravitee) som API
Gateway.

- [Tilkoblingsdetaljer](/docs/datadeling/teknisk-plattform/oversikt)

## Selvbetjeningsportal for RabbitMQ

![BROM](/datadeling/img/brom.svg "Logo for BROM er laget av Freepik fra www.flaticon.com")

### Administrasjon av tilgang til dine meldinger

En enkel selvbetjening foran RabbitMQ, så datatilbydere og konsumenter kan selv forvalte sine tilganger til notifikasjoner.

- [Mer detaljer om Selvbetjeningsportalen for RabbitMQ](/docs/datadeling/teknisk-plattform/brom)
- [Veileder for å registrere din tjeneste i selvbetjeningsportalen](/docs/datadeling/veiledere/meldingsk%C3%B8/opprett-tjeneste)

## Meldingskø

![RabbitMQ](/datadeling/img/rabbitmq-logo.png)

### Håndtering av dine meldinger

RabbitMQ ser til at meldinger, spesielt
[notifikasjoner](/docs/datadeling/begreper/notifikasjon), leveres mellom
tjenester. Dette brukes blant annet i integrasjonsmønsteret [hendelsesbasert
provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert).

Bruk helst [Selvbetjeningsportalen for
RabbitMQ](/docs/datadeling/teknisk-plattform/brom) for å administrere dine
tjenester og tilganger. RabbitMQ krever mer teknisk innsikt å bruke, og i
tillegg hjelper Selvbetjeningsportalen deg å sette opp meldingskøer på en
standard måte.

- [Tilkoblingsdetaljer](/docs/datadeling/teknisk-plattform/oversikt)

## Konnektorer

Jo flere som følger IntArk for sine integrasjoner, jo mer IntArk-kompatible
konnektorer kan gjenbrukes av andre. Se [kodeeksempler](/docs/datadeling/kode)
og [erfaringsdelingen](/docs/datadeling/erfaringer).
