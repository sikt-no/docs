---
title: Opprette plan
---

En plan kan sees på som et sett med rettigheter til et API.

Det kan være rettigheter for hvilke paths man har lov til å bruke, om man har bare leserrettigheter, eller både lese- og skriverettigheter, eller hvor ofte du har lov til å spørre mot API-et.

## Opprette plan

Under APIs, gå først til Portal i den venstre sidemenyen og deretter Plans. Lag ny plan ved å trykke på det blå plusstegnet.

Du blir så tatt gjennom veiviseren for å opprette/endre en plan. I eksemplene under lager vi planer for [test-APIet petstore](https://petstore3.swagger.io/).

![](/datadeling/img/image-20200928124644-1.png)

## Opprette plan med mange rettigheter

På første side, fyll inn navn og en beskrivelse.

I tillegg må det gjøres et par andre valg:

- Auto validate subscription betyr at alle som ber om tilgang får det
  automatisk, men i motsetning til en åpen plan må de registrere applikasjonen
- Skru på "Consumer must provide a comment" om du vil kreve at det blir skrevet
  en kommentar for å få spurt om tilgang
- I tekstfeltet "Custom message to display to consumer" er det mulig å legge
  inn en kort tekst hvor man f.eks. kan be om spesifikk informasjon
- Under Characteristics kan man legge inn noen stikkord for å beskrive planen,
  f.eks. "åpne data" om planen kun gir tilgang til det, "read only" om kun
  leserrettigheter, "read/write" om planen gir tilgang til å legge inn data i
  API-et o.l

![Illustrasjon av.. noko](/datadeling/img/image-20200928150931-1.png)

På neste side velger man hvilken metode API-et skal være sikret med, dersom dette er relevant.

Man kan velge å ha det helt åpent,public/keyless, eller bruke API-nøkkel, JWT eller OAuth 2.

I dette eksempelet brukes API nøkkel. Man kan velge å sende API-nøkkelen med videre til backend. Ikke valgt i dette eksempelet, headeren med api-nøkkel blir derfor ikke fjernet.

![Illustrasjon av.. noko](/datadeling/img/image-20200928152040-3.png)

I neste skjermbilde kan man velge å legge restriksjoner på hva man får lov til å gjøre med denne planen. [Se lenger ned for eksempler](#restrictions).

På siste side kan man legge på policyer på enkeltplaner. Det anbefales ikke om man kan unngå det, men noen ganger er det nødvendig. Prøv i så fall å ha så få som mulig her. Det er bare å velge policy, klikke på "ADD" og konfigurere denne. Om man legger på flere blir den neste lagt til på slutten. Man kan ikke endre rekkefølge i etterkant slik som når man endrer på policyer for hele API-et.

For å lagre planen, trykk på "SAVE".

![](/datadeling/img/image-20200928155158-6.png)

Planer blir først opprettet i Staging-området. Det er da ikke mulig å abbonnere på dem. På denne måten kan man opprette planer og dobbeltsjekke at de ble konfigurert riktig før man publiserer dem. Når du oppretter en plan før den er publisert vil du derfor kunne ikke se den. Klikk på "Staging" for å se planer som ikke er publisert.

![](/datadeling/img/image-20200928155423-7.png)

For å gjøre en plan tilgjengelig klikk på det lille sky-ikonet med oppover-pil. ![](/datadeling/img/image-20200928155734-8.png) Den er nå tilgjengelig i portalen og applikasjoner kan spørre om tilgang. Det  er fremdeles ikke mulig å bruke planen Klikk på deploy for å dytte ut konfigurasjonen av denne planen til gatewayen.

For å endre en plan, klikk på blyant-ikonet for å redigere. Man må gå gjennomhele veiviseren på nytt, men du trenger kun å endre det som skal endres.

## Avslutte planer

For å gjøre en plan utilgjengelig for nye abonneneter gjør man dem Deprecated. Eksisterende abonnenter vil fortsette å fungere, men nye applikasjoner som vil bruke API-et må velge en annen plan. Ved å lukke planen vil eksisterende abonnement slutte å fungere.

## Opprette plan med få rettigheter og begrensning av bruk

Trykk på plusstegnet på siden for Plans for å opprette ny plan.

Fyll inn navn, beskrivelse og velg autentiseringmetode på de to første sidene.

### Hvitelisting

På side 3, Restrictions, huk av for Path Authorization. I dette eksempelet bruker vi fremdeles Pet Store-API-et, og vi vil bare tillate abonnenter å lese informasjon om kjæledyr. For å oppnå dette hvitelister vi en path. Trykk på "+ Add" under whitelist for å lage en ny, og fyll inn path pattern og tillatte metoder. F.eks. /pet/\*\* som path og huke av for GET for å gi leserettigheter til kjæledyr.

![](/datadeling/img/image-20200930180731-1.png)

Du kan legge på så mange path pattern i hvitelist som du vil. Når du har lagt inn en eller flere hvitelister vil alle andre paths være svartelistet. Tilsvarende til alle endre være godkjente om du svartelister en eller flere path.

Det fungerer ikke å kombinere svartelister og hvitelister. Om begge typer er definert vil kun hvitelistene fungere.

Methods som blir brukt her blir også kalt HTTP verbs.

Path patterns som blir brukt er [Ant Path Patterns](http://ant.apache.org/). De fungerer slik:

- ? betyr et tegn (men ikke / )
- - betyr null eller flere tegn (men ikke / )
- \*\* betyr null eller flere mappe-segmenter

Om du vil vite mer om Ant Patterns er [denne veiledningen god,](https://confluence.atlassian.com/fisheye/pattern-matching-guide-960155410.html) det finnes også [offisiell dokumentasjon](http://ant.apache.org/manual/dirtasks.html#patterns).

### Svartelisting

I dette eksempelet har man lov til å bruke API-et så mye man vil og man har tilgang til alle ressurser bortsett fra å slette ordre. Det er gjort ved å svarteliste path/store/order med http-method (HTTPS verb) DELETE. Om man vil svarteliste all tilgang til ordre huker man av alle.

![](/datadeling/img/image-20201001130341-3.png)

### Rate-Limiting

I tillegg til å begrense hvilke ressurser som er tilgengelig via API-et kan man
også begrense hvor ofte en konsument kan kontakte et API. Det gjøres med
Rate-limiting eller kvoter (Quota). Kvoter er mest brukt for API-er man betaler
for. Rate-limiting brukes også ofte på betal-API-er hvor det er mindre
begrensninger jo mer man betaler. Rate-limiting kan også brukes for å beskytte
et API om backend-serveren har ytelsesproblemer.

Skjermbilde av eksempel hvor man tillater to forespørsler per minutt:

![](/datadeling/img/image-20201001125524-1.png)
