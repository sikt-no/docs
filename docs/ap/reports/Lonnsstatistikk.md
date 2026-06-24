# Lønnsstatistikk

## Hva inneholder denne rapporten?

Rapporten inneholder en oversikt over lønnsnivå og lønnsutvikling basert på registrert grunnlønn i SAP. I rapporten kan du se gjennomsnittlig og median grunnlønn, kronetillegg, lønnsfordeling (persentiler), lønnsvekst og antall ansatte/årsverk fordelt på bl.a. organisasjonsenhet, stillingskategori og -kode, medarbeidergruppe, kjønn og alder. Datagrunnlaget inneholder full stillingshistorikk slik at du kan velge et hvilket som helst tidspunkt eller periode og se status den dagen eller utvikling over tid.

Rapporten har tre sider:

- **Oppsummering** — nøkkeltall, lønnsfordeling og filtrering
- **Utvikling** — lønnsfordeling (25%-persentil, snittlønn/median og 75%-persentil) per år, fordelt på valgfri dimensjon
- **Sammenlign** — lønnsfordeling over tid med filtrering på organisasjon, stilling, kjønn, alder m.m.

Du kan høyreklikke et datapunkt i en visualisering og velge «Ekstraher» for å se det underliggende datagrunnlaget.

## Når og hvor hentes dataene?

Dataene i denne rapporten hentes fra SAP daglig ca. kl. 01:00. Eksakt oppdateringstidspunkt vises nederst i filtermenyen på hver side.

## Bruk av rapporten

### Utvikling

Siden viser en tabell med 25%-persentil, gjennomsnittlig eller median grunnlønn og 75%-persentil per år for en valgt dato. Du velger en dato (f.eks. «I dag») og en perioderamme (f.eks. 2022–2026), og tabellen viser lønnsfordelingen på den datoen for hvert år i perioden.

**Fordelingsvelger:** Styrer hva som vises på radene i tabellen. Tilgjengelige dimensjoner:

- Organisasjonsenhet (nivå 2, 3 og 4)
- Personaldelområde
- Stillingskategori og -kode (nivå 1, nivå 2 og stillingskode)
- Medarbeidergruppe
- Medarbeiderundergruppe
- Aldersgruppe og alder

### Sammenlign

Siden lar deg sammenligne to egendefinerte grupper side om side. Filterpanelet på venstre side styrer gruppe 1 (blå) og filterpanelet på høyre side styrer gruppe 2 (oransje). Begge grupper viser:

- Nøkkeltall for antall ansatte, antall årsverk og årlig lønnsvekst
- Linjediagram med utvikling i årslønn over tid (25%-persentil, gjennomsnittlig/median grunnlønn og 75%-persentil)

Tilgjengelige filtre per gruppe: organisasjonsenhet, personaldelområde, medarbeidergruppe og -undergruppe, stillingskategori og -kode, kjønn og alder. Beregningsvelgeren (gjennomsnittlig eller median grunnlønn) er felles for begge grupper.

## Definisjoner

### Grunnlønn

Grunnlønn er beregnet årslønn knyttet til en stilling. Rapporten inneholder grunnlønn for hovedstillinger og tilleggsstillinger.

**Hovedstillinger:** Grunnlønnen beregnes med utgangspunkt i registrert tariffinformasjon i SAP (tarifftype, tariffområde, tariffgruppe og eventuelt lønnstrinn). For stillinger plassert på lønnstrinn brukes gjeldende lønnssatser for det aktuelle trinnet. For stillinger uten lønnstrinn beregnes grunnlønnen direkte fra registrerte lønnsbeløp. Beregningslogikken følger gjeldende hovedtariffperiode.

**Tilleggsstillinger:** Grunnlønnen settes til den høyeste av beløpet som er registrert direkte på stillingen og satsen knyttet til eventuelt lønnstrinn. Dersom det kun er registrert lønnstrinn uten et direkte beløp, brukes satsen for lønnstrinnet.

#### Gjennomsnittlig grunnlønn

Gjennomsnittlig grunnlønn beregnes som aritmetisk gjennomsnitt av grunnlønnen til alle stillinger med årsverk større enn 0 på valgt tidspunkt. Dersom det er valgt en periode (f.eks. en måned) beregnes et vektet gjennomsnitt basert på antall dager hver stilling har hatt en gitt lønn i perioden.

#### Median grunnlønn

Median grunnlønn er den midterste verdien når alle grunnlønner sorteres fra lavest til høyest. Halvparten av stillingene har høyere lønn og halvparten har lavere lønn enn medianen. Beregnes på siste dato i valgt periode.

#### 25%- og 75%-persentil for grunnlønn

25%-persentilen er den lønnen der 25 % av stillingene har lavere lønn. 75%-persentilen er den lønnen der 75 % av stillingene har lavere lønn. Sammen med medianen gir persentilene et bilde av lønnsfordelingen. Beregnes på siste dato i valgt periode.

#### Laveste og høyeste grunnlønn

Laveste og høyeste registrerte grunnlønn blant stillinger med årsverk større enn 0. Kun grunnlønner på kr 300 000 eller mer er inkludert for å filtrere bort ufullstendige registreringer.

### Kronetillegg

Kronetillegg er summen av faste månedlige lønnstillegg utover grunnlønn, omregnet til årsbeløp. Tilleggene hentes fra et definert utvalg av lønnarter i SAP og inkluderer bl.a. tilleggslønn, kompensasjoner for ubekvem arbeidstid, godtgjørelser, faste overtidstillegg og refusjoner. Dersom en ansatt har flere aktive tillegg i samme periode summeres disse til ett samlet kronetillegg.

Kronetillegg beregnes kun for hovedstillinger.

Gjennomsnittlig kronetillegg beregnes på samme måte som gjennomsnittlig grunnlønn — som et vanlig gjennomsnitt for én dag, og som et vektet gjennomsnitt basert på antall dager for en periode.

<details>
<summary>Lønnarter som inngår i kronetillegg</summary>

**Tilleggslønn**

| Kode | Kode | Kode | Kode |
|---|---|---|---|
| 1109 | 1112 | 1114 | 1115 |
| 1116 | 1117 | 1118 | 1119 |
| 1120 | 1121 | 1122 | 112A |
| 112B | 112C | 112D | 112E |
| 112F | 112G | 112H | 112J |
| 112K | 112L | 112T | 113D |
| 1151 | 1378 | 3318 | 3319 |
| 3321 | 4655 | | |

**Kompensasjoner (ubekvem arbeidstid)**

| Kode | Beskrivelse |
|---|---|
| 1142 | Natt |
| 1143 | Lørdag/søndag |
| 1144–1146 | Morgen/kveld |

**Godtgjørelser**

| Kode | Kode | Kode | Kode |
|---|---|---|---|
| 1153 | 1154 | 1155 | 1156 |
| 1162 | 1165 | 1167 | 1179 |
| 1184 | 1199 | 1289 | 1305 |
| 1422 | 3081 | 3227 | 3256 |
| 3450 | 3607 | 3608 | 3609 |
| 3610 | 3720 | | |

**Reisegodtgjørelser**

| Kode |
|---|
| 3015 |
| 301H |
| 3030 |

**Husleiekompensasjon**

| Kode |
|---|
| 3012 |
| 3022 |
| 3037 |
| 3038 |

**Spesialordninger (polartillegg/særavtaler)**

| Kode |
|---|
| 112M |
| 112P |
| 114A |
| 3377 |
| 3378 |
| 3379 |

**Fast overtid og faste tillegg**

| Kode |
|---|
| 1300 |
| 1301 |

**Refusjoner**

| Kode | Beskrivelse |
|---|---|
| 1302 | Bredbånd |
| 1340 | |
| 1489 | |

**Styrehonorar**

| Kode |
|---|
| 1330 |
| 1350 |

**Tillitsvalgt**

| Kode |
|---|
| 3047 |

**Andre ordninger**

| Kode | Beskrivelse |
|---|---|
| 1170 | Hjemme-PC |
| 1195 | Ventelønn |
| 1306 | Ventelønn |
| 1328 | Manuell korrigering |
| 2705 | Utvidet arbeidstid |

</details>

### Lønnsvekst på personnivå

Gjennomsnittet av hver enkelt ansatts individuelle lønnsvekst sammenlignet med året før. Kun ansatte som har registrert grunnlønn både inneværende og foregående år er inkludert. Dette målet kan avvike fra endringen i gjennomsnittlig grunnlønn fordi det vekter alle ansatte likt uavhengig av stillingsprosent.

### Ansatt

Antall unike personer med DBH-årsverk større enn 0 på siste dato i valgt periode.

### Årsverk

Antall årsverk beregnet etter DBHs definisjon, identisk med beregningen i årsverkstatistikk-rapporten. For perioder beregnes et vektet gjennomsnitt basert på antall dager hver stilling har vært aktiv.

### Gjennomsnittlig alder

Gjennomsnittlig alder blant alle ansatte med årsverk større enn 0 på valgt tidspunkt. For perioder beregnes et vektet gjennomsnitt basert på antall dager, tilsvarende grunnlønnsberegningen.