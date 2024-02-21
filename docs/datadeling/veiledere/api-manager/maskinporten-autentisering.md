---
description:
  "[Under utvikling: Anbefalingen vil endre seg, etter erfaringer med BOTT:\xD8\
  L i 2021]\n\n\nHvordan du kan sette opp autentisering av ditt API via Maskinporten,\
  \ n\xE5r du trenger \xE5 snakke med API utenfor din organisasjon."
title: "Konfigurere autentisering via maskinporten "
---

# Konfigurere autentisering via maskinporten

[Under utvikling: Anbefalingen vil endre seg, etter erfaringer med BOTT:ØL i 2021]

Hvordan du kan sette opp autentisering av ditt API via Maskinporten, når du trenger å snakke med API utenfor din organisasjon.

### Bakgrunn

Maskinporten kan brukes til sikker autentisering mot API på tvers av organisasjoner.

Når man bruker maskinporten autentiserer man seg først mot maskinporten med et sertifikat. Som svar får man et tilgans-token, som igjen brukes til autorisasjon i API Gatewayen.

### Forutsetninger

Det forutsettes at organisasjonen din er registrert som bruker av maskinporten og har fått opprettet et prefiks.

### Registrer API i Maskinporten

Først må API-et registreres i maskinporten. Da opprettes det et scope. Et scope kan brukes til å gi tilganger til ressurser i et eller flere API. Det anbefales å ikke bruke samme scope for å gi tilgang til ulike API.

I tillegg må de organisasjonene som skal få tilgang til API-et bli gitt tilgang. Dette kan gjøres både før og etter at API-et er registrert i API Gateway.

### Registrer API-et

Om det ikke allerede er registrert. Om det ikke allerede er gjort finnes det [veiledning her](/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api). Kom tilbake til denne siden når planer skal opprettes.

Opprett plan med sikret med JWT

Et tilgans-token er en type token som kalles Java Web Token, forkortet JWT (uttales jot eller jåt).

Opprett en ny plan ved å gå til API-et, velg Plans og trykk på plusstegnet

![webside for å opprette planer](/datadeling/img/image-20200928124644-1.png)

Skriv inn navn og en beskrivelse av planen. Gå til neste side.

På siden for Secure, under Authentication velg JWT som Authentication type.

![Meny for vinduet Secure](/datadeling/img/image-20201012173900-1.png)

Videre skal følgende legges til under Configuration.
I menyen for **Signature** la RS256 være valgt (det er eneste som støttes av maskinporten p.t.).

I menyen **JWKS Resolver**, velg JWKS_URL.

I **Resolver parameter** skriv eller lim inn URL hvor API Gatewayen kan finne maskinportens offentlige sertifikat. I produksjon er dette https://maskinporten.no/jwk , i test er det ```https://test.maskinporten.no/jwk```

Om du vil kunne bruke informasjon fra tokenet til flere sjekker og/eller i policyer, huk av for **Extract JWT Claims**.

Det er god praksis å sjekke autorisasjonen som er gitt både i API gateway og i selve API-et. Med mindre du ikke stoler på API-et eller det er for testing, lar du **Propagate Authorization Header** være huket av. Tilgangs-tokenet blir da sendt til backend-API-et, og samme eller en mer grundig sjekk av tokenet foretas der. Det vil og forhindre urettmessig tilgang til API-et dersom man spør backend-API-et direkte uten å gå via gatewayen.

**User claim** fungerer ikke p.t. med maskinporten.

**Additional selection rules.** Her kan det bli litt komplisert. Her kan man legge inn flere regler for å være sikker på at riktig plan blir valgt. Om API-et kun skal brukes av et scope kan du legge inn en sjekk av scope her. Er man sikker på at tokenet kun vil inneholde dette scopet, bruk f.eks:

```Text
#context.attributes['jwt'].claims['scope'] matches '^org:test$'
```

Vil man tillate at tokenet har andre scope i tilegg til det som gir tilgang til ditt API kan man bruke:

```Text
#context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test(\\s[a-z:\\s])?$'
```

Et litt mer avansert eksempel. Har man et API hvor man kan bli tildelt enten lese- og skriverettigheter, eller kun skrive- eller kun leserrettigheter.

Da kan man ha en plan for både lese og skrivetilgang med denne ekstra regelen:

```Text
#context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test(\\s[a-z:\\s])?$' && #context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test.write(\\s[a-z:\\s])?$'
```

Kun for skirvetilgang:

```Text
#context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test.write(\\s[a-z:\\s])?$'
```

Kun for lesetilgang:

```Text
#context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test(\\s[a-z:\\s])?$'
```

Merk at i dette eksempelet betyr rekkefølgen noe. Planer som krever to scope må være først i lista over tilgjengelige planer. På siden med oversikt over planer kan rekkefølgen endres.

Sjekke for flere grants

Det kan være tilfeller hvor man vil ha en plan per organisasjon. Det anbefales ikke om det er mange organisasjoner som skal ha tilgang, men det er mulig, og om det er et endelig lite antall er det overkommelig. For å legge inn regler som slår inn om det er riktig organisasjonsnummer og riktig scope:

```Text
#context.attributes['jwt'].claims['consumer']['ID'] == '0192:987654321' && #context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test(\\s[a-z:\\s])?$'
```

Når alt er fylt inn, trykk "NEXT".

For å legge inn rate-limit, kvoter, svartelisting, hvitelisting eller policy, , se [veiledningen for planer](/docs/datadeling/veiledere/api-manager/opprette-plan).

Husk at planen må publiseres før den kan tas i bruk.

### Registrere applikasjon

For at en applikasjon skal kunne bruke API-et må applikasjonen registreres både i maskinporten og i Gravitee. Først må applikasjonen registreres som en integrasjon i maskinporten, og så må den [registreres i Gravitee](/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang) med den client_id som den ble tildelt i maskinporten. Deretter kan applikasjonen søke om tilgang til riktig plan og API. Når tilgang er tildelt kan API-et benyttes. Man bruker ikke API-nøkkel og trenger ikke hente ut denne.
