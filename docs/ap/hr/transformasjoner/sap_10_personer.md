# Oppsummering – sap_10_personer

## Formål
- Sammenstiller informasjon relatert til personer med historikk fra PA-tabeller til en helhetlig personvisning med `dato_fra` og `dato_til`.
- Inneholder demografiske data, utdanningsinformasjon, adresse, bankinformasjon, arbeidsprosent, ansettelsesdatoer, fratredelsesdatoer **og klassifisering av skattekort**.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0000** | Ansettelsesstatus | Ingen | Status og fratredelser (typer 10, 11, 40) |
| **PA0002** | Persondata | Ingen | Navn, fødselsdato, kjønn, nasjonalitet, språk |
| **PA0006** | Adresse | `deltype_kode = '1'` | Postadresse |
| **PA0007** | Arbeidstid | Ingen | Timer per uke (brukes til prosent_arbeid) |
| **PA0009** | Bankinformasjon | `bankinformasjon_type IN ('0','2')` | Bankland og valuta for lønn/reise |
| **PA0019** | Fratredelsesdato | `datotype = '79'` | Historiske fratredelser |
| **PA0022** | Utdanning | `utdanningstype_kode = '01'`, `sekvens_nummer = '000'` | Siste utdanningskode per ansatt |
| **PA0105** | Tlf, epost, feideid osv | `kommunikasjonstype_kode IN ('9020', '0001', '0010', '0030', '0020', '9003', '9004')` | Tlf, epost, feideid osv |
| **PA0173** | Skattekort | første gyldige organisasjon_nummer i T5V2K, `aar_skattekort <> ''` (kriterie for manglende skattekort) | Skattekorttype (hoved og bi) |
| **PA0185** | Identifikasjon | `identifikasjonstype_kode = '02'` | Statsborgerskap |
| **PA3363** | Arbeidsland | `deltype_kode IN ('9901','9902')` | Land for arbeidssted |
| **PA9008** | Hovedsammenslutning | Ingen | Hovedsammenslutningkode og hovedsammenslutningtekst (Akademikerne, YS osv.) |
| **PA9052** | Tlf mobil | `deltype_kode IN ('0001','0002')` | Tlf mobil |
| **T518B** | Utdanningsnavn | Lookup | Beskrivende navn for utdanningskode |
| **T529U** | Statusbeskrivelse | `status_nummer = '2'` | Beskrivelse av ansettelsesstatus |
| **T530T** | Fratredelsesbeskrivelse | Lookup | Navn på fratredelsesårsak |
| **T002T** | Språk | Lookup | Språknavn |
| **T5V2K** | Gjeldende organisasjons_nummer |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **dato_fratredelse** | Historiske rader: fratredelse fra PA0000. Aktive/fremtidige: første fremtidige fratredelse (ROW_NUMBER = 1). Filtrert på typer 10/11/40. |
| **prosent_arbeid** | `(timer_per_uke / 37.5) * 100` fra PA0007 |
| **kjonn_navn** | CASE: 1 = Mann, 2 = Kvinne, ellers Ukjent |
| **fullt_navn** | `etternavn + ', ' + fornavn` |
| **ansatt_navn** | `fornavn + ' ' + etternavn` |
| **land_kode_arbeid** | Søk i PA3363 attributt_id_1–30 etter `9901`/`9902`. Hent tilhørende attributt_verdi_X. Prioritet: 9901 → 9902. |
| **skattekorttype_hoved** | Klassifiserer hovedskattekort basert på `skattekorttype_kode_hoved` fra PA0173:<br>• `P` → Prosentskattekort<br>• `T` → Tabellkort<br>• `F` → Frikort<br>• `U` → Ubegrenset<br>• `''` eller `NULL` → Ingen skattekort<br>• Ellers → Annet |
| **skattekorttype_bi** | Klassifiserer bi-skattekort basert på `skattekorttype_kode_bi` fra PA0173:<br>• `P` → Prosentskattekort<br>• `T` → Tabellkort<br>• `F` → Frikort<br>• `U` → Ubegrenset<br>• `''` eller `NULL` → Ingen skattekort<br>• Ellers → Annet |

## Transformasjonslogikk

### 1. Datointervallgenerering
Kombinerer historikk fra følgende tabeller:
- **Hovedtabell:** PA0002 definerer gyldige datointervaller per ansatt
- **Sekundærtabell:** pa0000, pa0006, pa0007, pa0009, pa0022,  pa3363
- **Nøkkelkolonner:** ansatt_nummer

### 2. Fratredelsesdato (PA0000)
Todelt logikk:

**Historiske perioder (dato_til < dagens dato):**
- Fratredelse som overlapper intervallet
- Typer 10, 11, 40

**Aktive/fremtidige perioder (dato_til ≥ dagens dato):**
- Første fremtidige rad (`ROW_NUMBER = 1`)
- Filtrert på samme typer

### 3. Arbeidsprosent (PA0007)
- Henter timer_per_uke  
- Konverterer til prosent basert på 37,5-timers uke  

### 4. Utdanning (PA0022)
- Filter: `utdanningstype_kode = '01'`, `sekvens_nummer = '000'`  
- ROW_NUMBER på (`dato_fra`, `dato_til`)  
- Sortert på `siste_endring_dato DESC`  
- Henter siste gyldige kode per ansatt og periode  

### 5. Statsborgerskap (PA0185)
- Filter: `identifikasjonstype_kode = '02'`  
- ROW_NUMBER per ansatt  
- Sortert på `dato_til DESC`  
- Returnerer siste registrerte statsborgerskap  

### 6. Arbeidsland (PA3363)
- Søk gjennom attributt_id_1–30 etter deltype `9901`/`9902`  
- Prioritet: `9901` → `9902`  
- Hvis ingen treff: `Ukjent`  

### 7. Skattekort (PA0173)
- Leser skattekorttype for hoved- og biarbeidsforhold
- filtrert data som har gjeldene organisasjons_nummer
- Mapper tekniske koder til funksjonelle, lesbare verdier
- Tom eller manglende verdi behandles eksplisitt som **Ingen skattekort**

### 8. Kommunikasjonsinformasjon (PA0105 og PA9052)
- Utleder brukernavn_feide, brukernavn_dfo, epost_jobb, epost_privat, telefon_fast_jobb, telefon_mobil_jobb og telefon_mobil_privat

### 9. Hovedsammenslutning (PA9008)
- Henter hovedsammenslutning_kode fra silver_sap.pa9008
- Utleder hovedsammenslutning_tekst med følgende logikk:
    - 01 = Akademikerne
    - 02 = YS
    - 03 = LO
    - 04 = Unio
    - 05 = Annet