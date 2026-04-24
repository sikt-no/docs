
# ActiveDirectoryDelete


Kategori: Account Management / Deprovisioning


## Formål

Sletter et objekt fra Active Directory (AD) basert på sAMAccountName.
Actionsettet er en del av deprovisioneringsflytene i Felles IAM og brukes
når en brukerkonto skal fjernes permanent fra AD.

Brukes til:
- Permanent sletting av AD-kontoer ved avslutning av arbeidsforhold eller studierett
- Opprydding av AD-objekter som ikke lenger skal eksistere
- Testing/simulering av sletting uten å gjøre faktiske endringer (log_only-modus)


## Hvordan kjøre

### Input-parametere:
- username (string): sAMAccountName til AD-objektet som skal slettes
- idautoid (string): UH-ID til brukeren – brukes til revisjonslogging
- log_only (boolean, valgfri): Hvis satt til true kjøres actionsettet i simuleringsmodus
  uten å gjøre faktiske endringer i AD

### Eksempler:
- ActiveDirectoryDelete("laols0070", "3ddf4822-77ed-4c27-909e-7c826ca10423")
- ActiveDirectoryDelete("laols0070", "3ddf4822-77ed-4c27-909e-7c826ca10423", true)  ← simulering


Resultat

Actionsettet returnerer true ved suksess, false ved feil.

Fargekoding i logger:
- GRØNN:   AD-objektet ble slettet
- BLÅ:     Simuleringsmodus (log_only=true) – objektet ville blitt slettet
- ORANSJE: Brukeren ble ikke funnet i AD – anses som allerede slettet (returnerer true)
- RØD:     Feil – tilkobling til AD mislyktes, eller sletting feilet

Revisjonslogging:
Alle slettinger (vellykkede og mislykkede) logges som audit-hendelse av typen
"deleteAccount" mot målsystemet "Active Directory", med UH-ID og DN som referanse.

Mulige feilsituasjoner:
- Kan ikke koble til AD → avbryter og returnerer false
- Bruker ikke funnet i AD → advarselsmelding, returnerer true (idempotent)
- Sletting mislykkes → feilmelding og audit-logg med successful=false, returnerer false

Skrevet med hjelp av AI