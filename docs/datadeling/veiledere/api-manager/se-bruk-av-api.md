---
title: Se bruken av ditt API
---

Hvordan du får innsikt i bruken av ditt API.

### Se hvem som har tilgang

Gå til siden hvor du konfigurerer API-et ditt. Under Portal i venstre sidemeny velg Subscriptions.

![Bilde av abonnementer av et API](/datadeling/img/api-abonnementer.png)

### Se statistikk over bruk

For å se status og bruk av alle APIene du eier kan du gå på Dashboard øverst i menyen på venstre side. Det er det 3 undersider. Home gir raskt overblikk, perdefault ut i fra bruk siste minutt men man kan endre til å se siste time, siste dag, siste uke eller siste måned. Om man har satt opp helsesjekker vil man se status på disse under APIs status. Analytics viser mer detaljer med blant annet grafer over bruk, respons-tider og status på API-kall.

![Bilde av API Dashboard](/datadeling/img/api-bruk-dashboard.png)

Ved å gå til et enkelt API kan man se fler detaljer. Velg API og gå til siden som heter analytics.

Her ser man både status for API-kall basert på HTTP-returkoder og antall API-kall fordelt på planet, applikasjoner etc.

![Bilde av API analyse-dashboard](/datadeling/img/api-graf-1.png)

Naviger lenger ned på siden for å få graf over antall over tid og deres status og over hvor lang tid hvert API-kall bruker. Merk at om standard ser man kun for siste 5 minuttene, det kan man endre ved enten å gå på hurtigvalgene 5m, 30m, 1h etc. (for å se for siste 5 minutter,siste halvtimen, siste timen) eller velge fra og til-tidspunkt øverst på siden. Man kan også velge å få oppdatert siden automatisk.

![Bilde av API analyse-dashboard](/datadeling/img/api-graf-2.png)

Ut i fra disse grafene er det lett å se om noe har forandret seg, men for å finne feil bør man kjenne til hvordan det ser ut når ting fungerer som normalt. For eksempel vil noen applikasjoner ofte ha mange 403 og/eller 404-returkoder (betyr at man ikke har lov til å se en ressurs eller ressursen ikke finnes) mens andre applikasjoner ikke har slike feil til vanlig. I kakediagrammet er returkoder mellom 400 og 499 farget oransje og kan være problem, men ikke alltid. Returkoder mellom 500 og 599 er vist i rødt, de betyr alltid at noe er feil (men det betyr ikke nødvendigvis at det er problem. De fleste applikasjoner vil bare prøve på nytt og om det er få slike feil, og de går gjennom på forsøk nummer to, er som oftest alt OK) Ser man mange 500-feilmelmdinger i noen sekunder som deretter forsvinner betyr det gjerne at backend-APIet er restartet.

### Eksempler på feilsituasjoner

![Bilde av graf for API med feil](/datadeling/img/api-feil-1.png)

Skjermskuddet over viser en graf fra et API hvor backend sluttet å svare helt. Som du ser skjedde det litt etter tre på natta. Feilen man oftest fikk var 504 Gateway Timeout. Legg også merke til at responstiden er uvanlig jevn, i dette tilfellet kommer det av at man traff på connect timeout, som er 5 sekunder som standard.

![Bilde av graf for API med feil](/datadeling/img/api-feil-2.png)

Denne grafen viser et API hvor man opplevde feil fra 12:35. Feilen er 401 Unauthorized og kom av feil ved autentisernig mot backend-API. Dette kan f.eks. komme av passord som er endret i backend, men ikke i Gravitee.

![Bilde av graf for API med feil](/datadeling/img/api-feil-3.png)

For APIet som blir vist i grafen over var det feil med en policy som gjorde at alle API-kall ble feil og backend ikke klarte å håndtere requestene, men svarte i stedet med 400 Bad Request. Dette skjer heldigvis sjelden.

### Hvordan ser jeg hvem som er mest ressurskrevende mot mitt API

Hvilke API-kall som brukes mest ressurser vil være forskjellig fra API til API, men generelt bør man se på hvilke applikasjoner som har flest API-kall og hvilke applikasjoner som har lengst responstid. På analytics-siden til et API ser man de på "Top applications" og "Top slow applications", samt grafen "Hits by applications" nederst på siden. Denne siste grafen er fin å se på over tid for å sjekke om en applikasjon plutselig benytter APIet mye oftere.

Man kan også se på logger og se hvilke API-kall som bruker lengst tid. Noen søk kan ta veldig lang tid. Om man ser slike og det finnes måter å aksessere ressursen på som er raskere bør man spørre de som eier applikasjonen om de kan endre. For eksempel vil det ofte være raskere og mindre ressurskrevende å kalle en ressurs direkte med `/ressurs/1234` enn å søke den opp med `/ressurs?id+eq+1234` eller liknende. Dette er også lurt å ha med i dokumentasjonen.

En appliksjon bør ikke hente alle ressurser av en type flere ganger i løpet av kort tid. Om dette skjer kan man spørre de eier applikasjonen om de kan endre slik at de bare spør etter den ressursen de trenger eller mellomlagre resultatet.

### Se logger over API-kall

Oppe til høyre på siden er det en link hvor det står "VIEW LOGS". Klik på denne og man ser oversikt over alle API-kall. Dette kan være kjekt ved feilsøking, men det er vanskelig å få oversikt. Det er mulig å filtrer på tid go etter kriterie alik som planer, applikasjoner, responstid og HTTP-returkoder. Ved å klikke på tidspunktet får man opp litt fler detaljer om enkelt-kall, men som standard er det ikke mye ekstra informasjon man kan se.

### Utvidet logging

Ved å konfigurere utvidet logging kan man logge alt ved et API-kall, inkludert hele svar. Ikke bruk dette unødvendig, da man risikerr å lagre sensitiv informasjon og kan skape problemer med lagringsplass. Som standard blir utvidet logging skrudd av igjen etter en time hos oss, men administrator kan endre dette.

For å skru på utvidet logging klikk på "Configure the logging", endre boksen for Enabled/Disabled, velg hva som skal logges og eventuelle ekstra kriterier for logging (f.eks. kun logge for en applikasjon eller en plan) og klikke på save. Etter dette må man deploye APIet på nytt. Etter redeploy kan man klike på tidspunktet for et API-kall og se akkurat hva som blir mottatt og sendt til og fra Gravitee.
