---
title: "Unntakshåndtering"
---

Institusjonene bør følge alle anbefalingene frå fellestejenesten for
datadeling, og anbefaler at unntak gjøres etter en kost-nytte-vurdering.

Unntak bør gjøres etter en helhetlig kost-nytte-vurdering, og ikke bare for den
enkelte tjeneste. For eksempel kan det vere billigere for en tjeneste å ikke
betale for å utvikle et godt API, men det blir dyrere for institujonen ved at
alle konsumenter må bruke mer tid på tilpasninger.

Kost-nytte-vurderingen må også ta hensyn til lovpålagte krav og føringer.
Institusjonen må ha oversikt over hvilken informasjon som flyter mellom
IT-tjenester for å oppfylle lovpålagte krav. Personer har også rett til innsyn
i all informasjon du har om denne personen i alle dine IT-tjenester.

Institusjonen velger selv i hvor stor grad de ønsker å bruke fellestjenesten,
men bør vurdere gevinstene fellestjenesten gir opp mot kostnadene ved å bruke
andre verktøy. Sikt ønsker å kjenne til slike vurderiner, for å vite hvordan
fellestjenesten kan forbedres for institusjonene.

## Unntak må dokumenteres og begrunnes

Fellestjenesten anbefaler at datatilbyder, eller tjenesteier, er ansvarlig for
unntak. Disse skal begrunnes og dokumenteres. Sikt må informeres om slike
unntak, for å kunne vurdere videre tilpasninger av fellestejenesten.

## Typiske unntakssituasjoner

Det vil være situasjoner hvor det ikke synes hensiktsmessig å integrere gjennom
integrasjonsarkitekturens komponenter. Eksempler på unntak:

- Der en systemeier overfører data mellom egne tjenester fordi dette er
  effektivt eller en ferdig levert integrasjon fra leverandør. Eksempelvis fra
  fagsystem til datavarehus.

- Der tjenestene er laget for å hente fra gitte veletablerte katalogtjenester,
  som LDAP, AD eller Azure, og ikke lar seg mate med data gjennom API.

- Der systemeier integrerer punkt mot punkt med en tredjepart der overføringer
  er leverandørtilpasset eller på et spesialisert format. Eksempelsiv AltInn
  eller Lånekassen.
