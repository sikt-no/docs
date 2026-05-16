
# PersonProfiling


Kategori: Person Profiling / Query


## Formål

Genererer en fullstendig HTML-brukerprofil basert på UH-ID. Samler data fra
Portal Directory (LDAP), Identity Warehouse (IdW), MetaVault (RIDB) og
EVU-kursdata, og presenterer alt i en Bootstrap-formatert HTML-rapport.

Rapporten er kumulativ, ny informasjon legges til i samme fil for samme dato,
slik at man kan spore endringer gjennom dagen.

Brukes til:
- Troubleshooting av brukerkontoer på tvers av alle systemer
- Verifisering av data fra kildesystemer (FS, SAP/DFØ, GREG)
- Debugging av JML-prosesser og provisjonering
- Support-saker med behov for komplett brukeroversikt
- Se hvilke kurs (EVU) en bruker er påmeldt


## Hvordan kjøre

Input-parameter:
- uhid (string): UH-ID

### Eksempel:
PersonProfiling("3ddf4822-77ed-4c27-909e-7c826ca10423")


Resultat

Genererer HTML-fil:
  `/person_profiles/SE_PersonProfile_<uhun>-<dd-MM-yyyy>.html`

Filen åpnes i append-modus, så hver kjøring samme dag legger til en ny
tidsstemplet seksjon nederst i rapporten.

Rapporten henter og viser data fra følgende seksjoner:

1. PORTAL DIRECTORY (LDAP)
   - Alle LDAP-attributter for brukeren (unntatt userPassword)
   - Vises i fet skrift per attributt
   - Hvis bruker ikke finnes: vises "User not found in PD"

2. IDENTITY WAREHOUSE (IDW)
   - Kaller _QueryIDW med uhid
   - Viser identifikatorer og institusjonstilknytning

3. EVU-KURS
   - Kaller TOOL_CourseProfiling med uhid
   - Viser alle EVU-kurspåmeldinger for brukeren

4. MASTER VAULT (RIDB): tabeller basert på affiliasjon
   Alltid inkludert:
   - master_persons

   Hvis student (id inneholder "/fs/"):
   - master_studyrights
   - master_studentteacher
   - master_studentassessments
   - master_roles
   - students_load
   - studyrights_load
   - studentteaching_load
   - studentassessments_load
   - roles_load

   Hvis ansatt/gjest (id inneholder "/employee/"):
   - master_positions
   - master_contracts
   - employees_load
   - positions_load
   - contracts_load

   Gjester fra GREG identifiseres via "/grg/" i kildeID-en og inngår
   i employee-tabellene.

Mulige feilsituasjoner:
- Kan ikke koble til RIDB → avbryter og returnerer false
- Kan ikke koble til Portal LDAP → avbryter
- UH-ID finnes ikke i master_persons → loggfeil og avbryter

Skrevet med hjelp av AI