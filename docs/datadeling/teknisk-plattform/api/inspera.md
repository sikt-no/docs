---
description: "Hjelp til oppsett av Inspera sitt API."
title: Inspera
---

# Inspera

Hjelp til oppsett av Inspera sitt API.

## Om API-ene

DFØs løsninger for økonomi og lønn brukes av mange i sektoren. DFØ tilbyr API som er felles for sektoren, men der hver institusjon får ut sine data.

DFØ tilbyr flere ulike API-er for ulike data, som ansattinformasjon, stillingsdata og organisasjonsdata. Se [DFØs API-portal](https://api-portal.dfo.no/) for mer informasjon.

For å kunne bruke DFØs API må din institusjon bli "oppgradert" hos DFØ. Mange institusjoner må i dag forholde seg til CSV-filer fra DFØ. Dette må gjøres i dialog med DFØ, og dette vil kunne ta tid.

## Standardoppsett

[Last ned template for API-definisjonen for Inspera.](./Inspera-api-template.json)

## Hvordan sette opp API-ene

1. Last ned standardoppsettet over, og opprett tjenesten i API manager. Se [veileder for å registrere en tjeneste i API manager via fil](/docs/datadeling/veiledere/api-manager/importer-api).
2. Opprett client-id og client-secret i Inspera med riktige rettigheter
3. client-id og client-secret laget som properties. Endre disse ved å navigere til design og properties (link til properties er oppe til høyre) og endre der
   **hvis test** endre entrypoint fra /inspera til /test/inspera . Endre navn på properties. Husk at dette må endres i callout-policy slik at det blir likt
4. Sett riktig URL backend (under proxy og backend endpoint) og i callout-policy (Design - policy -> klikke på policy som heter Callout) Husk i lagre
5. Når alt er endret, klikk på redeploy (gul linje øverst) og start APIet

API-et er nå satt opp.

### Hvordan verifisere at API-et fungerer:

1. Opprett din egen klient (applikasjon) i API manager, om du ikke har dette allerede.
2. Be om tilgang til API-et.
3. Godkjenn tilgangen til API-et. Du har nå fått en egen API-nøkkel for din klient.
4. Bruk klientens API-nøkkel, og sjekk at du får hentet ut data:

   - Med curl (husk å endre det som står i uthevet tekst):

   ```

   curl --include -H "X-Gravitee-Api-Key: **API-nøkkel**" https://gw-**INSTANS**.intark.uh-it.no/**inspera**/v1/

   ```

   - Med Powershell (husk å endre det som står i uthevet tekst):

   ```

   $headers = @{
     'Accept' = 'application/json'
     'X-Gravitee-Api-Key' = **API-nøkkel**
   }
   Invoke-WebRequest -Headers $headers -Uri "https://gw-**INSTANS**.intark.uh-it.no/**inspera**/v1"
   ```

   - Hvis alt er ok kan du forvente å få tilbake noe som starter med "HTTP 200" og JSON-data.
