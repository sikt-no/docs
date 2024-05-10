---
title: REST API & SCIM
---

Rest API definerer det foreslåtte [SCIM](https://tools.ietf.org/html/rfc7643)-grensesnittet som skal tilbys av IGA-implementeringer i den norske høyere utdanningssektoren.
Hovedbruksområdet for dette API-et er å muliggjøre IntARK-stil provisjonering av brukerkontoer.

En funksjonell mock-up av dette API-et er tilgjengelig via [UiBs API Gateway](https://api-uib.intark.uh-it.no/#!/apis/91a73d99-d9b2-452a-a73d-99d9b2e52a9a/detail).

De standardiserte stiene for SCIM inkluderer;
* `/Users`: for administrasjon av brukerkontoer.
* `/Users/{id}`: For spesifikke brukerkontoer.
* `/Groups`: For administrasjon av grupper.
* `/Groups/{id}`: For spesifikke grupper.

(Vi bruker kun User-endepunktene akkurat nå)

## Personer vs brukerkontoer
SCIM er i utgangspubktet utformet som en REST-basert erstatning for LDAP. Som har de samme 
tvertydlighetene når det gjelder hva brukerobjektene representerer.
Er de personer eller er de kontoer som tilhører personer(og andre enheter).

I denne sammenhengen erklærer vi dem som _kontoer_, og vi antyder at på et 
senere tidspunkt kan utvide SCIM-implementeringen med _person_-objekter.
I denne modellen kan en person være eier av flere brukerkontoer. Vi vurderer
også en av disse kontoene som personens primære brukerkonto. Brukerobjektene
for primærbrukerkontoen vil ha en blanding av attributter som beskriver kontoen og attributter som beskriver personen.

Man kan også ha kontoer som ikke tilhører personer. 
Dette kan være kontoer som representerer enheter, applikasjoner eller andre systemer.


## De minste implementasjonskravene

I denne seksjonen blir det definert hva som er minstekravnene til implementasjonen.

* Implementere `/Users` Gir muligheten til å bla gjennom tilgjengelige kontoer. (En implementasjon kan velge kun å eksponere Feide-aktiverte kontoer).
* Implementere `/Users/{id}` Henter data for en spesifikk konto.
* Implementere `/Users?filter=userName eq "..."` Gjør det mulig å slå opp en bestemt konto.
* Implementere `/Users?userName=...` En mer praktisk ustandardistert versjon av det samme som over.
* Gjøre `/Groups` funksjonell, men det er greit at den bare returnerer `ListResponse`.
* Post MQ melding når et brukerobjekt på brukerobjekter.

Følgende felt bør minst være tilgjengelig på brukerobjekter.

* `.id`
* `.meta`
* `.userName`
* `.active`
* `.displayName`
* `.name.formatted`
* `.name.givenName`
* `.name.familyName`
<!--  Kommentar: * `.emails[].type == "work"` med en tilsvarende `.value` (fant ikke denne verdien)-->
* `.no:edu:scim:user:accountType`
* `.no:edu:scim:user:employeeNumber`
* `.no:edu:scim:user:eduPersonPrincipalName`
* `.no:edu:scim:user:userPrincipalName`

## Hendelser

Oppdaterer objektene som er eksponert i dette API-et, og signaliseres av hendelser 
til IntArk MQ og følger det foreslåtte [SCIM Event Extension](https://tools.ietf.org/html/draft-hunt-scim-notify-00) 
strukturen

Siden IntArk foretrekker overfladiske meldinger, så inkluderes det ikke i `.values` attributten.

Disse hendelsene er kodet i JSON og ser slik ut:

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:notify:2.0:Event"],
  "resourceUris": [
     "https://gw-uib.intark.uh-it.no/iga/scim/v2/Users/362ff2749bfb11eabbd5600308a4105a"
  ],
  "type":"MODIFY",
  "attributes": ["emails", "name.givenName", "no:edu:scim:user:userPrincipalName"]
}
```

Eksempel på emne er meldningen "no.uib.iga.scim.user.modify".


## Anbefalte funksjoner

I denne seksjoner utvides det på minstekravene og definerer noen funksjoner som
kan være nyttige og som vi foretrekker all implementasjon til å vurdere.

* Implementere `/Users?employeeNumber=...`
* Implementere `/Users?studentNumber=...`
* Implementere `/Users?fsPersonNumber=...`
* Implementere `/Users?norEduPersonNIN=...`
* Implementere funksjonell `/Groups` og `/Groups/{id}` som eksponerer de samme gruppene som er tilgjengelig i LDAP/AD
* Mer attributter på brukerobjektet, spesielt `.phoneNumbers` og `.enterprise.manager`.
* Søke opp brukere med navn og andre attributter.
* Implementere `/Persons` og `/Persons/{id}` endepunkter. Et skjema for personobjektet er ikke enda definert.


## feltnavn spesifikasjon

### User `.id`

Dette bør helst være en UUID-lignende streng,
men siden tjenesten kan bruke andre formater,
for eksempel ved å la `.username` være `.id`.
Det bør være mulig å be om JSON-objektet som
representerer denne brukeren med en URL-sti på 
`/Users/{id}`, der `{id}` erstattes med verdien av dette 
feltet. 

### User `.meta`

Standard SCIM meta informasjon på dette objektet.

### User `.userName`

Formatet for brukernavnverdien skal være `{local-username}`.
SCIM tillater både bare brukernavn og brukernavn kvalifisert
med et domene. For å være konsistent returnerer vi alltid
fullt kvalisfisert navn.

Dette attributet er unikt, slik at ingen andre brukerobjekter
vil ha samme `.userName`.

`{local-username}` må matche regulært uttrykksmønster
`/[a-z][a-z0-9]{0,11}/`, og det fulle navnet vil kun
inneholde små bokstaver.

eksempel `gaa041@uib.no`

### User `.displayName`

For hovedbrukeren er dette det samme som `.name.formatted`.
For andre brukere kan dette være en hvilken som helst
streng som er passende for å definere hensikten for
denne brukeren.

### User `.name`

Dette er navnet på eieren av denne brukeren. Dette
attributtet er hovedsaklig for hovedbrukere.

Eksempel verdi:

```json
{
    "formatted": "Gisle Aas",
    "familyName": "Aas",
    "givenName": "Gisle"
}
```

Disse attributtene skal bli latinifiserte versjoner av
det samme navnet på personen.
Hvis de er forskjellig, vil det orginale navnet for personen
ble presentert av ikke-standariserte attributter
`nativeFormatted`, `nativeFamilyName`, `nativeGivenName`.

### User `.active`

En boolsk verdi som bli satt til verdien `false` for 
brukere som skal bli deaktivert.
Brukere skal ikke få muligheten til å logge inn på denne
brukerkontoen. Alle aktive sesjoner til denne
brukerkontoen skal også bli terminert.

### User `.externalId`

Identifikatoren til personen som eier denne kontoen. Det er å foretrekke at
`/Persons/{externalId}` henter informasjon om personen. For UH-IAM dette
feltet vil være UH-ID (en personorientert UUID-verdi).

### User `.emails`

E-postadresser som er tilknyttet denne brukerkontoen.
Disse typen e-postadresser er merket med et 
type felt. Taggen "work" er brukt for disse e-postadressene
som er hovede-postadressen, dette gjelder også for studenter.

Eksempel på verdier:


```json
[
    { "type": "work",     "value": "Gisle.Aas@uib.no" },
    { "type": "internal", "value": "gaa041@uib.no" },
    { "type": "vanity",   "value": "gisle@uib.no" }
]
```

### User `.phoneNumbers`

Telefonnummer som er offentlig og som er tilknyttet til denne brukeren. Telefonnummrene
er markert med en taggen "work", på de telefonnumrene som er foretrukken kontaktinformasjon.
Taggen "mobile" kan brukes når telefonnummer ikke er den foretrukne kontaktinformasjonen.
Taggen "secure" er telefon som egnder seg for 2 trinnsverifisering via SMS.

Telefonnummrene er representert i full internasjonalt format prefikset med 
"+" og uten mellomrom eller bindestreker.

Eksempel på verdier:

```json
[
    { "type": "work",    "value": "+4793241450" },
    { "type": "secure",  "value": "+4793241450" },
    { "type": "mobile",  "value": "+4793241450" }
]
```

### User `.profileUrl`

URL for universitetets nettside for eieren av denne brukeren.

<!-- 
Fant ikke denne
### User `.entitlements`

En liste av strenger som representerer rettigheter(entitlements) for
denne brukeren. Er ikke sikker på om vi skal bruke denne til noe. -->

### User `.roles`

Liste av forretningsroller(business roles) som er tilknyttet
brukeren. Man bruker taggene "staff", "guest" eller "student"
når det er passende. Denne listen av roller vil muligens bli større
med tiden. Universiteter kan introdusere private roller ved å
prefikse de med deres omvendte domenenavn, for eksempel "no.uib.breiflabb".

### User `.no:edu:scim:user`

Dette attributtet inneholder objeket der vi utvider brukerobjektet med 
felt som er spesifikke for det norsk UH-domenet. Strengen er også navnet
på et skjema og bør også finnes i `.schemas`-attributtet.

### User `.no:edu:scim:user.accountType`

Beskriver hva slags brukerkonto dette er.

* Verdien er "primary" for primærkontoen til en person.
Hver person kan kun ha en primærkonto.

* Verdien "admin" Kontoer som brukes til privilegert tilgang og andre administrative formål.

* Verdien "test" Kontoer som kun brukes til testing.

* Verdien "rpa" Kontoer som brukes av automatiseringsskript.

### User `.no:edu:scim:user.employeeNumber`

Dette er DFØ ID-en for ansatte som eier denne brukerkontoen.
Den er kun tilstede for primærkontoer.

### User `.no:edu:scim:user.studentNumber`

Detter er studentnummeret for personen som eier denne brukerkontoen.
Den er kun tilstede for primærkontoer.

### User `.no:edu:scim:user.fsPersonNumber`

Dette er personløpenummer(FS ID) for personen som eier denne kontoen.
Dette felteet er kun tilstede for primærkontoer.

### User `.no:edu:scim:user.norEduPersonNIN`

Dette er norsk fødselsnummer for personen som eier denne brukerkontoen.
Identifikatoren kan være en ekte NIN, et D-nummer eller S-nummer.
Dette felter er kun tilstede for primærkontoer.

Denne attributtverdien er noe konfidensiell og bør kun gis til klienter med
særlige grunner til å kreve dette. 

### User `.no:edu:scim:user.eduPersonPrincipalName`

Feide-ID av denne brukerkontoen er spesifisert i dette feltet.
Dette feltet er kun tilstede for brukere som ikke er tilgjengelig gjennom Feide.

Det vil være den samme verdien som `eduPersonPrincipalName` attributtet
i LDAP og spesivisert [norEdu\*](https://docs.feide.no/reference/schema/attributes/edupersonprincipalname.html#saml-attribute-edupersonprincipalname).

Eksempel på verdi: `gaa041@uib.no`

### User `.no:edu:scim:user.userPrincipalName`

Dette er innlogginsnavnet til Microsoft login.
Dette er det samme som attributtet `userPrincipalName` i AD og Azure AD.

<!-- Det kunne ha vært en god ide for denne verdien til å være det samme som
`.eduPersonPrincipalName`, men UiB har dessverre divergert. -->

Eksempel på verdi: `Gisle.Aas@uib.no`

### User `.enterprise`

Dette er standard SCIM-bedriftsutvidelsesobjekt.
Det virkelige fulle navnet på dette attributtet er `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User`
men vi forkortet referanser til det i denne beskrivelsen til `.enterprise`. Ledningsprotokollen
vil bruke hele navnet.

Det er ikke nødvendig med implementeringer for å gi denne utvidelsen.

### User `.enterprise.employeeNumber`

Dette er DFØ ID for ansatte som eieer denne kontoen.
Hvis begge er tilstede, skal denne ha samme verdi som `.no:edu:scim:user.employeeNumber`.

### User `.enterprise.costCenter`

Dette er kontonummeret som brukes for utgifter knyttet til eieren av denne kontoen.
Ikke sikker på om dette er nyttig.

### User `.enterprise.organization`

Det norske navnet på organisasjoner som eieren av denne brukeren tilhører.
For ansatte og studenter vil dette være det samme navnet som på Skolen.
For gjester kan dette være navnet på organisasjonen de kommer fra.

### User `.enterprise.division`

Det norske navnet på primærfakultetet som eieren av denne kontoen tilhører.

<!--  Fant ikke denne ### User `.enterprise.departement`

Det norske navnet på hoved institusjonen eieren av denne brukeren tilhører. -->

### User `.enterprise.manager`

For primære kontoer er dette satt til å referere til den primære brukerkontoen til lederen til personen som eier denne kontoen.
Alle ikke-primære kontoer bør sette dette til å referere til hovedkontoen til eieren.

Ytterligere informasjon om administratoren kan fås fra `/Users/{enterprise.manager.id}`.
`.enterprise.manager.displayName` er bare en kopi av `.displayName` til selve managerkontoen.

Eksempel på verdi:

```json
{
    "id": "452ff2749bfb11eabbd5600308a4105a",
    "displayName": "Nina Kaurel"
}
```
