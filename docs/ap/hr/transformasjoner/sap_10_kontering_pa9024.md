# sap_10_kontering_pa9024

## Formål
- Beregner konteringsprosent for stillinger fra PA9024. 
- Grupperer konteringsdata fra YHR_P9024_LINJER og beregner kostnadsfordelingsprosenten på hver linje basert på totalt kontraktsbeløp eller totale kontraktstimer.


## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **YHR_P9024_LINJER** | Konteringsdata | Ingen | Grunnlagstabell med timer, beløp og konteringsdimensjoner (koststed, delprosjekt, arbeidspakke, arbeidsoppgave, lønnsart) |
| **PA9024** | kontraktinformasjon | Ingen |  |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **antall_timer_kontrakt** | Total timer per kontrakt - partisjonert på ansatt_nummer, kontrakt_nummer |
| **belop_kontrakt** | Totalbeløp per kontrakt - partisjonert på ansatt_nummer, kontrakt_nummer |
| **prosent_kontering** |  Hvis `type_kontrakt_t_kode = 'T1'` → `antall_timer_kontering/antall_timer_kontrakt * 100`, ellers `belop_kontering/belop_kontrakt * 100` |