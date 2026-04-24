
# REPORT_DBTableSize

Kategori: Report / Database Analytics


## Formål

Henter størrelsesinformasjon for alle tabeller i RIDB (Master Vault) databasen
og rapporterer dataene til Identity Warehouse (IdW) for analyse og overvåking.
Samler metadata om tabellstørrelser, radantall, indexer og diskbruk.

Brukes til:
- Overvåking av databasevekst over tid
- Identifisere tabeller som vokser raskt
- Kapasitetsplanlegging for database
- Ytelsesanalyse og optimalisering
- Sentralisert innsamling av databasemetrikker til IdW
- Historisk analyse av databasestørrelser


## Hvordan kjøre

ActionSet har ingen input-parametere og kjøres uten argumenter.

Eksempel:
REPORT_DBTableSize()

ActionSet kjøres typisk som scheduled job for periodisk rapportering.


## Resultat

Samler og sender følgende informasjon til IdW:

1. DATABASESPØRRING
   Henter data fra sys.dm_db_partition_stats for alle tabeller:
   - Schema name: Database schema (f.eks. dbo)
   - Table name: Tabellnavn
   - Row count: Antall rader i tabellen
   - Reserved: Total diskplass reservert (KB)
   - Data: Diskplass brukt av data (KB)
   - Index size: Diskplass brukt av indekser (KB)
   - Unused: Ubrukt reservert diskplass (KB)

2. DATASTRUKTUR
   Bygger JSON-objekt med:
   - institution: Global.institution (institusjonskode)
   - `<tabellnavn>: <radantall>` for hver tabell
   
   ### Eksempel:
   `{
     "institution": "uib",
     "master_persons": 15000,
     "master_identifiers": 25000,
     "master_positions": 8000,
     ...
   }`

3. API-KALL TIL IDW
   Sender data til Identity Warehouse:
   - Endpoint: Global.idwBaseUrl + "data/db_usage?trace=true"
   - Method: HTTP POST
   - Auth: Basic Authentication (Global.idwKey:Global.idwSecret)
   - Content-Type: application/json

Viser objekt i logger med lilla farge før sending.
Returnerer: HTTP response object (returnsValue=true)

FEILHÅNDTERING:
Hvis databasespørring feiler, returneres error-objekt med:
- ERROR_NUMBER
- ERROR_SEVERITY
- ERROR_STATE
- ERROR_MESSAGE

Data samles inn fra top 1000 tabeller, sortert etter størrelse (reserved space).

Skrevet med hjelp av AI