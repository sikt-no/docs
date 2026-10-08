---
title: Grupper
---

Grupper i Felles IAM brukes til å samle brukere som skal nås eller samarbeide samlet, for eksempel i e-postlister, Teams-områder eller fagsystemer. Grupper brukes ikke til tilgangsstyring, det gjøres med [forretningsroller](/docs/iam/forretningsroller) og [bestillbare rettigheter](/docs/iam/tilgangsstyring#bestillbare-rettigheter-tilganger). Gruppene styres helt og holdent av institusjonen selv, også hvem som skal eie og vedlikeholde dem. Felles IAM sørger for at gruppene og medlemskapene holdes oppdatert og provisjoneres videre til de målsystemene institusjonen ønsker.

## Gruppemodulen

Grupper opprettes, vedlikeholdes og slettes i modulen «Groups» i brukergrensesnittet til Felles IAM. For hver gruppe kan institusjonen definere:

- hvem som eier gruppen
- hvem som kan vedlikeholde gruppen
- hvilke medlemmer gruppen har, enten statiske eller dynamiske
- hvilke målsystemer gruppen skal provisjoneres til

## Eierskap og delegering

Hver gruppe har én eller flere eiere. Eierne kan delegere vedlikeholdet av gruppen til andre ved å legge dem til som vedlikeholdere. Eiere og vedlikeholdere kan administrere medlemmene i gruppen.

Det er institusjonen selv som bestemmer hvem som skal være eiere og vedlikeholdere av gruppene sine.

## Medlemskap

En gruppe kan ha statiske medlemmer, dynamiske medlemmer eller en kombinasjon av begge.

### Statiske medlemmer

Statiske medlemmer legges til manuelt av eiere eller vedlikeholdere. De søker opp brukeren i Felles IAM og legger hen til i medlemslisten. Medlemskapet varer til det fjernes manuelt eller brukeren deaktiveres.

### Dynamiske medlemmer

Dynamiske medlemmer legges til automatisk basert på LDAP-filtre. En gruppe kan ha både et inkluderingsfilter og et ekskluderingsfilter:

- **Inkluderingsfilter:** Brukere som treffer filteret, blir medlemmer av gruppen.
- **Ekskluderingsfilter:** Brukere som treffer filteret, holdes utenfor gruppen, selv om de treffer inkluderingsfilteret.

Filtrene kan baseres på informasjon om brukeren i Felles IAM, for eksempel [forretningsroller](/docs/iam/forretningsroller), organisasjonstilhørighet eller andre attributter. Institusjonen kan skrive filtrene selv eller få bistand fra Sikt.

Medlemskap beregnes som oftest på nytt hvert 15. minutt. Når en brukers data endres, for eksempel ved bytte av organisasjonsenhet, oppdateres medlemskapene automatisk.

## Automatisk opprettede grupper

Felles IAM kan opprette og vedlikeholde grupper automatisk basert på [kildedata](/docs/iam/kildedata). Dette er tilgjengelig som standard, og institusjonen kan skru det på ved behov. Følgende gruppetyper støttes:

- **Organisasjonsenheter:** én gruppe per organisasjonsenhet, for eksempel basert på data fra OrgReg
- **Studieprogram:** én gruppe per studieprogram
- **Undervisningsenheter:** én gruppe per undervisningsenhet
- **Lisensgrupper:** grupper som styrer hvem som skal ha tildelt lisenser

Medlemskapene i disse gruppene oppdateres automatisk når kildedataene endres.

## Provisjonering til målsystemer

Gruppene og medlemmene kan provisjoneres fra Felles IAM til disse målsystemene:

| Målsystem | Kommentar |
| --- | --- |
| Active Directory | |
| LDAP | Feide eller institusjonens egen LDAP. |
| Entra ID | Enten direkte fra Felles IAM eller via synkronisering fra Active Directory. |
| [ServiceNow](/docs/iam/integrasjoner/Servicenow) | |
| RT (Request Tracker) | |

I gruppemodulen har hver gruppe én avkrysningsboks per målsystem. Eiere eller vedlikeholdere krysser av for de målsystemene gruppen skal provisjoneres til.

Grupper og medlemskap kan i tillegg hentes ut via [SCIM](/docs/iam/scim).

Felles IAM er autoritativ kilde for medlemskapene i gruppene den provisjonerer:

- **Endringer i målsystemet overskrives:** Medlemmer som legges til direkte i målsystemet, fjernes av Felles IAM ved neste synkronisering. Endringer i medlemskap må derfor gjøres i Felles IAM.
- **Sletting skjer ikke automatisk:** En gruppe som slettes i Felles IAM, blir ikke slettet i målsystemet. Den må slettes manuelt der.

## Tilgangsgrupper for Felles IAM

Gruppemodulen inneholder også tilgangsgruppene som styrer hvem som kan gjøre hva i Rapid Identity, for eksempel hvem som kan opprette gjester eller administrere grupper. Medlemskap i disse gruppene administreres på samme måte som andre grupper. Se [Systemroller](/docs/iam/systemroller) for en oversikt over tilgangsgruppene og hvilke rettigheter de gir.
