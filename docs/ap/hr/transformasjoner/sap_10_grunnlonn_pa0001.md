# sap_10_grunnlonn_pa0001

## Formål
Beregner grunnlønn knyttet til stillinger i PA0001 basert på logikk for hovedtariffperiodene. Håndterer tre perioder:
- 01.05.2020–30.04.2022  
- 01.05.2022–30.04.2024  
- 01.05.2024 og fremover (gjeldende)

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0008** | Direkte registrert lønn | Ingen | Hovedtabell som definerer lønn med tarifftype, tariffområde, tariffgruppe, lønnstrinn og beløp |
| **T510** | Satser for bl.a. lønnstrinn | Pensjonistavtaler OR (lonnart_kode='1000', tariffavtale_kode='3') | Tilfører standardiserte lønnssatser basert på tariffkombinasjon |
| **T512T** | Tekster knyttet til lønnarter | Ingen | Legger til tekst for hver lønnartkode i PA0008 |
| **YHR_PSRCL** | Stigejusteringsprosent | lonnart_kode='108A' | Legger til stigeprosent for ansiennitetsberegning |
| **T530F** | Tekst knyttet til lønnsendringsårsak | infotype_kode='0008' | Legger til tekstbeskrivelse for lønnsendring |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **belop_grunnlonn** | Beregning basert på logikk knyttet til hver hovedtariffperiode |
| **endring_aarsak_lonn_kode** | Hentes fra endring_aarsak_kode i PA0008 |
| **endring_aarsak_lonn_tekst** | Hentes fra endring_aarsak_tekst i T530F |
| **lonnart** | Kombinasjon av alle 40 lønnartkoder i PA0008 med navn fra T512T, separert med komma |

## Transformasjonslogikk

### 1. Datointervallgenerering
Kombinerer historikk fra følgende tabeller:
- **Hovedtabell:** PA0008 definerer gyldige datointervaller per ansatt
- **Sekundærtabell:** T510 (med forretningsnøkler fra PA0008) bidrar med datogrenser fra lønnssatser
- **Nøkkelkolonner:** ansatt_nummer

### 2. Forretningsnøkler til sekundærtabeller
T510 mangler ansatt_nummer og må berikes før datointervallgenerering:
- Joines mot PA0008 på tarifftype, tariffområde, tariffgruppe, lønnstrinn og datooverlapp
- Returnerer ansatt_nummer + dato_fra/dato_til for bruk i combine_date_intervals

### 3. Tabellkoblinger
Etter datointervallgenerering kobles følgende tabeller:
- **PA0008**: Hovedtabell med datooverlapp
- **T510**: Lønnssatser med tariffnøkkel og datooverlapp
- **YHR_PSRCL**: Stigeprosent med tariffnøkkel og lonnart_kode='108A'
- **T530F**: Endringsårsaktekst med infotype_kode='0008'
- **T512T**: 40 koblinger for lønnarttekster

### 4. Grunnlønnsberegning per hovedtariffperiode
Beregningen av belop_grunnlonn avhenger av hvilken hovedtariffperiode intervallet faller i.

**Hjelpeuttrykk:**
- `belop_sum`: Sum av belop_1 til belop_40 fra PA0008
- `has_lonnstrinn` / `no_lonnstrinn`: Sjekker om lønnstrinn er registrert
- `stige_multiplier`: Beregner (1 + stige.prosent/100) for ansiennitetslogikk

#### Hovedtariffperiode 01.05.2020–30.04.2022
| Tarifftype | Område | Gruppe | Formel |
|------------|--------|--------|--------|
| 71 | Alle | Alle | COALESCE(satser.belop, 0) + COALESCE(belop_sum, 0) |
| 72 | Alle | Med lønnstrinn | satser.belop |
| 72 | Alle | Uten lønnstrinn | belop_sum |
| 73 | 91 | Alle | belop_sum |
| 73 | 95 | Alle | belop_sum * stige_multiplier |
| 74 | 90 | PERS | satser.belop |
| 75 | 90 | INDIVID | belop_sum * 12 |
| 75 | 90 | UARB | satser.belop |
| 75 | 90 | PENSJAVT | satser.belop * 1950 |
| 76 | AA | %HLÆ% | satser.belop |
| 76 | AA | IND% | belop_sum * 12 |

#### Hovedtariffperiode 01.05.2022–30.04.2024
| Tarifftype | Område | Gruppe | Formel |
|------------|--------|--------|--------|
| 71 | 91, 95 | Alle | COALESCE(satser.belop, 0) + COALESCE(belop_sum, 0) |
| 72 | Alle | Med lønnstrinn | satser.belop |
| 72 | Alle | Uten lønnstrinn | belop_sum |
| 73 | 91 | Alle | belop_sum |
| 73 | 95 | Alle | belop_sum * stige_multiplier |
| 74 | 90 | PERS | satser.belop |
| 75 | 90 | INDIVID | belop_sum * 12 |
| 75 | 90 | UARB | satser.belop |
| 75 | 90 | PENSJAVT | satser.belop * 1950 |
| 76 | AA | %HLÆ% | satser.belop |
| 76 | AA | IND% | belop_sum * 12 |

(samme som forrige med unntak av tarifftype 71 som er begrenset til område 91 og 95)

#### Hovedtariffperiode 01.05.2024 og fremover (gjeldende)
Samme logikk som 2022–2024.

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

### 6. Lønnarttekster (T512T)
- 40 separate koblinger (l1-l40) for hver lonnart_kode_1 til lonnart_kode_40
- Kombineres til én kolonne med concat_ws og array_compact for å fjerne tomme verdier

## Tarifftype-forklaring
| Tarifftype | Betydning |
|------------|-----------|
| 71 | Statlig tariffavtale |
| 72 | Tariffavtale med lønnstrinn |
| 73 | Tariffavtale med ansiennitet/stigeprosent |
| 74 | Personlig avtale |
| 75 | Spesielle avtaler (individuelle, uten arbeid, pensjonister) |
| 76 | Andre avtaler (høgskolelærere, individuelle) |