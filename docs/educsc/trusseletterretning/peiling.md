# Peiling – virksomhetens sikkerhetsdata fra eduCSC

*Peiling* er hvor sikkerhetsdata for din virksomhet fra eduCSC blir gjort tilgjengelige gjennom dashbord og direkteoppslag i datakilder. I Peiling kan du finne data knyttet til sårbarheter og trusler på ditt nettverk og dermed «få peiling» på hva neste steg er. 

Peiling finner du på https://peiling.educsc.sikt.no.

## Få tilgang til Peiling

Peiling benytter [Feide](https://www.feide.no/) som innloggingsløsning. Alle virksomheter tilknyttet eduCSC er allerede gitt tilgang til å aktivere tjenesten i Feide.

For å få tilgang til [Peiling](https://peiling.educsc.sikt.no) må din virksomhet gjøre følgende:
1. Sørg for at en bruker med din e-postadresse allerede er lagt til som medlem i din virksomhet i [eduCSC Portalen](https://portal.educsc.sikt.no). En admin i din virksomhet kan legge deg til. 
1. Din organisasjons **Feide-admin** logger inn i [Feide-kundeportal](https://kunde.feide.no/) og aktiverer tjenesten `eduCSC Peiling`.
4. Logg inn på [Peiling](https://peiling.educsc.sikt.no) ved bruk av Feide. Merk at tjenesten er begrenset til forskningsnettet (AS224), slik at VPN er nødvendig fra eksterne lokasjoner.

## Bruk av Peiling

Peiling er basert på tjenesten Grafana. Grafana muliggjør blant annet å opprette dashbord basert på en eller flere datakilder og å søke direkte i datakildene gjennom «Explore». 

Cybersikkerhetssenteret tilbyr introduksjonskurs i bruk av Peiling for alle kunder. Ta kontakt på Mattermost eller kontakt@sikt.no ved ønske om dette.

### Dashbord
Velg «Dashboards» i venstremenyen, og du vil komme til en side med en liste over tilgjengelige dashbord for din virksomhet.

Dashbordene som ligger i mappen «Levert av eduCSC» er forhåndsdefinerte løsninger for visning av trussel- og sårbarhetsdata for din virksomhet. For råd om bruk av hvert enkelt dashbord, se på hjelpetekstene på dashbordet, skriv i kanalen «Peiling» på Mattermost, eller kontakt oss på kontakt@sikt.no.

Merk at alt som ligger i mappen «Levert av eduCSC» blir overskrevet daglig. Hvis dere ønsker å gjøre egne endringer anbefaler vi å opprette deres egne dashbord i en mappe utenfor mappen «Levert av eduCSC».

### Direktespørringer i Explore
Velg «Explore» i venstremenyen, og du vil komme til en side med en datakilde-velger på toppen, og en «Query Builder» midt på siden. I «Query Builder» kan du velge database og tabell og bygge opp spørringen du ønsker. Ved å bytte «Editor Type» til «SQL Editor» kan du skrive rene SQL-spørringer mot de underliggende datakildene. 

Merk at man kan bytte sømløst fra «Query Builder» til «SQL Editor», men å bytte fra «SQL Editor» til «Query Builder» er ikke alltid mulig hvis spørringen er kompleks. Det er derfor lurt å kopiere SQL-spørringen sin hvis man vil prøve å bytte tilbake til «Query Builder». 
