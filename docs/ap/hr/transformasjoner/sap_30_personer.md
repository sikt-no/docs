# Oppsummering – sap_30_personer

## Formål
- Tilgjengeliggjøre personhistorikk som grunnlag for **dim_person** i Analyseplattformen.
- Berike personinformasjon med kommunikasjonsdata (brukernavn, e-post, telefon).
- Identifisere aktive rader og slå sammen like påfølgende historikkperioder.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_personer** | Full personhistorikk med demografi, ansettelse, statsborgerskap, språk, adresse m.m. | Ingen |
| **sap_10_ansettelsesdato** | dato_ansettelse | Ingen |
| **pa9024 (silver)** | Kontroll for tilstedeværelse av toakontrakter | Ingen |

## Kalkulerte og avledede kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **zx_aktiv_rad** | `Ja` dersom: <br />• Raden er aktiv i dag (`dato_fra ≤ current_date ≤ dato_til`), eller <br />• Det er seneste rad for personen og `dato_til` er passert <br />Ellers `Nei` |
| **toakontrakter_finnes** | `Ja` hvis personen har minst én PA9024-kontrakt som overlapper radens dato-intervall, ellers `Nei` |

## Transformasjonslogikk

### 1. Hente grunnlag fra sap_10_personer
- Leser full historikk fra `transformation_hr.sap_10_personer`.
- Bevarer alle opprinnelige personfelt.

### 2. Berike med ansettelsedato informasjon
- leser dato_ansettelse fra sap_10_ansettelsesdato

### 3. Slå sammen like påfølgende rader
- Bruker `merge_identical_consecutive_rows()` til å:
  - slå sammen identiske rader som ligger **rett etter hverandre**,
  - bevare separate perioder dersom like rader er avbrutt av andre perioder.

### 4. Legge på aktiv-rad-flagg
Regler:

1. **Aktiv i dag:**  
   `dato_fra ≤ current_date ≤ dato_til` → `Ja`

2. **Siste historiske rad:**  
   Hvis raden er siste rad (row_number = 1) og `dato_til < current_date` → `Ja`

3. **Ellers:**  
   `Nei`

### 5. Identifisere toakontrakter
- Left join mot `silver_sap.pa9024` på ansattnummer og overlappende datoer.
- Beregner `toakontrakter_finnes = Ja` dersom minst én overlappende rad finnes.

### 6. Kolonnerekkefølge
- Dato-kolonner først  
- Deretter alle øvrige fagkolonner  
- Til slutt alle `zx_*`-kolonner

### 7. Skrive resultattabell
- Skrives som Delta-tabell til:  
  **`{catalog}.transformation_hr.sap_30_personer`**  
- Mode: `overwrite`  
- Schema overwrites enabled

## Nøkler
- **ansatt_nummer**  
- **dato_fra**  
- **dato_til**