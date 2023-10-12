---
description: "Hjelp til oppsett av DF\xD8 SAP sine REST API."
title: "DF\xD8 SAP"
---

# DFØ SAP

Hjelp til oppsett av DFØ SAP sine REST API.

## Om API-ene

DFØs løsninger for økonomi og lønn brukes av mange i sektoren. DFØ tilbyr API som er felles for sektoren, men der hver institusjon får ut sine data.

DFØ tilbyr flere ulike API-er for ulike data, som ansattinformasjon, stillingsdata og organisasjonsdata. Se [DFØs API-portal](https://api-portal.dfo.no/) for mer informasjon.

For å kunne bruke DFØs API må din institusjon bli "oppgradert" hos DFØ. Mange institusjoner må i dag forholde seg til CSV-filer fra DFØ. Dette må gjøres i dialog med DFØ, og dette vil kunne ta tid.

DFØ krever autentisering via
[Maskinporten](https://samarbeid.digdir.no/maskinporten/maskinporten/25) i sin
kommunikasjon, så institusjonen må registrere seg der før integrasjonen kan
påbegynnes. Maskinporten benytter [Public Key Authentication](https://www.ssh.com/academy/ssh/public-key-authentication) for autentisering. Oppsettet innebærer at institusjonen genererer en hemmelig privat nøkkel til seg selv og en korresponderende offentlig nøkkel til Maskinporten. Den private nøkkelen brukes for å bekrefte identiteten til innehaveren, i dette tilfellet institusjonen. Den offentlige nøkkelen brukes av Maskinporten for å autentisere institusjonen og til å autorisere tilgang.

Som de fleste andre APIene settes APIet opp med autentisering mot vår API gateway, og deretter sendes requesten videre til backend-APIet. I API gatewayen legger vi på token og evt. API-nøkkel som brukes mot DFØs APIer. Tjenesten som utsteder token kan enten settes opp i Gravitee ([se bruksanvisning her](/docs/datadeling/teknisk-plattform/api/maskinporten)) eller hos den enkelte institusjon

## Standardoppsett

DFØ er en fellestjeneste, og må/bør derfor settes opp likt hos alle institusjoner. Du kan sette dette opp ved å laste inn fil med standardoppsett:

[Lonnssystem-api-template.json](Lonnssystem-api-template.json)

## Hvordan sette opp API-ene

1. Registrer din institusjon hos Maskinporten, [se planleggingsaktiviteten her](https://samarbeid.digdir.no/maskinporten/konsument/119). Registrer deretter en integrasjon i maskinporten, se veiledning her(https://docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web.html) Sluttresultatet er at du har en integrasjon hvor du kan autentisere vha. virksomhetssertifikat eller et sertifikat du har laget selv (og som bare brukes mot denne integrasjonen) Integrasjonen må ha blitt tildelt de nødvendige scopes og du må ha issuer-ID tilgjengelig
2. Opprett tokentjeneste om du ikke har gjort det tidligere og gi APIet tilgang.
   - Om du vil lage en i gravitee [se veiledning her](/docs/datadeling/teknisk-plattform/api/maskinporten) Gi deretter SAP-APIet tilgang ved å opprette en applikasjon for dette og søk om tilgang til maskinporten-APIet. Når tilgangen er gitt får du en API-nøkkel som vi bruker i neste steg
3. Last ned standardoppsettet over, og opprett tjenesten i API manager. Se [veileder for å registrere en tjeneste i API manager via fil](/docs/datadeling/veiledere/api-manager/importer-api).
   1. Gå inn i APIet og endre på Navn og beskrivelse
   2. Gå til proxy -\> Entrypoint og evt. endre dette
   3. Hvis prod: gå inn på proxy -\> backend services. Fjern "-test" fra URLen slik at det står https://api.dfo.no
   4. Klikk på Design og policy-en HTTP Callout. Endre URL til den til tokentjenesten. Endre headeren X-Gravitee-Api-Key til nøkkelen fra punkt 2 om du har satt opp maskinporten-API i API Manager. Under headeren iss legger du inn ISSUER-ID for maskinporten-integrasjonen. Om du kjører token-tjenesten selv, konfigurer sikker autentisering og evt. headere/parametre etter behov.
4. Registrer DFØ SAP som tjeneste i _Selvbetjeningsportalen for RabbitMQ_ (se [veileder for å registrere tjenesten](/docs/datadeling/veiledere/meldingsk%C3%B8/opprett-tjeneste)). Hent ut tilkoblingsdetaljene som det blir opplyst om.

   - Om DFØ skal publisere meldinger direkte til deres RabbitMQ, send en forespørsel om etablering av notifikasjonsoverføring til it-support@dfo.no. Legg ved tilkoblingsdetaljene som du finner i selvbetjeningsportalen. Passordet bør sendes via en sikker tredje kanal (*ikke* via e-post).
   - Om dere heller vil hente meldinger fra rabbitmq hos DFØ (eller en annen rabbitmq-installasjon) gjøres det vel å sette opp en shovel i rabbitMQ. Det finnes flere oppskrifter på hvordan man setter opp shovel. Her er oppskrift på en måte man kan sette det opp i rabbitMQ, mens man fremdeles gjør tilgangsstyring i BROM. Dette krever ekstra tilganger i rabbitMQ for å gjøre nødvendig oppsett.

     1. Registrer applikasjon i BROM. Velg at den skal publisere meldinger. Velg et godt navn og beskrivelse, dette er applikasjonen som utviklere abonnerer på om de vil ha meldinger fra deres SAP-installasjon
     2. (Valgfritt) For å lett kunne se om shovel-en fungerer kan du opprette en applikasjon som abonnerer på meldinger fra applikasjonen du opprettet i forrige punkt. Godkjenn denne. Når shovelen fungerer vil det komme meldinger inn i meldingskøen for denne applikasjonen. Merk: denne bør slettes i ettertid.
     3. Om IntArk-koordinator ikke har nødvendige rettigheter i rabbitMQ fra før,  kontakt support som oppretter bruker med nødvendinge rettigheter.
     4. Sørg for å ha tilkoblingsinformasjon (brukernavn, passord, vhost, kø-navn, hostnavn) tilgjengelig
     5. Logg inn i rabbitMQ med bruker som har rettigheter til å opprette shovel. I BROM er det link til innloggingsiden her: ![applikasjonsinfo i BROM](/datadeling/img/image-20211006190506-1.png)
     6. Naviger til siden "Admin" og undemenyen "Shovel Management" ![webside for Shovel management i rabbitmq](/datadeling/img/rabbitmq-shovel-1.png)
     7. Under Add shovel, fyll ut:

        - Velg vhost med samme navn som applikasjonen i punkt 1 (ikke nødvendig, men gjør det lettere å holde oversikt senere)
        - Gi et godt navn
        - Under source så er protocol nesten alltid AMQP 0.9.1, så det kan stå
        - source URI: adresse for å koble seg på DFØs rabbitmq riktig. Denne er litt komplisert. Den skal være amqps://BRUKERNAVN:PASSORD@mq.dfo.no/VHOST

        _TIPS: lag denne i notepad eller annen tekstbehandler og bruk klipp og lim for å fylle inn i rabbitMQ. Feltet for dette i RabbitMQ er for kort til å se evt. feil_

        - source queue: navn på kø
        - destination URI: her er det samme rabbimtmq som vi er logget inn på, så denne er lettere Fyll inn amqp:///VHOST (hvor vhost er navnet på applikasjonen fra punkt 1) _OBS: merk at det er 3 skråstreker!_
        - Endre fra queue til exchange
        - fyll inn navn på exchange. Det er outgoing_APPLIKASJONSNAVN (altså outgoing + underscore + navn på appliasjon. Du kan og se det under tilkoblingsdetaljer på publiseringsiden i brom)
        - routing key: La denne være blank. (Da vil meldingene beholde routing key som de har i kilden. Om du setter en verdi her til denne verdien overskrive eksisterende routing key)
        - Til sist trykk på "add shovel" Gå til siden "Shovel status" og se at shovlen du har laget endrer status til Started. Om den ikke endrer seg fra Starting til Started ila. et par minutter: sjekk tilkoblingsdetaljene, slett shovelen og opprett på nytt

API-et og meldingshåndtering er nå satt opp.

### Hvordan verifisere at API-et fungerer:

1. Opprett din egen klient (applikasjon) i API manager, om du ikke har dette allerede.
2. Be om tilgang til API-et.
3. Godkjenn tilgangen til API-et. Du har nå fått en egen API-nøkkel for din klient.
4. Bruk klientens API-nøkkel, og sjekk at du får hentet ut data:

   - Med curl (husk å endre det som står i uthevet tekst):

   ```

   curl --include -H "X-Gravitee-Api-Key: **API-nøkkel**" https://gw-**INSTANS**.intark.uh-it.no/**lonn**/v1/organisasjoner/v1/

   ```

   - Med Powershell (husk å endre det som står i uthevet tekst):

   ```

   $headers = @{
     'Accept' = 'application/json'
     'X-Gravitee-Api-Key' = **API-nøkkel**
   }
   Invoke-WebRequest -Headers $headers -Uri "https://gw-**INSTANS**.intark.uh-it.no/**lonn**/v1/organisasjoner/v1"
   ```

   - Hvis alt er ok kan du forvente å få tilbake noe som starter med "HTTP 200" og JSON-data.
