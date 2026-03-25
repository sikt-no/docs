# sap_10_kommunikasjonsinformasjon

## Formål
Henter kommunikasjonsinformasjon for ansatte fra PA0105 og PA9052. Inneholder brukernavn, e-postadresser og telefonnumre (jobb og privat). Kun siste gjeldende versjon per ansatt; ingen historikk.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0105** | Kommunikasjonsinformasjon | Siste rad per `kommunikasjonstype_kode` (`ROW_NUMBER` på `dato_til DESC`) | Grunnlagstabell for brukernavn, e-post og telefon |
| **PA9052** | Mobilnummer | Siste rad per `deltype_kode` (`ROW_NUMBER` på `dato_til DESC`) | Overstyrer mobilnummer registrert i PA0105 |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **brukernavn_feide** | `LOWER(kommunikasjon_id_lang)` hvor `kommunikasjonstype_kode = '9020'` |
| **brukernavn_dfo** | `kommunikasjon_id` hvor `kommunikasjonstype_kode = '0001'` |
| **epost_jobb** | `LOWER(kommunikasjon_id_lang)` hvor `kommunikasjonstype_kode = '0010'` |
| **epost_privat** | `LOWER(kommunikasjon_id_lang)` hvor `kommunikasjonstype_kode = '0030'` |
| **telefon_fast_jobb** | `kommunikasjon_id_lang` hvor `kommunikasjonstype_kode = '0020'` |
| **telefon_mobil_jobb** | `COALESCE(PA9052.telefon_mobil, PA0105.kommunikasjon_id)` for jobb (PA9052 `deltype_kode = '0001'`, PA0105 `kommunikasjonstype_kode = '9003'`) |
| **telefon_mobil_privat** | `COALESCE(PA9052.telefon_mobil, PA0105.kommunikasjon_id)` for privat (PA9052 `deltype_kode = '0002'`, PA0105 `kommunikasjonstype_kode = '9004'`) |
| **telefon_mobil (PA9052)** | `CONCAT(retning_tegn, retning_nummer, telefon_nummer)` |

## Transformasjonslogikk

### 1. PA0105 – Kommunikasjonsinformasjon
- Henter all kommunikasjonsinformasjon fra PA0105  
- `ROW_NUMBER()` partisjonert på `ansatt_nummer` og `kommunikasjonstype_kode`  
- Sortert på `dato_til DESC` for å hente siste gjeldende rad  
- Kun rader med `rn = 1` beholdes  

**Kommunikasjonstyper fra PA0105**
| kommunikasjonstype_kode | Betydning | Kolonne |
|-------------------------|-----------|---------|
| 9020 | Feide-brukernavn | brukernavn_feide |
| 0001 | DFØ-brukernavn | brukernavn_dfo |
| 0010 | E-post jobb | epost_jobb |
| 0030 | E-post privat | epost_privat |
| 0020 | Fasttelefon jobb | telefon_fast_jobb |
| 9003 | Mobil jobb (fallback) | telefon_mobil_jobb |
| 9004 | Mobil privat (fallback) | telefon_mobil_privat |

### 2. PA9052 – Mobilnummer (overstyrt)
- Henter mobilnummer fra PA9052  
- `ROW_NUMBER()` partisjonert på `ansatt_nummer` og `deltype_kode`  
- Sortert på `dato_til DESC`  
- Bygger komplett nummer: `CONCAT(retning_tegn, retning_nummer, telefon_nummer)`  
- Kun rader med `rn = 1` beholdes  

**Deltyper fra PA9052**
| deltype_kode | Betydning | Kolonne |
|--------------|-----------|---------|
| 0001 | Mobil jobb | telefon_mobil_jobb |
| 0002 | Mobil privat | telefon_mobil_privat |

### 3. Prioritering av mobilnummer
- PA9052 prioriteres over PA0105  
- `COALESCE(PA9052.telefon_mobil, PA0105.kommunikasjon_id)`  
  - Hvis PA9052 har verdi → bruk denne  
  - Ellers → bruk PA0105-fallback  

### 4. Pivot-struktur med LEFT JOIN
- Starter med alle unike ansatte fra PA0105  
- LEFT JOIN mot PA0105 én gang per kommunikasjonstype (7 ganger)  
- LEFT JOIN mot PA9052 to ganger (jobb og privat mobil)  
- Filtrerer på `rn = 1` i alle join-operasjoner  
- `SELECT DISTINCT` sikrer én rad per ansatt  

### 5. Ingen datointervaller
- Tabellen er punkt-i-tid (ingen `dato_fra` / `dato_til`)  
- Kun siste gjeldende kommunikasjonsinformasjon per ansatt  
- Direkte SELECT med flere LEFT JOIN