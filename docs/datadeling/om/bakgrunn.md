---
slug: /datadeling/om/bakgrunn/
title: Bakgrunnen for Fellestjenesten for Datadeling
---

## IT-arkitekturprinsipper for offentlig sektor - 2009

IntArk ble bygget utfra de felles arkitekturprinsippene for offentlig sektor
som ble lagt frem som en del av [St. meld nr. 19 (2008-2009) - Ei forvaltning
for demokrati og
fellesskap](https://www.regjeringen.no/nb/dokumenter/stmeld-nr-19-2008-2009-/id552811/).
Her besluttet regjeringen syv overordnede prinsipper som skal fungere som et
sett med felles retningslinjer for alt arbeid med IT i offentlig sektor:

- Tjenesteorientering
- Interoperabilitet
- Tilgjengelighet
- Sikkerhet
- Åpenhet
- Fleksibilitet
- Skalerbarhet

Se også [Beskrivelse av prinsippene og hvordan de skal forstås
[PDF]](http://www.difi.no/sites/difino/files/arkitekturprinsipper-2.1.pdf)

Etter dette har [DigDir kommet med nye, mer overordnede
arkitekturprinsipper](https://www.digdir.no/digitalisering-og-samordning/overordnede-arkitekturprinsipper/1065).

## UiO:IntArk - 2010-2019

Universitetet i Oslo fikk i 2010 utarbeidet en ny strategi, og så på
nødvendige endringer for å nå denne strategien. En av punktene som ble kartlagt
var behovet for en ny arkitektur og integrasjonsrammeverk.

Strategien så fordelene med en heterogen og distribuert organisering, der
beslutninger tas mest mulig lokalt. Arkitekturen måtte støtte opp rundt dette,
og demme opp for ulempene med denne organiseringen. IT-siden så fort behovet
for at det måtte være enklere å dele data på en desentralisert måte.

Flere arbeidsgrupper og prosjekter ble startet, og en ny integrasjonsarkitektur
ble mer og mer konkretisert og spisset. Denne arkitekturen fikk etterhvert
navnet "UiO:IntArk".

Integrasjonsarkitekturen inneholdt mange elementer, fra organisatoriske
funksjoner til tekniske verktøy, og fra overordnede prinsipper til mer konkrete
retningslinjer. Noen av elementene:

- Generelle prinsipper som alle parter på UiO måtte forholde seg til. Disse
  reglene var overordnede og mest mulig uavhengig av dagens teknologi, og var
  eid av en strategisk koordineringsgruppe som involverte personer fra alle
  fakultetene. Noen av prinsippene var brukerorientert, tjenesteorientert, og
  lokal fleksibilitet (etter kost-nytte-vurdering).

- En definert prosess for eskalering av prioriteringer og beslutninger rundt
  datadeling. Prosessen gikk fra systemeier, til et sentralt prioriteringsråd,
  til en sentral strategisk koordineringsgruppe. Sentralt i prioriteringene var
  en kost-nytte-vurdering, med fokus på gevinstene for universitetet som
  helhet.
- Tekniske verktøy for å hjelpe UiO med å oppfylle gevinstene med
  integrasjonsarkitekturen - Gravitee og RabbitMQ. Produktene ble valgt fordi
  de løste behovene i arkitekturen best mulig - spesielt prinsippet om å unngå
  lock in var vesentlig. Det var også noen av få produkter på markedet som
  støttet en desentralisert organisering av API og konsumenter. Hva som fantes
  i bransjen av løsninger satte også begrensninger i hva som var mulig å
  innføre i integrasjonsarkitekturen - det fantes for eksempel ikke gode
  løsninger for en desentralisert håndtering av gateways, eller utbredte
  protokoller som unngikk at all dataflyt må gå gjennom en gateway.

IntArk på UiO fokuserte på hvor forbedringspotensialet var størst og mest
konkretisert, som var system-til-system-integrasjoner for administrativ IT.

## Uninett sin Dataporten

Uninett utviklet en ny tjeneste, kalt _Dataporten_, for å støtte nye tekniske
muligheter som kom med OpenID Connect (OIDC). Dette ga mulighet for å en mye
enklere og mer standardisert datadeling. Dataporten ble etterhvert en integrert
del av Feide.

Det var noe overlapp av funksjonalitet mellom IntArk og Dataporten, men med
ulikt fokus. Dataporten fokuserte på det mer tekniske og praktiske rundt OIDC,
spesielt på integrasjoner mellom tjeneste og sluttbruker. UiO:IntArk fokuserte
mest på de interne behovene til institusjonen, og
system-til-system-integrasjoner.

## Prosjekt Unit Datadeling - 2020-2022

[Prosjekt Unit
Datadeling](https://www.unit.no/prosjekter/datadeling-i-hoyere-utdanning-og-forskning)
ble startet i 2020, med Unit som prosjekteier. Her ble IntArk, HKdirs og
Uninetts erfaringer tatt med i opprettelsen av en ny fellestjeneste for
Datadeling.

Fellestjenesten var en videreføring av noen elementer fra UiO sin
integrasjonsarkitektur, men med nye, mer overordnede elementer fra HKdir. Et
resultat fra prosjektet var referansearkitekturen for deling av data i høyere
utdanning og forskning.

I 2021 ble fellestjenesten for datadeling besluttet innført for sektoren. Den
tekniske plattformen ble rullet ut til alle institusjoner i sektoren i 2022.

Prosjektet hadde også anbefalinger for en neste generasjon av en teknisk
plattform, som blant annet så på en mer sentralisert styring av data fra større
leverandører, men også en mer desentralisert håndtering av API gateways.
