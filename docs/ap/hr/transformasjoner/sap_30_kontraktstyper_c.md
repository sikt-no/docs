# sap_30_kontraktstyper_c

## Formål
Tilgjengeliggjøre kontraktstyper som grunnlag for **dim_kontraktstype_c** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **zeac_kontr_typ_t** | Lookup-tabell for kontraktstyper | Ingen |

## Kalkulerte kolonner
Ingen kalkulerte kolonner – alle felter videreføres direkte fra `zeac_kontr_typ_t`.

| Kolonne | Kilde / Logikk |
|---------|----------------|
| **kontraktstype_c_kode** | Direkte fra kilden |
| **kontraktstype_c_navn** | Direkte fra kilden |
| **zx_institusjonskode** | Tekniske metadata |
| **zx_tidspunkt_lastet** | Tekniske metadata |
| **zx_tidspunkt_bronze** | Tekniske metadata |
| **zx_tidspunkt_silver** | Tekniske metadata |

## Transformasjonslogikk
- En direkte SELECT fra `zeac_kontr_typ_t`.
- Ingen join, filtrering eller intervallbygging.
- Resultatet er en ren referansetabell som brukes i dimensjonsmodellering.

## Nøkler
- **Primærnøkkel:** `kontraktstype_c_kode`