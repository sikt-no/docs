# MISP (Malware Information Sharing Platform)

eduCSC publiserer en [MISP-tjener til bruk for deling i sektoren](https://edu.misp.educsc.no). Denne er tilgjenglig for alle kunder. 

MISP benytter [eduCSC SSO](educsc-sso.md) som innloggingsløsning, med mulighet for bruk av Feide i tillegg til passord og MFA.

## Hva er MISP

[MISP](https://www.misp-project.org/) (Malware Information Sharing Platform) benyttes for deling av trusselindikatorer - dette kan være ondsinnede URLer, hasher for oppdaget skadevare eller generell etterretning rundt hendelser både i egen sektor og ute i verden.

eduCSCs Phishing-Reporter-tjeneste skriver sine data til MISP slik at dette kan behandles videre i andre systemer (eksempelvis DNS Brannmur), samt deles så bredt som mulig i sektoren.

I tillegg til brukere i MISP, kan man også koble sin egen MISP-tjeneste opp mot eduCSC MISP for å utveksle (eller bare motta) data automatisk.

## Komme i gang med brukere i eduCSC MISP

For å få tilgang til MISP må man ha en bruker i [eduCSC Portal](educsc-portal.md) som er registrert som IRT-medlem:

1. En administrator i din virksomhet legger deg til som bruker i Portalen. Se [Legge til nye brukere](https://docs.sikt.no/docs/educsc/trusseletterretning/educsc-sso/#legge-til-nye-brukere).
1. Administratoren krysser av for «IRT-medlem» under «MISP-tilgang» på brukeren. Det gir rollen User i MISP. Administratoren kan i stedet velge MISP-rollen Publisher eller Org Admin.
1. Hvis virksomheten skal bruke Feide for innlogging: Aktiver applikasjonen «eduCSC SSO» for din organisasjon i [Feide kundeportal](https://kunde.feide.no).

IRT-medlemmer i Portalen blir automatisk opprettet i MISP. Brukere som ikke er IRT-medlem har ikke tilgang.

## Kobling MISP-til-MISP

Ønsker man å sette opp kobling mellom eventuell egen MISP-instans og eduCSC MISP, må bestilling inneholde egen organisasjons UUID (som vist på egen instans under URI `organisations/index/sort:id/direction:asc`), slik at vi kan konfigurere korrekt på vår side.

eduCSCs MISP-organisasjon har UUID `58385fc5-4bbf-4278-bc49-1e526fab405f`. I tillegg behøver vi adressen til din organisasjons tjener, samt eventuell IPv4/IPv6-adresse denne kommuniserer fra om dette ikke samsvarer med tjenerens adresse.

Vi vil så opprette en tilgangsnøkkel som kan benyttes i egen tjener for å autentisere mot eduCSC. Vi setter stor pris på om vi også får tildelt en tilgangsnøkkel for toveis trafikk, slik at vi har mulighet til å overvåke og varsle dersom våre samarbeidende organisasjoner benytter utdaterte/sårbare MISP-instanser.

## Bruk av MISP

MISP (Malware Information Sharing Platform) er et relativt komplekst system med en overflod av muligheter (og muligheter for å gjøre feil, i eget system), så vi anbefaler sterkt å sette seg inn i [prosjektets dokumentasjon](https://www.misp-project.org/documentation/) for å få en god forståelse for hvordan tjenesten fungerer.
