---
title: Overordnet arkitektur
---

Identitets- og tilgangsstyring(Felles IAM) er en samling av prosesser og teknologiske løsninger som bistår institusjonene med å gi rette tilganger til studenter, ansatte og gjester basert på tjenestebehov. Felles IAM har ansvar for å håndtere tilgangene på en etterprøvbar måte, samt å avslutte tilgangene når det ikke lenger er behov for dem. Felles IAM har dermed en vesentlig rolle i styringen av livssyklusen til digitale identiteter. Derfor spiller Felles IAM en vesentlig rolle i styringen av livssyklusen til digitale identiteter.

Felles IAM innfører felles teknologiske løsninger for hele sektoren, noe som er et sentralt tiltak for å støtte [strategiske mål og gevinster](./gevinster).

Hovedstegene i IAM består av:

* Forsyning, også kjent som provisjonering, er prosessen der en identitet blir bekreftet, og tilganger i forskjellige målsystemer blir opprettet basert på brukerens forretningsrolle eller roller. Denne prosessen skjer i bakgrunnen når en bruker starter, endrer eller avslutter et engasjement, som en stilling eller et studium. ved første gangs oppstart vil det bli registrert en unik digital identitet, kjent som UH-ID. Forsyningen kan være automatisk, halvautomatisk(med manuell bestilling og godkjenning, men automatisk utførelse), eller manuell.

  Etter at en bruker er provisjonert, kan brukeren benytte de systemene denne er provisjonert til. Normalt vil alle operasjoner gjennomgå følgende steg en eller flere ganger i løpet av en økt:
  * Autentisering er en prosess som innebærer identifisering og bekreftelse av brukerens identitet. Både lokale og sentrale tjenester brukes som kilder for autentisering, og bekreftelsen av at brukeren virkelig er den personen de hevder å være, kan innebære ett eller flere trinn. Denne prosessen foregår hver gang en bruker initierer en økt med en beskyttet tjeneste.
  * Tilgangssjekk, også kjent som teknisk autorisering, sjekker brukerens systemtilgang for å verifisere om en bestemt brukerhandling er tillatt. Denne prosessen utføres vanligvis kontinuerlig innenfor hvert system.
  * Logging av brukerhandlinger utføres for å støtte behovet for sporbarhet. Denne prosedyren utføres basert på kofigurasjon som er satt opp i hvert system som brukes. Loggene lagres i et sentralt system, og som bestemte ressurser ved hver enkelt institusjon får tilgang til.

* Avslutning av bruker, også kjent som deprovisjonering, er en viktig del av brukeradministrasjonen. Dette innebærer å avslutte en brukers tilgang til systemer og data når de ikke lenger trenger det, for eksempel når en studierett oppheves eller en ansatt slutter ved institusjonen. Deprovisjonering sikrer at tidligere brukere ikke lenger har tilgang til sensitiv informasjon og hjelper med å opprettholde sikkerheten i systemene. Det er viktig at denne prosessen blir utført nøye og systematisk for å unngå potensielle sikkerhetsrisikoer.

![Forsyning og tilgangskontroll](/img/iam/arkitektur.png)


## Systemarkitektur


Felles IAM innfører ett felles produkt for forsyning, RapidIdentity (RI) fra Identity Automation. RI består av flere komponenter, der de viktigste er:

* IdW, eller identitetsvarehus, er et datavarehus brukt på tvers av de ulike institusjonene. Dets hovedformål er å lagre identifikatorer som sikrer nøyaktig identitetskontroll og kriteriematching. IdW består av flere databasetabeller, hvor de mest sentrale er masteridentifikatorer (master identifiers), som spiller en nøkkelrolle i datahåndteringen.

* RIDB (RapidIdentity DataBase) er en struktur som lagrer data lokalt. Den tar inn kildedata, eller rådata, og begynner en prosess for å organisere denne dataen. Først flyttes dataen til "lasttabeller", som er midlertidige lagringssteder. Fra disse lasttabellene blir dataen deretter flyttet til "mastertabellene", som er det endelige lagringsstedet. Mastertabellene hjelper med å holde dataen organisert og lett tilgjengelig.

* Portalen inneholder en lokal lagringsstruktur som kalles "Portal Directory", hvor data blir oppbevart. I tillegg til dette omfatter portalen også Brukerportalen, et verktøy skapt for sluttbrukere og tjenesteforvaltere. Brukerportalen er utformet slik at disse brukerne får muligheten til å håndtere og administrere brukerdata på en effektiv måte.

* I tillegg til de tidligere nevnte funksjonene, benyttes også tjenesten [Account Claim](kontoaktivering.md). Dette er en tjeneste for å sikre korrekt identifisering og aktivering av kontoer for nye ansatte og studenter. Ved opprettelse av nye brukerkontoer går brukerne gjennom Account Claim for å aktivere kontoen sin. Videre er også Account Claim det verktøyet man bruker for å tilbakestille passord.



![systemarkitektur](/img/iam/systemarkitekturen.png)
