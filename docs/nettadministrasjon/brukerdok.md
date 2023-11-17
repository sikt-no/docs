---
title: Brukerdokumentasjon Verktøykasser
last_update:
  date: 2023-09-26
  author: morten.brekkevold@sikt.no
---

## Innledning

Dette dokument er myntet på lokalt IKT driftspersonell ved
høgskole/universitet som er bruker av verktøykassen. Verktøykassene er
som kjent drevet fra Sikt. Driftsinstruks for Sikt Service Center og
beredskapsvakt [foreligger i
tillegg](https://kind.uninett.no/driftwiki/instruks/vk/index.html). Se Sikts nettsider [for
en generell beskrivelse av tjenesten](https://sikt.no/tjenester/nettadministrasjon).

For å benytte flere av tjenestene på verktøykassen kreves naturlig nok
relevant konfigurasjon av nettutstyret. Vi viser til [Uninett
fagspesifikasjoner (UFS-er)](https://www.uninett.no/ufs/nett).

Vi minner også om at svitsjene i campusnettet bør (les: *må*) være på en
forsvarlig programvareversjon.

## Vedlikeholdsvindu

Tjenesten har fast vedlikeholdsvindu på **tirsdager mellom klokken 10:00
og 11:00**.

I dette tidsrommet kan det bli utført mindre oppgraderinger og omstart
av maskinvaren, hovedsakelig i forbindelse med sikkerhetsoppdateringer,
uten at det blir gitt nærmere beskjed i forkant. Det kan forekomme
merkbare driftsforstyrrelser.

## Sikkerhetsdirektiv for verktøykassene

Sikt har driftsansvar for verktøykassene, se definert
[sikkerhetsdirektiv](sikkerhetsdirektiv.md) for detaljer rundt drift-
og sikkerhetsopplegget.

Siden driftsansvaret ligger til Sikt er ryddigste løsning at *kun* Sikt
har root-privilegier på verktøykassene. Vi er naturligvis opptatt av at
dere som brukere kan gjøre tilstrekkelig for å rette feil rundt
applikasjonene m.m. Dette gjør vi ved å gi dere nødvendige
sudo-rettigheter, samt lesetilgang til filer (se Brukertilgang under).

### Kontaktpunkt

-   For driftshenvendelser, ta kontakt med kontakt@sikt.no
-   For diskusjon/spørsmål om bruk av verktøyene, bruk
    vk@lister.sikt.no.
    Alle som er registrert i Sikts driftsdatabase som teknisk ansvarlig
    for en verktøykasse ute hos en kunde blir automatisk abonnent på
    denne listen.
-   Se ellers [kontaktadresser og telefonnumre på våre
    hjemmesider](https://sikt.no/kontakt-oss)

## Brukertilgang til verktøykassen

For å logge inn på verktøykassen med ssh må du ha bruker.  Den som er teknisk
ansvarlig for verktøykassen i din organisasjon kan bestille brukere ved å
sende [e-post til kontakt@sikt.no](mailto:kontakt@sikt.no).  Nye brukere vil
få satt et midlertidig passord av Sikt og bør endre dette ved første gangs
innlogging.  Merk at det passordet du velger for denne kontoen er det samme
som vil brukes dersom du setter opp verktøykassen som radiustjener for
nettutstyret ditt.

Alle brukere som er i gruppe <span class="kbd">netops</span> gis (via
*sudo*) tilgang til å gjøre noen kommandoer som normalt trenger
root-tilgang. For å se hvilke sudo-muligheter man har kan man kjøre
kommandoen:

```shell
sudo -l
```

Blant kommandoene som kan kjøres via sudo er:

- `nav`: Generell kommando for å kontrollere nav

- `service apache2 reload`: Relaste konfigurasjon for webtjeneren

- `service nfsen \[start|stop\]`: Starte/stoppe NfSen

For å relaste apache webtjeneren kan man feks kjøre kommandoen:

```shell
sudo service apache2 reload
```

## tftp

*tftp*-tjenesten gjør det mulig å skrive og laste konfigurasjon til/fra
nettutstyret. *tftp*-demonen er sikret med en konfigurasjonsfil
`/tftpboot/tftpd.conf`. For å forenkle vedlikehold blir denne filen
autogenerert etter følgende kjøreregler.

Når en ny svitsj skal legges til i tftp konfigurasjonen:

1.  Legg til svitsjen i `/tftpboot/tftpd.txt` Syntaks sees lett i fila:

    ```
            "svitsj"           "ipadresse"
    eks:    lillehammer-gsw     128.39.3.44
    ```

2.  Etter at `tftpd.txt` er redigert, kjør make (du står på `/tftpboot`)
    Vips, så er ny `tftp.conf` laget.

3.  Du må da opprette den nye filen med touch "svitsj-confg" (eks: `touch
    lillehammer-gsw-confg`)

4.  Nå kan du fra svitsjen skrive konfigurasjonen til verktøykasse med
    write network.

Tilsvarende kan bokser slettes fra `tftpd.txt` / `tftpd.conf`.

For å bevare historikk på konfigurasjon benyttes *RCS*. Opplegget er
automatisert ved at en nattlig cronjobb sjekker inn ny versjon av alle
filer som er endret. Alle endringer blir rapportert som epost til
mottagere angitt via variabelen nocoperators i fila
`/etc/default/uninett.conf` (merk at denne filen er styrt av Sikts Puppet,
ta kontakt med kontakt@sikt.no for å få gjort endringer). En varsling
om låste RCS-filer (avglemte innsjekkinger) blir også sendt periodisk
til samme adresse.

-   I tillegg til konfigurasjoner ligger også aksesslistefiler på
    `/tftpboot`. Vedlikehold av disse og arbeid med aksesslister generelt
    er ikke omtalt her. Se `README`-fil på `/tftpboot` for mer info på
    dette.
-   En siste ting som ligger på `/tftpboot` er software-imager. Disse kan
    lastes til svitsjer for oppgradering.

## FTP

Fra 2023 er en *FTP*-tjener (basert på *proftpd*) et nytt mulig tilvalg på
verktøykassen.  Dette kommer som et alternativ til det tftp-baserte
konfigurasjonsarkivet under `/tftpboot` og kan være nyttig dersom man har
utstyrstyper som ikke støtter (eller fraråder) bruk av tftp-protokollen til å
fjernlagre konfigurasjon eller hente programvare.  Foreløpig gjelder dette mest
Juniper-utstyr.

For å ta i bruk FTP-tjeneren på din verktøykasse må man be Sikt om å slå den på
først, ved å kontakte kontakt@sikt.no.

### Oppsettet av FTP-tjeneren

FTP-tjeneren vil servere filer fra katalogen `/tftpboot`.  Den er i
utgangspunktet satt opp med èn anonym bruker og en autentisert bruker, som har
forskjellige tilgangsnivåer.

#### Anonym bruker

Anonym FTP tillates, men den anonyme brukeren vil kun ha lesetilgang til filer
som eies av systembrukeren `ftp`, og ingen skrivetilgang.  I utganspunktet vil
bare katalogen `/tftptboot/images` være lesbar for denne brukeren.

#### ftpuser

Den autentiserte brukerkontoen heter `ftpuser`, som samsvarer med OS-brukeren
`ftpuser`.  I tilfellet verktøykassen er en CNaaS-kasse, vil denne brukerens
passord styres fra Vault.  I alle andre tilfeller må man sette passordet for
brukeren lokalt på verktøykassen. Dette kan gjøres av alle brukere som er
medlem av gruppen `netops`, ved å kjøre kommandoen `sudo passwd ftpuser`.



## Radius

Det er ingen bruker-konfigurasjon forbundet med radius som trengs å
konfigureres på verktøykassene. Dette fordi radius er satt opp til bruke
`/etc/passwd` som sin brukerkilde. Dersom brukerne her har satt passord
blir dette benyttet ved radiusautentisering. Dersom bruker på
nettutstyret logger seg på med `@uninett.no`-endelse så er radiustjener på
verktøykassen satt opp til å relée forespørsler til radiustjener på
`trane.uninett.no`. Således kan Sikt drift komme inn (dersom ønskelig).

Det som imidlertid *må* konfigureres er `/etc/freeradius/clients.conf`

Eksempel fra HiL:

```
client 128.39.109.0/26 {
   secret       = felles-hemmelighet
   shortname    = hil-mngmt
}
```

Det vi angir her at alle svitsjene i området 128.39.109.1-63 tillates å
snakke radius med verktøykassen gitt at de er konfigurert med samme
felles-hemmelighet. Endringer i `/etc/freeradius/clients.conf` styres med
Puppet og må meldes inn til kontakt@sikt.no.

## Syslog

All nettelektronikk bør syslogge til verktøykassen. Syslog er satt opp
slik at alle meldinger logget til verktøykassen fra nettverket på
facility `local6` og `local7` blir lagret i disse to filene:

- `/var/log/network.log`
- `/var/log/network_nav.log`

Sistnevnte fil blir igjen lest og tømt av NAV sin bakgrunnsprosess
`logengine`, som kjører én gang i minuttet. Dataene blir lagt i NAVs
syslog-database og er igjen søkbare gjennom NAVs *Syslog Analyzer tool*.

`network.log` blir ikke tømt, men komprimert og rotert en gang i døgnet.
Dere kan således velge å søke i syslog i tekstmodus, direkte på
verktøykassen, eller via NAV.

## NAV

NAV er omfattende å forklare. Vi viser her til [NAVs egen
dokumentasjon](https://nav.readthedocs.io/en/latest/). Litt starthjelp:

### Web brukeradministrasjon

Det er ikke noe dokument som beskriver hvordan du oppretter brukere og
hvordan du tilordner brukere til grupper. Helt kort; dette gjør du under
verktøyet *User and API Administration*. Det er rett frem å legge til
brukere, men husk at de må tilordnes en eller flere grupper. Merk også
at du kan redigere privilegiene til en gruppe. Se f.eks på gruppen
*ReadAll*, her vil du se at denne har et `web_access`-privilegie som gir
tilgang til en del verktøy, men ikke alle. Dette gir deg en ide om
hvordan `web_access`-privilegier kan justeres. Merk at det er mulig å
bruke LDAP til brukerautentisering. Du må da gjøre innstillinger i fila
`/etc/nav/webfront/webfront.conf`.

### Sett velkomstmelding m.m.

En rekke filer i katalogen `/etc/nav/webfront/` kan redigeres for å
tilpasse innholdet i forside-widgetene for velkomstmelding og lenker.

### Sett mottaker av NAV-adminstrativ epost

All administrativ epost fra NAV sendes til driftspersonell hos Sikt, som
konfigurert av *Puppet* i variabelen `ADMIN_MAIL` i filen
`/etc/nav/nav.conf`. Dersom du ønsker kopier av denne eposten, ta
kontakt med Sikt.

### Sett passord til NAVs PostgreSQL-database

Dette er satt for deg. Passordet kan leses fra attributten `userpw_nav`
i filen `/etc/nav/db.conf`. Merk at du kan aksessere denne databasen ved
å bruke dette passordet når du skriver `psql nav
nav`. For dypere feilsøking, eller dypere forståelse av databasen
er dette nyttig.

### "Seede" databasen:

For at NAV skal overvåke nettverket ditt må den få "seed"-informasjon
fra deg. Du bruker verktøyet *Seed Database* (fra Toolbox) til dette.
Les mer om hvordan du [legger inn seed-data i
NAV](https://nav.readthedocs.io/en/latest/intro/getting-started.html#seeding-your-database)
og [hvordan du organiserer
informasjonen](https://nav.readthedocs.io/en/latest/intro/getting-organized.html)
i NAVs offisielle dokumentasjon.

### Varslingssystemet Alert Profiles

Varslingssystemet er nokså omfattende med mange muligheter. For å
forenkle initielt oppsett er det en rekke forhåndsdefinerte filtre og
filtergrupper du kan bruke. Les [wiki-siden om Alert
Profiles](https://nav.uninett.no/wiki/alertprofiles) for en introduksjon
til systemet.

### Sjekk status på bakgrunnsprosesser og logger

-   Kommandoen `sudo nav status` gir status på om
    NAVs ulike bakgrunnsprosesser og cronjobber er aktive.
-   Innsamlingsmotoren *ipdevpoll* logger (bl.a.) til
    `/var/log/nav/ipdevpoll.log `
-   I samme katalog se tilsvarende log for `navtopology.log`
    (topologioppdageren) `pping.log` (statusmonitoren), `servicemon.log`
    (tjenesteovervåkeren), `thresholdmon.log` (terskelovervåkeren),
    `eventengine.log` (hendelsessystemet) og `alertengine.log`
    (alarmsystemet).

### Feilsøking av mobiltelefon/SMS-utsending

Dersom du har problemer med utsending av SMS fra verktøykassen, kan du
gjøre litt førstelinjes feilsøking før du feilmelder situasjonen til
kontakt@sikt.no.

-   Dersom mobilen/GSM-enheten er koblet til med en USB, verifisér at
    mobilen/GSM-enheten er synlig på USB-bussen: `lsusb`

    Forventet output skal ligne på dette

        Bus 004 Device 001: ID 0000:0000
        Bus 003 Device 001: ID 0000:0000
        Bus 002 Device 001: ID 0000:0000
        Bus 001 Device 003: ID 0fce:d057 Sony Ericsson Mobile Communications AB
        Bus 001 Device 001: ID 0000:0000

    Dersom det er en GSM-enhet tilkoblet med USB-dongle er det donglen,
    og ikke GSM-enheten som blir identifisert. Se siste linje:

        Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
        Bus 002 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
        Bus 003 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
        Bus 004 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
        Bus 005 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
        Bus 006 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
        Bus 005 Device 002: ID 0a81:0205 Chesen Electronics Corp. PS/2 Keyboard+Mouse Adapter
        Bus 005 Device 003: ID 0403:6001 Future Technology Devices International, Ltd FT232 USB-Serial (UART) IC

-   Verifisér at Gammu klarer å gjenkjenne den tilkoblede
    mobiltelefonen: `sudo -u navcron gammu --identify`

-   Verifisér at mobiltelefonen har forbindelse med GSM-nettverket:
    `sudo -u navcron gammu --networkinfo`

-   Verifisér at Gammu kan sende SMS-meldinger til din telefon:
    `echo "Melding" | sudo -u navcron gammu --sendsms TEXT <tlfnr>`

-   Verifisér at NAVs SMS-daemon kan sende SMS-meldinger til din
    telefon: `sudo -u navcron smsd.py -t <tlfnr>`

### Sette opp NAV/verktøykassen for Radius Accounting-logging

NAV tilbyr [brukersporing via accounting-logging fra
FreeRADIUS-tjenere](https://nav.uninett.no/wiki/radius). Dette krever en
del aktiv inngripen fra din egen side.

Der man har en FreeRADIUS-tjener som autentiserer brukerinnlogginger, må
denne konfigureres til å logge accounting-data til NAVs
PostgreSQL-database. I tillegg bør man sette opp et Python-program på
FreeRADIUS-tjeneren som overvåker error-loggen dens og dytter disse
innslagene til samme PostgreSQL-database. [Fremgangsmåten er dokumentert
på NAV-wikien.](https://nav.uninett.no/wiki/radius)

Deretter må Sikt gjøre konfigurasjonsendringer på verktøykassens
PostgreSQL-database, slik at denne tillater innlogging fra din
FreeRADIUS-tjener. Meld inn følgende detaljer til kontakt@sikt.no:

-   At du ønsker å sende FreeRADIUS accounting-logger til verktøykassen.
-   IP-adressen(e) til din(e) FreeRADIUS-tjener(e).

Sikt vil sørge for at det opprettes en PostgreSQL-bruker for radius
accounting, og at denne gis tilgang til de riktige tabellene i NAV fra
de gitte IP-adressene. Du vil få et brukernavn og et passord til
PostgreSQL-databasen, som skal brukes til å konfigurere
FreeRADIUS-tjeneren med.

### Integrasjon med Argus

Dersom du ønsker å integrere NAV-installasjonen på din verktøykasse med en
Argus-instans, kan limetjenesten for dette enkelt slås på for din verktøykasse
ved bestilling til kontakt@sikt.no.

Når limetjenesten `nav-argus-glue` slås på, vil konfigurasjonsfilen
`/etc/nav/navargus.yml` opprettes og gjøres skrivbar for alle som er medlem av
gruppen `netops`.  Event Engine vil automatisk konfigureres til å levere
hendelser til limetjenesten.  Dokumentasjon for selve limetjenesten fins på
https://github.com/Uninett/nav-argus-glue

Når limetjenesten er konfigurert, kan konnektivitet mot din Argus-instans
testes ved å utføre følgende kommando:

```shell
/opt/venvs/nav/bin/navargus --test-api
```

Vær oppmerksom på at ved konfigurasjonendringer i `navargus.yml` bør NAVs Event
Engine restartes med kommandoen `sudo nav restart eventengine` for å sikre at
endringene tar effekt umiddelbart.

`navargus` kan også kjøres manuelt for å ta ut en rapport om hvilke NAV-alarmer
og Argus-hendelser som ikke er synkroniserte, eller for å tvinge gjennom en
full synkronisering.  Se følgende kommando for mer hjelp på dette:

```shell
/opt/venvs/nav/bin/navargus --help
```

## Sertifikathåndtering

Webtjeneren på verktøykassen er bare tilgjengelig over *HTTPS*. Dette
krever et tjenersertifikat. Vi bruker i dag [Let's
Encrypt](https://letsencrypt.org/) til å automatisk utstede sertifikater
til webtjeneren.

Let's Encrypt krever i utgangspunktet at webtjeneren er tilgjengelig fra
sine IP-adressser for å kunne utfordre den til å bevise sin identitet.
Disse IP-adressene offentliggjøres ikke, og Let's Encrypt forbeholder
seg retten til å endre disse når som helst, uten forvarsel. Webtjeneren
på verktøykassen holder de nødvendige URLene åpne for verden, men kan
ellers begrense aksess til et valgfritt sett med IP-adresser. Henvend
deg til vårt kontaktpunkt dersom du ønsker endringer i restriksjonene.

## Netflow/NfSen

Verktøykassene bruker [NfSen](http://nfsen.sourceforge.net/) for å
prosessere netflowdata som blir eksportert fra rutere. NfSen er et
web-basert grensesnitt til [nfdump netflow
tools](http://nfdump.sourceforge.net/).

Dette grensesnittet er tilgjengelig via NAV sin toolbox.

Nfsen ser ut til å være litt kilen mhp. på å definere nye
netflow-eksportører ('sources') etter at systemet er startet , så det er
lurt å ha alle disse klart på forhånd, og legge alle inn før systemet
startes opp.

Kildene defineres under `sources` i
`/etc/nfsen/nfsen.conf.local`. Denne filen konfigureres
av Puppet; eventuelle endringsønsker må meldes til Sikt.

Mere inngående detaljer angående bruk av nfsen står på
[nfsen](http://nfsen.sourceforge.net/) sine hjemmesider.

### Generelt om Netflow

-   En flow er definert som et sett av IP pakker som har en del felles
    felt i pakkehodet.
-   De felt som brukes for å identifisere flows er:
    -   Source IP adress
    -   Destination IP adress
    -   Source port number
    -   Destination port number
    -   Protocol type
    -   Type of service
    -   Input interface

### Grafene

-   Grafene vil vise trafikk-mønsteret til kildene man eksporterer
    netflow-data ifra. Default er det satt opp slik at grafene er
    "stacked". Dvs. at dersom man eksporterer ifra flere kilder (har
    flere farger på grafene), legges den ene grafen på toppen av den
    andre. Dette kan man endre ved å trykke på *line graph* på
    *details*-fanen. Her kan man også endre til logaritmisk skala.
-   Under *Graphs*-fanen kan man se større grafer for henholdsvis *Flows*,
    *Packets* eller *Traffic*.
-   Under *Details*-fanen kan man se detaljer for enten *Flows*, *Packets*
    eller *Traffic*. Man kan velge en av de andre i de små thumbnailene på
    høyresiden.
-   Dersom man vil ekskludere en kilde ifra grafene, kan man trykke på
    krysset under `source` for hver kilde.

### Hvordan grave i detaljene

-   Angi tidsperiode
-   Dette gjør du enten ved å la den stå på `Single
    Timeslot` (5 min) under grafen, eller du velger en lengre
    tidsperiode med å velge `Time Window` under
    grafen og drar på pila som er nederst på grafen. Tidspunktet blir
    avmerket med grønn farge i grafen

### List Flows vs. Stat TopN

-   `List Flows` viser hele flows, og gjør ingen
    sortering basert på statistikk. Her vil det kun vises de antall
    flows man har valgt som først stemmer med det utvalget man har
    valgt. Man kan også aggregere data basert på de valgene man gjør.
-   `Stat TopN` viser statistisk analyse og
    sorterer output basert på valgene du gjør.
-   `Stat Any IP Address order by bytes` vil
    f.eks gi deg en liste over de som har overført mest data i valgt
    tidsperiode.

### Søk i netflow dataene

-   tcpdump-aktig filter format
-   Eks.:
    -   `host 158.38.x.y` (Filtrerer ut all trafikk til/fra host
        158.38.x.y)
    -   `src host 158.38.w.x and dst host 158.38.y.z` (Filtrerer ut all
        trafikk mellom disse to hostene der trafikken kommer fra
        158.38.w.x og sendes til 158.38.y.z, src=source,
        dst=destination)
    -   `proto tcp and src host 158.38.x.y` (Filtrerer ut all tcp trafikk
        sendt ifra 158.38.x.y)
    -   `src host 158.38.w.x or host 158.38.y.z` (Filtrerer ut trafikk fra
        host 158.38.x.y eller all trafikk til/fra host 158.38.y.z)
    -   `src host 158.38.x.y and src port 22` (Filtrerer ut all trafikk
        fra host 158.38.x.y der trafikken er sendt ifra port 22(ssh))
    -   `src port gt 80 and src port lt 123` (Filtrerer ut trafikk sendt
        ifra portene mellom 80 og 123, gt= greater than, lt=less than)
    -   `src port 80 and not host 158.38.x.y` (Filtrerer ut trafikk sendt
        ifra port 80 og som ikke er sendt til/fra host 158.38.x.y)
    -   `src net 158.38.x.0/24` (Filtrerer ut trafikk sendt ifra nettet
        158.38.x.0/24)
    -   Ett annet triks er å angi hvilke interface man skal plukke ut
        trafikk ifra. Eks. `in if 24`, vil kun plukke ut trafikk som
        kommer inn på interface 24. Hvilket nummer et interface har på
        et cisco-ruter finner man ut med kommandoen `show snmp mib ifmib
        ifindex`. (Husk at netflow kun eksporteres fra trafikk inn på et
        interface. Trafikk ut på et interface vil ikke bli eksportert,
        og må følgelig filtreres ut fra det interfacet hvor denne
        trafikken kommer inn.) Skriver man derfor `out if 24` vil dette da
        bety det samme som, gi meg all trafikk **inn** på alle interface
        bortsett fra 24.

### Ferdigdefinerte filter man bruker ofte

-   Disse kan lagres som filer i filsystemet under katalogen
    `/var/lib/nfsen/filters`
-   Vanlig filtersyntaks brukes i disse filene også.
-   Ferdigdefinerte filtre velges under boksen man skriver inn filtre
    der det vanligvis står and none

### Lage profiler

For søk man gjør ofte og som man vil følge med grafisk over tid kan det
være lurt å lage egne profiler som har oversikt over denne trafikken.
Dersom man velger Real Profile lager dette egne flow-filer på
filsystemet (som også tar plass). Dersom du lager en profil som er langt
tilbake i tid, så kan det ta lang tid for nfsen å lage grunnlagsdata for
hele perioden. Dersom du lager en Shadow Profile, lager den ikke egne
flow-filer på filsystemet, men den bruker bare datagrunnlaget som
allerede ligger der. Du vil likevel få tegnet egne grafiske profiler for
dataene du vil filtrere ut. Bruk av channels gjør at du kan skreddersy
grafene og fargene etter dine behov. Se [dokumentasjon på
sourceforge](http://nfsen.sourceforge.net/) for detaljer.

-   Profile står øverst i høyre hjørne.
-   Normalt vises Profile "live"
-   Velg New profile
    -   lag en profil som plukker ut all trafikk av en gitt type, basert
        på filtre du definerer.
    -   Navngi denne rapporten.
    -   Velg en kilde
    -   Basert på hvor mye data som skal prosesseres tar det en hvis tid
        å prosessere og lage denne profilen
    -   Vis profilen etterpå ved å velge denne fra selected profile

### Alert

-   I nyeste utgave av nfsen kan man lage terskelbaserte alarmer.
-   Dokumentasjonen på [nfsen sine
    sider](http://nfsen.sourceforge.net/#mozTocId859236) sier viser
    detaljer for hvordan man oppretter alarmer. OBS: Husk å sette/endre
    filteret for alarmen dersom du ønsker å teste dette. Default står
    den på 'not any' som ikke vil gi deg noe trafikk!

### Feilsøking av nfsen

Dersom du har problemer med nfsen er det ett par ting man kan sjekke
foer man melder feil.

-   Går alle nødvendige prosesser?
    1 nfsend og 1 nfcapd per kilde(netflow-eksportør) Dersom ikke
    restart nfsen.
-   Mottar du flows fra kilde?
    Bruk gjerne tcpdump for å sjekke om du mottar flows. F.eks `tcpdump
    port 2055`. Hvilken port du lytter på kan du finne i
    `/etc/nfsen/nfsen.conf.local` under sources. Dersom ikke, sjekk
    ruterconfig og access-lister.

## Command line tools

En del kjekke command line tools er installert på verktøykassene. Her
følger en liste og kort omtale:

-   `ping` og `traceroute` (trenger vel ingen kommentar)

-   `snmpwalk` (m.fl.)
    Brukes til å polle utstyr med snmp, kjekt for NAV feilsøking.

    Typisk syntaks:

    ```shell
    snmpwalk -v2c -c <community> <ip> <oid>
    ```

    Eks:

    ```shell
    snmpwalk -v2c -c public 10.10.10.1 ifinoctet
    ```
    (henter inoctet tellere fra boks 10.10.10.1)

-   `nmap`
    Brukes til scanne en host/sjekke om en port/sett av porter er åpne.

## Hobbit/Xymon

Se egen side for [dokumentasjon av Xymon-integrasjonen på verktøykassen](xymon.md).

## Firewall Builder (fwbuilder)

[Brukerdokumentasjon for Firewall Builder foreligger på en egen
side](fwbuilder).
