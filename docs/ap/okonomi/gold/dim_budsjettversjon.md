# dim_budsjettversjon

## Formål

Laster dimensjonen for budsjettversjoner (`dim_budsjettversjon`) i gold-laget. Kildetabell varierer basert på institusjon: HVL, UiA og USN bruker `agldimvalue`, øvrige institusjoner bruker `aplversion`.

## Datakilder

| Tabell                     | Formål            | Filtre                 | Rolle                            |
| -------------------------- | ----------------- | ---------------------- | -------------------------------- |
| **silver_ubw.aplversion**  | Budsjettversjoner | Ingen                  | Hovedkilde (ikke-HVL/UiA/USN)    |
| **silver_ubw.agldimvalue** | Dimensjonsverdier | `attributt_id = 'K10'` | Alternativ kilde (HVL, UiA, USN) |

## Forretningsnøkler

`versjon_kode`

## Transformasjonslogikk

### 1. Institusjonsspesifikk kildevalg

| Institusjon   | Kilde                              | Dedupliseringsnøkkel        |
| ------------- | ---------------------------------- | --------------------------- |
| HVL, UiA, USN | `agldimvalue` (attributt_id='K10') | `periode_til` (synkende)    |
| Øvrige        | `aplversion`                       | `sist_oppdatert` (synkende) |

### 2. Beregnede kolonner (kun HVL, UiA, USN)

Følgende kolonner finnes ikke i `agldimvalue` og settes til plassholderverdien "Ukjent":

| Kolonne            | Verdi    |
| ------------------ | -------- |
| `valuta_kode`      | "Ukjent" |
| `tidsramme`        | "Ukjent" |
| `transaksjonstype` | "Ukjent" |
| `status`           | "Ukjent" |

### 3. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### 4. Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_budsjettversjon` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
