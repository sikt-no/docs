---
description: Hvordan du som produsent, eller dataeier, kan gi tilgang til ditt API.
title: Godkjenne tilgang til API
---

# Godkjenne tilgang til API

Hvordan du som produsent, eller dataeier, kan gi tilgang til ditt API.

### Typisk arbeidsflyt

Hvordan Gravitee fungerer rundt tilganger:

- Alle vanlige brukere kan definere applikasjoner
- En applikasjon kan be om tilgang til en plan
- Systemeier godkjenner eller underkjenner tilgang til planen

### Noen har bedt om tilgang

Når noen ber om tilgang blir alle eiere av API-et varslet. I applikasjonene kommer det en blå ring rundt brukerikonet i menyen øverst til høyre: ![Bildet kan inneholde: hvit, svart, tekst, skrift, logo.](/datadeling/img/image-20201001192438-2.png)

I tillegg vil alle eierne og få en e-post om hendelsen:

[![E-post om forespørsel](/datadeling/img/image-20201001192458-3.png)](/datadeling/img/image-20201001192458-3.png)

Det å håndere en tilgangsforespørsel er en oppgave, i Gravitee kalt "Task". Når du er innlogget i Gravitee, trykk på brukerikonet øverst til høyre, og velg "Tasks" i undermenyen. ![Tasks i undermeny](/datadeling/img/image-20201001192703-4.png)

Her kan du se alle forespørsler. Trykk på den du vil behandle. Om tilgangen skal godkjennes klikk "ACCEPT", og det vil dukke opp en meny. Du kan bestemme hvor lenge tilgangen skal gjelde ved å sette "start date" og "end date". Dette kan også endre i etterkant. I tillegg kan du legge ved en beskjed.

[![Godkjenne tilgang](/datadeling/img/image-20201001193240-1.png)](/datadeling/img/image-20201001193240-1.png)

Om du ikke vil godkjenne tilgangen klikk heller på "REJECT". Du kan skrive en beskjed som blir sendt til konsumenten:

[![Avvise tilgang](/datadeling/img/image-20201001193405-2.png)](/datadeling/img/image-20201001193405-2.png)

Etter at tilgang er godkjent eller avvist blir det sendt en automatisk generert e-post til eier av applikajsonen. Om det er en plan med API-nøkkel kan en av eierne av applikasjonen logge inn og hente API-nøkkelen. Du trenger i utgangpunktet ikke sende API-nøkkelen til søker, nøkkelen er hemmelig og skal uansett ikke sendes i klartekst.

### Se tilganger som er gitt

Under "Subscriptions" på siden til API-et er det en oversikt over hvilke applikasjoner som abonnerer på ditt API.

## Relatert innhold

Lenke til API manager finnes på denne siden:
