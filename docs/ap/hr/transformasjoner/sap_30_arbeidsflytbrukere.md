# Oppsummering – sap_30_arbeidsflytbrukere

## Formål
- Vise hvilke brukere som er en del av arbeidsflyten i hver organisasjonsenhet.
- Danner grunnlaget for **fak_arbeidsflytbrukere** i tjeneste 2.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **HRP1001** | Relasjoner mellom organisasjonsenheter og brukere (arbeidsflyt) | `objekttype_kode = 'O'`, `relasjon_objekttype_kode = 'US'`, `relasjonstype_kode = 'ZWF'` |
| **HRP1000** | Organisasjonsenheter (navn og gyldighet) | `objekttype_kode = 'O'`, kun rader hvor `GETDATE()` ligger mellom `dato_fra` og `dato_til` |
| **PA0105** | Kommunikasjonsinformasjon (brukernavn) | `kommunikasjonstype_kode = '0001'` (DFØ-brukernavn) |
| **PA0002** | Persondata (navn m.m.) | Ingen (seneste rad per ansatt) |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **organisasjon_id** | `t.objekt_id` fra HRP1001 (organisasjonsenhet) |
| **organisasjon_navn** | Hentes fra HRP1000 (`navn`) for `objekt_id`, seneste rad (`ROW_NUMBER() = 1`) |
| **brukernavn_dfo** | `t.relasjon_objekt_id` fra HRP1001, kobles mot `PA0105.kommunikasjon_id` med `kommunikasjonstype_kode = '0001'` |
| **ansatt_nummer** | Hentes fra PA0105 (seneste rad per ansatt og kommunikasjonstype, `ROW_NUMBER() = 1`) |
| **fullt_navn** | Hentes fra PA0002 (seneste rad per ansatt, `ROW_NUMBER() = 1`) |
| **dato_fra / dato_til** | Kopieres direkte fra HRP1001 for relasjonen mellom org-enhet og bruker |
| **zx-kolonner** | `zx_institusjonskode`, `zx_tidspunkt_lastet`, `zx_tidspunkt_bronze`, `zx_tidspunkt_silver` kopieres fra HRP1001 |

## Transformasjonslogikk

### 1. Brukernavn (PA0105)
CTE **brukernavn**:
- Filtrerer PA0105 til `kommunikasjonstype_kode = '0001'` (DFØ-brukernavn).
- Bruker `ROW_NUMBER() OVER (PARTITION BY zx_institusjonskode, ansatt_nummer, kommunikasjonstype_kode ORDER BY dato_til DESC)` for å finne **siste registrerte** brukernavn per ansatt.
- Kun rader med `rn = 1` brukes videre.

### 2. Personer (PA0002)
CTE **personer**:
- Leser PA0002 (persondata).
- Bruker `ROW_NUMBER() OVER (PARTITION BY zx_institusjonskode, ansatt_nummer ORDER BY dato_til DESC)` for å hente **siste rad** per ansatt.
- Kun rader med `rn = 1` beholdes.
- Leverer bl.a. `ansatt_nummer` og `fullt_navn`.

### 3. Organisasjonsenheter (HRP1000)
CTE **organisasjonsenheter**:
- Filtrerer HRP1000 til organisasjonsenheter (`objekttype_kode = 'O'`).
- Begrenser til **aktive** org-enheter: `GETDATE() BETWEEN dato_fra AND dato_til`.
- Bruker `ROW_NUMBER() OVER (PARTITION BY zx_institusjonskode, objekt_id ORDER BY dato_til DESC)` for å hente siste gyldige rad per org-enhet.
- Kun rader med `rn = 1` inngår i sluttresultatet.
- Leverer bl.a. `objekt_id` (org-id) og `navn` (org-navn).

### 4. Arbeidsflytbrukere (HRP1001 + joins)
Endelig SELECT:

- Starter fra **HRP1001** (`t`):
  - `objekttype_kode = 'O'` (organisasjonsenhet)
  - `relasjon_objekttype_kode = 'US'` (bruker)
  - `relasjonstype_kode = 'ZWF'` (arbeidsflyt-relasjon)

- INNER JOIN mot **organisasjonsenheter**:
  - `organisasjonsenheter.objekt_id = t.objekt_id`
  - `organisasjonsenheter.rn = 1`
  - Sikrer at kun aktive organisasjonsenheter med siste navn tas med.

- LEFT JOIN mot **brukernavn**:
  - `brukernavn.kommunikasjon_id = t.relasjon_objekt_id`
  - `brukernavn.rn = 1`
  - Oversetter HRP1001-bruker (US-objekt) til ansatt_nummer via DFØ-brukernavn.

- LEFT JOIN mot **personer**:
  - `personer.ansatt_nummer = brukernavn.ansatt_nummer`
  - `personer.rn = 1`
  - Henter `fullt_navn` og sikrer at kun siste personoppføring brukes.

Resultatet er én rad per **organisasjonsenhet × arbeidsflytbruker**, med:
- organisasjon_id og organisasjon_navn
- brukernavn_dfo
- ansatt_nummer
- fullt_navn
- gyldighetsperiode (`dato_fra` / `dato_til`) for arbeidsflytrelasjonen
- zx-metadata fra HRP1001