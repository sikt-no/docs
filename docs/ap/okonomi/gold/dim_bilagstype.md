# dim_bilagstype

## Formål

Laster dimensjonen for bilagstyper (`dim_bilagstype`) i gold-laget fra `silver_ubw.acrvouchtype`.

## Datakilder

| Tabell                      | Formål      | Filtre | Rolle      |
| --------------------------- | ----------- | ------ | ---------- |
| **silver_ubw.acrvouchtype** | Bilagstyper | Ingen  | Hovedkilde |

## Forretningsnøkler

`bilagstype_kode`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per `bilagstype_kode` basert på `sist_oppdatert` via `remove_duplicates_on_sort_key`.

### 2. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_bilagstype` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
