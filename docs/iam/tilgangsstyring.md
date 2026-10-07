---
title: Tilgangsstyring
---

I Felles IAM styres tilganger av tilgangskontrollmotoren ORG-ERA som automatisk tildeler brukeren [virksomhetsroller](/docs/iam/virksomhetsroller) basert på data fra kildesystemene. Brukeren blir deretter automatisk provisjonert til målsystemene sine basert på virksomhetsrollene. For hvert målsystem finnes et regelsett som tildeler systemrettigheter i målsystemet basert på virksomhetsrollene og organisatorisk tilhørighet.

[Les også om identitet livssyklus](/docs/iam/livssyklus) som også omhandler livssyklus for tilganger.

Vi definerer:

* Virksomhetsrolle - en rolle du har basert på rollen du har i organisasjonen. En virksomhetsrolle er også knyttet til en organisasjonsenhet.
* Systemrettighet - en tilgang du har blitt tildelt i et spesifikt målsystem. Begrepet *entitlements* brukes også ofte om dette. Vi skiller mellom:
  * system entitlements, som gir deg tilgang til et målsytem.
  * access enttilements, som gir deg spesifikke rettigheter innad i et målsystem

Dette er visualisert i modellen under:

![](/img/iam/tilgangsstyring1.png)

## Eksempel på tildeling av rettigheter

Eksempel på tildeling av systemrettigheter for studenten Ola:

![](/img/iam/tilgangsstyring2.png)

Eksempel på tildeling av systemrettigheter for Kari på studieadminsitrasjon:

![](/img/iam/tilgangsstyring3.png)

I selvbejeningsgrensesnittet til Felles IAM vises både virksomhetsroller og tilgangen brukeren har i målsystemene:

![](/img/iam/tilgangsstyring4.png)


## Eksempelprosess

Eksempelet nedenfor viser en tenkt ansatt, og hvordan en automatisk flyt kan skje. Det er AMF (Authorisation Management Framework, en kolleksjon av ulike ActionSet som implementerer ORG-ERA, en fingranulert modell for rolle- og attributtbasert tilgang) som tolker mottatte data fra SAP, og vil basert på disse tildele tre forretningsroller (Ansatt, Studieadministrativt ansatt basert på SKO+YRK og Vitenskapelig ansatt basert på stillingsKat).

I virkeligheten vil forretningsrollen Ansatt innrømmes en rekke basistilganger, mens eksempelet viser videre bare regelsettet for TPP og Inspera.

![Eksempel på JML for student](/img/iam/bilde7.png)

Figur 7: Eksempel på prosessering av "Joiner" (AMF/ORG-ERA)





## Virksomhetsroller

* Basert på tilgjengelig informasjon i kildesystemer.
* Avhengig av datakvalitet i kildesystemer
* Standardiseres på tvers av institusjoner
* Må utvikles/utvides over tid

[Oversikt over virksomhetsroller](/docs/iam/virksomhetsroller)


## Regelmotor

* Automatiserte regler tildeler system og tilgangsrettigheter basert på forretningsroller og tilhørigheter.
* Standardiserte forretningsroller
* Regelsett administreres per institusjon
* UI for enkelt vedlikehold av regelsettene vil komme i en senere versjon av Felles IAM
* Per nå regelsett i JSON-format

Tilgangskontrollmotoren ORG-ERA kan sees på som en totrinnsrakett der brukeren først får tildelt virksomhetsrollene sine, som igjen fører til automatisk provisjonering til målsystemene. Felles IAM ønsker høyest mulig grad av automatisering og tilbyr ferdige integrasjoner mot mange målsystemer.

## Bestillbare rettigheter (tilganger)
Felles IAM støtter bestillbare rettigheter for de tilgangene som ikke kan gis automatisk.
I et selvbetjeningsgrensesnitt kan brukeren selv eller lederen bestille tilgang til et målsystem, eller en spesifikk rettighet i et målsystem.

Det kan være flere grunner til at man ønsker å konfigurere en bestillbar rettighet. Det vanligste er at det skal gis en tilgang som innebærer privilegerte rettigheter, som for eksempel administratortilgang, der det ikke er mulig å avgjøre ut fra kildedata hvilke brukere som skal ha tilgangen. I disse tilfellene er det svært vanlig at den bestillbare rettigheten settes opp med ett eller flere godkjenningssteg. Det kan være ledergodkjenning og/eller godkjenning fra systemansvarlig(e).
Det er også vanlig å konfigurere en bestillbar rettighet i tilfeller der målsystemet ikke støtter at Felles IAM automatisk oppdaterer rettighetene, og de må tildeles manuelt direkte i målsystemet. Ved å ha en bestillbar rettighet knyttet til arbeidsflyten vil Felles IAM kunne ivareta revisjonsspor og etterlevelse (audit og compliance) for den gitte tilgangen.

![](/img/iam/tilgangsstyring5.png)

RI Portal er grensesnittet for å bestille tilganger utover det som er gitt automatisk. Dersom det foreligger en integrasjon mot aktuelt målsystem, er det mulig å automatisk provisjonere den bestilte tilgangen så fort bestillingen er godkjent, såkalt halvautomatisk provisjonering. Dersom det ikke foreligger noen integrasjon, såkalt manuell provisjonering, kan løsningen likevel settes opp til å håndtere bestillings- og godkjenningsrutiner som fortrinnsvis oppretter sak i IT Service Management-verktøyet (ITSM) for å oppnå compliance på bestilling og effektuering av tilganger. Det er ønskelig at slike tilganger bestilles på denne måten for å oppnå en standardisert prosess og etterprøvbar autorisasjon.

Bestillbare rettigheter kan involvere ett eller flere godkjenningssteg. De som er angitt som godkjennere i en flyt, vil motta en e-post og et varsel i arbeidsflytdelen i RI Portal. Forespørsler kan godkjennes eller avvises, og godkjenner kan også oppgi en begrunnelse for valget. Det er også mulig med et eskaleringssteg hvis den opprinnelige godkjenneren ikke godkjenner/avviser innen et angitt antall dager.

Felles IAM har flere virkemidler for å sørge for at brukere over tid ikke samler opp tilganger de ikke lenger trenger.
For å sørge for periodisk resertifisering/attestering kan en bestillbar rettighet blant annet konfigureres med tidsbegrensning. Når utløpet nærmer seg må brukeren bekrefte at tilgangen fortsatt er nødvendig, og rettigheten må gjennomgå nye godkjenningssteg. I samme grensesnitt har ledere og systemansvarlige mulighet til å gjennomgå hvilke rettigheter som er tildelt henholdsvis egne ansatte og egne systemer. En leder kan revokere en tildelt rettighet hvis det ikke lenger er tjenestemessig behov. I tillegg til tidsbegrensning og kontroll fra leder- og systemansvarlig vil Felles IAM automatisk revokere tildelte tilganger hvis brukeren endrer sin tilhørighet til institusjonen. Eksempler på dette er en ansatt som blir student, eller en ansatt som bytter stilling (endring av organisasjonstilhørighet og leder).