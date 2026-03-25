# sap_30_fravaerstyper

## Formål
- Etablere dimensjonstabellen **dim_fravaerstype** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_fravaerstyper** | Grunnlagstabell for fraværstyper | Ingen |

## Behandling
- Leser alle rader direkte fra **sap_10_fravaerstyper**.
- Ingen transformasjoner, filtrering eller berikelse.
- Hele datasettet skrives til **sap_30_fravaerstyper** uendret, men med standard metadatafelter.

## Nøkler
- **fravaerstype_kode**