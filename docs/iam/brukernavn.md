---
title: Brukernavn og bruker-ID
---

Felles IAM er autorativ kilde for brukeridentifikatorer som opprettes og forvaltes som en del av IAM. Alle eksisterende lokale brukernavn og Feide-IDer for eksisterende brukere vil bevares i nytt IAM. Brukere vil altså ikke oppleve at brukernavn endres når man migreres til nytt IAM.  For alle nye brukere som on-boardes etter at IAM er operativt ved institusjonen, vil lokalt brukernavn og UH-brukernavn være det samme. Over tid vil andelen brukere i UH-sektoren som har lokalt brukernavn som ikke er unikt nasjonalt, bli mindre og mindre.  

* Stamme for bruker-ID
  * aabbb000, der aabbb er forsøkt konstruert fra for- og etternavn ihht algoritmen beskrevet nedenfor.
* `eduPersonPrincipalName (ePPN)`
  * Globalt unikt brukernavn, som er satt sammen av lokalt brukernavn og realm. Realm er domenenavnet til institusjonen
  * ePPN kalles også ofte Feide ID eller Feidenavn  
  * Eksempel: `ansol1234@uib.no`
* Lokalt brukernavn
  * Lokalt brukernavn, som brukeren skriver inn når man skal logge inn på Feide
  * Eksempel: `gisle1`
* UH-brukernavn
  * Et brukernavn, som ikke har en realm-del, men allikevel er unikt på tvers av institusjoner innad i IAM
  * En person har kun ett UH-brukernavn, også på tvers av institusjoner
  * Eksempel: `ansol1234`
* UH-ID
  * Nasjonalt unik personsentrisk identifikator for bruk i kunnskapssektoren.
  * Eksempel: `2138972a-99bd-4aaf-aee3-8bdb3a1ab443`

## Ulike identifikatorer

### Feide

Brukeren vil logge på med sitt lokale brukernavn etter å ha valgt institusjon. Feide overfører attributter som identifiserer brukeren til tjenesten etter pålogging. Feide bør kunne tilby både UH-ID og ePPN overført til tjenesten. Før UH-ID kan tilbys, må Feides skjema oppdateres for å gjøre plass til at denne identifikatoren kan provisjonenes.

### Azure AD og pålogging på klient PC

<!-- Normalt sett vil institusjonene sette opp Azure AD slik at brukeren logger på med ePPN til Microsofts tjenester. Ønsker innspill her … Mer utfyllende info? -->

### UH-ID

Alle studenter i IAM vil ha en livslang personsentrisk identitet som understøtter livslang læring. Dette ivaretas av et personsentrisk personregister i IAM. For å identifisere et personinnslag benytter vi en identifikator vi kaller UH-ID. UH-ID genereres første gang en person registreres inn i IAM. UH-ID skal aldri benyttes, skrives inn eller huskes av en person, men brukes kun av tjenester og systemer som skal identifisere personen over tid. UH-ID genereres som en UUIDv4, på følgende format:

`985651dd-8495-4d89-865b-d2187e96702c`

## Identifikator i kildesystemer

### Identifikator i SAP


IAM vil motta en strøm av nye person-registreringer fra SAP for nye **ansatte** og **langvarige gjester**. Følge identifikatorer vil følge med:

| Identifikator | Beskrivelse |
| --- | --- |
| Fødselsnummer | Fødselsnummer | 
| D-nummer | D-nummer er et nummer som kan tildeles utenlandske personer som ikke har norsk fødselsnummer, men har et behov for identifisering overfor norske myndigheter. | 
| Ansattnummer | (Scoped employee number) En identifikator som er unik for person per institusjon i SAP.  | 
| Landkode og passnr. + institusjon  | Passnr. Hos UiT registreres også ansatte med passnr som ikke har D-nummer.  | 

### Identifikator i FS

IAM vil motta en strøm av nye person-registreringer fra FS for nye **studenter**. Følgende identifikatorer vil følge med:

| Identifikator | Beskrivelse |
| --- | --- |
| Fødselsnummer | Fødselsnummer | 
| D-nummer | D-nummer er et nummer som kan tildeles utenlandske personer som ikke har norsk fødselsnummer, men har et behov for identifisering overfor norske myndigheter. | 
| SO-nummer  | Nummeret utstedes av Samordna opptak, typisk til de som hverken har, og kanskje aldri skal ha, fødselsnummer eller D-nummer. Nummeret brukes bare internt i sektoren av UH-institusjonene og ikke av personen selv.  | 
| FS løpenummer | (Scoped FS ID number) Et løpenummer som tildeles i FS.  |
| Landkode og passnr. + institusjon  | Passnr. Registreres for utenlandske utvekslingsstudenter.  | 

IAM inneholder et personregister, som inneholder identifikatorer på alle personer som er registrert i IAM. For hvert personinnslag ligger en liste over hvilke identifikatorer (av de over) som er tilknyttet personen, og hvilke institusjoner hvor personen har en aktiv konto.


## Identity matching

Hver gang et nytt element dukker opp i datafeeden fra FS eller SAP, vil identifikatorene sjekkes mot personregisteret.

Dersom personen
* finnes i personregisteret og har en aktiv tilknytning til den aktuelle institusjonen, vil ingen ny brukerkonto opprettes.
* finnes I personregisteret, men ikke har en aktiv tilknytning til den aktuelle institusjonen, vil en ny brukerkonto opprettes.  Personregisteret vil oppdateres om nødvendig. UH brukernavn eksisterer allerede I personregisteret, og vil brukes som lokalt brukernavn ved institusjonen.
* Ikke finnes I personregisteret, vil et nytt innslag I personregisteret opprettes med de aktuelle identifikatorene. Et nytt UH brukernavn vil genereres for personen. Det vil også opprettes en lokal konto hos institusjonen hvor dette brukernavnet brukes.
* Matcher mer enn et innslag i persontabellen; så vil importprosessen stoppe opp, og legges i en kø for manuell prosessering.

### Soft matching

Dersom personen finnes fra før vil man også gjennomføre en soft match prosedyre som leter etter match med følgende kriterier:
* Landkode + passnr
* Personlig epostadresse + fødselsdato + etternavn
* Mobilnummer + fødselsdato + etternavn

En slik match vil ikke forhindre duplikatoppføring, men det nye innslaget vil tagges med en referanse til potensielle duplikat-match.

### Grensesnitt for sammenslåing av duplikater

Sentral IAM forvaltning har et grensesnitt for å slå sammen to personinnslag som er duplikater.  

Sentral IAM forvaltning har et grensesnitt for presentasjon og gjennomgang av potensielle duplikater som matcher på tvers av institusjoner.

Sentral IAM forvaltning har et grensesnitt for å håndtere import av nye personer som ligger i kø og krever manuell godkjenning, siden de matcher flere enn et eksisterende innslag i personregisteret. De innslagene som matcher vil måtte slåes sammen, slik at det er maks er et innslag i personregisteret som matcher den nye personen. Alternativt må kildedata oppdateres for den nye personen, slik at den ikke lengre matcher mer enn en person.

Administrator ved institusjon har et grensesnitt for presentasjon og gjennomgang av potensielle duplikater som kun matcher på innenfor samme organisasjon.

## Use case

### Eksisterende bruker pre-IAM

Brukeren har brukernavn `olanor@uib.no` fra før

Brukeren vil oppstå hos UiB med følgende konto og personobjekt

| Scope | Identifikator     | Eksempel                               |
| ----- | ----------------- | -------------------------------------- |
| Core  | Fødselsnummer     | 10017012345                            |
| Core  | UH brukernavn     | [Olnor1234 ](mailto:Olnor1234@uib.no)  |
| Core  | Aktiv tilhørighet | UiB                                    |
| UiB   | Ansattnummer      | 100199991                              |
| UiB   | Lokalt brukernavn | Olanor                                 |
| UiB   | ePPN              | [Olanor@uib.no ](mailto:Olanor@uib.no) |

Hvis brukeren senere on-boardes NTNU, vil konto og personobjekt bli som følger:

| Scope | Identifikator     | Eksempel                                       |
| ----- | ----------------- | ---------------------------------------------- |
| Core  | Fødselsnummer     | 10017012345                                    |
| Core  | UH brukernavn     | [Olnor1234 ](mailto:Olnor1234@uib.no)          |
| Core  | UH-ID             | 7d673e3c-baea-11ea-b3de-0242ac130004           |
| Core  | Aktiv tilhørighet | UiB, NTNU                                      |
| UiB   | Ansattnummer      | 100199991                                      |
| UiB   | Lokalt brukernavn | Olanor                                         |
| UiB   | ePPN              | [Olanor@uib.no ](mailto:Olanor@uib.no)         |
| NTNU  | Ansattnummer      | 10012223                                       |
| NTNU  | Lokalt brukernavn | Olnor1234                                      |
| NTNU  | ePPN              | [olnor1234@ntnu.no ](mailto:olnor1234@ntnu.no) |

### On-boarding av person første gang i IAM

Kari Normann registreres som ansatt fra FS til UiB:

| Scope | Identifikator     | Eksempel                                   |
| ----- | ----------------- | ------------------------------------------ |
| Core  | Fødselsnummer     | 11037012345                                |
| Core  | UH brukernavn     | Kanor997                                   |
| Core  | UH-ID             | ccd950fe-baea-11ea-b3de-0242ac130004       |
| Core  | Aktiv tilhørighet | UiB                                        |
| UiB   | Ansattnummer      | 200299991                                  |
| UiB   | Lokalt brukernavn | Kanor997                                   |
| UiB   | ePPN              | [kanor997@uib.no ](mailto:kanor997@uib.no) |

Kari Normann dukker så opp som student hos NTNU:

| Scope | Identifikator     | Eksempel                                     |
| ----- | ----------------- | -------------------------------------------- |
| Core  | Fødselsnummer     | 11037012345                                  |
| Core  | UH brukernavn     | Kanor997                                     |
| Core  | UH-ID             | ccd950fe-baea-11ea-b3de-0242ac130004         |
| Core  | Aktiv tilhørighet | UiB, NTNU                                    |
| UiB   | Ansattnummer      | 200299991                                    |
| UiB   | Lokalt brukernavn | Kanor997                                     |
| UiB   | ePPN              | [kanor997@uib.no ](mailto:kanor997@uib.no)   |
| NTNU  | FS løpenummer     | 19283746                                     |
| NTNU  | Lokalt brukernavn | Kanor997                                     |
| NTNU  | ePPN              | [kanor997@ntnu.no ](mailto:kanor997@ntnu.no) |



### Manuell sammenslåing av duplikater

Gitt et scenario hvor vi har to personinnslag som feilaktig har oppstått som duplikater på samme person:

**Kari Normann – ansatt hos UiB**

| Scope | Identifikator     | Eksempel                                   |
| ----- | ----------------- | ------------------------------------------ |
| Core  | D-Nummer          | 11037022334                                |
| Core  | UH brukernavn     | Kanor997                                   |
| Core  | UH-ID             | 2798d4fd-addd-4938-864a-c026851ec4dd       |
| Core  | Aktiv tilhørighet | UiB                                        |
| UiB   | Ansattnummer      | 200299991                                  |
| UiB   | Lokalt brukernavn | Kanor997                                   |
| UiB   | ePPN              | [kanor997@uib.no ](mailto:kanor997@uib.no) |

**Kari Normann – student hos NTNU**

| Scope | Identifikator     | Eksempel                             |
| ----- | ----------------- | ------------------------------------ |
| Core  | Fødselsnummer     | 11037012345                          |
| Core  | UH-brukernavn     | Kanor384                             |
| Core  | UH-ID             | ccd950fe-baea-11ea-b3de-0242ac130004 |
| Core  | Aktiv tilhørighet | NTNU                                 |
| NTNU  | FS løpenummer     | 19283746                             |
| NTNU  | Lokalt brukernavn | Kanor384                             |


## Generering av nye brukernavn

* If override is provided
  * Generate 5-character string using characters a-z
* Else
  * Remove all whitespace characters from first and last name
  * Replace all non-Latin characters with appropriate Latin characters from first and last name
  * Remove any characters from first and last name that are not a-z
  * Use first 2 letters of first name to generate first part of username
  * Append enough letters of last name to use 5 characters, if possible
  * Ensure that no reserved string from reserved string table is included in username, if so, replace offending characters
* Append enough random numbers to username to create a 9-character username
* Verify against namespace table to ensure uniqueness
* If not unique, regenerate
  * If uniqueness not met within 5 tries, remove a character from alpha portion and replace with random digit

## Endre eksisterende brukernavn


Endring av brukernavn er uønsket, og ikke noe som promoteres som et valg for brukeren. Det vil allikevel være tilfeller der man ønsker å endre brukernavnet til en eksisterende bruker. Det kan for eksempel være at en bruker har fått et brukernavn som oppleves som støtende, til tross for en sjekk mot en black-list.

Helpdesk ved lokal institusjon har et grensesnitt for å oppdatere brukernavn. Denne muligheten er begrenset til brukere som kun er tilknyttet en institusjon.

Avhengig av årsak til endringen av brukernavnet, har man to alternative valg:

* Generate a new username where letters are substituted with random letters
* Generate a new username where the exact same rules as used as first-time username generation.

Helpdesk godkjenner nytt automatisk generert forslag.
Helpdesk kan velge å legge til nye ord til blacklist for å unngå flere like tilfeller.
Brukeren får automatisk varsel om oppdatering av brukernavnet.

## Om kontoaktivering

Alle brukere med fødselsnummer aktiverer sin konto ved bruk av ID-porten. Alle andre brukere registrerer seg ved å verifisere eierskap av e-postadresse og mobilnummer. Dersom mobilnummer ikke er registrert, verifiseres kun e-postadresse.

## Om gjestebrukere

Alle gjester (med unntak av kortvarige gjester) registreres i SAP. Kortvarige gjester kan registreres direkte i IAM av en sponsor. Institusjonene kan definere reglene for hvem som er godkjent som sponsor.
