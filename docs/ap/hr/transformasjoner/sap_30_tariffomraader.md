# Oppsummering – sap_30_tariffomraader

## Formål
- Tilgjengeliggjøre tariffområder som grunnlag for **dim_tariffomraade** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **t510g** (silver_sap) | Kilde for tariffområdekode og beskrivelse | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner.  
Tabellen eksponerer verdier direkte fra T510G.

## Transformasjonslogikk
- Leser alle rader fra `silver_sap.t510g`.
- Returnerer `tariffomraade_kode`, `tariffomraade_navn` og metadatafelter.
- Ingen join, konsolidering eller filtrering.

## Nøkler
- **Primærnøkkel:** `tariffomraade_kode`