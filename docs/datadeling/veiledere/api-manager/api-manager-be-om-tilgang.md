---
title: Få tilgang til et API
---

Hvordan du som konsument kan søke om tilgang til et API i Gravitee.

### Logg inn

Se [Oversikt over den tekniske
plattformen](/docs/datadeling/teknisk-plattform/oversikt) for adressen til din
institusjons API manager.

Påloggingen i API manager gjøres gjennom et pop-up-vindu, så sjekk om du har
sperret for pop-up-vinduer om du har problemer.

[![Innloggingsvindu](/datadeling/img/image-20200915143652-1.png)](/datadeling/img/image-20200915143652-1.png)

### Opprett en enkel applikasjon

Enkle applikasjoner som autentiserer seg ved hjelp av en API-nøkkel. Dette
egner seg bra for datadeling internt på en institusjon og for utvikling. En
API-nøkkel kalles noen ganger for _Developer key_. API-nøkkelen skal behandles
som et passord. Den må derfor ikke være tilgjengelig for uvedkommende, verken
når den blir oppbevart eller når den blir kopiert.

Opprett en applikasjon ved å trykke på brukerikonet øvert til høyre på siden,
for så å velge "Applications" i undermenyen. Trykk deretter på sirkelen med
pluss-tegn.

[![Opprette ny applikasjon](/datadeling/img/image-20200915210106-1.png)](/datadeling/img/image-20200915210106-1.png)

Skriv inn navn og beskrivelse av din applikasjon. Her er det viktig å bruke et
godt og beskrivende navn, og en passende og utfyllende beskrivelse. Ta gjerne
med lenke til innlogginsside og dokumentasjon i beskrivelsen.

I vinduet for _Security_ kan du skrive inn type for ditt API om det er
ønskelig, eller velge "SKIP" som setter applikasjonens type til "Simple".

Du kan velge å enten abonnere på API-er nå, eller trykke "SKIP" for å abonnere
på API-er senere.

[![Bildet kan inneholde: tekst, skrift, skjermbilde, programvare, linje.](/datadeling/img/image-20200915145345-4.png)](/datadeling/img/image-20200915145345-4.png)

Fullfør ved å trykke på "CREATE THE APPLICATION". Applikasjonen er nå
registrert i API Manager, og du kan søke om tilgang til API-er med denne
applikasjonen. Du kan og gi rettigheter til dine kollegaer slik at flere kan
søke om tilganger, hente ut API-nøkler, se gjennom tilganger og feilsøke.

### Opprett en applikasjon som kan abbonnere på JWT og OAuth2-planer

Følg samme fremgansgsmåte som ved oppretting av enkel applikasjon over, frem
til vinduet for Security. Her må man i tillegg registrere en `client_id`.
Denne blir ofte autogenerert av OAuth 2 autorisasjon-serveren og kan kopieres
derfra.

I tillegg er det lurt å registrere riktig _Type_ for applikasjonen hvis dette
er er noe annet enn "Simple".

Du kan bruke en av:

- Browser (Angular, React, ...)
- Web (Java, .Net, ...)
- Native (iOS, Android, ...)
- Backend-to-Backend

<!-- TODO: [OpenID Connect Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html) -->

### Søk om tilgang

Etter at du har opprettet en _applikasjon_, kan du bruke denne til å søke om
tilgang til API. Samme applikasjon kan gjerne abonnere på flere API og planer.

Du kan søke opp API du ønsker tilgang til i "API gallery".

[![API portal](/datadeling/img/image-20200915150147-1.png)](/datadeling/img/image-20200915150147-1.png)

Velg API og deretter ønsket plan. Du søker om tilgang ved å trykke på
"SUBSCRIBE".

Sjekk at riktig applikasjon er valgt, og endre om det ikke er det. Skriv inn en
kommentar med forklaring om hvorfor du ønsker tilgang. Har det vært møter, sak,
bestilling e.l. i forbindelese med integrasjonen legg gjerne ved
referanser til dette, og gjerne en e-postadresse (f.eks. til
e-post-liste) som du kan kontaktes på.

Til slutt, trykk på "SUBSCRIBE" igjen. Forespørselen blir nå sendt til dataeier
for godkjenning.

![](/datadeling/img/image-20200915150346-2.png)

![](/datadeling/img/image-20200915150835-3.png)

### Legge til flere eiere for en applikasjon

Gå til applikasjonen du vil legge til eller fjerne enten eiere eller brukere
fra, og trykk deretter på "Members" i den venstre sidemenyen.

![Bildet kan inneholde: rektangel, font, linje, skjermbilde, programvare.](/datadeling/img/image-20210426164906.png)

Trykk på sirkelen med pluss-tegn for å legge til en ny bruker. Søk opp riktig
person, og velg deretter hvorvidt brukeren skal være eier ("Owner") eller kun
en bruker ("User") som kan se applikasjonen, og velg "ADD".

Eiere kan søke om tilgang til API-er på vegne av applikasjonen, samt hente ut
API-nøkler.

### Finne API-nøkkel

Etter at tilgang er blitt innvilget kan du se hvilke API og planer du abonnerer
på under "Subscriptions" i den venstre sidemenyen.

![](/datadeling/img/image-20200915151605-4.png)

![](/datadeling/img/image-20200915151631-5.png)

Herfra kan du kopiere API-nøkkelen over krypterte forbindelser. Pass på at
ingen uvedkommende kan lese nøkkelen der den blir lagret.

Om API-nøkkelen er gammel, har kommet på avveie eller ønskes byttet, trykk på
"RENEW API KEY". Det blir da laget en ny nøkkel for API-et. Den gamle nøkkelen
vil fortsette å være gyldig i to timer.
