
# TOOL_Manually_Update_Workflow

Kategori: TOOL / Administrativt verktøy


## Formål

Lar deg liste, hente og oppdatere workflow-definisjoner i RI Portal.
Workflow-JSON hentes ned til fil, kan redigeres manuelt, og lastes opp igjen.

Brukes til:
- Endre approver-konfigurasjon i workflows
- Feilsøking og inspeksjon av workflow-definisjoner
- Manuell patching av workflows som ikke kan endres via GUI


## Hvordan kjøre

### Input-parametere:
- operation (enum, påkrevd): "list", "get" eller "update"
- workflow_id (string, valgfri): Påkrevd for get og update

Operasjoner:

1. list: Lister alle workflow-definisjoner (ID og navn)
   TOOL_Manually_Update_Workflow("list")

2. get: Henter én workflow og lagrer JSON til fil
   TOOL_Manually_Update_Workflow("get", "`<workflow_id>`")
   Lagres til: /data/workflow/`<workflow_id>`.txt

3. update: Laster opp redigert JSON tilbake til Portal
   TOOL_Manually_Update_Workflow("update", "`<workflow_id>`")
   Leser fra: /data/workflow/`<workflow_id>`.txt

Typisk arbeidsflyt: list → get → rediger filen → update


## Resultat

- list: Logger alle workflow-IDer og navn i lilla
- get: Lagrer workflow-JSON til /data/workflow/`<workflow_id>`.txt
- update: Oppdaterer workflow-definisjonen i Portal via REST API (HTTP PUT)

Feilscenarier:
- Manglende workflow_id ved get/update → logger ERROR, avbryter
- API-feil → logger ERROR med respons
- Ugyldig JSON i fil ved update → logger ERROR, avbryter
- Fil finnes ikke ved update → logger ERROR, avbryter

Skrevet med hjelp av AI