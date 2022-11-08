---
slug: /datadeling/god-praksis/datakvalitet/datasett/
title: Beskrivelser av datasett
---

Kildedata må beskrives. Her beskrives hvordan du gjør dette i fellestjenesten.

Vi anbefaler å følge de nasjonale standardene,
[DCAT-AP-NO](https://data.norge.no/guide/veileder-beskrivelse-av-datasett/)
versjon 2, for å beskrive kildedata. Se [Felles datakatalog sin veileder for
beskrivelser av
datasett](https://data.norge.no/guide/veileder-beskrivelse-av-datasett/) for en
innføring.

Den nasjonale standarden har oversikt over hvilke felt som er påkrevd,
anbefalte og valgfrie i beskrivelsen av datasett. I fellestjenesten anbefaler
vi spesielt:

- Hvis kildedataen er autoritative, skal feltet `dqvno:isAuthoritative` brukes.
  (I DCAT-AP-NO er dett bare valgfritt).

- Lisensiering er _sterkt anbefalt_ å si noe om, da det gjør det enklere for
  konsumentene å bruke dataene riktig.

<!-- TODO: Lisensiering: HAr vi ein passande default-lisens å henvise til, for
meir begrensa data? Til dømes https://data.norge.no/nlod/no/ -->

## Hvordan beskrive datasett i fellestjenesten?

Dagens API-katalog støtter ikke DCAT sine filformat ut av boksen. Det er to
måter å beskrive datasettet i API-katalogen:

- Beskriv datasettet på [data.norge.no](https://data.norge.no) eller
  tilsvarende tjenester, og lenk til denne fra API-katalogen.

- Beskriv datasettet i et vanlig dokument under API-et i API-katalogen.
