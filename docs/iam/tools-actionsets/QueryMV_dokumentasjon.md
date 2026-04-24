
# _QueryMV

Kategori: Query / Master Vault


## Formål

Spør opp data fra RIDB (Master Vault) tabeller. Gir tilgang til alle master-
tabeller og load-tabeller for ansatte, studenter, organisasjoner og roller.

Brukes til:
- Rask ad-hoc spørring mot Master Vault uten SQL-klient
- Verifisering av data i master_persons, master_identifiers, master_positions etc.
- Debugging av datainnlasting fra kildesystemer (employees_load, students_load)
- Kontroll av meldingskøer (message_queue_cache, message_queue_errors)
- Eksport av tabelldata til CSV for analyse


## Hvordan kjøre

### Input-parametere:
- table (enum, påkrevd): Tabellnavn fra Master Vault
  * Master-tabeller: master_persons, master_identifiers, master_positions, 
    master_contracts, master_loa, master_orgs, master_studyrights, 
    master_studentassessments, master_roles, etc.
  * Load-tabeller: employees_load, students_load, positions_load, 
    contracts_load, orgs_load, roles_load, etc.
  * Kø-tabeller: message_queue_cache, message_queue_errors, 
    message_queue_history, message_queue_future_dated

- limit (string, valgfri): Maks antall records (default: 1000)
- filter (string, valgfri): WHERE clause uten "WHERE" keyword
- distinct (boolean, valgfri): Bruk DISTINCT i SELECT
- write_to_file (boolean, valgfri): Skriv Resultater til CSV-fil

### Eksempler:
- _QueryMV("master_persons")
- _QueryMV("master_persons", "10")
- _QueryMV("master_persons", "100", "uhid='3ddf4822-77ed-4c27-909e-7c826ca10423'")
- _QueryMV("master_identifiers", "50", "source_institution='uio'")
- _QueryMV("employees_load", "1000", "", false, true)

## Resultat

Viser data i logger:
- SQL-spørring som kjøres (brun farge)
- Antall records funnet
- Tabell med Resultater (hvis >1 record) eller enkeltoppføring
- Total record count for tabellen

Hvis write_to_file=true:
- Skriver CSV-fil til /reports/SE_QueryMV_asTable_`<tabellnavn>_<dato>`.csv
- Filnavn vises i logger
- CSV-format med semikolon (;) som separator
- Inkluderer header med kolonnenavn

Returnerer: results array (returnsValue=true)

Uten table-parameter: Viser liste over alle tilgjengelige tabeller i databasen.

Skrevet med hjelp av AI