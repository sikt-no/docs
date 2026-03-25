# Oppsummering – sap_30_lovhjemler

## Formål
- Tilgjengeliggjøre lovhjemler som benyttes i SAP som grunnlag for **dim_lovhjemmel** i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **T542T** | Lovhjemmeltekster (SAP-standard) | Begrenset til relevant landkode (`MOLGA = '20'`) i kildeuttrekket |

## Kalkulerte kolonner
Ingen kalkulerte kolonner – alle felter leses direkte fra T542T.

| Kolonne | Kilde / Logikk |
|---------|----------------|
| **lovhjemmel_kode** | Direkte fra `T542T.lovhjemmel_kode` |
| **lovhjemmel_beskrivelse** | Direkte fra `T542T.lovhjemmel_beskrivelse` |
| **zx_institusjonskode** | Tekniske metadata fra kilden |
| **zx_tidspunkt_lastet** | Tekniske metadata fra kilden |
| **zx_tidspunkt_bronze** | Tekniske metadata fra kilden |
| **zx_tidspunkt_silver** | Tekniske metadata fra kilden |

## Transformasjonslogikk
- Leser alle relevante rader fra **T542T** som gjelder for landkode `MOLGA = '20'` (Norge).
- Ingen ytterligere filtrering, pivotering eller aggregering.
- Resultatet er en ren referansetabell med én rad per lovhjemmelkode.

## Nøkler
- **Primærnøkkel:** `lovhjemmel_kode`