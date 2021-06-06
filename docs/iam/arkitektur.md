---
title: Overordnet arkitektur
---


Identitets- og tilgangsstyring (IAM) er samling prosesser og teknologier for å hjelpe institusjonen med å tildele studenter, forskere og ansatte riktige tilganger i henhold til når et tjenstlig behov oppstår, forvalte disse på en etterprøvbar måte og deaktivere disse når behovet opphører. Det er dermed en viktig forutsetning for håndteringen av digitale identiteters livssyklus.

Felles IAM innfører felles teknologi for hele sektoren som et viktig virkemiddel i å understøtte strategiske mål som studentmobilitet, livslang læring og bedre samhandling mellom institusjoner, samtidig som det bidrar til økt bedre brukeropplevelse, mer rasjonell forvaltning og styrket etterlevelse av lovverk.

Hovedstegene i IAM består av:

* Forsyning (provisjonering) der identitet stadfestes, og tilganger i ulike målsystem opprettes basert på brukerens forretningsrolle(r). Denne prosessen skjer diskret basert på oppstart, endring eller avslutning av et engasjement (stilling eller studium). Ved første gangs oppstart vil det registreres en unik digital identitet, så kalt UH-ID. Forsyning kan skje automatisk, halvautomatisk (manuell bestilling og godkjenning, automatisk utførelse) eller manuelt.
  Etter at en bruker er provisjonert, kan brukeren benytte de systemene denne er provisjonert til. Normalt vil alle operasjoner gjennomgå følgende steg en eller flere ganger i løpet av en økt:
  * Autentisering, bestående av identifisering og verifisering av brukerens identitet. Det benyttes både lokale og sentrale tjenester som autentiseringskilder, og verifisering at brukeren er den har utgir seg for kan bestå av ett eller flere trinn. Denne prosessen skjer hver gang en bruker starter en sesjon mot en beskyttet tjeneste.
  * Tilgangssjekk (teknisk autorisering) er kontroll av brukerens systemtilgang for å avgjøre om en operasjon er tillatt. Denne prosessen skjer normalt kontinuerlig innenfor hvert system.
  * Logging av (visse) brukeroperasjoner utføres der det er behov for sporbarhet og noen ganger i styrket form for å støtte ikke-benektbarhet. Denne prosessen skjer i henhold til konfigurasjon innen hvert system   som benyttes. Konsolidering av hensiktsmessige logger i et sentralt system vil etter hvert bli tatt i bruk.
  * Utlogging fra de systemene brukeren er logget inn i

* Avslutning av bruker (deprovisjonering)

![Forsyning og tilgangskontroll](/img/iam/figur1.png)

Felles IAM innfører ett felles produkt for forsyning, RapidIdentity (RI) fra Identity Automation. RI består av flere komponenter, der de viktigste er:

* Rapid Identity Core Services bestående av et integrasjonslag (Connect) lagringsstruktur (MetaVault og Metadirectory) samt en portal tilgang til tjenesten
* Rapid Identity Institution Service bestående av lokal lagringsstruktur (Portal Directory) samt en portal for sluttbrukere og forvaltere av tjenesten.

I tillegg innføres en tjeneste for sikker identifisering og kontoaktivering for nye ansatte og studenter, Uninett Account Claim.
