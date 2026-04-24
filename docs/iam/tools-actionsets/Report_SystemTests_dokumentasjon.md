
# Report_SystemTests (Suite)

Kategori: Rapportering / Datakvalitet og Systemovervåkning
Versjon: v4.0

Daglig systemtest-suite som sjekker RapidIdentity for datakvalitetsproblemer,
konfigurasjonsfeil og driftsmessige avvik. Består av 7 sammenkoblede ActionSets.

KOMPONENTER:
• Report_SystemTests: Hovedmodul som orkestrerer alle tester
• Report_SystemTests_CheckForDoubleAccounts: Duplikatdeteksjon
• Report_SystemTests_CheckLogfiles: Logger warnings/errors
• Report_SystemTests_AddToWhitelist: Whitelist-håndtering
• Report_SystemTests_group_owners: Sjekker gruppeeiere
• Report_SystemTests_SendEmail: HTML-formatering og e-postutsending
• Report_SystemTests_Snippet: Testing/utvikling


## Formål


Daglig overvåkning av RapidIdentity med følgende kontroller:

• BRUKERKONTI
  - Doble konti i kildesystemer (SAP/FS/Greg)
  - Duplikate RI-konti (matching på navn/fødselsdato)
  - Ikke-aktiverte konti og nylig aktiverte konti

• TILGANGER
  - Provisioning-avvik (birthright vs faktisk tilgang)
  - Mismatch mellom R2/R6 (entitled) og R5/R8 (provisioned)

• DRIFT
  - Logfile errors/warnings fra forrige dag
  - Lange kjørejobber (over 2 timer)
  - ActionSet-konfigurasjonsfeil

• ORGANISASJON
  - Manglende/inaktive gruppeeiere
  - Ugyldige passnumre i SAP-data

Brukes til:
- Daglig proaktiv overvåkning
- Identifisere datakvalitetsproblemer før de eskalerer
- Sikre korrekt provisioning til målsystemer


## Hvordan kjøre


### Input-parametere:

• receivers (enum): E-postadresse for mottaker
• sendMail (boolean): true = send e-post, false = kun HTML-fil
• execute (enum): "fast" / "normal" / "full"
  - fast: Hopper over tunge SAP API-kall
  - normal: Standard kjøring (anbefalt)
  - full: Alle kontroller inkl. SAP source verification

### Eksempler:

Standard daglig kjøring
```json
{
Report_SystemTests(
    receivers = "iam-team@sikt.no",
    sendMail = true,
    execute = "normal"
)
}
```

Test uten e-post
- Report_SystemTests(sendMail = false, execute = "fast")

Scheduleres normalt som nattjobb kl 06:00 etter synkroniseringer.


## Resultat


HTML-rapport: /reports/daily_issue_report_`[yyyy-MM-dd]`.html

Rapporten inneholder Bootstrap-formaterte seksjoner med:

1. SYSTEM-ENTITLEMENTS MISMATCH
   - Per system (AD, LDAP, Inspera, etc.)
   - Missing (rød) eller Not deprovisioned (oransje)
   - Brukerinfo med ActionSet-link for re-sync

2. LOGFILE ERRORS
   - Feil fra forrige dag
   - Hierarki: Prosjekt → Logtype → ActionSet
   - CSV-rapport: /reports/Failed_synchronizations.csv

3. DOBLE KONTI
   - Kildesystem-duplikater (SAP/FS)
   - RI-duplikater (navn/fødselsdato)
   - Whitelist-instruksjoner

4. GRUPPEEIERE
   - Status: Disabled / Missing / Not a portal Role Manager

5. ANDRE KONTROLLER
   - Lange kjørejobber (over 2 timer)
   - Ugyldige passnumre
   - Aktiverte konti (siste 3 dager)
   - Ikke-aktiverte konti

Fargekoding:
- Rød: Kritiske problemer
- Oransje: Advarsler
- Grå: Ingen problemer funnet

E-post sendes til receivers + system-spesifikke kontakter.
Sensitiv info (fnr, identifikatorer) sensureres i e-post.


SUBMODULER: KORT BESKRIVELSE


1. CheckForDoubleAccounts
   - Matcher brukere på navn/fødselsdato
   - Søker i master_persons for fnr-kilder
   - Returner: Array med [navn, brukernavn, fødselsdato, identifikatorer]

2. CheckLogfiles  
   - Leser checkLogFiles_history.json
   - Analyser errors og aggregated_messages (siste 1-2 dager)
   - Skriver CSV: /reports/Failed_synchronizations.csv

3. AddToWhitelist
   - Legger brukernavn-par i data/daily_issue_report_whitelist.json
   - Format: `{"double_ri_accounts": {"user1, user2": true}}`
   - Hindrer false positives i duplikatrapporter

4. group_owners
   - Sjekker alle idautoGroup objekter
   - Validerer eiere mot Portal Role/Group Manager
   - Flagg: Disabled / Missing / Not a manager

5. SendEmail
   - Formatter issues som Bootstrap HTML
   - Sensurerer kolonner (fnr, identifikatorer)
   - Sender via FnSendEmail per mottaker

6. Snippet
   - Testmodul for utvikling
   - Subset av hovedmodul-kontroller


FEILSØKING


"History file not found" → Kjør CheckLogFilesForErrors først
Ingen e-post mottatt → Sjekk sendMail=true og receivers
For mange duplikater → Bruk AddToWhitelist
Lange kjøretider → Bruk execute="fast"

Skrevet med hjelp av AI