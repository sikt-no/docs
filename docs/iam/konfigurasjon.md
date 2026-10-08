---
title: Konfigurasjoner
---

Felles IAM leveres med en standardkonfigurasjon som er lik for alle institusjoner. Vi ønsker en høy grad av standardisering i sektoren, men legger også til rette for lokal tilpasning der institusjonene har behov for det.

Denne siden gir en oversikt over hva som kan konfigureres per institusjon. Noen innstillinger kan institusjonen endre selv, mens andre må bestilles fra Sikt.

## Forretningsroller og tilgangsstyring
| Område | Hva kan konfigureres | Mer informasjon |
| --- | --- | --- |
| Forretningsroller | Nye roller kan legges til, og eksisterende roller kan tilpasses institusjonen. | [Forretningsroller](/docs/iam/forretningsroller) |
| Systemrettigheter | Hvilke forretningsroller som skal gi tilgang til målsystemene. | [Tilgangsstyring](/docs/iam/tilgangsstyring) |
| Bestillbare rettigheter | Opprettelse av nye og endring av eksisterende bestillbare rettigheter. | [Tilgangsstyring](/docs/iam/tilgangsstyring) |

## Livssyklus
| Område | Hva kan konfigureres | Mer informasjon |
| --- | --- | --- |
| Tidligaktivering | Hvor lenge før startdatoen i kildesystemet kontoen aktiveres. Kan styres per brukertype. | [Livssyklus](/docs/iam/livssyklus) |
| Grace period | Hvor lenge etter sluttdatoen i kildesystemet kontoen deaktiveres. Kan styres per brukertype. | [Livssyklus](/docs/iam/livssyklus) |
| Aktiv student | Om det kun er studierett som skal gi aktiv brukerkonto, eller om også vurderings- eller undervisningsmelding skal gjøre det. | [Livssyklus](/docs/iam/livssyklus) |
| Statuskoder i FS | Hvilke statuskoder i FS som skal føre til umiddelbar deaktivering, for eksempel «INNDRATT» eller «UTESTENGT». | [Livssyklus](/docs/iam/livssyklus) |
| Stedfortreder som godkjenner | Om en stedfortreder skal kunne godkjenne bestillbare rettigheter i stedet for leder. | [Deputy](/docs/iam/deputy) |
| Lokal stedfortreder | Om stedfortreder skal kunne defineres direkte i Felles IAM. | [Deputy](/docs/iam/deputy) |
| Stedfortreder fra SAP | Om stedfortreder skal settes på organisasjonsenhet basert på data fra SAP. | [Deputy](/docs/iam/deputy) |
| Dødsfall | Håndtering av grace period og avslutning av tilganger ved dødsfall registrert i SAP eller FS. | [Dødsfall](/docs/iam/versjoner/g4#21-håndtering-av-dødfall-i-sap) |
| Forlengelse | Hvor mange dager en bruker kan be om å få forlenget sluttdatoen sin via en bestillbar rettighet. | [Tilgangsstyring](/docs/iam/tilgangsstyring#bestillbare-rettigheter-tilganger) |
| Sletting | Hvor mange dager etter deaktiveringsdatoen en brukerkonto skal slettes. Kan styres per brukertype. | [Livssyklus](/docs/iam/livssyklus) |

## Kontoaktivering og passord
| Område | Hva kan konfigureres | Mer informasjon |
| --- | --- | --- |
| Claime konto | Hvor mange dager før startdatoen en bruker kan claime kontoen sin. Kan styres per brukertype. | [Kontoaktivering](/docs/iam/kontoaktivering) |
| Funksjoner i «Min konto» | Om endring av PIN-kode, bestilling av adgangskort og opplasting av bilde skal være tilgjengelig. | [Kontoaktivering](/docs/iam/kontoaktivering) |
| Passordpolicy | Minimum passordlengde, krav til passfraser og hvor mange tidligere passord som lagres. | [Passordpolicy](/docs/iam/passordpolicy) |

## Kildesystemer
| Område | Hva kan konfigureres | Mer informasjon |
| --- | --- | --- |
| Prioritering av kildedata | I hvilken rekkefølge kildesystemene skal prioriteres, for eksempel SAP → FS → Greg. | [Kildedata](/docs/iam/kildedata) |
| SAP | Hvilke forretningsroller som ikke skal få brukernavn og e-postadresse skrevet tilbake (`sapWritebackBusinessRoleException`). | [Kildedata](/docs/iam/kildedata) |
| SAP | Om jobbmobil skal skrives tilbake (`sapWritebackJobMobile`). | |
| SAP | Om kontortelefon skal skrives tilbake (`sapWritebackOfficePhone`). | |
| FS | Hvilke forretningsroller som ikke skal få brukernavn skrevet tilbake. | [Kildedata](/docs/iam/kildedata) |
| FS | Om brukernavn skal skrives tilbake med @domene (`fsWritebackWithDomainName`). | [Kildedata](/docs/iam/kildedata) |
| FS | Om e-postadresse med fullt navn skal skrives tilbake (`fsWritebackEmailAsSystem2ID`). | [Kildedata](/docs/iam/kildedata) |
| FS | Om ansattnummer skal skrives tilbake (`fsWritebackEmployeeID`). | [Kildedata](/docs/iam/kildedata) |
| FS | Om privat mobilnummer skal skrives tilbake (`fsWritebackMobilePhoneNumber`). | [Kildedata](/docs/iam/kildedata) |
| FS | Om kontornummer skal skrives tilbake (`fsWritebackOfficeNumber`). | [Kildedata](/docs/iam/kildedata) |

## Permisjon
| Område | Hva kan konfigureres | Mer informasjon |
| --- | --- | --- |
| SAP | Om en aktiv permisjon skal deaktivere brukerkontoen (`sapLoAInactivatesUser`). | [Permisjoner](/docs/iam/versjoner/g4#22-håndtering-av-permisjoner) |
| FS | Om en aktiv permisjon skal deaktivere brukerkontoen (`fsLoAInactivatesUser`). | [Permisjoner](/docs/iam/versjoner/g4#22-håndtering-av-permisjoner) |

## SCIM
| Område | Hva kan konfigureres | Mer informasjon |
| --- | --- | --- |
| SCIM | Hvilke grupper som ikke skal eksponeres via SCIM. | [SCIM](/docs/iam/scim) |
| SCIM | Hvilke RI-attributter som skal eksponeres via et «custom object». | [SCIM](/docs/iam/scim) |
| SCIM | Om forretningsrollen `iam:externalnoaccess` skal eksponeres. | [SCIM](/docs/iam/scim) |
| SCIM | Hvilket RI-attributt som skal eksponeres som UPN. | [SCIM](/docs/iam/scim) |

## Kortvarig gjest
| Område | Hva kan konfigureres | Mer informasjon |
| --- | --- | --- |
| Maksimal varighet | Den lengste mulige utløpsdatoen for en kortvarig gjest. Standard er 30 dager. Endres i People-modulen &rarr; Settings &rarr; Sponsorship settings. | [Kortvarig gjest](/docs/iam/short-term-guest) |
| Hvem kan opprette gjester | Medlemmer av gruppen «Portal Sponsor», enten lagt til manuelt eller via et dynamisk filter. | [Kortvarig gjest](/docs/iam/short-term-guest) |
| Prefiks på brukernavn | Prefikset på brukernavnet til kortvarige gjester. | [Kortvarig gjest](/docs/iam/short-term-guest) |

## Bestille endringer

Ta kontakt med Sikt for å endre konfigurasjoner som institusjonen ikke kan endre selv.
