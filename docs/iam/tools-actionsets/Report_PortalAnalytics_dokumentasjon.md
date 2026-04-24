
# Report_PortalAnalytics

Kategori: Rapportering / Portal Directory Analyse


## Formål

Genererer omfattende HTML-rapport med detaljert oversikt over brukere og 
tilganger i RapidIdentity Portal Directory (MetaDirectory). Viser statistikk 
over aktive/inaktive brukere, affiliations, business roles, system entitlements 
og provisioning-status mot målsystemer.

Brukes til:
- Overvåke identitetsdata i Portal Directory
- Identifisere avvik mellom forventet og faktisk provisioning
- Analysere distribusjon av tilganger på tvers av systemer
- Rapportere på brukertyper (ansatte, studenter, gjester)
- Verifisere at birthright access er korrekt provisjonert
- Identifisere requested access (ikke-birthright tilganger)
- Overvåke legacy usernames distribusjon

Systemene som analyseres defineres i global variabel:
Global.PortalAnalyticsSystems (kommaseparert liste)


## Hvordan kjøre

Input-parameter:
- write_to_report_file (boolean, valgfri): Historisk parameter uten praktisk 
  effekt

### Eksempler:
- Report_PortalAnalytics()                     # Standard kjøring

ActionSettet kan kjøres manuelt fra RapidIdentity Connect eller scheduleres 
for daglig/timebasert rapportering av portal-statistikk.

Data hentes fra:
- Portal LDAP (MetaDirectory) via getLDAPRecords
- Attributter: idautoDisabled, idautoPersonAffiliation, idautoPersonAppRoles2/5/6/10


## Resultat

HTML-rapport genereres og lagres i:
/reports/PortalAnalytics_v3_[dd-MM-yyyy].html

Rapporten oppdateres kontinuerlig gjennom dagen i append-modus, med ny rad 
per kjøring. Hver rad viser tidsstempel og komplett status.

Rapportinnhold:

1. BRUKERSTATISTIKK
   - Active users: Antall aktive brukere (idautoDisabled ikke satt)
   - Inactive users: Antall inaktive brukere (idautoDisabled=TRUE)

2. AFFILIATIONS
   - Distribusjon av brukertyper med fargekoding:
     * Employee (svart)
     * Separated Employee (mørkegrå)
     * Student (blå)
     * Separated Student (lyseblå)
     * Deceased (rød)
     * Short-Term Guest / Long Term Guest (oransje)
     * External (oransje)
   - Totaltall per affiliation type

3. BUSINESS ROLES (idautoPersonAppRoles10)
   - Liste over alle business roles med antall brukere
   - Totalt antall brukere med business roles

4. SYSTEM ENTITLEMENTS (idautoPersonAppRoles2)
   - Liste over alle systemer med antall brukere som har tilgang
   - Inkluderer både birthright og requested access
   - Breakdown på:
     * Birthright access: Automatisk tildelt basert på rolle
     * Extended birthright: Brukere som har utvidet sine tilganger
     * Requested access: Tilganger søkt uten birthright

5. PROVISIONING-STATUS PER SYSTEM
   For hvert system i Global.PortalAnalyticsSystems:
   - Forventet antall (idautoPersonAppRoles2): Skal ha tilgang
   - Faktisk antall (idautoPersonAppRoles5): Er provisjonert
   - Status med fargemarkering:
     * GRØNN "OK": Matching mellom forventet og faktisk
     * RØD (negativt tall): Pending provisioning (for få provisjonert)
     * BLÅ (+tall): Over-provisjonert (for mange provisjonert)
   - Detaljert breakdown per system:
     * Birthright access: Grunnleggende tilgang
     * Extended birthright: Utvidede tilganger
     * Requested access: Ikke-birthright søknader

6. LEGACY USERNAMES
   - Distribusjon av legacy usernames (idautoPersonSystem1ID/System2ID)
   - Gruppert per affiliation type
   - Totaltall per kategori

Rapportegenskaper:
- Auto-refresh hvert 60. sekund
- Bootstrap-formatering for responsivt design
- Interaktive tabeller med hover-effekt
- Tooltip med detaljert informasjon

Eksempel output (en rad):
Tidsstempel | Active: 5234 | Inactive: 892 | Affiliations | Business Roles | 
            | System Entitlements | FS: 3421/3419 (OK) | AD: 5102/5098 (-4) |

Troubleshooting:
- Negativt tall (rød): Provisioning mangler, sjekk provisjoneringsjobb
- Positivt tall (blå): Over-provisjonert, sjekk deprovisjoneringsregler
- Høyt antall requested access: Mange manuelle søknader, vurder birthright
- Job not started (rød): Provisjoneringsjobb har ikke kjørt for systemet

Skrevet med hjelp av AI