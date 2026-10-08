---
title: Tools actionsets
---

import DocCardList from '@theme/DocCardList';

Tools er actionsets i Connect-modulen i Rapid Identity. Det er verktøy laget for institusjonene, slik at de kan gjøre oppslag, feilsøking, rapportering og administrative oppgaver i Felles IAM. Tools kjøres primært ved behov, men flere av actionsettene som starter med `Report_` kjøres jevnlig og genererer rapporter som er nyttige for institusjonen.

## Hva vi mener med Tools

Tools er delt inn i grupper, som kjennes igjen på navnet:

- **Query** (`_Query...`) slår opp og viser brukerdata på tvers av RI Portal, Identity Warehouse, RIDB, kildesystemer og målsystemer. De endrer ingen data.
- **Report** (`Report_...`) genererer rapporter, for eksempel om tilganger, gruppemedlemskap, systemhelse og datakvalitet. Se også [Rapportering](/docs/iam/rapportering) for rapportene i RI Portal.
- **TOOL** (`TOOL_...`) er administrative verktøy for blant annet profilering, sammenligning mellom systemer, eksport og massetildeling av tilganger.
- **WFM** (`WFM_...`) håndterer endringer på identiteter, som å slå sammen identiteter, gi nytt brukernavn eller slette identifikatorer. De kalles som regel fra en [bestillbar rettighet](/docs/iam/tilgangsstyring#bestillbare-rettigheter-tilganger).

I tillegg finnes enkelte actionsets for kontoadministrasjon, som sletting av AD-kontoer og korrigering av UH-ID på en Portal-konto.

## Når Tools skal brukes

Tools brukes når det er behov for noe utover det den automatiske prosesseringen gjør, for eksempel:

- Feilsøke en brukerkonto og verifisere at data er synkronisert mellom systemene
- Hente ut rapporter og statistikk
- Rette opp feil, som duplikate identiteter eller feil brukernavn
- Tildele en bestillbar rettighet til mange brukere samtidig
- Tvinge frem ny prosessering av brukere som ikke er riktig provisjonert

Noen tools endrer eller sletter data. Mange av disse har en testmodus (`log_only`) som viser hva som ville skjedd uten å gjøre endringer. Kjør alltid i testmodus først når den finnes.

## Hvem som kan kjøre Tools

Tools kjøres vanligvis fra Connect-modulen i Rapid Identity. Hvem som har tilgang, styres av [systemrollene](/docs/iam/systemroller):

- **Connect Administrator** og **Connect Operator** kan kjøre actionsets.
- **Connect Auditor** kan se og eksportere actionsets og logger, men ikke kjøre dem.

Tilgang til Connect gir tilgang til svært sensitiv informasjon, og bør bare gis til personell som trenger det i arbeidet sitt.

Et actionset kan også knyttes til en [bestillbar rettighet](/docs/iam/tilgangsstyring#bestillbare-rettigheter-tilganger). Da kan en gruppe brukere kjøre actionsettet uten å ha Connect-tilgang. Det kan for eksempel være nyttig for brukerstøtte som trenger å reprosessere en bruker.

## Dokumentasjon for hvert tool

Sidene under beskriver hvert tool, med formål, inndataparametere, eksempler og resultat.

<DocCardList />
