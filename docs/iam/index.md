---
title: Identitets og tilgangsstyring (Felles IAM)
disableTitleTagline: true
---

Identitets- og tilgangsstyring (Felles IAM) handler om å gi studenter, ansatte og gjester de riktige tilgangene til digitale systemer, tjenester og ressurser. Samt avslutte tilganger til systemer, tjenester og ressurser for brukere som ikke lenger skal ha det.

Basisproduktet som benyttes i Felles IAM løsningen er [Rapid Identity](/docs/iam/produkt), utviklet av tredjepartsleverandøren Identity Automations. Sikt leverer tilpasninger og implementering i Norge i henhold til UH sektorens og virksomheters behov og endringsønsker. I tillegg benyttes Account Claim (kontoaktivering) som Sikt både utvikler og drifter.

For en overordnet beskrivelse av funksjonalitet [Les mer om IAM-tjenesten på sikt.no](https://sikt.no/tjenester/felles-iam)

For informasjon om arkitektur se [En overordnet arkitektur for IAM](/docs/iam/arkitektur) 

og for mulig gevinstrealisering se [Gevinster ved Felles IAM](/docs/iam/gevinster) 

### Brukerkonto (tilgang)

[Livssyklus for identitet og tilgang](/docs/iam/livssyklus) har som utgangspunkt å opprette, endre og fjerne brukerkontoer basert på data fra [kildesystemer](/docs/iam/kildedata). 
En av de mest sentrale funksjonalitetene i Felles IAM er [tilgangsstyring til målsystemer](/docs/iam/tilgangsstyring), hvor tilganger kan settes basert på [virksomhetsroller](/docs/iam/virksomhetsroller).

Felles IAM kan identifisere en person på tvers av utdanningsinstitusjoner, og [generere et nasjonalt unikt brukernavn og en identifikator](/docs/iam/brukernavn).
Når en bruker møter en utdanningsinstitusjon for første gang, skjer det via et unikt brukergrensesnitt [Account Claim](/docs/iam/kontoaktivering), hvor man blant annet setter passordet, i henhold til [Passordpolicy](/docs/iam/passordpolicy). 

### Rapportering 
Når tilgangsstyring er samlet og kontrollert fra et sted vil [rapportering](/docs/iam/rapportering) gi oversikt og kontroll, og bidra til å hjelpe med å etterlevere lovverk og standarder.

### Forvaltning 
Forvaltning av IAM på en institusjon er et samarbeid, hvor [ansvaret fordeles ut i organisasjonen](/docs/iam/ansvar), og er ikke begrenset til IT-avdelingen.

For mer tekniske dypdykk:
* [Felles IAM datamodell](/docs/iam/datamodell)
* [REST API for integrasjoner mot målsystemer](/docs/iam/datamodell)

I [referanser](/docs/iam/referanser) vil du finne flere lenker til andre kilder som dokumenterer løsningen ytterligere.
