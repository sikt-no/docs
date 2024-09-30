---
title: Grunnleggende feilsøking ved problemer i lokalnett
---

## Innledning

Denne artikkelen har som mål å gi hjelp til brukerstøtte når brukere har problemer med tilkobling til eller bruk av lokalnettet. Den inneholder da litt tips og triks slik at brukerstøtte kan isolere problemet og gir viktig grunnlag for feilsøking ved eskalering til Sikt.

## Feilsøkingskommandoer

Nedenfor finner man liste over kommandoer som kan kjøres på en klient for å få mer info for feilsøking. 

MERK: Kjør dette når maskinen har problemer!! Det er liten vits å kjøre dette når maskinen IKKE har problemer. 

### Windows

Nedenfor er det en liste med kommandoer som kan klippes og limes inn i et terminalvindu på Windows. Når disse kommandoene kjøres, så vil resultatene bli skrevet ned til filen `netinfo.log`. Denne filen kan vidersendes til CNaaS for dypere feilsøking.

```
@echo off
netsh wlan show interface > netinfo.log
netsh interface ipv4 show route >> netinfo.log
netsh interface ipv4 show addresses >> netinfo.log
netsh interface ipv6 show route >> netinfo.log
netsh interface ipv6 show neig >> netinfo.log
netsh interface ipv6 show addresses >> netinfo.log
netsh interface ipv6 show dnsservers >> netinfo.log
arp -a >> netinfo.log
nslookup www.vg.no >> netinfo.log
nslookup dns-resolver1.uninett.no >> netinfo.log
ping -4 8.8.8.8 >> netinfo.log
ping -4 158.38.0.1 >> netinfo.log
ping -6 2001:700:0:ff00::1 >> netinfo.log
ping -6 2001:4860:4860::8888 >> netinfo.log
```

### MacOS

MERK: Brukeren MÅ ha administrator-rettigheter med "sudo" for å få til å kjøre alle disse kommandoene!

```
ifconfig > netinfo.log
scutil --nwi >> netinfo.log
networksetup -listallhardwareports >> netinfo.log
sudo wdutil info >> netinfo.log
netstat -rn >> netinfo.log
ndp -an >> netinfo.log
scutil --dns >> netinfo.log
arp -an >> netinfo.log
host www.vg.no >> netinfo.log
host dns-resolver1.uninett.no >> netinfo.log
ping 8.8.8.8 -c 5 >> netinfo.log
ping 158.38.0.1 -c 5 >> netinfo.log
ping6 2001:700:0:ff00::1 -c 5 >> netinfo.log
ping6 2001:4860:4860::8888 -c 5 >> netinfo.log
```

### Linux

Coming soon! 

## Trådbasert tilkobling 

Nedenfor er en liste over grunnleggende undersøkelser som må gjøres ifht. trådbasert tilkobling:

### Sjekk at brukerpunktet er tilkoblet svitsjen i etasjefordeler/kommunikasjonsrom. 

Verifiser at brukerpunktet er tilkoblet i etasjefordeler/kommunikasjonsrom og at patche-kabelen er tilstrekkelig koblet inn i panelet og switchen. 

### Sjekk om det er link på nettkortet. 

Dersom det ikke er link på nettkortet så...

- ... kan det være feil på kabelen mellom brukerpunkt og maskin. Bytt kabelen og sjekk igjen. 
- ... nettkortet på brukerens maskin kan være "disablet" i operativsystemet til brukeren. Sjekk at nettkortet er skrudd på i operativsystemet. 
- ... kan det være feil med kablingen. Vurder måling (via elektromontør) av punktet dersom du allerede byttet patchekabel i punkt 1. 

## Trådløs tilkobling (Wi-Fi)

Nedenfor er en liste over grunnleggende undersøkelser som må gjøres ifht. trådbasert tilkobling:

### Ved tilkobling til eduroam

- Verifiser at brukeren har brukernavn/passord i lokalt brukerdatabase.
  - Om dette er en eduroam gjestebruker skal spørsmål om brukernavn, passord og oppsett gå direkte fra bruker til egen institusjon.  
- Sjekk at trådløsnettet eduroam er synlig for klienten.
- Kjør eduroam-oppsett på [](https://www.eduroam.no/connect)
- Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering. 

### Ved tilkobling til gjestenett

- Sjekk at det trådløse gjestenettet er synlig for klienten.
- Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering. 

### Sjekk kvaliteten på signalet

Kvaliteten på signalet sett fra klienten kan gi en pekepinn på om problemet er basert på signalstyrke og også gi nyttig informasjon ved eventuell eskalering. Dette kan sjekkes på de forskjellige operativsystemene slik:

#### Windows

Kjør kommandoen `netsh wlan show interface`. Her får du masse nyttig informasjon, men først og fremst så bør det kikkes på linjen *Signal* som angi signalstyrken i prosent. 

Denne informasjonen bør være med i en eventuell eskalering uavhengig om det er dårlig eller bra signal, siden det gir informasjon om SSID (trådløsnettnavn), MAC-adressen til klienten, kanal/bånd, protokoller med mer. 

#### Mac

Kjør kommandoen `sudo wdutil info`. Her får du masse nyttig informasjon, men først og fremst så bør det kikkes på linjen *RSSI* som angi signalstyrken. RSSI på -70dBm eller dårligere (altså større negativt tall), kan indikere dårlig signalstyrke. Linjen *Noise* indikerer om det er mye annen støy i lufta som kan skape problemer. Her bør man ha et tall som er så nære mulig -100 dBm som mulig, men alt på -90 til -100 er OK.  

#### Linux

På Linux kan man installere `wavemon` og kjøre dette. Da vil man få masse nyttig informasjon, slik som signalkvalitet og signalstyrke. 

Denne informasjonen bør være med i en eventuell eskalering uavhengig om det er dårlig eller bra signal, siden det gir informasjon om SSID (trådløsnettnavn), MAC-adressen til klienten, kanal/bånd, protokoller med mer. 

## Sjekk om brukeren får IPv4/IPv6-adresse og identifisering av brukerens MAC-adresse. {#adresser}

### Windows

Først finn rett nettkort å feilsøke. Dette kan finnes ved å kjøre `netsh interface show interface` som gir deg en liste over nettkort. Nettkortet du skal feilsøke må ha status *Tilkoblet* eller *Connected*. For trådbasert tilkobling heter det ofte noe som starter med *Ethernet*. Nettkort som heter noe med *vEthernet* er IKKE de som du skal se på nå. 

Kjør kommandoen: `ipconfig`. Finn så rett innslag basert på nettkort-navnet du fant over. Sjekk deretter følgende:

- Finnes det en IP-adresse for IPv4? 
    - Denne skal IKKE være noe som starter på 169.254.x.x. Dette betyr i prinsippet kortet ikke har IPv4-adresse.
    - Dersom maskinen ikke har IPv4-adresse, så er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. 
- Finnes det en IP-adresse for IPv6? 
    - Merk at det ikke er nok at maskinen har en adresse som starter på fe80::. Den skal også ha en fullverdig IPv6-adresse som f.eks starter på 2001:700:
    - Dersom maskinen ikke har IPv6-adresse, så KAN dette være grunnen til problemene dersom IPv6 er skrudd på på dette nettet. Uansett så kan dette meldes inn ved eskalering. 

Noter deg også kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som *Fysisk adresse*/*Physical address* i resultatet av kommandoen over. 

### Mac

Kjør kommandoen `sdutil --nwi`. Noter deg da nettkort-navnet, f.eks "en0". 

Kjør kommandoen `networksetup -listallhardwareports` og finn nettkort-navnet for å se MAC-adressen.

- Finnes det en IP-adresse for IPv4? 
    - Denne skal IKKE være noe som starter på 169.254.x.x. Dette betyr i prinsippet kortet ikke har IPv4-adresse.
    - Dersom maskinen ikke har IPv4-adresse, så er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. 
- Finnes det en IP-adresse for IPv6? 
    - Merk at det ikke er nok at maskinen har en adresse som starter på fe80::. Den skal også ha en fullverdig IPv6-adresse som f.eks starter på 2001:700:
    - Dersom maskinen ikke har IPv6-adresse, så KAN dette være grunnen til problemene dersom IPv6 er skrudd på på dette nettet. Uansett så kan dette meldes inn ved eskalering. 

Noter deg også kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som *Fysisk adresse*/*Physical address* i resultatet av kommandoen over. 

### Linux

Kjør kommandoen: `ip a`. Da vil IPv4 vises som *inet* og IPv6 vises som *inet6*. Finn rett nettkort og sjekk følgende:

- Finnes det en IP-adresse for IPv4? 
    - Dersom maskinen ikke har IPv4-adresse, så er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. 
- Finnes det en IP-adresse for IPv6? 
    - Merk at det ikke er nok at maskinen har en adresse som starter på fe80::. Den skal også ha en fullverdig IPv6-adresse som f.eks starter på 2001:700:
    - Dersom maskinen ikke har IPv6-adresse, så KAN dette være grunnen til problemene dersom IPv6 er skrudd på på dette nettet. Uansett så kan dette meldes inn ved eskalering. 

Noter deg også kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som *link/ether* i resultatet av kommandoen over. 

## Sjekk nåbarhet til ressurser

Dersom brukeren har IPv4-/IPv6-adresse og er tilkoblet nettet, men det fortsatt er problemer med nettet, så må følgende sjekkes:

### Sjekk om det er mulig å kjøre ping mot default gateway. 

#### Windows

IPv4: Kjør kommandoen: `route print 0.0.0.0`. Finn IP-adressen til default gateway og forsøk en ping mot denne adressen. 
IPv6: Kjør kommandoen: `ping ::1`. 

Fungerer ikke en eller begge dissee, så bruk dette som informasjon ved eskalering.

#### Mac

IPv4: Kjør kommandoen: `netstat -rn -f inet`. Finn innslaget "default" og forsøk en ping mot denne adressen. 
IPv6: Kjør kommandoen: `ping6 ::1`. 


#### Linux

IPv4: Kjør kommandoen: `ip route` og finn default-rute. Ping denne adressen. 
IPv6: Kjør kommandoen: `ping ::1`. 

Fungerer ikke en eller begge dissee, så bruk dette som informasjon ved eskalering.

### Sjekk om det er mulig å kjøre navneoppslag mot f.eks www.google.com

#### Windows

Kjør kommandoen `nslookup www.google.com`. Da skal du få svar med IP-adressen til denne siden. Fungerer ikke dette, så bruk dette som informasjon ved eskalering. 

#### Mac

Kjør kommandoen `host www.google.com`. Da skal du få svar med IP-adressen til denne siden. Fungerer ikke dette, så bruk dette som informasjon ved eskalering. 

#### Linux

Kjør kommandoen `host www.google.com`. Da skal du få svar med IP-adressen til denne siden. Fungerer ikke dette, så bruk dette som informasjon ved eskalering. 
