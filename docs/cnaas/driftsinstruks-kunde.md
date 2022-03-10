---
title: Driftsinstruks for kunder av "Lokalnett fra Sikt - CNaaS"
sidebars_label: Driftsinstruks - kunde
---

## Innledning

Dette dokumentet har som mål å beskrive grensesnittet mellom Sikt og kunder av tjenesten "Lokalnett fra Sikt - CNaaS". 

Med dette menes hvordan Sikts kunde skal ta kontakt med Sikt både ved hendelser/problemer (incidents), spørsmål (support) og bestillinger/endringer. Det omhandler også krav til informasjon som kunden må ha med i sine henvendelser. Det beskrives også hvordan Sikt skal ta kontakt med kunden og krav til varslingstider ved planlagte og hasteendringer (change). 

I tillegg beskriver dokumentet hvordan Sikt skal ta kontakt med kunden ved hendelser/problemer og endringer (change). 

## Roller

### Kundens brukerstøtte/tekniske ressurspersoner

Kunden skal sørge for en brukerstøtte-funksjon for henvendelser fra sine brukere. Dette betyr at alle henvendelser fra kundens brukere skal gå til kundens brukerstøtte og ikke direkte til Sikt. 

Kunden skal også ha en eller flere tekniske ressurspersoner som skal utføre nødvendig lokalt arbeid for sine brukere og eventuelt Sikt ved behov. Noen kunder har ekstra avtale med Sikt hvor Sikt sørger for tilgang til tekniske ressurspersoner lokalt gjennom lokale universiteter/høgskoler. Disse kundene trenger da ikke egne tekniske ressurser lokalt. 

### Sikt Servicesenter (SSC)

Sikts Servicesenter er Sikts single point of contact (SPOC) og 1.linje. Alle henvendelser som eskaleres fra kundens brukerstøtte skal gå til SSC. Se kontaktinformasjon nedenfor.  

### Sikt 2. linje (Campustjenester)

Fageksperter i Sikt Campustjenester fungerer som 2. linje i Sikt. Alle henvendelser som eskaleres fra SSC går hit. 

## Kontaktpunkter

### Kontaktpunkter hos kunden {#kontaktkunden}

Sikt registerer følgende kontaktpunkter i sine systemer som brukes ved behov:

*De tre første kan med fordel være samme kontaktpunkt, f.eks kundens brukerstøtte.*

- **Varslingspunkt Incidents**: Her sendes alle varsler om incidents som Sikt oppdager i kundens nett. Dette bør ikke være personlig epost-adresse og telefonnummer. 
- **Varslingspunkt Change**: Her sendes alle varsler om planlagte endringer i kundens nett. Dette bør ikke være personlig epost-adresse og telefonnummer.  
- **Lokalt supportpunkt**: Her registereres kontaktinformasjon for kundens brukerstøtte for å informere eventuelle brukere som kontakter Sikt direkte. Dette brukes også som kontaktpunkt dersom Sikt har behov for å få utført lokalt arbeid på en eller flere komponenter i lokalnettet. Dette bør ikke være personlig epost-adresse og telefonnummer. 
- **Teknisk ansvarlig**: En eller flere personer som er teknisk ansvarlig og/eller ressurser hos kunden. Brukes som kontaktpunkt ved alvorlige hendelser utenfor kundens normalåpningstid. Det er også kun disse personene som har mulighet til å bestille endringer i CNaaS-tjenesten. 
- **Juridisk/administrativ ansvarlig**: En eller flere personer som kan kontaktes ved merkantile henvendelser. 

### Kontaktpunkter hos Sikt {#kontaktsikt}

Sikts single point of contact er alltid Sikt Servicesenter (SSC).  

E-post: kontakt@sikt.no
Telefon: 73 55 79 00

Se [Sikts nettside](https://sikt.no/kontakt-oss) for åpningstider. 

Kritiske henvendelser kan meldes 24/7. Utenfor ordinær arbeidstid, ring oppgitte telefonnummer og tast 1. 

## Ansvar

### Kundens brukerstøtte og tekniske ressurspersoner 

Kunden har ikke noe overvåkningsansvar av utstyret eller nettet. Dette er Sikts ansvar. 

Kunden har som ansvar å utføre følgende oppgaver, enten av brukerstøttefunksjonen eller ved tekniske ressurspersoner:

#### Utføre lokalt arbeid 

- Utføre tilkoblinger i kommunikasjonsrom/etasjefordelere for å koble til brukerpunkter ute i kontorarealene til svitsjer. 
- Bytte komponenenter som er defekte etter ønske fra Sikt. 

#### Utføre godkjente endringer i lokalnettet

Virksomheten selv vil kunne gjøre enkelte endringer selv. F.eks vil kunden ha mulighet til å endre VLAN på et brukerpunkt/svitsjeport ved hjelp av NAV. 

#### Bestille endringer i lokalnettet

Endringer i nettet som kunden selv ikke kan utføre, må bestilles av kunden via [Kontaktpunkter hos Sikt](#kontaktsikt). Merk at kun personer som er satt som "Teknisk ansvarlig", som beskrevet i [Kontaktpunkter hos kunden](#kontaktkunden), vil kunne bestille endringer. Dersom en tredjepart trenger at det utføres endringer, skal dette gå via en av de kontaktpersonene som står nevnt som "Teknisk ansvarlige". 

#### Grunnleggende feilsøking

Når brukere opplever feil/hendelser så skal kundens brukerstøtte og/eller tekniske ressurspersoner gjøre grunnleggende feilsøking før eventuelt eskalering til Sikt. 

*Sjekke overvåkningssystemer*

Opplæring i overvåkningssystemer gis etter behov. 

- Sjekk status i NAV. Spesielt viktig ved henvendelse fra flere brukere.
  - Logg inn på lokal NAV-installasjon og sjekk om det er noen alarmer som kan være grunne til problemet. 
- Sjekk status i trådløst administrasjonssystem. Spesielt viktig ved henvendelse fra flere brukere.  
  - Gjelder kun dersom kunden har fått tilgang til det trådløse overvåkningssystemet.
  - Logg inn og sjekk om det er rapporterte feil i trådløsnettet.  

Dersom overvåkningssystemene ikke gir noe indikasjon på at det er noe feil så kommer "Sikts guide med tips og triks for å utføre grunnleggende feilsøking i lokalnett" til nytte. Denne finner du på [Grunnleggende feilsøking ved problemer i lokalnett](grunnleggende-feilsok-lokalnett). Her får du også mye informasjon som du kan bruke ved eskalering til Sikt. 

#### Eskalering av incidenter til Sikt

Se [Nødvendig informasjon før eskalering av lokalnett-relaterte saker til Sikt](info-ved-eskalering) for å se hva som må være med av informasjon før sak eskaleres til Sikt. Kontaktpunkt for Sikt finnes lengre opp i denne artikkelen under [Kontaktpunkter hos Sikt](#kontaktsikt).

### Sikt Servicesenter (SSC)

SSC har som ansvar å bistå kundens brukerstøtte i grunnleggende feilsøking og eventuelt eskalere hendelser/problemer og support-saker til Sikts 2. linje ved Sikt Campustjenester. 

SSC har også som ansvar å varsle kundens brukerstøtte ved planlagte endringer eller hendelser som oppdages av Sikt. Vanligvis vil SSC varsle kunden om planlagte endringer minst 8 virkedager før endringstidspunktet. Ved hasteendringer, vil det varsles så tidlig som mulig, men kunden kan bli kontaktet på kontaktpunkt "Teknisk ansvarlig" for å gi innspill til tidspunkt for endringen. 

### Sikt 2. linje (Campustjenester)

Sikts 2. linje har som ansvar å utføre dypere feilsøking på hendelser/problemer og spørsmål fra kunden. 

Ressurser her har også som ansvar å sørge for kontinuerlig drift og overvåkning av kundens lokalnett. De vil, gjennom SSC, sørge for å varsle kunden ved avvik/hendelser og planlagte endringer. Planlagte endringer kan f.eks være halvårlig programvareoppgradering av komponeneter i kundens lokalnett. 

