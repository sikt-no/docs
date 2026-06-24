# Fultnavn e-postadresse

**Felles IAM støtter e-post på to ulike format:**

* brukernavn@institusjon.no
* fornavn.etternavn@institusjon.no

E-post på brukernavnformatet vil alltid være unikt på tvers av institusjoner. Den baserer seg på uh-brukernavn som er tilknyttet en person og vil aldri gjenbrukes.
E-post på formatet fulltnavn er unik hos institusjonen så lenge brukeren finnes i RI Portalen. Felles IAM har ikke et sentralt register som holder på fulltnavn-epost, så når en bruker fratrer og slettes i RI Portalen vil e-postadressen frigjøres. Fra en person fratrer til adressen kan gjenbrukes avhenger av Global verdiene: "sapPositionGracePeriodDays" og "deleteSeparatedEmployeeAccountsAfterDays" for ansatte og "fsStudyRightsGracePeriodDays" og "deleteSeparatedStudentAccountsAfterDays" for studenter. Fra en bruker blir fratrått + disse sluttdatoene vil være tidspunktet for når e-postadressen tilgjengeliggjøres.

Algoritmen for e-postadresse på fulltnavn format ivaretar flere fornavn, men vil kun benytte siste verdi i etternavnet.

**Eksempler på dette er:**

* Ola Nordmann -> ola.nordmann@inst.no
* Ola Jens Nordmann -> ola.j.nordmann@inst.no
* Ola Nordmann Hansen -> ola.hansen@inst.no
* Ola Jens Nordmann Hansen -> ola.j.hansen@inst.no
* Ola-Jens Nordmann -> ola-jens.nordmann@inst.no

