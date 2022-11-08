---
image: /prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/teknisk-plattform/figurer/brom-new-application-overview.png
pictureAlt:
  "Skjermskudd fra tjenesten viser oversikt over at du kan abonnere p\xE5\
  \ meldinger, behande abonnenter, publisere notifikasjoner, og administrere applikasjonen."
pictureCaption: "Skjemskudd fra Selvbetjeningsportalen for RabbitMQ"
title: Selvbetjening for RabbitMQ
---

Selvbetjeningsportalen for RabbitMQ gjør det enklere for datatilbydere og
konsumenter å forvalte sine tilganger til meldinger.

## Kom i gang

For de utålmodige:

1. Logg på Selvbetjeningsportalen med din Feide-bruker. Se [instans-oversikten for
   lenke hos din institusjons](/docs/datadeling/teknisk-plattform/oversikt).
2. Registrer din applikasjon. Dette gjelder både datatilbydere og konsumenter.
3. Konsumenter må søke om tilgang til meldinger fra datatilbydere.
4. Hent ut tilkoblingsdetaljer for din tjeneste fra selvbetjeningsportalen, og
   sett det opp i din tjeneste.

I selvbetjeningsportalen kalles både datatilbydere og konsumenter for
"applikasjoner". En applikasjon kan både tilby meldinger og konsumere meldinger
fra andre. Dette må naturligvis settes opp i selvbetjeningsportalen.

Anbefalt meldingsprotokoll: [AMQP 0.9.1](http://www.amqp.org/specification/0-9-1/amqp-org-download) på port 5671 (TLS).

Se [kode-eksempler](/docs/datadeling/kode/):

- Hvordan sende notifikasjoner (datatilbyder): [publisering_simpel.py](/datadeling/publisering_simpel.py)
- Hvordan motta notifikasjoner (konsument): [konsument_simpel.py](/datadeling/konsument_simpel.py)

## Hva gjør Selvbetjeningsportalen for RabbitMQ?

Oppsett av meldingskøer i RabbitMQ krever ofte god teknisk innsikt. Selvbetjeningsportalen for RabbitMQ er utviklet for IntArk, og forenkler arbeidet med meldingskøer så datatilbydere og konsumenter selv kan forvalte sine tilganger. Alt som gjøres i Selvbetjeningsportalen for RabbitMQ blir synkronisert med [RabbitMQ](/docs/datadeling/teknisk-plattform/rabbitmq) fortløpende.

Det er to fordeler med å bruke Selvbetjeningsportalen for RabbitMQ:

- Enklere å administrere, uten teknisk innsikt.
- Standardisert oppsett. Alle tjenester og tilganger settes opp på en standard måte. Dette er mer nyttig dess flere tjenester en institusjon har.

Meldinger brukes blant annet i [integrasjonsmønsteret hendelsbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert), da det er en rask og effektiv måte å oppdatere andre når noe skjer. Det er likevel ikke begrenset til dette integrasjonsmønsteret.

## Hva støtter Selvbetjeningsportalen for RabbitMQ?

Selvbetjeningsportalen støtter [Datadelingsprosessene](/docs/datadeling/hva-er/prosessene) i IntArk:

- Datatilbyder kan **registrere sin tjeneste** i løsningen. Selvbetjeningsportalen oppretter da alt som trengs i RabbitMQ. Datatilbyder får listet ut tilkoblingsdetaljer.
- Datatilbyder kan **akseptere og avslå konsumenters søknad om tilgang** til sine notifikasjoner. Selvbetjeningsportalen sikrer at RabbitMQ følger dette.
- Datatilbyder får **oversikt over hvem som har tilgang** til sin tjenestes notifikasjoner.
- Konsumenter kan **søke etter tilgjengelige tjenester** som produserer notifikasjoner.
- Konsumenter kan **søke om tilgang** til en tjenestes notifikasjoner.
- Konsumenter får listet ut **tilkoblingsdetaljer** når tilgang er gitt.

### Tilganger

Den som oppretter en tjeneste i Selvbetjeningsportalen for RabbitMQ kan gi andre tilgang til å administrere tjenesten. Dette gjøres enten ved å legge inn deres Feide-id, eller legge inn navnet på en Dataporten-gruppe. Selvbetjeningsportalen støtter både ad hoc- og entitlements-grupper fra Feide.

## Bakgrunnen for selvbetjeningsløsningen for RabbitMQ

RabbitMQ er valgt løsning for å håndtere notifikasjoner i IntArk. Dette er en teknisk avansert, men komplisert tjeneste, som krever en del teknisk innsikt hos sluttbruker. RabbitMQ gir deg mer innsikt, og større muligheter for å gjøre ting annerledes. I de fleste tilfeller er ikke dette nødvendig, da selvbetjeningsløsninger håndterer dette med et standardisert oppsett.

Selvbetjeningsløsningen ble utviklet av BOTT, for å gjøre det mulig for datatilbydere og konsumenter å selv forvalte tilgangene til notifikasjoner. Tjenesten videreutvikles for å støtte mer funksjonalitet etterhvert som det bes om av sektoren.

## Tekniske detaljer

Selvbetjeningsportalen for RabbitMQ er kildesystem for tilgangene til tjenesters notifikasjoner. Selvbetjeningsportalen har tilganger i RabbitMQ til å opprette vhosts, køer og exchange per tjeneste. I Selvbetjeningsportalen for RabbitMQ kalles tjenester for "applikasjon", og hver applikasjon får sin egen vhost. En applikasjon kan både vere datatilbyder og konsument, samtidig.

Når en applikasjon får tilgang til en annen applikasjons notifikasjoner, setter Selvbetjeningsportalen opp en egen kø i konsumentens vhost, og en fast kopiering av notifikasjoner fra produsenten. Se figur som illustrerer dette:

[![Bildet kan inneholde: font, rektangel, parallell, diagram.](/datadeling/img/brom-flow-0.svg)](/datadeling/img/brom-flow-0.svg)

Selvbetjeningsportalen for RabbitMQ konfigureres også opp til å vere autentiserings- og autorisasjonskilde for RabbitMQ. Det betyr at applikasjoner i selvbetjeningsportalen også kan brukes til å logge på i RabbitMQ sitt managementgrensesnitt. Navnet og passordet til applikasjonen benyttes for å logge inn i managementgrensesnittet. Man får bare tilgang til data og oppsett til den relaterte applikasjonen.

Selvbetjeningsportalen kjører i IntArks tekniske plattform. Se [oversikt over den tekniske plattformen for URL](/docs/datadeling/teknisk-plattform/oversikt).

### Endringer i RabbitMQ

Hva som skjer i RabbitMQ når noe skjer i Selvbetjeningsportalen for RabbitMQ. Endringer i selvbetjeningsportalen står med fet skrift.

- **Applikasjon opprettes i selvbetjeningsportalen.**

Det opprettes en vhost i RabbitMQ med samme navn som applikasjonen. Applikasjonen får full tilgang til denne vhosten. I tillegg opprettes det en exchange som man kan publisere meldinger til.

[![Bildet kan inneholde: produkt, rektangel, teknologi, parallell, font.](/datadeling/img/brom-flow-4.svg)](/datadeling/img/brom-flow-4.svg)

- **Applikasjon markeres til å være datatilbyder.**

Det skjer ingen endringer i RabbitMQ, men applikasjonen vises som meldingstilbyder på Selvbetjeningsportalen sin oversikt. Dermed kan konsumenter lese dokumentasjon om meldingene som tilbys og søke om tilgang.

- **Konsument søker om tilgang til en tilbyder**.

Det opprettes en kø og en exchange på konsumenten sin vhost. Disse er dedikert til å motta meldinger fra tilbyderen, og får navn som gjenspeiler det. I dette tilfellet har _Applikasjon B_ søkt om tilgang til _Applikasjon A_ sine meldinger.

[![Bildet kan inneholde: rektangel, font, parallell, sirkel.](/datadeling/img/brom-flow-2.svg)](/datadeling/img/brom-flow-2.svg)

- **Datatilbyder gir en konsument tilgang til sine meldinger.**

Det settes opp en kø på tilbyderen sin vhost, og en kopi av fremtidige meldinger fra tilbyderens exchange vil bli sendt til denne køen. Meldingene i denne køen skal videresendes til konsumenten, så køen får et navn som gjenspeiler det. RabbitMQ får en "shovel" som videresender alle meldinger fra den nylig opprettede køen på tilbyderen sin vhost til en exchange på konsumenten sin vhost.

[![Bildet kan inneholde: produkt, rektangel, font, linje, materiell eiendom.](/datadeling/img/brom-flow-1.svg)](/datadeling/img/brom-flow-1.svg)

- **Datatilbyder fjerner tilgang for en konsument**.

RabbitMQ sletter "shovel" som kopierer tilbyderens meldinger over til konsumentens vhost. Køen på tilbyderen sin vhost blir også slettet.

- **Datatilbyder gir en gruppe eller andre brukere tilgang til sin applikasjon.**

Gruppen/brukerne får full tilgang til å administrere applikasjonen i Selvbetjeningsportalen. Dette inkluderer også tilgang til applikasjonens passord i RabbitMQ, som betyr at gruppen/brukerne også får tilgang til å administrere vhosten i RabbitMQ.

- **Flere applikasjoner kan abonnere på hverandre sine meldinger.**

[![](/datadeling/img/brom-flow.svg)](/datadeling/img/brom-flow.svg)

## Lenker

- [Teknisk designdokument](https://www.usit.uio.no/om/organisasjon/bnt/usitint/faglig/designdokumenter/designdokument-brom.html). Merk at Selvbetjeningsportalen for RabbitMQ har arbeidsnavnet BROM (BRukervennlig Oppsett av Meldinger).
- [Veileder for å registrere en applikasjon i selvbetjeningsløsningen](/docs/datadeling/veiledere/meldingsk%C3%B8/opprett-tjeneste)
- [Integrasjonsmønsteret Hendelsbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert), som er det mest brukte integrasjonsmønsteret som bruker notifikasjoner.
- Mer detaljer om [RabbitMQ i IntArk](/docs/datadeling/teknisk-plattform/rabbitmq).
