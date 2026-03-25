# sap_30_organisasjonsenheter

## Formål
- Tilgjengeliggjøre organisasjonsenheter som grunnlag for **dim_organisasjon_sap** i Analyseplattformen.
- Berike med flagg for aktiv rad basert på gjeldende dato.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_organisasjonsenheter** | Komplett organisasjonshierarki med nivåer, ledere, DBH-koder og koststeder | Ingen |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **zx_aktiv_rad** | `CASE WHEN dato_fra ≤ current_date AND dato_til ≥ current_date THEN 'Ja' ELSE 'Nei' END` – indikerer om raden er aktiv i dag |

Alle øvrige kolonner videreføres direkte fra `sap_10_organisasjonsenheter`.

## Transformasjonslogikk
- En ren SELECT og overskriving av tabellen i transformation-laget.
- Setter flagg for om raden er aktiv basert på sammenligning av `dato_fra`/`dato_til` mot dagens dato.
- Ingen join, filtrering eller datointervallgenerering — strukturen fra Layer 10 beholdes uendret.

## Nøkler
- **Primærnøkkel:** `organisasjon_id_nivaa_10`