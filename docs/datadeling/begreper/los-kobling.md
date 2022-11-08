---
title: "Løs kobling"
---

Et prinsipp om at en integrasjon bør være mest mulig uavhengig av systemet,
tjenesten eller leverandøren. En kobling mellom to system er løs hvis det er
enkelt å bytte ut det ene systemet, uten at det andre systemet må endres.

Løse koblinger er som oftest ønskelig i en arkitektur, da det gjør det enklere
å bytte ut enkeltkomponenter. I praksis er det ofte snakk om _grader av løse
koblinger_ - to tjenester kan være mer eller mindre avhengige av hverandre. Du
ønsker gjerne koblinger som er _minst mulig kostbare_ å bytte ut eller endre
på.

En tett kobling er det omvendte av en løs kobling. For integrasjoner ønsker du
som regel ikke tette koblinger, da det gjør det vanskeligere eller mer kostbart
å bytte ut systemer. Eksempler på dette kan være to tjenester fra samme
leverandør, som bruker en lukket, proprietær integrasjon som gjør at du ikke
kan bytte ut en av tjenestene uten å også måtte se på den andre.
