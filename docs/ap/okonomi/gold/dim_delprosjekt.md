# dim_delprosjekt

## Formål

Laster dimensjonen for delprosjekter (`dim_delprosjekt`) i gold-laget fra `silver_ubw.atsworkorder`. Tabellen berikes med kontraktsdata, finansieringsdata, rolledata og institusjonsspesifikke dimensjoner via en rekke lookups og relasjonsverdier.

## Datakilder

| Tabell                        | Formål              | Filtre                                             | Rolle                                                  |
| ----------------------------- | ------------------- | -------------------------------------------------- | ------------------------------------------------------ |
| **silver_ubw.atsworkorder**   | Delprosjekter       | Ingen                                              | Hovedkilde                                             |
| **silver_ubw.ahsresources**   | Ressurser           | Ingen                                              | Lookup for delprosjektansvarlig                        |
| **silver_ubw.atsproject**     | Prosjekter          | Ingen                                              | Lookup for `prosjekt_navn`                             |
| **silver_ubw.afxaofin**       | Kontraktsbeløp      | Ingen                                              | Lookup for finansieringsbeløp                          |
| **silver_ubw.afxaoegenfin**   | Egenfinansiering    | Ingen                                              | Lookup for `egenfinansiering_prosent`                  |
| **silver_ubw.afxaoindirekte** | Indirekte kostnader | Ingen                                              | Lookup for `dekning_ik_prosent`                        |
| **silver_ubw.afxaobesk**      | Beskrivelse         | Ingen                                              | Lookup for `saksnr`, `annen_ekstern_ref`, `sammendrag` |
| **silver_ubw.afxprokontrakt** | Kontrakt            | Ingen                                              | Lookup for kontraktdetaljer                            |
| **silver_ubw.afxpropreaward** | Pre-award           | Ingen                                              | Lookup for `kostnadskalkyle`                           |
| **silver_ubw.aatrelvalue**    | Relasjonsverdier    | `attributes=["BF"]`, `related_attributes` varierer | Kilde for institusjonsspesifikke dimensjoner           |
| **silver_ubw.agldimvalue**    | Dimensjonsverdier   | Varierer per relasjon                              | Lookup for dimensjonsbeskrivelser                      |

## Forretningsnøkler

`delprosjekt_nummer`

## Transformasjonslogikk

### 1. Deduplisering

Velger nyeste rad per `delprosjekt_nummer` basert på `dato_til` via `remove_duplicates_on_sort_key`.

### 2. Tabellkoblinger

| Lookup         | Nøkkel               | Henter                                                                                                    |
| -------------- | -------------------- | --------------------------------------------------------------------------------------------------------- |
| ahsresources   | `ressurs_id`         | `delprosjektansvarlig_ressursnummer`, `delprosjektansvarlig_navn`                                         |
| atsproject     | `prosjekt_nummer`    | `prosjekt_navn`                                                                                           |
| afxaofin       | `delprosjekt_nummer` | `kontraktsbeloep_valutabeloep`, `kontraktsbeloep_valuta`, `kontraktsbeloep_valutakurs`, `kontraktsbeloep` |
| afxaoegenfin   | `delprosjekt_nummer` | `egenfinansiering_prosent`                                                                                |
| afxaoindirekte | `delprosjekt_nummer` | `dekning_ik_prosent`                                                                                      |
| afxaobesk      | `delprosjekt_nummer` | `saksnr`, `annen_ekstern_ref`, `sammendrag`                                                               |
| afxprokontrakt | `prosjekt_nummer`    | Kontraktdetaljer                                                                                          |
| afxpropreaward | `delprosjekt_nummer` | `kostnadskalkyle`                                                                                         |

### 3. Institusjonsspesifikke dimensjoner (via `get_relation_data`)

| Dimensjon                 | Attributter | Henter                                                             |
| ------------------------- | ----------- | ------------------------------------------------------------------ |
| koststed                  | BF + C1     | `koststed_kode`, `koststed_navn`, `koststed`                       |
| kundenummer               | BF + A4     | `kundenummer`, `kunde_navn`                                        |
| aktivitet                 | BF + V25    | `aktivitet_kode`, `aktivitet_navn`                                 |
| aktivitetstype            | BF + V22    | `aktivitetstype_kode`, `aktivitetstype_navn`                       |
| avsetning                 | BF + V24    | `avsetninger_overfoeringer_kode`, `avsetninger_overfoeringer_navn` |
| finansieringskilde        | BF + V21    | `finansieringskilde_kode`, `finansieringskilde_navn`               |
| finanskilde spesifisering | BF + V23    | `finanskilde_spesifisering_kode`, `finanskilde_spesifisering_navn` |

### 4. Beregnede kolonner

| Kolonne                 | Logikk                                              |
| ----------------------- | --------------------------------------------------- |
| `delprosjekt`           | `concat(delprosjekt_nummer, " ", delprosjekt_navn)` |
| `dato_fra` / `dato_til` | Datoer før 1900-01-01 erstattes med 1900-01-01      |

### 5. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_delprosjekt` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
