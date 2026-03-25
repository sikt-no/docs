# Oppsummering – sap_30_tarifftyper

## Formål
- Tilgjengeliggjøre tarifftyper som grunnlag for **dim_tarifftype** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **t510a** (silver_sap) | Kilde for tarifftypekode og tilhørende navn | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner.  
Alle verdier leses direkte fra T510A.

## Transformasjonslogikk
- Leser alle rader fra `silver_sap.t510a`.
- Returnerer `tarifftype_kode`, `tarifftype_navn` og metadatafelter.
- Ingen join, konsolidering eller filtrering.

## Nøkler
- **Primærnøkkel:** `tarifftype_kode`