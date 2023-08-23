# Oppsett av MS Defender-integrasjon

For å ta i bruk eduCSC sine sperrelister i Microsoft Defender ATP, må du lage en
app-registrering hos Microsoft. eduCSC bruker denne til å kople seg til og
fortløpende legge inn indikatorer som skal blokkeres eller alarmeres.

Slik går du fram:

- Lag en app-registrering (se [Microsoft sin
  guide](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)).
  Merk deg **«directory (tenant) ID»** og **«application (client) ID»**.
- Via «API permissions», legg til WindowDefenderATP: Ti.ReadWrite («Read and
  write IOCs belonging to the app»).
  - Merk: Dette er **ikke** det samme som `Ti.ReadWrite.All`. Vi anbefaler ikke å bruke denne, siden
    den gir større tilganger enn eduCSC trenger. Mer konkret kan vi få innsikt i ev. lukket
    informasjon fra andre leverandører eller internt i indikatorlistene til Microsoft Defender.
- Via «Certificates and secrets», lag en client secret. **Skriv ned innholdet i
  hemmeligheten**, dvs. «client secret». Husk også at denne må meldes til eduCSC
  på nytt om hemmeligheten går ut på dato (expiry).

Meld deretter følgende tilbake til eduCSC (via IRT-chat):

- Directory (tenant) ID
- Application (client) ID
- (Client) secret, det vil si hemmeligheten du laget tidligere. Merk at dette er
  selve verdien og **ikke** «secret ID». Om du ikke skrev det ned, slett den
  gamle hemmeligheten og lag en ny.
- Om du vil ha alarmer uten blokkering i starten eller ikke. Vi anbefaler dette
  for å unngå unødvendig risiko og ev. frustrasjoner hos brukerne i
  innkjøringsfasen. Dette kan enkelt skrus av eller på ved å sende melding til
  eduCSC.

Synkronisering tar typisk 10 minutter etter det er lagt inn. Du kan stadfeste at
data kommer inn ved å besøke [sikkerhetsportalen til Microsoft](https://security.microsoft.com),
gå til «Settings», deretter «Endpoints», «Indicators» og til sist «URLs/Domains».
Reglene til eduCSC starter med «EDUCSC <FEEDNAMN» -».

For å teste på klient, sjekk om domenet `ms-atp.dnsbrannmur[.]no` lager varsel
eller blokkering. Merk at det kan ta noe tid for Microsoft synkroniserer all
dataen ut på endepunkt.

Ved mistanke om falske positive, kontakt eduCSC via IRT-chat. Dette gjelder
spesielt ved blokkering.
