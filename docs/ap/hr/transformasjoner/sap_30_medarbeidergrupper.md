# Oppsummering – sap_30_medarbeidergrupper

## Formål
- Tilgjengeliggjøre medarbeidergrupper som grunnlag for **dim_medarbeidergruppe** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_medarbeidergrupper** | Lookup-tabell for medarbeidergrupper og BOT-definerte tilknytningsformer | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner – alle felter videreføres direkte fra `sap_10_medarbeidergrupper`.

| Kolonne | Kilde / Logikk |
|---------|----------------|
| **medarbeidergruppe_kode** | Direkte fra kilden |
| **medarbeidergruppe_navn** | Direkte fra kilden |
| **tilknytningsform_kode** | BOT-mapping fra layer 10 |
| **tilknytningsform_navn** | BOT-mapping fra layer 10 |
| **zx_institusjonskode** | Tekniske metadata |
| **zx_tidspunkt_lastet** | Tekniske metadata |
| **zx_tidspunkt_bronze** | Tekniske metadata |
| **zx_tidspunkt_silver** | Tekniske metadata |

## Transformasjonslogikk
- En direkte SELECT fra `sap_10_medarbeidergrupper`.
- Ingen join, filtrering eller intervallbygging.
- Resultatet er en ren referansetabell som brukes i dimensjonsmodellering.

## Nøkler
- **Primærnøkkel:** `medarbeidergruppe_kode`