---
description: "Hjelp til oppsett av Integra sitt API.\n\n\nTODO: Uavklart, m\xE5 lages"
title: Integra
---

# Integra

Hjelp til oppsett av Integra sitt API.

TODO: Uavklart, må lages

## Om API-et

TODO

DFØs løsninger for økonomi og lønn brukes av mange i sektoren. DFØ tilbyr API som er felles for sektoren, men der hver institusjon får ut sine data.

DFØ tilbyr flere ulike API-er for ulike data, som ansattinformasjon, stillingsdata og organisasjonsdata. Se [DFØs API-portal](https://api-portal.dfo.no/) for mer informasjon.

TODO: For å kunne bruke DFØs API må din institusjon bli "oppgradert" hos DFØ. Mange institusjoner må i dag forholde seg til CSV-filer fra DFØ. Dette må gjøres i dialog med DFØ, og dette vil kunne ta tid.

## Standardoppsett

DFØ er en fellestjeneste, og må/bør derfor settes opp likt hos alle institusjoner. Du kan sette dette opp ved å laste inn fil med standardoppsett:

**TODO.json**

## Hvordan sette opp API-ene

1. Last ned standardoppsettet over, og opprett tjenesten i API manager. Se [veileder for å registrere en tjeneste i API manager via fil](/docs/datadeling/veiledere/api-manager/importer-api).
2. Registrer DFØ SAP som tjeneste i _Selvbetjeningsportalen for RabbitMQ_ (se [veileder for å registrere tjenesten](/docs/datadeling/veiledere/meldingsk%C3%B8/opprett-tjeneste)). Hent ut tilkoblingsdetaljene som det blir opplyst om.
3. Du som er lokal tjenesteier for DFØ må kontakte DFØ om API-et. Vanligvis gjøres dette ved å sende en e-post til integrasjon@dfo.no med:
   1. Be om å få API-nøkkel som gir full tilgang til din institusjons data i DFØs API-er.
   2. Send med tilkoblingsdetaljene for publisering av notifikasjoner fra selvbetjeningsportalen. Passordet bør sendes på andre måter enn via e-post.
4. Når du har fått API-nøkler, må du legge de inn i API manager. (TODO: Lag veileder for dette?)
   1. Logg på API manager
   2. Gå til ditt DFØ-API
   3. Gå til siden "meta" TODO
   4. Legg inn API-nøklene i feltet **value**, der name-feltet heter "DFØ ansatt", "DFØ stilling", og "DFØ organisasjon", etc.

API-et og meldingshåndtering er nå satt opp.

### Hvordan verifisere at API-et fungerer:

1. Opprett din egen klient (applikasjon) i API manager, om du ikke har dette allerede.
2. Be om tilgang til API-et.
3. Godkjenn tilgangen til API-et. Du har nå fått en egen API-nøkkel for din klient.
4. Bruk klientens API-nøkkel, og sjekk at du får hentet ut data:

   - Med curl (husk å endre det som står i uthevet tekst):

   ```

   curl --include -H "SOAPACtion: **TODO**" -H "X-Gravitee-Api-Key: **API-nøkkel**" https://gw-**INSTANS**.intark.uh-it.no/**lonn**/v1/organisasjoner/v1/

   ```

   - Med Powershell (husk å endre det som står i uthevet tekst):

   ```

   $headers = @{
     'Accept' = 'application/json'
     'X-Gravitee-Api-Key' = **API-nøkkel**
     'SOAPAction' = 'TODO'
   }
   Invoke-WebRequest -Headers $headers -Uri "https://gw-**INSTANS**.intark.uh-it.no/**lonn**/v1/organisasjoner/v1"
   ```

   - Hvis alt er ok kan du forvente å få tilbake noe som starter med "HTTP 200" og JSON-data.
