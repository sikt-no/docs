---
title: Tilgangsstyring
---


I felles IAM styres tilganger ut ifra en fast modell, hvor [virksomhetsroller](./virksomhetsroller) automatisk genereres ut ifra hentet fra kildesystemene. For hvert målsystem finnes et regelsett som tildeler systemrettigheter for målsystemet basert på virksomhetsroller og innplassering i organisasjonen.

[Les også om identitet livssyklus](./livssyklus) som også omhandler livssyklus for tilganger.

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

I selvbejeningsgrensesnittet til felles IAM vises både virksomhetsroller, system entitlements og access entitlements:

![](/img/iam/tilgangsstyring4.png)


## Eksempelprosess

Eksempelet nedenfor viser en tenkt ansatt, og hvordan en automatisk flyt kan skje. Det er AMF (Authorisation Management Framework, en kolleksjon av ulike ActionSet som implementerer ORG-ERA, en fingranulert modell for rolle- og attributtbasert tilgang) som tolker mottatte data fra SAP, og vil basert på disse tildele tre forretningsroller (Ansatt, Studieadministrativt ansatt basert på SKO+YRK og Vitenskapelig ansatt basert på stillingsKat).

I virkeligheten vil forretningsrollen Ansatt innrømmes en rekke basistilganger, mens eksempelet viser videre bare regelsettet for TPP og Inspera.

![Eksempel på JML for student](/img/iam/Bilde7.png)

Figur 7: Eksempel på prosessering av "Joiner" (AMF/ORG-ERA)





## Virksomhetsroller

* Basert på tilgjengelig informasjon i kildesystemer.
* Avhengig av datakvalitet i kildesystemer
* Standardiseres på tvers av institusjoner
* Må utvikles/utvides over tid

[Oversikt over virksomhetsroller](./virksomhetsroller)


## Regelmotor

* Automatiserte regler tildeler system og tilgangsrettigheter basert på forretningsroller og tilhørigheter.
* Standardiserte forretningsroller
* Regelsett administreres per institusjon
* UI for enkelt vedlikehold av regelsettene vil komme i en senere versjon av felles IAM
* Per nå regelsett i JSON-format


## Manuell godkjenningsflyt

Ikke alle tilganger tildeles automatisk. Noen ganger må man selv, eller lederen etterspørre en spesifikk målsystemtilgang. Felles IAM har selvbetjeningsgrensesnitt både for å etterspørre tilganger, og for godkjenning, og innsyn i hvilke manuelle rettigheter man tidligere har fått tildelt.


![](/img/iam/tilgangsstyring5.png)

RI Portal er grensesnittet for å bestille tilganger utover det som er gitt automatisk. Dersom det foreligger en integrasjon mot aktuelt målsystem, er det mulig å automatisk utføre forsyningen av den bestilte tilgangen så fort en slik bestilling er godkjent, så kalt halvautomatisk forsyning. Dersom det ikke foreligger noen integrasjon, benevnt manuell forsyning, kan likevel løsningen settes opp til å håndtere bestillings- og godkjenningsrutiner som fortrinnsvis oppretter sak i IT Service Managment-verktøyet for å oppnå etterprøvbarhet på bestilling og effektuering av tilganger. Det er langt å foretrekke at slike manuelle bestillinger bestilles på denne måten for å oppnå en standardisert prosess og etterprøvbar autorisasjon.

Bestillbare og manuelt tildelte tilganger involverer et eller flere godkjenningstrinn. Den eller de som er angitt som godkjennere i en flyt, vil motta en e-post og et varsel i arbeidsflytdelen i RI Portal. Forespørsler kan godkjennes eller avvises, og godkjenner kan også fylle ut begrunnelse for valget.
