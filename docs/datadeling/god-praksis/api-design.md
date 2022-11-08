---
slug: /datadeling/god-praksis/api-design/
title: API-design
---

Anbefalinger rundt utforming av API. Både for deg som utvikler en tjeneste som
skal dele data, og deg som skal anskaffe en tjeneste.

Det er ikke enkelt å lage et godt API-design. Du trenger ofte noen iterasjoner
før du har et API som er generelt og fungerer godt for alle konsumenter, og som
følger institusjonens, og sektorens, behov. For lite tid brukt på designet kan
føre til uheldige valg, som kan gi ulemper i lang tid fremover.

En vanlig fallgruve er å ikke involvere konsumentene i diskusjonen. Brukerne av
API-et vil kunne gi nyttige tilbakemeldinger for å gjøre API-et brukbart og
forståelig. En annen fallgruve er å bare involvere en konsument i diskusjonen.
Det er vanskelig å designe noe generelt nok.

## Prinsipper for godt API-design

Utformingen av API bør følge
[integrasjonsprinsippene](/docs/datadeling/prinsippene), som blant annet sier
at du bør ha et åpent grensesnitt og det bør være så løst koblet som mulig.
Dette følger også Digitaliseringsdirektoratets føringer, blant annet at data
skal deles _som de er_, og ikke tilpasset enkelte konsumenter.

Andre anbefalinger:

- **Brukerorientert**: Ha i bakhodet at brukernes behov kan endre seg raskt, og
  at vi også derfor bør kunne endre tjenester og funksjonalitet raskt.
  Endringsdyktighet kan fort være viktigere enn for eksempel hvor effektiv en
  integrasjon er.

- **Tjenesteorientert**: Bruk så løse koblinger som mulig, som vil si å gjøre
  det så enkelt som mulig å bytte ut tjenester på begge sider av en integrasjon.
  For eksempel:

  - Bruk API-standarder, der det finnes
  - Bruk bransjestandarder, for eksempel RESTful
  - Hold API-et på funksjonelt nivå, og unngå systemspesifikke detaljer.
  - Bruk felles semantikk, hvis det finnes.
  - Unngå skreddersøm for en enkelt konsument.

- **Tilgjengelig**: Lag et åpent grensesnitt, som vil si at spesifikasjonen av
  ditt API må være fritt tilgjengelig, dokumentert og leverandøruavhengig.

- **Oversiktlig**: Registrer ditt API i din institusjons API-katalog, og
  dokumenter den. Du bør som minimum følge
  [OpenAPI-spesifikasjonen](https://www.openapis.org/) (swagger).

- **Etterrettelig:** Konsumenter må snakke med ditt API via din institusjons
  API gateway. Dette gjør at institusjonen får samlet oversikt over dataflyt, og
  har kontroll og kan for eksempel sperre tilganger ved behov. I praksis betyr
  det at din WS bør støtte autentiseringsmekanismene som er tilgjengelig i
  fellestjenesten.

- **Fleksibel**: Unntak fra prinsipper og anbefalinger er tillatt, men må
  begrunnes. Det kan for eksempel bli vurdert å ikke være hensiktsmessig å
  utvikle et nytt API hvis en liten tjeneste har et proprietært API som fungerer
  greit nok. Vurderingen må gjøres med hensyn på institusjonen og sektoren som
  helhet, og ikke bare basert på den enkelte tjenesten.

- **Effektiv**: Konsumenter bør hente data direkte fra det institusjonen
  definerer som kildesystem, og ikke via andre tjenester. Unntaket er velbrukte
  katalogtjenester. Noen datasett kan være ønskelig å kombinere for mange
  konsumenter, som kan vere nyttig å sammenstille sentralt. Det er også lite
  effektivt om en institusjon har to ulike kildesystem for omtrent samme data.

Sjekkliste for valg av typen API:

1. Finnes det en API-standard for datasettet du skal tilby? Prioriter å bruke
   denne! Standardisering er veldig nyttig for løse koblinger, og gjør det
   enklere å bytte systemer, på begge sider av integrasjonen.

2. Bruk bransjestandarder, der det finnes. For eksempel bruk av RESTful eller
   GraphQL. Se mer om anbefaling om [Web
   services](/docs/datadeling/god-praksis/bruk-av-webservice).

3. Finnes det lignende data i andre kildesystemer? Det bør i så fall først
   avklares hvilken tjeneste som er kildesystem for hvilke data.

4. Bruk lignende semantikk som i tilsvarende datasett andre steder, hvis mulig.
   Du anbefales å gjenbruke eksisterende datasett fra
   [data.norge.no](https://data.norge.no). Hvis det ikke finnes, kan du med
   fordel publisere ditt eget definerte datasett der.

## Funksjonelt API

Hold API på funksjonelt nivå så langt det er mulig. Unngå for eksempel å
eksponere interne systemdetaljer i API-et, for eksempel hvilke databasetabeller
du må snakke med. Konsumenter ønsker å fokusere på dataene, uten å måtte ha
kunnskap om interne detaljer i systemet ditt.

Se mer om funksjonelt API i [anbefaling om bruk av
webservices](/docs/datadeling/god-praksis/bruk-av-webservice).

Det er ofte vanskelig å klare å designe et API som er uavhengig av tekniske
valg i en tjeneste. Det kan være en fordel med en dialog med ulike konsumenter,
og se på tilsvarende datamodeller eller API-et til lignende tjenester. Det kan
være nyttig å designe en første versjon av et API før valg av tjeneste bak,
siden en unngår fallgruver i tekniske valg.

RESTful gir ofte en godt grunnlag for et funksjonelt API, men mange fallgruver
gjenstår.

## Datasett

Det er forskjell på et API og et datasett. Begge deler bør designes og
dokumenteres ved innføring av en ny datakilde.

For et API må tekniske detaljer dokumenteres, for eksempel
autentiseringsmetoder og endepunkt. For et datasett må begreper defineres og
dataelementer beskrives.

Datasett kan med fordel beskrives i API-katalogen. Dagens API manager støtter
ikke statens anbefalte format for beskrivelser av datasett (DCAT), men kan
beskrives i et dokument, eller med en lenke til beskrivelsen.

## Personopplysninger

Mange tjenester behandler personopplysninger. Da det er egne regler og lover
som påvirker hvordan disse kan deles, anbefales det å skille personopplysninger
fra andre data. Ved å holde dette adskilt blir det enklere å dele data som kan
deles.

Et eksempel: Et API gir oversikt over institusjonens organisasjonsenheter.
Dette kan enkelt deles ut med hvem som helst, siden det er offentlige data.
Men, hvis dette API-et i samme utplukk også lister ut hvilke ansatte og
studenter som er aktiv på hver enhet, blir det straks mer utfordrende å gi
tilgang.

Å dele personopplysninger til konsumenter utenfor egen institusjon krever blant
annet en databehandleravtale. Å dele personopplysninger internt hos
institusjonen kan kreve en oppdatering av hjemmelsgrunnlaget for
personpplysningene - følger datadelingen opprinnelig formål og hjemmel for den
nye behandlingen?

## Anskaffelse av tjenester

Også ved anskaffelse av IT-tjenester gjelder anbefalingene rundt deling av
data, på samme måte som ved egen utvikling. Alle IT-tjenester med data som kan
eller bør deles er anbefalt å ha et API som følger anbefalingene fra
fellestjenesten.

Ofte kommer innkjøpte IT-tjenester med et API, men det er ikke sikkert dette
gir gevinstene du ønsker.

- Er API-et godt nok dokumentert?

- Følger det prinsippet om løse koblinger? Hvor lukket og leverandørspesifikt
  er API-et? Kan andre konsumenter bruke det? Følger det noen standarder?

- Kan institusjonen få inn endringer i API-et?

- Hva er lovnaden til ytelse og oppetid? Hvor mange konsumenter ville kunne
  brukt API-et samtidig?

I anbud er det nyttig å legge inn krav til datadelingen, spesielt krav til API.
For viktige tjenester kan det også være nyttig å definere hvilket API
leverandøren må oppfylle, og hvis det ikke finnes en (bransje)standard til og
med designe API-et på forhånd. Dette kan gjøre datadelingen enklere etter at
IT-tjenesten er kjøpt inn.

## Versjonering

Konsumenter trenger forutsigbarhet. Når et API lanseres, bør konsumenter
forvente at det fungerer i lang tid før konsumenten må gjøre endringer.
Anbefalingen er som regel at en versjon av et API bør støttes i **minst seks
måneder**.

Dette gjør at versjonering bør vere med i designet av et API. Hvordan skal
tjenesten din støtte å tilgjengeliggjøre data både i et API for eksisterende
konsumenter og en nyere versjon av API-et?

I RESTfulle API løses dette ofte med å legge på versjonen som del av stien til
endepunktet. Noen eksempler:

    /v1/persons/ola
    /v2/persons/ola/contactinfo

For datatilbydere som også støtter notifikasjoner, bør dette også reflekteres i
meldingene. Hvilken versjon av API-et skal notifikasjoner refere til? Kan/bør
tjenesten støtte å sende ut en notifikasjon per aktive versjon av API-et?

## Sjekkliste for API

Hvis du designer et API:

- Er API-et på funksjonelt nok nivå?
- Følger API-et prinsippene til RESTful?
- Inneholder API teknisk terminologi som egentlig burde vært systeminterne?
- Trenger konsumenter å kjenne til interne detaljer om systemet bak for å kunne bruke API-et?
- Må du endre på API-et hvis du gjør endringer i tjenestens datamodell?
- Klarer du å unngå å eksponere personpplysninger, og likevel klare å
  tilgjengeliggjøre andre opplysninger?
- Har du dokumentert ditt API etter [OpenAPI-spesifikasjonen](https://www.openapis.org/) (swagger)?
- Har du registrert API-et ditt i institusjoens API-katalog?
