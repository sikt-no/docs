---
description: Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng.
title: Mikrotjeneste
---

# Mikrotjeneste

Forklaring av hva en mikrotjeneste som konnektor er, i IntArk-sammenheng.

## Hva er en mikrotjeneste i IntArk?

En mikrotjeneste er en liten tjeneste som er spesialisert til å gjøre én ting. I IntArk-sammenheng bruker vi mikrotjenester som konnektorer der det er nødvendig.

## Om SOAP og REST

For å forstå hvordan begrepet "micro service" vokste frem, må vi ta et steg tilbake og se på utviklingen av web services. Det finnes to hovedkategorier av web services: REST og SOAP. I begynnelsen var SOAP den dominerende. Dette fordi den vokste ut av objektorientert programmering. Objektorientert programmering var populært fordi man kunne lage objektet, f.eks. bil, og gi det egenskaper (som farge, motor, dører, pris). SOAP var utviklet av store aktører som IBM, Microsoft og Oracle, med Microsoft i spissen. Dette var i en tid da deres hegemoni var på sitt største. REST, på sin side, var utviklet av forskere i CERN, altså det samme teamet som sto bak WWW. Det tok betydelig med tid før teknologien festet seg i forretningstradisjonen. At den fikk grep, skyldtes primært:

- Den var mye enklere å bruke og implementere
- Det var helt åpen og uavhengig av leverandør, og enkelt å benytte på tvers av tjenester
- Den var intuitiv å forstå og bruke

## Om ESB og tette koblinger

I den gamle SOAP tiden var integrasjon i større grad overlatt til eksperter. Integrasjoner var gjerne samlet i en kjerne som ga sentral kontroll. Disse kjernene ble kalt Enterprise Service Bus (ESB) eller tjenestebuss. (Disse skiller seg fra UiOs bruk av termen i sin integrasjonsarkitektur, der ESB/tjenestebuss bare betyr at tjenesten er sentralisert). ESB-en tilbød standardiserte integrasjonsgrensesnitt (API), som konsumentene kunne koble seg opp mot. I SOAP var integrasjoner bygget som kommandoer med argumenter, slik man kjenner fra kommandolinjeprogrammer. For å gjøre det enklere å integrere ble det ofte laget egne API-programmer som kjørte på klienten. På samme måte var det flere API på bussen som delte biblioteker med programkode. Slik kunne man gjenbruke kode og spare utviklingsarbeid, men det medførte også tette  koblinger. Tette koblinger vil si at hvis man endrer noe i produsent eller API, må det også samtidig endres i konsumenten. Dvs at om man f.eks. oppgraderer en database fra  versjon 8 til 9, så må man også oppgradere biblioteket i bussen for å reflektere dette. Siden dette biblioteket kan være delt med et annet API, hvor databasen enda ikke er oppgradert, må det håndteres, ellers vil API-et knekke. Videre må klienten/konsumenten oppgradere sitt bibliotek. Hvis konsumenten benytter begge API-er, altså både det som ble oppgradert til versjon 9 og det som fortsatt er på versjon 8, er dette ofte umulig å samkjøre. Uansett var det komplisert.

REST ikke krever noe API-spesifikk program på konsumenten, men REST kan likevel benytte delte biblioteker og ha de samme utfordingene i en ESB. En micro service deler ikke biblioteker med andre API. Det er noe av det som gjør den til en micro service; Man kan gjøre endringer uten at det affekterer noen andre API.

## Om ESB og voksesmerter

ESB-er hadde/har mye funksjonalitet. De kan se hvor en datapakke skal ved å se på overskrifter, de kan konvertere formater og protokoller, sette sammen data mm. Dette medførte at man etter hvert fikk en lock in situasjon mot sin egen ESB, den ble veldig dyr å skifte ut. Dessuten medførte kompleksiteten i ESB-en at integrasjoner krevde høy grad av spesialkompetanse, men ble sårbare på turn-over, og det tok lang tid å integrere. Videre har gjerne en ESB mye annen logikk, dvs. vurderinger som :"Først skal jeg gjøre det, og hvis svaret er A, så skal jeg gjør ditt, mens hvis svaret er B, så skal jeg gjøre datt". Denne type logikk kalles orkestrering. Det er som dirigenten av et orkester, som forteller medlemmene i ensemblet hva de skal gjøre. Et micro service landskap, derimot, er bygget på at alle vet bare hva en selv skal gjøre. Vi sier da at løsningen er koreografert. Dette etter dans, der det ikke er noen dirigent, men hver danser kjenner sin egen rolle. Løsningene kan naturligvis kombineres. Hovedsaken er at man unngår en endringshemmende lock in situasjonen som oppstår dersom man orkestrerer mye logikk i en programvaretjeneste.

## Om sentraliserte komponenter i et micro service landskap

For å lage oversikt og forenkle administrasjon og tilgang, er micro service landskap gjerne samlet bak en såkalt API Manager (også kjent som API Gateway eller API Gatekeeper). Foruten å hjelpe konsumenter med å finne frem til de data de trenger og utstede adgangsbevis, vil API Gatewayen holde orden på hvem som benytter hvilke data. Slik kan man nå ut til konsumenter i god tid med endringer i API. Når API endres må konsumenten endre i sin ende, og vanligvis løses dette ved versjonering. Det innebærer at man kjører gammelt og nytt API parallelt i en periode (f.eks. 3 eller 6 mnd), hvilket gir konsumenten mulighet til selv å finne et passende tidspunkt å flytte over til det nye API-et.

## Oppsummert

En micro service har tre hovedkarekteristikker:

- Den er liten, intuitiv/selvforklarende, og brukes til et spesielt formål
- Den har ingen kodeavhengigheter til andre tjenester
- Den er en del av en koreografert løsning
