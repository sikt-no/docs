# dim_hovedfinansiering

## Formål

Laster dimensjonen for hovedfinansiering (`dim_hovedfinansiering`) i gold-laget fra en manuelt opplastet referansetabell.

## Datakilder

| Tabell                                          | Formål                                        | Filtre | Rolle      |
| ----------------------------------------------- | --------------------------------------------- | ------ | ---------- |
| **manual_files.manual_files.hovedfinansiering** | Manuelt vedlikeholdt finansieringskodekatalog | Ingen  | Hovedkilde |

## Forretningsnøkler

`hovedfinansiering_kode`

## Transformasjonslogikk

### 1. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### 2. Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_hovedfinansiering` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
