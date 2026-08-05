# dim_arbeidspakke_bygg

## Formål

Laster dimensjonen for arbeidspakker/bygg (`dim_arbeidspakke_bygg`) i gold-laget fra `silver_ubw.agldimvalue` filtrert på aktivitetskode `B1`. For BOT-institusjoner berikes dataene med eierskap og byggruppe via relasjonsverdier.

## Datakilder

| Tabell                     | Formål            | Filtre                                             | Rolle                                |
| -------------------------- | ----------------- | -------------------------------------------------- | ------------------------------------ |
| **silver_ubw.agldimvalue** | Dimensjonsverdier | `attributt_id = 'B1'`                              | Hovedkilde                           |
| **silver_ubw.aatrelvalue** | Relasjonsverdier  | `attributes=["B1"]`, `related_attributes` varierer | Kilde for BOT-spesifikke attributter |

## Forretningsnøkler

`attributt_id` + `arbeidspakke_bygg_nummer`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per forretningsnøkkel basert på `periode_til` (synkende) via `remove_duplicates_on_sort_key`.

### 2. Tabellkoblinger

- **BOT-institusjoner**: To separate left joins med relasjonsverdier via `get_relation_data`:

| Join      | Nøkkel                     | Kilde            |
| --------- | -------------------------- | ---------------- |
| eierskap  | `arbeidspakke_bygg_nummer` | aatrelvalue (X2) |
| byggruppe | `arbeidspakke_bygg_nummer` | aatrelvalue (X3) |

- **Ikke-BOT-institusjoner**: Kolonnene `eierskap_kode`, `eierskap_navn`, `byggruppe_kode`, `byggruppe_navn` settes til `null`.

### 3. Beregnede kolonner

| Kolonne                    | Logikk                                                          |
| -------------------------- | --------------------------------------------------------------- |
| `arbeidspakke_bygg_nummer` | Omdøpt fra `dimensjon_verdi`                                    |
| `arbeidspakke_bygg_navn`   | Omdøpt fra `beskrivelse`                                        |
| `arbeidspakke_bygg`        | `concat(arbeidspakke_bygg_nummer, " ", arbeidspakke_bygg_navn)` |

### 4. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### 5. Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_arbeidspakke_bygg` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
