# Oppsummering – sap_10_stillinger_pa0001

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0001** | Hovedstillinger | Ingen | Definerer hovedstillinger med organisasjon, medarbeidergruppe, lovhjemmel, koststed og stillingskode |
| **PA0509** | Tilleggsstillinger | `aarsak_kode = 'AC'` | Legger til stillingsprosent ved fungering i perioden hovedstillingen løper |
| **HRP1051** | Stillingens yrkeskoder | `objekttype_kode = 'S'`, `planversjon_kode = '10'`, `planleggingsstatus_kode = '1'`, `deltype_kode = 'NOYK'` | Legger til STYRK/yrkesklassifisering |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **stillingskode** | `SUBSTR(stillingskode, LENGTH(stillingskode) - 3, 4)` |
| **type_stilling_kode** | Konstant verdi: `"HOVED"` |
| **ekstraerverv** | `CASE WHEN lovhjemmel_kode IN ('11','28','65','66') THEN 'Ja' ELSE 'Nei' END` |
| **prosent_stilling_fungering** | `fungeringer.prosent_stilling` (fra PA0509 med `aarsak_kode = 'AC'`) |

## Transformasjonslogikk
- PA0001 er hovedtabell.
- PA0509 og HRP1051 berikes med forretningsnøkler via join mot PA0001.
- Datointervaller kombineres med `combine_date_intervals` før endelig join.