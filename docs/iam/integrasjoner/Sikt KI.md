---
title: Sikt KI
---

## Om integrasjonen

**Navn:** `PortalLdapToSiktKI`

Integrasjonen provisjonerer brukere fra Felles IAM til Sikt KI. Hvem som får tilgang til Sikt KI, styres av forretningsroller og bestillbare rettigheter i Felles IAM. Rollene til brukerne blir tilgjengelige i tilgangsstyringen i Sikt KI, der dere bruker dem til å bestemme hva brukerne får tilgang til.

Integrasjonen oppretter, oppdaterer og arkiverer brukerne automatisk, slik at tilgangene i Sikt KI følger endringene i Felles IAM. Den kommuniserer med Sikt KI via REST API.

Når Felles IAM slås på i Sikt KI, mister alle brukere unntatt eieren (tjenesteansvarlig) rollene sine. Brukerne kan fortsatt logge inn med Feide, men får ikke tilgang før de er provisjonert fra Felles IAM.

## Ta integrasjonen i bruk

### 1. Be om aktivering av IAM

En administrator sender en henvendelse til [kontakt@sikt.no](mailto:kontakt@sikt.no) og ber Sikt KI-teamet aktivere IAM for organisasjonen.

### 2. Bestem hvem som skal få tilgang

Mens dere venter på aktiveringen, kan dere sette opp tilgangene i Felles IAM. Institusjonen gjør dette selv, men Felles IAM-teamet kan bistå hvis dere ønsker det.

**Forretningsroller.** I `system_entitlements.json` definerer dere hvilke [forretningsroller](/docs/iam/forretningsroller) som skal gi tilgang til Sikt KI. Legg forretningsrollene til i rollelisten for ressursen `sikt-ki`. Filen finnes i prosjektet Internal_Processing &rarr; Files &rarr; json_policies.

**Bestillbare rettigheter.** Med [bestillbare rettigheter](/docs/iam/tilgangsstyring#bestillbare-rettigheter-tilganger) kan dere gi tilgang til brukere som ikke får den gjennom en forretningsrolle, eller gi brukere en ekstra rolle i Sikt KI. Verdien må starte med `sikt-ki:`. Det som står etter prefikset, blir en rolle i Sikt KI som dere kan bruke i tilgangsstyringen. `sikt-ki:it-ansatt` blir for eksempel rollen `it-ansatt`.

En bestillbar rettighet gir tilgang til Sikt KI alene. Brukeren trenger altså ikke en forretningsrolle med tilgang i tillegg.

### 3. Slå på Felles IAM i Sikt KI

Når Sikt KI-teamet har aktivert IAM, konfigurerer en administrator Felles IAM-integrasjonen på [ki.sikt.no](https://ki.sikt.no):

1. Trykk på navnet til organisasjonen i menyen til venstre.
2. Trykk på **Admin** oppe til høyre.
3. Velg **Felles IAM** i menyen til venstre, og konfigurer integrasjonen.

Administratoren får da en API-nøkkel.

### 4. Send API-nøkkelen til Felles IAM-teamet

Send API-nøkkelen til Felles IAM-teamet på en sikker måte, for eksempel med Filesender. Felles IAM-teamet legger inn nøkkelen for institusjonen.

### 5. Legg inn rollene i tilgangsstyringen i Sikt KI

Brukerne blir provisjonert av jobben `PortalLdapToSiktKI`, som institusjonen selv kan aktivere når API-nøkkelen er lagt inn. Jobben finnes under Local_Processing, se steg 6.

Når brukerne er provisjonert, dukker rollene deres opp i nedtrekksmenyen i tilgangsstyringen i Sikt KI. Dere kan også skrive inn verdiene på forhånd. Da får brukerne som har rollen, tilgang automatisk når de blir provisjonert.

Verdiene må skrives nøyaktig slik Sikt KI mottar dem:

- Forretningsroller får fjernet `iam:` og får stor forbokstav.
- Bestillbare rettigheter får fjernet `sikt-ki:`. Resten av verdien er uendret.

| Felles IAM | Sikt KI | Type |
|---|---|---|
| `iam:employee` | `Employee` | Forretningsrolle |
| `iam:student` | `Student` | Forretningsrolle |
| `iam:employee_extended` | `Employee_extended` | Forretningsrolle |
| `iam:adm` | `Adm` | Forretningsrolle |
| `sikt-ki:it-ansatt` | `it-ansatt` | Bestillbar rettighet |
| `sikt-ki:admin` | `admin` | Bestillbar rettighet |

### 6. Aktiver jobben PortalLdapToSiktKI

Ved første kjøring anbefaler vi å sette `process_all` til `true`. Da blir alle brukere med tilgang provisjonert, både de som har tilgang gjennom en forretningsrolle og de som har en bestillbar rettighet. Ved senere kjøringer behandler jobben bare brukere som har endret seg.

## Felt som skrives til Sikt KI

| Felles IAM | Sikt KI | Beskrivelse |
|---|---|---|
| `idautoPersonSystem5ID` | `eduPersonPrincipalName` | Feide-ID. Brukes som nøkkel for brukeren i Sikt KI. |
| `idautoPersonPreferredName` og `idautoPersonPreferredLastName` | `fullName` | Fullt navn. Hvis foretrukket fornavn eller etternavn ikke er satt, brukes henholdsvis `givenName` og `sn`. |
| `idautoPersonAppRoles10` | `roles` | Forretningsrollene til brukeren, uten `iam:` og med stor forbokstav. |
| `idautoPersonAppRoles6` | `roles` | Bestillbare rettigheter som starter med `sikt-ki:`, uten prefikset. |

`roles` inneholder alle forretningsrollene brukeren har, ikke bare de som gir tilgang til Sikt KI. En ansatt som også er leder, får for eksempel både `Employee` og `Manager`.

Brukere uten Feide-ID blir ikke provisjonert.

## Joiner, Mover og Leaver

En bruker har tilgang til Sikt KI når kontoen er aktiv og brukeren har minst én av disse:

- en forretningsrolle som gir tilgang til Sikt KI i `system_entitlements.json`
- en bestillbar rettighet for Sikt KI

### Joiner

Når en bruker får tilgang, opprettes brukeren i Sikt KI med navn og roller. Hva brukeren får tilgang til i Sikt KI, avhenger av hvordan rollene er satt opp i tilgangsstyringen i Sikt KI.

### Mover

Når navnet eller rollene til en bruker endres i Felles IAM, oppdateres brukeren i Sikt KI. Det skjer for eksempel når brukeren får eller mister en forretningsrolle, eller når en bestillbar rettighet blir godkjent eller fjernet. Tilgangene i Sikt KI følger rollene og endres derfor automatisk.

### Leaver

Brukeren arkiveres i Sikt KI når brukeren ikke lenger har noen forretningsrolle eller bestillbar rettighet som gir tilgang. Det kan for eksempel skje fordi brukeren har sluttet, eller fordi en bestillbar rettighet er fjernet eller har utløpt. Brukeren arkiveres også når kontoen blir deaktivert.

Når brukeren arkiveres, slettes samtaler, assistenter og annet innhold brukeren har i Sikt KI. Selve brukeren blir liggende i 90 dager før den slettes.

### Feilhåndtering

Hvis et kall mot Sikt KI feiler, blir brukeren behandlet på nytt ved neste kjøring.

## Parametere

Uten parametere behandler jobben brukerne som er endret siden forrige kjøring.

| Parameter | Type | Beskrivelse |
|---|---|---|
| `key` | Tekst | Behandler én bruker. Oppgi UHID eller brukernavn. |
| `ldapFilter` | Tekst | Behandler brukerne som treffer et definert LDAP-filter. |
| `log_only` | Boolsk | Logger hva som ville blitt gjort, uten å gjøre endringer. |
| `debug` | Boolsk | Gir mer detaljert logging. |
| `process_all` | Boolsk | Behandler alle brukere som har, eller har hatt, tilgang til Sikt KI. Brukes ved første kjøring. |
| `process_remaining` | Boolsk | Behandler brukere som har fått tilgang, men som ennå ikke er provisjonert. |

## Feilsøking

Verktøyet `_QuerySiktKI` slår opp en bruker i Sikt KI og viser hva som er lagret der. Oppgi brukernavn eller Feide-ID.
