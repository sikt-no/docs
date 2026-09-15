
# RenamePDAccount

Kategori: Account Management / Provisioning


## Formål

Gir nytt UH-ID (idautoID) til en eksisterende Portal Directory (PD) LDAP-konto.
Actionsettet oppdaterer Distinguished Name (DN) i Portal LDAP slik at kontoen
er knyttet til det nye UH-ID-et i stedet for det gamle.

Brukes til:
- Korrigering av feil UH-ID på en Portal LDAP-konto
- Overføring av en Portal-konto fra ett UH-ID til et annet ved identitetsendringer
- Retting av feilkobling mellom Portal Directory-post og masteridentitet


## Hvordan kjøre

### Input-parametere:
- from_uhid (string): UH-ID til kontoen som skal omdøpes
- to_uhid (string): UH-ID som kontoen skal få det nye navnet basert på

### Eksempel:
- RenamePDAccount("3ddf4822-77ed-4c27-909e-7c826ca10423", "a1b2c3d4-1234-5678-abcd-ef0123456789")

Forutsetninger:
- from_uhid må finnes som én unik konto i Portal LDAP
- to_uhid må IKKE allerede være i bruk i Portal LDAP


Resultat

Etter vellykket kjøring er DN-en til Portal LDAP-kontoen oppdatert:
- Gammelt UH-ID erstattes med nytt UH-ID i kontoens Distinguished Name
- Kontoen eksisterer nå under den nye DN-en med to_uhid som identifikator

Fargekoding i logger:
- GRØNN: Tilkobling til Portal LDAP opprettet / omdøping vellykket
- RØD:   Feil: se detaljer under

Mulige feilsituasjoner:
- Kan ikke koble til Portal LDAP → avbryter med feilmelding
- to_uhid er allerede i bruk → avbryter for å unngå kollisjon
- from_uhid finnes ikke (eller gir flere treff) → avbryter med feilmelding
- LDAP-omdøpingen mislykkes → feilmelding logges, konto forblir uendret

Skrevet med hjelp av AI