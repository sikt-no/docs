# dim_koststed

## Formål

Laster koststedsdimensjonen (`dim_koststed`) i gold-laget fra `silver_ubw.agldimvalue` filtrert på attributt `C1`. Tabellen berikes med et hierarki av organisasjonsnivåer (koststedtype, campus, seksjon, institutt, fakultet) via relasjonsverdier med prioritetshåndtering.

## Datakilder

| Tabell                     | Formål            | Filtre                                        | Rolle                             |
| -------------------------- | ----------------- | --------------------------------------------- | --------------------------------- |
| **silver_ubw.agldimvalue** | Dimensjonsverdier | `attributt_id = 'C1'`                         | Hovedkilde                        |
| **silver_ubw.aatrelvalue** | Relasjonsverdier  | `attributes` og `related_attributes` varierer | Kilde for organisasjonshierarkiet |
| **silver_ubw.agldimvalue** | Dimensjonsverdier | Varierer per nivå                             | Lookup for beskrivelsestekst      |

## Forretningsnøkler

`koststed_kode`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per `dimensjon_verdi` (omdøpt til `koststed_kode`) basert på `periode_til` (synkende) via `remove_duplicates_on_sort_key`.

### 2. Hierarkiske relasjonslookups

| Dimensjon          | Attributter | Henter                                                            |
| ------------------ | ----------- | ----------------------------------------------------------------- |
| koststedtype       | C1 + R40    | `koststedtype_kode`, `koststedtype_navn`                          |
| campus             | C1 + R30    | `campus_kode`, `campus_navn`                                      |
| nivaa4 (seksjon)   | C1 + R20    | Range join – `nivaa4_kode`, `nivaa4_navn`                         |
| nivaa3 (institutt) | R20 + R21   | Range join med prioritet (0, 1, 2) – `nivaa3_kode`, `nivaa3_navn` |
| nivaa2 (fakultet)  | R21 + R22   | Range join med prioritet (0, 1, 2) – `nivaa2_kode`, `nivaa2_navn` |

### 3. Prioritetshåndtering (nivaa2 og nivaa3)

For organisasjonsnivåer med overlappende relasjoner brukes `coalesce()` for å velge laveste prioritet (0 → 1 → 2) som gjeldende verdi.

### 4. Beregnede kolonner

| Kolonne         | Logikk                                      |
| --------------- | ------------------------------------------- |
| `koststed_kode` | Omdøpt fra `dimensjon_verdi`                |
| `koststed_navn` | Omdøpt fra `beskrivelse`                    |
| `koststed`      | `concat(koststed_kode, " ", koststed_navn)` |
| `seksjon`       | `concat(nivaa4_kode, " ", nivaa4_navn)`     |
| `institutt`     | `concat(nivaa3_kode, " ", nivaa3_navn)`     |
| `fakultet`      | `concat(nivaa2_kode, " ", nivaa2_navn)`     |

### 5. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### 6. Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_koststed` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
