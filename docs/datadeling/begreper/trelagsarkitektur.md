---
author:
  - Einar Jerpseth
title: Trelagsarkitektur
---

Trelagsarkitekturen handler om å splitte opp IT-tjenester så du kan gjenbruke
ulik funksjonalitet i andre IT-tjenester.

Arkitekturen deler opp en tjeneste i tre lag:

1. Presentasjonslaget, der dataene vises og arbeides med.

2. Logiske operasjoner, der forretningslogikk og endringer faktisk gjøres.

3. Lagring, der informasjonen hentes og skrives til.

Begrepet _trelagsarkitektur_ blir benyttet av forskjellige teknologier og betyr
ikke nødvendigvis det samme for alle. Vi snakker om 'løst koblet
trelagsarkitektur', i kontrast til f.eks. MVC-modellen sin 'tett koblede
trelagsarkitektur'. Lagene kan for eksempel skilles ved å definere et åpent
definert API mellom dem, så andre IT-tjenester har mulighet for å bruke de
samme API-ene.

![Trelagsarkitektur eksempel](/datadeling/img/3-lags-arkitektur.jpg)

Presentasjonslaget, der dataene vises og arbeides med, gjør ikke annet enn å
vise informasjonen og ta imot input. Eksempelvis kan man tenke seg bankens
lånekalkulator, som tar hensyn til takst, inntekt, egenkapital, alder osv.
Uavhengig om du benytter en mobilapp, nettleser eller annet, så sendes tallene
inn til den samme bakenforliggende tjenesten for utregning. Svaret sendes så
tilbake til brukeren for videre prosessering, for eksempel å godta et tilbud om
lån.

Det at presentasjonslaget ikke kan skrive til vilkårlige felter i databasen
gjør at man har kontroll over endringer. Hendelsene (som er nødvendige for
sanntidsoppdateringer) fanges opp i det logiske laget. Man må ikke ha noe som
sammenligner i flere databasetabeller om det er gjort endringer og om disse er
gjort samtidig osv.

Det at klienten bare kan gjøre definerte, standariserte oppgaver mot databasen
gjør programvaren mer stabil.

En av ulempene med denne arkitekturen er at det er tynge å gå gjennom et API,
enn interne kall i tjenesten. Dette kan skape utfordringer for tjenester som
har _veldig_ mange operasjoner og aktivitet. Fordelen er gevinstene ved
gjenbruk av både data og funksjonalitet, som bør kost/nytte-vurderes.
