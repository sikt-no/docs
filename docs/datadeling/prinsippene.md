---
slug: /datadeling/prinsippene
title: Integrasjonsprinsippene for IntArk
---

Kjernen i IntArk er integrasjonsprinsippene nevnt nedenfor. Resten av IntArk er
bygget opp rundt disse. IntArk følger generelt [DigDirs overordnede
arkitekturprinsipper](https://www.digdir.no/samhandling/overordnede-arkitekturprinsipper/1065),
men de spesifikke integrasjonsprinsippene i IntArk er krav som må oppfylles.

## Brukerorientert arkitektur

Arkitekturen er formgivende for tjeneste- og systemlandskapet, som igjen skal gjenspeile hva brukerne trenger. Stadige endringer er normaltilstanden. Derfor må arkitekturen være fleksibel, slik at den kontinuerlig kan tilpasses brukermassens skiftende behov.

Se også [Digitaliseringsdirektoratets arkitekturprinsipp 1: Ta utgangspunkt i brukernes behov og arkitekturprinsipp](https://www.digdir.no/digitalisering-og-samordning/prinsipp-1-ta-utgangspunkt-i-brukernes-behov/1055) og [5.3: Sørg for arkitektur som gir systemer og tjenester evne til endring og vedlikehold over tid](https://www.digdir.no/digitalisering-og-samordning/prinsipp-5-del-og-gjenbruk-losninger/1062).

## Tjenesteorientert arkitektur

Integrasjonsgrensesnitt skal utformes slik at tjenester og bakenforliggende systemer kan flyttes og byttes ut uten at konsumenter av tjenesten må gjøre endringer i sin ende, og omvendt.
Dette prinsippet legger føringer på hvilken programvare vi kan anskaffe, hvilke grensesnitt som tilbys av egenutviklede applikasjoner, og hvordan vi kobler sammen egenutviklede applikasjoner.

Se også [Digitaliseringsdirektoratets arkitekturprinsipp 5.7: Ta hensyn til anerkjente designprinsipper for tjenesteorientert arkitektur, slik som løse koplinger, modularisering, standardiserte tjenestekontrakter med videre](https://www.digdir.no/digitalisering-og-samordning/prinsipp-5-del-og-gjenbruk-losninger/1062).

## Tilgjengelige data

Data skal være tilgjengelig for konsumenter. Tilgjengelighet manifesterer seg på flere plan:

- Teknisk.
- Forståelsesmessig.
- Oppdagbare.

For at kravet om teknisk tilgjengelighet skal være oppfylt, må data tilbys gjennom åpne og robuste grensesnitt. For at data skal være tilgjengelige forståelsesmessig, må de være dokumentert. Oppdagbarhet forutsetter at definisjoner av grensesnitt og tilhørende teknisk og semantisk dokumentasjon er publisert.

Se gjerne:

- [Digitaliseringsdirektoratets veileder for orden i eget hus](https://www.digdir.no/informasjonsforvaltning/veileder-orden-i-eget-hus/2716).
- [Digitaliseringsdirektoratets arkitekturprinsipp 4: Del og gjenbruk data](https://www.digdir.no/digitalisering-og-samordning/prinsipp-4-del-og-gjenbruk-data/1061), spesielt:
  - Prinsipp 4.2: Tilby data i tråd med regjeringens «[Retningslinjer ved tilgjengeliggjøring av offentlige data](https://www.regjeringen.no/no/dokumenter/retningslinjer-ved-tilgjengeliggjoring-av-offentlige-data/id2536870/)».
  - Prinsipp 4.3: Gjenbruk data fra autoritative kilder. Bruk kopier kun der det er nødvendig, og sørg for at disse er oppdaterte.
  - Prinsipp 4.5: Unngå innlåsing av data i systemer.
- [FAIR prinsippene](https://www.go-fair.org/fair-principles/)

## Gjenbruk av løsninger

Gjenbruk av løsninger forutsetter at det samarbeides i fagmiljøer på tvers av institusjoner om å homogenisere forretningsprosesser.

Se gjerne [Digitaliseringsdirektoratets arkitekturprinsipp 5: Del og gjenbruk løsninger, spesielt](https://www.digdir.no/digitalisering-og-samordning/prinsipp-5-del-og-gjenbruk-losninger/1062):

- Prinsipp 5.1: Kartlegg eksisterende og planlagte løsninger som kan være aktuelle å gjenbruke.
- Prinsipp 5.8: Tilgjengeliggjør informasjon om, og tilby gjenbruk av egne løsninger som kan være interessante for andre.

## Etterrettelig bruk av data

Konsum av API-er skal skje gjennom API Manager. Dette medfører at institusjonen har oversikt over hvem som konsumerer hvilke data.

Se også [Digitaliseringsdirektoratets arkitekturprinsipp 7.3: Virksomhetene må ha styring og kontroll som sørger for at informasjonssikkerhet og personvern er ivaretatt i tjenestene](https://www.digdir.no/digitalisering-og-samordning/prinsipp-7-sorg-tillit-til-oppgavelosningen/1064).

## Avvik må begrunnes

Avvik fra prinsippene om Tjenesteorientert arkitektur og Tilgjengelige data er lov, så lenge det kan begrunnes at avviket er hensiktsmessig for sektoren.

Et eksempel er at det kan være hensiktsmessig å bruke en leverandørspesifikk integrasjon, hvis kostnadene ved å innføre en løsere kobling blir høyere enn konsekvensene og risikoen for institusjonen ved å låse seg til en leverandør.
