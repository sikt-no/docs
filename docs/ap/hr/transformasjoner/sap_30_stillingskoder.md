# sap_30_stillingskoder

## Formål
- Tilgjengeliggjøre stillingskoder som grunnlag for **dim_stillingskode** i Analyseplattformen.
- Baseres på manuelt vedlikeholdt kodeverk med utgangspunkt i DBHs stillingsregister.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **stillingskoder** (silver_sap) | Manuelt kodeverk for stillingskoder basert på DBH-register | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner – alle felter videreføres direkte fra `silver_sap.stillingskoder`.

- `sap_30_stillingskoder` er per nå en 1:1-kopi av kildetabellen.

## Transformasjonslogikk
- En ren `SELECT t.*` fra `silver_sap.stillingskoder`.
- Ingen join, filtrering, mapping eller datointervallgenerering.
- Kommentar fra implementasjon:  
  > Inntil videre bare laget rett mot grunntabellen. Dette må endres i Databricks.

Tabellen fungerer dermed som et midlertidig speil av det manuelle kodeverket inntil videre modellering/foredling etableres.

## Nøkler
- **Primærnøkkel:** `stillingskode`