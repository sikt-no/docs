---
title: Livssyklus for identitet og tilgang
---



![Livssyklus tilganger](/img/iam/iamforvaltning.png)


Integrasjonslaget, RI Connect, består av en rekke konnektorer (Action Set) som er utviklet etter omforent kravspesifikasjon for å motta kravstilte attributter fra kildesystem som SAP, FS og OrgReg  , prosessere denne informasjonen og forsyne en rekke målsystemer som AD, LDAP, Inspera og Adgangskontroll med informasjon om brukere og deres tilganger.

Konnektorene som utvikles skal videreutvikles og forvaltes med tanke på gjenbruk på tvers av institusjoner. Det er med andre ord et mål om at tilpasning til den enkelte institusjon ikke skal gjøres i Action Set-koden, men i all hovedsak i tilgangsregelsettet som utarbeides.

Ettersom RI er master for å opprette og forvalte den unike digitale nasjonale identiteten til alle brukere, UH-ID, vil også kildesystemene   oppdateres med denne informasjonen etter at identiteten er opprettet, eller endret. Dette illustrerer at det er flere kilder til autoritative data, data som inneholder informasjon som evalueres for å bedømme tildeling av roller og tilganger og/eller som fungerer som triggere på slike.

Autoritative datakilder er:

* SAP for ansatte, oppdragstakere, timelønnede og langvarige gjester
* FS for studenter
* RI for kortvarige gjester. I tillegg er RI master for UH-ID og forretningsroller
* OrgReg for knytningen mellom organisasjonsenheter i SAP og FS, og som supplement til manglende organisasjonsinformasjon i SAP og FS.


## Livssyklus tilganger

Tilganger til en bruker tildeles som følge av oppstart, endring   eller avslutning av et engasjement. Dette kalles også for JML-prosesser (Joiner, Mover, Leaver). De use-casene som støttes av RI er:

<!-- | Kildesystem    | Brukertype    | J | M | L | Spesifikasjon                              | UC inst.  | UC Core  |
| ---  | --- | --- | --- | --- | --- | --- | --- |
| SAP     | Ansatt | X | X | X | Livssyklusprosess for alle brukertyper | 1.1-1.8 | 1.1-1.4 | -->

**Automatiske prosesser**

| Kildesystem | Brukertype      | J | M | L | Spesifikasjon                                                                                                                   | UC Inst. | UC Core |
| ----------- | --------------- | - | - | - | ------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| SAP         | Ansatt          | ✓ | ✓ | ✓ | Livssyklusprosess for alle brukertyper                                                                                          | 1.1-1.8  | 1.1-1.4 |
| SAP         | Langvarig gjest | ✓ | ✓ | ✓ | Livssyklusprosess for gjester (som registreres i SAP)                                                                           | 3.1-3.5  | 1.1-1.4 |
| FS          | Student         | ✓ | ✓ | ✓ | Livssyklusprosess for alle studenttyper                                                                                         | 2.1-2.9  | 2.1-2.5 |
| RI          | Alle            | ✓ |   |   | Identitetsmatching                                                                                                              |          | 03.jan  |
| RI          | Alle            | ✓ |   |   | Aktiv bruker tildeles organisering, inaktiv bruker aktiveres og tildeles organisering                                           | 4.1-4.3  | 3.2-3.3 |
| RI          | Alle            |   |   | ✓ | Aktiv bruker fratas organisering og deaktiveres                                                                                 |          | 03.apr  |
| RI          | Student         |   | ✓ |   | Engangsforlengelse av studenttilgang med varsling                                                                               | 06.jan   | 05.jan  |
| RI+AC       | Alle            | ✓ |   |   | Account Claim via ID-porten eller e-post                                                                                        |          | 05.feb  |
| Feide       | Alle med NIN    |   |   |   | Passord reset                                                                                                                   |          | 05.mar  |
| Helpdesk    | Alle uten NIN   |
| RI          | Alle            |   |   | ✓ | Provisjonerte kontoer slettes seks måneder etter at en konto er deaktivert (policy konfigurerbar mht brukertype, tid og system) |          | 05.apr  |
| RI          | Alle\*          | ✓ |   | ✓ | UH-brukernavn vil gjenbrukes hvis det eksisterer                                                                                |          | 05.mai  |
| RI          | Gjester         | ✓ | ✓ | ✓ | Livssyklusprosess for Sponsored Guests                                                                                          | 06.mai   |         |

**Manuelle prosesser**

| Kildesystem | Brukertype | J | M | L | Spesifikasjon                                                         | UC Inst. | UC Core  |
| ----------- | ---------- | - | - | - | --------------------------------------------------------------------- | -------- | -------- |
| RI          | Alle       |   |   | ✓ | Administrator deaktiverer tilgang lokalt eller til sentral tjeneste   | 05.jan   | 4.1, 4.4 |
|             | Alle       |   | ✓ |   | Administrator re-aktiverer inaktiv tilgang eller til sentral tjeneste | 05.feb   | 4.2, 4.5 |
|             | Alle       |   | ✓ |   | Endring av brukernavn                                                 | 05.mar   | 04.mar   |
|             | Alle       |   | ✓ |   | Overstyring av sentrale kildedata                                     |          | 04.jun   |
|             | Alle       | ✓ |   |   | Håndtering av identitetskollisjoner                                   |          | 4.7-4.8  |




Tilgangsmodellen i RI er en kombinasjon av rolle- og attributtbasert modell. Alle brukere tildeles minst en forretningsrolle basert på engasjementets art. En forretningsrolle vil være på formen «Ansatt [iam:employee]», og være unike innenfor en institusjon  . Forretningsroller kan i sin tur gi tilgang til ett eller flere målsystemer gjennom systemtilgang, som er på formen «Inspera [inspera]». En systemtilgang kan i sin tur inneholde en eller flere systemroller, som er på formen «Inspera Forfatter [inspera:author]!». Notér at «!» til slutt i rollenavnet betyr at den ikke er synlig og dermed ikke bestillbar i RI Portal. Disse rollene benyttes for automatisk tildeling alene. Bestillbare systemroller vil følgelig være uten denne suffiksen, for eksempel «Inspera Sensor [inspera:sensor]».

Det benyttes et utvidbart utvalg av parametere for å bestemme og tildele forretningsroller og systemroller.

![To-trinnsprosess for tildeling av tilganger](/img/iam/bilde4.png)



### Ansatte

En JML-prosess for en ansatt kan se ut på følgende vis:

![Eksempel på JML for ansatt](/img/iam/bilde5.png)

Figur: Eksempel på JML for ansatt

Løsningen baserer seg på en hendelsesdrevet arkitektur, der endringer på visse autoritative attributter genererer en melding som RI vil motta og behandle. For «Joiner» er triggeren startdato, og RI vil da få melding om dette sammen med tilhørende informasjon slik at forsyningsprosessen kan kjøres. For «Mover» er endringer på attributter som signaliserer at det er endringer i arbeidsforholdet, enten innad på eksisterende enhet eller at den ansatte får en ny stilling et annet sted i organisasjonen. For «Leaver» vil triggeren være stoppdato.

### Studenter

En JML-prosess for en student kan se ut som følger:

![Eksempel på JML for student](/img/iam/bilde6.png)

Figur 6:

Trigger for «Joiner» vil være en melding om aktivStudent (alternativt aktivKlasse). For «Mover» vil det være endringer i studieforholdet inkludert nytt emne, noe som antas skje hyppig. «Leaver» vil trigges av at studiet er fullført (eller avsluttet før fullførelse) aktivStudent settes til usant.

### Gjester

Gjester kategoriseres og registreres i henhold til følgende struktur:

| Kategori  | Beskrivelse | Krav til registrering | Register |
| ---  | --- | --- | --- |
| Kortvarige gjester | Eksterne uten krav til honorar, der varigheten av forholdet er 30 dager eller mindre. Rettigheter er forhåndsdefinert og begrenset. Brukeren får ikke Feidekonto. | Sponsor angir navn, e-post, sluttdato, og evt. mobiltelefonnummer og fødselsnummer. Gjesten gjennomgår Account claim, og knyttes til sponsorens organisasjonsenhet. Midlertidige brukernavn på formen `etternavn` | RI Institusjonskatalog via RI Portal |
| Langvarige gjester | Eksterne uten krav til honorar. Rettigheter er forhåndsdefinert og gis ihht det tilgangsregelsett som til enhver tid er gjeldende. | Tilsvarende informasjon som ved ansattregistrering, unntatt forhold som er knyttet til lønn. | SAP |
| Eksterne administratorer | Systemleverandører som har behov for administratortilgang for systemvedlikehold | TBD (ikke adressert av prosjektet) Registreres som langvarig gjest med utvidete tilgangsrettigheter.| SAP |
| Oppdragstaker | Eksterne med krav til honorar | De krav som ToA-prosessen stiller | SAP |
| Ekstern sensor | Ekstern med behov for tilgang til Inspera for sensur av et fag, tildelt i FS gjennom en kommisjon | De krav som ToA-prosessen stiller. Fødselsdato og passnummer kan erstatte norsk fødselsnummer eller D-nummer. YRK 2310121 skal benyttes | SAP |


## Deaktivering av tilganger

En «Leaver»-prosess initieres normal når en student har fullført studiet eller en ansatt eller langvarig gjest slutter, men kan også være forårsaket av at vedkommende er utestengt eller liknende. Forskjellen på disse prosessene er at ved utestengelse vil alle tilganger avsluttes umiddelbart, mens i vanlige tilfeller vil det gå 30 dager før tilgangene avsluttes. Studenter kan søke om seks måneders forlengelse av tilganger. Langvarige gjester avsluttes angitt dato. Det samme gjelder for kortvarige gjester, dog ikke utover 30 dager fra startdato.
