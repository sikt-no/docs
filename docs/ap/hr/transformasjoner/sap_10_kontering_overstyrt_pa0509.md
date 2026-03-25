# Oppsummering – sap_10_kontering_overstyrt_pa0509

## Formål
Henter overstyrt kontering for tilleggsstillinger basert på ASSHR og ASSOB. Brukes når det er satt overstyrt kontering (infotype 0509) i SAP.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **ASSHR** | HR-tilordninger | `infotype_kode = '0509'` | Grunnlagstabell med datointervaller for overstyrt kontering |
| **ASSOB** | Konteringsobjekter | Ingen | Beriker med koststed, delprosjekt og arbeidspakke/bygg |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **prosent_kontering** | `lit(1).cast("decimal(5,2)")` — settes til 1 (100%) siden ASSHR/ASSOB ikke har delt kontering |

## Transformasjonslogikk (PySpark)

### 1. Load source data
Laster `asshr` fra `silver_sap` filtrert på `infotype_kode = '0509'` og `assob`.

### 2. Join ASSHR med ASSOB
Joiner ASSHR med ASSOB på:
- `ansatt_nummer`
- `pd_sekvens_nummer`

Henter konteringsinformasjon:
- `koststed_kode`
- `delprosjekt_nummer`
- `arbeidspakke_bygg_nummer`

### 3. Select final columns
Filtrerer ut rader hvor `pd_sekvens_nummer` er NULL og velger:
- `ansatt_nummer`
- `dato_fra`, `dato_til`
- `koststed_kode`, `delprosjekt_nummer`, `arbeidspakke_bygg_nummer`
- `prosent_kontering` (hardkodet til 1)
- Metadata-kolonner (`zx_*`)

### 4. Write to target
Skriver resultatet til `transformation_hr.sap_10_kontering_overstyrt_pa0509` med `overwrite` og `overwriteSchema`.