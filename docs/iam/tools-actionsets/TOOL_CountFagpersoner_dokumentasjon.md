
# TOOL_CountFagpersoner

Kategori: FSActions / People / Reporting


## Formål

Henter og teller fagpersoner fra Felles Studentsystem (FS) via API.
Analyserer status (aktiv/inaktiv), utenlandsk tilhørighet basert på fødselsnummer,
og sjekker om personene eksisterer i Portal LDAP med korrekt rolle.

Brukes til:
- Rapportering av antall fagpersoner i FS
- Verifisering av datakvalitet og konsistens mellom FS og IAM
- Identifisering av utenlandske fagpersoner og deres e-postregistrering
- Feilsøking av manglende tilganger for fagpersoner


## Hvordan kjøre

### Input-parametere:
- key (string, valgfri): ID for å slå opp en spesifikk person. Hvis tom hentes alle.
- mv_session (object, valgfri): Eksisterende databasekobling (for ytelse).
- debug (boolean, valgfri): Aktiverer utvidet logging.
- write_to_file (boolean, valgfri): Skriver detaljert resultat til CSV-fil.

### Eksempler:
- TOOL_CountFagpersoner()                         -- Full rapport til logg
- TOOL_CountFagpersoner(null, null, false, true)  -- Full rapport til CSV
- TOOL_CountFagpersoner("12345")                  -- Sjekk spesifikk person

Prosessflyt:
1. Kobler til RIDB og Portal LDAP
2. Henter data fra FS API (/personer?fagperson=true)
3. Itererer gjennom alle sider med resultater
4. For hver person:
   - Sjekker om fagperson er aktiv eller inaktiv
   - Analyserer fødselsnummer for å identifisere utlendinger (D-nummer logikk)
   - Sjekker e-postadresser (privat vs. institusjon)
   - Slår opp i Portal LDAP på personløpenummer (pln)
   - Verifiserer om brukeren har rollen "fs fagperson" i idautoPersonAppRoles2


## Resultat

Logger oppsummering til konsoll:
- Totalt antall prosesserte
- Antall aktive og inaktive fagpersoner
- Antall utlendinger med privat og institusjonell e-post

CSV-eksport (hvis write_to_file=true):
- Filbane: /reports/fagpersoner_yyyymmdd.csv
- Format: pln;status;pd_status
- Innhold: Personløpenummer, FS-status (AKTIV/inaktiv), og status i LDAP
  (AKTIV, inaktiv, Not eligible, eller (not found))

Feilscenarier:
- Tilkoblingsfeil mot database/LDAP -> Stopper kjøring
- 404 fra FS API -> Logger som slettet kilde, fortsetter/avslutter pent
- API-feil -> Prøver igjen opptil 5 ganger før avbrudd

Skrevet med hjelp av AI