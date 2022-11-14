---
description:
  "I Gravitee API manager kan man legge p\xE5 ekstra funksjonalitet p\xE5\
  \ API-et. Dette kan v\xE6re ekstra tilgangskontroll, validering eller endring av forespørsler.\
  \ Dette legges p\xE5 som policyer.\n\n\nDet er mulig \xE5 legge policy p\xE5 hele\
  \ API, enkeltplaner eller enkelt paths / ressurser. Det vanligste er \xE5 legge\
  \ p\xE5 hele API-et."
title: "Legge p\xE5 en enkel policy (IP filter)"
---

# Legge på en enkel policy (IP filter)

I Gravitee API manager kan man legge på ekstra funksjonalitet på API-et. Dette kan være ekstra tilgangskontroll, validering eller endring av forespørsler. Dette legges på som policyer.

Det er mulig å legge policy på hele API, enkeltplaner eller enkelt paths / ressurser. Det vanligste er å legge på hele API.

For å legge på en policy på et helt API:

Naviger til ditt API, deretter klikk på Design i sidemenyen til venstre. Du havner nå på "under-fanen" Policies under General.

For å legge på en policy må du dra den inn under "/".

I eksempelet over drar vi "IP filter" inn under "/"-pathen. Deretter klikker vi på "IP filter" og legger til den eller de IP-adressene/subnettene vi vil gi tilgang. Husk å trykke "save".

Det er mulig å legge på veldig mange policyer, men det anbefales å ha så få som mulig.

Policyer blir utført en og en. For å endre på rekkefølgen de blir utført kan man dra de til den plasseringen som passer. Det er fullt mulig å legge på samme policy flere ganger.

Om en policy skal gjelde for en path kan man legge til en path ved å trykke på plusstegnet. Skriv inn path-en man vil legge til. Velg så denne før man drar inn policy til riktig plass.

For å legge til policy på en plan er det en [annen fremgangsmåte](/docs/datadeling/veiledere/api-manager/opprette-plan#opprette-plan-med-mange-rettigheter) for dette. Noen policyer er lagt opp til at man skal legge på per plan, f.eks. hvitelister, rate-limiting og autentisering (API key, JWT eller OAUTH). For disse konfigurerer du policyene når du oppretter planen. I tillegg kan man legge til policyer på siste side av veiviseren for planer.
