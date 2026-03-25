# Oppsummering – sap_30_medarbeiderundergrupper

## Formål
- Tilgjengeliggjøre medarbeiderundergrupper som grunnlag for **dim_medarbeiderundergruppe** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_medarbeiderundergrupper** | Lookup-tabell for medarbeiderundergrupper og avlønningsformer | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner – alle felter videreføres direkte fra `sap_10_medarbeiderundergrupper`.

| Kolonne | Kilde / Logikk |
|---------|----------------|
| **medarbeiderundergruppe_kode** | Direkte fra kilden |
| **medarbeiderundergruppe_navn** | Direkte fra kilden |
| **avlonningsform_kode** | BOT-mapping fra layer 10 |
| **avlonningsform_navn** | BOT-mapping fra layer 10 |
| **zx_institusjonskode** | Tekniske metadata |
| **zx_tidspunkt_lastet** | Tekniske metadata |
| **zx_tidspunkt_bronze** | Tekniske metadata |
| **zx_tidspunkt_silver** | Tekniske metadata |

## Transformasjonslogikk
- En direkte SELECT fra `sap_10_medarbeiderundergrupper`.
- Ingen join, filtrering eller intervallbygging.
- Resultatet er en ren referansetabell som brukes i dimensjonsmodellering.

## Nøkler
- **Primærnøkkel:** `medarbeiderundergruppe_kode`