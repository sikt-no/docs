---
title: Sikkerhetsdirektiv for GigaCampus verktøykasser
ansvarlig: vidar.faltinsen@sikt.no
date: 2006-11-30
---

## 1. Om verktøykassene

Verktøykassene er et initiativ som inngår i GigaCampus-programmets
satsing på drift og overvåking. Verktøykassene inneholder et sett av
veletablerte, åpen kildekode baserte overvåkningsprogrammer myntet på
proaktiv drift av eget campusnett.

For institusjoner som ønsker det, utplasserer UNINETT en verktøykasse
tjenermaskin (evt flere maskiner) ved institusjonen. Utplassert
verktøykasse er primært for institusjonen selv. Det er driftsfolk ved
institusjonen som bruker verktøyene på verktøykassen til daglig drift og
overvåking av eget campusnett. GigaCampus-programmet tilbyr løsningen
under parolen "hjelp til selvhjelp".

Porteføljen med verktøy som inngår på verktøykassen vil vokse over tid.
Initielt (2006) inngår:

1.  Overvåkningssystemet NAV
2.  Netflowportefølje
3.  Konfigurasjonsarkiv for nettelektronikk.
4.  Loggserver
5.  Autentiseringstjeneste for nettelektronikk

De initielle verktøyene er under kontinuerlig videreutvikling og nye
verktøy vil komme til i løpet av programperioden.

## 2. Driftsansvar

  
UNINETT ved leder for GigaCampus-programmet har driftsansvar for
verktøykassene. Drift garanteres for hele GigaCampus programperioden,
frem til 1/1 2010.

UNINETT står ansvarlig for at systemarbeid og UNINETT brukertilgang
ivaretar hensyn til personvern og regelverk.

Løpende systemdrift håndteres av autorisert systemdriftspersonale ved
UNINETT. Det skal til enhver tid forefinnes en liste over personer som
har administratortilgang til verktøykassene. Disse skal alle ha
underskrevet en taushetserklæring.

Institusjonen står ansvarlig for at verktøykassen er plassert i fysisk
sikrede omgivelser, på et godt sikret nettsegment (jfr også kap 4).

## 3. Driftsopplegg

  
UNINETT håndterer anskaffelse, initiell idriftsetting og løpende
vedlikehold/drift. Verktøykassa er rackmonterbare IBM-servere som kjører
Debian. Cfengine benyttes i driftsløsningen. Dette gir mange fordeler,
blant annet sentralisert konfigurasjon og administrasjon, herunder
fortløpende pakkeoppdatering m.m. I tillegg tar UNINETT backup av lokale
konfigurasjonsfiler, brukerdata og data som produseres av verktøyene. Et
unntak er netflow rådata.

UNINETT driftsenter og UNINETT beredskapsvakt overvåker verktøykassene
døgnkontinuerlig, herunder at alle tjenester går. Vi monitorer
diskfyllingsgrad, cpu- og minneforbruk m.m. Tiltak blir truffet ved
insidenter. Ved evt alvorlig maskinvarehavari har UNINETT
reservedelslager og skal så raskt som mulig reetablere ny maskin, sende
denne ut og få verktøykassen operativ igjen.

## 4. Sikkerhet

  
Sikkerhetsoppgradering og dertil tetting av evt sikkerhetshull skal
løpende håndteres av UNINETT.

Verktøykassene skal i tillegg beskyttes gjennom hensiktsmessig
segmentering og fornuftig anvendelse av pakkefilter i lokalt campusnett.
Anbefalte filterregler blir foreskrevet av UNINETT og skal implementeres
lokalt (evt i samarbeid med UNINETT).

## 5. Kontaktpunkt

-   For alle driftshendelser kontakt UNINETT driftsenter,
    drift@uninett.no
-   For brukerstøtte relatert til verktøyene, eller diskusjon om bruk,
    benytt diskusjonslista vk@uninett.no. For diskusjon relatert til
    plan/strategi/videreutvikling, benytt samme liste.

## 6. Brukertilgang til verktøykassene

  
Vi må her skille mellom to ulike tilgangsmåter til verktøykassene; ssh
innlogging og web-tilgang (ssl). Primært grensesnitt er web, men ssh
innlogging er også påkrevd i noen tilfeller.

### 6.1 Web-tilgang

  
For web danner NAV sine autentisering- og autorisasjonsmekanismer et
rammeverk for alle installerte verktøy som tilbyr webgrensesnitt. NAV
administratorfunksjonen håndteres av institusjonen selv. NAV
administrator kan legge til og fjerne brukere etter eget behov. NAV
administrator kan også regulere den enkelte webbrukers rettigheter, dvs
hvilke verktøy brukeren skal gis tilgang til.

Det er ikke påkrevd at UNINETT har tilgang til webgrensesnittet. Ved
initiell installasjon gis UNINETT en slik tilgang, og såfremt
institusjon finner assistanse fra UNINETT driftsenter interessant, bør
tilgangen opprettholdes.

### 6.2 ssh innlogging

  
Relevant driftspersonale ved institusjonen gis brukertilgang til
verktøykassene. Brukertilgang er bl.a. nødvendig for å håndtere
tftp-tjenesten. Det er også nødvendig for å se i loggfiler, se i netflow
rådatafiler (men her er det meste tilgjengelig via web) og i database
m.m. Drifspersonale gis også et tilstrekkelig sett av sudo rettigheter
slik at man lokalt kan restarte nav, apache, nfsen m.m. Det forutsettes
at lokalt driftspersonale har en brukeradferd som samsvarer med de
privilegier som er gitt.

Alle brukere som opprettes registreres med fullt navn og foretrukket
brukernavn. De setter og endrer selv passord i tråd med god
sikkerhetspraksis. ssh nøkler kan med fordel benyttes.

I tillegg til lokalt definerte brukere gis UNINETT driftspersonell også
personlig brukertilgang. Dette er særlig hensiktsmessig i de tilfeller
der assistanse relatert til vedlikehold av aksesslister/pakkefilter er
ønskelig. Ved å sette verktøykassen på nett gir institusjonen implisitt
aksept for en slik tilgang. Det er dog mulig for institusjonen å
reservere seg mot dette, da gjennom eksplisitt avtale med UNINETT.

Listen over definerte brukere blir gjenstand for årlig revisjon av
UNINETT i samarbeid med institusjonen.

### 6.3 Radius-base for nettelektronikk

  
Verktøykassene inneholder også en brukerbase for radiustjenesten.
Tjenesten er myntet på å regulere tilgang til innlogging på svitsjer,
rutere og basestasjoner i campusnettet. Lokale brukere som skal ha slik
tilgang opprettes av UNINETT på forespørsel. Dersom ikke annet er avtalt
gis personer omfattet under 6.2 også tilgang her, dette vil også
inkludere personell ved UNINETT.

## 7. Sikring av sensitive data

  
UNINETT er kjent med gjeldende lovgivning og forholder seg til denne.
UNINETT har bl.a. etter ekomloven som tilbyder av elektronisk
kommunikasjonsnett ikke adgang til å utlevere annet enn statistiske
opplysninger om trafikken i nettet.

Vi forholder oss til forskrift om behandling av personopplysninger
(personopplysningsforskriften). For verktøykassene kan netflow data med
detaljer om gjøremål til en IP-adresse karakteriseres som
personopplysninger. Som systemadministrator og/eller i sikkerhetsøyemed
skal det bemerkes at vi er fritatt for meldeplikt, jfr [§7-11 i
personopplysningsforskriften](http://www.lovdata.no/for/sf/fa/ta-20001215-1265-009.html#7-11).

Under alle omstendigheter, siden vi her snakker om institusjonens
persondata, vil UNINETT bare i overenstemmelse med institusjonen selv
søke i og/eller hente frem slike data. Fremhentede data vil aldri bli
publisert eller gjort offentlig tilgjengelig, de blir kun gjort
tilgjengelig for driftspersonell ved institusjonen og/eller i tråd med
ønsket praksis som her gjelder.
