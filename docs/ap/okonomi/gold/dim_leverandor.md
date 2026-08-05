# dim_leverandor

## Formål

Laster leverandørdimensjonen (`dim_leverandor`) i gold-laget fra `silver_ubw.asuheader`. Tabellen berikes med leverandørgruppe, språk og land via lookups.

## Datakilder

| Tabell                     | Formål            | Filtre             | Rolle                            |
| -------------------------- | ----------------- | ------------------ | -------------------------------- |
| **silver_ubw.asuheader**   | Leverandørhoder   | Ingen              | Hovedkilde                       |
| **silver_ubw.aaglanguage** | Språkkoder        | Ingen              | Lookup for `spraak_navn`         |
| **silver_ubw.aagcountry**  | Landkoder         | `land_kode = 'NO'` | Lookup for `land_navn`           |
| **silver_ubw.asugroup**    | Leverandørgrupper | Ingen              | Lookup for `kontakt_gruppe_navn` |

## Forretningsnøkler

`leverandor_nummer`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per `["kontakt_id", "leverandor_type"]` basert på `sist_oppdatert` via `remove_duplicates_on_sort_key`.

### 2. Tabellkoblinger

| Lookup      | Nøkkel              | Henter                |
| ----------- | ------------------- | --------------------- |
| aaglanguage | `spraak_kode`       | `spraak_navn`         |
| aagcountry  | `land_kode`         | `land_navn`           |
| asugroup    | `kontakt_gruppe_id` | `kontakt_gruppe_navn` |

### 3. Beregnede kolonner

| Kolonne                    | Logikk                                                          |
| -------------------------- | --------------------------------------------------------------- |
| `leverandor_nummer`        | Omdøpt fra `kontakt_id`                                         |
| `leverandor_referanse`     | Omdøpt fra `kontakt_id_referanse`                               |
| `leverandor_gruppe_nummer` | Omdøpt fra `kontakt_gruppe_id`                                  |
| `leverandor_gruppe_navn`   | Omdøpt fra `kontakt_gruppe_navn`                                |
| `hovedleverandor_nummer`   | Omdøpt fra `hovedkontakt_id`                                    |
| `leverandor`               | `concat(leverandor_nummer, " ", leverandor_navn)`               |
| `leverandor_gruppe`        | `concat(leverandor_gruppe_nummer, " ", leverandor_gruppe_navn)` |

### 4. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### 5. Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_leverandor` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
