---
title: Identitets og tilgangsstyring (Felles IAM)
disableTitleTagline: true
---

Identitets- og tilgangsstyring (Felles IAM) handler om å gi studenter, ansatte og gjester de riktige tilgangene til digitale systemer og tjenester. Samt avslutte tilganger til systemer, tjenester og ressurser for brukere som ikke lenger skal ha det.

Basisprodukt som benyttes i denne Felles IAM løsningen er [Rapid Identity](./produkt), utviklet av 3. parts leverandøren Identity Automations. Sikt leverer tilpasninger og implementering i Norge i henhold til UH sektoren og virksomheter behov og endringsønsker. I tillegg benyttes Account Claim (kontoaktivering) som Sikt både utvikler og drifter.

For en overordnet beskrivelse av funksjonalitet [Les mer om IAM-tjenesten på sikt.no](https://sikt.no/tjenester/felles-iam)

For informasjon om arkitektur se
[En overordnet arkitektur for IAM](./arkitektur) 

og for mulig gevinstrealisering se [Gevinster ved Felles IAM](./gevinster) 

### Brukerkonto (tilgang)

[Livssyklus for identitet og tilgang](./livssyklus) har som utgangspunkt å opprette, endre og fjerne brukerkontoer basert på data fra [kildesystemer](./kildedata). 
Noe av den mest sentrale funksjonaliteten i Felles IAM er [tilgangsstyring til målsystemer](./tilgangsstyring), hvor tilganger kan settes basert på [virksomhetsroller](./virksomhetsroller).

Felles IAM kan identifisere en person på tvers av utdanningsinstitusjoner, og [generere et nasjonalt unikt brukernavn og en identifikator](./brukernavn).
Når en bruker møter en utdanningsinstitusjon for første gang, skjer det via et unikt brukergrensesnitt [Account Claim](./kontoaktivering), hvor man blant annet setter passordet, i henhold til [Passordpolicy](./passordpolicy). 

### Rapportering 
Når tilgangsstyring er samlet og kontrollert fra et sted vil [rapportering](./rapportering) gi oversikt og kontroll, og bidra til å hjelpe med å etterlevere lovverk og standarder.

### Forvaltning 
Forvaltning av IAM på en institusjon er et samarbeid, hvor [ansvar fordeles ut i organisasjonen](./ansvar), og er ikke begrenset til IT-avdelingen.

For mer tekniske dypdykk:
* [Felles IAM datamodell](./datamodell)
* [REST API for integrasjoner mot målsystemer](./datamodell)

I [referanser](./referanser) vil du finne flere lenker til andre kilder som dokumenterer løsningen ytterligere.
