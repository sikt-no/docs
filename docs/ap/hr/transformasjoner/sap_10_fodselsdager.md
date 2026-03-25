# sap_10_fodselsdager

## Formål
Genererer en liste over alle fødselsdager for hver ansatt fra 1990 til neste år. Brukes til å skape datobrudd i `sap_20_stillinger*` slik at alder beregnes korrekt i alle datointervaller.

## Datakilde
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0002** | Persondata | `DISTINCT` på `ansatt_nummer` og `dato_fodt` | Grunnlagstabell med fødselsdatoer |


## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **dato_fodselsdag** | `add_months(dato_fodt, (aar - year(dato_fodt)) * 12)` — Beregner fødselsdagen for hvert år i perioden 1990 til neste år |

## Transformasjonslogikk (PySpark)
### 1. Load source data
Laster `pa0002` fra `silver_sap`.

### 2. Create unique list of birth dates
Henter `DISTINCT` kombinasjoner av `ansatt_nummer` og `dato_fodt` fra PA0002.

### 3. Create year dimension
år fra 1990 til neste år.

### 4. Transform data
Cross join unike fødselsdatoer med årsdimensjon og beregner fødselsdagen for hvert år.

### 5. Write to target
Skriver resultatet til `transformation_hr.sap_10_fodselsdager` med `overwrite` og `overwriteSchema`.