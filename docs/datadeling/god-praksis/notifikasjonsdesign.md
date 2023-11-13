---
slug: /datadeling/god-praksis/notifikasjonsdesign/
title: Hvordan designe dine notifikasjoner
---

Med "notifikasjoner" mener vi her "tynne meldinger" som går via en meldingskø
eller meldingsformidler. Se mer i
[begrepsoversikten](/docs/datadeling/begreper/notifikasjon). Disse
notifikasjonene brukes i hovedsak i integrasjonsmønsteret [hendelsesbasert
provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert).

En notifikasjon forteller deg bare at "noe har skjedd", på et maskinlesbart
format. Den inneholder også nok detaljer til at du kan vite hvor du kan få tak
i mer informasjon.

## Anbefalt standard

Hver tilbyder står selv fritt til å velge format på sine notifikasjoner, men vi
anbefaler standarden [CloudEvent](https://cloudevents.io/). Dette fordi det er
en system- og leverandøruavhengig standard som kan brukes av alle, og
inneholder mange av de samme slutningene som vi har erfart.

Notifikasjoner bør også følge de samme føringene som ved [utforming av
API](/docs/datadeling/god-praksis/api-design). Vi fraråder å lage egne
notifikasjoner som er skreddersydde for spesifikke konsumenter, men lage
notifikasjoner som er generelle og standardiserte nok til å kunne brukes av
alle konsumenter.

## Hva bør en notifikasjon inneholde?

Meningen med en notifikasjon er å fortelle konsumenter at _noe har skjedd_ i
kildesystemet, slik at de kan vurdere om de skal gjøre noe. Ved at tilbyder
selv sier i fra, slipper tilbyder at hver enkelt konsument jevnlig spør etter
om noe nytt har skjedd siden sist.

Notifikasjonen trenger som minimum å fortelle konsumentene:

- Hvilket system, instans eller API dette gjelder. Så konsumenten vet hvor data
  skal hentes fra.

- Hvilket endepunkt, entitet eller objekt endringen gjelder for.

Det er også en fordel om notifikasjonen inneholder:

- Hvilken type endring det er snakk om. Er det for eksempel oppretting, endring
  eller sletting av en entitet?

- Hvilket tidspunkt gjelder endringen for.

- Hvilke attributter har blitt endret.

Dette er optimalisering. Mer metadata om en endring gjør det enklere for
konsumenter å filtrere bort endringer som er irrelevante for de. Dette skaper
igjen mindre last på produsenten, siden færre konsumenter trenger å slå opp for
å sjekke.

### Framtidige hendelser

I noen tilfeller vil en endring ikke være gyldig før på et senere tidspunkt.
For eksempel at en saksbehandler oppretter en ny ansatt, men som ikke skal
starte før om to uker.

Tilbyderen sender en notifikasjon på tidspunktet registreringen skjedde, i
dette tilfellet når den ansatte ble registrert. Tilbyderen har **ikke** ansvar
for å sende ut en ny notifikasjon på tidspunktet endringen trer i kraft, selv
om tilbyder gjerne må gjøre det. Det er konsumenten som er ansvarlig for å
reagere på riktig tidspunkt, ikke tilbyder.

Bakgrunnen for ansvarsfordelingen er at tidspunkt for reaksjon er ulik hos
konsumentene - det er forretningslogikk som ikke bør ligge hos tilbyder. I
eksempelet med nyansatte kan for eksempel personpresentasjonsløsningen trenge å
publisere personen samme dag som startdato i avtalen, mens IGA vil måtte
opprette en brukerkonto kanskje fem dager før startdato. Andre konsumenter
trenger kanskje ikke å forholde seg til startdato i det hele tatt, men
provisjonere den nyansatte umiddelbart.

## Eksempler på notifikasjoner

Eksempel på en notifikasjon som bruker CloudEvents-standarden:

```
    {
        "specversion" : "1.0",
        "type" : "no.uio.cerebrum.account.create",
        "source" : "https://cerebrum-uio.uio.no",
        "subject" : "https://cerebrum-uio.uio.no/api/v2/accounts/123456",
        "id" : "4d3559ec67504aaba65d40b0363faad8",
        "time" : "2020-10-29T09:01:14Z",
    }
```

Dette eksempelet er en typisk "tynn melding", som forteller deg at en
brukerkonto har blitt opprettet, men ikke så mye annet. For å vite mer om
brukerkontoen må du snakke med API-et som `subject` peker til.

Eksempel på en mye enklere notifikasjon:

    accounts/123456

For enkle tjenester kan dette være godt nok. De fleste tilbydere er likevel
tjent med å eksponere mer detaljer, spesielt for å redusere antal spørringer
fra konsumentene.

## Eksempler på tjenester

- NTNU sin OrgReg gir ut notifikasjoner som følger CloudEvents-standarden.

- IGA-løsninger, som Rapid Identity og Cerebrum, gir ut notifikasjoner.

Se gjerne i institusjonenes API-kataloger for detaljer om notifikasjoner fra de
enkelte tjenestene.

## Hvorfor tynne meldinger?

Tynne meldinger gir en enklere flyt for provisjoneringsløsninger, som har fokus
på status her og nå. Meldingene er tynne for å redusere mengden
personopplysninger, og unngår at konsumentene behandler det som kildedata.
Meldinger kan bli forsinket, for eksempel at de ligger på vent i meldingskøen
mens konsumenten er nede, og vil fort kunne inneholde utdaterte data.

## Fallgruver

Notifikasjonene gir bare informasjon om at noe har skjedd, og ikke hva som har
skjedd. Ikke se på notifikasjoner som kildedata - kildedata må du få fra
tilbyders API. Faren med å bruke innholdet i notifikasjoner som kildedata er at
du kan ende opp med utdaterte data - for eksempel hvis konsument ikke har
hentet ut nye notifikasjoner fra sin meldingskø på en dag.

API og notifikasjoner bør vere i synk, dvs. snakke om de samme entitetene.
Gjøres dette ulikt blir det fort komplisert hos alle konsumenter som må tolke
og oversette.

API-et bør tilby data konsistent. Hvis en entitet finnes, bør det eksponeres i
API-et uavhengig av tidspunktet spørringen skjer på. Hvis data for eksempel
blir begrenset før et tidspunkt, og etter en viss tid, er det stor fare for at
tilbyder utfører en forretningslogikk som bør ligge hos konsumentene. Plutselig
dukker det opp en konsument med behov for data på et enda senere tidspunkt, som
da plutselig ikke blir mulig.

## Se også

- [Integrasjonsmønsteret hendelsesbasert
  provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert),
  som bruker notifikasjoner.

- [Selvbetjening for RabbitMQ](/docs/datadeling/teknisk-plattform/brom), som er
  der du administrerer hvem som har tilgang til hvilke notifikasjoner.
