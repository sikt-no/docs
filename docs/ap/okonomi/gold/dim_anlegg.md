# dim_anlegg

## Formål

Laster anleggsdimensjonen (`dim_anlegg`) i gold-laget fra kildetabellen `silver_ubw.aatasset`. Tabellen inneholder informasjon om anleggsmidler per institusjon. For BOT-institusjoner berikes dataene med relasjonsverdier (serienummer, servicetag, plassering, utstyrsgruppe, eiersted).

## Datakilder

| Tabell                       | Formål            | Filtre                                                                   | Rolle                                |
| ---------------------------- | ----------------- | ------------------------------------------------------------------------ | ------------------------------------ |
| **silver_ubw.aatasset**      | Anleggsmidler     | Ingen                                                                    | Hovedkilde                           |
| **silver_ubw.aatassetgroup** | Anleggsgrupper    | Ingen                                                                    | Lookup for `anlegg_gruppe_navn`      |
| **silver_ubw.aatrelvalue**   | Relasjonsverdier  | `attributes=["F0"]`, `related_attributes` varierer                       | Kilde for BOT-spesifikke attributter |
| **silver_ubw.agldimvalue**   | Dimensjonsverdier | `attributt_id='W22'` (plassering) / `attributt_id='W23'` (utstyrsgruppe) | Lookup for beskrivelsestekst         |

## Forretningsnøkler

`attributt_id` + `anlegg_id`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per forretningsnøkkel (`attributt_id`, `anlegg_id`) basert på `sist_oppdatert` via `remove_duplicates_on_sort_key`.

### 2. Tabellkoblinger

- **aatassetgroup**: Left join på `anlegg_gruppe_kode` for å hente `anlegg_gruppe_navn`.
- **BOT-institusjoner** (institusjon starter med `bot`): Fem separate left joins med relasjonsverdier hentet via `get_relation_data`:

| Join          | Nøkkel                                | Kilde                           |
| ------------- | ------------------------------------- | ------------------------------- |
| serienummer   | `anlegg_id = serienummer_anlegg_id`   | aatrelvalue (W20)               |
| servicetag    | `anlegg_id = servicetag_anlegg_id`    | aatrelvalue (W21)               |
| plassering    | `anlegg_id = plassering_anlegg_id`    | aatrelvalue (W22) + agldimvalue |
| utstyrsgruppe | `anlegg_id = utstyrsgruppe_anlegg_id` | aatrelvalue (W23) + agldimvalue |
| eiersted      | `anlegg_id = eiersted_anlegg_id`      | aatrelvalue (C1)                |

- **Ikke-BOT-institusjoner**: Kolonnene `serienummer`, `servicetag`, `anlegg_plassering`, `anlegg_utstyrsgruppe` og `eiersted` settes til `null`.

### 3. Beregnede kolonner

| Kolonne                | Logikk                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| `anlegg_plassering`    | `concat(plassering_relasjon_verdi, " ", beskrivelse)` fra agldimvalue (W22, siste gyldige periode)    |
| `anlegg_utstyrsgruppe` | `concat(utstyrsgruppe_relasjon_verdi, " ", beskrivelse)` fra agldimvalue (W23, siste gyldige periode) |

### 4. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_anlegg` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True` (sletter rader som ikke lenger finnes i kilden).
