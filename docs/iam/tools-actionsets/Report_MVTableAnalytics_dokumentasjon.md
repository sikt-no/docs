
# Report_MVTableAnalytics

Kategori: Rapportering / Database Analyse


## Formål

Genererer HTML-rapport med analysestatistikk for MetaVault-tabeller i 
RapidIdentity Database (RIDB). Viser status for prosesseringskøer og 
identifiserer stuck records eller forsinkelser i databehandlingen.

Brukes til:
- Overvåke databasens prosesseringskøer i MetaVault
- Identifisere records som har startet men ikke fullført prosessering
- Troubleshooting av dataintegrasjoner fra kildesystemer (SAP, FS)
- Kapasitetsplanlegging basert på køstørrelse
- Daglig/timebasert overvåking av systemhelse

For hver tabell vises:
- Total: Totalt antall records i tabellen
- Pending: Records som venter på prosessering (processed_on = null)
- Incomplete: Records med process_id satt men ikke fullført (stuck records)

Tabellene som analyseres defineres i global variabel: 
Global.TableAnalyticsTables (kommaseparert liste)


## Hvordan kjøre

Input-parameter:
- include_message_cache (boolean, valgfri, default: false): Inkluder 
  message_queue_cache tabell i rapporten

### Eksempler:
- Report_MVTableAnalytics()                    # Standard (uten message cache)
- Report_MVTableAnalytics(true)                # Inkluder message_queue_cache

ActionSettet kan kjøres manuelt fra RapidIdentity Connect eller scheduleres 
for kontinuerlig overvåking (f.eks. hver 15. minutt).

Typiske tabeller som analyseres:
- employees_load
- positions_load
- master_positions
- master_persons
- message_queue_cache (kun hvis include_message_cache=true)


## Resultat

HTML-rapport genereres og lagres i:
/reports/MVTableAnalytics_[dd-MM-yyyy].html

Rapporten oppdateres kontinuerlig gjennom dagen i append-modus, med ny rad 
per kjøring. Hver rad viser tidsstempel og status for alle konfigurerte 
tabeller.

Rapportinnhold:
- Auto-refresh hvert 60. sekund
- Bootstrap-formatering for responsivt design
- Tabellheader viser alle analyserte tabeller med kolonner:
  * Total: Totalt antall records
  * Pending: Records som venter (processed_on/processed_at = null)
  * Incomplete: Records med process_id men ikke fullført

Fargemarkering:
- RØD: Incomplete records > 0 (indikerer problem som må undersøkes)
- SVART: Normal status

Eksempel output (en rad per kjøring):
Tidsstempel | employees_load (Total/Pending/Incomplete) | positions_load | ...
10:15       | 1523 / 0 / 0                               | 892 / 12 / 2  | ...

Troubleshooting:
- Høyt antall Pending: Prosesseringsjobb kjører ikke eller er overbelastet
- Incomplete records: Stuck records som må frigis eller ryddes manuelt
- message_queue_cache med høye tall: Meldingskø ikke tømt, sjekk processer

Skrevet med hjelp av AI