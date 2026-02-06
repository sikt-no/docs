---
title: SCIM API
---

**Versjon:** 4.0  
**Dato:** 4. februar 2026  
**Generasjon:** Felles IAM G4

Dette dokumentet beskriver Felles IAM SCIM API-implementasjonen, inkludert LDAP-til-SCIM attributt-mappinger, API-responsstrukturer og eksterne avhengigheter.
Hovedbruksområdet for dette API-et er å tilgjengeligjøre henting av brukerdata via IntArk.

APIet følger [SCIM 2.0-protokollen (RFC 7643/7644)](https://datatracker.ietf.org/doc/html/rfc7643)

Lenke til [Swagger fil](https://sikt-dev.eu001-rapididentity.com/api/rest/restpoints/Scim/v2/swagger.json)

| Beskrivelse | Verdi |
|-------------|-------|
| Standard sidestørrelse | 100 |
| Maksimal sidestørrelse | 1000 |
| Content-Type | `application/scim+json` |

## Innholdsfortegnelse

1. [Brukerressurs (/Users)](#brukerressurs)
   - [Brukerobjektstruktur](#brukerobjektstruktur)
   - [Brukerattributt-mappinger](#brukerattributt-mappinger)
2. [Grupperessurs (/Groups)](#grupperessurs)
   - [Gruppeobjektstruktur](#gruppeobjektstruktur)
   - [Gruppeattributt-mappinger](#gruppeattributt-mappinger)
3. [Attributt-transformasjoner](#attributt-transformasjoner)
4. [Eksterne avhengigheter](#eksterne-avhengigheter)
5. [Filteroperatorer](#filteroperatorer)
6. [Eksempler på API-kall](#eksempler-på-api-kall)
7. [SCIM-hendelser - Meldingskø](#scim-hendelser---meldingskø)

## Brukerressurs (/Users)

### Brukerobjektstruktur

Brukerressursen returnerer følgende JSON-struktur:

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
    "no:edu:scim:user"
  ],
  "id": "UHID",
  "externalId": "UHID",
  "userName": "bruker@institusjon.no",
  "displayName": "Visningsnavn",
  "name": {
    "formatted": "Fullt navn",
    "familyName": "Etternavn",
    "givenName": "Fornavn"
  },
  "profileUrl": "https://...",
  "title": "Stillingstittel",
  "userType": "Employee|Student|External|Other",
  "preferredLanguage": "no",
  "active": true,
  "emails": [
    { "value": "epost@institusjon.no", "type": "work" }
  ],
  "phoneNumbers": [
    { "value": "+47...", "type": "work" },
    { "value": "+47...", "type": "mobile" }
  ],
  "addresses": [
    {
      "formatted": "Fullstendig adresse",
      "streetAddress": "Gateadresse 1",
      "locality": "By",
      "postalCode": "0000",
      "country": "Norway",
      "type": "work"
    }
  ],
  "roles": ["iam:employee", "iam:student"],
  "groups": [
    {
      "value": "gruppe-uuid",
      "$ref": "https://.../Groups/gruppe-uuid",
      "displayName": "Gruppenavn",
      "type": "direct"
    }
  ],
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "employeeNumber": "12345678",
    "costCenter": "0001",
    "organization": "Organisasjonsnavn",
    "division": "Avdeling",
    "department": "Enhet",
    "manager": {
      "value": "Leders UHID",
      "$ref": "https://.../Users/leder-uhid",
      "displayName": "Ledernavn"
    }
  },
  "no:edu:scim:user": {
    "employeeNumber": "12345678",
    "studentNumber": "123456",
    "fsPersonNumber": "12345",
    "gregPersonNumber": "1234",
    "eduPersonPrincipalName": "username@institusjon.no",
    "userPrincipalName": "username@institusjon.no",
    "accountType": "primary",
    "primaryOrgUnit": {
      "symbol": "AVD",
      "legacyStedkode": "123456",
      "nameNb": "Avdeling",
      "nameEn": "Department"
    },
    "orgUnits": [
      {
        "symbol": "AVD",
        "legacyStedkode": "123456",
        "nameNb": "Avdeling",
        "nameEn": "Department",
        "type": "primary"
      }
    ]
  },
  "meta": {
    "resourceType": "User",
    "created": "2024-01-15T10:30:00Z",
    "lastModified": "2024-06-20T14:22:00Z",
    "location": "https://.../Users/uhid"
  }
}
```

### Brukerattributt-mappinger

#### Skjema for bruker (`urn:ietf:params:scim:schemas:core:2.0:User`)

| SCIM-attributt | LDAP-attributt | Type | Transformasjon | Beskrivelse |
|----------------|----------------|------|----------------|-------------|
| `id` | `idautoId` | Streng | Ingen | Unik bruker-ID (UHID) |
| `externalId` | `idautoID` | Streng | Ingen | Unik bruker-ID (UHID) |
| `userName` | `idautoPersonSystem5ID` | Streng | Ingen | Brukerens innloggingsnavn (Feide ID) |
| `displayName` | `displayName` | Streng | Beregnet fra foretrukket navn | Visningsnavn for brukeren |
| `name.formatted` | `displayName` | Streng | Ingen | Formatert fullt navn |
| `name.familyName` | `sn` | Streng | Bruker `idautoPersonPreferredLastName` hvis tilgjengelig | Etternavn |
| `name.givenName` | `givenName` | Streng | Bruker `idautoPersonPreferredName` hvis tilgjengelig | Fornavn |
| `profileUrl` | `idautoPersonProfileUrl` | Streng | Ingen | URL til brukerprofil |
| `title` | `idautoPersonJobTitle` | Streng | Ingen | Stillingstittel |
| `userType` | `idautoPersonAffiliation` | Streng | [Se userType-transformasjon](#usertype-transformasjon) | Brukertype (Employee/Student/External/Other) |
| `preferredLanguage` | `idautoPersonPreferredLanguage` | Streng | Ingen | Foretrukket språk |
| `active` | `idautoDisabled` | Boolean | **Invertert**: LDAP `TRUE` → SCIM `false` | Om kontoen er aktiv |
| `emails[type=work].value` | `idautoPersonSystem2ID` | Streng | Ingen | Institusjonsepostadresse |
| `phoneNumbers[type=work].value` | `idautoPersonOfficePhone` | Streng | Ingen | Kontortelefon |
| `phoneNumbers[type=mobile].value` | `idautoPersonPhoneExtension` | Streng | Ingen | Jobbmobil |
| `addresses[type=work].formatted` | `idautoPersonWorkStreetAddress` | Streng | Parset | Fullstendig arbeidsadresse |
| `addresses[type=work].streetAddress` | `idautoPersonWorkStreetAddress` | Streng | Parset | Arbeidsadresse gateadresse |
| `addresses[type=work].locality` | `idautoPersonWorkCity` | Streng | Ingen | Arbeidsadresse by |
| `addresses[type=work].postalCode` | `idautoPersonWorkPostalCode` | Streng | Ingen | Arbeidsadresse postnummer |
| `addresses[type=work].country` | `idautoPersonWorkCountry` | Streng | Ingen | Arbeidsadresse land |
| `addresses[type=home].streetAddress` | `idautoPersonStreetAddress` | Streng | Ingen | Hjemmeadresse gateadresse |
| `addresses[type=home].locality` | `l` | Streng | Ingen | Hjemmeadresse by |
| `addresses[type=home].postalCode` | `postalCode` | Streng | Ingen | Hjemmeadresse postnummer |
| `roles` | `idautoPersonAppRoles10` | Array | Flerverdiet | Forretningsroller |
| `groups` | `memberOf` | Array | DN konverteres til SCIM-referanse | Gruppemedlemskap |
| `meta.created` | `createTimestamp` | DatoTid | LDAP→SCIM datoformat | Opprettelsestidspunkt i RI Portalen |
| `meta.lastModified` | `modifyTimestamp` | DatoTid | LDAP→SCIM datoformat | Sist endret tidspunkt i RI Portalen |

#### Enterprise-brukerutvidelse (`urn:ietf:params:scim:schemas:extension:enterprise:2.0:User`)

| SCIM-attributt | LDAP-attributt | Type | Transformasjon | Beskrivelse |
|----------------|----------------|------|----------------|-------------|
| `employeeNumber` | `idautoPersonPayrollID` | Streng | Ingen | Ansattnummer fra lønnssystem |
| `costCenter` | `idautoPersonCostCenter` | Streng | Ingen | Kostnadssenter |
| `organization` | `o` | Streng | Ingen | Organisasjonsnavn |
| `division` | `idautoPersonBusinessUnit` | Streng | Ingen | Avdeling |
| `department` | `ou` | Streng | Ingen | Enhet/seksjon |
| `manager` | `manager` | Objekt | DN konverteres til SCIM-referanse | Referanse til brukerens leder |

#### Norsk utdanningsutvidelse (`no:edu:scim:user`)

| SCIM-attributt | LDAP-attributt | Type | Transformasjon | Beskrivelse |
|----------------|----------------|------|----------------|-------------|
| `employeeNumber` | `idautoPersonPayrollID` | Streng | Ingen | Ansattnummer |
| `studentNumber` | `idautoPersonStuID` | Streng | Ingen | Studentnummer |
| `fsPersonNumber` | `idautoPersonSchoolID` | Streng | Ingen | FS-personløpenummer fra Felles Studentsystem |
| `gregPersonNumber` | `idautoPersonHRID` | Streng | Ingen | GREG-personnummer fra gjesteregistrering |
| `eduPersonPrincipalName` | `idautoPersonSystem5ID` | Streng | Ingen | Feide ID |
| `userPrincipalName` | Konfigurerbar | Streng | Standard: `idautoPersonSystem2ID`, fallback: `uid@inst_domain` | UPN hos institusjonen (AD) |
| `norEduPersonNIN` | `idautoPersonNationalID` | Streng | **Filtrert fra responser** (kun søk) | Fødselsnummer (kun søk, returneres ikke) |
| `accountType` | `idautoPersonAffiliations` | Streng | Beregnet: returnerer "primary" hvis gyldige tilknytninger | Kontotype |
| `primaryOrgUnit` | `idautoPersonDeptCode` | Objekt | Parset: `symbol\|nameNb\|nameEn\|legacyStedkode` | Primær organisasjonsenhet |
| `orgUnits` | `idautoPersonDeptCodes` | Array | Parset til array av OrgUnit-objekter | Liste over organisasjonsenheter |

---

## Grupperessurs (/Groups)

### Gruppeobjektstruktur

Grupperessursen returnerer følgende JSON-struktur:

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
  "id": "uuid",
  "externalId": "streng",
  "displayName": "Gruppenavn",
  "members": [
    {
      "value": "bruker-uhid",
      "$ref": "https://.../Users/bruker-uhid",
      "displayName": "Brukernavn",
      "type": "User"
    }
  ],
  "meta": {
    "resourceType": "Group",
    "created": "2024-01-15T10:30:00Z",
    "lastModified": "2024-06-20T14:22:00Z",
    "location": "https://.../Groups/uuid"
  }
}
```

### Gruppeattributt-mappinger

| SCIM-attributt | LDAP-attributt | Type | Transformasjon | Beskrivelse |
|----------------|----------------|------|----------------|-------------|
| `id` | `idautoId` | Streng | Ingen | Unik gruppe-ID |
| `externalId` | `ubidExternalID` | Streng | Ingen | Ekstern identifikator |
| `displayName` | `cn` | Streng | Ingen | Gruppenavn |
| `members` | `member` | Array | DN konverteres til SCIM-referanse | Liste over gruppemedlemmer |
| `meta.created` | `createTimestamp` | DatoTid | LDAP→SCIM datoformat | Opprettelsestidspunkt |
| `meta.lastModified` | `modifyTimestamp` | DatoTid | LDAP→SCIM datoformat |

---

## Attributt-transformasjoner

### userType-transformasjon

LDAP-verdien `idautoPersonAffiliation` transformeres til standardiserte SCIM-verdier:

| SCIM userType | LDAP-verdier (ikke skille mellom store/små bokstaver) |
|---------------|--------------------------------------------------------|
| `Employee` | employee, faculty, staff, separated employee |
| `Student` | student, private candidate, leave of absence, separated student |
| `External` | long term guest, emeritus, visiting researcher, consultant |
| `Other` | Alle verdier som ikke matcher ovenfor |

### active-transformasjon

`active`-attributtet utledes fra LDAP `idautoDisabled` med invertert logikk:

| LDAP idautoDisabled | SCIM active |
|---------------------|-------------|
| `TRUE` | `false` |
| Ikke satt / annet | `true` |

### DN-referanseoppslag

Attributter som inneholder LDAP Distinguished Names (`memberOf`, `member`, `manager`) konverteres til SCIM-referanser:

```json
{
  "value": "uhid",
  "$ref": "https://base-url/ResourceType/uhid",
  "displayName": "Navn fra displayName/cn",
  "type": "direct|User"
}
```

### Datoformat-konvertering

LDAP-tidsstempler konverteres fra `yyyyMMddHHmmssZ`-format til ISO 8601 (`2024-01-15T10:30:00Z`).

### displayName-beregning

`displayName` beregnes ved å bruke foretrukne navnefelt hvis tilgjengelig:
- Bruker `idautoPersonPreferredName` i stedet for `givenName` hvis tilstede
- Bruker `idautoPersonPreferredLastName` i stedet for `sn` hvis tilstede
- Format: `{fornavn} {etternavn}`

### OrgUnit-parsing

Attributtene `primaryOrgUnit` og `orgUnits` parser LDAP-verdiformatet:
```
symbol|nameNb|nameEn|legacyStedkode
```

Til strukturerte objekter:
```json
{
  "symbol": "ACRONYM",
  "nameNb": "Avdeling for teknologi",
  "nameEn": "Department of Technology",
  "legacyStedkode": "123456",
  "type": "primary"
}
```

---

## Eksterne avhengigheter

### Globale variabler

Disse variablene må konfigureres i RapidIdentity Connect-miljøet:

| Variabel | Beskrivelse | Eksempel |
|----------|-------------|----------|
| `Global.SCIMBaseUrl` | Basis-URL for SCIM API | `https://gw-INST.intark.uh-it.no/scim/v2/` |
| `Global.inst_domain` | Institusjonsdomene | `inst.no` |
| `Global.SCIMVersion` | API-versjonsstreng | `v4.0.0` |
| `Global.SCIMDebug` | Aktiver feilsøkingslogging | `false` |
| `Global.scimUpnLdapMapping` | LDAP-attr for UPN | `idautoPersonSystem5ID` |
| `Global.employeeAffiliations` | Ansatt-tilknytningsverdier | `Administrative Staff,Faculty,...` |
| `Global.studentAffiliations` | Student-tilknytningsverdier | `Student,Bachelor,Master,...` |
| `Global.guestAffiliations` | Gjest-tilknytningsverdier | `External,Long Term Guest,...` |
| `Global.disabledAffiliations` | Deaktiverte konto-tilknytninger | `Separated Employee,Deceased,...` |
| `Global.shortTermGuestAffiliations` | Korttidsgjest-tilknytninger | `Short-Term Guest` |
| `Global.DisableMQ` | Deaktiver meldingskø | `true` |

### Standardkonfigurasjon (alle institusjoner)

| Variabel | Verdi |
|----------|-------|
| `Global.metaLdapChangeLogDN` | `o=changelog` |
| `Global.metaEmployeeBaseDN` | `ou=Accounts,dc=meta` |
| `Global.scimChangeCookie` | `/cookies/scimChange.cookie` |

### Eksterne actionsets

Disse actionsets kalles men er ikke inkludert i SCIM-prosjektet:

| Actionset | Formål |
|-----------|--------|
| `FnToArray` | Hjelpefunksjon for å sikre at verdi er en array |
| `ErrorHandler` | Standard feilhåndterings-actionset |
| `Connection_MQAPI` | Meldingskø API-tilkobling (for endringshendelser) |

### JavaScript-avhengigheter

Ligger i Scim prosjektet under 'Files':

| Fil | Formål |
|-----|--------|
| `nearley.js` | Earley-parserbibliotek for SCIM-filterparsing |
| `scimfilter.js` | SCIM-filtergrammatikkdefinisjon |

---

## Filteroperatorer

### Støttede SCIM-filteroperatorer

| Operator | Beskrivelse | Eksempel | LDAP-oversettelse |
|----------|-------------|----------|-------------------|
| `eq` | Er lik | `userName eq "bruker@inst.no"` | `(attr=verdi)` |
| `ne` | Er ikke lik | `userType ne "Other"` | `(!(attr=verdi))` |
| `co` | Inneholder | `displayName co "Hansen"` | `(attr=*verdi*)` |
| `sw` | Starter med | `userName sw "ola"` | `(attr=verdi*)` |
| `ew` | Slutter med | `emails.value ew "@inst.no"` | `(attr=*verdi)` |
| `gt` | Større enn | `meta.created gt "2024-01-01"` | `(&(attr>=verdi)(!(attr=verdi)))` |
| `lt` | Mindre enn | `meta.lastModified lt "2024-06-01"` | `(&(attr<=verdi)(!(attr=verdi)))` |
| `ge` | Større eller lik | `meta.created ge "2024-01-01"` | `(attr>=verdi)` |
| `le` | Mindre eller lik | `meta.created le "2024-12-31"` | `(attr<=verdi)` |
| `pr` | Finnes | `title pr` | `(attr=*)` |
| `and` | Logisk OG | `active eq true and userType eq "Employee"` | `(&filter1 filter2)` |
| `or` | Logisk ELLER | `userType eq "Employee" or userType eq "Student"` | `(\|filter1 filter2)` |
| `not` | Logisk IKKE | `not(userType eq "Other")` | `(!filter)` |

### Ikke-støttede funksjoner

- **valuePath-uttrykk**: f.eks. `emails[type eq "work" and value co "@example.com"]`
- **eq null**: Null-likhetssammenligninger
- **Filter på name.formatted**: Ikke filtrerbart

---

## Eksempler på API-kall

### Tilgjengelige spørringsparametere

API-et støtter følgende spørringsparametere som automatisk konverteres til SCIM-filteruttrykk:

| Parameter | Beskrivelse | Konvertert filter |
|-----------|-------------|-------------------|
| `userName` | Brukernavn (legger automatisk til institusjonsdomene) | `filter=userName eq "verdi@institusjon.no"` |
| `employeeNumber` | Ansattnummer | `filter=no:edu:scim:user:employeeNumber eq "verdi"` |
| `userType` | Brukertype | `filter=userType eq "verdi"` |
| `active` | Aktiv status | `filter=active eq "verdi"` |
| `studentNumber` | Studentnummer | `filter=no:edu:scim:user:studentNumber eq "verdi"` |
| `fsPersonNumber` | FS-personnummer | `filter=no:edu:scim:user:fsPersonNumber eq "verdi"` |
| `gregPersonNumber` | GREG-personnummer | `filter=no:edu:scim:user:gregPersonNumber eq "verdi"` |
| `norEduPersonNIN` | Fødselsnummer (kun søk, returneres ikke i respons) | `filter=no:edu:scim:user:norEduPersonNIN eq "verdi"` |

### Eksempler på bruk

#### Hent alle aktive brukere

```http
GET /scim/v2/Users?active=true
```

**Respons:** Alle brukere hvor `active` er `true`.

---

#### Hent alle inaktive brukere

```http
GET /scim/v2/Users?active=false
```

**Respons:** Alle brukere som er deaktivert i systemet.

---

#### Hent bruker med brukernavn

```http
GET /scim/v2/Users?userName=ola.nordmann
```

**Merk:** Institusjonsdomenet legges automatisk til, så dette blir: `filter=userName eq "ola.nordmann@institusjon.no"`

---

#### Hent bruker med fullt brukernavn

```http
GET /scim/v2/Users?userName=ola.nordmann@inst.no
```

**Merk:** Hvis domene allerede er inkludert, brukes det direkte.

---

#### Hent alle ansatte

```http
GET /scim/v2/Users?userType=Employee
```

**Respons:** Alle brukere med `userType` lik "Employee".

---

#### Hent alle studenter

```http
GET /scim/v2/Users?userType=Student
```

**Respons:** Alle brukere med `userType` lik "Student".

---

#### Hent alle eksterne brukere

```http
GET /scim/v2/Users?userType=External
```

**Respons:** Alle gjester og eksterne brukere.

---

#### Hent bruker med ansattnummer

```http
GET /scim/v2/Users?employeeNumber=12345678
```

**Respons:** Brukeren med det spesifikke ansattnummeret.

---

#### Hent bruker med studentnummer

```http
GET /scim/v2/Users?studentNumber=234567
```

**Respons:** Studenten med det spesifikke studentnummeret.

---

#### Hent bruker med FS-personløpenummer

```http
GET /scim/v2/Users?fsPersonNumber=FS12345
```

**Respons:** Brukeren med det spesifikke FS-personnummeret fra Felles Studentsystem.

---

#### Hent bruker med GREG-personnummer

```http
GET /scim/v2/Users?gregPersonNumber=GREG789
```

**Respons:** Brukeren med det spesifikke GREG-personnummeret (gjesteregistrering).

---

#### Søk etter bruker med fødselsnummer

```http
GET /scim/v2/Users?norEduPersonNIN=12345678901
```

**Merk:** Fødselsnummeret kan brukes til søk, men returneres **IKKE** i responsen av personvernhensyn.

---

### Bruk av standard SCIM-filter

For mer avanserte søk kan du bruke `filter`-parameteren med SCIM-filtersyntaks:

#### Hent aktive ansatte

```http
GET /scim/v2/Users?filter=active%20eq%20true%20and%20userType%20eq%20%22Employee%22
```

**Dekodet:** `filter=active eq true and userType eq "Employee"`

**Beskrivelse:** Finner alle brukere som er aktive og har brukertype "Employee".

---

#### Hent ansatte eller studenter

```http
GET /scim/v2/Users?filter=userType%20eq%20%22Employee%22%20or%20userType%20eq%20%22Student%22
```

**Dekodet:** `filter=userType eq "Employee" or userType eq "Student"`

**Beskrivelse:** Finner alle brukere som enten er ansatte eller studenter.

---

### Filtrering med tekstoperatorer

Disse eksemplene viser hvordan du kan bruke `co` (inneholder), `sw` (starter med) og `ew` (slutter med) for tekstsøk.

#### Hent brukere med navn som inneholder "Hansen"

```http
GET /scim/v2/Users?filter=displayName%20co%20%22Hansen%22
```

**Dekodet:** `filter=displayName co "Hansen"`

**Beskrivelse:** Finner alle brukere med "Hansen" i visningsnavnet (f.eks. "Hansen", "Berg Hansen", "Hansenberg").

---

#### Søk etter brukere med navn som inneholder tekst

```http
GET /scim/v2/Users?filter=name.familyName%20co%20%22Berg%22
```

**Dekodet:** `filter=name.familyName co "Berg"`

**Beskrivelse:** Finner alle brukere med "Berg" i etternavnet (f.eks. "Bergersen", "Lindberg", "Berg").

---

#### Hent alle brukere med e-post fra et spesifikt domene

```http
GET /scim/v2/Users?filter=userName%20ew%20%22%40inst.no%22
```

**Dekodet:** `filter=userName ew "@inst.no"`

**Beskrivelse:** Finner alle brukere hvor brukernavnet slutter med `@inst.no`. Nyttig for å filtrere brukere basert på institusjonstilhørighet.

---

#### Hent brukere med brukernavn som starter med en bokstav

```http
GET /scim/v2/Users?filter=userName%20sw%20%22a%22
```

**Dekodet:** `filter=userName sw "a"`

**Beskrivelse:** Finner alle brukere hvor brukernavnet starter med bokstaven "a".

---

#### Søk etter brukere i en spesifikk avdeling

```http
GET /scim/v2/Users?filter=urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department%20co%20%22IT%22
```

**Dekodet:** `filter=urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department co "IT"`

**Beskrivelse:** Finner alle brukere i avdelinger som inneholder "IT" i navnet (f.eks. "IT-avdelingen", "Seksjon for IT-drift").

---

#### Hent brukere opprettet etter en dato

```http
GET /scim/v2/Users?filter=meta.created%20ge%20%222024-01-01T00:00:00Z%22
```

**Dekodet:** `filter=meta.created ge "2024-01-01T00:00:00Z"`

**Beskrivelse:** Finner alle brukere som ble opprettet 1. januar 2024 eller senere. Bruk ISO 8601-format for datoer.

---

#### Kombinere tekstoperatorer med andre filtre

```http
GET /scim/v2/Users?filter=userName%20ew%20%22%40inst.no%22%20and%20active%20eq%20true%20and%20userType%20eq%20%22Employee%22
```

**Dekodet:** `filter=userName ew "@inst.no" and active eq true and userType eq "Employee"`

**Beskrivelse:** Finner alle aktive ansatte med institusjonens e-postdomene.

---

### Tekstoperator-referanse

| Operator | Navn | Eksempel | Matcher |
|----------|------|----------|---------|
| `co` | Inneholder | `displayName co "Berg"` | "Bergersen", "Lindberg", "Berg" |
| `sw` | Starter med | `userName sw "ola"` | "ola.nordmann", "olav.hansen" |
| `ew` | Slutter med | `userName ew "@inst.no"` | "bruker@inst.no", "test@inst.no" |

---

### Paginering

#### Hent første side med 50 resultater

```http
GET /scim/v2/Users?count=50
```

---

#### Hent side 2 (resultater 51-100)

```http
GET /scim/v2/Users?startIndex=51&count=50
```

---

#### Kombinere paginering med filter

```http
GET /scim/v2/Users?active=true&startIndex=1&count=100
```

---

### Attributtseleksjon

#### Hent kun spesifikke attributter

```http
GET /scim/v2/Users?attributes=userName,displayName,emails
```

**Respons:** Returnerer kun `userName`, `displayName` og `emails` for hver bruker.

---

#### Ekskluder attributter

```http
GET /scim/v2/Users?excludedAttributes=groups,roles
```

**Respons:** Returnerer alle attributter unntatt `groups` og `roles`.

---

### Gruppeforespørsler

#### Hent alle grupper

```http
GET /scim/v2/Groups
```

---

#### Hent en spesifikk gruppe

```http
GET /scim/v2/Groups/550e8400-e29b-41d4-a716-446655440000
```

---

#### Søk etter gruppe med navn

```http
GET /scim/v2/Groups?filter=displayName eq "IT-Avdeling"
```

---

#### Hent grupper med medlemmer

```http
GET /scim/v2/Groups?attributes=displayName,members
```

---

### Enkeltbruker-forespørsler

#### Hent en spesifikk bruker med UHID

```http
GET /scim/v2/Users/550e8400-e29b-41d4-a716-446655440000
```

## SCIM-hendelser - Meldingskø

SCIM API-et kan publisere endringsmeldinger til en meldingskø når brukere opprettes, endres eller slettes. Institusjonen er selv ansvarlig for å sette opp og konfigurere meldingskøen som SCIM-systemet skal publisere til.

Implementasjonen følger [SCIM Notify-standarden](https://datatracker.ietf.org/doc/html/draft-hunt-scim-notify-00)

### Hendelsestyper

| Type | Beskrivelse |
|------|-------------|
| `ADD` | Ny bruker opprettet |
| `MODIFY` | Brukerattributter endret |
| `DELETE` | Bruker slettet |
| `ACTIVATE` | Brukerkonto aktivert |
| `DEACTIVATE` | Brukerkonto deaktivert |

### Meldingsformat

Meldinger publiseres til emnet (topic): `no.{inst}.iga.scim.user.{hendelsestype}`

inst er basert på Global variabelen `Global.SCIMBaseUrl`

Eksempel på emne er meldningen "no.uib.iga.scim.user.modify".

Eksempel på meldingsstruktur:

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:notify:2.0:Event"],
  "type": "MODIFY",
  "time": "2026-02-05T10:30:00Z",
  "resourceUris": [
    "https://gw-inst.intark.uh-it.no/scim/v2/Users/uhid-12345"
  ],
  "attributes": [
    "displayName",
    "name.givenName",
    "emails[type eq \"work\"]",
    "phoneNumbers[type eq \"work\"]"
  ]
}
```
Siden IntArk foretrekker korte/mindre meldinger, så inkluderes ikke `.values` attributtet.

**Felter:**
- `schemas`: SCIM Event-skjema
- `type`: Hendelsestype (ADD/MODIFY/DELETE/ACTIVATE/DEACTIVATE)
- `time`: Tidspunkt for hendelsen (ISO 8601)
- `resourceUris`: URI til den påvirkede ressursen
- `attributes`: Liste over attributter som ble endret (kun for MODIFY)

---
