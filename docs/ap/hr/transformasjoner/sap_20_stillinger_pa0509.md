# Oppsummering – sap_20_stillinger_pa0509

## Formål
- Sammenstiller informasjon og historikk for **tilleggsstillinger og fungeringer** registrert i PA0509.  
- Inkluderer data om lønn, kontering, permisjon, alder, ansiennitet og arbeidsprosent.

## Datakilder (lag 10)
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_stillinger_pa0509** | Sammenstilt informasjon relatert til stillinger i PA0509 fra silver | Ingen |
| **sap_10_fodselsdager** | Fødselsdatoer | Ingen |
| **sap_10_fravaer_permisjon** | Fravær/permisjon | Ingen |
| **sap_10_fravaer_dbh** | DBH-fravær | Ingen |
| **sap_10_kontering_pa0001_pa0509** | Kostnadsfordeling | Kun rader *uten* overstyrt kontering |
| **sap_10_kontering_overstyrt_pa0509** | Overstyrt kostnadsfordeling | Kun rader *med* overstyrt kontering |
| **sap_10_lonn_pa0509** | Lønn for tilleggsstillinger | Ingen |
| **sap_10_personer** | Personinformasjon | Ingen |
| **sap_10_organisasjonsenheter** | Organisasjonsstruktur (nivå 0–10) | Join på `organisasjon_id_nivaa_10` |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **dato_terminslutt** | Hvis `aarsak_kode = 'MP'` (tilleggsstilling) → terminslutt med `terminslutt_kode = '66'`. Hvis `aarsak_kode = 'AC'` (fungering) → terminslutt med `terminslutt_kode = '20'`. Faller tilbake til `1900-01-01` hvis ingen treff. |
| **dato_fratredelse** | `COALESCE(person.dato_fratredelse, '1900-01-01')` – brukes som teknisk "ingen fratredelse". |
| **koststed_kontering_kode** | `COALESCE(kontering.koststed_kode, kontering_overstyrt.koststed_kode)` – prioriteter standard kontering, ellers overstyrt. |
| **delprosjekt_nummer** | `COALESCE(kontering.delprosjekt_nummer, kontering_overstyrt.delprosjekt_nummer)` |
| **arbeidspakke_bygg_nummer** | `COALESCE(kontering.arbeidspakke_bygg_nummer, kontering_overstyrt.arbeidspakke_bygg_nummer)` |
| **koststed_hoved_kode** | Hentes fra `sap_10_organisasjonsenheter.koststed_hoved_kode_nivaa_10` basert på organisasjon_id. |
| **styrk_kode** | Hardkodet til `'-1'` (STYRK registreres ikke for PA0509-stillinger). |
| **aaremaal** | `CASE WHEN medarbeidergruppe_kode = '3' THEN 'Ja' WHEN medarbeidergruppe_kode IS NULL THEN 'Ukjent' ELSE 'Nei' END` |
| **prosent_arbeid** | Hentet fra `sap_10_personer.prosent_arbeid` (basert på PA0007). |
| **alder** | Validerer fødselsdato fra `sap_10_personer`. Ugyldig (1900-01-01 eller under 16/over 110 år) → `-1`. Ellers: framtidige rader bruker `dato_fra`, historiske/aktive rader bruker `LEAST(GETDATE(), dato_til)`. |
| **prosent_stilling** | Hentet fra `sap_10_lonn_pa0509.prosent_stilling`. |
| **prosent_kontering** | `COALESCE(kontering.prosent_kontering, kontering_overstyrt.prosent_kontering * 100, 100.00)` – standard kontering først, ellers overstyrt (skalert til prosent), ellers 100%. |
| **aarsverk** | `prosent_stilling × (prosent_kontering / 100) / 100`. Resultat castes til `decimal(4,3)`. |
| **aarsverk_eks_permisjon** | Samme logikk som `aarsverk`, men multiplisert med `(COALESCE(fravaer_permisjon.prosent_arbeidsfor, 100.00) / 100.00)`. |
| **aarsverk_dbh** | Samme logikk som `aarsverk`, men multiplisert med `(COALESCE(fravaer_dbh.prosent_arbeidsfor, 100.00) / 100.00)`. |

## Transformasjonslogikk

### 1. Datointervallgenerering
Bygger konsistente datointervaller for hver ansatt og tilleggsstilling ved å:
- hente start-/sluttdatoer fra `EndeligeDatointervaller` (samlet fra alle relevante Layer 10-tabeller)  
- identifisere datobrudd når attributter endrer seg  
- generere nye intervaller som sikrer stabil informasjon per periode  

Resultatet er én rad per ansatt/stilling per konsistent periode.

### 2. Korrigering av sluttdatoer for midlertidige ansatte
- Terminslutt (fra `sap_10_terminslutt`) brukes for å sette `dato_terminslutt` for:
  - tilleggsstillinger (`terminslutt_kode = '66'`, `aarsak_kode = 'MP'`)
  - fungeringer (`terminslutt_kode = '20'`, `aarsak_kode = 'AC'`)
- Hvis ingen terminslutt finnes i intervallet, settes teknisk verdi til `1900-01-01`.

### 3. Tilleggsstillingstype
Fastsettes ut fra:
- saksbehandling i **PA0000** (`90`/`95`)  
- lønnart-navn (dekodet via T512T)  

Gir verdier som **TILL**, **FUNG**, **STEDF**, eller `-1`.

### 4. Årsverksberegning
Følger samme prinsipp som for hovedstillinger, men med PA0509-prosentene:

**Formler:**
- **aarsverk:**  
  `prosent_stilling × (prosent_kontering / 100) / 100`
- **aarsverk_eks_permisjon:**  
  `… × (prosent_arbeidsfor / 100)`
- **aarsverk_dbh:**  
  `… × (prosent_arbeidsfor_dbh / 100)`

### 5. Person- og utdanningsinformasjon
- Hentes fra `sap_10_personer` (dato_ansettelse, dato_fratredelse, kjønn, landkoder, språk, prosent_arbeid)  
- Utdanningskode fra `sap_00_pa0022` (utdanningstype 01, sekvens 000) hvis denne koblingen tas inn i senere versjon.

### 6. Lønn og kontering
- Lønn: `sap_10_lonn_pa0509` (grunnlønn, lønnstrinn, prosent_stilling, endring_aarsak_lonn_kode/tekst)  
- Kontering:
  - Standard: `sap_10_kontering_pa0001_pa0509` (`kostnadstype_fordeling_kode = '01'`, ikke overstyrt)
  - Overstyrt: `sap_10_kontering_overstyrt_pa0509` (kun der `overstyrt_kontering = 'X'`)  

`COALESCE`-logikk sikrer at enten standard eller overstyrt kontering brukes, med default 100% dersom ingen kontering finnes.