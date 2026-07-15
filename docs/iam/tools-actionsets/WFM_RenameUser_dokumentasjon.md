
# WFM_RenameUser

Kategori: Workflow / Brukeradministrasjon


## Formål

Håndterer omdøping av brukernavn (UHUN) for en identitet i Felles IAM.
ActionSettet kalles typisk fra en workflow og utfører følgende:
1. Sender rename-forespørsel til Identity Warehouse (IDW) via API
2. Legger brukerens nåværende brukernavn på svarteliste (blacklisted_words)
   slik at det ikke kan gjenbrukes ved fremtidig navnegenerering
3. Oppdaterer master_persons-tabellen med det nye brukernavnet
4. Markerer personen for reprosessering i provisjoneringsmotoren

Brukes til:
- Navneendringer (f.eks. etter giftemål eller juridisk navneendring)
- Korrigering av feilgenererte brukernavn
- Workflow-drevne rename-operasjoner initiert fra RI Portal


## Hvordan kjøre

### Input-parametere:
- uhid (string, påkrevd): UH-ID for brukeren som skal omdøpes
- new_username (string, valgfri): Ønsket nytt brukernavn. Hvis ikke angitt,
  genererer IDW et nytt brukernavn automatisk basert på oppdatert navneinfo.
- add_to_blacklist (boolean, valgfri): Hvis denne settes til true, blir det gamle brukernavnet lagt til på svarelisten over brukernavn som ikke blir opprettet.

### Eksempler:
- WFM_RenameUser("3ddf4822-77ed-4c27-909e-7c826ca10423")
- WFM_RenameUser("3ddf4822-77ed-4c27-909e-7c826ca10423", "olano0012")
- WFM_RenameUser("3ddf4822-77ed-4c27-909e-7c826ca10423", "olano0012", true)

Flyten:
1. Oppretter databasetilkobling til RIDB og IDW
2. Henter brukerens nåværende UHUN fra master_persons
3. Sjekker om man skal legge til gamlet brukernavn i blacklist
4. Sender rename-forespørsel til IDW
5. Oppdaterer master_persons med nytt brukernavn og nullstiller process_id
   og processed_at for reprosessering
6. Lukker databasetilkobling og returnerer resultat


## Resultat

Returnerer:
- true: Omdøpingen var vellykket. Nytt brukernavn logges i grønt.
- false: Omdøpingen feilet. Feilmelding logges i rødt og ErrorHandler kalles.

Sideeffekter ved vellykket kjøring:
- IDW har registrert det nye brukernavnet
- Gammelt brukernavn (bokstavdelen) er lagt til i blacklisted_words-tabellen
- master_persons.uhun er oppdatert med nytt brukernavn
- master_persons.updated_at er satt til nåværende tidspunkt
- master_persons.process_id og processed_at er nullstilt, som trigger
  reprosessering og provisjonering til målsystemer (AD, LDAP, etc.)

Feilscenarier:
- Databasetilkobling feiler → logger ERROR, returnerer false
- Henting av nåværende UHUN feiler → logger WARN, fortsetter med rename
- Svartelisting av gammelt brukernavn feiler → logger WARN, fortsetter
- Rename API-kall feiler → logger ERROR, kaller ErrorHandler, returnerer false

Skrevet med hjelp av AI