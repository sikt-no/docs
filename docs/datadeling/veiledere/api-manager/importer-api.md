---
title: Importer API-oppsett fra fil
---

I stedet for å registrere et API fra bunnen av kan du importere det fra en fil
eksportert fra en annen Gravitee-installasjon, eller definert i Open Api
Specification (tidligere Swagger).

### Importere API

1. Trykk på pluss-tegnet på siden for APIs for å opprette et nytt API.

   [![Lag nytt API](/datadeling/img/image-20200928121338-1.png)](/datadeling/img/image-20200928121338-1.png)

2. Velg "Import".

3. Her kan du enten importere konfigurasjon fra en fil med "import file", eller fra en link med "Import from link". Velg type og lim inn
   URL til definisjonen.

4. Velg hva du vil importere. Som oftest vil du ikke importere _Subscriptions_,
   men det er ofte tidsbesparende å importere _Plans_. Du bør gå gjennom disse
   før du publiserer API-et og slette de du ikkje trenger.
5. Klikk på "IMPORT" for å fullføre.

API-definisjoner som er eksportert fra andre Gravitee-installasjoner blir
gjerne importert korrekt. Open API/Swagger-filer må som oftest redigeres litt i
etterkant.

Det viktigste er å fikse Entrypoint og sjekke at Backend er konfigurert riktig.
Velg Proxy i den venstre sidemenyen, og deretter Entrypoints for å endre
entrypoint. Ofte er dette `/api/v1` eller lignende når man importerer fra Open
API-definisjoner, men det er ofte ønskelig med et mer beskrivende navn.

Under Proxy og Endpoints, sjekk at URL-en til backend er riktig. Autentisering
mot backend er ofte ikke satt opp. Se veilederen for å [Konfigurere
backend](/docs/datadeling/veiledere/api-manager/backend)
for dette.
