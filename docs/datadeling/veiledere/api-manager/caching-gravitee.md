---
description:
  "Hvordan du kan cache responser i Gravitee for \xE5 redusere belastningen\
  \ mot API-et ditt."
title: Caching i gravitee
---

# Caching i gravitee

Hvordan du kan cache responser i Gravitee for å redusere belastningen mot API-et ditt.

For å sette på caching må man opprette en eller flere cache-ressuser, og deretter legge på en policy som benytter denne.

### Opprette en cache-ressurs

[![Designmeny](/datadeling/img/image-20201021141543-1.png)](/datadeling/img/image-20201021141543-1.png)

Naviger til API-et hvor du skal konfigurere en cache. Velg Design i den venstre sidemenyen under API-ets navn, og deretter Resources under "GENERAL". Trykk på sirkelen med et pluss-tegn for å opprette en ny ressurs. Fyll inn navn og vel Cache som Type.

Du må skrive inn navn to steder. Det første feltet, "Name", er slik cachen vil være synlig når man ser på tilgjengelige ressurser. Det andre feltet, "cache name", er navnet som brukes på den tilhørende policyen. Bruk gjerne samme navn begge steder.

Configuration:

- Cache name: navn på tilhørende policy
- Time to idle: hvor lenge et svar bli cachet uten at det blir spurt på
- Time to live: hvor lenge et svar blir cachet uavhengig av om det blir spurt på eller ikke
- Max entries on heap: hvor mange svar som kan bli lagret i denne cachen

[![Cache-ressurs](/datadeling/img/image-20201021145429-2.png)](/datadeling/img/image-20201021145429-2.png)

### Opprette en cache policy

Gå til Design, trykk deretter på Policies under "GENERAL". Dra ønsket cache-policy fra tilgjengelige policies over til riktig path. Fyll inn informasjon for å fullføre konfigurasjonen.

- Cache name: navn nr. 2 om du brukte forskjellige navn på ressursen og cachen i opprettelsen av cachen i forrige steg.
- Key: dette er det viktigste valget, se konfigurasjon lenger ned. Som oftest er dette ett eller flere parameter.
- Time to live: kan settes lavere enn det som ble valgt for cache-ressursen i forrige steg
- Scope: velg mellom API eller Application

Cachen lagres som en key-value-store , dvs. én nøkkel gir ett svar. Key kan f.eks. være et parameter. For å bruke parameteren "status" skriv:

```Text
{#request.params['status']}
```

Da vil svaret bli cachen med en nøkkel lik verdien i parameteret, f.eks. "sold", "available" eller en tom streng. Merk at om det er flere parameter som er mulig å bruke kan det bli tull. Det kan unngås ved å bruke en kombinasjon av parametre, f.eks. ved å bruke en kombinasjon av de to parameterene "status" og "tags" slik:

```Text
{#request.params['status']}-{#request.params['tags']}
```

### Expression Language-uttrykk

\{#request.params['status']} er et eksempel på et Expression Language-uttrykk. De er basert på Spring Exression Language (SpEL), og blir brukt som variabler i API Manager.
For å lese mer om dette, se offisiell dokumentasjon fra leverandøren.
