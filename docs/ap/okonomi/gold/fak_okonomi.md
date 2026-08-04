# fak_okonomi

## Formål

Laster faktatabellen for økonomi (`fak_okonomi`) i gold-laget. Tabellen kombinerer regnskapstransaksjoner (`agltransact`) og budsjetttransaksjoner (`apltransact` + `apltransactvalue`) og slår opp alle dimensjonsnøkler. Støtter inkrementell lasting basert på antall år.

## Datakilder

| Tabell                                     | Formål                     | Filtre                    | Rolle                  |
| ------------------------------------------ | -------------------------- | ------------------------- | ---------------------- |
| **silver_ubw.agltransact**                 | Regnskapstransaksjoner     | Inkrementelt basert på år | Primærkilde regnskap   |
| **silver_ubw.apltransact**                 | Budsjetttransaksjoner      | Inkrementelt basert på år | Primærkilde budsjett   |
| **silver_ubw.apltransactvalue**            | Budsjettransaksjonsverdier | Ingen                     | Join med apltransact   |
| **gold_okonomi.dim_anlegg**                | Anleggsdimensjon           | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_arbeidspakke_bygg**     | Arbeidspakke/bygg          | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_bilagstype**            | Bilagstyper                | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_budsjettprofil**        | Budsjettprofiler           | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_budsjettversjon**       | Budsjettversjoner          | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_delprosjekt**           | Delprosjekter              | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_konto**                 | Kontoplan                  | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_koststed**              | Koststed                   | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_kunde**                 | Kunder                     | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_leverandor**            | Leverandører               | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_periode**               | Perioder                   | `periode_id = 'GL'`       | Dimensjonslookup       |
| **gold_okonomi.dim_prosjekt**              | Prosjekter                 | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_prosjekt_arbeidspakke** | Prosjektarbeidspakker      | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_ressurs**               | Ressurser                  | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_hovedfinansiering**     | Hovedfinansiering          | Ingen                     | Dimensjonslookup       |
| **gold_okonomi.dim_organisasjon**          | Organisasjon               | Ingen                     | Dimensjonslookup (BOT) |

## Forretningsnøkler

`transaksjon_id` (faktatabell – transaksjonsnøkkel)

## Transformasjonslogikk

### 1. Kildebygging

Regnskaps- og budsjettdata union-eres:

- **Regnskap**: Fra `agltransact`, flagget med `kilde = 'regnskap'`.
- **Budsjett**: Join mellom `apltransact` og `apltransactvalue` på `transaksjon_id`, flagget med `kilde = 'budsjett'`.

### 2. Inkrementell lasting

Parametere styrer om tabellen lastes fullt på nytt eller kun for de siste N år.

### 3. Institusjonsspesifikke kolonner (BOT)

| Kolonne                    | Logikk                                                                   |
| -------------------------- | ------------------------------------------------------------------------ |
| `kopi_budsjett`            | Hentes fra `kostnadskategori_budsjett` der `fri_attributt_2_id = 'S02'`  |
| `stillingskode_budsjett`   | Hentes fra `kostnadskategori_budsjett` der `fri_attributt_2_id = 'ZZ04'` |
| `kopibeskrivelse_budsjett` | Lookup fra agldimvalue via `kostnadskategori_budsjett` (S02)             |
| `organisasjon_id_nivaa6`   | Lookup fra koststedtabell                                                |

### 4. Beregnede kolonner

| Kolonne                  | Logikk                                                                          |
| ------------------------ | ------------------------------------------------------------------------------- |
| `zk_dim_dato`            | Periodemapping: periode 00→0101, 01–12→MM01, 13→1231; konvertert til dato       |
| `prosjekt_nummer`        | Utledet fra `dimensjon_2`–`dimensjon_7` basert på institusjonskonfigurasjon     |
| `delprosjekt_nummer`     | Utledet fra `dimensjon_2`–`dimensjon_7` basert på institusjonskonfigurasjon     |
| `bygg_nummer`            | Utledet fra `dimensjon_2`–`dimensjon_7` basert på institusjonskonfigurasjon     |
| `ressurs_nummer`         | Utledet fra `dimensjon_2`–`dimensjon_7` basert på institusjonskonfigurasjon     |
| `hovedfinansiering_kode` | Utledet via `create_hovedfinansiering_columns()` (institusjonsspesifikk logikk) |
| Opprinnelig budsjett     | Utledet via `create_opprinnelig_budsjett_columns()`                             |
| Revidert budsjett        | Utledet via `create_revidert_budsjett_columns()`                                |

### 5. Dimensjonslookups

Alle dimensjonssurrogatnøkler lagres med prefiks `zk_dim_`:

| Surrogatnøkkel                 | Join-nøkkel                         |
| ------------------------------ | ----------------------------------- |
| `zk_dim_konto`                 | `konto_kode`                        |
| `zk_dim_koststed`              | `koststed_kode`                     |
| `zk_dim_prosjekt`              | `prosjekt_nummer`                   |
| `zk_dim_delprosjekt`           | `delprosjekt_nummer`                |
| `zk_dim_arbeidspakke_bygg`     | `bygg_nummer`                       |
| `zk_dim_ressurs`               | `ressurs_nummer`                    |
| `zk_dim_kunde`                 | `kontakt_id` + `kontakt_type`       |
| `zk_dim_leverandor`            | `kontakt_id` + `kontakt_type`       |
| `zk_dim_periode`               | `periode` (kun periode_id='GL')     |
| `zk_dim_bilagstype`            | `bilagstype_kode`                   |
| `zk_dim_budsjettprofil`        | `budsjettprofil_kode`               |
| `zk_dim_budsjettversjon`       | `versjon_kode`                      |
| `zk_dim_prosjekt_arbeidspakke` | `prosjekt_nummer` + `bygg_nummer`   |
| `zk_dim_anlegg`                | `attributt_6_id` + `ressurs_nummer` |
| `zk_dim_hovedfinansiering`     | `hovedfinansiering_kode`            |
| `zk_dim_organisasjon`          | `organisasjon_id_nivaa6` (BOT)      |

### Lastelogikk og måltabeller

Laster til `gold_okonomi.fak_okonomi` inkrementelt via `write_table_incrementally()` med mulighet for full reload.
