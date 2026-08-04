# dim_ressurs

## Formål

Laster ressursdimensjonen (`dim_ressurs`) i gold-laget fra `silver_ubw.ahsresources`. Tabellen beriker kildedata med normaliserte kjønnsverdier.

## Datakilder

| Tabell                      | Formål              | Filtre | Rolle      |
| --------------------------- | ------------------- | ------ | ---------- |
| **silver_ubw.ahsresources** | Ressurser / ansatte | Ingen  | Hovedkilde |

## Forretningsnøkler

`ressurs_nummer`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per `ressurs_id` (omdøpt til `ressurs_nummer`) basert på `sist_oppdatert` via `remove_duplicates_on_sort_key`.

### 2. Beregnede kolonner

| Kolonne            | Logikk                                                                           |
| ------------------ | -------------------------------------------------------------------------------- |
| `ressurs_nummer`   | Omdøpt fra `ressurs_id`                                                          |
| `kjonn_kode`       | `CASE WHEN kjonn='M' THEN 'M' WHEN kjonn='F' THEN 'K' ELSE 'Ukjent'`             |
| `kjonn_navn`       | `CASE WHEN kjonn='M' THEN 'Mann' WHEN kjonn='F' THEN 'Kvinne' ELSE 'Ukjent'`     |
| `kjonn`            | `CASE WHEN kjonn='M' THEN 'M Mann' WHEN kjonn='F' THEN 'K Kvinne' ELSE 'Ukjent'` |
| `ressurstype_kode` | `coalesce(ressurstype_kode, 'Ukjent')`                                           |

### 3. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_ressurs` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
