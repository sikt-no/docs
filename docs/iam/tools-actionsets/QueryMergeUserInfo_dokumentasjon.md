
# _QueryMergeUserInfo

Kategori: Query / Merge Information


## Formål

Samler og viser fullstendig brukerinformasjon fra alle systemer for én eller 
flere brukere basert på UH-ID. Kombinerer data fra Identity Warehouse (IdW), 
RIDB, Portal LDAP og målsystemer (AD og Feide LDAP).

Brukes til:
- Verifisere synkronisering av brukerdata på tvers av alle systemer
- Sammenligne identitetsinformasjon før/etter merge-operasjoner
- Troubleshooting av provisjoneringsfeil
- Validere datakonsistens mellom kildesystemer og målsystemer


## Hvordan kjøre

Input-parameter:
- uhids (string, valgfri): Kommaseparert liste med UH-IDer

### Eksempler:
- _QueryMergeUserInfo("3ddf4822-77ed-4c27-909e-7c826ca10423")
- _QueryMergeUserInfo("3ddf4822-77ed-4c27-909e-7c826ca10423,62d5e2aa-ae46-428f-a8ec-abb7b8d4f4c5")

Uten parameter kjøres med test-verdier.


## Resultat

Viser strukturert informasjon i logger med fargekoding:

1. IDENTITY WAREHOUSE (IDW)
   - Institusjoner som har registrert brukeren
   - Identifikatorer: nin, un, dfo:employee, fs:student, grg:employee, privat:passport
   - Namespace: Legacy og UH-opprettede brukernavn

2. LOCAL MASTER DATA (RIDB)
   - master_identifiers: Lokale identifikatorer (uhid, nin, source_institution, source_system)
   - master_persons: Komplett brukerinfo (navn, organisasjon, datoer, kildeinformasjon)

3. PORTAL (Portal LDAP)
   - Portal-brukerkontoer matchet på UH-ID
   - Alle LDAP-attributter (idAutoId, idautoPersonSystem1ID, etc.)

4. TARGET SYSTEMS
   - Active Directory: Brukere matchet på sAMAccountName
   - Feide LDAP: Brukere matchet på uid

Typisk brukt etter merge-operasjoner for å bekrefte konsistent brukerinformasjon.
Viser dataflyt: IDW → RIDB → Portal → Target Systems.

Skrevet med hjelp av AI