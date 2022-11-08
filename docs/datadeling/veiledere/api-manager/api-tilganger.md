---
description:
  "TODO: Dette er forel\xF8pig kun et forslag\n\n\nInformasjonen som er\
  \ lagret i ulike systemer og som er tilgjengelige f.eks. bak API er ofte nyttig\
  \ for mange andre. De b\xF8r f\xE5 tilgang til denne informasjonen. Samtidig m\xE5\
  \ vi sikre at informasjon som er fortrolig eller sensitiv ikke kommer p\xE5 avveie.\n\
  \n\nDet er derfor viktig \xE5 ha rutiner for hvem som skal f\xE5 og ikke f\xE5 tilgang\
  \ til informasjon og data."
title: Forvaltning av tilganger til API
---

# Forvaltning av tilganger til API

Informasjonen som er lagret i ulike systemer og som finnes tilgjengelige bak f.eks. API er ofte nyttig for andre. De bør få tilgang til denne informasjonen. Samtidig må vi sikre at informasjon som er fortrolig eller sensitiv ikke kommer på avveie.

Det er derfor viktig å ha rutiner for hvem som skal ha og ikke ha tilgang til informasjon og data.

${resource:toc title=[Innholdsfortegnelse:]}
I API manager spør man om tilgang ved å [opprette en applikasjon](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/api-manager-be-om-tilgang.html#toc2), og søker om å [abonnere på en plan](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/api-manager-be-om-tilgang.html#toc4) for et API som er gjort tilgjengelig. For deg som forvalter tilgang til et API, og skal behandle søknader og avgjøre om applikasjoner skal få tilgang eller ikke, er det en fordel om rutiner og vilkår er klargjort på forhånd.

Det er derfor lurt å kartlegge, dokumentere og gjerne merke API-er og planer med hvilken kategori informasjonen bak API-et gir tilgang til.

## Åpne data

Informasjon som _kan_ eller _skal_ være tilgjengelig for alle uten særskilte tilgangsrettigheter. Tilgang til å lese denne type informasjon kan gis til alle, og bør i størst mulig grad være helt åpent slik at alle kan bruke API-et uten autentisering.

Fordeler ved å tilby åpne data helt tilgjengelige:

- Enklere for tredjeparter å ta i bruk
- Bidrar til økt bruk av informasjonen

Ulemper ved å tilby åpne data for alle uten autentisering:

- Økt belastning på API-er uten forvarsel. Kan omgås ved å legge kvoter og/eller rate-limiting på åpen plan, og tilby tilgang med API-nøkkel for systemer som har avtalt dette
- Informasjonen ligger lagret i flere system, uten at dette systemet er dataens masterkilde.

Søknader på tilgang til API/planer med åpne data godkjennes uten videre krav til autentisering.

Merk at selv om noe av denne informasjonen skal være _tilgjengelig_ for alle, skal informasjonens integritet likevel sikres ved at kun riktige applikasjoner har tilgang til å _endre_ informasjonen.

## Tilgang til persondata for system-til-system-integrasjoner

Applikasjoner og system som behandler _personopplysninger_ faller innunder personopplysningsloven og personvernforordningen. All informasjon som skal behandles må ha formåls- og hjemmelsvurdering, samt ha gjennomført risiko og sårbarhetsanalyse før behandlingen finner sted. For systemer som driftes av eksterne må det i tillegg være skrevet en [databehandleravtale](https://www.uio.no/for-ansatte/arbeidsstotte/personvern/gdpr/aktuelt/oppdatert-databehandleravtale.html), og for utenlandske (under)leverandører skal det skrives et overføringsgrunnlag.

Før man gir tilgang til API-er med personopplysninger må dataforvalter vurdere om det skal gis tilgang til API-et og personopplysningene til søker, og hvorvidt søker har de nødvendige hjemler etc. for å behandle opplysningene.

Rent praktisk gjøres det ved at opplysninger om dette (f.eks. link til webside eller referanse-numre i arkivsystem) legges ved søknaden. Når man registrerer API bør planer som gir tilgang til persondata [kreve kommentar og en kort beskjed om krav til referanse](/docs/datadeling/veiledere/api-manager/opprette-plan)

Dataeier skal sjekke at opplysningene det gis tilgang til er oppdatert og i orden før tilgang blir gitt.

## TBD: Tilgang til API-er basert på samtykke

Det er mulig å sette opp API slik at hver enkelt person som bruker en tjeneste interaktivt må autentisere og godkjenne at tjenesten får tilgang til deres data, ofte kalt brukersentrisk datadeling. Dataeier setter opp API-ene slik at de kun gir ut informasjon til personer som samtykker til dette.

Tilgang til data må uansett godkjennes av dataeier.

## Data med begrenset tilgang

Informasjon som verken skal være _åpen_ eller er regnet som _fortrolig_ havner gjerne i denne mellomkategorien. Tilgang på data i denne kategorien kan deles med både interne og eksterne etter en konkret vurdering. Søknad om tilgang til disse API-ene/planene må inneholde en begrunnelse og/eller beskrivelse av hva dataene skal brukes til. Hvis dataen det gis tilgang til inkluderer personopplysninger må informasjon om formål/hjemmelsvurdering etc. være lagt ved i tillegg. Applikasjonen skal ha et beskrivende navn og en utfyllende beskrivelse.

Dataeier må bestemme på forhånd om det er tilstrekkelig at det står beskrevet hva dataen skal brukes til i kommentarfeltet til søknaden sendt gjennom Gravitee, eller om det må opprettes sak i ticket-system e.l. Dette bør dokumenteres på første siden med dokumentasjon som legges sammen med API-et.

Alternativ. 1) Begrunnelse for tilgang gis i kommentar til søknad om abonnement. Har det vært relevant kommunikasjon rundt tilgang legges referanse til dette med i API manager, enten av konsument når de ber om tilgang eller som en beskjed som dataeier skriver når tilgang godkjennes.

Alternativ. 2) Det opprettes sak i ticket-system/saksbehandligssystem. Om det er behov for mer informasjon fra søker legges den i så fall inn i saken. Det samme gjelder lenker til referater fra møter, bestillinger og avtaler som lagres om nødvendig. Ved søknad om eller behandling av om tilgang til API manger, oppgis alle referanser til saker i kommentar når søknaden godkjennes.

Det er selvfølgelig mulig å bruke en blanding, f.eks. alternativ 1 om dataeier har bestilt integrasjon eller om det er intern søker, og alternativ 2 ellers.

## Fortrolige data

Dette er informasjon som institusjonen er pålagt å begrense tilgangen til i lov, forskrift, avtaler, reglementer og annet regelverk. Dette tilsvarer graden **_fortrolig_** i den offentlige Beskyttelsesinstruksen.

Tilgang på data i denne kategorien kan kun gis til interne. Rutiner for tilgang til API-er med fortrolige data er i utgangspunktet lik som for de med begrenset tilgang, men dataansvarlig må nødvendigvis gjøre en grundigere vurdering. Tilgang til fortrolige data som inkluderer personopplysninger vil utløse [krav om DPIA](https://www.uio.no/for-ansatte/arbeidsstotte/personvern/meir-om-personvern/meldeplikt#toc5).

API-er som tilbyr data som faller inn under graden _fortrolig_ må beskyttes ekstra, helst med asymmetrisk nøkkel, OAuth2 eller tilsvarende. Om det ikke er mulig kan det f.eks. brukes IP-filter i tillegg til API-nøkkel.

# Oppsummering

| Kategori                                                 | Ved søknad |     |
| -------------------------------------------------------- | ---------- | --- |
| API med åpne data                                        |            |     |
| API med personopplysninger og åpne data                  |            |     |
| API med data med begrenset tilgang                       |            |     |
| API med personopplysninger og data med begrenset tilgang |            |     |
| API med fortrolige data                                  |            |     |
| API med personopplysninger og fortrolige data            |            |     |
