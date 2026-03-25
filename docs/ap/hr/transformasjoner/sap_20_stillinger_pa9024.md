# sap_20_stillinger_pa9024

## Formål
- Sammenstiller informasjon relatert til stillinger og kontrakter i PA9024  fra 10-tabellene til én tabell.
- Inneholder data om kontraktstype, lønn, kontering, organisasjon, ansiennitet, alder og diverse land-/personattributter.

## Datakilder (Layer 10)
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_stillinger_pa9024** | Grunnlagstabell for PA9024-kontrakter, definerer datointervaller (dato_fra/dato_til) | |
| **sap_10_lonn_pa9024** | Lønn for PA9024-kontrakter (grunnlønn, kronetillegg, prosent_stilling, lønnstrinn) | Ingen |
| **sap_10_kontering_pa9024** | Kostnadsfordeling for PA9024-kontrakter (koststed, delprosjekt, arbeidspakke, prosent_kontering) | Ingen |
| **sap_10_personer** | Personinformasjon ( dato_fratredelse, demografi, landkoder, prosent_arbeid, dato_fodt) | Ingen |
| **sap_10_fodselsdager** | Fødselsdager – brukes til å skape datobrudd for korrekt aldersberegning innenfor kontraktsperioder | Ingen |
| **sap_10_organisasjonsenheter** | Organisasjonsstruktur (nivå 0–10) – brukes for å skape datobrudd ved organisasjonsendringer | Join på `organisasjon_id_nivaa_10` mot `organisasjon_id` i stilling |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **dato_fratredelse** | `COALESCE(person.dato_fratredelse, '1900-01-01')` – teknisk “ingen fratredelse” når NULL. |
| **koststed_kontering_kode** | Direkte fra `sap_10_kontering_pa9024.koststed_kode`. |
| **delprosjekt_nummer** | Direkte fra `sap_10_kontering_pa9024.delprosjekt_nummer`. |
| **arbeidspakke_bygg_nummer** | Direkte fra `sap_10_kontering_pa9024.arbeidspakke_bygg_nummer`. |
| **styrk_kode** | Hardkodet til `'-1'` (ingen STYRK fra HRP1051 i denne tabellen). |
| **aaremaal** | `CASE WHEN medarbeidergruppe_kode = '3' THEN 'Ja' WHEN medarbeidergruppe_kode = '-1' THEN 'Ukjent' ELSE 'Nei' END`. |
| **prosent_arbeid** | Hentet fra `sap_10_personer.prosent_arbeid` (basert på PA0007). |
| **alder** | Validerer dato_fodt fra `sap_10_personer`. Ugyldig (dato_fodt = 1900-01-01 eller alder < 16 / > 110 år) → `-1`. Ellers: framtidige rader bruker `dato_fra`; historiske og aktive rader bruker `LEAST(GETDATE(), dato_til)`. |
| **prosent_stilling** | Hentet fra `sap_10_lonn_pa9024.prosent_stilling`. |
| **prosent_kontering** | Direkte fra `sap_10_kontering_pa9024.prosent_kontering` (ingen fallbackverdi i denne tabellen). |
| **belop_grunnlonn** | Hentet fra `sap_10_lonn_pa9024.belop_grunnlonn`. |
| **belop_kronetillegg** | Hentet fra `sap_10_lonn_pa9024.belop_kronetillegg`. |

## Transformasjonslogikk

### 1. Datointervallgenerering
Kombinerer historikk fra følgende tabeller:
- **Hovedtabell:** PA0014 (filtrert på 82 utvalgte lønnarter) definerer gyldige datointervaller per ansatt
- **Sekundærtabeller:** Ingen
- **Nøkkelkolonner:** ansatt_nummer

### 2. Sammenstilling av kontraktsdata
EndeligeDatointervaller joines mot:

- **sap_10_stillinger_pa9024** (`t`) – kontrakts- og stillingsattributter (type_kontrakt_t_kode, type_stilling_kode, lovhjemmel, medarbeidergruppe, medarbeiderundergruppe, organisasjon, lønnsavregningsgruppe, yrkeskode, ekstraerverv m.m.).  
- **sap_10_lonn_pa9024** (`lonn`) – lønn, prosent_stilling, lønnstrinn, grunnlønn, kronetillegg.  
- **sap_10_kontering_pa9024** (`kontering`) – koststed, delprosjekt, arbeidspakke, prosent_kontering.  
- **sap_10_personer** (`person`) – persondata, landkoder, språk, dato_fratredelse, prosent_arbeid, dato_fodt.

Joins skjer alltid på overlappende dato-intervaller (tabellens `dato_fra`/`dato_til` mot interallene fra EndeligeDatointervaller).

### 3. Aldersberegning
Alder beregnes med robust logikk:

- Først sjekkes datokvalitet:
  - `dato_fodt = '1900-01-01'` → ugyldig  
  - Alder < 16 eller > 110 år (målt mot `LEAST(GETDATE(), dato_til)`) → ugyldig  
  → settes da til `-1`.

- Hvis raden er **fremtidig** (dvs. `dato_fra` > dagens dato):  
  `alder = DATEDIFF(year, dato_fodt, dato_fra)`

- Ellers (historiske og aktive rader):  
  `alder = DATEDIFF(year, dato_fodt, LEAST(GETDATE(), dato_til))`

Dette gir korrekt alder på hvert intervall uten å bruke fødselsdags-tabellen direkte i denne SELECTen (den brukes kun til datobrudd).

### 4. Åremål-identifisering
`aaremaal` settes basert på medarbeidergruppe:

- `medarbeidergruppe_kode = '3'` → **Ja** (åremål)  
- `medarbeidergruppe_kode = '-1'` → **Ukjent**  
- Andre verdier → **Nei**

### 5. Konterings- og lønnsinformasjon
- Kontering (koststed, delprosjekt, arbeidspakke, prosent_kontering) hentes fra **sap_10_kontering_pa9024** per kontrakt.  
- Lønn:
  - `prosent_stilling`, `lonnstrinn_stigetrinn`, `belop_grunnlonn`, `belop_kronetillegg` hentes fra **sap_10_lonn_pa9024**.  

Ingen årsverksberegning gjøres i denne tabellen fordi alle kontrakter i PA9024 med overlapp er timekontrakter.