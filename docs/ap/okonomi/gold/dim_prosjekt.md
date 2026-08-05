# dim_prosjekt

## Formål

Laster prosjektdimensjonen (`dim_prosjekt`) i gold-laget fra `silver_ubw.atsproject`. Tabellen suppleres med interne prosjekter fra `agldimvalue` og berikes med et stort antall lookups for prosjekttyper, organisasjonstilhørighet, kontraktdata, administrative roller og institusjonsspesifikke rapporteringsstrukturer.

## Datakilder

| Tabell                             | Formål                | Filtre                                   | Rolle                                                            |
| ---------------------------------- | --------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| **silver_ubw.atsproject**          | Prosjekter            | Ingen                                    | Primærkilde                                                      |
| **silver_ubw.agldimvalue**         | Interne prosjekter    | `attributt_id = 'B0'`, IKKE i atsproject | Supplerende kilde (union)                                        |
| **silver_ubw.ahsresources**        | Ressurser             | Ingen                                    | Lookup for prosjektleder                                         |
| **silver_ubw.atsproject**          | Prosjekter            | Ingen                                    | Self-join for `hovedprosjekt_navn`                               |
| **silver_ubw.afxprobesk**          | Prosjektbeskrivelse   | Ingen                                    | Lookup for `saksnr`, `annen_ekstern_ref`, `sammendrag`           |
| **silver_ubw.afxprosamarbeid**     | Samarbeidsinfo        | Ingen                                    | Lookup for koordinator- og partnerprosjektdata                   |
| **silver_ubw.agldimvalue**         | Dimensjonsverdier     | `attributt_id='A4'`                      | Lookup for `prosjektkoordinator_navn`                            |
| **silver_ubw.afxproadmin**         | Administrative roller | Ingen                                    | Lookup for prosjektøkonom, forskningsrådgiver, admin (aggregert) |
| **silver_ubw.afxpropreaward**      | Pre-award             | `attributt_id='B0'` AND `line_no=0`      | Lookup for `referanse_navn`, `kostnadskalkyle`                   |
| **silver_ubw.udv_proj_change_log** | Endringslogg          | `status IN ('C','T')`                    | Lookup for `dato_sperret_avsluttet`                              |

## Forretningsnøkler

`prosjekt_nummer`

## Transformasjonslogikk

### 1. Kildebygging

Interne prosjekter fra `agldimvalue` (B0) som ikke finnes i `atsproject` union-eres inn.

### 2. Relasjonslookups (alle institusjoner)

| Dimensjon          | Attributter | Henter                                                         |
| ------------------ | ----------- | -------------------------------------------------------------- |
| prosjekttype       | B0 + B4     | `prosjekttype_kode`, `prosjekttype_navn`, `prosjekttype`       |
| koststed           | B0 + C1     | `koststed_kode`, `koststed_navn`, `koststed`                   |
| kunde              | B0 + A4     | `kunde_nummer`, `kunde_navn`, `kunde`                          |
| overkategorisering | B0 + S11    | `overproj_kategorisering_kode`, `overproj_kategorisering_navn` |
| strategisk satsing | B0 + S12    | `strategisk_satsing_kode`, `strategisk_satsing_navn`           |
| sentertype         | B0 + S13    | `sentertype_kode`, `sentertype_navn`                           |

### 3. Relasjonslookups (institusjonsspesifikke)

| Institusjon | Dimensjon     | Attributter | Henter                                                                              |
| ----------- | ------------- | ----------- | ----------------------------------------------------------------------------------- |
| UiA         | rapportklasse | 25 + 26     | Range join – `rapportklasse_kode`, `rapportklasse_navn`, `rapportklasse`            |
| UiA         | rapportgruppe | 25          | `rapportgruppe_kode`, `rapportgruppe_navn`, `rapportgruppe`, `rapportgruppe_status` |

### 4. Tabellkoblinger

| Lookup              | Nøkkel                       | Henter                                                                                             |
| ------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------- |
| ahsresources        | `ressurs_id`                 | `prosjektleder_ressurs_id`, `prosjektleder_navn`                                                   |
| atsproject (self)   | `hovedprosjekt_nummer`       | `hovedprosjekt_navn`, `hovedprosjekt`                                                              |
| afxprobesk          | `prosjekt_nummer`            | `saksnr`, `annen_ekstern_ref`, `sammendrag`                                                        |
| afxprosamarbeid     | `prosjekt_nummer`            | `koordinatorprosjekt`, `ingen_samarbeidspartnere`, `partnerprosjekt`, `prosjektkoordinator_nummer` |
| agldimvalue (A4)    | `prosjektkoordinator_nummer` | `prosjektkoordinator_navn`                                                                         |
| afxpropreaward      | `prosjekt_nummer`            | `referanse_navn`, `kostnadskalkyle`                                                                |
| udv_proj_change_log | `prosjekt_nummer`            | `dato_sperret_avsluttet` (nyeste)                                                                  |

### 5. Administrative roller (afxproadmin – aggregert med pipe-separator)

| Kolonne                                                      | Rolle             |
| ------------------------------------------------------------ | ----------------- |
| `prosjektoekonom_id`, `prosjektoekonom_navn`                 | PROOK             |
| `prosjektoekonom_ansv_id`, `prosjektoekonom_ansv_navn`       | PROOK (ansvarlig) |
| `forskningsraadgiver_id`, `forskningsraadgiver_navn`         | FORSK             |
| `forskningsraadgiver_ans_id`, `forskningsraadgiver_ans_navn` | FORSK (ansvarlig) |
| `admin_personell_id`, `admin_personell_navn`                 | ANNEN             |
| `admin_personell_ansv_id`, `admin_personell_ansv_navn`       | ANNEN (ansvarlig) |

### 6. Beregnede kolonner

| Kolonne                    | Logikk                                        |
| -------------------------- | --------------------------------------------- |
| `prosjekt`                 | `concat(prosjekt_nummer, " ", prosjekt_navn)` |
| `aar_fra`                  | `year(periode_fra)`                           |
| `aar_til`                  | `year(periode_til)`                           |
| `koordinatorprosjekt`      | Boolean konvertert til integer (0/1)          |
| `ingen_samarbeidspartnere` | Boolean konvertert til integer (0/1)          |
| `partnerprosjekt`          | Boolean konvertert til integer (0/1)          |

### 7. Datakvalitet

- `replace_empty_column_values`: Erstatter tomme verdier i forretningsnøkkelkolonner.
- `insert_unknown_row`: Legger til ukjent-rad for uløste fremmednøkler.

### 8. Lastelogikk og måltabeller

Laster til `gold_okonomi.dim_prosjekt` som SCD Type 1 via `load_dimension_scd1` med `delete_when_not_matched=True`.
