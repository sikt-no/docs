
# WFM_DeleteIdentifier

Kategori: Workflow Management / Identity Warehouse


## Formål

Sletter en enkelt identifikator knyttet til en person i Identity Warehouse (IdW)
via IdW REST API. Actionsettet kalles typisk fra en arbeidsflyt (workflow) og
brukes når en spesifikk identifikator skal fjernes uten å slette hele identiteten.

Brukes til:
- Fjerne utdaterte eller feilregistrerte identifikatorer fra IdW
- Håndtere navneendringer (slette gammelt brukernavn, gammel e-post, o.l.)
- Fjerne tilknytning til kildesystem (f.eks. fs:student ved uteksaminering)
- Korrigere persondata som fødselsdato, fornavn eller etternavn i IdW


## Hvordan kjøre

### Input-parametere:
- uhid (string): til personen identifikatoren tilhører
- type (string): Type identifikator som skal slettes. Gyldige verdier:
  * "un"             – UH brukernavn
  * "email"          – E-postadresse
  * "privat:mobile"  – Privat mobilnummer
  * "privat:email"   – Privat e-postadresse
  * "privat:dob"     – Privat fødselsdato
  * "dfo:employee"   – Ansattnummer fra DFØ/SAP
  * "grg:employee"   – Ansattnummer fra GREG (gjesteregister)
  * "fs:student"     – Personløpenummer fra FS
  * "givenname"      – Fornavn
  * "sn"             – Etternavn
- value (string): Verdien til identifikatoren som skal slettes

Identifikatoren som slettes bygges opp slik:
  `<institusjon>:<type>:<verdi>`   (f.eks. "sikt:un:laols0070")

### Eksempler:
- WFM_DeleteIdentifier("3ddf4822-77ed-4c27-909e-7c826ca10423", "un", "laols0070")
- WFM_DeleteIdentifier("3ddf4822-77ed-4c27-909e-7c826ca10423", "fs:student", "12345678")


## Resultat

Returnerer JSON med felt "response" satt til "true" ved suksess, "false" ved feil.

Fargekoding i logger:
- GRØNN:   Identifikatoren ble slettet i IdW
- LILLA:   API-kall sendt / liste over gjenværende identifikatorer vises
- RØD:     Feil: ugyldig input, manglende DB-tilkobling, eller API-kall feilet

Etter vellykket sletting vises alle gjenværende identifikatorer for UH-ID-et i loggen.

Mulige feilsituasjoner:
- Ugyldig UHID → avbryter og returnerer false
- Ugyldig type (ikke i tillatt liste) → avbryter og returnerer false
- Tom value → feilmelding logges
- Kan ikke koble til RIDB → avbryter og returnerer false
- API-kall til IdW returnerer ikke HTTP 200 → feilmelding og API-respons logges

Skrevet med hjelp av AI