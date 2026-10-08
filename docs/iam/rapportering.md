---
title: Rapportering
---

Med tilgangsstyringen samlet i Felles IAM kan institusjonen få oversikt over hvem som har tilgang til hva, og kontrollere at tilgangene er riktige. Rapportering hjelper institusjonen med å oppdage feil tidlig og å dokumentere at lovverk og standarder etterleves.

Felles IAM har tre kilder til rapporter og innsyn:

- **Reports-modulen i RI Portal**, for egne rapporter om brukere og tilganger
- **Report-actionsets**, som jevnlig genererer ferdige rapporter om tilganger, datakvalitet og systemhelse
- **Logger**, som viser feil og endringer på enkeltbrukere og systemer

## Rapporter i RI Portal

Reports-modulen i RI Portal brukes til å lage, kjøre og se rapporter om brukere og tilganger, for eksempel hvem som har en bestemt tilgang. Rapportene bygges opp med en grafisk LDAP-filterkonfigurator, der man velger attributter, operatorer og verdier uten å måtte skrive filtrene selv.

Institusjonen kan lage egne rapporter, og importere ferdige rapporter fra Community. Noen ferdige rapporter deles også med institusjonen og ligger under «Shared with me».

Tilgang til Reports-modulen styres av to [systemroller](/docs/iam/systemroller):

| Rolle | Tilgang |
| --- | --- |
| Portal Reporting Manager | Kan lage, endre og kjøre rapporter, og importere rapporter fra Community. |
| Portal Reporting Viewer | Kan se og kjøre lagrede rapporter. |

Rollene bestilles via institusjonens IAM-koordinator.

Les mer om hvordan Reports-modulen brukes i [Jamf sin dokumentasjon av Reports-modulen](https://learn.jamf.com/r/en-US/jamf-rapididentity-documentation/Reports_Module?tocId=QdKmj64ZDjnzGEp2iOubOg).

## Rapporter fra actionsets

Report-actionsettene genererer ferdige rapporter og er [verktøy](/docs/iam/tools-actionsets) institusjonen kan bruke. Sikt setter opp faste kjøringer av rapportene for alle institusjonene som et utgangspunkt. Institusjonen kan selv justere hvilke rapporter som kjøres og hvor ofte.

| Rapport | Hva den viser |
| --- | --- |
| [Report_SystemTests](/docs/iam/tools-actionsets/Report_SystemTests_dokumentasjon) | Daglig avviksrapport som blant annet sjekker datakvaliteten fra kildesystemene, doble kontoer, avvik mellom tildelte og provisjonerte tilganger, feil i logger, lange kjøringer og relevante endringer i kildesystemene. |
| [Report_Healthchecks](/docs/iam/tools-actionsets/Report_Healthchecks_dokumentasjon) | Status for tilkoblingen til kildesystemer, målsystemer og komponentene i Felles IAM. |
| [Report_PortalAnalytics](/docs/iam/tools-actionsets/Report_PortalAnalytics_dokumentasjon) | Statistikk over brukere og tilganger, fordelt på brukertyper, forretningsroller og målsystemer, og avvik mellom forventet og faktisk provisjonering. |
| [Report_JMLStatsPD](/docs/iam/tools-actionsets/Report_JMLStatsPD_dokumentasjon) | Antall brukere som starter, endrer rolle eller slutter (Joiner-Mover-Leaver), per målsystem over tid. |
| [Report_Entitlements](/docs/iam/tools-actionsets/Report_Entitlements_dokumentasjon) | Oversikt over alle rettigheter, med godkjenningsflyter og hvem som godkjenner. |
| [Report_Group_Members](/docs/iam/tools-actionsets/Report_Group_Members_dokumentasjon) | Medlemmer og eiere i alle grupper og roller, og synkronisering av gruppene til målsystemene. |
| [Report_appRoles10](/docs/iam/tools-actionsets/Report_appRoles10_dokumentasjon) | Alle forretningsroller i bruk, og hvilke roller som ofte forekommer sammen. |
| [Report_MVTableAnalytics](/docs/iam/tools-actionsets/Report_MVTableAnalytics_dokumentasjon) | Status for prosesseringskøene i databasen, og poster som har stoppet opp. |

Rapportfilene lagres i mappen `reports` i Connect-modulen. Eldre rapporter arkiveres eller slettes automatisk av [Report_ManageReportFiles](/docs/iam/tools-actionsets/Report_ManageReportFiles_dokumentasjon). Rapportfilene krever en av Connect-rollene, se [Tools actionsets](/docs/iam/tools-actionsets) for hvem som kan se og kjøre actionsets.

### Daglig avviksrapport på e-post

Avviksrapporten fra Report_SystemTests kan sendes på e-post, slik at avvik oppdages uten at noen må åpne rapportfilen. Hvem som mottar rapporten, bestemmes i en konfigurasjonsfil som institusjonen selv har kontroll over. Sensitive opplysninger, som fødselsnummer, er sensurert i e-posten.
## Logger

Feilmeldinger og endringer på enkeltbrukere (audit) er tilgjengelige i Grafana. Loggene brukes når man trenger å se hva som har skjedd med en bestemt bruker eller et bestemt system. Se [Logger](/docs/iam/logger) for hvordan man får tilgang og søker i loggene.

## Hvilken rapport svarer på hva?

| Spørsmål | Hvor du finner svaret |
| --- | --- |
| Hvem har en bestemt tilgang? | Egen rapport i Reports-modulen i RI Portal |
| Hvilke rettigheter finnes, og hvem godkjenner dem? | Report_Entitlements |
| Hvem er medlem av en gruppe, og hvem eier den? | Report_Group_Members |
| Er det avvik mellom tildelte og provisjonerte tilganger? | Report_SystemTests og Report_PortalAnalytics |
| Finnes det doble kontoer? | Report_SystemTests |
| Fungerer tilkoblingen til kilde- og målsystemene? | Report_Healthchecks |
| Hvor mange brukere starter og slutter over tid? | Report_JMLStatsPD |
| Hva er endret på en bestemt bruker? | Audit-logger i [Grafana](/docs/iam/logger) |
