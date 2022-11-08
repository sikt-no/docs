---
slug: /datadeling/begreper/
title: Begreper i IntArk
---

Forklaringer og utdypninger av terminologi og begreper brukt i IntArk og
teknisk plattform. Oversikten inkluderer også begreper brukt andre steder, og
hvordan de relateres til IntArk, for å unngå misforståelser.

Se også [data.norge.no](https://data.norge.no) for relaterte begreper. Se også
[rollene i IntArk](/docs/datadeling/hva-er/roller).

## Provisjonere

Å "kopiere" data fra et kildesystem til et endesystem, og holde dette
fortløpende oppdatert.

Mange systemer har behov for å provisjoneres, for eksempel med alle
brukerkontoer som skal ha tilgang. Begrepet Integrasjon brukes
som regel om å koble sammen tjenester, mens provisjonering er det å flytte
data. Alternativt kan et system bli oppdatert med informasjon ved
behov, ved såkalt *Just In Time provisjonering (JIT)*. Et siste alternativ er
systemer som ikke kan integrere, og du må legge inn data
manuelt.

Teknisk sett kan provisjonering foregå gjennom eOppslag, og bli hendelsesbasert
ved bruk av eNotifikasjon. Eldre systemer integrerer ofte ved overføring av
store, tunge filer, som har en del ulemper.

Se også: Integrasjon, Just In Time provisjonering

## Produsent

Se [Tilbyder](#Tilbyder)

## Tilbyder

Rollen til en tjeneste eller person som tilbyr data. I utgangspunktet er
tilbyderen autoritativt kildesystem for data som tilbys. Avhengig av
konteksten, kan dette også være snakk om en person, gruppe eller
enhet.

Se også: Autoritativt kildesystem

<!-- TODO: flytt begrepa frå tabell til ein betre oversikt. Treng truleg å
  ryddast i også. -->

## Andre begrep

| Begrep | Forklaring |
| --- | --- |
| Konsument | Rollen til en tjeneste eller system som ønsker å motta data fra en tilbyder. Avhengig av kontekst, kan dette også være snakk om en person, gruppe, enhet, utvikler eller sluttbruker. |
| Tjenesteportefølje | En oversikt over tjenester.<br/><br/><br/>Tjenesteportefølje (Service Portfolio) er opprinnelig et oppslagsverk definert i [ITIL](http://wiki.en.it-processmaps.com/index.php/Service_Portfolio_Management#Service_Portfolio) for planlagte, aktive og nedlagte tjenester i virksomheten. Teknisk plattform gir en oversikt tjenesters integrasjoner.|
| Konnektor | En tjeneste som integrerer mellom to systemer som ikke kan integreres direkte. Ofte gjøres dette med mikrotjenester. Konnektorer inneholder ofte forretningslogikk.<br/><br/><br/>Konnektorer bør følge IntArk, ved at de blant annet bruker åpne grensesnitt, har så løse koblinger som mulig, og at forretningslogikk og målsystem-spesifikke hensyn ikke legges i produserende system. Se mer under prinsippet [Tjenesteorientert](/docs/datadeling/prinsippene/tjenesteorientert/).<br/><br/><br/>Merk at andre kan bruke begrepet "konnektor" også for direkte-integrasjoner.|
| Målsystem | Rollen til et system, når det **henter** data fra et kildesystem.<br/><br/><br/>Se også: Konsument.|
| Endesystem | Se: Målsystem, Konsument. |
| Autoritativt kildesystem | Rollen til et system som institusjonen har bestemt skal være kildesystemet for spesifikke dataelementer.<br/><br/><br/>Se også: Tilbyder.|
| Kildesystem | Se: Autoritativt kildesystem. |
| System | Et IT-system. I denne konteksten brukes begrepet "system" for teknisk nivå, mens "tjeneste" brukes i brukersammenheng. Definisjonen er vag og brukes forskjellig, så begrepet bør unngås.<br/><br/><br/>Se også: Tjeneste.|
| Tjeneste | En tjeneste er noe som tilbyr funksjonalitet for noen. Tjenesten kan tilbys av et system, eller i samspillet mellom flere system.<br/><br/><br/>Se også: System.|
| API | Application Programming Interface: Maskinlesbart grensesnitt for en tjeneste eller system. IntArk setter noen føringer og anbefalinger for hvordan API til kildesystem skal fungere, for eksempel at vi bruker *Web Service*<br/><br/><br/>Se blant annet [utforming av API](/docs/datadeling/god-praksis/api-design).<br/><br/><br/>Se også: Web Service|
| Sikker Datadeling | En tjeneste for å håndtere avtaler om tilganger til data. I tjenesten kan du som dataeier ha oversikt over hvem som har tilgang til hva i dine systemer, og du kan opprette, fornye og avvikle tilganger til data.<br/><br/><br/>Se også: API Manager|
| Notifikasjon | Vi bruker begrepet i IntArk om **tynne meldinger** som sendes til og fra meldingskøen, primært i integrasjonsmønsteret [hendelsesbasert oppdatering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert). Se [eget dokument som beskriver notifikasjoner i mer detalj](/docs/datadeling/begreper/notifikasjon).|
| API manager | En tjeneste som gir dataeiere kontroll over tilganger til sine API, og konsumenter mulighet for å få tilgang. API manager er et system som realiserer de funksjonelle. API manager er en sentral komponent i IntArks tekniske plattform.<br/><br/><br/>Se også: Sikker Datadeling|
| API-katalog | En tjeneste som gir deg oversikt over alle API-er for en institusjon. I praksis inneholder ofte en API Manager også ein API-katalog.<br/><br/><br/>Se også: API Manager, Datakatalog|
| Datatilbyder | Se: Tilbyder |
| Datakonsument | Se: Konsument |
| API gateway | En tjeneste som tar seg av selve tilgangskontrollen til API på systemnivå. Hvem som skal ha tilgang styres i API manager, og API gateway overholder dette. Dette er en sentral komponent i IntArks tekniske plattform.|
| Applikasjon | En applikasjon er vanligvis definert som en samling programvare som tilbyr *tjenester*.<br/><br/><br/>Gravitee bruker begrepet for entiteter som får tilgang til API, altså konsumentene. En applikasjon har en eier, og kan bli gitt tilganger. Du søker om tilganger til API via applikasjonen du registrerer.<br/><br/><br/>Se også: Konsument, Tjeneste.|
| Application | Se: Applikasjon |
| Authorization server | En rolle i Oauth 2-protokollen, som tar seg av tilgangskontroll.<br/><br/><br/>Se: Autorisasjonstjeneste|
| Meldingskø | En tjeneste for å behandle meldinger og sikre at disse meldingene blir distribuert videre til tjenester som abonnerer på valgt type melding. For tiden brukes systemet [RabbitMQ i IntArk](/docs/datadeling/teknisk-plattform/rabbitmq).<br/><br/><br/>Merk: I IntArk-sammenheng snakker vi bare om meldingskø som tjenesten som behandler notifikasjoner og andre meldinger som skal bruker **mellom tjenester**. IntArk sier ingenting om meldingskøer som brukes internt i systemer.<br/><br/><br/>Se også: [Notifikasjon](/docs/datadeling/begreper/notifikasjon)|
| API portal | Se: API-katalog |
| Autentiseringstjeneste | En tjeneste som kan autentisere sluttbrukeren og/eller systemet som ønsker å konsumere data.<br/><br/><br/>I Oauth2 blir autentiseringstjenesten spesifisert i mer detalj.|
| Datakatalog | En oversikt over alle data, spesielt kildedata, som er tilgjengelig, og hvordan du kan få tilgang til dette. Dette er relatert til DigDirs "Orden i eget hus". En datakatalog kan være en API-katalog, men det kan også være to uavhengige tjenester som kan relatere til hverandre. Det er planer om en felles datakatalog for sektoren i fremtiden.<br/><br/><br/>Se også: API-katalog.|
| Autorisasjonstjeneste | En tjeneste som tar seg av tilgangskontrollen ved uthenting av data fra API.<br/><br/><br/>I Oauth2 er dette en rolle som er spesifisert i detalj, og der du som tjeneste eller sluttbruker får utsted en nøkkel (token) du kan bruke for å hente ut data.|
| Nøkkelutsteder | Se: Autorisasjonstjeneste |
| Event streaming | Se: Hendelsesstrømming |
| Hendelsesstrømming | Når du behandler mange meldinger under ett, kalles dette gjerne hendelsesstrømming.<br/><br/><br/>Se også: Meldingskø, Notifikasjoner|
| Galvanisk skille | Opprinnelig et elektronikk-begrep, men som er tatt inn for å beskrive tjenester som har et strengt skille mellom innlogging i applikasjonen og ikke i operativsystemet. Det er da et "galvanisk skille", så innloggingshemmeligheter er isolert til applikasjonen. Et eksempel er webapplikasjoner som bruker Feide-pålogging.<br/><br/><br/>Se mer informasjon under [forvaltningsveilederen](/docs/datadeling/veiledere/annet/anskaffelse/galvanisk-skille).|
| Retrofit | Retrofit handler om å forlenge levetiden til gammel teknologi ved å legge på ny teknologi utenpå. I IntArk-sammenheng handler dette som oftest om å lage egne mikrotjenester som oversetter og forenkler integrasjon med et gammelt system, slik at den kan bli IntArk-kompatibelt.<br/><br/><br/>Se mer informasjon under [forvaltning](/docs/datadeling/malgrupper/anskaffer/).|
| Masterdata | Se: Autoritativt kildesystem |
| Web Service | Web Service (WS) er en type API (integrasjonsgrensesnitt), som er den vanligste måten å dele data på internett i dag. WS er en sekkebetegnelse, som inneholder blant annet RESTfulle API.<br/><br/><br/>[IntArk anbefaler bruk av webservice for API](/docs/datadeling/god-praksis/bruk-av-webservice).<br/><br/><br/>Se også: API|
| Åpent grensesnitt | Et åpent grensesnitt er et grensesnitt som alle skal kunne utvikle integrasjoner mot, i motsetning til proprietære, lukkede grensesnitt.<br/><br/><br/>Åpent grensesnitt er et krav i IntArk, og følger integrasjonsprinsippet om [Tilgjengelighet: Autoritative data skal tilbys gjennom åpne grensesnitt](/docs/datadeling/prinsippene/tilgjengelig). Grensenitt som er bransjestandard foretrekkes ofte, siden det reduserer faren for lock in.|
| Autorisasjon | Autorisasjon er prosessen med å bestemme om en autentisert entitet er berettiget å få en tilgang. Dette betyr at en tjeneste verifiserer, vha. regler som er satt for tjenesten, om entiteten skal gis en tilgang eller ikke. Tilgang kan for eksempel være om entiteten skal slippes inn i tjenesten, om de skal få ekstra funksjonalitet i tjenesten eller endret utseende på tjenesten. Tjenester som sjekker tilganger bedriver *tilgangskontroll.* |
| Autoritativ | Autoritativ refererer til hvem som bestemmer (autoritær). I IntArk-sammenheng er dette hvilket system eller tjeneste som er en autoritær kilde for data.<br/><br/><br/>Se: Autoritativt kildesystem|
| Integrasjon | Det å integrere tjenester i konteksten IT og arkitektur er det å påse at tjenester kommuniserer. Dette kan foregå som en dialog mellom tjenestene eller som monolog fra en tjeneste til en annen. Hensikten er å sikre at data blir kjent i de tjenester som trenger dem.<br/><br/><br/>Begrepet integrasjon brukes om selve den tekniske kommunikasjonen, mens begrepet *datadeling* er bredere og inkluderer også det utenfor det tekniske, for eksempel datakvalitet, ansvarsplassering og informasjonsforvaltning.<br/><br/><br/>Se også: Datadeling|
| Datadeling | Datadeling handler om alt som må til for at du skal kunne dele data mellom tjenester, prosesser og mennesker.<br/><br/><br/>Vi følger [Digitaliseringsdirektoratets definisjon av datadeling](https://doc.difi.no/nasjonal-arkitektur/nab_arkitekturlandskap_segmentarkitektur_datadeling/#_hva_er_datadeling):<br/><br/><br/>*Datadeling handler om å forsyne forretningsprosesser og dataanalyse med nødvendig datagrunnlag.*<br/><br/><br/>*De fleste aktører sitter på begge sider i dette bildet, og må kunne både dele og innhente data og hendelser. I beskrivelsene skilles det likevel gjerne på rollene som* tilbyder *og* konsument*.*<br/><br/><br/>*Begrepet datadeling er ut fra dette å oppfatte som kortform for **deling og innhenting av data og hendelser**.*<br/><br/><br/>Se også: Integrasjon|
| Just In Time provisjonering | Just In Time (JIT) provisjonering er *provisjonering* som gjøres i øyeblikket de provisjonerte dataene trengs. Et eksempel kan være at man slår opp informasjon om en bruker når vedkommende logger inn.<br/><br/><br/>Se også: Provisjonering|
| Masterdata Management | Masterdata Management (MDM) bestemmer hvilke system/tjeneste som er ansvarlig (*autoritativ*) for hvilke data. MDM omfatter også dataenes semantikk, som vil si hva dataene betyr ut fra gitt kontekst, og videre dataens kvalitet: Hvilken grad av feil og mangler er tolerert?<br/><br/><br/>Se også: Autoritativt kildesystem, Informasjonsforvaltning |
| Informasjonsforvaltning | Prosesser, rutiner og funksjoner for å sikre god datakvalitet i institusjonens data.|
| Mikrotjeneste | En liten webservice som er spesialisert til å gjøre én ting. [Mer om Micro Services](/docs/datadeling/begreper/mikrotjeneste). Mikrotjenester som brukes i IntArk-sammenheng kalles for en konnektor.<br/><br/><br/>Se også: Konnektor|
| Micro Service | Se: Mikrotjeneste |
| Return On Investment | Return On Investment (ROI): Et begrep om hva man får for en investering. I IntArk-sammenheng er ROI ofte vesentlig for å vurdere om en tjeneste skal oppgraderes for å kunne integreres med, eller om det skal vere et unntak. Dette fra [prinsippet Fleksibel](/docs/datadeling/prinsippene/fleksibel).|
| Spørring | Handlingen å ta kontakt med et API for å be om data. Fra engelsk "request".<br/><br/><br/>Se også: Uttrekk|
| Teknisk gjeld | Teknisk gjeld er et abstrakt begrep som handler om endringer som må gjøres i en applikasjon for å få denne til å følge gjeldende regler, ønsket funksjonalitet og fleksibilitet, og etterkomme retningslinjer. Teknisk gjeld øker typisk gjennom en applikasjons levetid, med mindre teknisk gjeld adresseres. Økende teknisk gjeld medfører økt *time-to-market* og synkende return-on-investment. |
| Enterprise Service Bus | Enterprise Service Bus (ESB) er engelsk begrep for tjenestebuss.<br/><br/><br/>Se: Tjenestebuss|
| Teknisk plattform | IntArk sin tekniske plattform er verktøyet som hjelper institusjonene med å dele data trygt og sikkert, ved å gi oversikt over hvem som har tilgang til hvilke data.|
| Time to Market | Time To Market (TTM): Et begrep om tiden det tar å lansere funksjonalitet. En mer fleksibel arkitektur, med for eksempel løsere koblinger, gir kortere TTM. |
| Uttrekk | Resultatet man får etter en *spørring* mot en *webservice.*<br/><br/><br/>Se også: Spørring|
| Datakvalitet | Kvaliteten på data. God kvalitet er vesentlig for å kunne gjenbruke data, og med det ha en god og effektiv datadeling. Dataeier er ansvarlig for god datakvalitet for sine autoritative data. Noen kriterier til datakvalitet:<br/><br/><br/>* At data er komplette<br/>* At data er maskinlesbare<br/>* At data er riktig formaterte<br/>* At data er oppdaterte|
| Tilstandsløs | En tjeneste som ikke lagrer egne data, inkludert sesjonsdata, er tilstandsløs. Tilstandsløse mikrotjenester er ofte enklere å håndtere, både fordi det er enklere å skalere horisontalt ved mye last, og krever mindre drift.|
| Idempotent håndtering | Hvis et kall mot et endepunkt i et API er garantert å gi samme resultat ved gjentagende kall, er det idempotent. Dette er sentralt i hendelsesdrevet provisjonering.|
| API-eier | Den som er ansvarlig for et API hos en institusjon. Dette kan for eksempel være tjenesteansvarlig eller dataforvalter, eller være en egen rolle, avhengig av hvordan institusjonen har løst dette.|
| Løs kobling | Et prinsipp om at en integrasjon bør være mest mulig uavhengig av systemet, tjenesten eller leverandøren. En kobling mellom to system er løs hvis det er enkelt å bytte ut det ene systemet, uten at det andre systemet må endres. Se mer utdypende forklaring i [Løs kobling](/docs/datadeling/begreper/los-kobling).|
| Tett kobling | Det omvendte av en løs kobling. For integrasjoner ønsker du som regel ikke tette koblinger, da det gjør det vanskeligere eller mer kostbart å bytte ut systemer. Se: Løs kobling.|
| Datasett | En samling av data-elementer. Se: Kildedata |
| Kildedata | Datasett som er autoritativt. Se: Autoritativt kildesystem. |
