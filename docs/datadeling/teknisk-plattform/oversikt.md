---
description: Oversikt over tjenester og tilkoblinger i IntArks tekniske plattform.
title: Oversikt over den tekniske plattformen
sidebar_position: 2
---

# Oversikt over den tekniske plattformen

Oversikt over tjenester og tilkoblinger i IntArks tekniske plattform.

## Lenker per institusjon

Hver institusjon har sin egen instans av verktøyene, med egen URL. Adressene er
like mellom institusjonene, bare med institusjonens forkortelse som forskjell.

| Institusjon            | API manager                           | API gateway                          | Meldingskø                         | Selvbetjening for meldinger             |
| ---------------------- | ------------------------------------- | ------------------------------------ | ---------------------------------- | --------------------------------------- |
| NTNU                   | https://api-ntnu.intark.uh-it.no    | https://gw-ntnu.intark.uh-it.no    | amqps://mq-ntnu.intark.uh-it.no    | https://brom-ntnu.intark.uh-it.no    |
| Universitetet i Bergen | https://api-uib.intark.uh-it.no     | https://gw-uib.intark.uh-it.no     | amqps://mq-uib.intark.uh-it.no     | https://brom-uib.intark.uh-it.no     |
| Universitetet i Oslo   | https://api-uio.intark.uh-it.no     | https://gw-uio.intark.uh-it.no     | amqps://mq-uio.intark.uh-it.no     | https://brom-uio.intark.uh-it.no     |
| Universitetet i Tromø  | https://api-uit.intark.uh-it.no     | https://gw-uit.intark.uh-it.no     | amqps://mq-uit.intark.uh-it.no     | https://brom-uit.intark.uh-it.no     |
| OsloMet                | https://api-oslomet.intark.uh-it.no | https://gw-oslomet.intark.uh-it.no | amqps://mq-oslomet.intark.uh-it.no | https://brom-oslomet.intark.uh-it.no |
| HiMolde                | https://api-himolde.intark.uh-it.no | https://gw-himolde.intark.uh-it.no | amqps://mq-himolde.intark.uh-it.no | https://brom-himolde.intark.uh-it.no |

## Gravitee

- API-katalog (brukergrensesnittet for å finne API og søke om tilgang) har
  adressen: `https://api-INSTITUSJON.intark.uh-it.no`
- API manager (brukergrensesnittet for å administrere API og tilganger) har
  adressen: `https://api-mgmt-INSTITUSJON.intark.uh-it.no`
- API gateway (der konsumentene henter data fra) har adressen:
  `https://gw-INSTITUSJON.intark.uh-it.no`
- HTTPS er alltid påkrevd
- Hver institusjon er isolert fra hverandre. Trenger du data fra en annen
  institusjon må du søke om tilgang i deres API manager, og koble deg til deres
  API gateway.

## Selvbetjeningsportalen for RabbitMQ

- Brukergrensesnittet har adressen: `https://brom-INSTANS.intark.uh-it.no`
- Selvbetjeningsportalen administrerer RabbitMQ for deg. Applikasjoner snakker
  med RabbitMQ direkte.

## RabbitMQ

- Protokoll: AMQPS (AMQP med kryptering)
- Port: 5671
- TLS med SNI er påkrevd
- Meldingskøene er tilgjengelig på adressen: `mq-INSTANS.intark.uh-it.no`
- Brukergrensesnittet har adressen
  `https://mg-mgmt-INSTITUSJON.apps.CLUSTERFARGE.intark.uh-it.no`, der
  `CLUSTERFARGE` varierer, og kan for eksempel være "`green`" eller "`blue`".
  Instansen bytter cluster ved oppgraderinger. Du anbefales å heller bruke
  selvbetjeningsportalen.

## Annet

- Teknisk plattform kjører i NREC. For IP-detaljer, se de [tekniske detaljene
  om IntArk-plattformen](/docs/datadeling/teknisk-plattform/oversikt), og [NREC
  sin oversikt over
  subnett](https://iaas.readthedocs.io/team/installation/ip.html).
