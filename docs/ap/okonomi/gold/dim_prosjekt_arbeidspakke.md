# dim_prosjekt_arbeidspakke

## Formål

Laster dimensjonen for prosjektarbeidspakker (`dim_prosjekt_arbeidspakke`) i gold-laget fra `silver_ubw.atsactivity`.

## Datakilder

| Tabell                     | Formål                              | Filtre | Rolle      |
| -------------------------- | ----------------------------------- | ------ | ---------- |
| **silver_ubw.atsactivity** | Prosjektaktiviteter / arbeidspakker | Ingen  | Hovedkilde |

## Forretningsnøkler

`prosjekt_nummer` + `arbeidspakke_nummer`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per forretningsnøkkel basert på `sist_oppdatert` via `remove_duplicates_on_sort_key`.

### 2. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### 3. Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_prosjekt_arbeidspakke` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
