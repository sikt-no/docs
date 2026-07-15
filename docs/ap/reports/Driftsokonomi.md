# Driftsøkonomi

## Hva inneholder denne rapporten?

Rapporten gir en oversikt over driftsøkonomien basert på regnskaps- og budsjettdata fra Unit4. Du kan se driftsresultatet, inntekts- og kostnadsutviklingen, budsjettavvik og forventet balanse ved årsslutt. Tallene kan fordeles på kontokategori, kostnadssted og prosjekt. Alle beløp vises akkumulert hittil i år.

Rapporten har fire sider:

- **Oppsummering** — nøkkeltall, utvikling i resultat og inntekter/kostnader per måned, samt forventet utgående saldo
- **Status** — detaljert tabell med inngående saldo, regnskap, budsjett, avvik og utgående saldo
- **Utvikling** — tidsserier for regnskap, fjorårsregnskap og budsjett per måned
- **Treanalyse** — dekomposisjonstre for å analysere hva som driver endringer

## Når og hvor hentes dataene?

Dataene i denne rapporten hentes fra Unit4 daglig ca. kl. 01:00. Eksakt oppdateringstidspunkt vises nederst i filtermenyen på hver side.

## Bruk av rapporten

På alle sider kan du filtrere på kostnadssted og velge måneden du vil se tall for. Tallene vises alltid akkumulert frem til og med måneden du har valgt.

### Oppsummering

På denne siden ser du en oppsummering av driftsøkonomien med utvikling i driftsresultat (regnskap og budsjett) og inntekter/kostnader per måned (regnskap og budsjett), samt forventet utgående saldo. Du kan velge om utgående saldo skal beregnes basert på regnskap hittil i år eller årsbudsjett.

Budsjettallene som vises er revidert budsjett dersom det finnes en revidert budsjettversjon for det valgte året. Hvis ikke, brukes opprinnelig budsjett. Rapporten viser hvilken versjon som brukes.

Du kan filtrere på måned, kontokategori og kostnadssted.

### Status

Denne siden viser en detaljert tabell med kolonner gruppert i fire beregningsgrupper:

- **IB** — inngående balanse for ubrukte midler per 1.1.
- **Hittil** — akkumulert hittil i år: regnskap, budsjett, budsjettavvik (kr og %)
- **Året** — helårsbudsjett: årsbudsjett, årsbudsjettavvik (kr og %)
- **UB** — forventet utgående balanse for ubrukte midler basert på årsbudsjettet

Alle tall vises i hele 1000. Budsjettallene som vises er revidert budsjett dersom det finnes en revidert budsjettversjon for det valgte året. Hvis ikke, brukes opprinnelig budsjett. Tittelen på tabellen viser hvilken versjon som brukes.

Under *Kontroller* i filterpanelet på venstre side kan du styre hva som skal ligge på radene i tabellen. Som standard vises inntekts- og kostnadskategorier (drillbar ned til konto), men du kan alternativt velge å vise kostnadsstedgrupper/koststeder eller prosjekter.

### Utvikling

Denne siden viser utvikling i driftsøkonomien per måned med regnskapstall til og med valgt måned. Under *Kontroller* i filterpanelet kan du styre hvilke beregninger som skal vises i diagrammet.

### Treanalyse

På denne siden kan du gjøre treanalyse der du bryter et gitt tall ned på ulike kategorier. Du kan for eksempel se hvordan avviket mellom regnskap og budsjett fordeler seg på enheter, prosjekter eller inntekts- og kostnadskategorier.

Under *Kontroller* i filterpanelet kan du velge hvilken beregning du vil bryte ned — enten faktiske verdier (f.eks. regnskap eller revidert budsjett) eller avvik (f.eks. budsjettavvik i prosent). Velg først beregningskategori og beregning, og klikk deretter på plusstegnet i visualiseringen for å bryte ned på en kategori.

## Definisjoner

### Regnskapsført beløp

Faktisk bokført beløp hentet fra Unit4, akkumulert hittil i år. Inntekter er lagret som negative tall i Unit4 og snus i rapporten slik at de vises som positive tall. Kostnader vises som negative tall.

### Budsjett

Rapporten inneholder to budsjettversjoner:

**Opprinnelig budsjett:** Budsjettet slik det ble vedtatt ved årets start. Versjonskoden i Unit4 er institusjonsavhengig.

**Revidert budsjett:** Siste reviderte budsjett. Dersom det finnes en revidert budsjettversjon for det aktuelle året brukes denne, ellers faller rapporten tilbake til opprinnelig budsjett. Versjonskoden i Unit4 er institusjonsavhengig.

### Budsjettavvik

Differansen mellom regnskapsført beløp og budsjett (revidert eller opprinnelig, avhengig av hva som er tilgjengelig for det valgte året). Vises både som absolutt differanse (kr) og prosentvis avvik (%).

For inntekter betyr positivt avvik at inntektene er høyere enn budsjettert (grønt). For kostnader betyr positivt avvik at kostnadene er høyere enn budsjettert (rødt), da dette innebærer et merforbruk.

### Resultat

Inntekter minus kostnader (kontokategori AP01 minus AP02).

### Ubrukte midler

**Inngående balanse (IB):** Ubrukte midler per 1. januar, hentet fra kontokategori AP03 i Unit4. Representerer midler som er overført fra foregående år.

**Utgående balanse (UB):** Forventet balanse for ubrukte midler ved årets slutt, beregnet som inngående balanse pluss budsjettert resultat for året.

### Kontokategorier

Alle kontoer i Unit4 er mappet til en felles kontokategoristruktur i Analyseplattformen. Mappingen er institusjonsavhengig, men kategoriene er standardiserte:

<details>
<summary>Kontokategorier</summary>

| Nivå 1 | | Nivå 2 | |
|---|---|---|---|
| **Kode** | **Tekst** | **Kode** | **Tekst** |
| AP01 | Inntekter | AP01 | Tildeling |
| AP01 | Inntekter | AP02 | Andre inntekter |
| AP01 | Inntekter | AP03 | Interne leiestedsinntekter |
| AP01 | Inntekter | AP04 | Andre interne inntekter |
| AP01 | Inntekter | AP05 | Utsatt inntekt (avskrivninger) |
| AP01 | Inntekter | AP06 | Inntekt fra NFR/RFF |
| AP01 | Inntekter | AP07 | Inntekt fra EU |
| AP01 | Inntekter | AP08 | Inntekt fra øvrig bidragsaktivitet (BA) |
| AP01 | Inntekter | AP09 | Inntekt fra oppdragsaktivitet (OA) |
| AP02 | Kostnader | AP10 | Lønnskostnader |
| AP02 | Kostnader | AP11 | Lønnsdekning |
| AP02 | Kostnader | AP12 | Andre driftskostnader |
| AP02 | Kostnader | AP13 | Interne kostnader |
| AP02 | Kostnader | AP14 | Interne leiestedskostnader |
| AP02 | Kostnader | AP15 | Overhead |
| AP02 | Kostnader | AP16 | Egeninnsats |
| AP02 | Kostnader | AP17 | Annen inndekning |
| AP02 | Kostnader | AP18 | Investeringer |
| AP02 | Kostnader | AP19 | Avskrivninger |
| AP03 | Ubrukte midler per 1.1. | AP20 | Ubrukte midler per 1.1. |

</details>