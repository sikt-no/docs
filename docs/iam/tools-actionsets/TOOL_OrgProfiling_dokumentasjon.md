
# TOOL_OrgProfiling

Kategori: Tool / Organisasjon / Profiling


## Formål

Henter ut en oversikt over brukere tilknyttet en organisasjonsenhet fra
MetaVault (RIDB). Viser ansatte med stillinger, kontraktsinfo, lederinformasjon
og org-hierarki. Kan i tillegg brukes til å tvinge frem rekjøring av IAM-prosessering
for alle brukere på en gitt org-enhet.

Brukes til:
- Troubleshooting av organisasjonsdata og engasjementer
- Verifisere hvem som er registrert på en bestemt org-enhet
- Kontrollere leder og stedfortreder for en org-enhet
- Se org-hierarkiet (path) for en enhet
- Trigge reprocessing for alle brukere i en org-enhet etter dataendringer


## Hvordan kjøre

Alle input-parametere er valgfrie, men minst ett av de tre første bør oppgis.

### Input-parametere:
- uhid (string, valgfri): viser org-info for én spesifikk bruker
- org_short_name (string, valgfri): OrgReg-akronym for org-enheten (f.eks. "IT-U-HHS")
- org_id (string, valgfri): DFØ ekstern nøkkel / org-ID
- trigger_reprocessing (boolean, valgfri): Hvis true, nullstilles process_id og
  processed_at for alle brukere på org-enheten, slik at de plukkes opp til ny
  IAM-prosessering

### Eksempler:
- TOOL_OrgProfiling(null, "IT-U-HHS")                         ← alle brukere på org
- TOOL_OrgProfiling("3ddf4822-77ed-4c27-909e-7c826ca10423")   ← én bruker
- TOOL_OrgProfiling(null, "IT-U-HHS", null, true)             ← vis + trigger reprocessing


## Resultat

For søk på org_short_name eller org_id vises følgende i loggen:
- Org-enhetens SAP-kortnavn og OrgReg-akronym, inkl. source_id og koststed
- Leder (navn + UH-ID) i mørk rød
- Stedfortreder (navn + UH-ID) i mørk oransje
- Nummerert liste over alle ansatte med navn og UH-ID
- Org-hierarki (path fra rot til enhet) i lilla, f.eks. "UHN/FAK-HUM/IT-U-HHS"

For søk på uhid vises:
- Fullstendig stillingsrad fra master_persons/master_positions med bl.a.
  stillingstittel, YRK-kode, kontrakt, org-status og lederinfo

Hvis trigger_reprocessing=true vises i tillegg:
- Antall brukere som ble satt til reprocessing i mørk grønn

Mulige feilsituasjoner:
- Kan ikke koble til RIDB → avbryter og returnerer false
- Ingen engasjementer funnet for angitt søk → feilmelding i mørk rød
- Feil ved reprocessing-oppdatering → feilmelding i mørk rød

Skrevet med hjelp av AI