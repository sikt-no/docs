# Årsverkstatistikk

## Hva inneholder denne rapporten?

Rapporten inneholder en oversikt over årsverk beregnet etter DBHs definisjoner. I rapporten kan du se oversikt over årsverk og antall ansatte fordelt på bl.a. organisasjonsenhet, stillingskategori og -kode med mer. Datagrunnlaget inneholder full stillingshistorikk slik at du kan velge et hvilket som helst tidspunkt i rapporten og se status den dagen eller utvikling over tid.

Rapporten har fem sider:

- **Oppsummering** — nøkkeltall, utvikling over tid og fordeling på stillingskategori og alder
- **Status** — detaljert tabell med valgfrie beregninger, fordelinger og kolonner
- **Utvikling** — tidsserier og fordeling for valgte beregninger per år
- **Benchmark** — spredningsdiagram for å sammenligne to valgfrie beregninger mot hverandre
- **Treanalyse** — bryt en valgt beregning ned på ulike kategorier

## Når og hvor hentes dataene?

Dataene i denne rapporten hentes fra SAP daglig ca. kl. 01:00. Eksakt oppdateringstidspunkt vises nederst i filtermenyen på hver side.

## Bruk av rapporten

På alle sider kan du filtrere på organisasjonsenhet, stillingskategori og -kode, medarbeidergruppe, kjønn, alder og en rekke andre dimensjoner. Du kan høyreklikke et datapunkt i en visualisering og velge «Ekstraher» for å se det underliggende datagrunnlaget.

Sidene Status, Utvikling, Benchmark og Treanalyse har en *Kontroller*-seksjon i filterpanelet der du velger:

- **Beregning** — hva som beregnes (f.eks. årsverk, ansatte, gjennomsnittlig grunnlønn, median grunnlønn, lønnsvekst, alder)
- **Fordeling** — hva som vises på radene/punktene (f.eks. organisasjonsenhet, stillingskategori, medarbeidergruppe, alder)

På **Benchmark** velger du én beregning for hver akse (X og Y). På **Status** kan du i tillegg velge hvilke **kolonner** som vises i tabellen. På **Treanalyse** velger du beregning og klikker deretter på plusstegnet i visualiseringen for å bryte ned på en kategori.

## Definisjoner

### Årsverk

Årsverk beregnes etter [DBHs definisjon](https://dbh.hkdir.no/tall-og-statistikk/statistikk-meny/tilsatte/statistikk-side/11.1):

> Dette er personer som utdanningsinstitusjonen har arbeidsgiveransvar for og som mottar full eller delvis lønn på telletidspunktet 1. oktober hvert år. For personer i delvis lønnet permisjon rapporteres stillingsprosenten med utgangspunkt i avlønningsprosent. Personer i 100 prosent ulønnet permisjon rapporteres ikke. Personer som er tilsatt på timelønnskontrakt (timelærere, hjelpelærere osv.), personer på ventelønn og sivilarbeidere rapporteres ikke. Personer som er tilsatt på månedskontrakt rapporteres.
>
> Personer i fødselspermisjon/adopsjonspermisjon/foreldrepermisjon med 80 % dekningsgrad rapporteres med sin faktiske stillingsprosent (dvs. ikke i forhold til utlønningsprosent), jf. folketrygdloven § 14-9.

Rapporten inneholder kun hovedstillinger og tilleggsstillinger.

Årsverk beregnes som summen av avlønningsprosenten til alle månedslønnede stillinger, fratrukket fravær registrert på utvalgte fraværstyper. For tilleggsstillinger inkluderes inntil videre alle uavhengig av medarbeidergruppe, da det frem til september 2025 ikke har vært mulig å registrere medarbeidergruppe på tilleggsstillinger i SAP.

<details>
<summary>Månedslønnede medarbeiderundergrupper</summary>

| Kode | Tekst |
|---|---|
| 1 | Hovedlønnstabell |
| 2 | Hovedlø.tab.u/oppryk |
| 3 | Lederlønnstabellen |
| 10 | Lærlinger/elever |
| 11 | Rengjøringspersonale |
| 12 | Stipendiater |
| 13 | Postdoktor |
| 14 | Hovedlø.tab uten SPK |
| 20 | Svalbard/hov.l.tabel |
| 21 | Svalbard/led.l.tabel |
| 29 | Jan Mayen |
| 33 | Bistillinger SPK |
| 39 | Bistilling a/vilkår |
| 40 | Arbeidsmarkedstiltak |
| 43 | Arbeidsavklaring |

</details>

<details>
<summary>Fraværstyper som medfører reduksjon i årsverk</summary>

Utvalget er basert på DFØs brukerdokumentasjon av DBH-rapporten i SAP.

| Kode | Navn |
|---|---|
| 166 | AAP m/uførepensjon i SPK |
| 166F | AAP m/uførepensjon i SPK |
| 167 | AAP u/uførepensjon i SPK |
| 167F | AAP u/uførepensjon i SPK |
| 168 | Sykep. u/AAP m/uførep SPK |
| 168F | Sykep. u/AAP m/uførep SPK |
| 169 | Sykep. u/AAP u/uførep SPK |
| 169F | Sykep. u/AAP u/uførep SPK |
| 310 | Militær/siv.tj. uten lønn |
| 315 | Militær/perm. u/lønn utl. |
| 418 | Foreldreperm u/lønn |
| 419 | For.perm u/lønn AML12.5-2 |
| 435 | Oms.p. u/lønn F.best § 20 |
| 435F | Oms.p. u/lønn F.best § 20 |
| 480 | Sykdom i familien u/lønn |
| 480F | Sykdom i familien u/lønn |
| 490 | Perm/AML 10.2 (A)ikke SPK |
| 490F | Perm/AML 10.2 (A)ikke SPK |
| 530 | Velferdsp u/lønn < 1 mnd |
| 531 | Velferdsp u/lønn > 1 mnd |
| 531F | Velferdsp u/lønn > 1 mnd |
| 532 | Perm u/lønn v/tilsetting |
| 532F | Perm u/lønn v/tilsetting |
| 660 | Hovedavtalen § 40 |
| 660F | Hovedavtalen § 40 |
| 670 | Hovedavtalen § 41 |
| 720 | Utd.perm u/lønn. Fbest §6 |
| 721 | Kortv.utd.p.u/l. Fbest §6 |
| 722 | Utd.perm u/lønn. Fbest §6 |
| 725 | Delvis perm u/lø Fbest §6 |
| 725F | Delvis perm u/lø Fbest §6 |
| 730 | Utd.perm u/henvisn Fbest |
| 730F | Utd.perm u/henvisn Fbest |
| 731 | Utd.perm u/henvisn Fbest |
| 731F | Utd.perm u/henvisn Fbest |
| 735 | Studiereise utl.  < 1 mnd |
| 736 | Studiereise utl. > 1 mnd |
| 737 | Studiereise utl.  < 1 mnd |
| 738 | Studiereise utl. > 1 mnd |
| 810 | Beor/utlån  jur.en u/lønn |
| 850 | Perm u/lønn tj int.org |
| 850F | Perm u/lønn tj int.org |
| 851 | Perm tj int.org ikke FFU |
| 855 | Utenlandslektor |
| 860 | Perm statlig stilling |
| 860F | Perm statlig stilling |
| 861 | Perm sta. still. i etaten |
| 861F | Perm sta. still. i etaten |
| 865 | Perm ektfelle beordring |
| 865F | Perm ektfelle beordring |
| 870 | Perm ikke statlig still |
| 870F | Perm ikke statlig still |
| 880 | Fylke/kom verv m/innbet. |
| 880F | Fylke/kom verv m/innbet. |
| 881 | Fylke/kom verv u/innbet. |
| 881F | Fylke/kom verv u/innbet. |
| 890 | Doms/meddom verv m/innbet |
| 890F | Doms/meddom verv m/innbet |
| 891 | Doms/meddom verv u/innbet |
| 891F | Doms/meddom verv u/innbet |
| 960 | Annet frav u/lønn |

</details>

### Ansatt

Antall unike personer med årsverk større enn 0.

### Midlertidig stilling

**Hovedstilling:** Alle stillinger som ikke er registrert med medarbeidergruppe «1 Fast ansatte», ekskludert åremål og ekstraerverv.

**Tilleggsstilling:** Alle tilleggsstillinger er inntil videre definert som midlertidige.\*

### Administrativ stilling

Alle stillinger med stillingskode i DBH-kategori «Lederstillinger (AD1)» eller «Administrative stillinger (AD2)».

### Åremål

**Hovedstilling:** Stillingen er registrert med medarbeidergruppe «3 Åremålsansatte».

**Tilleggsstilling:** Ukjent.\*

### Ekstraerverv

**Hovedstilling:** Stillingen er registrert med lovhjemmel 11, 28, 65 eller 66.

**Tilleggsstilling:** Ukjent.\*

\* *Frem til september 2025 har det ikke vært mulig å registrere medarbeidergruppe og lovhjemmel på tilleggsstillinger i SAP.*

### Stillingskategori

Følger [DBHs stillingskoder](https://dbh.hkdir.no/datainnhold/kodeverk/stillingskoder) basert på 2021-inndelingen.
