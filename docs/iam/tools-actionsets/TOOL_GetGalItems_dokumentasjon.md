
# TOOL_GetGalItems

Kategori: Tools


## Formål


Henter items fra GAL (Global Address List) eller delegasjoner via RapidIdentity Portal REST API.

Brukes til:
- Hente GAL-items (globale adresselister)
- Hente profildelegasjoner
- Teste/verifisere Portal REST API-tilgang


## Hvordan kjøre


### Input-parametere: Ingen

### Eksempel:

Hent GAL items eller delegasjoner
- TOOL_GetGalItems()


## Resultat


Konsoll-output:

[URL]                              (purple: viser hvilket endpoint som kalles)
[result]                           (green: JSON-respons fra API)

API-endepunkter:
- /api/rest/admin/gal/items (disabled)
- /api/rest/admin/profiles/delegations (active)

HTTP GET request:
- Authorization: Bearer token (fra sessionPortal)
- Content-Type: application/json

Returverdi: ingen (returnsValue = false)

Skrevet med hjelp av AI