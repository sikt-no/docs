---
author:
  - Einar Jerpseth
title: Provisjonering
---

_Provisjonering_ er å på forhånd fylle en tjeneste med data, for eksempel
brukerkontoer. Mange tjenester trenger slike data for å kunne fungere. Dette
krever ofte en integrasjon.

IT-tjenester kan benytte flere provisjoneringsmetoder samtidig, f.eks. at
rapportdata synkroniseres batch, mens brukerdata (f.eks. adresse eller
telefonnummer) oppdateres umiddelbart (hendelsesbasert provisjonering). For
eldre typer teknologi, det vi gerne kaller legacy-teknologier, benyttes gjerne
katalogtjenester som AD eller LDAP i stedet.

## Just In Time provisjonering (JIT)

Programvare som bygger en brukerkonto/-profil under første innlogging kalles
gjerne _just in time provisjonering_ (JIT).

For moderne tjenester benyttes gjerne teknologier som billetteknologier, f.
eks. OpenID Connect (OIDC) og SAML. Informasjonen programvaren trenger for
bygge brukerprofilen ligger i billetten (adgangstegnet) fra
innloggingstjenesten (FEIDE o.l.), i tillegg kan informasjon i billetten brukes
for å finne mer informasjon om identiteten/entiteten i et oppslagsverk, f.eks.
en web service. Til dette kan tjenesten f.eks. benytte teknologien OAuth.

Integrasjonsmessig kan JIT virke fordelaktig, men også her er det fallgruver.
F.eks. skjer det ofte at JIT-tjenester bare bygger en veldig tynn profil, og at
brukeren manuelt må registrere resten av sine data. Det er ofte begrenset med
informasjon som ligger i en billett.
