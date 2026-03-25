# sap_10_medarbeiderundergrupper

## Formål
Tabell for medarbeiderundergrupper med BOT-definert gruppering av alle medarbeidergrupper i `avlonningsform`. Dette gjør at man enkelt kan skille ut f.eks. måneds- eller timelønnede stillinger.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **T503T** | Medarbeiderundergruppe-tekster | Ingen | Gir koder og navn for medarbeiderundergrupper |
| **T503K** | Medarbeiderundergruppe-validering | Ingen (INNER JOIN) | Ekskluderer ubrukte eller inaktive undergrupper |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **avlonningsform_kode** | Mappes basert på `medarbeiderundergruppe_kode` |
| **avlonningsform_navn** | Mappes basert på `medarbeiderundergruppe_kode` |

## Transformasjonslogikk

### 1. Avlønningsform-mapping
Mapping av medarbeiderundergrupper til BOT-definerte avlønningsformer:

| Avlønningsform | Kode | Medarbeiderundergrupper |
|----------------|------|--------------------------|
| Månedslønn | MAA | 01, 02, 03, 10, 11, 12, 13, 14, 20, 21, 29, 33, 39, 40, 43 |
| Timelønn | TIM | 04, 15, 22, 30, 35 |
| Honorar | HON | 23, 38, 50 |
| Stipend | STI | 59 |
| Uten lønn | UT | 44, 94 |
| Ukjent | -1 | Alle andre koder |

### 2. Datakvalitet
- INNER JOIN mot T503K sikrer at kun gyldige medarbeiderundergrupper inkluderes  
- `DISTINCT` brukes for å fjerne eventuelle duplikater og sikre én rad per undergruppe  