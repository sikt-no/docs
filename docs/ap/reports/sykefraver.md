# Sykefravær

## Hva inneholder denne rapporten?

Rapporten gir en oversikt over sykefravær blant ansatte basert på registrert sykefravær i SAP. Du kan se sykefraværsprosent, tapte dagsverk, antall sykefraværstilfeller, varighet og gradering av sykmeldinger, samt fordeling på fraværstype (egenmeldt og legemeldt), organisasjonsenhet, stillingskategori, kjønn, alder og en rekke andre dimensjoner. Datagrunnlaget inneholder full fraværshistorikk slik at du kan velge en hvilken som helst måned eller periode og se status eller utvikling over tid.

Rapporten har seks sider:

- **Oppsummering** — nøkkeltall, utvikling i sykefraværsprosent og fraværstilfeller, og fordeling på fraværstype og varighet
- **Utvikling** — tidsserier for sykefraværsprosent, tapte dagsverk og langtidsfravær
- **Sammensetning** — fordeling på varighet, fraværstype, gradering og hyppighet
- **Organisasjon** — nøkkeltall og utvikling per organisasjonsenhet
- **Personoversikt** — sykefravær på person- og fraværsnivå

Du kan høyreklikke et datapunkt i en visualisering og velge «Ekstraher» for å se det underliggende datagrunnlaget.

## Når og hvor hentes dataene?

Dataene i denne rapporten hentes fra SAP daglig ca. kl. 01:00. Eksakt oppdateringstidspunkt vises nederst i filtermenyen på hver side.

## Bruk av rapporten

På alle sider kan du filtrere på måned, organisasjonsenhet, kostnadssted, stillingskategori og -kode, medarbeidergruppe, kjønn, alder og en rekke andre dimensjoner. Flere av sidene har undersider knyttet til sidens tema.

### Oppsummering

Siden gir et raskt overblikk over sykefraværet. Du ser nøkkeltall for sykefraværsprosent, tapte dagsverk og antall sykefraværstilfeller, med utvikling per måned i tre linjediagrammer:

- Utvikling i sykefraværsprosent per måned
- Utvikling i tapte dagsverk per måned
- Utvikling i nye legemeldte fraværstilfeller > 16 dager per måned

I tillegg vises tre stolpediagrammer som bryter sykefraværet ned på:

- Fraværshyppighet blant ansatte
- Tapte dagsverk fordelt på fraværstype (egenmeldt/legemeldt)
- Nye sykefraværstilfeller fordelt på varighet

### Utvikling

Siden viser utvikling over tid med fire underdeler:

- **Totalutvikling** — utvikling i sykefraværsprosent og tapte dagsverk per måned for valgt periode
- **Egenmeldt/legemeldt** — sykefraværsprosent, nye fraværstilfeller og tapte dagsverk siste 12 måneder, fordelt på fraværstype
- **Langtidsfravær** — utvikling per måned i antall ansatte i legemeldt fravær > 16 dager og > 8 uker, andel av tapte dagsverk fra legemeldt fravær > 8 uker, og nye legemeldte langtidsfravær > 16 dager
- **Krysstabell** — pivottabell med valgte beregninger fordelt på år/måned og organisasjonsenhet

### Sammensetning

Siden bryter sykefraværet ned på ulike dimensjoner og har fem underdeler:

- **Varighet** — sykefraværstilfeller og tapte dagsverk fordelt på varighet, gjennomsnittlig varighet etter sykmeldingstype (fulltids/gradert), og andel av tilfeller og tapte dagsverk etter varighet
- **Fraværstype** — sykefraværstilfeller, sykefraværsprosent og tapte dagsverk fordelt på fraværstype (egenmeldt/legemeldt)
- **Gradering** — tapte dagsverk og legemeldte tilfeller fordelt på sykmeldingsgrad, samt utvikling i andel graderte legemeldte tilfeller per måned
- **Hyppighet** — fraværshyppighet blant ansatte, tapte dagsverk etter antall sykefraværstilfeller, utvikling i andel ansatte med sykefravær og antall sykefraværstilfeller per 100 ansatte per måned
- **Tabell** — detaljert tabellvisning av de samme beregningene

### Organisasjon

Siden viser sykefravær fordelt på organisasjonsenhet og har tre underdeler:

- **Enhetsoversikt** — nøkkeltall per enhet (årsverk, ansatte, sykefraværsprosent, tapte dagsverk, egenmeldings- og sykmeldingsdager per ansatt) med stolpediagrammer som sammenligner enhetene
- **Utvikling per enhet** — pivottabell med utvikling siste 12 måneder per enhet
- **Krysstabell** — pivottabell med valgte beregninger på rader og enheter på kolonner

### Personoversikt

Siden viser sykefravær på person- og fraværsnivå og har fire underdeler:

- **Oversikt** — spredningsdiagram med antall sykmeldings- og egenmeldingsdager per person, samt utvikling i sykefraværsprosent per måned
- **Tabell** — tabelloversikt over sykefravær per ansatt
- **Enkeltperson: Diagram** — utvikling for en valgt person
- **Enkeltperson: Tabell** — tabelloversikt over alle fravær for valgt person

## Definisjoner

Definisjonene følger i hovedsak [SSBs definisjoner for sykefraværsstatistikk](https://www.ssb.no/arbeid-og-lonn/arbeidsmiljo-sykefravaer-og-arbeidskonflikter/statistikk/sykefravaer).

### Sykefravær

Fravær fra arbeid grunnet egen sykdom, dokumentert med enten egenmelding eller legemelding i henhold til gjeldende lover og avtaler.

**Egenmeldt sykefravær** er fravær dokumentert med en egenmelding.

**Legemeldt sykefravær** er fravær dokumentert med en legemelding (sykmelding).

### Arbeidsdager

Arbeidsdager er definert som kalenderdager minus helgedager og offisielle fridager. Dette er en forenkling — for enkeltpersoner kan det faktiske arbeidsmønsteret avvike — men på aggregert nivå gir det et rimelig godt bilde.

### Avtalte dagsverk

Antall arbeidsdager den ansatte har avtalt å jobbe i perioden, justert for stillingsprosent. Summeres over alle stillinger en person har.

### Sykefraværsdagsverk (tapte dagsverk)

Antall arbeidsdager med sykefravær, justert for stillingsprosent og sykmeldingsgrad. Summeres over alle stillinger en person har. Dager med aktiv sykmelding teller som sykefravær selv om personen faktisk er på jobb.

### Sykefraværsprosent

Antall sykefraværsdagsverk i prosent av antall avtalte dagsverk:

> Sykefraværsprosent = (sykefraværsdagsverk / avtalte dagsverk) × 100

### Sykmelding og sykefraværstilfelle

Et **sykefraværstilfelle** er en sammenhengende periode med sykefraværsdager, mens en **sykmelding** er det enkelte dokumentet fra lege som dokumenterer fraværet. NAV og SSB skiller mellom disse fordi ett sykefraværstilfelle kan bestå av flere sykmeldinger (forlengelser).

Et legemeldt sykefraværstilfelle identifiseres av kombinasjonen fødselsnummer, organisasjonsnummer og felles startdato. Hvis legen forlenger en sykmelding, regnes forlengelsen som en del av samme sykefraværstilfelle. En person som er sammenhengende sykmeldt i et helt år har dermed *ett* legemeldt sykefraværstilfelle, men kan ha flere underliggende sykmeldinger.

Rapporten viser begge målene som egne beregninger:

- **Antall sykmeldinger** og **antall egenmeldinger** teller hvert enkelt dokument.
- **Antall sykefraværstilfeller** teller sammenhengende fraværsperioder, uavhengig av hvor mange sykmeldinger eller egenmeldinger som inngår.

En person kan ha flere sykefraværstilfeller i samme periode, både egenmeldte og legemeldte.

### Sykmeldingsgrad

Andelen av stillingsprosenten en sykmelding gjelder for, fra 20 % til 100 %. En **fulltidssykmelding** er en sykmelding med 100 % sykmeldingsgrad. En **gradert sykmelding** har sykmeldingsgrad under 100 %. Dersom et sykefraværstilfelle består av flere sykmeldinger med ulik grad, beregnes et gjennomsnitt for hele tilfellet.

### Sykefraværets varighet

Antall kalenderdager i et sykefraværstilfelle. I langtidsfraværsmålene skilles det mellom tilfeller på 1–16 dager, over 16 dager og over 8 uker.

### Fraværshyppighet

Antall sykefraværstilfeller per ansatt i valgt periode.

### Ansatt

Antall unike personer med en månedslønnet stilling i valgt periode. Tilsvarer definisjonen i [Lønnsstatistikk](Lønnsstatistikk.md) og [Årsverkstatistikk](Årsverkstatistikk.md).

### Årsverk

Beregnes etter DBHs definisjon, identisk med [Årsverkstatistikk](Årsverkstatistikk.md).
