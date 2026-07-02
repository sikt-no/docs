
# _QueryUser

Kategori: Query / User Lookup


## Formål

Komplett brukeroversikt på tvers av alle systemer. Samler og viser brukerdata 
fra Portal, Master Vault, kildesystemer (SAP, FS, GREG) og målsystemer 
(AD, Feide LDAP, ServiceNow, Lenel, Alma).

Brukes til:
- Full troubleshooting av brukerkonto på tvers av hele systemlandskapet
- Verifisere provisjoneringsstatus til alle målsystemer
- Identifisere manglende eller feilaktige kontoer i målsystemer
- Support-saker med behov for komplett systemoversikt
- One-stop lookup for all brukerrelatert informasjon


## Hvordan kjøre

Input-parameter:
- key (string, valgfri): UH-ID eller brukernavn

ActionSet gjenkjenner automatisk om input er:
- UH-ID: 36 tegn
- Brukernavn: Legacy eller UH-brukernavn

### Eksempler:
- _QueryUser("3ddf4822-77ed-4c27-909e-7c826ca10423")
- _QueryUser("laols0070")


## Resultat

Viser strukturert informasjon i logger, organisert per kategori:

1. PORTAL
   Kaller _QueryPortal for full Portal-oversikt inkl. entitlements og grupper

2. META VAULT TABLES (RIDB)
   - master_persons: Grunnleggende brukerinfo
   - master_identifiers: Alle identifikatorer
   - master_positions: Stillinger (hvis ansatt)
   - master_studyrights: Studierettigheter (hvis student)

3. KILDESYSTEMER
   - FS: Studentdata (hvis idautoPersonSchoolID finnes)
   - DFØ/SAP: Ansattdata (hvis idautoPersonPayrollID finnes)
   - GREG: Gjestedata (hvis idautoPersonHRID finnes)

4. MÅLSYSTEMER
   - Active Directory: AD-konto via _QueryAD
   - Feide LDAP: LDAP-konto via _QueryFeideLDAP
   - ServiceNow: ServiceNow-bruker via _QueryServiceNow
   - Lenel: Adgangskontroll (employee og student) via _QueryLenel
   - Alma: Biblioteksystem via _QueryAlma

Hvert system vises med egen seksjon (h2) i logger.
Returnerer: User record array (returnsValue=true)

MERK: Enkelte målsystemer er deaktivert (Apex, Moodle, Google, MetCim, 
MetLDAP, AsureID, OfficePhoneDB, Symmetry) og må aktiveres ved behov.

Skrevet med hjelp av AI