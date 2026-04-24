
# Report_JMLStatsPD

Kategori: Rapportering / Analyse


## Formål

Analyserer PortalAnalytics historiefiler og beregner JML-transaksjoner 
(Joiner-Mover-Leaver) på tvers av systemer og tid. Genererer statistikk 
over provisjoneringsaktivitet fordelt på aktive/inaktive brukere og 
system entitlements.

Brukes til:
- Måle provisjoneringsvolum over tid
- Beregne daglige JML-transaksjoner per målsystem
- Identifisere trender i brukeraktivitet (aktive vs inaktive)
- Rapportering av systembelastning
- Kapasitetsplanlegging basert på historiske data
- Analyse av entitlement-distribusjon


## Hvordan kjøre

Input-parametere (alle valgfrie):

- log_date (string): Dato for analyse i format yyyy-MM-dd
  * Default: Gårsdagens dato
  * Eksempel: "2026-01-06"

- write_to_file (boolean): Skriv resultater til CSV-fil
  * Default: false
  * Når true: Genererer /reports/JMLStatsPD_YYYYMMDD.csv

- debug (boolean): Aktiverer debug-logging
  * Default: false
  * Viser detaljert informasjon under prosessering

Eksempler:
- Report_JMLStatsPD()
- Report_JMLStatsPD("2026-01-06", true, false)
- Report_JMLStatsPD(undefined, true)

ActionSettet leser fra /reports/.history/PortalAnalytics og analyserer
HTML-filer med provisjoneringsstatistikk per tidspunkt.


## Resultat

I logger:
- Antall dager analysert (blå farge)
- Total volum per system (blå farge)
- Hvis debug=true: Detaljert prosessering per tidspunkt

CSV-fil (hvis write_to_file=true): /reports/JMLStatsPD_YYYYMMDD.csv

CSV-format:
- date: Dato for statistikken
- active: Antall transaksjoner for aktive brukere
- inactive: Antall transaksjoner for inaktive brukere
- [System 1-N]: Antall transaksjoner per system entitlement

Kolonner per system kan inkludere:
- Active Directory
- Feide LDAP
- Portal LDAP
- Office 365
- Inspera
- Andre tilkoblede målsystemer

Beregningslogikk:
- Analyserer differanse mellom datapunkter
- Summerer endringer per system over hele dagen
- Skiller mellom aktive og inaktive brukere
- Aggregerer totaler på tvers av alle tidspunkter

Resultatet gir innsikt i provisjoneringsaktivitet og kan brukes til
trendanalyse, kapasitetsplanlegging og systemovervåking.

Skrevet med hjelp av AI