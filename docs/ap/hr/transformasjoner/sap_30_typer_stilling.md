# sap_30_typer_stilling

## Formål
- Tilgjengeliggjøre kodeverk for **type stilling** som grunnlag for analyser og dimensjoner i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **Hardkodet datasett** | Midlertidig kilde til type_stilling-kodeverk | Ingen (manuelt definert) |

## Kalkulerte kolonner
Ingen kalkulerte kolonner.  
Tabellen består av statiske, hardkodede verdier.

## Transformasjonslogikk
- Oppretter en statisk DataFrame med følgende verdier:

| type_stilling_kode | type_stilling_tekst | sortering |
|---------------------|---------------------|-----------|
| HOVED | Hovedstilling | 1 |
| TILL | Tilleggsstilling | 2 |
| STEDF | Stedfortredergodtgjørelse | 3 |
| FUNG | Fungering over 2 år | 4 |
| XT1  | Overlappende timekontrakt TOA | 5 |

- Legger på metadatafelter:
  - `zx_institusjonskode`
  - `zx_tidspunkt_lastet`
  - `zx_tidspunkt_bronze`
  - `zx_tidspunkt_silver`
- Skriver resultatet til `transformation_hr.sap_30_typer_stilling`.

## Nøkler
- **Primærnøkkel:** `type_stilling_kode`