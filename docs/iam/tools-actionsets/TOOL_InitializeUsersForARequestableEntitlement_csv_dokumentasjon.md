
# TOOL_InitializeUsersForARequestableEntitlement_csv

Kategori: Tools


## Formål


Initialiserer brukere til et bestillbart entitlement basert på CSV-fil.

Brukes til:
- Bulk-tildeling av requestable entitlement til mange brukere
- Automatisk godkjenning av forespørsler (auto-approve)
- Migrering av eksisterende tilganger til nytt entitlement


## Hvordan kjøre


### Input-parametere:

• filename (string): CSV-filnavn i /data/-mappen
• fieldSeparator (string, optional): Felt-separator (default: ',')
• entitlement_id (string): ID for requestable entitlement
• log_only (boolean): Test-modus uten å faktisk tildele
• identifier (enum, optional): Identifikatortype i filen (uhid, fnr, username, ansattnr, schoolID)

CSV-format:
- Fil må ligge i /data/-mappen
- Kolonne med identifikator (uhid, fnr, username, etc.)
- UTF-8 encoding

### Eksempler:

Tildel entitlement basert på UHID
```json
{
TOOL_InitializeUsersForARequestableEntitlement_csv(
    filename = "users.csv",
    entitlement_id = "abc-123",
    log_only = false,
    identifier = "uhid"
)
}
```

Test-modus med fødselsnummer
```json
{
TOOL_InitializeUsersForARequestableEntitlement_csv(
    filename = "ansatte.csv",
    fieldSeparator = ";",
    entitlement_id = "xyz-789",
    log_only = true,
    identifier = "fnr"
)
}
```



## Resultat


Konsoll-output:

(LOG ONLY) Would request '[entitlement_name]' for [displayName] ([identifier])
Failed to find these users in LDAP: [liste]
Multiple users found in LDAP with username: [liste]

```json
{
--------------------------------
Total:                  [antall]
Total Skipped:          [antall]
--------------------------------
Total Add:              [antall]
--------------------------------
Total Add Failed:       [antall]

}
```

Prosess:
1. Validerer at CSV-fil finnes
2. Verifiserer at entitlement_id eksisterer via REST API
3. Itererer gjennom CSV-fil
4. Søker i Portal LDAP etter bruker basert på identifier
5. Kaller FnBulkRequestEntitlements for å opprette forespørsel
6. Venter 3 sekunder
7. Kaller FnAutoApproveEntitlements for automatisk godkjenning
8. Logger statistikk og feil

Identifier-mapping til LDAP-attributter:
- uhid → idautoID
- fnr → idautoPersonNationalID
- username → idautoPersonSystem1ID eller idautoPersonSAMAccountName
- ansattnr → idautoPersonPayrollID
- schoolID → idautoPersonSchoolID

Skipper records hvis:
- Identifier mangler i CSV
- Bruker ikke funnet i LDAP
- Flere brukere funnet i LDAP (duplikater)

Returverdi: true ved suksess

Skrevet med hjelp av AI