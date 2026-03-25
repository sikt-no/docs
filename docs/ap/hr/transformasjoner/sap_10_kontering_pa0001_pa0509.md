# Oppsummering – sap_10_kontering_pa0001_pa0509

## Formål
Henter standard kontering for stillinger fra PA0027. Støtter delt kontering (flere konteringsobjekter med prosent). Brukes for PA0001/PA0509-stillinger med mindre stillingen har overstyrt kontering — da brukes `sap_10_kontering_overstyrt_pa0509`.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0027** | Kontering | `kostnadstype_fordeling_kode = '01'`, `prosent_kontering <> 0` | Grunnlagstabell med konteringsobjekter fordelt på 12 kolonner |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **koststed_kode** | Unpivot via `stack()` fra `koststed_kode_1`–`koststed_kode_12` |
| **delprosjekt_nummer** | Unpivot via `stack()` fra `delprosjekt_nummer_1`–`delprosjekt_nummer_12` |
| **arbeidspakke_bygg_nummer** | Unpivot via `stack()` fra `arbeidspakke_bygg_nummer_1`–`arbeidspakke_bygg_nummer_12` |
| **prosent_kontering** | Unpivot via `stack()` fra `prosent_kontering_1`–`prosent_kontering_12` |

## Transformasjonslogikk (PySpark)

### 1. Load source data
Laster `pa0027` fra `silver_sap`.

### 2. Transform data - Stack/Unpivot
PA0027 har 12 nummererte kolonnesett for kontering. Bruker `stack(12, ...)` for å unpivote alle fire kolonnetyper i én operasjon:
- `koststed_kode_1`–`koststed_kode_12`
- `delprosjekt_nummer_1`–`delprosjekt_nummer_12`
- `arbeidspakke_bygg_nummer_1`–`arbeidspakke_bygg_nummer_12`
- `prosent_kontering_1`–`prosent_kontering_12`

Hver kilderad blir til opptil 12 rader (én per kolonne_nummer).

### 3. Filtrering
- **`kostnadstype_fordeling_kode = '01'`** — kun standard fordelingsnøkkel
- **`prosent_kontering IS NOT NULL AND <> 0`** — fjerner tomme/null-allokeringer
- **Minst ett konteringselement** — fjerner rader hvor alle konteringsfelter er NULL

### 4. Select final columns
Velger og caster kolonner til riktig datatype:
- `koststed_kode`, `delprosjekt_nummer`, `arbeidspakke_bygg_nummer` → `string`
- `prosent_kontering` → `decimal(5,2)`

### 5. Write to target
Skriver resultatet til `transformation_hr.sap_10_kontering_pa0001_pa0509` med `overwrite` og `overwriteSchema`.

## Delt kontering
Tabellen støtter delt kontering (flere rader per ansatt/dato):
- Eksempel: 60% til koststed A, 40% til koststed B
- Sumsjekk mot 100% utføres ikke i denne tabellen