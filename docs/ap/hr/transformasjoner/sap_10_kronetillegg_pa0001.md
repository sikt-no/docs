# Oppsummering – sap_10_kronetillegg_pa0001

## Formål
- Beregner kronetillegg for stillinger i PA0001 basert på PA0014 og et definert sett med lønnarter. 
- Genererer datointervaller uten overlapp og summerer alle tillegg som gjelder i samme periode, siden en ansatt kan ha flere lønnarter som inngår i et samlet kronetillegg samtidig.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0014** | Tilleggslønn | lonnart_kode IN (82 utvalgte lønnarter) | Hovedtabell for månedlige tilleggsbeløp per lønnsart |
| **T512T** | Tekster knyttet til lønnarter | Ingen | Legger til tekst for hver lønnart som hentes fra PA0014 |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **belop_kronetillegg** | SUM(belop) * 12 — summerer alle tillegg i perioden og konverterer fra månedlig til årlig beløp |
| **lonnart** | Kombinasjon av alle registrerte lønnartkoder fra PA0014 med navn fra T512T, separert med komma |

## Transformasjonslogikk

### 1. Datointervallgenerering
Kombinerer historikk fra følgende tabeller:
- **Hovedtabell:** PA0014 (filtrert på 82 utvalgte lønnarter) definerer gyldige datointervaller per ansatt
- **Sekundærtabeller:** Ingen
- **Nøkkelkolonner:** ansatt_nummer

### 2. Tabellkoblinger
Etter datointervallgenerering kobles følgende tabeller:
- **PA0014**: Hovedtabell med datooverlapp og lonnart_kode-filter
- **T512T**: Lønnarttekst

### 3. Filtrering på lønnarter
Kun 82 lønnarter basert på avtale mellom UiB, UiO og UiT inkluderes.  
Følgende kategorier brukes for å gruppere lønnartene (basert på SAP HR T512T):

**Kategorier**

- **Tilleggslønn:**  
  1109, 1112, 1114–1119, 1120–1122, 112A–112H, 112J, 112K, 112L, 112T, 113D, 1151, 1378, 3318–3319, 3321, 4655

- **Kompensasjoner (tid/helg/kveld/reserve):**  
  1142 (natt), 1143 (lør/søn), 1144–1146 (morgen/kveld)

- **Godtgjørelser:**  
  1153–1156, 1162, 1165, 1167, 1179, 1184, 1199, 1289, 1305, 1422, 3081, 3227, 3256, 3450, 3607–3610, 3720

- **Reisegodtgjørelser:**  
  3015, 301H, 3030

- **Husleiekompensasjon:**  
  3012, 3022, 3037–3038

- **Spesialordninger (polartillegg / særavtaler):**  
  112M, 112P, 114A, 3377–3379

- **Fast overtid og faste tillegg:**  
  1300–1301

- **Refusjoner:**  
  1302 (bredbånd), 1340, 1489

- **Styrehonorar:**  
  1330, 1350

- **Tillitsvalgt:**  
  3047

- **Andre ordninger:**  
  1170 (hjemme-PC), 1195 (ventelønn), 1306 (ventelønn), 1328 (manuell korrigering), 2705 (utvidet arbeidstid)

### 4. Summering av overlappende tillegg
- PA0014 kan inneholde flere aktive tillegg for samme ansatt i samme periode
- Datointervallgenereringen splitter perioder ved enhver endring
- Summen av beløp per intervall gir ett samlet kronetillegg

**Resultat:** Én rad per periode med totalbeløp for alle gjeldende tillegg.

### 5. Konvertering fra månedlig til årlig beløp
- Beløp i PA0014 er månedlige
- Multipliseres med 12 → gir årlig verdi i belop_kronetillegg

### 6. Gruppering og aggregering
Gruppering gjøres på:
- ansatt_nummer
- dato_fra, dato_til (fra datointervallgenereringen)
- Tekniske metadata (zx_institusjonskode og tidsstempler)

Aggregering:
- `lonnart`: collect_list + concat_ws for å samle alle lønnarter med beskrivelser
- `belop_kronetillegg`: sum * 12 for årlig totalbeløp

Dette sikrer at alle tillegg som gjelder i samme tidsperiode summeres til én rad.