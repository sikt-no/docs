---
title: Integrasjoner
---

import DocCardList from '@theme/DocCardList';

Integrasjoner i Felles IAM er koblingene som sørger for at brukerkontoer og brukerdata holdes oppdatert i institusjonens målsystemer. Hver integrasjon er et actionset i Rapid Identity som henter brukerdata fra Portal LDAP, gjør nødvendige transformasjoner og provisjonerer brukerne videre til målsystemet.

Felles IAM har mange ferdigstilte integrasjoner som kan tas i bruk av både eksisterende og nye institusjoner.

## Hva en integrasjon gjør

En integrasjon håndterer hele livssyklusen til brukeren i målsystemet:

- Oppretter nye brukerkontoer
- Oppdaterer eksisterende kontoer når brukerdata endres
- Tildeler roller og tilganger i målsystemet, der integrasjonen støtter det
- Deaktiverer, arkiverer eller sletter kontoer når brukeren ikke lenger skal ha tilgang

Hvilke brukere som provisjoneres til et målsystem, styres av [forretningsroller](/docs/iam/forretningsroller) og [bestillbare rettigheter](/docs/iam/tilgangsstyring#bestillbare-rettigheter-tilganger).

De fleste integrasjonene kommuniserer med målsystemet via API, for eksempel REST, GraphQL eller SOAP. Andre kobler seg direkte til målsystemet via LDAP eller databasetilkobling, eller genererer filer, for eksempel CSV eller XML, som overføres via SFTP.

## Tilbakeskriving

Noen integrasjoner går motsatt vei og skriver data tilbake til kildesystemene. [WritebackToFS](/docs/iam/integrasjoner/Writebacktofs) og [WritebackToDFO](/docs/iam/integrasjoner/Writebacktodfo) oppdaterer blant annet brukernavn og e-postadresse i FS og DFO, slik at kildesystemene har de samme identifikatorene som Felles IAM.

## Nye integrasjoner

Som oftest utvikles nye integrasjoner når en institusjon tas inn i Felles IAM og har målsystemer som det ikke allerede finnes en integrasjon mot. Integrasjonen utvikles da som en del av innføringsprosjektet, og blir deretter tilgjengelig for alle institusjonene.

Vi utvikler også nye integrasjoner basert på innspill fra institusjonene. Kostnaden for en slik integrasjon avhenger av om den er unik for én institusjon, eller om flere institusjoner ønsker den.

## Vedlikehold

Integrasjonene vedlikeholdes og oppdateres jevnlig. Når det skjer endringer i et målsystem, eller når det er ønske om ny funksjonalitet, oppdaterer vi integrasjonen, og oppdateringen kommer alle institusjonene som bruker den til gode. Behovet for vedlikehold fanger vi opp både selv og gjennom innspill fra institusjonene.

## Dokumentasjon for hver integrasjon

Sidene under beskriver hver integrasjon, med inndataparametere, variabler og logikk for provisjonering og deprovisjonering.

<DocCardList />
