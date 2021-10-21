---
title: Grunnleggende feilsøking ved problemer i lokalnett
---

![](/img/uninett_logo.svg)

## Innledning

Denne artikkelen har som mål å gi hjelp til brukerstøtte når brukere har problemer med tilkobling til eller bruk av lokalnettet. Den inneholder da litt tips og triks slik at brukerstøtte kan isolere problemet og gir viktig grunnlag for feilsøking ved eskalering til Uninett.

## Trådbasert tilkobling 

### Sjekk at brukerpunktet er tilkoblet svitsjen i etasjefordeler/kommunikasjonsrom. 

Verifiser at brukerpunktet er tilkoblet i etasjefordeler/kommunikasjonsrom og at patche-kabelen er tilstrekkelig koblet inn i panelet og switchen. 

### Sjekk om det er link på nettkortet. 

Dersom det ikke er link på nettkortet så...

- ... kan det være feil på kabelen mellom brukerpunkt og maskin. Bytt kabelen og sjekk igjen. 
- ... nettkortet på brukerens maskin kan være "disablet" i operativsystemet til brukeren. Sjekk at nettkortet er skrudd på i operativsystemet. 
- ... kan det være feil med kablingen. Vurder måling (via elektromontør) av punktet dersom du allerede byttet patchekabel i punkt 1. 

## Trådløs tilkobling (Wi-Fi)

### Tilkobling til eduroam

- Verifiser at brukeren har brukernavn/passord i lokalt brukerdatabase.
  - Dersom brukeren er ekstern, så må det tas kontakt med brukerens hjemmeorganisasjon for feilsøking.  
- Sjekk at trådløsnettet eduroam er synlig for klienten.
- Kjør eduroam-oppsett på [](https://www.eduroam.no/connect)
- Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering. 

### Tilkobling til gjestenett

- Sjekk at det trådløse gjestenettet er synlig for klienten.
- Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering. 

## Sjekk om brukeren får IPv4/IPv6-adresse.

### Windows

Først finn rett nettkort å feilsøke. Dette kan finnes ved å kjøre `netsh interface show interface` som gir deg en liste over nettkort. Nettkortet du skal feilsøke må ha status "Tilkoblet" eller "Connected". For trådbasert tilkobling heter det ofte noe som starter med "Ethernet". Nettkort som heter noe med "vEthernet" er IKKE de som du skal se på nå. 

Kjør kommandoen: `ipconfig`. Finn så rett innslag basert på nettkort-navnet du fant over. Sjekk deretter følgende:

- Finnes det en IP-adresse for IPv4? 
    - Denne skal IKKE være noe som starter på 169.254.x.x. Dette betyr i prinsippet kortet ikke har IPv4-adresse.
    - Dersom maskinen ikke har IPv4-adresse, så er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. 
- Finnes det en IP-adresse for IPv6? 
    - Merk at det ikke er nok at maskinen har en adresse som starter på fe80::. Den skal også ha en fullverdig IPv6-adresse som f.eks starter på 2001:700:
    - Dersom maskinen ikke har IPv6-adresse, så KAN dette være grunnen til problemene dersom IPv6 er skrudd på på dette nettet. Uansett så kan dette meldes inn ved eskalering. 

### Mac

HER KOMMER MER SNART!

### Linux

Kjør kommandoen: `ip a`. Da vil IPv4 vises som ***inet*** og IPv6 vises som ***inet6***. Finn rett nettkort og sjekk følgende:

- Finnes det en IP-adresse for IPv4? 
    - Dersom maskinen ikke har IPv4-adresse, så er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering. 
- Finnes det en IP-adresse for IPv6? 
    - Merk at det ikke er nok at maskinen har en adresse som starter på fe80::. Den skal også ha en fullverdig IPv6-adresse som f.eks starter på 2001:700:
    - Dersom maskinen ikke har IPv6-adresse, så KAN dette være grunnen til problemene dersom IPv6 er skrudd på på dette nettet. Uansett så kan dette meldes inn ved eskalering. 


## Sjekk nåbarhet til ressurser

Dersom brukeren har IPv4-/IPv6-adresse og er tilkoblet nettet, men det fortsatt er problemer med nettet, så må følgende sjekkes:

### Sjekk om det er mulig å kjøre ping mot default gateway. 

#### Windows

IPv4: Kjør kommandoen: `route print 0.0.0.0`. Finn IP-adressen til default gateway og forsøk en ping mot denne adressen. 
IPv6: Kjør kommandoen: `ping ::1`. 

Fungerer ikke en eller begge dissee, så bruk dette som informasjon ved eskalering.

#### Mac

HER KOMMER MER SNART!

#### Linux

IPv4: Kjør kommandoen: `ip route` og finn default-rute. Ping denne adressen. 
IPv6: Kjør kommandoen: `ping ::1`. 

Fungerer ikke en eller begge dissee, så bruk dette som informasjon ved eskalering.

### Sjekk om det er mulig å kjøre navneoppslag mot f.eks www.google.com

#### Windows

Kjør kommandoen `nslookup www.google.com`. Da skal du få svar med IP-adressen til denne siden. Fungerer ikke dette, så bruk dette som informasjon ved eskalering. 

#### Mac

HER KOMMER MER SNART!

#### Linux

Kjør kommandoen `host www.google.com`. Da skal du få svar med IP-adressen til denne siden. Fungerer ikke dette, så bruk dette som informasjon ved eskalering. 
