# dim_kunde

## Formål

Laster kundedimensjonen (`dim_kunde`) i gold-laget fra `silver_ubw.acuheader`. Tabellen berikes med kundegruppe, språk, land og adresseinformasjon via lookups.

## Datakilder

| Tabell                     | Formål       | Filtre               | Rolle                                                 |
| -------------------------- | ------------ | -------------------- | ----------------------------------------------------- |
| **silver_ubw.acuheader**   | Kundehoder   | Ingen                | Hovedkilde                                            |
| **silver_ubw.acugroup**    | Kundegrupper | Ingen                | Lookup for `kunde_gruppe_navn`                        |
| **silver_ubw.aaglanguage** | Språkkoder   | Ingen                | Lookup for `spraak_navn`                              |
| **silver_ubw.aagcountry**  | Landkoder    | `spraak_kode = 'NO'` | Lookup for `land_navn`                                |
| **silver_ubw.agladdress**  | Adresser     | Ingen                | Lookup for adresse, postnr, poststed, e-post, telefon |

## Forretningsnøkler

`kunde_nummer`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per `kontakt_id` basert på `sist_oppdatert` via `remove_duplicates_on_sort_key`.

### 2. Tabellkoblinger

| Lookup      | Nøkkel              | Henter                                                                                                     |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------------- |
| acugroup    | `kontakt_gruppe_id` | `kunde_gruppe_navn`                                                                                        |
| aaglanguage | `spraak_kode`       | `spraak_navn`                                                                                              |
| aagcountry  | `land_kode`         | `land_navn`                                                                                                |
| agladdress  | `kontakt_id`        | `adresse`, `postnr`, `poststed`, `e_post`, `telefon` (nyeste adresse via vindufunksjon på `adr_sekvensnr`) |

### 3. Beregnede kolonner

| Kolonne               | Logikk                                                |
| --------------------- | ----------------------------------------------------- |
| `kunde_nummer`        | Omdøpt fra `kontakt_id`                               |
| `kunde_navn`          | Omdøpt fra `kontakt_navn`                             |
| `kunde_type`          | Omdøpt fra `kontakt_type`                             |
| `kunde_navn_kort`     | Omdøpt fra `navn_kort`                                |
| `kunde_referanse`     | Omdøpt fra `kontakt_id_referanse`                     |
| `kunde_gruppe_nummer` | Omdøpt fra `kontakt_gruppe_id`                        |
| `hovedkunde_nummer`   | Omdøpt fra `hovedkontakt_id`                          |
| `kunde`               | `concat(kunde_nummer, " ", kunde_navn)`               |
| `kunde_gruppe`        | `concat(kunde_gruppe_nummer, " ", kunde_gruppe_navn)` |
| `swift`               | `substring(swift_kode, 1, 11)`                        |

### 4. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_kunde` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
