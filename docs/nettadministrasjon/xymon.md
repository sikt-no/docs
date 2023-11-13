---
title: Xymon-integrasjon på verktøykasser
last_update:
  date: 2021-08-26
  author: morten.brekkevold@sikt.no
---

## Innledning

Xymon (tidl. *Hobbit*) er et tjenesteovervåkningsverktøy som kjører på
verktøykassen, og som er integrert med NAV-installasjonen der. Det er
kun utstyr som legges inn i kategorien `SRV` i NAV som blir automatisk
overvåket av Xymon. For mer informasjon om Xymon, se [Xymons
hjemmesider.](https://xymon.sourceforge.io/)

Da Hobbit ble omdøpt til Xymon, var det en del begrepsbruk og
konfigurasjonsfiler som også endret seg. Dersom du er vant med de gamle
filene og begrepene, kan du lese
[Xymons](https://xymon.com/help/upgrade-to-430.txt)
oppgraderingsnotater.

## Tjenester

Det er Xymon og Apache som må kjøre for at tjenesten skal virke.

**xymon**

-   Daemon:
-   Start/stop: `/etc/init.d/xymon {start/stop/restart}`
-   Configfiler: `/etc/xymon/`

**apache2**

-   Daemon: `/usr/sbin/apache2`
-   Start/stopp: `/etc/init.d/apache2 {start/stop/restart/reload}`
-   config: `/etc/apache2/sites-enabled/25-nav-secure.conf`

## Brukerdokumentasjon

### Maskiner som overvåkes med Xymon

Hvert kvarter kjører et script på verktøykassen som konfigurerer Xymon
til å overvåke alle maskiner fra `SRV`-kategorien i NAV. Dette gjør at
det er bare ett sted for å vedlikeholde listen over servere som skal
overvåkes i NAV og Xymon. Når en maskin registreres i NAV, kan den
legges inn i opptil flere grupper (*device groups*). Disse gruppene blir
også brukt som grupper i Xymon.

### Overvåking av grupper

Man kan sette opp overvåking av bestemte services for hver enkelt
gruppe. Man kan f.eks overvåke SMTP for alle servere som ligger i
mail-gruppa. Dette gjøres ved å logge på verktøykassen med ssh. Man
redigerer filen `/etc/nav/navsrv2hobbit.conf`. Her er et eksempel på
hvordan man kan gjøre det:

```ini
[ALL]
services = ssh

[MAIL]
services = smtp
```

Her ser vi at ssh overvåkes for samtlige maskiner, mens SMTP overvåkes
bare for den gruppen av maskiner som befinner seg i gruppen MAIL i NAV.
SSH ligger som standardovervåking for samtlige maskiner.

### Overvåking av maskiner

Man kan sette opp bestemte overvåkinger for hver enkelt maskin, ved å
legge til sine egne konfigurasjonsfiler på verktøykassen, under
`/etc/xymon/analysis.d/`. Verktøykassen overvåker seg selv med Xymon på
denne måten, og konfigurasjonen som brukes her kan ses i filen `vk.cfg`.

Et eksempel på en slik konfigurasjonsfil kan se slik ut:

    HOST=testserver.uninett.no
    PROC        cfenvd 1 1 yellow
    PROC        cfservd 1 1 red
    PROC        munin-node 1 -1 red
    PROC        sshd
    PROC        ntpd 1 1 yellow
    DISK        /home 95 98
    DISK        /var/log 95 98

Her ser vi hvilke bestemte prosesser som er satt opp til overvåking med
at det står `PROC` foran prosessnavnet. Bak hver prosess kan man ha et
tall som angir hvor mange prosesser som kan kjøres. På prosessen
`cfenvd` står det først tallet `1`, som betyr at det minimum må være én
prosess (*mincount*) ved det navnet og bak tallet står det `1`
(*maxcount*). Dette betyr at det kan kun være én (og bare én) prosess av
`cfenvd`. Hvis ikke dette er oppfylt vil den blir markert som gul i
Xymon, i motsetning til `cfservd`, der det vil bli markert som rødt. Man
kan på denne måten angi hvor mange prosesser som skal kjøre. I tillegg
kan man bruke verdien `-1`, som betyr at det kan være uendelig mange
prosesser som kjøres.

I tillegg kan man sette opp overvåking av disk-partisjoner. Hvis `/home`
(som i eks. over) fylles opp til 95% vil den bli gul, mens kommer den på
98% vil den flagges rød i Xymon.

Som standard på samtlige servere står det følgende regler
(`/etc/xymon/analysis.cfg`):

    DEFAULT
    UP      1h
    LOAD    5.0 10.0
    DISK    * 90 95
    MEMPHYS 100 101
    MEMSWAP 50 80
    MEMACT  90 97

### Installere xymon-client på klienten

-   Programmet **xymon-client** må installeres på klienten som skal
    overvåkes.
-   IP-adressen til verktøykassen må settes i
    `/etc/default/xymon-client`, slik at xymon-client vet hvor den skal
    rapportere.
-   For Windows-maskiner som skal overvåkes må
    *[BBWin](http://bbwin.sourceforge.net/)* installeres på klienten.

### Varsling

Varsling fra Xymon er integrert med NAVs hendelses- og alarmsystem, og
styres gjennom din personlige alarmprofil i NAV. Her viser vi til
[dokumentasjon om NAV](https://nav.readthedocs.io/ "Gå til NAVs
dokumentasjon").

## Kontaktadresser

-   kontakt@sikt.no
