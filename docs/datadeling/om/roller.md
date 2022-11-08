---
slug: /datadeling/hva-er/roller/
title: Rollene i fellestjenesten for Datadeling
---

De fleste av rollene i fellestjenesten kommer fra
[referansearkitekturen](https://unit-norge.github.io/unit-ra/main/B%C3%B8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%C3%B8yere%20utdanning%20og%20forsking.html#_roller_og_ansvar_for_informasjonsforvaltning).
Se også [styringsreglene](/docs/datadeling/styringsregler) for hva rollene har
ansvar for.

## Mottaksansvarlig og datadelingskoordinator

Hver institusjon som innfører fellestjenesten bør ha sin lokale koordinator som
tar seg av dialogen med Sikt. Under innføringen av IntArk er det denne personen
Sikt forholder seg til.

Den mottaksansvarlige må sikre at institusjonen innfører fellestjenesten på en
hensiktsmessig måte, blant annet ved:

- Kjenne til anbefalingene fra fellestjenesten.
- Relevante interessenter blir holdt informert (blant annet dataforvaltere,
  tjenesteeiere, utviklere og anskaffere).
- Intern dokumentasjon blir oppdatert.
- Se til at datatilbydere og konsumenter får tilganger i den tekniske
  plattformen.
- Holde Sikt oppdatert på innføringen av IntArk.
- Koordinere opplæringstilbudet fra Sikt internt hos institusjonen.
- Melde tilbake til Sikt om mangler og behov.

Etter innføringen bør institusjonen også ha en koordinator som kjenner til
fellestjenesten, da dette kan gjøre videre forvaltning enklere.

## Datatilbyder

En _datatilbyder_ er en person, tjeneste eller enhet som har ansvar for data
som er brukbare for andre - dvs. kildedata. Referansearkitekturen deler denne
rollen opp i tre roller: tjenesteeier, tjenesteansvarlig og datforvalter, men i
fellestjenesten forholder vi oss primært bare til alt som datatilbyderen.
Institusjonen er likevel anbefalt å følge rolledefinisjonen fra
referansearkitekturen.

I fellestjenesten er datatilbyderens primære ansvar at dataene blir gjort
tilgjengelige, uavhengig av hvem som er konsument. Datatilbyder må også følge
[styringsreglene](/docs/datadeling/styringsregler), og bør også se på
anbefalingene rundt effektiv datadeling.

I den tekniske plattformen skal datatilbydere publisere sine API, og registrere
sin publisering av notifikasjoner.

## Konsument

En person, enhet eller tjeneste som trenger å hente data fra et kildesystem.
Husk at du kan både være datatilbyder og konsument - dette avhenger av hvilke
data du ser på.

I fellestjenesten er konsumenten pliktig å hente data direkte fra
kildesystemet, og å rapportere om feil i data til datatilbyder. Konsumenten må
også selv håndtere systemspesifikke tilpasninger av dataene.

I den tekniske plattformen må konsumenter registrere sin tjeneste for å kunne
søke om tilgang til datatilbydere sine API, og kunne abonnere på deres
notifikasjoner.

## Dataforvalter

Dataforvalter er den enhet/person som har ansvaret for å administrere dataene
hos en datatilbyder. Vi anbefaler at dette ansvaret plasseres, men det er opp
til institusjonen om dette plasseres som en egen roller, eller sammen med for
eksempel datatilbyder, tjenesteeier eller tjenesteansvarlig.

Dataforvalter er ansvarlig for datakvaliteten, dvs:

- At data er komplette
- At data er maskinlesbare
- At data er riktig formaterte

## Se også

- [Begrepsbruk](/docs/datadeling/begreper)
- [Rollene i referansearkitekturen](https://unit-norge.github.io/unit-ra/main/B%C3%B8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%C3%B8yere%20utdanning%20og%20forsking.html#_roller_og_ansvar_for_informasjonsforvaltning)
- [Styringsreglene til fellestjenesten](/docs/datadeling/styringsregler)
