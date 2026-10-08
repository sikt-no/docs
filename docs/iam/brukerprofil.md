---
title: Brukerprofil
---

Gjennom brukergrensesnittet i Felles IAM kan brukerne selv holde deler av sin egen profilinformasjon oppdatert, uten å gå via kildesystem eller brukerstøtte. Endringer brukeren gjør oppdateres direkte i Felles IAM og provisjoneres automatisk videre til målsystemene som bruker informasjonen, for eksempel e-post- og samhandlingsverktøy, adresselister og institusjonens nettsider.

Under finner du beskrivelse av feltene som kan styres direkte:

## Foretrukket visningsnavn

Brukere som ønsker å bruke et annet navn enn det folkeregistrerte, kan få endret fornavn og/eller etternavn. Institusjonen velger én av tre måter å håndtere dette på:

- **Bestillbar rettighet:** Brukeren oppgir ønsket navn i en [bestilling](/docs/iam/tilgangsstyring#bestillbare-rettigheter-tilganger), som godkjennes automatisk eller av leder eller en godkjenningsgruppe.
- **Direkte endring:** Brukeren skriver inn navnet selv i Felles IAM, uten godkjenning.
- **Dedikert gruppe:** Bare en utpekt gruppe kan endre visningsnavn, på vegne av brukeren.

Visningsnavnet provisjoneres til de målsystemene institusjonen ønsker. Målsystemer som krever folkeregistrert navn, for eksempel [Berg-Hansen](/docs/iam/integrasjoner/Berghansen), får alltid navnet fra kildesystemet.

## Foretrukket språk

Brukeren velger foretrukket språk selv gjennom en bestillbar rettighet som godkjennes automatisk. Brukeren kan velge mellom norsk bokmål, norsk nynorsk, engelsk og samisk.

Foretrukket språk provisjoneres til målsystemer som kan ta imot det, for eksempel Feide.

## Foretrukket stillingstittel

Som standard hentes stillingstittelen fra stillingskoden i SAP. Denne betegnelsen er ofte generell og sier ikke alltid så mye om arbeidsoppgavene. Felles IAM støtter derfor to alternativer:

- **Stillingsnavn fra SAP:** Institusjonen kan konfigurere Felles IAM til å bruke feltet «stillingsnavn» i SAP, der stillingens navn kan redigeres. Når feltet har en verdi, brukes den i stedet for stillingstittelen.
- **Bestillbar rettighet:** Brukeren bestiller og oppgir ønsket stillingstittel selv.

Stillingstittelen provisjoneres til de målsystemene institusjonen ønsker, for eksempel Microsoft Teams eller institusjonens nettsider.

## Reservasjon mot publisering på nett

Brukere som ikke ønsker å bli publisert på institusjonens nettsider, kan reservere seg gjennom en bestillbar rettighet. Felles IAM sender da ikke informasjon om brukeren til målsystemer som publiserer på nett, for eksempel institusjonens nettsider.

## Kontor- og Teams-telefoni

Felles IAM kan holde oversikt over institusjonens tilgjengelige telefonnumre og tildele dem automatisk. Brukere som trenger kontortelefon eller telefonnummer i Teams, kan også bestille det gjennom en bestillbar rettighet i selvbetjeningsgrensesnittet. Se også integrasjonen [OfficePhone](/docs/iam/integrasjoner/Officephone).

