# Oppsummering – sap_30_fravaer

## Formål
- Etablere faktatabellen **fak_fravaer**, som viser fravær på datonivå og er koblet til korrekt stillingsinformasjon.
- Sikre korrekt dimensjonstilknytning ved å bryte ned fraværsintervaller til én rad per dato.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_fravaer** | Grunnlagstabell for fravær | `dato_til >= '2014-01-01'` |
| **dim_dato** | Gir én rad per dag for nedbrytning av intervaller | `dato BETWEEN dato_fra AND dato_til` |
| **sap_30_stillinger** | Stillingsinformasjon på stillingsnivå | Aggregert fra stillingsfakta |

## Behandling

### 1. Utgangspunkt: sap_10_fravaer
- Henter fraværsintervaller med blant annet:
  - `fravaerstype_kode`
  - `prosent_fravaer`
  - `prosent_arbeidsfor`
  - `dato_fra`, `dato_til`

### 2. Nedbrytning til datonivå
- Fraværsperioder joines mot **dim_dato**.
- For hver dag i perioden genereres én rad.

### 3. Stillingsinformasjon
- **sap_30_stillinger** grupperes til stillingsnivå (ikke konteringsnivå) ved å bruke DISTINCT.
- Kobles på fravær ved:
  - `ansatt_nummer`
  - dato-overlapp mellom stillingsintervall og fraværsdato.

### 4. Beregninger
- **antall_fravaersdager** = 1 per dato.
- **antall_fravaersdagsverk** =  
  `(prosent_stilling / 100) × (prosent_kontering / 100) × (prosent_fravaer / 100)`.

### 5. Rensing
- `delprosjekt_nummer` renses for UB/UT-prefikser med `REGEXP_REPLACE('^[A-Z]{2}', '')`.

## Nøkler og dimensjonstilknytning
| Dimensjon | Fakta-key | Dim-key | Kommentar |
|-----------|-----------|----------|-----------|
| dim_alder | alder | alder | Fellesdimensjon |
| dim_fravaerskode | fravaerstype_kode | fravaerstype_kode | SAP |
| dim_kjonn | kjonn_navn | kjonn_navn | Fellesdimensjon |
| dim_koststed | koststed_kode | koststed_kode | Felles |
| dim_land | land_kode_adresse | land_kode | Felles |
| dim_medarbeidergruppe | medarbeidergruppe_kode | medarbeidergruppe_kode | SAP |
| dim_medarbeiderundergruppe | medarbeiderundergruppe_kode | medarbeiderundergruppe_kode | SAP |
| dim_organisasjon_sap | organisasjon_id | organisasjon_id | SAP |
| dim_person | ansatt_nummer + dato | ansatt_nummer + dato_fra + dato_til | Fakta-dato må ligge innenfor intervallet |
| dim_poststed | postnummer_adresse | postnummer | Felles |
| dim_spraak | spraak_kode_kommunikasjon | spraak_kode | Felles |
| dim_stillingskode | stillingskode | stillingskode | Felles |
| dim_styrk_kode | styrk_kode | styrk_kode | Felles |
| dim_tariffgruppe | tariffgruppe_kode | tariffgruppe_kode | SAP |
| dim_tariffomraade | tariffomraade_kode | tariffomraade_kode | SAP |
| dim_tarifftype | tarifftype_kode | tarifftype_kode | SAP |
| dim_utdanningskode | utdanningskode | utdanningskode | Felles |
| dim_arbeidspakke_bygg | arbeidspakke_bygg_nummer | arbeidspakke_bygg_nummer | UBW |
| dim_delprosjekt | delprosjekt_nummer | delprosjekt_nummer | UBW |
| dim_prosjekt | prosjekt_nummer | prosjekt_nummer | UBW (via dim_delprosjekt) |

## Kommentar
- Koblingen mot `sap_30_stillinger` må endres for å unngå avhengighet til et view på samme nivå (self-reference).