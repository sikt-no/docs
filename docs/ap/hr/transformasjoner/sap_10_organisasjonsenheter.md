# Oppsummering – sap_10_organisasjonsenheter

## Formål
- Lager en utflatet organisasjonsstruktur med opptil 10 nivåer og historiske data basert på HRP1001-relasjoner.
- Strukturen inneholder informasjon om overordnede enheter, ledere, DBH-avdelinger og koststedsinformasjon med historikk.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **HRP1000** | Objektinformasjon | `objekttype_kode = 'O'` (org.enheter), `objekttype_kode = '03'` (DBH) | Definerer org.enheter og DBH-avdelinger |
| **HRP1001** | Objektrelasjoner | Flere relasjonstype-filtre | Definerer relasjon mellom organisasjonsenheter, leder, DBH-avdelinger og hovedkostnadssted |
| **HRP1008** | Relasjon til PDO | `objekttype_kode = 'O'`, `planversjon_kode = '10'`, `planleggingsstatus_kode = '1'`, `infotype_kode = '1008'` | Definerer relasjon mellom organisasjonsenheter og PDO |
| **HRP1018** | Relasjoner til kostnadsfordeling | `objekttype_kode = 'O'`, `planversjon_kode = '10'`, `planleggingsstatus_kode = '1'`, `infotype_kode = '1018'` | Definerer relasjonen mellom organisasjonsenheter og kostnadsfordelingsinformasjonen i `HRP1018` via `tabellreferanse_nummer` |
| **HRT1018** | Kostnadsfordeling per `tabellreferanse_nummer`i HRP1018 | `prosent_kontering = '100` (ingen organisasjonsenheter skal ha splittet kostnadsfordeling) | Inneholder selve kostnadsfordelingen med koststed, delprosjekt og arbeidspakke_bygg for en gitt `organisasjon_id` (og `tabellreferanse_nummer`) i HRP1018 |
| **PA0001** | Stillinger | Ingen | Knytter leder-stilling til ansatt_nummer. Behøves fordi leder for organisasjonsenhet registreres via stillings-ID-en til lederen |
| **PA0002** | Persondata | Siste rad per ansatt | Henter ledernavn |
| **T001P** | Navn på PDO | Ingen | Henter navn på PDO |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **level** | Iterativ beregning fra rotnode (nivå 0) |
| **resolved_personaldelomraade_kode** | `COALESCE(personaldelomraade_kode, parent_resolved_personaldelomraade_kode)` |
| **resolved_koststed_hoved_kode** | `COALESCE(koststed_hoved_kode, parent_resolved_koststed_hoved_kode)` |
| **organisasjon_id_nivaa_0 → _nivaa_10** | Flatet hierarki fra barn til rot |
| **navn_nivaa_0 → _nivaa_10** | Navn per nivå |
| **leder_ansatt_nummer_nivaa_X** | Ansattnummer for leder på nivå X (default `-1`) |
| **leder_navn_nivaa_X** | Navn for leder på nivå X (default `Ukjent`) |
| **dbh_avdeling_kode_nivaa_X** | DBH-avdeling per nivå (default `-1`) |
| **personaldelomraade_kode_nivaa_X** | Arvet PDO per nivå |
| **personaldelomraade_navn_nivaa_X** | Arvet PDO-navn per nivå |
| **koststed_hoved_kode_nivaa_X** | Arvet koststed per nivå |
| **koststed_kode_nivaa_x** | Konteringskoststed på nivå X (default `-1`) |
| **delprosjekt_nummer_nivaa_x** | Delprosjekt på nivå X (default `-1`) |
| **arbeidspakke_bygg_nummer_nivaa_x** | Arbeidspakke/bygg på nivå X (default `-1`) |

## Transformasjonslogikk

### 1. Laste data
- **HRP1000:** Objektdata for org.enheter og DBH
- **HRP1001:** Alle relasjoner (barn–forelder, leder, koststed, DBH)
- **HRP1008:** Relasjoner til PDO per organisasjonsenhet
- **HRP1018:** Relasjoner til kostnadsfordeling per organisasjonsenhet
- **HRT1018:** Kostnadsfordeling per organisasjonsenhet
- **PA0001:** Stilling → ansatt_nummer
- **PA0002:** Ansattnummer → navn
- **T001P:** Navn på PDO

### 2. Bygge DataFrames på dagnivå

#### a) Organisasjonsenheter med foreldre
- HRP1000 filtrert til `objekttype_kode = 'O'`
- HRP1001 filtrert til:
  - `objekttype_kode = 'O'` → `relasjon_objekttype_kode = 'O'`
  - `relasjonstype_kode = '002'` (hierarki)
  - `relasjonsretning_kode = 'B'` (overordnet)
- Eksploderer datoer til dagnivå
- Joiner barnet med parent-enhet

#### b) Organisasjonsenheter med PDO
- HRP1008 filtrert til:
  - `objekttype_kode = 'O'`
  - `planversjon_kode = '10'`
  - `planleggingsstatus_kode = '1'`
  - `infotype_kode = '1008'`
- Joiner mot org.enhet

#### c) Organisasjonsenheter med hovedkoststed
- HRP1001 filtrert til:
  - `objekttype_kode = 'O'` → `relasjon_objekttype_kode = 'K'`
  - `relasjonstype_kode = '011'`
  - `relasjonsretning_kode = 'A'`
- Ekstraherer koststed fra `relasjon_objekt_id`
- Joiner mot org.enhet

#### d) Kostnadsfordeling per organisasjonsenhet
- HRP1018 filtrert til:
  - `objekttype_kode = 'O'`
  - `planversjon_kode = '10'`
  - `planleggingsstatus_kode = '1'`
- HRT1018 filtrert til:
  - `prosent_kontering = 100` (skal ikke være splittet kontering på organisasjonsenheter, hvis ikke blir granulariteten i output feil)

#### e) Ledere for organisasjonsenheter
- HRP1001 filtrert til:
  - `objekttype_kode = 'O'` → `relasjon_objekttype_kode = 'S'`
  - `relasjonstype_kode = '012'`
  - `relasjonsretning_kode = 'B'`
- Ekspanderes til dagnivå
- Join mot PA0001 (stilling → ansatt_nummer)
- Join mot PA0002 (ansatt_nummer → navn)
- Fjerner feilrader med flere ledere samme dag

#### f) Organisasjonsenheter med DBH-avdeling
- HRP1000 filtrert til `objekttype_kode = '03'` (DBH)
- HRP1001 filtrert til:
  - `objekttype_kode = 'O'` → `relasjon_objekttype_kode = '03'`
  - `relasjonstype_kode = 'Z30'`
  - `relasjonsretning_kode = 'A'`
- Ekstraherer DBH-kode fra `navn_kort`
- Fjerner duplikater og feil koblinger

### 3. Bygge organisasjonshierarki

#### a) Rotnode
- Enheter der `parent_organisasjon_id IS NULL`
- `level = 0`
- `resolved_personaldelomraade_kode = personaldelomraade_kode`
- `resolved_personaldelomraade_navn = personaldelomraade_navn`
- `resolved_koststed_hoved_kode = koststed_hoved_kode`

#### b) Iterativ hierarkiprosess (maks 10 nivåer)
1. Start med rotnode  
2. Finn barn for alle foreldre  
3. Sett `level = parent_level + 1`  
4. Arv koststed og personaldelområde  
5. Unionér inn i resultatsett  
6. Bruk barna som nye foreldre  
7. Stopp når ingen nye barn finnes  

#### c) Ledere, DBH-avdelinger og kostnadsfordeling inn i hierarkiet
- LEFT JOIN mot leder-DF, DBH-DF og kostnadsfordeling-DF
- Default-verdier settes ved NULL:  
  - `leder_ansatt_nummer = '-1'`
  - `leder_navn = 'Ukjent'`
  - `dbh_avdeling_kode = '-1'`
  - `koststed_kode = '-1'`
  - `delprosjekt_nummer = '-1'`
  - `arbeidspakke_bygg_nummer = '-1'`

#### d) Flatstruktur til 10 nivåer
- Bruker top-down-join fra nivå 10 → nivå 0  
- For hvert nivå:  
  `COALESCE(parent.field, child.field_nivaa_{level+1})`  
- Sikrer at alle enheter får komplett linje opp til rot  

### 4. Legge til zx-kolonner
- Join mot HRP1000 på `organisasjon_id_nivaa_10` og dato  
- Legger til:
  - `zx_institusjonskode`  
  - `zx_tidspunkt_lastet`  
  - `zx_tidspunkt_bronze`  
  - `zx_tidspunkt_silver`  

### 5. Aggregere dagnivå til datointervaller
- Setter `dato_fra` og `dato_til`  
- Slår sammen identiske perioder med `merge_identical_consecutive_rows()`  
- Avsluttende perioder settes til `9999-12-31`  

### 6. Omorganisere kolonner
- `dato_fra`, `dato_til` først
- Deretter alle `_nivaa_X`-kolonner
- Til slutt zx-kolonnene

## HRP1001 – Relasjonstyper brukt
| Relasjonstype | Fra objekt | Til objekt | Retning | Betydning |
|---------------|------------|------------|---------|-----------|
| **002** | O | O | B | Forelder–barn-relasjon |
| **011** | O | K | A | Hovedkoststed |
| **012** | O | S | B | Leder (stilling) |
| **Z30** | O | 03 | A | DBH-avdeling |