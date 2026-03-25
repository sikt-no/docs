# sap_30_ledere

## Formål
- Vise hvem som er **leder for hver organisasjonsenhet**.
- Danner grunnlaget for **fak_ledere** i tjeneste 2.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **HRP1001** | Relasjoner mellom organisasjonsenheter og lederstillinger | `objekttype_kode = 'O'`, `relasjon_objekttype_kode = 'S'`, `relasjonstype_kode = '012'`, `relasjonsretning_kode = 'B'` |
| **HRP1000** | Organisasjonsenheter (navn og gyldighet) | `objekttype_kode = 'O'`, kun rader hvor `GETDATE()` ligger mellom `dato_fra` og `dato_til` |
| **PA0001** | Stillinger (kobler stilling til ansatt) | `stilling_id` fra HRP1001, kun aktive rader (`GETDATE()` mellom `dato_fra` og `dato_til`) |
| **PA0002** | Persondata (navn m.m.) | Ingen (seneste rad per ansatt) |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **organisasjon_id** | `t.objekt_id` fra HRP1001 (organisasjonsenhet) |
| **organisasjon_navn** | Hentes fra HRP1000 (`navn`) for `objekt_id`, seneste gyldige rad (`ROW_NUMBER() = 1`) |
| **stilling_id** | `t.relasjon_objekt_id` fra HRP1001 (lederstilling) |
| **ansatt_nummer** | Hentes fra PA0001 basert på `stilling_id` og aktiv periode |
| **fullt_navn** | Hentes fra PA0002 for `ansatt_nummer`, seneste rad (`ROW_NUMBER() = 1`) |
| **dato_fra / dato_til** | Kopieres direkte fra HRP1001 for lederrelasjonen |
| **zx-kolonner** | `zx_institusjonskode`, `zx_tidspunkt_lastet`, `zx_tidspunkt_bronze`, `zx_tidspunkt_silver` kopieres fra HRP1001 |

## Transformasjonslogikk

### 1. Personer (PA0002)
CTE **personer**:
- Leser PA0002 (persondata).
- Bruker  
  `ROW_NUMBER() OVER (PARTITION BY zx_institusjonskode, ansatt_nummer ORDER BY dato_til DESC)`  
  for å hente **siste rad per ansatt**.
- Kun `rn = 1` brukes videre.
- Leverer bl.a. `ansatt_nummer` og `fullt_navn`.

### 2. Organisasjonsenheter (HRP1000)
CTE **organisasjonsenheter**:
- Filtrerer HRP1000 til organisasjonsenheter (`objekttype_kode = 'O'`).
- Begrenser til **aktive** org-enheter:  
  `GETDATE() BETWEEN dato_fra AND dato_til`.
- Bruker  
  `ROW_NUMBER() OVER (PARTITION BY zx_institusjonskode, objekt_id ORDER BY dato_til DESC)`  
  for å hente siste gyldige rad per org-enhet.
- Kun `rn = 1` beholdes.
- Leverer bl.a. `objekt_id` (org-id) og `navn` (org-navn).

### 3. Lederrelasjoner (HRP1001 + PA0001 + PA0002)
Endelig SELECT:

- Starter fra **HRP1001** (`t`):
  - `objekttype_kode = 'O'` (organisasjonsenhet)
  - `relasjon_objekttype_kode = 'S'` (stilling)
  - `relasjonstype_kode = '012'` (lederrelasjon)
  - `relasjonsretning_kode = 'B'` (stilling som overordnet til org-enhet)

- INNER JOIN mot **organisasjonsenheter**:
  - `organisasjonsenheter.objekt_id = t.objekt_id`
  - `organisasjonsenheter.rn = 1`
  - Sikrer at kun aktive organisasjonsenheter med siste navn tas med.

- LEFT JOIN mot **PA0001**:
  - `pa0001.stilling_id = t.relasjon_objekt_id`
  - `GETDATE()` mellom `pa0001.dato_fra` og `pa0001.dato_til`
  - Kobler leder-stilling til ansatt (`ansatt_nummer`).

- LEFT JOIN mot **personer**:
  - `personer.ansatt_nummer = pa0001.ansatt_nummer`
  - `personer.rn = 1`
  - Henter `fullt_navn` for lederen basert på seneste personoppføring.

Resultatet er én rad per **organisasjonsenhet × leder**, med:
- organisasjon_id og organisasjon_navn
- stilling_id for leder
- ansatt_nummer
- fullt_navn
- gyldighetsperiode (`dato_fra` / `dato_til`) for lederrelasjonen
- zx-metadata fra HRP1001