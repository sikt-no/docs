
# Report_Healthchecks

Kategori: Rapportering / Monitoring


## Formål

Kjører helsesjekker av alle systemer i Felles IAM-infrastrukturen og genererer
en HTML-rapport med status. Overvåker tilkobling og funksjonalitet til 
kildesystemer, RapidIdentity-komponenter og målsystemer.

Brukes til:
- Automatisk overvåking av systemhelse
- Identifisere tilkoblingsfeil og systemproblemer
- Verifisere at Identity Bridge og bridges fungerer
- Kontrollere at jobs ikke har hengt seg opp
- Historisk loggføring av feil (siste 7 dager)
- Proaktiv varsling ved problemer


## Hvordan kjøre

Ingen input-parametere kreves.

Start ActionSet direkte fra RI Connect eller schedule som automatisk jobb.

ActionSettet sjekker følgende systemer:
- Kildesystemer: FS API, SAP API, GREG API
- Identity Bridge: Agents (heartbeat) og Bridges (connectivity)
- RapidIdentity: RIDB (Master Vault), Portal LDAP
- Målsystemer: Active Directory, Feide LDAP
- Jobs: Running processes (status og runtime)

Feilhistorikk lagres i /data/healthcheck.csv med timestamp, system og 
feilmelding. Kun feil fra siste 7 dager beholdes.


## Resultat

Genererer HTML-fil: reports/Healthchecks.html

Rapporten viser:
- Last updated: Tidsstempel for siste kjøring
- Source Systems: FS, SAP, GREG med status (grønn/rød)
- Identity Bridge: Per agent og bridge med heartbeat-status
- Running jobs: Prosjekt, jobbnavn, status og runtime
  * Advarsler: Jobs som har kjørt >2 timer eller er i aborting/aborted status
- RIDB & PortalLDAP: Tilkoblingsstatus
- Target Systems: Active Directory, Feide LDAP tilkobling
- Healthcheck errors: Tabell med registrerte feil fra siste 7 dager

Fargekoding:
- Grønn rad: System OK
- Rød rad: Feil/ikke tilgjengelig

Feil logges også til ErrorHandler for integrasjon med Humio/logging-system.

CSV-fil (/data/healthcheck.csv) inneholder:
- timestamp: Når feilen oppstod
- system: Hvilket system som feilet
- error: Feilmelding

Rapporten oppdateres hver gang ActionSet kjøres og gir sanntidsoversikt
over infrastrukturens helse.

Skrevet med hjelp av AI