# dim_periode

## Formål

Laster periodedimensjonen (`dim_periode`) i gold-laget fra `silver_ubw.acrperiod`. Tabellen beriker kildedata med lesbare periode- og månedsnavn på norsk.

## Datakilder

| Tabell                   | Formål            | Filtre | Rolle      |
| ------------------------ | ----------------- | ------ | ---------- |
| **silver_ubw.acrperiod** | Regnskapsperioder | Ingen  | Hovedkilde |

## Forretningsnøkler

`periode_id` + `periode`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per `["periode_id", "periode"]` basert på `sist_oppdatert` via `remove_duplicates_on_sort_key`.

### 2. Beregnede kolonner

| Kolonne           | Logikk                                                        |
| ----------------- | ------------------------------------------------------------- |
| `maanednr`        | `cast(substring(periode, 5, 2) as int)` – månedsnummer (0–12) |
| `maaned_kortnavn` | Mapping: 1→Jan, 2→Feb, …, 12→Des, 0→P0                        |
| `maaned`          | Mapping: 1→Januar, 2→Februar, …, 12→Desember, 0→Periode 0     |
| `periode_navn`    | `concat(maaned_kortnavn, "-", aar)` (f.eks. "Jan-2024")       |
| `periode_dato`    | `to_date(concat(periode, "01"), "yyyyMMdd")`                  |
| `dato_fra`        | Castet til `DateType`                                         |
| `dato_til`        | Castet til `DateType`                                         |

### 3. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_periode` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
