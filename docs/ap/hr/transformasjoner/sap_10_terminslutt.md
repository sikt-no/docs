# sap_10_terminslutt

## Formål
Henter terminslutt-datoer fra PA0019 for utvalgte `dato_type`-verdier og lagrer siste gyldige terminslutt per institusjon, ansatt og kode.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0019** | Datoer knyttet til ulike terminslutt-typer | `dato_type IN ('20','66','72','79')` | Grunnlagstabell for terminslutt |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **terminslutt_kode** | Direkte mapping fra `dato_type` |
| **dato_terminslutt** | Direkte fra `dato` i PA0019 |
| **rangering** | `ROW_NUMBER()` per ( `ansatt_nummer`, `dato_type`) sortert på `siste_endring_dato DESC` |

## Transformasjonslogikk (PySpark)
### 1. Load source data
Laster `pa0019` fra `silver_sap`.

### 2. Transform data
Filtrerer til `dato_type` i `('20','66','72','79')`, oppretter `terminslutt_kode` og `dato_terminslutt`, og rangerer rader med vindusfunksjon.

### 3. Velg siste registrering
Beholder kun rader med `rangering = 1` for å sikre sist registrerte terminslutt.

### 4. Select final set of columns
Velger endelig kolonneutvalg for måltabellen.

### 5. Write to target
Skriver resultatet til `transformation_hr.sap_10_terminslutt` med `overwrite` og `overwriteSchema`.

## Datointervallgenerering
Ingen datointervallgenerering brukes i denne tabellen (punkt-i-tid-tabell uten `dato_fra`/`dato_til`).