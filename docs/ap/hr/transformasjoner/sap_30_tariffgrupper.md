# sap_30_tariffgrupper

## Formål
- Tilgjengeliggjøre tariffgrupper som grunnlag for **dim_tariffgruppe** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **pa0008** (silver_sap) | Kilde for tariffgruppe‐kode | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner.  
Tabellen inneholder kun unike rader basert på `tariffgruppe_kode`.

## Transformasjonslogikk
- Leser alle rader fra `silver_sap.pa0008`.
- Plukker ut **DISTINCT tariffgruppe_kode** sammen med metadatafeltene.
- Ingen join, filtrering eller videre transformasjoner.

## Nøkler
- **Primærnøkkel:** `tariffgruppe_kode`