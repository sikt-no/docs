<?php
$mal_kontaktadresse="kontakt@uninett.no"; // obligatorisk
$mal_temabilde="teknisk";                     // obligatorisk, se liste p�
                                        // www.uninett.no/info/info/bilder.html
$mal_blurb="";          // valgfritt (tekst under bilde)
$mal_kontekst="";                       // valgfritt
$mal_overskrift="Brukerdokumentasjon Verkt�ykasser"; // obligatorisk
$mal_modus="";                          // valgfritt
$mal_tittel="";                         // valgfritt, normalt blir tittelen
                                        // tjener: kontekst - overskrift - modus
include "uninetttopp.php3";
?>

<dl>
  <dt>REVISJON:
  <dd>Verkt�ykasse-brukerdok.2022.01
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
[<a href="#sertifikathandtering">Sertifikath�ndtering</a>]
[<a href="#netflow">Netflow/NfSen</a>]
[<a href="#console">Konsoll</a>]
[<a href="#cmdline">Commandline tools</a>]
[<a href="#hobbit">Hobbit/Xymon </a>]
[<a href="#fwbuilder">Firewall Builder</a>]
</p>

<h2>Innledning</h2>
<p>

Dette dokument er myntet p� lokalt IKT driftspersonell ved
h�gskole/universitet som er bruker av verkt�ykassen.
Verkt�ykassene er som kjent drevet fra Sikt. Driftsinstruks
for Sikt Service Center og beredskapsvakt
<a
href="https://kind.uninett.no/driftwiki/instruks/vk/index.html">foreligger
i tillegg.</a> For en generell beskrivelse av verkt�ykassetjenesten, se
<a href="https://www.uninett.no/verkt%C3%B8ykasse">her</a>.

</p>
<p>
For � benytte flere av tjenestene p� verkt�ykassen kreves naturlig nok relevant
konfigurasjon av nettutstyret. Vi viser
til <a href="https://www.uninett.no/ufs/nett">Uninett fagspesifikasjoner
(UFS-er)</a>.
</p>

<p>
Vi minner ogs� om at svitsjene i campusnettet b�r (les: <em>m�</em>) v�re p�
en forsvarlig programvareversjon.
</p>

<h2><a name="vedlikeholdsvindu">Vedlikeholdsvindu</a></h2>

<p>
  Tjenesten har fast vedlikeholdsvindu p� <strong>tirsdager mellom klokken 10:00 og
    11:00</strong>.
</p>

<p>
  I dette tidsrommet kan det bli utf�rt mindre oppgraderinger og omstart av
  maskinvaren, hovedsakelig i forbindelse med sikkerhetsoppdateringer, uten at
  det blir gitt n�rmere beskjed i forkant. Det kan forekomme merkbare
  driftsforstyrrelser.
</p>

<h2><a name="Sikkerhetsdirektiv">Sikkerhetsdirektiv for verkt�ykassene</a></h2>

<p>
Sikt har driftsansvar for verkt�ykassene, se definert
<a href="sikkerhetsdirektiv.html">sikkerhetsdirektiv</a> for detaljer rundt
drift- og sikkerhetsopplegget.
</p>

<p>
Siden driftsansvaret ligger til Sikt er ryddigste l�sning at <em>kun</em>
Sikt har root-privilegier p� verkt�ykassene. Vi er naturligvis opptatt
av at dere som brukere kan gj�re tilstrekkelig for � rette feil
rundt applikasjonene m.m. Dette gj�r vi ved � gi dere n�dvendige
sudo-rettigheter, samt lesetilgang til filer (se Brukertilgang under).
</p>

<h3><a name="kontaktpunkt">Kontaktpunkt</a></h3>

<ul>
  <li>
    For driftshenvendelser, ta kontakt med <a href="mailto:kontakt@sikt.no">kontakt@sikt.no</a>
  </li>
  <li>
    For diskusjon/sp�rsm�l om bruk av verkt�yene, bruk <a href="mailto:vk@uninett.no">vk@uninett.no</a>.<br>
    Alle som er registrert i Sikts driftsdatabase som teknisk ansvarlig for en verkt�ykasse ute hos en kunde blir automatisk abonnent p� denne listen.
  </li>
  <li>
    Se ellers <a href="https://sikt.no/kontakt-oss">kontaktadresser og telefonnumre p� v�re hjemmesider</a>
  </li>
</ul>
<h2><a name="Brukertilgang">Brukertilgang til verkt�ykassen</a></h2>

<p>
For � logge inn p� verkt�ykassen med ssh m� du ha bruker.
Du b�r v�re medlem av gruppen <tt>netops</tt>, da det bl.a. gir
filrettigheter under <tt>/tftpboot</tt>. Videre vil du om du kj�rer
<tt>/bin/bash</tt> f� satt hensiktsmessig <tt>umask</tt> for
tftp-tjenesten.
</p><p>

For � legge til ny bruker gj�r administrator:
<pre>
  useradd -g netops -m -s /bin/bash &lt;nyperson&gt;
  passwd &lt;nyperson&gt;
</pre>
<p>
Merk at det er det samme passord som blir brukt ved
radiusautentisering mot nettelektronikken. Merk ogs� at det
kan bli endringer her, SSH-n�kler for SSH-innlogging er
sv�rt aktuelt.
</p>

<p>Alle brukere som er i gruppe <kbd>netops</kbd> gis (via <em>sudo</em>)
tilgang til � gj�re noen kommandoer som normalt trenger
root-tilgang. For � se hvilke sudo-muligheter man har kan man kj�re
kommandoen:

<pre>
  sudo -l
</pre>

</p>

<p>Blant kommandoene som kan kj�res via sudo er:</p>

<dl>

  <dt><kbd>nav</kbd><dt>
  <dd>Generell kommando for � kontrollere nav</dd>

  <dt><kbd>service apache2 reload</kbd><dt>
  <dd>Relaste konfigurasjon for webtjeneren</dd>

  <dt><kbd>service nfsen [start|stop]</kbd><dt>
  <dd>Starte/stoppe NfSen</dd>

</dl>

<p>For � relaste apache webtjeneren kan man feks kj�re kommandoen:</p>

<pre>
  sudo service apache2 reload
</pre>
</p>

<h2><a name="tftp">tftp</a></h2>

<p>
tftp-tjenesten gj�r det mulig � skrive og laste konfigurasjon
til/fra nettutstyret. tftp-demonen er sikret med en
konfigurasjonsfil <tt>/tftpboot/tftpd.conf</tt>. For � forenkle
vedlikehold blir denne filen autogenerert etter f�lgende kj�reregler.
</p><p>
N�r en ny svitsj skal legges til i tftp konfigurasjonen:
<ol>
<li> Legg til svitsjen i <tt>/tftpboot/tftpd.txt</tt>
     Syntaks sees lett i fila:
<pre>
	 "svitsj"        	"ipadresse"
eks: 	lillehammer-gsw  	128.39.3.44
</pre>
<li> Etter at <tt>tftpd.txt</tt> er redigert, kj�r <tt>make</tt> (du st�r p�
<tt>/tftpboot</tt>)
     Vips, s� er ny <tt>tftp.conf</tt> laget.
<li> Du m� da opprette den nye filen med <tt>touch "svitsj-confg"</tt>
(eks: <tt> touch lillehammer-gsw-confg </tt> )
<li> N� kan du fra svitsjen skrive konfigurasjonen til verkt�ykasse
med <tt>write network</tt>.
</ol>
Tilsvarende kan bokser slettes fra <tt>tftpd.txt</tt> /
<tt>tftpd.conf</tt>.
<ul>
<li> Merk: P� sikt vil vi s�ke � automatisere
denne manuelle vedlikeholdsprosessen ved � bruke NAV som kilde.
Dvs at du kun legger inn utstyr i NAV, utstyret vil da automagisk
kunne bruke tftp-tjenesten.
</ul>
<p>

For � bevare historikk p� konfigurasjon benyttes RCS. Opplegget er
automatisert ved at en nattlig cronjobb sjekker inn ny versjon av alle
filer som er endret. Alle endringer blir rapportert som epost til
mottagere angitt via variabelen <tt>nocoperators</tt> i fila
<tt>/etc/default/uninett.conf</tt> (merk at denne filen er styrt av
Sikts Puppet, ta kontakt med <a href="mailto:kontakt@sikt.no">kontakt@sikt.no</a> for � f� gjort
endringer). En varsling om l�ste RCS filer (avglemte innsjekkinger)
blir ogs� sendt periodisk til samme adresse.
</p><p>

<ul>
<li> I tillegg til konfigurasjoner ligger ogs� aksesslistefiler
p� <tt>/tftpboot</tt>. Vedlikehold av disse og arbeid med aksesslister
generelt er ikke omtalt her. Se <tt>README</tt> fil p� <tt>/tftpboot</tt>
for mer info p� dette.
<li> En siste ting som ligger p� <tt>/tftpboot</tt> er software imager.
Disse kan lastes til svitsjer for oppgradering.
</ul>


<h2><a name="radius">Radius</a></h2>

<p>
Det er ingen bruker-konfigurasjon forbundet med radius som trengs �
konfigureres p� verkt�ykassene. Dette fordi radius er satt opp
til bruke <tt>/etc/passwd</tt> som sin brukerkilde. Dersom brukerne her
har satt passord blir dette benyttet ved radiusautentisering.
Dersom bruker p� nettutstyret logger seg p� med <tt>@uninett.no</tt>-endelse
s� er radiustjener p� verkt�ykassen satt opp til
� rel�e foresp�rsler til radiustjener p� <tt>trane.uninett.no</tt>.
S�ledes kan Sikt drift komme inn (dersom �nskelig).
</p><p>

Det som imidlertid m� konfigureres er
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

Det vi angir her at alle svitsjene i omr�det 128.39.109.1-63 tillates
� snakke radius med verkt�ykassen gitt at de er konfigurert med
samme felles-hemmelighet. Endringer i <tt>/etc/freeradius/clients.conf</tt>
styres med Puppet og m� meldes inn til <a href="mailto:kontakt@sikt.no">kontakt@sikt.no</a>.
</p>


<h2><a name="syslog">Syslog</a></h2>

All nettelektronikk b�r syslogge til verkt�ykassen.
Syslog er satt opp slik at alle meldinger logget til verkt�ykassen fra nettverket p� facility <tt>local6</tt> og <tt>local7</tt> blir lagret i disse to filene:
<pre>
/var/log/network.log
/var/log/network_nav.log
</pre>

Sistnevnte fil blir igjen lest og t�mt av NAV sin bakgrunnsprosess
<tt>logengine</tt> som kj�rer �n gang i minuttet. Dataene blir lagt i NAVs
syslog-database og er igjen s�kbare gjennom NAVs Syslog Analyzer tool.
</p><p>

<tt>network.log</tt> blir ikke t�mt, men komprimert og rotert en gang i
d�gnet. Dere kan s�ledes velge � s�ke i syslog i tekstmodus, direkte p�
verkt�ykassen, eller via NAV.
</p>

<h2><a name="nav">NAV</a></h2>

<p>NAV er omfattende � forklare. Vi viser her
til <a href="https://nav.readthedocs.io/en/latest/">NAVs egen
dokumentasjon</a>.  Litt starthjelp:
</p>


<h3>Web brukeradministrasjon</h3>
<p>
Det er ikke noe dokument som beskriver hvordan du oppretter brukere og
hvordan du tilordner brukere til grupper. Helt kort; dette gj�r du
under verkt�yet <em>User and API Administration</em>. Det er rett frem � legge til brukere, men
husk at de m� tilordnes en eller flere grupper.  Merk ogs� at du
kan redigere privilegiene til en gruppe. Se f.eks p� gruppen <em>ReadAll</em>,
her vil du se at denne har et <var>web_access</var>-privilegie som gir
tilgang til en del verkt�y, men ikke alle. Dette gir deg en ide om
hvordan <var>web_access</var>-privilegier kan justeres. Merk at det er mulig
� bruke LDAP til brukerautentisering. Du m� da gj�re innstillinger i
fila <var>/etc/nav/webfront/webfront.conf</var>.
</p>

<h3>Sett velkomstmelding m.m.</h3>
<p>
  En rekke filer i katalogen <var>/etc/nav/webfront/</var> kan redigeres
  for � tilpasse innholdet i forside-widgetene for velkomstmelding og lenker.
</p>

<h3>Sett mottaker av NAV-adminstrativ epost</h3>
<p>
  All administrativ epost fra NAV sendes til driftspersonell hos
  Sikt, som konfigurert av <em>Puppet</em> i variabelen
  <var>ADMIN_MAIL</var> i filen <var>/etc/nav/nav.conf</var>.  Dersom du
  �nsker kopier av denne eposten, ta kontakt med Sikt.
</p>

<h3>Sett passord til NAVs PostgreSQL-database</h3>
<p>
  Dette er satt for deg.  Passordet kan leses fra attributten
  <var>userpw_nav</var> i filen <var>/etc/nav/db.conf</var>.  Merk at
  du kan aksessere denne databasen ved � bruke dette passordet n�r du
  skriver <kbd>psql nav nav</kbd>. For dypere feils�king, eller dypere
  forst�else av databasen er dette nyttig.
</p>

<h3> &quot;Seede&quot; databasen:</h3>
<p>

  For at NAV skal overv�ke nettverket ditt m� den f� &quot;seed&quot;-informasjon
  fra deg. Du bruker verkt�yet <em>Seed Database</em> (fra
  Toolbox) til dette. Les mer om hvordan du
  <a href="https://nav.readthedocs.io/en/latest/intro/getting-started.html#seeding-your-database"
  >legger inn seed-data i NAV</a> og <a
  href="https://nav.readthedocs.io/en/latest/intro/getting-organized.html"
  >hvordan du organiserer informasjonen</a> i NAVs offisielle dokumentasjon.

<h3> Varslingssystemet Alert Profiles</h3>
<p>
  Varslingssystemet er noks� omfattende med mange muligheter. For �
  forenkle initielt oppsett er det en rekke forh�ndsdefinerte filtre
  og filtergrupper du kan bruke.  Les <a
  href="https://nav.uninett.no/wiki/alertprofiles">wiki-siden om Alert
  Profiles</a> for en introduksjon til systemet.
</p>

<h3>Sjekk status p� bakgrunnsprosesser og logger</h3>
<p>
  <ul>
    <li> Kommandoen <kbd>sudo nav status</kbd> gir status p� om
         NAVs ulike bakgrunnsprosesser og cronjobber er aktive.</li>

    <li> Innsamlingsmotoren <em>ipdevpoll</em> logger (bl.a.) til
         <var>/var/log/nav/ipdevpoll.log </var> </li>

    <li> I samme katalog se tilsvarende log for
	 <var>navtopology.log</var>  (topologioppdageren)
	 <var>pping.log</var> (statusmonitoren),
	 <var>servicemon.log</var> (tjenesteoverv�keren),
	 <var>thresholdmon.log</var> (terskeloverv�keren),
	 <var>eventengine.log</var> (hendelsessystemet) og
	 <var>alertengine.log</var> (alarmsystemet). </li>
  </ul>
</p>

<h3><a name="feilsok-sms">Feils�king av mobiltelefon/SMS-utsending</a></h3>

<p>Dersom du har problemer med utsending av SMS fra verkt�ykassen, kan du gj�re litt f�rstelinjes feils�king f�r du feilmelder situasjonen til <a href="mailto:kontakt@sikt.no">kontakt@sikt.no</a>.
</p>

<ul>
  <li><p>Dersom mobilen/GSM-enheten er koblet til med en USB, verifis�r at mobilen/GSM-enheten er synlig p� USB-bussen:
      <kbd>lsusb</kbd></p>
      <p>Forventet output skal ligne p� dette</p>
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

  <li>Verifis�r at Gammu klarer � gjenkjenne den tilkoblede mobiltelefonen:
      <kbd>sudo -u navcron gammu --identify</kbd>
  </li>

  <li>Verifis�r at mobiltelefonen har forbindelse med GSM-nettverket:
      <kbd>sudo -u navcron gammu --networkinfo</kbd>
  </li>

  <li>Verifis�r at Gammu kan sende SMS-meldinger til din telefon:
      <kbd>echo "Melding" | sudo -u navcron gammu --sendsms TEXT &lt;tlfnr&gt;</kbd>
  </li>

  <li>Verifis�r at NAVs SMS-daemon kan sende SMS-meldinger til din telefon:
      <kbd>sudo -u navcron smsd.py -t &lt;tlfnr&gt;</kbd>
  </li>
</ul>


<h3><a name="nav-radius-accounting">Sette opp NAV/verkt�ykassen for Radius Accounting-logging</a></h3>

<p>NAV tilbyr <a
href="https://nav.uninett.no/wiki/radius">brukersporing via
accounting-logging fra FreeRADIUS-tjenere</a>.  Dette krever en del
aktiv inngripen fra din egen side.</p>

<p>Der man har en FreeRADIUS-tjener som autentiserer
brukerinnlogginger, m� denne konfigureres til � logge accounting-data
til NAVs PostgreSQL-database.  I tillegg b�r man sette opp et
Python-program p� FreeRADIUS-tjeneren som overv�ker error-loggen dens
og dytter disse innslagene til samme PostgreSQL-database.  <a
href="https://nav.uninett.no/wiki/radius">Fremgangsm�ten er dokumentert
p� NAV-wikien.</a></p>

<p>Deretter m� Sikt gj�re konfigurasjonsendringer p�
verkt�ykassens PostgreSQL-database, slik at denne tillater innlogging
fra din FreeRADIUS-tjener.  Meld inn f�lgende detaljer til <a
  href="mailto:kontakt@sikt.no">kontakt@sikt.no</a>:
</p>
  <ul>
    <li>At du �nsker � sende FreeRADIUS accounting-logger til verkt�ykassen.</li>
    <li>IP-adressen(e) til din(e) FreeRADIUS-tjener(e).</li>
  </ul>

<p>Sikt vil s�rge for at det opprettes en PostgreSQL-bruker for
radius accounting, og at denne gis tilgang til de riktige tabellene i
NAV fra de gitte IP-adressene.  Du vil f� et brukernavn og et passord
til PostgreSQL-databasen, som skal brukes til � konfigurere
FreeRADIUS-tjeneren med.  </p>

<h2><a name="sertifikathandtering">Sertifikath�ndtering</a></h2>

<p>
  Webtjeneren p� verkt�ykassen er bare tilgjengelig over <em>HTTPS</em>. Dette
  krever et tjenersertifikat. Vi bruker i
  dag <a href="https://letsencrypt.org/">Let's Encrypt</a> til � automatisk
  utstede sertifikater til webtjeneren.
</p>

<p>
  Let's Encrypt krever i utgangspunktet at webtjeneren er tilgjengelig fra
  sine IP-adressser for � kunne utfordre den til � bevise sin identitet. Disse
  IP-adressene offentliggj�res ikke, og Let's Encrypt forbeholder seg retten
  til � endre disse n�r som helst, uten forvarsel. Webtjeneren p� verkt�ykassen
  holder de n�dvendige URLene �pne for verden, men kan ellers begrense aksess
  til et valgfritt sett med IP-adresser. Henvend deg til v�rt kontaktpunkt
  dersom du �nsker endringer i restriksjonene.
</p>

<h2><a name="netflow">Netflow/NfSen</a></h2>

<p>
Verkt�ykassene bruker <a
href="http://nfsen.sourceforge.net/">NfSen</a> for � prosessere
netflowdata som blir eksportert fra rutere. NfSen er et web-basert
grensesnitt til <a href="http://nfdump.sourceforge.net/">nfdump
netflow tools</a>.
</p>

<p>
Dette grensesnittet er tilgjengelig via NAV sin toolbox.
</p>

<p>
Nfsen ser ut til � v�re litt kilen mhp. p� � definere nye
netflow-eksport�rer ('sources') etter at systemet er startet , s� det
er lurt � ha alle disse klart p� forh�nd, og legge alle inn f�r
systemet startes opp.</p>

<p>
Kildene defineres under <kbd>sources</kbd> i
<kbd>/etc/nfsen/nfsen.conf.local</kbd>. Denne filen konfigureres av Puppet; eventuelle endrings�nsker m� meldes til Sikt.
</p>

<p>
Mere inng�ende detaljer ang�ende bruk av nfsen st�r p� <a href="http://nfsen.sourceforge.net/">nfsen</a> sine hjemmesider.
</p>

<p>
Generelt om Netflow:
<ul>
<li>En flow er definert som et sett av IP pakker som har en del felles felt i pakkehodet.
<li>De felt som brukes for � identifisere flows er:
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
<li>Grafene vil vise trafikk-m�nsteret til kildene man eksporterer netflow-data ifra. Default er det satt opp slik at grafene er "stacked". Dvs. at dersom man eksporterer ifra flere kilder (har flere farger p� grafene), legges den ene grafen p� toppen av den andre. Dette kan man endre ved � trykke p� line graph p� details-fanen. Her kan man ogs� endre til logaritmisk skala.
<li>Under Graphs-fanen kan man se st�rre grafer for henholdsvis Flows, Packets eller Traffic.
<li>Under Details-fanen kan man se detaljer for enten Flows, Packets eller Traffic. Man kan velge en av de andre i de sm� thumbnailene p� h�yresiden.
<li>Dersom man vil ekskludere en kilde ifra grafene, kan man trykke p� krysset under <kbd>source</kbd> for hver kilde.
</ul>
</p><p>

Hvordan grave i detaljene:
<ul>
<li>Angi tidsperiode
<li>Dette gj�r du enten ved � la den st� p� <kbd>Single Timeslot</kbd> (5 min) under grafen, eller du velger en lengre tidsperiode med � velge <kbd>Time Window</kbd> under grafen og drar p� pila som er nederst p� grafen. Tidspunktet blir avmerket med gr�nn farge i grafen
</ul>

List Flows vs. Stat TopN:
<ul>
<li> <kbd>List Flows</kbd> viser hele flows, og gj�r ingen sortering basert p� statistikk. Her vil det kun vises de antall flows man har valgt som f�rst stemmer med det utvalget man har valgt. Man kan ogs� aggregere data basert p� de valgene man gj�r.
<li> <kbd>Stat TopN</kbd> viser statistisk analyse og sorterer output basert p� valgene du gj�r.
<li> <kbd>Stat Any IP Address order by bytes</kbd> vil f.eks gi deg en liste over de som har overf�rt mest data i valgt tidsperiode.
</ul>

S�k i netflow dataene:
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
<li>Ett annet triks er � angi hvilke interface man skal plukke ut trafikk ifra. Eks. <tt>in if 24</tt>, vil kun plukke ut trafikk som kommer inn p� interface 24. Hvilket nummer et interface har p� et cisco-ruter finner man ut med kommandoen <tt>show snmp mib ifmib ifindex</tt>. (Husk at netflow kun eksporteres fra trafikk inn p� et interface. Trafikk ut p� et interface vil ikke bli eksportert, og m� f�lgelig filtreres ut fra det interfacet hvor denne trafikken kommer inn.) Skriver man derfor <tt>out if 24</tt> vil dette da bety det samme som, gi meg all trafikk <b>inn</b> p� alle interface bortsett fra 24.
</ul>
</ul>

Ferdigdefinerte filter man bruker ofte:
<ul>
<li>Disse kan lagres som filer i filsystemet under katalogen <tt>/var/lib/nfsen/filters</tt>
<li>Vanlig filtersyntaks brukes i disse filene ogs�.
<li>Ferdigdefinerte filtre velges under boksen man skriver inn filtre der det vanligvis st�r <tt>and none</tt>
</ul>

Lage profiler:<br>
For s�k man gj�r ofte og som man vil f�lge med grafisk over tid kan det v�re lurt � lage egne profiler som har oversikt over denne trafikken. Dersom man velger Real Profile lager dette egne flow-filer p� filsystemet (som ogs� tar plass). Dersom du lager en profil som er langt tilbake i tid, s� kan det ta lang tid for nfsen � lage grunnlagsdata for hele perioden. Dersom du lager en Shadow Profile, lager den ikke egne flow-filer p� filsystemet, men den bruker bare datagrunnlaget som allerede ligger der. Du vil likevel f� tegnet egne grafiske profiler for dataene du vil filtrere ut. Bruk av channels gj�r at du kan skreddersy grafene og fargene etter dine behov. Se <a href="http://nfsen.sourceforge.net/">dokumentasjon p� sourceforge</a> for detaljer.
<ul>
<li><tt>Profile</tt> st�r �verst i h�yre hj�rne.
<li>Normalt vises Profile "live"
<li>Velg <tt>New profile</tt>
<ul>
<li>lag en profil som plukker ut all trafikk av en gitt type, basert p� filtre du definerer.
<li>Navngi denne rapporten.
<li>Velg en kilde
<li>Basert p� hvor mye data som skal prosesseres tar det en hvis tid � prosessere og lage denne profilen
<li>Vis profilen etterp� ved � velge denne fra selected profile
</ul>
</ul>

Alert:<br>
<ul>
<li>I nyeste utgave av nfsen kan man lage terskelbaserte alarmer.
<li>Dokumentasjonen p� <a href="http://nfsen.sourceforge.net/#mozTocId859236">nfsen sine sider</a> sier viser detaljer for hvordan man oppretter alarmer. OBS: Husk � sette/endre filteret for alarmen dersom du �nsker � teste dette. Default st�r den p� 'not any' som ikke vil gi deg noe trafikk!
</ul>

<h3>Feils�king av nfsen</h3>
Dersom du har problemer med nfsen er det ett par ting man kan sjekke foer man melder feil.
<ul>
<li>G�r alle n�dvendige prosesser?<br>
1 nfsend og 1 nfcapd per kilde(netflow-eksport�r) Dersom ikke restart nfsen.
<li>Mottar du flows fra kilde?<br>
Bruk gjerne tcpdump for � sjekke om du mottar flows. F.eks <tt>tcpdump port 2055</tt> Hvilken port du lytter p� kan du finne i <tt>/etc/nfsen/nfsen.conf.local</tt> under sources. Dersom ikke, sjekk ruterconfig og access-lister.
</ul>

<h2><a name="cmdline">Command line tools</a></h2>

En del kjekke command line tools er installert p� verkt�ykassene.
Her f�lger en liste og kort omtale:

<ul>
  <li> ping og traceroute (trenger vel ingen kommentar)</li>
  <li> snmpwalk (m.fl.)<br>
    Brukes til � polle utstyr med snmp, kjekt for NAV feils�king.
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
    er �pne.
  </li>
</ul>

<h2><a name="hobbit">Hobbit/Xymon</a></h2>
Brukerdokumentasjon for Hobbit, se <a href="https://drift.uninett.no/utstyr/vk/hobbit-vk.html"> her </a>

<h2><a name="fwbuilder">Firewall Builder (fwbuilder)</a></h2>
<a href="http://drift.uninett.no/utstyr/vk/fwbuilder.html">Brukerdokumentasjon for Firewall Builder foreligger p� en egen side</a>.

<?php
include "uninettbunn.php3";
?>