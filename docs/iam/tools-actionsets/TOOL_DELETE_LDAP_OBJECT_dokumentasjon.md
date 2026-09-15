
# TOOL_DELETE_LDAP_OBJECT

Kategori: Tools


## Formål


Sletter LDAP-objekt fra Portal Directory (RI Directory) basert på idautoID.

Brukes til:
- Slette enkelt LDAP-objekt
- Test-sletting (log_only mode)
- Feilretting av duplikater eller feilaktige objekter


## Hvordan kjøre


### Input-parametere:

• idauto_id (string): Unik identifikator for LDAP-objektet som skal slettes
• log_only (boolean): Kun loggføring uten faktisk sletting (test-modus)

### Eksempler:

Slett LDAP-objekt
- TOOL_DELETE_LDAP_OBJECT(idauto_id = "12345")

Test-modus (logger hva som ville blitt slettet)
- TOOL_DELETE_LDAP_OBJECT(idauto_id = "12345", log_only = true)


## Resultat


Konsoll-output:

Connection to MD made          (vellykket LDAP-tilkobling)
Error making MD Connection     (feil ved LDAP-tilkobling)
Error searching for LDAP object to delete  (objektet ikke funnet eller flere treff)

Returverdi:
- false: Feil ved LDAP-tilkobling
- (ingen returverdi): Ved søkefeil eller vellykket sletting

LDAP-søk:
- Scope: sub (søker rekursivt under Global.baseDN)
- Filter: (idautoID=[verdi])
- Forventer nøyaktig 1 treff (records.length == 1)


FEILSØKING


Problem: "Error making Portal LDAP connection"
Løsning: Sjekk Global LDAP-konfigurasjon og nettverkstilgang til Portal Directory

Problem: "Error searching for LDAP object to delete"
Løsning: Verifiser at idauto_id eksisterer (nøyaktig 1 treff kreves)

Problem: Finner ikke objektet
Løsning: Bruk debug for å sjekke idautoID-verdi og LDAP-filter

Problem: Flere objekter funnet
Løsning: idautoID er ikke unik: undersøk datakvalitet i Portal Directory

Skrevet med hjelp av AI