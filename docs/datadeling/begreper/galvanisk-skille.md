---
author:
  - Einar Jerpseth
title: Galvanisk skille
---

Galvanisk skille brukes gjerne som begrep når brukerpåloggingen i en tjeneste
er uavhengig av brukerpåloggingen i underliggende operativsystem. Eksempler på
tjenester med et galvanisk skille er webapplikasjoner, som f.eks. StudentWeb
eller HR-portalen.

Sikkerhetsmessig er galvanisk skille viktig. Dette fordi skillet medfører at
settet med handlinger brukerne kan utføre er begrenset. Dette gjør tjenesten
stabil og vanskelig å bryte seg inn i - da man må finne et sikkerhetshull i
programkoden.

En fordel med galvanisk skille, er at tjenesten blir løsere koblet til
operativsystemet. Dette gjør det enklere å kjøre tjenesten andre steder, også
hos andre institusjoner.

- Applikasjoner med galvanisk skille, og som bruker FEIDE (eller annen SAML
  eller OIDC), gjør det enkelt å samarbeide på tvers av institusjoner.

- Applikasjoner med galvanisk skille er nesten utelukkende generalist
  tjenester, brukermassene er store og antall operasjoner som skal utføres er
  standardiserte og begrensede.

- Programvare som benytter innlogging i OS (typisk Kerberos og/eller LDAP) er
  det vanskelig å samarbeide om på tvers av institusjoner. Det er omfattende og
  man kan ikke få det fra en tredjepart. Skifte av leverandør er nesten umulig.
