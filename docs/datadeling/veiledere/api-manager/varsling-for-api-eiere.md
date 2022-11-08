---
description:
  "Etter registrering av et API i Gravitee vil hovedeier f\xE5 e-post\
  \ om alle nye foresp\xF8rsler om tilganger. I tillegg blir det sendt ut epost om\
  \ API-et stoppes, startes o.l. Det er ofte \xF8nskelig at flere mottar disse e-postene."
title: Varsling av nye subscriptions o.l.
---

# Varsling av nye subscriptions o.l.

Etter registrering av et API i Gravitee vil hovedeier få e-post om alle nye forespørsler om tilganger. I tillegg blir det sendt ut epost om API-et stoppes, startes o.l. Det er ofte ønskelig at flere mottar disse e-postene.

## Flere mottakere

For å sende epost om subscription o.l. kan du legge til ekstra epost-adresser under notifications i "API-definering-under-menyen".

![Bildet kan inneholde: rektangel, font, skjermbilde, programvare, teknologi.](/datadeling/img/api-varsel-1.png)

Der kan du skrive inn mange epost-adresser etter hverandre. Her har jeg bare lagt til [mail@example.org](mailto:mail@example.org) i tillegg til det som blir satt opp som standard. Det kan være både epost-liser og personlige epost-adresser. Man kan legge til flere. Skill alle epost-adressene med mellomrom, semikolon eller komma.

## Ulike varsler til utvalgte mottakere

Det er også mulig å legge til flere notifications, om du f.eks. vil at en epost-liste skal få epost kun når noen ber om tilgang og kun dette, mens eier av API-et skal få alle varsler. Man må være administrator for å legge til en ny. Har man ikke rettigheter kan man be administrator om å lage en, eiere av API-et kan endre på innstillingene i etterkant.

Som administrator kan man trykke på det blå plusstegnet og fylle inn ønsket navn, og deretter huke av for de varslene denne mottakeren vil få.

For eksempel slik:

![Bildet kan inneholde: azure, rektangel, font, operativsystem, programvare.](/datadeling/img/api-varsel-2.png)
