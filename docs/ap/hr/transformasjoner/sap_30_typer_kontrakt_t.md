# Oppsummering – sap_30_typer_kontrakt_t

## Formål
Tilgjengeliggjøre kontraktstyper som grunnlag for **dim_type_kontrakt_t** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **zeac_asgn_type_t** | Lookup-tabell for kontraktstyper | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner – alle felter videreføres direkte fra `zeac_asgn_type_t`.

| Kolonne | Kilde / Logikk |
|---------|----------------|
| **type_kontrakt_t_kode** | Direkte fra kilden |
| **type_kontrakt_t_navn** | Direkte fra kilden |
| **zx_institusjonskode** | Tekniske metadata |
| **zx_tidspunkt_lastet** | Tekniske metadata |
| **zx_tidspunkt_bronze** | Tekniske metadata |
| **zx_tidspunkt_silver** | Tekniske metadata |

## Transformasjonslogikk
- En direkte SELECT fra `zeac_asgn_type_t`.
- Ingen join, filtrering eller intervallbygging.
- Resultatet er en ren referansetabell som brukes i dimensjonsmodellering.

## Nøkler
- **Primærnøkkel:** `type_kontrakt_t_kode`