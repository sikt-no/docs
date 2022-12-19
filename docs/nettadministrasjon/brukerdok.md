<?php
$mal_kontaktadresse="kontakt@uninett.no"; // obligatorisk
$mal_temabilde="teknisk";                     // obligatorisk, se liste på
                                        // www.uninett.no/info/info/bilder.html
$mal_blurb="";          // valgfritt (tekst under bilde)
$mal_kontekst="";                       // valgfritt
$mal_overskrift="Brukerdokumentasjon Verktøykasser"; // obligatorisk
$mal_modus="";                          // valgfritt
$mal_tittel="";                         // valgfritt, normalt blir tittelen
                                        // tjener: kontekst - overskrift - modus
include "uninetttopp.php3";
?>

<dl>
  <dt>REVISJON:
  <dd>Verktøykasse-brukerdok.2022.01
  <dt>ANSVARLIG:
  <dd>Morten.Brekkevold@sikt.no
  <dt>DATO:
  <dd>2022-04-06
</dl>

<hr>

<p align=center>
[<a href="#Brukertilgang">Brukertilgang</a>]
[<a href="#tftp">tftp</a>]
[<a href="#radius">Radius</a>]
[<a href="#syslog">Syslog</a>]
[<a href="#nav">NAV</a>]
[<a href="#sertifikathandtering">Sertifikathåndtering</a>]
[<a href="#netflow">Netflow/NfSen</a>]
[<a href="#console">Konsoll</a>]
[<a href="#cmdline">Commandline tools</a>]
[<a href="#hobbit">Hobbit/Xymon </a>]
[<a href="#fwbuilder">Firewall Builder</a>]
</p>

<h2>Innledning</h2>
<p>

Dette dokument er myntet på lokalt IKT driftspersonell ved
høgskole/universitet som er bruker av verktøykassen.
Verktøykassene er som kjent drevet fra Sikt. Driftsinstruks
for Sikt Service Center og beredskapsvakt
<a
href="https://kind.uninett.no/driftwiki/instruks/vk/index.html">foreligger
i tillegg.</a> For en generell beskrivelse av verktøykassetjenesten, se
<a href="https://www.uninett.no/verkt%C3%B8ykasse">her</a>.

</p>
<p>
For å benytte flere av tjenestene på verktøykassen kreves naturlig nok relevant
konfigurasjon av nettutstyret. Vi viser
til <a href="https://www.uninett.no/ufs/nett">Uninett fagspesifikasjoner
(UFS-er)</a>.
</p>

<p>
Vi minner også om at svitsjene i campusnettet bør (les: <em>må</em>) være på
en forsvarlig programvareversjon.
</p>

<h2><a name="vedlikeholdsvindu">Vedlikeholdsvindu</a></h2>

<p>
  Tjenesten har fast vedlikeholdsvindu på <strong>tirsdager mellom klokken 10:00 og
    11:00</strong>.
</p>

<p>
  I dette tidsrommet kan det bli utført mindre oppgraderinger og omstart av
  maskinvaren, hovedsakelig i forbindelse med sikkerhetsoppdateringer, uten at
  det blir gitt nærmere beskjed i forkant. Det kan forekomme merkbare
  driftsforstyrrelser.
</p>

<h2><a name="Sikkerhetsdirektiv">Sikkerhetsdirektiv for verktøykassene</a></h2>

<p>
Sikt har driftsansvar for verktøykassene, se definert
<a href="sikkerhetsdirektiv.html">sikkerhetsdirektiv</a> for detaljer rundt
drift- og sikkerhetsopplegget.
</p>

<p>
Siden driftsansvaret ligger til Sikt er ryddigste løsning at <em>kun</em>
Sikt har root-privilegier på verktøykassene. Vi er naturligvis opptatt
av at dere som brukere kan gjøre tilstrekkelig for å rette feil
rundt applikasjonene m.m. Dette gjør vi ved å gi dere nødvendige
sudo-rettigheter, samt lesetilgang til filer (se Brukertilgang under).
</p>

<h3><a name="kontaktpunkt">Kontaktpunkt</a></h3>

<ul>
  <li>
    For driftshenvendelser, ta kontakt med <a href="mailto:kontakt@sikt.no">kontakt@sikt.no</a>
  </li>
  <li>
    For diskusjon/spørsmål om bruk av verktøyene, bruk <a href="mailto:vk@uninett.no">vk@uninett.no</a>.<br>
    Alle som er registrert i Sikts driftsdatabase som teknisk ansvarlig for en verktøykasse ute hos en kunde blir automatisk abonnent på denne listen.
  </li>
  <li>
    Se ellers <a href="https://sikt.no/kontakt-oss">kontaktadresser og telefonnumre på våre hjemmesider</a>
  </li>
</ul>
<h2><a name="Brukertilgang">Brukertilgang til verktøykassen</a></h2>

<p>
For å logge inn på verktøykassen med ssh må du ha bruker.
Du bør være medlem av gruppen <tt>netops</tt>, da det bl.a. gir
filrettigheter under <tt>/tftpboot</tt>. Videre vil du om du kjører
<tt>/bin/bash</tt> få satt hensiktsmessig <tt>umask</tt> for
tftp-tjenesten.
</p><p>

For å legge til ny bruker gjør administrator:
<pre>
  useradd -g netops -m -s /bin/bash &lt;nyperson&gt;
  passwd &lt;nyperson&gt;
</pre>
<p>
Merk at det er det samme passord som blir brukt ved
radiusautentisering mot nettelektronikken. Merk også at det
kan bli endringer her, SSH-nøkler for SSH-innlogging er
svært aktuelt.
</p>

<p>Alle brukere som er i gruppe <kbd>netops</kbd> gis (via <em>sudo</em>)
tilgang til å gjøre noen kommandoer som normalt trenger
root-tilgang. For å se hvilke sudo-muligheter man har kan man kjøre
kommandoen:

<pre>
  sudo -l
</pre>

</p>

<p>Blant kommandoene som kan kjøres via sudo er:</p>

<dl>

  <dt><kbd>nav</kbd><dt>
  <dd>Generell kommando for å kontrollere nav</dd>

  <dt><kbd>service apache2 reload</kbd><dt>
  <dd>Relaste konfigurasjon for webtjeneren</dd>

  <dt><kbd>service nfsen [start|stop]</kbd><dt>
  <dd>Starte/stoppe NfSen</dd>

</dl>

<p>For å relaste apache webtjeneren kan man feks kjøre kommandoen:</p>

<pre>
  sudo service apache2 reload
</pre>
</p>

<h2><a name="tftp">tftp</a></h2>

<p>
tftp-tjenesten gjør det mulig å skrive og laste konfigurasjon
til/fra nettutstyret. tftp-demonen er sikret med en
konfigurasjonsfil <tt>/tftpboot/tftpd.conf</tt>. For å forenkle
vedlikehold blir denne filen autogenerert etter følgende kjøreregler.
</p><p>
Når en ny svitsj skal legges til i tftp konfigurasjonen:
<ol>
<li> Legg til svitsjen i <tt>/tftpboot/tftpd.txt</tt>
     Syntaks sees lett i fila:
<pre>
	 "svitsj"        	"ipadresse"
eks: 	lillehammer-gsw  	128.39.3.44
</pre>
<li> Etter at <tt>tftpd.txt</tt> er redigert, kjør <tt>make</tt> (du står på
<tt>/tftpboot</tt>)
     Vips, så er ny <tt>tftp.conf</tt> laget.
<li> Du må da opprette den nye filen med <tt>touch "svitsj-confg"</tt>
(eks: <tt> touch lillehammer-gsw-confg </tt> )
<li> Nå kan du fra svitsjen skrive konfigurasjonen til verktøykasse
med <tt>write network</tt>.
</ol>
Tilsvarende kan bokser slettes fra <tt>tftpd.txt</tt> /
<tt>tftpd.conf</tt>.
<ul>
<li> Merk: På sikt vil vi søke å automatisere
denne manuelle vedlikeholdsprosessen ved å bruke NAV som kilde.
Dvs at du kun legger inn utstyr i NAV, utstyret vil da automagisk
kunne bruke tftp-tjenesten.
</ul>
<p>

For å bevare historikk på konfigurasjon benyttes RCS. Opplegget er
automatisert ved at en nattlig cronjobb sjekker inn ny versjon av alle
filer som er endret. Alle endringer blir rapportert som epost til
mottagere angitt via variabelen <tt>nocoperators</tt> i fila
<tt>/etc/default/uninett.conf</tt> (merk at denne filen er styrt av
Sikts Puppet, ta kontakt med <a href="mailto:kontakt@sikt.no">kontakt@sikt.no</a> for å få gjort
endringer). En varsling om låste RCS filer (avglemte innsjekkinger)
blir også sendt periodisk til samme adresse.
</p><p>

<ul>
<li> I tillegg til konfigurasjoner ligger også aksesslistefiler
på <tt>/tftpboot</tt>. Vedlikehold av disse og arbeid med aksesslister
generelt er ikke omtalt her. Se <tt>README</tt> fil på <tt>/tftpboot</tt>
for mer info på dette.
<li> En siste ting som ligger på <tt>/tftpboot</tt> er software imager.
Disse kan lastes til svitsjer for oppgradering.
</ul>


<h2><a name="radius">Radius</a></h2>

<p>
Det er ingen bruker-konfigurasjon forbundet med radius som trengs å
konfigureres på verktøykassene. Dette fordi radius er satt opp
til bruke <tt>/etc/passwd</tt> som sin brukerkilde. Dersom brukerne her
har satt passord blir dette benyttet ved radiusautentisering.
Dersom bruker på nettutstyret logger seg på med <tt>@uninett.no</tt>-endelse
så er radiustjener på verktøykassen satt opp til
å relée forespørsler til radiustjener på <tt>trane.uninett.no</tt>.
Således kan Sikt drift komme inn (dersom ønskelig).
</p><p>

Det som imidlertid må konfigureres er
<tt>/etc/freeradius/clients.conf</tt>
</p><p>

Eksempel fra HiL:

<pre>
client 128.39.109.0/26 {
   secret       = felles-hemmelighet
   shortname    = hil-mngmt
}
</pre>
</p><p>

Det vi angir her at alle svitsjene i området 128.39.109.1-63 tillates
å snakke radius med verktøykassen gitt at de er konfigurert med
samme felles-hemmelighet. Endringer i <tt>/etc/freeradius/clients.conf</tt>
styres med Puppet og må meldes inn til <a href="mailto:kontakt@sikt.no">kontakt@sikt.no</a>.
</p>


<h2><a name="syslog">Syslog</a></h2>

All nettelektronikk bør syslogge til verktøykassen.
Syslog er satt opp slik at alle meldinger logget til verktøykassen fra nettverket på facility <tt>local6</tt> og <tt>local7</tt> blir lagret i disse to filene:
<pre>
/var/log/network.log
/var/log/network_nav.log
</pre>

Sistnevnte fil blir igjen lest og tømt av NAV sin bakgrunnsprosess
<tt>logengine</tt> som kjører én gang i minuttet. Dataene blir lagt i NAVs
syslog-database og er igjen søkbare gjennom NAVs Syslog Analyzer tool.
</p><p>

<tt>network.log</tt> blir ikke tømt, men komprimert og rotert en gang i
døgnet. Dere kan således velge å søke i syslog i tekstmodus, direkte på
verktøykassen, eller via NAV.
</p>

<h2><a name="nav">NAV</a></h2>

<p>NAV er omfattende å forklare. Vi viser her
til <a href="https://nav.readthedocs.io/en/latest/">NAVs egen
dokumentasjon</a>.  Litt starthjelp:
</p>


<h3>Web brukeradministrasjon</h3>
<p>
Det er ikke noe dokument som beskriver hvordan du oppretter brukere og
hvordan du tilordner brukere til grupper. Helt kort; dette gjør du
under verktøyet <em>User and API Administration</em>. Det er rett frem å legge til brukere, men
husk at de må tilordnes en eller flere grupper.  Merk også at du
kan redigere privilegiene til en gruppe. Se f.eks på gruppen <em>ReadAll</em>,
her vil du se at denne har et <var>web_access</var>-privilegie som gir
tilgang til en del verktøy, men ikke alle. Dette gir deg en ide om
hvordan <var>web_access</var>-privilegier kan justeres. Merk at det er mulig
å bruke LDAP til brukerautentisering. Du må da gjøre innstillinger i
fila <var>/etc/nav/webfront/webfront.conf</var>.
</p>

<h3>Sett velkomstmelding m.m.</h3>
<p>
  En rekke filer i katalogen <var>/etc/nav/webfront/</var> kan redigeres
  for å tilpasse innholdet i forside-widgetene for velkomstmelding og lenker.
</p>

<h3>Sett mottaker av NAV-adminstrativ epost</h3>
<p>
  All administrativ epost fra NAV sendes til driftspersonell hos
  Sikt, som konfigurert av <em>Puppet</em> i variabelen
  <var>ADMIN_MAIL</var> i filen <var>/etc/nav/nav.conf</var>.  Dersom du
  ønsker kopier av denne eposten, ta kontakt med Sikt.
</p>

<h3>Sett passord til NAVs PostgreSQL-database</h3>
<p>
  Dette er satt for deg.  Passordet kan leses fra attributten
  <var>userpw_nav</var> i filen <var>/etc/nav/db.conf</var>.  Merk at
  du kan aksessere denne databasen ved å bruke dette passordet når du
  skriver <kbd>psql nav nav</kbd>. For dypere feilsøking, eller dypere
  forståelse av databasen er dette nyttig.
</p>

<h3> &quot;Seede&quot; databasen:</h3>
<p>

  For at NAV skal overvåke nettverket ditt må den få &quot;seed&quot;-informasjon
  fra deg. Du bruker verktøyet <em>Seed Database</em> (fra
  Toolbox) til dette. Les mer om hvordan du
  <a href="https://nav.readthedocs.io/en/latest/intro/getting-started.html#seeding-your-database"
  >legger inn seed-data i NAV</a> og <a
  href="https://nav.readthedocs.io/en/latest/intro/getting-organized.html"
  >hvordan du organiserer informasjonen</a> i NAVs offisielle dokumentasjon.

<h3> Varslingssystemet Alert Profiles</h3>
<p>
  Varslingssystemet er nokså omfattende med mange muligheter. For å
  forenkle initielt oppsett er det en rekke forhåndsdefinerte filtre
  og filtergrupper du kan bruke.  Les <a
  href="https://nav.uninett.no/wiki/alertprofiles">wiki-siden om Alert
  Profiles</a> for en introduksjon til systemet.
</p>

<h3>Sjekk status på bakgrunnsprosesser og logger</h3>
<p>
  <ul>
    <li> Kommandoen <kbd>sudo nav status</kbd> gir status på om
         NAVs ulike bakgrunnsprosesser og cronjobber er aktive.</li>

    <li> Innsamlingsmotoren <em>ipdevpoll</em> logger (bl.a.) til
         <var>/var/log/nav/ipdevpoll.log </var> </li>

    <li> I samme katalog se tilsvarende log for
	 <var>navtopology.log</var>  (topologioppdageren)
	 <var>pping.log</var> (statusmonitoren),
	 <var>servicemon.log</var> (tjenesteovervåkeren),
	 <var>thresholdmon.log</var> (terskelovervåkeren),
	 <var>eventengine.log</var> (hendelsessystemet) og
	 <var>alertengine.log</var> (alarmsystemet). </li>
  </ul>
</p>

<h3><a name="feilsok-sms">Feilsøking av mobiltelefon/SMS-utsending</a></h3>

<p>Dersom du har problemer med utsending av SMS fra verktøykassen, kan du gjøre litt førstelinjes feilsøking før du feilmelder situasjonen til <a href="mailto:kontakt@sikt.no">kontakt@sikt.no</a>.
</p>

<ul>
  <li><p>Dersom mobilen/GSM-enheten er koblet til med en USB, verifisér at mobilen/GSM-enheten er synlig på USB-bussen:
      <kbd>lsusb</kbd></p>
      <p>Forventet output skal ligne på dette</p>
      <pre>Bus 004 Device 001: ID 0000:0000
Bus 003 Device 001: ID 0000:0000
Bus 002 Device 001: ID 0000:0000
Bus 001 Device 003: ID 0fce:d057 Sony Ericsson Mobile Communications AB
Bus 001 Device 001: ID 0000:0000
</pre>
      <p>
        Dersom det er en GSM-enhet tilkoblet med USB-dongle er det donglen,
        og ikke GSM-enheten som blir identifisert. Se siste linje:
      </p>
      <pre>Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 005 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 006 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
Bus 005 Device 002: ID 0a81:0205 Chesen Electronics Corp. PS/2 Keyboard+Mouse Adapter
Bus 005 Device 003: ID 0403:6001 Future Technology Devices International, Ltd FT232 USB-Serial (UART) IC
</pre>
  </li>

  <li>Verifisér at Gammu klarer å gjenkjenne den tilkoblede mobiltelefonen:
      <kbd>sudo -u navcron gammu --identify</kbd>
  </li>

  <li>Verifisér at mobiltelefonen har forbindelse med GSM-nettverket:
      <kbd>sudo -u navcron gammu --networkinfo</kbd>
  </li>

  <li>Verifisér at Gammu kan sende SMS-meldinger til din telefon:
      <kbd>echo "Melding" | sudo -u navcron gammu --sendsms TEXT &lt;tlfnr&gt;</kbd>
  </li>

  <li>Verifisér at NAVs SMS-daemon kan sende SMS-meldinger til din telefon:
      <kbd>sudo -u navcron smsd.py -t &lt;tlfnr&gt;</kbd>
  </li>
</ul>


<h3><a name="nav-radius-accounting">Sette opp NAV/verktøykassen for Radius Accounting-logging</a></h3>

<p>NAV tilbyr <a
href="https://nav.uninett.no/wiki/radius">brukersporing via
accounting-logging fra FreeRADIUS-tjenere</a>.  Dette krever en del
aktiv inngripen fra din egen side.</p>

<p>Der man har en FreeRADIUS-tjener som autentiserer
brukerinnlogginger, må denne konfigureres til å logge accounting-data
til NAVs PostgreSQL-database.  I tillegg bør man sette opp et
Python-program på FreeRADIUS-tjeneren som overvåker error-loggen dens
og dytter disse innslagene til samme PostgreSQL-database.  <a
href="https://nav.uninett.no/wiki/radius">Fremgangsmåten er dokumentert
på NAV-wikien.</a></p>

<p>Deretter må Sikt gjøre konfigurasjonsendringer på
verktøykassens PostgreSQL-database, slik at denne tillater innlogging
fra din FreeRADIUS-tjener.  Meld inn følgende detaljer til <a
  href="mailto:kontakt@sikt.no">kontakt@sikt.no</a>:
</p>
  <ul>
    <li>At du ønsker å sende FreeRADIUS accounting-logger til verktøykassen.</li>
    <li>IP-adressen(e) til din(e) FreeRADIUS-tjener(e).</li>
  </ul>

<p>Sikt vil sørge for at det opprettes en PostgreSQL-bruker for
radius accounting, og at denne gis tilgang til de riktige tabellene i
NAV fra de gitte IP-adressene.  Du vil få et brukernavn og et passord
til PostgreSQL-databasen, som skal brukes til å konfigurere
FreeRADIUS-tjeneren med.  </p>

<h2><a name="sertifikathandtering">Sertifikathåndtering</a></h2>

<p>
  Webtjeneren på verktøykassen er bare tilgjengelig over <em>HTTPS</em>. Dette
  krever et tjenersertifikat. Vi bruker i
  dag <a href="https://letsencrypt.org/">Let's Encrypt</a> til å automatisk
  utstede sertifikater til webtjeneren.
</p>

<p>
  Let's Encrypt krever i utgangspunktet at webtjeneren er tilgjengelig fra
  sine IP-adressser for å kunne utfordre den til å bevise sin identitet. Disse
  IP-adressene offentliggjøres ikke, og Let's Encrypt forbeholder seg retten
  til å endre disse når som helst, uten forvarsel. Webtjeneren på verktøykassen
  holder de nødvendige URLene åpne for verden, men kan ellers begrense aksess
  til et valgfritt sett med IP-adresser. Henvend deg til vårt kontaktpunkt
  dersom du ønsker endringer i restriksjonene.
</p>

<h2><a name="netflow">Netflow/NfSen</a></h2>

<p>
Verktøykassene bruker <a
href="http://nfsen.sourceforge.net/">NfSen</a> for å prosessere
netflowdata som blir eksportert fra rutere. NfSen er et web-basert
grensesnitt til <a href="http://nfdump.sourceforge.net/">nfdump
netflow tools</a>.
</p>

<p>
Dette grensesnittet er tilgjengelig via NAV sin toolbox.
</p>

<p>
Nfsen ser ut til å være litt kilen mhp. på å definere nye
netflow-eksportører ('sources') etter at systemet er startet , så det
er lurt å ha alle disse klart på forhånd, og legge alle inn før
systemet startes opp.</p>

<p>
Kildene defineres under <kbd>sources</kbd> i
<kbd>/etc/nfsen/nfsen.conf.local</kbd>. Denne filen konfigureres av Puppet; eventuelle endringsønsker må meldes til Sikt.
</p>

<p>
Mere inngående detaljer angående bruk av nfsen står på <a href="http://nfsen.sourceforge.net/">nfsen</a> sine hjemmesider.
</p>

<p>
Generelt om Netflow:
<ul>
<li>En flow er definert som et sett av IP pakker som har en del felles felt i pakkehodet.
<li>De felt som brukes for å identifisere flows er:
<ul>
<li> Source IP adress
<li> Destination IP adress
<li> Source port number
<li> Destination port number
<li> Protocol type
<li> Type of service
<li> Input interface
</ul>
</ul>
</p><p>
Grafene:
<ul>
<li>Grafene vil vise trafikk-mønsteret til kildene man eksporterer netflow-data ifra. Default er det satt opp slik at grafene er "stacked". Dvs. at dersom man eksporterer ifra flere kilder (har flere farger på grafene), legges den ene grafen på toppen av den andre. Dette kan man endre ved å trykke på line graph på details-fanen. Her kan man også endre til logaritmisk skala.
<li>Under Graphs-fanen kan man se større grafer for henholdsvis Flows, Packets eller Traffic.
<li>Under Details-fanen kan man se detaljer for enten Flows, Packets eller Traffic. Man kan velge en av de andre i de små thumbnailene på høyresiden.
<li>Dersom man vil ekskludere en kilde ifra grafene, kan man trykke på krysset under <kbd>source</kbd> for hver kilde.
</ul>
</p><p>

Hvordan grave i detaljene:
<ul>
<li>Angi tidsperiode
<li>Dette gjør du enten ved å la den stå på <kbd>Single Timeslot</kbd> (5 min) under grafen, eller du velger en lengre tidsperiode med å velge <kbd>Time Window</kbd> under grafen og drar på pila som er nederst på grafen. Tidspunktet blir avmerket med grønn farge i grafen
</ul>

List Flows vs. Stat TopN:
<ul>
<li> <kbd>List Flows</kbd> viser hele flows, og gjør ingen sortering basert på statistikk. Her vil det kun vises de antall flows man har valgt som først stemmer med det utvalget man har valgt. Man kan også aggregere data basert på de valgene man gjør.
<li> <kbd>Stat TopN</kbd> viser statistisk analyse og sorterer output basert på valgene du gjør.
<li> <kbd>Stat Any IP Address order by bytes</kbd> vil f.eks gi deg en liste over de som har overført mest data i valgt tidsperiode.
</ul>

Søk i netflow dataene:
<ul>
<li>tcpdump-aktig filter format
<li>Eks.:
<ul>
<li><tt>host 158.38.x.y</tt> (Filtrerer ut all trafikk til/fra host 158.38.x.y)
<li><tt>src host 158.38.w.x and dst host 158.38.y.z</tt> (Filtrerer ut all trafikk
mellom disse to hostene der trafikken kommer fra 158.38.w.x og sendes til 158.38.y.z, src=source, dst=destination)
<li><tt>proto tcp and src host 158.38.x.y</tt> (Filtrerer ut all tcp trafikk sendt
ifra 158.38.x.y)
<li><tt>src host 158.38.w.x or host 158.38.y.z</tt> (Filtrerer ut trafikk fra host
158.38.x.y eller all trafikk til/fra host 158.38.y.z)
<li><tt>src host 158.38.x.y and src port 22</tt> (Filtrerer ut all trafikk fra
host 158.38.x.y der trafikken er sendt ifra port 22(ssh))
<li><tt>src port gt 80 and src port lt 123</tt> (Filtrerer ut trafikk sendt ifra
portene mellom 80 og 123, gt= greater than, lt=less than)
<li><tt>src port 80 and not host 158.38.x.y</tt> (Filtrerer ut trafikk sendt ifra port 80 og som ikke er sendt til/fra host 158.38.x.y)
<li><tt>src net 158.38.x.0/24</tt> (Filtrerer ut trafikk sendt ifra nettet 158.38.x.0/24)
<li>Ett annet triks er å angi hvilke interface man skal plukke ut trafikk ifra. Eks. <tt>in if 24</tt>, vil kun plukke ut trafikk som kommer inn på interface 24. Hvilket nummer et interface har på et cisco-ruter finner man ut med kommandoen <tt>show snmp mib ifmib ifindex</tt>. (Husk at netflow kun eksporteres fra trafikk inn på et interface. Trafikk ut på et interface vil ikke bli eksportert, og må følgelig filtreres ut fra det interfacet hvor denne trafikken kommer inn.) Skriver man derfor <tt>out if 24</tt> vil dette da bety det samme som, gi meg all trafikk <b>inn</b> på alle interface bortsett fra 24.
</ul>
</ul>

Ferdigdefinerte filter man bruker ofte:
<ul>
<li>Disse kan lagres som filer i filsystemet under katalogen <tt>/var/lib/nfsen/filters</tt>
<li>Vanlig filtersyntaks brukes i disse filene også.
<li>Ferdigdefinerte filtre velges under boksen man skriver inn filtre der det vanligvis står <tt>and none</tt>
</ul>

Lage profiler:<br>
For søk man gjør ofte og som man vil følge med grafisk over tid kan det være lurt å lage egne profiler som har oversikt over denne trafikken. Dersom man velger Real Profile lager dette egne flow-filer på filsystemet (som også tar plass). Dersom du lager en profil som er langt tilbake i tid, så kan det ta lang tid for nfsen å lage grunnlagsdata for hele perioden. Dersom du lager en Shadow Profile, lager den ikke egne flow-filer på filsystemet, men den bruker bare datagrunnlaget som allerede ligger der. Du vil likevel få tegnet egne grafiske profiler for dataene du vil filtrere ut. Bruk av channels gjør at du kan skreddersy grafene og fargene etter dine behov. Se <a href="http://nfsen.sourceforge.net/">dokumentasjon på sourceforge</a> for detaljer.
<ul>
<li><tt>Profile</tt> står øverst i høyre hjørne.
<li>Normalt vises Profile "live"
<li>Velg <tt>New profile</tt>
<ul>
<li>lag en profil som plukker ut all trafikk av en gitt type, basert på filtre du definerer.
<li>Navngi denne rapporten.
<li>Velg en kilde
<li>Basert på hvor mye data som skal prosesseres tar det en hvis tid å prosessere og lage denne profilen
<li>Vis profilen etterpå ved å velge denne fra selected profile
</ul>
</ul>

Alert:<br>
<ul>
<li>I nyeste utgave av nfsen kan man lage terskelbaserte alarmer.
<li>Dokumentasjonen på <a href="http://nfsen.sourceforge.net/#mozTocId859236">nfsen sine sider</a> sier viser detaljer for hvordan man oppretter alarmer. OBS: Husk å sette/endre filteret for alarmen dersom du ønsker å teste dette. Default står den på 'not any' som ikke vil gi deg noe trafikk!
</ul>

<h3>Feilsøking av nfsen</h3>
Dersom du har problemer med nfsen er det ett par ting man kan sjekke foer man melder feil.
<ul>
<li>Går alle nødvendige prosesser?<br>
1 nfsend og 1 nfcapd per kilde(netflow-eksportør) Dersom ikke restart nfsen.
<li>Mottar du flows fra kilde?<br>
Bruk gjerne tcpdump for å sjekke om du mottar flows. F.eks <tt>tcpdump port 2055</tt> Hvilken port du lytter på kan du finne i <tt>/etc/nfsen/nfsen.conf.local</tt> under sources. Dersom ikke, sjekk ruterconfig og access-lister.
</ul>

<h2><a name="cmdline">Command line tools</a></h2>

En del kjekke command line tools er installert på verktøykassene.
Her følger en liste og kort omtale:

<ul>
  <li> ping og traceroute (trenger vel ingen kommentar)</li>
  <li> snmpwalk (m.fl.)<br>
    Brukes til å polle utstyr med snmp, kjekt for NAV feilsøking.
    <pre>
     Typisk syntaks:
        snmpwalk -v2c -c <din-community> <ip-adresse> <oid>
     Eks:
        snmpwalk -v2c -c public 10.10.10.1 ifinoctet
        (henter inoctet tellere fra boks 10.10.10.1)
    </pre>
  </li>
  <li> nmap <br>
    Brukes til scanne en host/sjekke om en port/sett av porter
    er åpne.
  </li>
</ul>

<h2><a name="hobbit">Hobbit/Xymon</a></h2>
Brukerdokumentasjon for Hobbit, se <a href="https://drift.uninett.no/utstyr/vk/hobbit-vk.html"> her </a>

<h2><a name="fwbuilder">Firewall Builder (fwbuilder)</a></h2>
<a href="http://drift.uninett.no/utstyr/vk/fwbuilder.html">Brukerdokumentasjon for Firewall Builder foreligger på en egen side</a>.

<?php
include "uninettbunn.php3";
?>
