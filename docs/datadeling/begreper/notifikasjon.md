---
title: Notifikasjon
---

I IntArk bruker vi ordet "notifikasjon" for "tynne meldinger". Dette er
eNotifikasjon, som fokuserer på at noe har skjedd.

En "notifikasjon" er en _tynn melding_ som sendes ut av kildesystemet når
kildedata endres, og brukes primært i [hendelsesbasert
provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert).
Notifikasjonen skal kunne bli mottatt av konsumenter, så de kan vurdere om de
skal reagere på endringen. IntArk bruker en meldingskø for å hjelpe
kildesystemet med å sikre at notifikasjonen når fram til alle konsumenter, uten
at tilbyderen trenger å forholde seg til alle konsumentene.

Produsenter er ansvarlige for å produsere notifikasjoner for endringer i sine
autoritative data, som kan fås ut av produsenten sitt API. Se
[styringsreglene](/docs/datadeling/styringsregler) for mer om dette.

## Se også

- Integrasjonsmønsteret [hendelsesbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert), som er den primære bruken for notifikasjoner.
- [Hvordan designe dine notifikasjoner](/docs/datadeling/god-praksis/notifikasjonsdesign)
