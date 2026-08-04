# dim_budsjettprofil

## Formål

Laster dimensjonen for budsjettprofiler (`dim_budsjettprofil`) i gold-laget fra `silver_ubw.aplprofile`.

## Datakilder

| Tabell                    | Formål           | Filtre | Rolle      |
| ------------------------- | ---------------- | ------ | ---------- |
| **silver_ubw.aplprofile** | Budsjettprofiler | Ingen  | Hovedkilde |

## Forretningsnøkler

`budsjettprofil_kode`

## Transformasjonslogikk

### 1. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_budsjettprofil` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
