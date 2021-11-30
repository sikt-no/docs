---
title: Driftsinstruks for kunder av "Lokalnett fra Uninett - CNaaS"
sidebars_label: Driftsinstruks - kunde
---

![](/img/uninett_logo.svg)

## Innledning 

Wi-Fi er i dag like vanlig og like viktig for bedrifter i et kontorbygg som ventilasjon og strøm. Det er da også viktig at det er stabilt og med tilstrekkelig kapasitet for at bedriftens ansatte skal kunne utføre sine arbeidsoppgaver og gjennomføre virtuelle møter. 

I kontorbygg med flere leietakere er det sjelden at Wi-Fi leveres av én og samme leverandør. Noen bedrifter har avtaler med driftspartnere som leverer lokalnett inklusive Wi-Fi for dem, mens andre bedrifter setter opp og drifter Wi-Fi selv. Det er også stor variasjon på hvilke typer utstyr og leverandører som brukes i Wi-Fi-løsningene.

Wi-Fi bruker i dag frekvenser som gjør at signalene lett flyter utover i arealene i hver etasje, men som også lett på tvers av etasjene. Kontorbygg er også bygd opp slik at det lett skal kunne endres planløsning etter hvert som en leietaker ønsker det eller når nye leietakere overtar arealer. Da brukes ofte lettvegger som innervegger, noe som demper Wi-Fi-signaler veldig lite. Frekvensene som brukes er offentlige og kan derfor brukes fritt av hvem som helst. 

Når det eksisterer mange autonome Wi-Fi-løsninger for de forskjellige leietakerne i et bygg, så vil én leietaker lett kunne se signaler fra en annen leietakers Wi-Fi. Dette fordi at autonome systemer sjelden bryr seg om å gjøre signalforholdene optimale for noen andre enn seg selv. 

*Dette dokumentet har som mål å informere om utfordringer dette kan skape i kontorbygg og hvilke kjøreregler Uninett anbefaler å ha for at Wi-Fi skal bli så godt som mulig for alle parter.*

## Litt mer om frekvenser og kanaler

Pr. dags dato opererer Wi-Fi på frekvensområdene 2.4Ghz og 5GHz. I fremtiden vil det også åpnes for kommunikasjon på 6GHz. 

2.4GHz er spesielt utsatt for støy pga. at det er veldig få tilgjengelige kanaler i dette frekvensområdet. I praksis er det kun tre tilgjengelige kanaler som ikke forstyrrer for hverandre. Dette betyr at det lett kan bli støy som går ut over stabiliteten på trådløsnettet pga. at en brukers utstyr hører signaler fra veldig mange aksesspunkter samtidig. I tillegg er 2.4GHz frekvensområdet også utsatt for støy fra annet utstyr enn Wi-Fi, slik som Bluetooth, mikrobølgeovner, dørlås-systemer og andre IoT-nett. 

## Utfordringer og tiltak

Det er mange utfordringer med flere tilbydere av Wi-Fi i et kontorbygg. Her lister vi opp en del utfordringer og foreslår tiltak for å bidra til at Wi-Fi kan ha en tilstrekkelig kapasitet og være stabilt for alle brukere i bygget.

### Høy sendestyrke på aksesspunkter

I konfigurasjon av aksesspunkter (Wi-Fi sendere) kan det stilles inn hvilken sendestyrke de enkelte aksesspunktene skal ha. Sendestyrke er det samme som å stille inn hvor høyt aksesspunktene skal rope for å få kontakt med klientene (laptop, telefon, tablets etc.). Desto høyere utgangseffekt, desto lengre unna kan signalene høres. 

Dersom ett Wi-Fi-nett i et kontorbygg har unødvendig høy sendestyrke, så vil dette gjøre at brukere av andre Wi-Fi-nett vil høre sitt eget nett dårligere pga. støy. 

*Anbefaling:
Det anbefales at alle leietakere i et kontorbygg setter opp sine Wi-Fi-nett med så lav sendestyrke som mulig uten at dette går ut over dekningen for de leietakernes brukere. I noen Wi-Fi-systemer kan dette gjøres automatisk ved at systemet selv justerer opp eller ned sendestyrken ut fra kvaliteten på signalet mot tilkoblede brukere. Eksisterer slik funksjonalitet, så bør denne skrus på.*

### Kanaler på 2.4GHz-båndet

I det internasjonale miljøet med Wi-Fi-ekspertise er det bred enighet om at aksesspunkter KUN skal settes opp til å bruke kanalene 1, 6 og 11 i 2.4GHz frekvensbåndet. Dette fordi at disse er tilstrekkelig adskilte og at de da ikke forstyrrer hverandre. 

![](/img/24ghz.png)

*Anbefaling:
Alle leietakere i et kontorbygg bør sørge for at aksesspunkter kun bruker kanalene 1, 6 og 11 på 2.4GHz. Dette kan som oftest gjøres i systemet ved å velge hvilke kanaler systemet skal kunne bruke ved automatisk kanalvalg eller ved å statisk sette kanaler på de forskjellige aksesspunktene. I tillegg bør alle slå av foreldet standard 802.11b. Dette gjøres ved å fjerne hastigheter 1, 2, 5.5 og 11Mbps som en mulig hastighet i konfigurasjon (detaljer varierer litt fra produsent til produsent).*


### 5GHz-båndet

5GHz-frekvensen har noen fordeler i forhold til 2.4GHz-frekvensen. Det er flere kanaler tilgjengelig og det er mindre støy fra utstyr som ikke er Wi-Fi. Men for å få utnyttet disse fordelene så bør Wi-Fi-nettet konfigureres på rett måte. 

Selv om det er flere kanaler tilgjengelig i dette frekvensområdet, så må det i noen tilfeller settes opp i Wi-Fi-systemet. I Norge er det mulig å bruke følgende kanaler, listet etter radiobåndene U-NII:

- U-NII-1: 	36, 40, 44, 48
- U-NII-2A: 52, 56, 60, 64 (DFS)
- U-NII-2C:	100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140 (DFS)
- U-NII-3:	149, 153, 157, 161, 165 (SRD - short range 25mW/14dBm) 

*Anbefaling:
Det anbefales at alle Wi-Fi-systemer konfigureres til å bruke flest mulig av kanalene nevnt over. Da vil det være betraktelig mindre sjanser for at klienter opplever støy fra andre Wi-Fi-nett. Det anbefales også at systemene settes opp til å velge kanaler automatisk slik at de styrer unna kanaler som allerede brukes av andre. Dersom man skal bruke kanaler merket DFS over, så MÅ det konfigureres automatisk kanalvalg for å styre unna radarer.*

### Bruk av "channel bonding"

«Channel bonding» er et begrep for å slå sammen flere kanaler slik at hastigheten i Wi-Fi-nettet blir høyere. En kanal er 20Mhz bred, så det kan slås sammen kanaler til hhv. 40, 80 og 160Mhz kanaler. Dette er mye brukt i Wi-Fi-systemer, men bidrar til at flere kanaler blir brukt samtidig, noe som igjen gir mindre plass og mer støy i frekvensbåndet. 

På 2.4GHz er det ikke plass til at det brukes «channel bonding», da det allerede er kun er 3 tilgjengelige kanaler i dette frekvensbåndet. Det er mer plass på 5GHz, men dersom man slår sammen mange kanaler, så vil dette gi samme problemer som på 2.4GHz. 

*Anbefaling:
Det skal ikke brukes «channel bonding» på 2.4GHz. Dette vil ødelegge mye for andre Wi-Fi-nett i området. 
På 5GHz anbefales det å ikke slå sammen flere enn to kanaler, altså til maksimum 40MHz. 
I et kontorbygg med stor klienttetthet eller der flere virksomheter har eget trådløstnett anbefales kun 20MHz kanaler. Dette gir mindre celler og dermed redusert kanal interferens.*
