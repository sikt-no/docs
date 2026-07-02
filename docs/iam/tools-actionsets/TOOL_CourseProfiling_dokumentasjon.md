
# TOOL_CourseProfiling

Kategori: Tool / EVU / Kurs / Profiling


## Formål

Henter og analyserer kursdeltakelse fra MetaVault (RIDB) for EVU-kurs (etter- og
videreutdanning). Verktøyet sjekker også mot Portal Directory (LDAP) om deltakerne
har fått tildelt forventet virksomhetsrolle (iam:courseattendant), og kan trigge
reprocessing for brukere som ikke er korrekt provisjonert.

Brukes til:
- Troubleshooting av kursdeltakelse og provisjonering for EVU-studenter
- Verifisere at deltakere på et kurs har fått riktig virksomhetsrolle i Portal
- Identifisere deltakere med feil status (ikke aktive, ikke akseptert, mangler rolle)
- Se alle EVU-kurs en spesifikk bruker er påmeldt
- Trigge reprocessing for uprovisionerte deltakere på et kurs


## Hvordan kjøre

Alle input-parametere er valgfrie, men minst ett av dem bør oppgis.
Ved søk på kurs må både course_code og term oppgis.

### Input-parametere:
- uhid (string, valgfri): viser alle kurspåmeldinger for én bruker
- course_code (string, valgfri): Kurskode fra FS (f.eks. "INF100")
- term (string, valgfri): Semester/termin (f.eks. "2026H") – må kombineres med course_code
- trigger_reprocessing (boolean, valgfri): Hvis true, trigges reprocessing for alle
  deltakere som er markert med feil (rød) i listen

### Eksempler:
- TOOL_CourseProfiling("3ddf4822-77ed-4c27-909e-7c826ca10423")   ← alle kurs for én bruker
- TOOL_CourseProfiling(null, "INF100", "2026H")                  ← alle deltakere på kurs
- TOOL_CourseProfiling(null, "INF100", "2026H", true)            ← vis + trigger reprocessing


## Resultat

Ved søk på course_code + term vises en tabell over deltakere med kolonnene:
  Active   Accept   InPD   UHID   Navn (FS-kildeID)

Kolonnebeskrivelse:
- Active:  Om kurset er aktivt i master_evucourse (1 = ja)
- Accept:  Deltakerens response_status_code fra FS (J = akseptert)
- InPD:    Om brukeren har virksomhetsrollen iam:courseattendant i Portal Directory (J = ja)

Fargekoding per deltaker:
- MØRK GRØNN: Alt OK – aktiv, akseptert og har riktig rolle i Portal
- RØD:        Avvik – ikke aktiv, ikke akseptert, eller mangler rolle i Portal

I tillegg vises oppsummering nederst:
- Provisjonerte deltakere (ok-teller) i mørk grønn
- Deltakere med feil (error-teller) i mørk rød

Dato-visning (start/slutt):
- Viser studierettsdatoer (period_studyright) som primær kilde hvis konfigurert
- Faller tilbake på varighetsperiode (period_duration) hvis studierettsdato mangler

Ved søk på uhid vises:
- Fullstendig deltaker- og kursinformasjon for alle EVU-kurs brukeren er påmeldt

Hvis trigger_reprocessing=true vises:
- Antall brukere satt til reprocessing i mørk grønn

Mulige feilsituasjoner:
- Kan ikke koble til RIDB eller Portal LDAP → avbryter
- Ingen kursdeltakelse funnet for søket → informasjonsmelding i mørk rød
- Feil ved reprocessing-oppdatering → feilmelding i mørk rød

Skrevet med hjelp av AI