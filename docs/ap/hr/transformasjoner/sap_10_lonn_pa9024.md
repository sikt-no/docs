# Oppsummering – sap_10_lonn_pa9024

## Formål
- Beregner lønn for stillinger i PA9024 . 
- Beregner lønn ved å velge høyeste verdi mellom det som er direkte registrert i PA9024 og satsen for eventuelt lønnstrinn i T510. 
- Særskilt håndtering av pensjonistkontrakter siden disse registreres med timelønn og ganges med 1950 for å få årslønn.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA9024** | Kontrakter | hvis h.r-1.1 kontrakt_overlapp='X' eller ingen filtrering | Hovedtabell for kontrakter med overlapp |
| **ZEAC_CONTRA_DATA** | Kontraktsdata | Ingen | Kobler PA9024 mot T510 via tariffnøkkel |
| **T510** | Satser for bl.a. lønnstrinn | Pensjonistavtaler OR (lonnart_kode='1000', tariffavtale_kode='3') | Tariffbaserte lønnssatser |
| **YHR_P9024_LINJER** | Kontraktslinjer | Ingen | Kobler lonnart_kode til kontrakter  |
| **T512T** | Tekster knyttet til lønnarter | Ingen | Legger til tekst for hver lønnart |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **belop_grunnlonn** | Hvis belop_grunnlonn > 0 → bruk denne, elif pensjonist → satser.belop * 1950, else → satser.belop |
| **lonnart** | Kombinasjon av lønnartkoder fra YHR_P9024_LINJER med navn fra T512T, separert med komma  |

## Transformasjonslogikk

### 1. Datointervallgenerering
Kombinerer historikk fra følgende tabeller:
- **Hovedtabell:** PA9024 (filtrert på kontrakt_overlapp='X') hvis h.r-1.1 ellers ingen filtrering. definerer gyldige datointervaller per ansatt og kontrakt
- **Sekundærtabell:** T510 (med forretningsnøkler fra zeac_contra_data og PA9024) bidrar med datogrenser fra lønnssatser
- **Nøkkelkolonner:** ansatt_nummer, kontrakt_nummer

### 2. Forretningsnøkler til sekundærtabeller
T510 mangler ansatt_nummer og kontrakt_nummer og må berikes før datointervallgenerering:
- Joines mot zeac_contra_data på tarifftype, tariffområde, tariffgruppe og lønnstrinn
- Joines videre mot PA9024 på kontrakt_nummer og datooverlapp
- Returnerer ansatt_nummer, kontrakt_nummer + dato_fra/dato_til for bruk i combine_date_intervals

### 3. Tabellkoblinger
Etter datointervallgenerering kobles følgende tabeller:
- **PA9024**: Hovedtabell med datooverlapp på ansatt_nummer + kontrakt_nummer
- **ZEAC_CONTRA_DATA**: Kontraktsdata med tariffnøkkel
- **T510**: Lønnssatser med tariffnøkkel og datooverlapp
- **YHR_P9024_LINJER**: Kontraktslinjer for lonnart 
- **T512T**: Lønnarttekst

### 4. Grunnlønnsberegning
Tre-trinns prioritering:
1. Hvis PA9024.belop_grunnlonn > 0 → bruk denne (individuell avtale)
2. Elif pensjonist (75/90/PENSJAVT) → satser.belop * 1950 (timelønn til årslønn, 1950 = 37,5 t/uke × 52 uker)
3. Else → satser.belop (standard tarifflønn)

Ingen stigeprosent eller ansiennitetsberegning.

### 5. T510 filtrering (lønnssatser)

**Pensjonistavtaler:**
- lonnart_kode = ''
- tariffavtale_kode = '1'
- tarifftype_kode = '75'
- tariffomraade_kode = '90'
- tariffgruppe_kode = 'PENSJAVT'

**Alle andre:**
- lonnart_kode = '1000'
- tariffavtale_kode = '3'
- Ikke pensjonistavtaler

**Merk:** Dersom DFØ rydder i pensjonistoppsettet, kan logikken forenkles til kun tariffavtale='3' og lonnart='1000'.

### 6. Kronetillegg
- Hentes direkte fra PA9024.belop_kronetillegg
- Ingen summering eller transformasjon

### 7. Lønnarttekster (YHR_P9024_LINJER + T512T)

- Joiner YHR_P9024_LINJER på ansatt_nummer + kontrakt_nummer
- Joiner T512T på lonnart_kode
- Kombineres med collect_list + concat_ws + array_compact

### 8. Gruppering og aggregering
Gruppering gjøres på alle ikke-aggregerte kolonner for å støtte LISTAGG av lonnart.

Aggregering:
- `lonnart`: collect_list + concat_ws for å samle alle lønnarter med beskrivelser 
- `belop_grunnlonn`: beregnet basert på pensjonistlogikk

### 9.Slutt tabell
Hvis h.r-1.1 data lagres i sap_10_lonn_pa9024x som er eklusive for overlapp kontrakter
ellers data lagres i sap_10_lonn_pa9024 