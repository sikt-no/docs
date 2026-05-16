
# _QueryIDW

Kategori: Query / Identity Warehouse

## Formål

Slår opp identifikatorer i Identity Warehouse (IdW) basert på ulike søketyper.
Viser all identitetsinformasjon for en person på tvers av institusjoner,
inkludert UH-ID, brukernavn, personnummer, ansattnummer og andre identifikatorer.

Brukes til:
- Finne UH-ID basert på personnummer eller brukernavn
- Identifisere alle identifikatorer knyttet til en person
- Verifisere identitetsmatching på tvers av institusjoner
- Troubleshooting av identitetskollisjoner
- Kontrollere hvilke institusjoner som har registrert brukeren
- Avdekke duplikater i master_persons for samme UH-ID

## Hvordan kjøre

### Input-parametere:
- type (enum, valgfri): Søketype
  * "uhid"                        – UH-ID
  * "brukernavn"                  – UH brukernavn
  * "personnummer (fnr/dnr/snr)"  – Fødselsnummer / D-nummer / S-nummer
  * "SAP Ansattnummer"            – Ansattnummer fra SAP/DFØ
  * "FS personløpenummer"         – Personløpenummer fra FS
  * "Greg ansattnummer"           – Ansattnummer fra GREG
  * "Passnummer"                  – Passnummer

- value (string, valgfri): Verdien som skal søkes etter

### Eksempler:
* _QueryIDW("uhid", "3ddf4822-77ed-4c27-909e-7c826ca10423")
* _QueryIDW("personnummer (fnr/dnr/snr)", "01019912345")
* _QueryIDW("brukernavn", "laols0070")
* _QueryIDW("SAP Ansattnummer", "12345")

## Resultat

Viser informasjon i logger med fargekoding:

1. INSTITUSJONER (lilla)
   Liste over alle institusjoner som har registrert identifikatorer for personen,
   kommaseparert på én linje.

2. IDENTIFIKATORER I IDW (lilla overskrift, grå detaljer)
   Alle identifikatorer gruppert per UH-ID (held_by) og institusjon:
   - Institusjon vises i mørk rød (f.eks. "**** uib ****")
   - Per identifikator vises: tidsstempel, type og verdi
     Format: "  YYYY-MM-DD HH:MM:SS - `<type>:<verdi>`"

3. LEGACY OG UH-OPPRETTEDE NAVN (lilla overskrift, grå detaljer)
   Brukernavn i namespace, gruppert per institusjon:
   - Institusjon vises i mørk rød
   - Per oppføring: tidsstempel, type, kildesystem (hvis ikke "idw") og verdi
     Format: "  YYYY-MM-DD HH:MM:SS: `<type> (<source_system>) = <verdi>`"

4. MASTER_PERSONS ANALYSE (kun hvis flere records finnes for samme UH-ID)
   Hvis det finnes multiple records i master_persons for et UH-ID:
   - Viser alle kolonner med verdier på tvers av records
   - MØRK RØD: kolonner med like verdier (matching på tvers av records)
   - SØLV: kolonner med unike verdier
   - Hjelper med å identifisere identitetskollisjoner og duplikater
   - Ignorerte kolonner (ikke vist): uhid, source_institution, updated_at,
     uhun, soft_match_conflicts, legacy_username, legacy_email, created_at

Feilsituasjoner:
- API-kall til IdW returnerer ikke HTTP 200 → feilmelding i rød + API-respons
- Ingen UH-ID funnet for oppslag mot master_persons → advarsel i rød

Skrevet med hjelp av AI