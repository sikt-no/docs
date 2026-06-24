# sap_30_brukerrolle_autorisasjon

## Formål
- Bygger autorisasjonstabell for radnivåsikkerhet i SAP-data.
- Lager én rad per bruker per organisasjonsenhet brukeren skal ha tilgang til.
- Skiller mellom **direkte** tilgang (tildelt i HRP1001) og **indirekte** tilgang (arvet via organisasjonshierarki).

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **AGRUSERS** | Brukerroller i SAP | Gyldige roller + gyldighetsdato | Identifiserer brukere som kan autoriseres |
| **HRP1001** | Relasjoner mellom objekter | Relasjonstype 290 + gyldighetsdato | Definerer direkte autorisasjon til enhet |
| **HRP1000** | Organisasjonsobjekter/hierarki | Relevante objekttyper | Brukes til å finne underliggende enheter |
| **PA0105** | Brukeridentitet (bl.a. Feide) | Aktive verdier | Kobler SAP-bruker til innloggingsidentitet |
| **PA0002** | Personopplysninger | Aktive verdier | Beriker med navn/personinformasjon |

## Transformasjonslogikk

### 1. Filtrering av autoriserte brukere
Kun brukere med gyldig rolle i AGRUSERS inngår. Følgende roller er gyldige:
- **Z_BASIS_ALL**
- **ZFI_GODKJENN2**
- **ZHR_GODKJENN2**
- **Z_LES_ALL**
- **ZFI_GODKJENN1**
- **ZFI_GODKJENNK**
- **ZHR_GODKJENN1**

### 2. Direkte autorisasjon
Brukere kobles til organisasjonsenheter via relasjonstype **290** i HRP1001.
Disse radene merkes som **Direkte**.

### 3. Indirekte autorisasjon via hierarki
Barnenheter hentes ved traversering av organisasjonshierarkiet i HRP1000/HRP1001.
Hvis tilgang oppstår via overordnet enhet, merkes raden som **Indirekte**.

### 4. Berikelse av sluttresultat
Resultatet berikes med:
- organisasjonsnavn
- Feide-brukernavn
- brukerens navn

### 5. Lasting til mål
Ferdig datasett skrives til tabellen **sap_30_brukerrolle_autorisasjon** i `transformation_hr`.

## Nøkler
- `brukernavn_feide`
- `organisasjon_id`