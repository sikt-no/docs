
# _QueryPortal

Kategori: Query / Portal


## Formål

Slår opp brukerinformasjon i RI Portal basert på UH-ID eller brukernavn.
Viser brukerdata fra Portal LDAP, gruppemedlemskap og tilgangstildelinger 
(entitlements) fra Portal API.

Brukes til:
- Verifisere brukerens Portal-kontoinnstillinger og attributter
- Kontrollere gruppemedlemskap og rolletildelinger
- Sjekke status på systemtilganger og entitlements
- Troubleshooting av tilgangsproblemer i Portal
- Identifisere GRANTED, REVOKED eller PENDING entitlements


## Hvordan kjøre

Input-parameter:
- key (string, valgfri): UH-ID eller brukernavn

ActionSet gjenkjenner automatisk om input er:
- UH-ID: 36 tegn søker mot idautoID
- Brukernavn: Søker mot idautoPersonSystem1ID eller idautoPersonSAMAccountName

### Eksempler:
- _QueryPortal("3ddf4822-77ed-4c27-909e-7c826ca10423")
- _QueryPortal("laols0070")
- _QueryPortal()

Hvis key ikke oppgis, returneres ingen resultater.
Hvis ingen bruker finnes, søkes det i stedet etter grupper med matchende navn.


## Resultat


1. BRUKERDATA (Portal LDAP)
   - Alle LDAP-attributter for brukeren
   - DN, UH-ID, brukernavn, affiliasjoner, organisasjon, etc.

2. GRUPPEMEDLEMSKAP
   - Liste over alle grupper brukeren er medlem av (cn, description)
   - Vises i oransje farge

3. ENTITLEMENTS (fra Portal API)
   Gruppert etter klassifikasjon (Active Directory, LDAP, Framework, etc.):
   - GRØNN: GRANTED, REVOKE_DENIED, REVOKE_FAILED (aktive tilganger)
   - SØLV: REVOKED, DENIED (fjernede eller nektet tilganger)
   - RØD: Andre statuser (PENDING, GRANT_FAILED, etc.)

Hvis ingen bruker funnet:
- Søker etter grupper med matchende cn eller idAutoId
- Viser gruppedetaljer

Skrevet med hjelp av AI