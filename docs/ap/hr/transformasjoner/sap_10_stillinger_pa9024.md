# Oppsummering – sap_10_stillinger_pa9024

## Formål
- Kombinerer kontraktsdata i PA9024 og ZEAC_CONTRA_DATA.
- Legger til lønnsavregningsgruppe fra PA0001.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA9024** | Kontraktsforhold | Ingen | kontrakter |
| **ZEAC_CONTRA_DATA** | Kontraktsdetaljer | Ingen | Gir stillingskode, organisasjon, tariff, lovhjemmel og kontraktstype |
| **PA0001** | Hovedstilling | Join mot PA9024 | Henter lønnsavregningsgruppe fra hovedstilling |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **stillingskode** | `SUBSTR(stillingskode, LENGTH(stillingskode) - 3, 4)` |
| **type_stilling_kode** | `CASE WHEN kontrakt_overlapp='X' AND type_kontrakt_t_kode like 'T%' THEN concat('X','type_kontrakt_t_kode') ELSE 'type_kontrakt_t_kode' END` |
| **ekstraerverv** | `CASE WHEN lovhjemmel_kode IN ('11','28','65','66') THEN 'Ja' ELSE 'Nei' END` |
| **medarbeidergruppe_kode** | Mappes fra `type_kontrakt_t_kode` + `kontraktstype_c_kode` (se tabell under) |
| **medarbeiderundergruppe_kode** | Mappes fra samme regelsett (se tabell under) |

## Transformasjonslogikk

### 1. Datointervallgenerering
Kombinerer historikk fra følgende tabeller:
- **Hovedtabell:** PA9024 - definerer gyldige datointervaller per ansatt og kontrakt
- **Sekundærtabell:** PA0001
- **Nøkkelkolonner:** `ansatt_nummer`, `kontrakt_nummer`

### 2. Forretningsnøkler til sekundærtabeller
PA0001 mangler kontrakt_nummer og må berikes før datointervallgenerering:
- Joines mot PA9024 på kontrakt_nummer og datooverlapp
- Returnerer ansatt_nummer, kontrakt_nummer + dato_fra/dato_til for bruk i combine_date_intervals

### 3. Tabellkoblinger
Etter datointervallgenerering kobles følgende tabeller:
- **PA9024**: Hovedtabell med datooverlapp på ansatt_nummer + kontrakt_nummer
- **ZEAC_CONTRA_DATA**: Kontraktsdata med tariffnøkkel
- **PA0001**: Lønnsavregningsgruppe fra hovedstillingen

### 2. Medarbeidergruppemapping
Regel basert på T-kode + C-kode:

| type_kontrakt_t_kode | kontraktstype_c_kode | medarbeidergruppe_kode |
|----------------------|----------------------|------------------------|
| T1 | C10 | 3 (Åremål) |
| T1 | C1 | 4 (Midlertidig) |
| T1 | Andre | 4 (Midlertidig) |
| T3 | C10 | 3 (Åremål) |
| T3 | Andre | 4 (Midlertidig) |
| Andre | – | -1 (Ukjent) |

### 3. Medarbeiderundergruppemapping
| type_kontrakt_t_kode | kontraktstype_c_kode | medarbeiderundergruppe_kode |
|----------------------|----------------------|-----------------------------|
| T1 | C10 | 04 |
| T1 | C1 | 30 |
| T1 | Andre | 04 |
| T3 | C10 | 01 |
| T3 | Andre | 01 |
| Andre | – | -1 (Ukjent) |

### 4. Ekstraervervklassifisering
Lovhjemmelkoder styrer klassifiseringen:

- **11** – Timelønn / ekstrahjelp  
- **28** – Honorar  
- **65** – Bistilling  
- **66** – Ekstraarbeid  
- **Andre** → *Nei*  

### 5. Stillingstypeklassifisering\n
- **XT1,XT2,XT3:** Overlappende T-kontrakt  
- **T1,T2,T3** T-kontrakter uten overlapp