<?php
$mal_kontaktadresse="gigacampus@uninett.no"; // obligatorisk
$mal_temabilde="teknisk";                     // obligatorisk, se liste på
                                        // www.uninett.no/info/info/bilder.html
$mal_blurb="";          // valgfritt (tekst under bilde)
$mal_kontekst="";                       // valgfritt
$mal_overskrift="Sikkerhetsdirektiv for GigaCampus verktøykasser"; // obligatorisk
$mal_modus="";                          // valgfritt
$mal_tittel="";                         // valgfritt, normalt blir tittelen
                                        // tjener: kontekst - overskrift - modus
include "uninetttopp.php3";
?>

<dl>
  <dt>REVISJON:
  <dd>Verktøykasse-sikkerhetsdirektiv.2006.01
  <dt>ANSVARLIG:
  <dd>Vidar.Faltinsen@uninett.no
  <dt>DATO:
  <dd>2006-11-30
</dl>

<hr>

<ol>
<li> <a href="#om">Om verktøykassene</a>
<li> <a href="#driftsansvar">Driftsansvar</a>
<li> <a href="#driftsopplegg">Driftsopplegg</a>
<li> <a href="#sikkerhet">Sikkerhet</a>
<li> <a href="#kontaktpunkt">Kontaktpunkt</a>
<li> <a href="#brukertilgang">Brukertilgang til verktøykassene</a>
<ol>
<li> <a href="#web">Web-tilgang (ssl)</a>
<li> <a href="#ssh">ssh innlogging</a>
<li> <a href="#radius">Radius-base for nettelektronikk</a>
</ol>
<li> <a href="#sikring">Sikring av sensitive data</a>
</ol>

<h2><a name="om">1. Om verktøykassene</a></h2>
<p><br>
Verktøykassene er et initiativ som inngår i GigaCampus-programmets satsing
på drift og overvåking. Verktøykassene inneholder et sett av veletablerte, åpen
kildekode baserte overvåkningsprogrammer myntet på proaktiv drift av eget
campusnett.
<p>

For institusjoner som ønsker det, utplasserer UNINETT en verktøykasse
tjenermaskin (evt flere maskiner) ved institusjonen. Utplassert verktøykasse er
primært for institusjonen selv. Det er driftsfolk ved institusjonen som
bruker verktøyene på verktøykassen til daglig drift og overvåking av eget
campusnett. GigaCampus-programmet tilbyr løsningen under parolen "hjelp
til selvhjelp".

<p>
Porteføljen med verktøy som inngår på verktøykassen vil vokse over tid.
Initielt (2006) inngår:

<ol>
<li> Overvåkningssystemet NAV
<li> Netflowportefølje
<li> Konfigurasjonsarkiv for nettelektronikk.
<li> Loggserver
<li> Autentiseringstjeneste for nettelektronikk
</ol>

De initielle verktøyene er under kontinuerlig videreutvikling og nye verktøy
vil komme til i løpet av programperioden.


<h2><a name="driftsansvar"></a>2. Driftsansvar</h2>
<p><br>

UNINETT ved leder for GigaCampus-programmet har driftsansvar for
verktøykassene. Drift garanteres for hele GigaCampus programperioden,
frem til 1/1 2010.
<p>
UNINETT står ansvarlig for at systemarbeid og UNINETT brukertilgang
ivaretar hensyn til personvern og regelverk.
<p>
Løpende systemdrift håndteres av autorisert systemdriftspersonale ved
UNINETT. Det skal til enhver tid forefinnes en liste over personer
som har administratortilgang til verktøykassene. Disse skal alle ha
underskrevet en taushetserklæring.
<p>
Institusjonen står ansvarlig for at verktøykassen er plassert i fysisk
sikrede omgivelser, på et godt sikret nettsegment (jfr også kap 4).

<h2><a name="driftsopplegg">3. Driftsopplegg</a></h2>
<p><br>
UNINETT håndterer anskaffelse, initiell idriftsetting og løpende
vedlikehold/drift. Verktøykassa er rackmonterbare IBM-servere som kjører Debian.
Cfengine benyttes i driftsløsningen. Dette gir mange fordeler, blant
annet sentralisert konfigurasjon og administrasjon, herunder fortløpende
pakkeoppdatering m.m. I tillegg tar UNINETT backup av lokale
konfigurasjonsfiler, brukerdata og data som produseres av verktøyene.
Et unntak er netflow rådata.
<p>
UNINETT driftsenter og UNINETT beredskapsvakt overvåker verktøykassene døgnkontinuerlig,
herunder at alle tjenester går. Vi monitorer diskfyllingsgrad, cpu- og minneforbruk m.m.
Tiltak blir truffet ved insidenter. Ved evt alvorlig maskinvarehavari har UNINETT
reservedelslager og skal så raskt som mulig reetablere ny maskin, sende
denne ut og få verktøykassen operativ igjen.


<h2><a name="sikkerhet">4. Sikkerhet</a></h2>
<p><br>
Sikkerhetsoppgradering og dertil tetting av evt sikkerhetshull skal løpende
håndteres av UNINETT.
<p>
Verktøykassene skal i tillegg beskyttes gjennom hensiktsmessig segmentering
og fornuftig anvendelse av pakkefilter i lokalt campusnett. Anbefalte
filterregler blir foreskrevet av UNINETT og skal implementeres lokalt (evt i
samarbeid med UNINETT).


<h2><a name="kontaktpunkt">5. Kontaktpunkt</a></h2>
<p>
<ul>
<li> For alle driftshendelser kontakt UNINETT driftsenter, drift@uninett.no
<li> For brukerstøtte relatert til verktøyene, eller diskusjon om bruk, benytt
  diskusjonslista vk@uninett.no. For diskusjon relatert til
  plan/strategi/videreutvikling, benytt samme liste.
</ul>

<h2><a name="brukertilgang">6. Brukertilgang til verktøykassene</a></h2>
<p><br>
Vi må her skille mellom to ulike tilgangsmåter til verktøykassene; ssh
innlogging og web-tilgang (ssl). Primært grensesnitt er web, men ssh
innlogging er også påkrevd i noen tilfeller.

<h3><a name="web">6.1 Web-tilgang</a></h3>
<p><br>
For web danner NAV sine autentisering- og autorisasjonsmekanismer et rammeverk
for alle installerte verktøy som tilbyr webgrensesnitt. NAV
administratorfunksjonen håndteres av institusjonen selv. NAV administrator kan legge
til og fjerne brukere etter eget behov. NAV administrator kan også
regulere den enkelte webbrukers rettigheter, dvs hvilke verktøy brukeren
skal gis tilgang til.
<p>
Det er ikke påkrevd at UNINETT har tilgang til webgrensesnittet. Ved initiell
installasjon gis UNINETT en slik tilgang, og såfremt institusjon finner
assistanse fra UNINETT driftsenter interessant, bør tilgangen opprettholdes.

<h3><a name="ssh">6.2 ssh innlogging</a></h3>
<p><br>
Relevant driftspersonale ved institusjonen gis brukertilgang til
verktøykassene. Brukertilgang er bl.a. nødvendig for å håndtere
tftp-tjenesten. Det er også nødvendig for å se i loggfiler, se i netflow
rådatafiler (men her er det meste tilgjengelig via web) og i database m.m.
Drifspersonale gis også et tilstrekkelig sett av sudo
rettigheter slik at man lokalt kan restarte nav, apache, nfsen m.m. Det
forutsettes at lokalt driftspersonale har en brukeradferd som samsvarer med
de privilegier som er gitt.
<p>
Alle brukere som opprettes registreres med fullt navn og foretrukket
brukernavn. De setter og endrer selv passord i tråd med god
sikkerhetspraksis. ssh nøkler kan med fordel benyttes.
<p>
I tillegg til lokalt definerte brukere gis UNINETT driftspersonell også
personlig brukertilgang.  Dette er særlig hensiktsmessig i de tilfeller
der assistanse relatert til vedlikehold av aksesslister/pakkefilter er
ønskelig. Ved å sette verktøykassen på nett gir institusjonen implisitt
aksept for en slik tilgang. Det er dog mulig for institusjonen å
reservere seg mot dette, da gjennom eksplisitt avtale med UNINETT.
<p>
Listen over definerte brukere blir gjenstand for årlig revisjon av
UNINETT i samarbeid med institusjonen.

<h3><a name="radius">6.3 Radius-base for nettelektronikk</a></h3>
<p><br>
Verktøykassene inneholder også en brukerbase for radiustjenesten.
Tjenesten er myntet på å regulere tilgang til innlogging på svitsjer,
rutere og basestasjoner i campusnettet. Lokale brukere som skal ha slik
tilgang opprettes av UNINETT på forespørsel. Dersom ikke annet er avtalt
gis personer omfattet under 6.2 også tilgang her, dette vil også
inkludere personell ved UNINETT.


<h2><a name="sikring">7. Sikring av sensitive data</a></h2>
<p><br>
UNINETT er kjent med gjeldende lovgivning og forholder seg til denne.
UNINETT har bl.a. etter ekomloven som tilbyder av elektronisk
kommunikasjonsnett ikke adgang til å utlevere annet enn statistiske
opplysninger om trafikken i nettet.
<p>
Vi forholder oss til forskrift om behandling av personopplysninger
(personopplysningsforskriften). For verktøykassene kan netflow data
med detaljer om gjøremål til en IP-adresse karakteriseres som
personopplysninger. Som systemadministrator og/eller i
sikkerhetsøyemed skal det bemerkes at vi er fritatt for meldeplikt, jfr
<a href="http://www.lovdata.no/for/sf/fa/ta-20001215-1265-009.html#7-11">
§7-11 i personopplysningsforskriften</a>.
<p>
Under alle omstendigheter, siden vi her snakker om institusjonens
persondata, vil UNINETT bare i
overenstemmelse med institusjonen selv søke i og/eller hente frem
slike data. Fremhentede data vil aldri bli publisert eller gjort
offentlig tilgjengelig, de blir kun gjort tilgjengelig for
driftspersonell ved
institusjonen og/eller i tråd med ønsket praksis som her gjelder.


<?php
include "uninettbunn.php3";
?>
