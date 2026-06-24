# sap_10_stillinger_pa0509
## Datakilder

| **Tabell** | **Formål** | **Filtre som brukes** | **Rolle** |
|----------|-----------|-------------------|---------|
| **PA0509** | Tilleggsstillinger | Ingen (hovedkilde) | Grunnlagstabell som definerer tilleggsstillinger, fungeringer og stedfortredelser med attributter (organisasjonstilhørighet, medarbeidergrupper, lovhjemmel, lønnart, stillingskode) |
| **PA0000** | Saksbehandlinger (actions) | `saksbehandlingstype_kode IN ('90', '95')` | Saksbehandlingstype 90 = Opphør tilleggsstilling-fungering ; 95 = Fungering |
| **PA0001** | Hovedstillingsdata | Ingen | Beriker med lønnsavregningsgruppe fra hovedstilling |
| **PA0302** | Supplerende saksbehandlinger | `saksbehandlingstype_kode IN ('90', '95')` | Saksbehandlingstype 90 = Opphør tilleggsstilling-fungering ; 95 = Fungering |
| **HRP1051** | Yrkeskoder (STYRK) | `objekttype_kode = 'S'`, `planversjon_kode = '10'`, `planleggingsstatus_kode = '1'`, `deltype_kode = 'NOYK'` | Beriker STYRK-kode knyttet til stillingen |
| **T512T** | Lønnartnavn (lookup) | Ingen  | Henter lønnart navn |
| **T530T** | Saksbehandlingsårsaknavn (lookup) | Ingen  | Henter saksbehandlingsårsaker navn for både PA0000 og PA0302 |

# Kalkulerte kolonner

| **Kolonne** | **Formel/Logikk** |
|------------|-------------------|
| **stillingskode** | `SUBSTR(stillingskode, LENGTH(stillingskode)-3, 4)` |
| **type_stilling_kode** | `CASE WHEN LEFT(lonnart_navn, 4) = 'Delt' THEN 'TILL' WHEN LEFT(lonnart_navn, 4) = 'Fung' THEN 'FUNG' WHEN LEFT(lonnart_navn, 5) = 'Stedf' THEN 'STEDF' ELSE '-1' END` |
| **ekstraerverv** | `CASE WHEN lovhjemmel_kode IN ('11','28','65','66') THEN 'Ja' WHEN lovhjemmel_kode IS NULL THEN 'Ukjent' ELSE 'Nei' END` |
| **saksbehandling_90_aarsak_navn** | `aarsak_pa0000_90.saksbehandlingsaarsak_navn` (fra T530T via PA0000 hvor `saksbehandlingstype_kode='90'`) |
| **saksbehandling_95_aarsak_navn** | `aarsak_pa0000_95.saksbehandlingsaarsak_navn` (fra T530T via PA0000 hvor `saksbehandlingstype_kode='95'`) |
| **saksbehandling_supplerende_90_aarsak_navn** | `aarsak_pa0302_90.saksbehandlingsaarsak_navn` (fra T530T via PA0302 hvor `saksbehandlingstype_kode='90'`) |
| **saksbehandling_supplerende_95_aarsak_navn** | `aarsak_pa0302_95.saksbehandlingsaarsak_navn` (fra T530T via PA0302 hvor `saksbehandlingstype_kode='95'`) |


## Datointervallgenerering 
Bygger datointervaller per ansatt og stilling ved å kombinere alle relevante datobrudd i kildetabellene.