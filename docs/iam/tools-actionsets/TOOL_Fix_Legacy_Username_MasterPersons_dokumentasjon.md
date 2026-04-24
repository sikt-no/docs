
# TOOL_Fix_Legacy_Username_MasterPersons

Kategori: Tools


## Formål


Oppdaterer legacy_username i master_persons-tabellen basert på CSV-fil.

Brukes til:
- Rette opp feil legacy_username i MetaVault (RIDB)
- Masserette brukernavn fra migrasjon eller datakorrigering
- Nullstille process_id og processed_at for reprocessering


## Hvordan kjøre


### Input-parametere:

• log_only (boolean, optional): Kun logging uten å oppdatere databasen

CSV-fil forventes på:
/data/load_fixes/diffLegacy_30_03_2023.csv

CSV-format (semikolonseparert, UTF-8):
- uhid: UH-ID
- NEW_legacy_username: Nytt brukernavn som skal settes

### Eksempler:

Oppdater database
- OOL_Fix_Legacy_Username_MasterPersons()

Test-modus (kun logg SQL)
- TOOL_Fix_Legacy_Username_MasterPersons(log_only = true)


## Resultat


Konsoll-output:

[filnavn] found                     (vellykket filopening)
Updated: [antall]                   (per record i database-modus)
SQL + arrayParams                   (i log_only-modus)

SQL som kjøres:
UPDATE master_persons 
SET legacy_username = ?, 
    process_id = null, 
    processed_at = null 
WHERE uhid = ?

Effekt:
- Setter nytt legacy_username
- Nullstiller process_id og processed_at for å trigge reprocessering i neste sync
- Skipper records hvor uhid mangler

Returverdi: ingen (eller early return ved feil)

Skrevet med hjelp av AI