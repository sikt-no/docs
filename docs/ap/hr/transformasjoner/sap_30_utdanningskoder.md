# Oppsummering – sap_30_utdanningskoder

## Formål
- Etablere dimensjonen **dim_utdanningskode** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **T518B** | Kilde for utdanningskoder og tilhørende navn | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner. Alle verdier hentes direkte fra SAP-tabellen T518B.

## Transformasjonslogikk
- Leser rådata om utdanningskoder fra `silver_sap.t518b`.
- Velger relevante kolonner:
  - `utdanningskode`
  - `utdanningskode_navn`
  - metadatafeltene `zx_*`
- Skriver resultatet til `transformation_hr.sap_30_utdanningskoder`.

## Nøkler
- **Primærnøkkel:** `utdanningskode`