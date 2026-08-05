# dim_konto

## Formål

Laster kontodimensjonen (`dim_konto`) i gold-laget fra `silver_ubw.aglaccounts`. Tabellen berikes med hierarkiske grupperingsnivåer (klasse, gruppe, undergruppe, kategorisering) via relasjonsverdier. Logikken er sterkt institusjonsspesifikk for SIKT, UiA, BOT og UiO.

## Datakilder

| Tabell                     | Formål            | Filtre                                             | Rolle                        |
| -------------------------- | ----------------- | -------------------------------------------------- | ---------------------------- |
| **silver_ubw.aglaccounts** | Kontoplan         | Ingen                                              | Hovedkilde                   |
| **silver_ubw.aatrelvalue** | Relasjonsverdier  | `attributes=["A0"]`, `related_attributes` varierer | Kilde for hierarkiske nivåer |
| **silver_ubw.agldimvalue** | Dimensjonsverdier | Varierer per relasjon                              | Lookup for beskrivelsestekst |

## Forretningsnøkler

`konto_kode`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per `konto_kode` basert på `periode_til` via `remove_duplicates_on_sort_key`.

### 2. Institusjonsspesifikk kontoplanstruktur

**SIKT:** Bruker `create_standard_kontoplan_columns()` for standardisert kontoplanstruktur.

**Øvrige institusjoner:** Hierarkiske koder utledes ved substring av `konto_kode`:
| Kolonne | Logikk |
|---------|--------|
| `klasse_kode` | `substring(konto_kode, 1, 1)` |
| `gruppe_kode` | `substring(konto_kode, 1, 2)` |
| `undergruppe_kode` | `substring(konto_kode, 1, 3)` |

### 3. Relasjonslookups (alle institusjoner unntatt SIKT)

| Dimensjon      | Attributter         | Henter                                                                           |
| -------------- | ------------------- | -------------------------------------------------------------------------------- |
| klasse         | A0 + klasse         | `klasse_beskrivelse` → `klasse_navn`                                             |
| gruppe         | A0 + gruppe         | `gruppe_beskrivelse` → `gruppe_navn`                                             |
| undergruppe    | A0 + undergruppe    | `undergruppe_beskrivelse` → `undergruppe_navn`                                   |
| kategorisering | A0 + kategorisering | Range join på `konto_kode` mellom `attributt_verdi_fra` og `attributt_verdi_til` |

### 4. Relasjonslookups (institusjonsspesifikke)

| Institusjon | Dimensjon           | Attributter                    | Henter                                                  |
| ----------- | ------------------- | ------------------------------ | ------------------------------------------------------- |
| UiA         | regnskapsgruppe3    | 25 + 26                        | Range join – `rapportklasse_kode`, `rapportklasse_navn` |
| BOT         | rappgrp             | A0 + rapport gruppe            | `rappgrp_beskrivelse`, `rappgrp_relasjon_verdi`         |
| BOT         | rappnfr             | rapport nfr                    | `rappnfr_beskrivelse`                                   |
| UiO         | kontorelasjon1-5    | A0 + Q41 → Q45 (kjedede joins) | `kontorelasjon1`–`kontorelasjon5`                       |
| UiO         | egenfinansiering    | A0 + Q30                       | `egenfinansiering`                                      |
| UiO         | indirekte kostnader | A0 + Q31                       | `indirekte_kostnader`                                   |

### 5. Beregnede kolonner

| Kolonne          | Logikk                                                  |
| ---------------- | ------------------------------------------------------- |
| `konto`          | `concat(konto_kode, " ", konto_navn)`                   |
| `klasse`         | `concat(klasse_kode, " ", klasse_navn)`                 |
| `gruppe`         | `concat(gruppe_kode, " ", gruppe_navn)`                 |
| `undergruppe`    | `concat(undergruppe_kode, " ", undergruppe_navn)`       |
| `kategorisering` | `concat(kategorisering_kode, " ", kategorisering_navn)` |
| `konto_regel`    | Castet til integer                                      |
| `b_flagg`        | Castet til integer                                      |

### 6. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### 7. Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_konto` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
