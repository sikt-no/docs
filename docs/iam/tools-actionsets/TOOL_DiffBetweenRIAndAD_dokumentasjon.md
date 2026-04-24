
# TOOL_DiffBetweenRIAndAD

Kategori: Tools


## Formål


Sammenligner brukere mellom Portal Directory (RI) og Active Directory (AD).

Brukes til:
- Identifisere brukere som eksisterer i AD men ikke i RI
- Finne brukere som vil bli deaktivert i AD av RI (mangler "active directory" entitlement)
- Finne brukere som vil bli opprettet i AD fra RI (har entitlement men mangler i AD)
- Generere CSV-rapporter for analyse og etterbehandling

### Input-parametere:

• log_only (boolean): Kun logging uten CSV-generering

### Eksempler:

Full analyse med CSV-rapporter
- TOOL_DiffBetweenRIAndAD()

Kun logging i konsoll (ingen filer)
- TOOL_DiffBetweenRIAndAD(log_only = true)


## Resultat


Konsoll-output:

Users existing in AD that doesnt exist in RI Portal: [antall]
[liste med brukernavn eller DN]

Users existing in AD that will be disabled by RI: [antall]
[liste med sAMAccountName, affiliasjon]

Users existing in RI that will be created in AD: [antall]
[liste med displayName, idautoID, affiliasjon]

CSV-filer (hvis log_only=false):
- /reports/ExistsInADAndMissingInPortal_[yyyyMMdd].csv
- /reports/ExistsInADAndWillBeDisabledByRI_[yyyyMMdd].csv
- /reports/WillBeCreatedInAD_[yyyyMMdd].csv

Skrevet med hjelp av AI