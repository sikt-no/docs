---
title: Tilgang til data
---

Vi ønsker at mer data deles, men samtidig må vi sikre at fortrolig eller
sensitive data ikke kommer på avveie. Det er derfor viktig å ha rutiner for
hvem som skal få og ikke få tilgang til data.

Du anbefales å kartlegge, dokumentere og gjerne kategorisere informasjonen som
ditt API gir tilgang til. Dette gjør det enklere å behandle søknader om tilgang
til dine data i API manager, ved at rutiner og vilkår er klargjort på forhånd.

## Åpne data

Informasjon som _kan_ eller _skal_ være tilgjengelig for alle uten særskilte
tilgangsrettigheter. Tilgang til å lese disse kan gis til alle og bør i størst
mulig grad være helt åpne, slik at alle kan bruke API-et uten autentisering.

Grunner til å ikke ha åpne data tilgjengelige for alle uten autentisering:

- Informasjonen ligger lagret i flere systemer, men dette systemer er ikke
  masterdatakilde.

- Skjerme backend-systemet for last (kan da ha åpen plan med rate-limiting.

- Du ønsker vite hvem som har tilgang, så du kan kontakte dem ved nedetid og
  endringer.

Du kan i API manager sette opp automatisk godkjenning av søknader om tilgang
til åpne data.

Selv om noe av denne informasjonen skal være _tilgjengelig_ for alle, skal
likevel informasjonens integritet sikres ved at kun riktige applikasjoner har
tilgang til å _endre_ informasjonen.

## Tilgang til API-er basert på samtykke

Tilgang til API hvor personer samtykker til at en applikasjon får tilgang til
sine data (ofte kalt brukersentrisk datadeling) trenger ikke ekstra
godkjennelse per applikasjon. Datatilbyder setter opp API-ene slik at de kun
gir ut informasjon som tilhører personen.

## Tilgang til persondata hjemlet i lov

Tjenester som behandler personopplysninger er omfattet av kravene i GDPR, og må
ha formåls- og hjemmelsvurdering, og ha gjennomført risiko og
sårbarhetsanalyse. For tjenester som driftes av eksterne må institusjonen i
tillegg ha databehandleravtale og overføringsgrunnlag (for utenlandske
(under)leverandører).

Datatilbyder må sjekke at alt dette er på plass før konsumenten får tilgang til
personopplysningene. Rent praktisk kan dette gjøres ved at opplysninger om
dette legges ved søknaden om tilgang. Når man registrerer API bør planer som
gir tilgang til persondata [kreve kommentar og en kort beskjed om krav til
referanse](/docs/datadeling/veiledere/api-manager/opprette-plan)

## Data med begrenset tilgang

Informasjon som ikke skal være åpen og som ikke er regnet som fortrolig havner
gjerne i denne mellomkategorien. Tilgang på slike data kan deles med både
eksterne og interne.

Søknad om tilgang til disse dataene bør inneholde en begrunnelse og/eller
beskrivelse av hva dataene skal brukes til. For personopplysninger må
informasjon om formål/hjemmelsvurdering legges ved. Kommentarfeltet i søknaden
i API manager kan brukes for dette.

Dataforvalter bør beskrive hvordan nødvendig dokumentasjon skal
tilgjengeliggjøres i API manager, for å hjelpe konsumentene med
søknadsprosessen.

## Fortrolige data

Dette er informasjon som institusjonen er pålagt å begrense tilgangen til i
lov, forskrift, avtaler, og annet regelverk. Dette tilsvarer graden
**fortrolig** i den offentlige _Beskyttelsesinstruksen_.

API-er som tilbyr fortrolige data er pålagt å ha ekstraordinære
beskyttelsestiltak. Dette kan være med ekstra kryptering, eller asymmetrisk
nøkkel, for eksempel OAuth2. Bruk av IP-filter kan komme i tillegg, men er
alene ikke et godt nok ekstratiltak.
