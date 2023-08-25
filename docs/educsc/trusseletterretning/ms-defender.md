# Oppsett av MS Defender-integrasjon

For å ta i bruk eduCSC sine sperrelister i Microsoft Defender ATP, må du lage en
app-registrering hos Microsoft. eduCSC bruker denne til å kople seg til og
fortløpende legge inn indikatorer som skal blokkeres eller alarmeres.

I forkant bør du gjøre to vurderinger:

- **Hvordan skal utrulling skje?** Vi kan skru av blokkering. Dermed vil ikke brukerne
  bli forhindret i oppstartsfasen, og evt. falske positive kan lukes ut. Vi tilrår
  dette alternativet for de aller fleste. Blokkering er enkelt å skru på igjen.
- **Hvor mange indikatorer?** Microsoft opererer for tiden med en grense på 15 000
  egendefinerte indikatorer totalt i MS Defender. Dette inkluderer våre indikatorer.
  Å gå over denne grensen kan føre til at synkroniseringen feiler. Det er derfor
  mulig å sette et tak på hvor mange indikatorer du vil ha. Vi legger inn ferskere
  indikatorer eller de med høyere alvorlighet først. Det er også enkelt å justere senere.

Slik går du fram:

- Lag en app-registrering (se [Microsoft sin
  guide](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)).
  Merk deg **«directory (tenant) ID»** og **«application (client) ID»**.
- Via «API permissions», legg til WindowDefenderATP: Ti.ReadWrite («Read and
  write IOCs belonging to the app»).
  - Merk: Dette er **ikke** det samme som `Ti.ReadWrite.All`. Vi anbefaler ikke å bruke denne, siden
    den gir større tilganger enn eduCSC trenger. Mer konkret kan vi med denne tilgangen både se og endre
    indikatorer du eller andre leverandører har lagt inn, som nær alltid er unødvendig.
- Via «Certificates and secrets», lag en client secret. **Skriv ned innholdet i
  hemmeligheten**, dvs. «client secret». Husk også at denne må meldes til eduCSC
  på nytt om hemmeligheten går ut på dato (expiry).

Meld deretter følgende tilbake til eduCSC (via IRT-chat):

- Directory (tenant) ID
- Application (client) ID
- (Client) secret, det vil si hemmeligheten du laget tidligere. Merk at dette er
  selve verdien og **ikke** «secret ID». Om du ikke skrev det ned, slett den
  gamle hemmeligheten og lag en ny. Om hemmeligheten har begrenset varighet,
  si hvilken dato (dag) den går ut, slik at vi kan varsle nær utgangsdato.
- Om du vil skru av blokkering i oppstarten (anbefalt).
- Om aktuelt: Et tak på hvor mange indikatorer vi skal synkronisere.

Synkronisering tar typisk 10 minutter etter det er lagt inn. Du kan stadfeste at
data kommer inn ved å besøke [sikkerhetsportalen til Microsoft](https://security.microsoft.com),
gå til «Settings», deretter «Endpoints», «Indicators» og til sist «URLs/Domains».
Tittelen på reglene til eduCSC starter med «EDUCSC <FEEDNAVN> -».

For å teste på klient, sjekk om domenet `ms-atp.dnsbrannmur[.]no` lager varsel
eller blokkering. Merk at det kan ta noe tid for Microsoft synkroniserer all
dataen ut på endepunkt.

Ved mistanke om falske positive, kontakt eduCSC via IRT-chat. Dette gjelder
spesielt ved blokkering. Det samme gjelder om du vil gjøre endringer i oppsettet,
for eksempel skru på blokkering eller minke antallet indikatorer.
