---
slug: /datadeling/om/styringsmodellen/
title: Styringsmodellen til UiO:IntArk
---

En gjennomgang av hvordan styringsmodellen til UiO:IntArk fungerer, og
bakgrunnen for hvorfor den ble satt opp som den er.

## Formålet med styringsmodellen

Arkitekturen skal gjøre integrasjonsarbeidet ryddigere og enklere å forholde
seg til, med tydelige ansvarslinjer, samtidig som at rammeverket skal være
fleksibelt å bruke.

Det er viktig å se forholdet mellom IT-løsning og organisasjon, og IT-løsning
og menneskene som skal benytte løsningen.

Rammeverket skal gi produsenter og konsumenter autonomitet og selvstyre, men
sette føringer der det er hensiktsmessig for institusjonen som helhet. Du kan
sammenligne det med trafikkreglene: Du er for eksempel pålagt å kjøre på riktig
side av veien, slik at alle kan komme seg trygt og effektivt til sitt mål, men
ellers står du fritt til å kjøre hvor du vil og velge den bilen som passer deg.

Et av UiO:IntArks prinsipper er kost/nytte. Kost/nytte skal vurderes for hele
virksomhetens systemlandskap under ett med et langsiktig perspektiv.
Integrasjonsarbeidet ved UiO skal med andre ord gi en helhetlig verdi for
virksomheten, der prioriteringsrådets oppgave er å og anbefale rekkefølge og
bemidling der det er interesse- eller ressurskonflikter. Dette er tatt med i
styringsmodellen.

## Styringsmodellen

Modellen er en kombinasjon av:

- **Internettmodellen**, der alle bestemmer for seg selv i et nettverk. Alt
  ansvar plasseres lokalt, og du snakker med den du selv vil i nettverket.

- **Nærhetsmodellen**, som er en desentral modell som plasserer ansvar og
  myndighet både sentralt og lokalt nivå i en organisasjon. Modellen brukes for
  beslutningslinjene på Universitetet i Oslo.

En illustrasjon av modellen:

![Illustrasjon som viser modellen: Aktører er autonome, men noen løsninger er sentraliserte når det er stordriftsfordeler.](/datadeling/img/bastard_on_side_with_bus.png)

- Hver aktør er autonom, og bestemmer selv hvem de skal kommunisere med.
  Kommunikasjonen går direkte, og ikke via tredjepart eller en sentral aktør.

- Der det er hensiktsmessig for organisasjonen som helhet, dvs. der det er
  stordriftsfordeler, lages det sentraliserte fellesløsninger. Sentraliserte
  løsninger er i _utgangspunktet_ valgfrie for alle aktørene å bruke.



## Bakgrunn for styringsmodellen

Modellen for UiO:IntArk ble laget for å fungere i heterogene organisasjoner,
der beslutninger tas mest mulig lokalt (distribuert). Mange universiteter og
høgskoler er organisert på denne måten, for eksempel i hva fakultetene selv
bestemmer. Modellen bestemmer både hvordan beslutninger og ansvar plasseres, og
hvordan tekniske komponenter spiller sammen. Modellen prøver også si noe om
samspillet mellom IT og virksomhet. Alt dette må fungere sammen.

I utarbeidingen av UiO:IntArk var et viktig poeng at det er mennesker som skal
bruke arkitekturen. Det ble gjennomført workshops med systemeiere og utviklere
der de viktigste og mest samstemte tilbakemeldingene fra samlingene var at
forutsigbarhet, handlingsrom og autonomi var sterkt ønsket. De ville også ha
ett kontaktpunkt man kunne henvende seg til for å få veiledning og hjelp.
Menneskets produktivitet motiveres av autonomi, følelsen av tilhørighet og at
man har rett kompetanse.[^1]

[^1]:
    A general theory of human motivation applicable to leadership. _Deci and
    Ryan (1989) [Self-Determination Theory
    (SDT)](http://selfdeterminationtheory.org/theory/)._

Organisatorisk springer arbeidet med integrasjonsarkitektur ut av, og er
forankret i, Universitetsstyrets vedtak om “Organisering og standardisering av
universitetets IT-virksomhet”:

> “Universitetsdirektøren skal i samarbeid med ledelsen ved fakulteter og
> institutter utarbeide forslag til arkitektur og integrasjonsrammeverk.”

## Horisontal og vertikal koordinering

For å ivareta helheten i tjenestelandskapet, samtidig med å tilby systemeiere
et handlingsrom, ble det laget prinsipper og anbefalinger. Ved å følge
anbefalingene kan to fakultet lage hver sine IT-løsninger uten å snakke sammen,
men løsningene deres kan fortsatt utveksle informasjon. De er interoperatible.
Vi kaller dette horisontal koordinering. Dette i kontrast til vertikal
koordinering, som omhandler eskalering og beslutningskjeder.

For UiO:IntArk ble det besluttet at eskalering og beslutningskjeden er:

Systemeier -\> Prioriteringsråd -\> Strategisk koordineringsråd

Beslutningskjeden ble først innført for administrative IT-tjenester, og ikke IT
i forskning og IT i utdannning.

Prioriteringsrådets oppgave er å ta forretningsbeslutninger rundt integrasjon.
Det har en proaktiv rolle med tanke på hva som kommer av oppdrag samt
organisasjonens endringskapasitet og gjennomføringsevne. Hvordan UiO gjør IT,
ligger ennå til IT-Direktør iht. Universitetsdirektørens delegering. Systemeier
løfter typisk en sak til prioriteringsråd hvis det reises uenighet. Hvis saken
er utenfor mandat, eller det ikke oppnås en enighet, kan saken løftes til
Strategisk koordineringsråd, som inneholder deltagere fra fakultetene og
sentrale interessenter.

Noen scenarier for beslutningskjeden:

- Scenario 1: Flere har behov for de samme ressursene. Behov må prioriteres opp
  mot hverandre og planlegges for å få komplekse integrasjoner på plass, eller
  det må vurderes å kjøpe ekstern arbeidskraft. Prioriteringsrådet kan anbefale
  prioritering av ressurs-søknader til SKAIT.

- Scenario 2: System-/dataeiere ønsker å integrere, men har ikke mulighet til å
  finansiere (hele) integrasjonen over egne budsjetter. Det må fremskaffes midler
  og behovet må vurderes i lys av andre integrasjonsbehov.

- Scenario 3: En systemeiere har tilbyr ikke sine data i tråd med
  integrasjonsarkitekturen, og uenighet med andre systemeiere medfører en
  eskalering.

## Nærhetsmodellen

Det viktigste beslutningen og leveransen som kom ut av “Organisering og
standardisering av universitetets IT-virksomhet” var
[Nærhetsmodellen](https://www.uio.no/for-ansatte/arbeidsstotte/prosjekter/internt-handlingsrom/organisasjonsutvikling/narhetmodellen.html).
Nærhetsmodellen var den sterkeste føringen for å tilpasse arkitekturen til
organisasjonen.

Nærhetsmodellen slår fast at:

> "Organiseringen av de administrative tjenester skal følge en desentral modell
> som innebærer økt ansvar og myndighet på lokalt nivå."

I UiO:IntArk bruker vi ordet "distribuert" i stedet for "desentral". I all
hovedsak betyr det det samme, med unntak av at en distribuert løsning består av
komponenter som utveksler informasjon. En desentral løsning har ikke dette
kravet.

Illustrasjon for en distribuert løsning, som viser at alle aktører snakker
direkte med hverandre:

![internettmodellen](/datadeling/img/internetmodel.png)

Aktørene utgjør et nettverk av autonome enheter.

## Internettmodellen – ansvarliggjøring av systemeier

Å ansvarliggjøre systemeier er også en føring integrasjonsarkitekturen har
arvet fra føringer på høyere nivå, fra [Organisering og styring av
IT](https://www.usit.uio.no/om/it-dir/strategi/fremragende/sab/organisering-og-styring-av-it.html#toc11):

> Når det gjelder administrativ IT er det bestemt at denne skal fullfinansieres
> over systemeiernes budsjetter. Sammen med veikartene vil dette gi langt bedre
> oversikt over kostnadene knyttet til denne virksomheten og gi tilsvarende
> bedre grunnlag for styring og prioritering.

Modellen med autonome aktører kalles ofte "Internettmodellen", da det er slik
internettet er bygget: Alle holder kontroll på seg selv. Det er ingen
kontrollmekanismer (sentralt) i nettverket som godkjenner hvem som snakker med
hvem.

De vanlige fordelene med modellen:

- den er innovasjonsdrivende
- det er kort vei til beslutningsmyndighet, beslutninger tas lokalt
- ansvaret er tydelig
- eventuelle flaskehalser lager bare forsinkelser for de involverte, ikke for
  nettverket som sådan

De vanlige ulempene:

- den er uoversiktlig, vanskelig å finne frem
- det er ingen kontrollmekanismer i nettverket, svak etterrettelighet
- den fordrer redundant kompetanse
- det kan kreve høy kompetanse å sette sammen data fra flere kilder

"Internettmodellen" ligger til grunn for UiOs integrasjonsarkitektur. I
virkeligheten fungerer internettet på grunn av ekstrem standardisering, for
eksempel rundt internettadresser, protokoller (som http) og språk (som html).
På samme måte har integrasjonsarkitekturen standardisert på bransjestandard
mekanismer og format. Dette gjør at man ikke lenger er avhengig av
IT-spesialister fra en spesifikk leverandør for å integrere. Man kan gjøre det
selv, eller kjøpe hjelp fra en valgfri tredjepart - dette styrer hver enkelt
systemeier selv.

Internettet byr også på sentraliserte komponenter, enten de er per design (som
DNS/SSL) eller de facto (som søketjenesten Google). Dette gir brukervennlighet,
oversikt og sikkerhet. UiOs integrasjonsarkitektur har derfor også
sentraliserte tjenester som tilbyr nettopp dette. Vi har standardisert rundt
noen felles komponenter for at informasjonsutveksling skal skje brukervennlig,
effektivt og for å bedre kontroll og etterrettelighet, herunder oppfylle
lovgivning og forskrifter. API-katalogen er et eksempel på en komponent som
skal gjøre det enklere for både produsenter og konsumenter.

## Telefonsentralmodellen

Den diamentrale arketypen til Internettmodellen kalles gjerne
_Telefonsentralmodellen_. I denne modellen går all trafikk gjennom en sentral
før den når mottager, slik illustrasjonen viser:

![](/datadeling/img/telefonsentralmodellen.png)

I UiO:IntArk går vi bort fra denne modellen, både fordi den ikke passer med
UiOs desentraliserte styringsmodell, og fordi sentralen blir en flaskehals for
endringsdyktighet.

Tidligere måtte man kontakte en gruppe spesialister og data ble fraktet gjennom
store komponenter som FS, SAP, OA og IGA (Cerebrum). Kompleksiteten i disse
sentralene gjorde det vanskelig og dyrt å hente hjelp fra tredjepart. Gruppene
sto ofte selv for å prioritere oppdrag og diktere løsninger. Dette var en
modell som passet bedre da IT kun var for de innvidde og ikke skjedde overalt i
organisasjonen.

Modellen har også gode sider. Sentralen tilbyr funksjonalitet som hjelper
aktørene i nettverket. For eksempel kan den, ut fra hvilken informasjon som
sendes, vite hvilken aktør som skal ha pakken, eller den kan sette sammen data
fra forskjellige aktører før den sender den samlede informasjonen til mottager
på det foretrukne formatet.

Modellens kjerneegenskaper er:

- innovasjon skjer i sentralen, innovasjonshemmende på enkeltaktører
- kompleksitet flyttes fra aktør til sentral, krever mindre redundant spesialkompetanse
- fordrer mer ressurser sentralt i nettverket
- gir kontroll og etterrettelighet
- kan ved ressursmangel fungere som en flaskehals for hele nettverket
- effektive beslutninger fordrer tydelig mandat og delegasjon

Nærhetsmodellen tilsier at denne modellen skal benyttes under gitte omstendigheter:

> "Ved stordriftsfordeler, eller der oppgavene krever særlig kompetanse, skal
> det velges sentraliserte løsninger."

Det burde kanskje vært tilføyd: Når behovene er statiske og endres sjelden.

## Gode kombinasjonsmodeller

Til tross for modellene er diamentralt motsatte, kan de to metodene med hell
benyttes i kombinasjon: De er to forskjellige verktøy, som kniv og gaffel.
Teknisk og administrativt kan altså UiOs integrasjonsarkitektur illustreres
slik:

![](/datadeling/img/bastard_on_side_with_bus.png)

Illustrasjonen viser at aktørene er autonome, men at der det er
stordriftsfordeler (som mye brukte data) eller kreves spesialkompetanse (som
kompliserte uttrekk satt sammen fra flere datakilder) kan man lage
sentraliserte løsninger.

Tegningen viser arkitekturen suppleres med støttetjenester. Eksempler på
støttetjenestene:

- _Felles tjenesteregister_, som viser hvilke data som tilbys og hvor de er å
  finne. En API-katalog er et subsett av dette.

- _Sikker Datadeling_, for sikker datautveksling mellom IT-tjenester. Også kalt
  _API gateway_.

- Meldingskø-håndtering, hvilket er en tjeneste for umiddelbar
  datasynkronisering mellom tjenester som støtter og trenger det. Det vil si
  tjenester som benytter seg av å selv å lagre replikerte data om rom, brukere,
  grupper eller annet, såkalt provisjonering.

- Felles kontaktpunkt. Dette har primært til hensikt å måle resultatene av
  arkitekturen. Dette for å kunne lære og videreutvikle arkitekturen. For å kunne
  gjøre denne læringen, må kontaktpunktet vite hvem som har integrert hvordan, og
  erfaringen de har trukket av dette. Kontaktpunktet kan også ta seg av andre
  henvendelser, som fra de som ønsker støtte til å integrere eller til å lage et
  godt design

- Sentraliserte uttrekk og kontrollmekanismer. Et eksempel kan være at mange
  konsumenter trenger tilgang til data sammensatt fra flere kilder, som da kan
  tilbys i en sentralisert tjeneste.

- Eskalering- og beslutningskjeden som går fra systemeier, gjennom
  prioriteringsrådet, til strategisk koordineringsråd.
