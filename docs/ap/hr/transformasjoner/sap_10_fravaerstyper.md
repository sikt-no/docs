# sap_10_fravaerstyper

## Formål
Bygger en komplett oversikt over fraværstyper med tilhørende tekster, SAP-kategorier og BOTs egendefinerte kategorier/indikatorer. Brukes som oppslagstabell i fraværsanalyser.

## Datakilde
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **T554S** | Fraværstyper med historikk | Siste versjon per `fravaerstype_kode` basert på `dato_til DESC` | Grunnlagstabell |
| **T554T** | Tekster for fraværstyper | — | Tilfører `fravaerstype_navn` |
| **T5A4O** | SAP fraværskategorier | — | Tilfører `fravaerskategori_kode` og `fravaerskategori_navn` |
| **fravaerskategorier** | BOT egendefinerte kategorier | — | Tilfører hovedkategorier, underkategorier og indikatorer |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| Alle kategori- og indikatorkolonner | `coalesce(kilde, 'Ukjent')` — Defaulter til `Ukjent` dersom verdi mangler |
| **fravaerskategori_kode** | `coalesce(kilde, '-1')` — Defaulter til `-1` dersom verdi mangler |

## Transformasjonslogikk (PySpark)
### 1. Load source data
Laster `t554s`, `t554t`, `t5a4o` og `fravaerskategorier` fra `silver_sap`.

### 2. Get latest version of T554S
Bruker `row_number()` partisjonert på `fravaerstype_kode`, sortert på `dato_til DESC`, og filtrerer på `rn = 1`.

### 3. Join with texts from T554T
Left join med `t554t` på `fravaerstype_kode` og `zx_institusjonskode` for å hente `fravaerstype_navn`.

### 4. Create final result with categories
Left join med `t5a4o` på `fravaerskategori_kode` for SAP-kategorier, og left join med `fravaerskategorier` på `fravaerstype_kode` for BOTs egendefinerte kategorier og indikatorer.

### 5. Write to target
Skriver resultatet til `transformation_hr.sap_10_fravaerstyper` med `overwrite` og `overwriteSchema`.
