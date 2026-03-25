# Oppsummering – sap_30_stillinger

## Formål
- Sammenstille alle stillingsforhold for ansatte i UH-sektoren til én samlet faktatabell (**fak_stillinger**) i tjeneste 2.
- Kombinere hovedstillinger, tilleggsstillinger og TOA-stillinger fra de tre relevante 20-viewene.
- Harmoniserer datointervaller og fjerner nullverdier i attributter for robust dimensjonstilknytning.

## Datakilder (lag 20)
| Tabell | Rolle | Filtre |
|--------|-------|--------|
| **sap_20_stillinger_pa0001** | Hovedstillinger | Ingen |
| **sap_20_stillinger_pa0509** | Tilleggsstillinger og fungeringer | Ingen |
| **sap_20_stillinger_pa9024x** | TOA-stillinger | Ingen |

## Transformasjonslogikk

### 1. Kombinering av kilder
Alle tre stillingstabeller kombineres med `UNION ALL` via `unionByName(allowMissingColumns=True)`, slik at manglende kolonner fylles med null og skjemaene håndteres fleksibelt.

### 2. Håndtering av nullverdier
Nullverdier i sentrale attributter erstattes for å:
- sikre stabil join mot dimensjoner,
- sikre sammenlignbar hashing av rader,
- unngå brudd i datointervaller.

Kolonner som standardiseres inkluderer bl.a.  
`ansatt_nummer`, `organisasjon_id`, `stilling_id`, `koststed_kontering_kode`, `medarbeidergruppe_kode`, `kjonn_navn`, `utdanningskode`, `yrkeskode`, mm.

### 3. Rensing av delprosjekt
Fjerner prefiks med to bokstaver (f.eks. *UT*, *UB*) fra `delprosjekt_nummer` for å speile praksis fra UBW-kildedata.

### 4. Mengdeutjevning via datointervall-sammenslåing
Like påfølgende rader (dvs. rader hvor alle kolonner utenom `dato_fra` og `dato_til` er identiske) slås sammen til ett datointervall.  
Dette gjøres ved:

1. Beregning av hash for alle kolonner unntatt dato.
2. Sammenligning av hash med hash på forrige rad innen samme ansatt/stillingsforhold.
3. Slå sammen intervaller der hashen matcher.

Resultatet er én rad per unikt stillingsforhold per konsistent periode.

## Nøkler og dimensjonstilknytning

| Dimensjonstabell | Business key (fakta) | Business key (dimensjon) | Kommentar |
|------------------|-----------------------|---------------------------|-----------|
| **dim_alder** | alder | alder | Fellesdimensjon |
| **dim_kjonn** | kjonn_navn | kjonn_navn | Fellesdimensjon |
| **dim_koststed** | koststed_kode | koststed_kode | Fellesdimensjon |
| **dim_land** | land_kode_adresse | land_kode | Fellesdimensjon |
| **dim_medarbeidergruppe** | medarbeidergruppe_kode | medarbeidergruppe_kode | SAP-dimensjon |
| **dim_medarbeiderundergruppe** | medarbeiderundergruppe_kode | medarbeiderundergruppe_kode | SAP-dimensjon |
| **dim_organisasjon_sap** | organisasjon_id | organisasjon_id | SAP-dimensjon |
| **dim_person** | ansatt_nummer<br>dato_fra<br>dato_til | ansatt_nummer<br>dato_fra<br>dato_til | SAP-dimensjon (fakta‐intervall må overlappe dim‐intervall) |
| **dim_poststed** | postnummer_adresse | postnummer | Fellesdimensjon |
| **dim_spraak** | spraak_kommunikasjon | spraak_kode | Fellesdimensjon |
| **dim_stillingskode** | stillingskode | stillingskode | Fellesdimensjon |
| **dim_styrk_kode** | styrk_kode | styrk_kode | Fellesdimensjon |
| **dim_tariffgruppe** | tariffgruppe_kode | tariffgruppe_kode | SAP-dimensjon |
| **dim_tariffomraade** | tariffomraade_kode | tariffomraade_kode | SAP-dimensjon |
| **dim_tarifftype** | tarifftype_kode | tarifftype_kode | SAP-dimensjon |
| **dim_utdanningskode** | utdanningskode | utdanningskode | Fellesdimensjon |

## Skriving til mål
- Resultatet skrives til:  
  **`{catalog}.transformation_hr.sap_30_stillinger`**
- Format: Delta  
- Mode: `overwrite`  
- Skjemautvidelser tillates (`overwriteSchema = true`)