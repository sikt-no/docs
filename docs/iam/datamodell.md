---
title: Datamodell
---


## Identity Warehouse (IdW) database skjema

### Master Identifiers
Databasetabellen inneholder digitale identiteter (definert av en UH-ID) og dens tilknytning til én eller flere unike identifikatorer. Unike identifikatorer kan være et nasjonalt ID-nummer, et midlertidig nasjonalt ID-nummer, et ansattnummer knyttet til en institusjon, et studentnummer knyttet til en institusjon, et lokalt brukernavn, en lokal epostaddresse, et SO-nummer eller en kombinasjon av attributter som for eksempel juridisk etternavn, passnummer, land og institusjonstilknytning.

| Field      | Data Type | Field Length | Nullable | Pri Key | Source: master\_employee and master\_student processing |
| ---------- | --------- | ------------ | -------- | ------- | ------------------------------------------------------- |
| created_at |           |              | No       |         | Timestamp of identity creation                          |
| held_by    | varchar   | 36           | No       | X       | UHID - Randomly generated GUID                          |
| identifier | varchar   | 200          | No       | X       | identifier type + “:” + identifier value                |
| institution| varchar   |              | No       |         | Source institution                                      |
| type       | varchar   |              | No       |         | identifier type                                         |
| value      | varchar   |              | No       |         | identifier value                                        |

## RIDB database skjema

### Master Persons
Databasetabellen inneholder masterdata informasjon for alle brukere.
En bruker kan ha flere innslag i master_persons hvis brukeren har tilknytning til flere kildesystem.

| **Field**                 | **Data Type** | **Field Length** | **Nullable** |
| ------------------------- | ------------- | ---------------- | ------------ |
| id                        | varchar       | 50               | No           |
| uhid                      | varchar       | 36               | No           |
| uhun                      | varchar       | 9                | No           |
| status                    | char          | 1                | No           |
| eppn                      | varchar       | 36               | Yes          |
| employee\_no              | varchar       | 45               | Yes          |
| first\_name               | varchar       | 254              | Yes          |
| last\_name                | varchar       | 254              | Yes          |
| fnr                       | varchar       | 12               | Yes          |
| alternate\_identification | varchar       | 100              | Yes          |
| birthdate                 | varchar       | 10               | Yes          |
| classification\_group     | varchar       | 5                | Yes          |
| classification\_subgroup  | varchar       | 5                | Yes          |
| start\_date               | varchar       | 10               | Yes          |
| end\_date                 | varchar       | 10               | Yes          |
| end\_reason               | varchar       | 254              | Yes          |
| main\_position            | varchar       | 48               | Yes          |
| main\_position\_percent   | varchar       | 6                | Yes          |
| main\_organization        | varchar       | 12               | Yes          |
| secondary\_positions      | varchar       | 500              | Yes          |
| external\_id              | varchar       | 254              | Yes          |
| telephone                 | varchar       | 100              | Yes          |
| personal\_mobile          | varchar       | 30               | Yes          |
| personal\_mobile\_foreign | varchar       | 30               | Yes          |
| personal\_postal\_code    | varchar       | 20               | Yes          |
| personal\_city            | varchar       | 50               | Yes          |
| personal\_state           | varchar       | 50               | Yes          |
| personal\_email           | varchar       | 100              | Yes          |
| passport\_number          | varchar       | 50               | Yes          |
| dead                      | bit           |                  | Yes          |
| hard\_match\_conflicts    | varchar       | 4000             | Yes          |
| soft\_match\_conflicts    | varchar       | 4000             | Yes          |
| updated\_date             | date          |                  | Yes          |
| extension\_sent           | date          |                  | Yes          |
| extended\_to              | date          |                  | Yes          |
| fs\_pin                   | varchar       | 12               | Yes          |
| manager                   | bit           |                  | Yes          |
| gender                    | varchar       | 20               | Yes          |
| reservation               | varchar       | 200              | Yes          |
| fagperson                 | bit           |                  | Yes          |
| legacy\_username          | varchar       | 50               | Yes          |
| legacy\_email             | varchar       | 200              | Yes          |
| campus                    | varchar       | 10               | Yes          |
| language\_preferred       | varchar       | 50               | Yes          |
| dfo\_brukerident          | varchar       | 12               | Yes          |
| source\_institution       | varchar       | 10               | No           |
| source\_system            | varchar       | 3                | No           |
| source\_id                | varchar       | 50               | No           |
| created\_at               | datetime      |                  | No           |
| updated\_at               | datetime      |                  | No           |
| process\_id               | varchar       | 100              | Yes          |
| processed\_at             | datetime      |                  | Yes          |


### SAP Tabeller
Databasetabellene inneholder informasjon fra SAP om ansatte, organisasjoner og stillinger. Last-tabellene populeres direkte ved bruk av API-kall til SAP via IntArk. Master-tabellene populeres ved bruk av data fra last-tabellene.

* SAP Last-tabeller
  * `employees_load`
  * `orgs_load`
  * `positions_load`
  * `contracts_load`
  * `loa_load`
* SAP Master-tabeller
  * `master_orgs`
  * `master_positions`
  * `master_contracts`
  * `master_loa`


#### SAP master_orgs

| **Field**           | **Data Type** | **Field Length** | **Nullable** | **Pri Key** | **Source Table: **orgs\_load                                                   |
| ------------------- | ------------- | ---------------- | ------------ | ----------- | ------------------------------------------------------------------------------ |
| id                  | varchar       | 100              | No           | X           | source\_institution + “:” + source\_system + “:orgs:” + id                     |
| managed\_by         | varchar       | 100              | No           | X           | source\_institution + “:” + source\_system + “:employee:” + managerEmployeeNos |
| short\_name         | varchar       | 45               | No           |             | shortName                                                                      |
| name                | varchar       | 45               | No           |             | name                                                                           |
| parent\_id          | varchar       | 45               | Yes          |             | source\_institution + “:” + source\_system + “:orgs:” + parentId               |
| status              | varchar       | 1                | No           |             | “A”                                                                            |
| street              | varchar       | 100              | Yes          |             | N/A                                                                            |
| city                | varchar       | 100              | Yes          |             | N/A                                                                            |
| state               | varchar       | 45               | Yes          |             | N/A                                                                            |
| postal\_code        | varchar       | 45               | Yes          |             | N/A                                                                            |
| country             | varchar       | 45               | Yes          |             | N/A                                                                            |
| costcenter          | varchar       | 45               | Yes          |             | costcenter                                                                     |
| source\_institution | varchar       | 45               | No           |             | source\_institution                                                            |
| source\_system      | varchar       | 45               | No           |             | source\_system                                                                 |
| source\_id          | varchar       | 45               | No           |             | id                                                                             |
| deputy\_id          | varchar       | 100              | Yes          |             | source\_institution + ":" + source\_system + ":employee: + deputy\_id          |
| deputy\_held\_to    | varchar       | 10               | Yes          |             | deputy\_held\_to                                                               |
| inserted\_at        | datetime      |                  | No           |             | _System date_                                                                  |
| updated\_at         | datetime      |                  | No           |             | _System date_                                                                  |
| processed\_at       | datetime      |                  | Yes          |             | _System date_                                                                  |
| process\_id         | varchar       | 45               | Yes          |             | _Internal process ID_                                                          |


#### SAP master_positions

| **Field**            | **Data Type** | **Field Length** | **Nullable** | **Pri Key** | **Source Table: **positions\_load                                    |
| -------------------  | ------------- | ---------------- | ------------ | ----------- | -------------------------------------------------------------------- |
| id                   | varchar       | 45               | No           | X           | source\_institution + “:” + source\_system + “:positions:” + id      |
| held\_by             | varchar       | 45               | No           | X           | source\_institution + “:” + source\_system + “:employee:” + held\_by |
| held\_from           | date          |                  | Yes          |             | held\_from                                                           |
| held\_until          | date          |                  | Yes          |             | held\_until                                                          |
| adjusted\_held\_from | date          |                  | Yes          |             | adjusted\_held\_from                                                 |
| adjusted\_held\_until| date          |                  | Yes          |             | adjusted\_held\_until                                                |
| status               | varchar       | 1                | No           |             | _calculated – “A”|”I”_                                               |
| job\_code            | varchar       | 12               | Yes          |             | job\_code                                                            |
| title                | varchar       | 50               | Yes          |             | title                                                                |
| organization         | varchar       | 33               | No           |             | source\_institution + “:” + source\_system + “:orgs:” + organization |
| yrk                  | varchar       | 10               | Yes          |             | yrk                                                                  |
| position\_group      | varchar       | 50               | Yes          |             | postion\_group                                                       |
| position\_group\_id  | varchar       | 12               | Yes          |             | postion\_group\_id                                                   |
| source\_institution  | varchar       | 45               | No           |             | source\_institution                                                  |
| source\_system       | varchar       | 45               | No           |             | source\_system                                                       |
| source\_id           | varchar       | 45               | No           |             | id + “:” held\_by                                                    |
| sponsor              | varchar       | 65               | Yes          |             | Sponsors emailaddress                                                |
| custom_title         | varchar       | 40               | Yes          |             | custom_title                                                         |
| inserted\_at         | datetime      |                  | No           |             | _System date_                                                        |
| updated\_at          | datetime      |                  | No           |             | _System date_                                                        |
| processed\_at        | datetime      |                  | Yes          |             | _System date_                                                        |
| process\_id          | varchar       | 45               | Yes          |             | _Internal process ID_                                                |

### FS Tabeller
Databasetabellene inneholder data fra FS om vurderingstider, land, språk, semester, studentvurderinger, studentundervisning, studienivåer, studieprogrammer, studieretter og emner. Last-tabellene populeres direkte ved bruk av API-kall til FS via IntArk. Master-tabellene populeres ved bruk av data i last-tabellene.

* FS Last-tabeller
  * `assessmenttimes_load`
  * `countries_load`
  * `languages_load`
  * `roles_load`
  * `semester_load`
  * `studentassessments_load`
  * `students_load`
  * `studentteaching_load`
  * `studylevels_load`
  * `studyprograms_load`
  * `studyrights_load`
  * `teaching_load`
  * `teachingactivity_load`
  * `topics_load`
  * `participants_load`
  * `evucourse_load`
  * `evucourseparticipation_load`
* FS Master-tabeller
  * `master_assessmenttimes`
  * `master_countries`
  * `master_languages`
  * `master_roles`
  * `master_semester`
  * `master_studentassessments`
  * `master_studentteacher`
  * `master_studylevels`
  * `master_studyprograms`
  * `master_studyrights`
  * `master_teaching`
  * `master_teachingactivity`
  * `master_topics`
  * `master_participants`
  * `master_evucourse`
  * `master_evucourseparticipation`



### OrgReg Tabell
Databasetabellen orgreg_load inneholder alle orgenhetene registrert i OrgReg. Tabellen populeres direkte ved bruk av API-kall til OrgReg via IntArk.


| **Field**                       | **Data Type** | **Field Length** | **Nullable** | **Pri Key** | **API Source: **orgreg                        |
| ----------------------------- | ------------- | ---------------- | ------------ | ----------- | --------------------------------------------- |
| source\_institution           | varchar       | 10               | No           | X           | _static – Action Set ‘institution’ parameter_ |
| source\_system                | varchar       | 10               | No           | X           | _static – ‘OrgReg’_                           |
| external\_key\_source\_system | varchar       | 45               | No           | X           | externalKeys.sourceSystem                     |
| external\_key\_type           | varchar       | 45               | No           | X           | externalKeys.Type                             |
| external\_key\_value          | varchar       | 45               | No           | X           | externalKeys.Value                            |
| source\_id                    | varchar       | 20               | No           | X           | ouId                                          |
| note                          | varchar       | 200              | Yes          |             | note                                          |
| english\_name                 | varchar       | 200              | Yes          |             | englishName                                   |
| valid\_from                   | date          |                  | Yes          |             | validFrom                                     |
| norwegian\_homepage           | varchar       | 100              | Yes          |             | norwegianHomepage                             |
| norwegian\_name               | varchar       | 200              | Yes          |             | norwegianName                                 |
| email                         | varchar       | 45               | Yes          |             | email                                         |
| acronym                       | varchar       | 45               | Yes          |             | acronym                                       |
| english\_homepage             | varchar       | 45               | Yes          |             | englishHomepage                               |
| postal\_code                  | varchar       | 45               | Yes          |             | postalAddress.postalCode                      |
| country                       | varchar       | 45               | Yes          |             | postalAddress.country                         |
| state                         | varchar       | 45               | Yes          |             | postalAddress.stateOrProvinceName             |
| city                          | varchar       | 45               | Yes          |             | postalAddress.city                            |
| fax                           | varchar       | 45               | Yes          |             | fax                                           |
| visit\_street                 | varchar       | 100              | Yes          |             | visitAddress.street                           |
| visit\_city                   | varchar       | 45               | Yes          |             | visitAddress.city                             |
| visit\_country                | varchar       | 45               | Yes          |             | visitAddress.country                          |
| visit\_postal\_code           | varchar       | 45               | Yes          |             | visitAddress.postalCode                       |
| phone                         | varchar       | 45               | Yes          |             | phone.countryCode + phone.number              |
| predecessors                  | varchar       | 45               | Yes          |             | predecessors                                  |
| inserted\_on                  | datetime      |                  | No           |             | _System date_                                 |
| updated\_on                   | datetime      |                  | No           |             | _System date_                                 |
| processed\_on                 | datetime      |                  | Yes          |             | _System date_                                 |
| process\_id                   | varchar       | 45               | Yes          |             | _Internal process ID_                         |



## Portal directory (Portal LDAP)
Portal directory er en LDAP-katalog som inneholder informasjon om brukere. 



| Attribute                        | Display name                 | Description                                                                  | Type                | Example                                                                                                | Mullti valued |
| -------------------------------- | ---------------------------- | ---------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------ | ------------- |
| idautoID                         | UH-ID                        | UHID (Automatically Generated GUID)                                          | String              | 3ddf4822-77ed-4c27-909e-7c826ca10423                                                                   |               |
| idautoPersonSAMAccountName       | UH-UN (UH username)          | UH username (2+3+4)                                                          | String              | laols0070                                                                                              |               |
| idautoPersonSystem1ID            | Legacy Username              | Institution unique username                                                  | String              | lao123                                                                                                 |               |
| idautoPersonSystem2ID            | Legacy Email                 | Institution unique email                                                     | String              | lao123@institution.no                                                                                  |               |
| idautoPersonSystem5ID            | EPPN                         | eduPersonPrincipalName (Feide ID)                                            | String              | lao123@institution.no                                                                                  |               |
| mail                             | EPPN/FeideID                 | eduPersonPrincipalName (Feide ID)                                            | String              | lao123@institution.no                                                                                  |               |
| idautoPersonNationalID           | National identity number (NIN) | National Identity Number (F-nr, D-nr, S-nr)                                | String              | 010199100122                                                                                           |               |
| givenName                        | First Name                   | User’s first name.                                                           | String              | Micky                                                                                                  |               |
| idautoDisabled                   | Account Disabled             | If user is inactive this attribute is set to True                            | Boolean             | If A => null, if I => 'TRUE'                                                                           |               |
| sn                               | Last Name                    | User’s last name                                                             | String              | Mouse                                                                                                  |               |
| idautoPersonPreferredName        | Preferred Name               | User’s preferred first name                                                  | String              | Mick                                                                                                   |               |
| idautoPersonPreferredLastName    | Preferred Last Name          | User’s preferred last name                                                   | String              | Mous                                                                                                   |               |
| displayName                      | Full Name                    | Full legal name from source                                                  | String              | Micky Mouse                                                                                            |               |
| idautoPersonAffiliation          | Primary Affiliation          | User’s primary affiliation (Account type)                                    | String              | Employee                                                                                               |                |
| idautoPersonAffiliations         | Affiliations                 | Multivalued field containing all birthright roles associated with the person | String              | \[Employee, Student\]                                                                                  | ✓             |
| idautoPersonDeptCode             | Primary ORG Tuple            | Primary org affiliation tuple                                                | String              | 0000001501\|IT\|IT-Senter\|Department of IT Services\|000000                                           |               |
| idautoPersonDeptCodes            | Affiliated ORGs Tuple        | Affiliated orgs tuple                                                        | String              | [0000001501\|IT\|IT-Senter\|Department of IT Services\|000000]                                         | ✓             |
| idautoPersonActivityCode         | ORG-ERA Tuple                | ORG-ERA Tuple                                                                | String              | \[subjectCode\|ERGOB1070,studyprogramCode\|ERGB,orgShortName\|HV-U-NVH-R]                              | ✓             |
| idautoPersonADProfilePath        | AD Profile Path              | AD Profile Path                                                              | String              |                                                                                                        |               |
| idautoPersonAppRoles1            | Engagement Roles	            | Engagement roles                                                             | String              | \[iam:employee:institution/SAM-U/SAM-U-HHS]                                                            | ✓             |
| idautoPersonAppRoles3            | Requested entitlements 	    | Requested entitlements                                                       | String              | CreateSponsoredAccounts                                                                                | ✓             |
| idautoPersonAppRoles2            | Birthright System Entitlements | OrgEra Assigned Entitlements by birthright                                 | String              | \[active directory, ldap, framework, lenel, ms office 365]                                             | ✓             |
| idautoPersonAppRoles4            | Email Notifications          | Multivalued attribute mainly used for seperation emails                      | String              | \[separationEmailSent:20230131, separationEmailSend:20230201]                                          | ✓             |
| idautoPersonAppRoles5            | Birthright System Entitlements Provisioned | Provisioned birthright entitlements                            | String              | \[lenel, apex, active directory, ldap]                                                                 | ✓             |
| idautoPersonAppRoles6            | Requested System Entitlements| System entitlements that have been requested by the user                     | String              | \[topdesk:operator, topdeskoperatorgroup:4c28c38f-c1aa-4685-a5d6-dad78923f241]                         | ✓             |
| idautoPersonAppRoles7            | Target IDs                   | User identifiers for synced target systems.                                  | String              | \[topdeskoperator:0f24b366-35d4-4891-98d5-b4a372c099ec, topdesk:d03b615b-5a86-47a4-a06d-45925c5431a6\] | ✓             |
| idautoPersonAppRoles8            | Requested System Entitlements Provisioned| System entitlements that have been requested and provisioned     | String              | \[topdesk:operator, topdeskoperatorgroup:4c28c38f-c1aa-4685-a5d6-dad78923f241]                         | ✓             |
| idautoPersonAppRoles10           | Business Roles	              | Business roles (tech name)                                                   | String              | \[iam:employee, iam:manager, iam:adm]                                                                  | ✓             |
| idautoPersonExt5                 | PIN Code                     | PIN Code for accesscard                                                      | String              | 1234                                                                                                   |               |
| idautoPersonExt6                 | Guest Sponsor                | Guest sponsor (e.g. from GREG)                                               | String              | 15d2de0b-b103-47d8-bddb-f595f8238fb0                                                                   |               |
| idautoPersonExt9                 | Engagement Tuple             | Multivalued engagement tuple                                                 | String              | ["studentstatus=aktiv\|privatist=false\|student=true" , "1009\|2310 112\|1\|1\|01.01.2012\|31.12.9999"]| ✓             |
| idautoPersonExt10                | Engagement Types Tuple       | Multivalued engagement types tuple                                           | String              | [roles\|IPH3000\|ERGB\|,position\|institution\|HV-U-NVH\|HV-U-NVH-R\|fcaf059a-7018-4f73-a177-2b4543e9576d]| ✓             |
| idautoPersonExt12                | Manager's UH-ID              | UHID for the users manager                                                   | String              | 15d2de0b-b103-47d8-bddb-f595f8238fb0                                                                   |               |
| idautoPersonExt13                | Deputy's UH-ID               | UHID for the users deputy                                                    | String              | 15d2de0b-b103-47d8-bddb-f595f8238fb0                                                                   |               |
| idautoPersonExt18                | Change of affiliation date   | Change of affiliation date                                                   | String              | affiliationChanged:2023-12-01                                                                          |               |
| idautoPersonExt19                | Last Updated                 | Timestamp when user was last updated in Portal LDAP                          | String              | 2024-02-28 16:01                                                                                       |               |
| idautoPersonExt20                | Historical Password Hashes   | Hash used to check for password reusal. Contains timestamp aswell            | String              | Za1RAhhjRunI5PChpoioTTQjp8eWChvaBC3782JDnoSRq5ti\|20230414070630                                       | ✓             |
| idautoPersonExtBool1             | Reservation Flag             | Reservation flag from source system                                          | Boolean             | TRUE                                                                                                   |               |
| idautoPersonExtBool2             | Account override Flag        | User will not be deleted if override flag is true                            | Boolean             | TRUE                                                                                                   |               |
| idautoPersonExtBool3             | Account Deletion override Flag    | User will be deleted if override flag is true                           | Boolean             | TRUE                                                                                                   |               |
| idautoPersonExtBool4             | Claim Mail Sent              | Marks the user indicating that claim mail has been sent                      | Boolean             | TRUE                                                                                                   |               |
| idautoPersonAllAccessTermDate    | Deprovision Date             | Used for tracking when an account was disabled in RI                         | Date (zulu)       | 202103310000Z                                                                                          |               |
| idautoPersonSchoolID             | FS Personløpenummer          | "Personløpenummer" from FS                                                   | String              | 11122                                                                                                  |               |
| idautoPersonStuID                | FS Student Number            | Student Number from FS                                                       | String              | 333444                                                                                                 |               |
| idautoPersonEnrollDate           | Student start date           | Calculated startdate for student affiliation                                 | Date (zulu)       | 202401010000Z                                                                                          |               |
| idautoPersonTermDate             | Student end date             | Calculated enddate for student affiliation                                   | Date (zulu)       | 202407010000Z                                                                                          |               |
| idautoPersonGraduationDate       | Student extension date       | Will be set if the user requests to extend their account                     | String              | 2024-08-01                                                                                             |               |
| idautoPersonCourseCodes          | FS Subject Codes             | Subject codes from FS                                                        | String              | \[roles:PRV000,studentassessment:VPL01]                                                                | ✓             |
| idautoPersonPayrollID            | Employee Number              | Employee number                                                              | String              | 30202                                                                                                  |               |
| idautoPersonHRID                 | Greg ID                      | Guest (GREG) number                                                          | String              | 1234                                                                                                   |               |
| idautoPersonStaffStartDate       | Employee Start Date          | Calculated startdate for employee & guests                                   | String              | 2024-08-01                                                                                             |               |
| idautoPersonStaffEndDate         | Employee End Date            | Calculated enddate for employee & guests                                     | String              | 2025-01-01                                                                                             |               |
| idautoPersonManagedOrgs          | Manager's ORG                | ORG where a user is a manager of                                             | String              | SAM-U-HHS                                                                                              | ✓             |
| idautoPersonManagerID            | UID number                   | UID number                                                                   | String              | 98765                                                                                                  |               |
| manager                          | Manager's UH-ID with DN	    | Manager's UH-ID with DN (Same as Ext12 but with entire DN)                   | String              | idautoID=15d2de0b-b103-47d8-bddb-f595f8238fb0,ou=Accounts,dc=meta                                      |               |
| idautoPersonDeptDescr            | Main position ID and FTE %   | Main position ID and FTE % (Stillingsprosent)                                | String              | 999999\|100                                                                                            |               |
| idautoPersonDeptDescrs           | Secondary position IDs       | Secondary position IDs (for Employees and Guest from SAP and Greg)           | String              | 999999                                                                                                 | ✓             |
| idautoPersonEndDate              | Sponsored Accounts end date  | Sponsored Accounts end date                                                  | Date (zulu)       | 202407010000Z                                                                                          |               |
| idautoPersonJobCode              | Main Position Tuple          | Main Position Tuple                                                          | String              | 1009\|999999\|2310 112\|HV-U-NVH-R                                                                     |               |
| idautoPersonJobCodes             | Stillingskategori            | Stillingskategori                                                            | String              | Undervisnings- og forsknings personale                                                                 | ✓             |
| idautoPersonJobTitle             | Job Title    | Job Title (Position title tuple “position title \| preferred title-n \| preferred title-e”. ) | String      | Default: "Universitetslektor". Alternative: "Universitetslektor \| Universitetslektor i matematikk \| University lecturer in Mathematics"  | | 
| idautoPersonLocCodes             | Location codes               | Location codes (Institution abbreviation)                                    | String              | omet-dev                                                                                              | ✓              |
| idautoPersonOfficePhone          | Office Phone                 | Office Phone Number                                                          | String              | ##########                                                                                             |               |
| idautoPersonPhoneExtension       | Workmobile                   | Work mobile number                                                           | String              | ##########                                                                                             |               |
| idautoPersonStateID              | Passport Number              | Passport Number                                                              | String              | 1112233NO                                                                                              |               |
| idautoPersonClaimCode            | Claim Code                   | Claim Code with date it was assigned and used                                | String              | 11f08c1d-c265-45d7-89d2-7a371f5629c5\|20210413\|20210414                                               |               |
| idautoPersonClaimFlag            | Account Claimed              | Indicates whether or not the account has been claimed                        | Boolean             | TRUE                                                                                                   |               |
| idautoPersonContractStartDate    | Contract start date          | Contract start date                                                          | Date (zulu)         | yyyyMMddHHmm                                                                                           |               |
| idautoPersonContractEndDate      | Contract end date            | Contract end date                                                            | Date (zulu)         | yyyyMMddHHmm                                                                                           |               |
| idautoPersonHomeEmail            | Personal Email               | Personal Email Address                                                       | Email Single-Valued | micky@example.no                                                                                       |               |
| idautoPersonHomePhone            | Personal phone               | Personal phone number                                                        | String              | +4712345678                                                                                            |               |
| mobile                           | Personal Mobile              | Personal Mobile number                                                       | String              | +4712345678                                                                                            |               |
| idautoPersonBirthDate            | Birthdate                    | User's Date of Birth                                                         | String              | 30.01.1980                                                                                             |               |
| idautoPersonWorkStreetAddress| Work Address Tuple | Work address tuple (work address\|office address\|campus\|building\|office number)  | String  | Default: Pilestredet 46,0167 Oslo. Alternative: Pilestredet 46,0167 Oslo\|Stensberggata 29,0170 Oslo\|Pilestredet\|P-111\|P-111-123 | ✓   |
| l                                | City                         | User’s Home City                                                             | String              | Oslo                                                                                                   |               |
| postalCode                       | Postal Code                  | User’s Home Postal code                                                      | String              | 0001                                                                                                   |               |
| idautoPersonGender               | Gender                       | Gender (f / m)                                                               | String              | f                                                                                                      |               |
| idautoPersonBadgeIDs             | Access Card Number           | Access Card Number                                                           | String              | \[1234123412]                                                                                          | ✓             |
| idautoPersonUserNameMV           | Usernames                    | Usernames (legacy username if existing and uh username)                      | String              | micey1234                                                                                              | ✓             |


### idautoPersonAffiliation(s)
idautoPersonAffiliation er primær affiliasjon for en bruker og regnes ut i DBToIdentityStore. Den baserer seg på verdiene som blir satt i idautoPersonAffiliations og velger primær affilering basert på globalverdi metaAffiliationPriority.


## Active Directory
Felles IAM provisjonerer brukere og grupper til Active Directory (AD). For hver institusjon kartlegges et 'mapping ark' som beskriver hvilke attributter som skal provisjoneres til AD.

## Feide LDAP
Felles IAM provisjonerer brukerobjekt til LDAP (Feide). Flere institusjoner har tatt i bruk tjenesten [Feidehotell](https://sikt.no/tjenester/feide-hotell) ved overgang til Felles IAM. Ved bruk av Feidehotell provisjonerer vi attributter som er påkrevd og anbefalt fra [Feide](https://docs.feide.no/reference/schema/info_uh/index.html).

For institusjoner som benytter egen LDAP gjør vi en kartlegging av hvilke attributter som skal provisjoneres til LDAP, utover de som er påkrevd og anbefalt fra Feide.
