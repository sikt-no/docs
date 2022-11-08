---
slug: /datadeling/malgrupper/utvikler/
title: IntArk for utviklere
---

Informasjon om IntArk for deg som utvikler tjenester for UH-sektoren.

## For utviklere som er ferske i IntArk

- [Hva er IntArk i praksis, for utviklere](/docs/datadeling/malgrupper/utvikler/intro)
- [Introduksjon til anbefalte integrasjonsmønstre](/docs/datadeling/god-praksis/integrasjonsmonster)
- [Eksempler på kode og eksisterende IntArk-kompatible tjenester](/docs/datadeling/kode)

## Oppslag

- Oversikt over [tekniske komponentene](/docs/datadeling/teknisk-plattform/)
- [API manager: Oversikt](/docs/datadeling/teknisk-plattform/gravitee)
- [Meldingskø: Tekniske detaljer](/docs/datadeling/teknisk-plattform/rabbitmq)
- [Begrepsbruk](/docs/datadeling/begreper/)
- [Alle veiledere](/docs/datadeling/veiledere)

## Tilbyder

For deg som utvikler systemer som andre kan hente kildedata fra:

<!-- - TODO: Prinsipper å følge - eiga side, med "konsekvenser", samt "roller og ansvar", og lover og reglar. (databehandleravtale etc) -->
<!-- - TODO: lover og reglar ved deling av data utenfor egen organisasjon -->

- [Hvilke integrasjonsmønstre som anbefales i IntArk](/docs/datadeling/god-praksis/integrasjonsmonster)
- [Hvordan utforme ditt API](/docs/datadeling/god-praksis/api-design)
- [Hvordan utforme og sende notifikasjoner](/docs/datadeling/god-praksis/notifikasjonsdesign)
- [Hvordan registrere ditt API i API manager](/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api)
  <!-- - Autentisering og tilgangskontroll \[TODO lag kort side som beskriver kva api/system må gjere og kva API manager hjelper med, og kva er god praksis (kva bør vere opent og kva bør vere sperra)\] -->
  - Krav om Feide, via OIDC?
  - Kva med system-til-system-integrasjoner?
  - Hvor bør API legges
- [Veileder for å se bruken av ditt API](/docs/datadeling/veiledere/api-manager/se-bruk-av-api), for innsikt og statistikk over bruk, for eksempel hvem som bruker API-et ditt mest?

## Konsument

For deg som utvikler IT-tjenester som skal hente data fra datatilbydere.

<!-- - TODO: Prinsipper å følge - eiga side, samt "roller, ansvar og plikter", og muligens lover og regler. Til dømes databehandleravtaler, tjenesteavtale, ROS-vurderingar. Kan med fordel slåast saman, om mulig - altså intark sine roller og formalia rundt integrasjonar. -->

- Hvordan finne frem til riktige data:
  - Gå til [API-katalogen hos din instans](/docs/datadeling/teknisk-plattform/oversikt), og søk etter API
- [Hvordan søke om tilgang (veileder)](/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang)
- Hvordan forholde deg til [IntArks bruk av notifikasjoner](/docs/datadeling/god-praksis/notifikasjonsdesign) (se også [begrepsoversikten](/docs/datadeling/begreper))
<!-- - TODO: Sjekkliste for om min tjeneste er IntArk-kompatibel -->

<!-- TODO: Side med fordeler med å gjere ei teneste IntArk-kompatibel (3-5 punkt held). -->
