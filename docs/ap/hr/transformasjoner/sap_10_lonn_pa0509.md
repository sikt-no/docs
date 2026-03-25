# Oppsummering – sap_10_lonn_pa0509

## Formål
- Beregner lønn for tilleggsstillinger i PA0509 som også tar hensyn til lønnstrinn.
- Beregner lønn ved å velge høyeste av verdien som er registrert direkte i PA0509 og satsen for eventuelt lønnstrinn i T510.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0509** | Tilleggsstillinger | Ingen | Hovedtabell for tilleggsstillinger med lønnsdata |
| **T510** | Satser for bl.a. lønnstrinn | tariffavtale_kode='3' | Standardiserte lønnssatser basert på tariffkombinasjon og lønnstrinn |
| **T512T** | Tekster knyttet til lønnarter | Ingen | Legger til tekst for hver lønnart som hentes fra PA0509 |
| **T530F** | Tekst knyttet til lønnsendringsårsak | infotype_kode='0509' | Beskrivende tekst for lønnsendring |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **belop_grunnlonn** | Hvis belop_grunnlonn > 0 → bruk denne, ellers → bruk satser.belop |
| **endring_aarsak_lonn_kode** | Hentet direkte fra PA0509 |
| **endring_aarsak_lonn_tekst** | Hentet fra T530F |
| **lonnart** | Kombinasjon av lønnartkode og navn fra T512T |

## Transformasjonslogikk

### 1. Datointervallgenerering
Kombinerer historikk fra følgende tabeller:
- **Hovedtabell:** PA0509 definerer gyldige datointervaller per ansatt og stilling
- **Sekundærtabell:** T510 (med forretningsnøkler fra PA0509) bidrar med datogrenser fra lønnssatser
- **Nøkkelkolonner:** ansatt_nummer, stilling_id

### 2. Forretningsnøkler til sekundærtabeller
T510 mangler ansatt_nummer og stilling_id og må berikes før datointervallgenerering:
- Joines mot PA0509 på tarifftype, tariffområde, tariffgruppe, lønnstrinn og datooverlapp
- Returnerer ansatt_nummer, stilling_id + dato_fra/dato_til for bruk i combine_date_intervals

### 3. Tabellkoblinger
Etter datointervallgenerering kobles følgende tabeller:
- **PA0509**: Hovedtabell med datooverlapp på ansatt_nummer + stilling_id
- **T510**: Lønnssatser med tariffnøkkel og datooverlapp
- **T512T**: Lønnarttekst
- **T530F**: Endringsårsaktekst med infotype_kode='0509'

### 4. Grunnlønnsberegning
Enkel prioritering:
1. Hvis `PA0509.belop_grunnlonn > 0` → bruk denne (individuell avtale)  
2. Ellers → bruk `T510.belop` (tariffsats)  

**Forskjell fra PA0001:**  
Ingen komplekse tariffperioder, stigeprosent eller mange kasus. Kun et enkelt valg mellom to verdier.

### 5. T510 filtrering (lønnssatser)
- Filtrert på tariffavtale_kode='3'
- Joines på tarifftype, tariffområde, tariffgruppe og lønnstrinn (med COALESCE til '-1')
- Gir tariffbasert sats (satser.belop)

### 6. Lønnsendringskoder (T530F)
- Joines på infotype_kode='0509'
- Gir tekstforklaring til endring_aarsak_lonn_kode