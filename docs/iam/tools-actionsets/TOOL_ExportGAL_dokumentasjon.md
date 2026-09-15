
# TOOL_ExportGAL

Kategori: Tool / Portal / Administrasjon


## Formål

Henter og eksporterer Global Attribute List (GAL) fra RapidIdentity Portal via
REST API. GAL inneholder alle LDAP-attributter som er tilgjengelige i portalen,
med tilhørende lesevennlig navn (friendlyName).

Brukes til:
- Få oversikt over alle LDAP-attributter som er konfigurert i Portal
- Dokumentere og verifisere attributt-konfigurasjonen i miljøet
- Eksportere attributtlisten til CSV for videre bruk eller analyse


## Hvordan kjøre

Input-parameter:
- log_only (boolean): Styrer om resultatet eksporteres til fil eller kun vises i loggen
  * false → eksporterer GAL til CSV-fil og viser innholdet i loggen
  * true  → viser kun GAL i loggen, ingen fil skrives

### Eksempler:
- TOOL_ExportGAL(false)   ← eksporter til fil
- TOOL_ExportGAL(true)    ← vis i logg uten å skrive fil


## Resultat

Resultatet er en liste med én rad per LDAP-attributt i formatet:
  LDAP Attribute, FriendlyName

Ved log_only=false eksporteres listen til:
  /reports/GlobalAttributeList.csv   (tegnsett: ISO-8859-1)

Uavhengig av log_only vises alltid hele listen i loggen.

Fargekoding i logger:
- GRØNN: Filen ble eksportert
- RØD:   Feil ved tilkobling til Portal eller henting av GAL-data

Mulige feilsituasjoner:
- Kan ikke koble til Portal → avbryter uten resultat
- API-kall for GAL-henting feiler → feilmelding logges og actionsettet avbryter

Skrevet med hjelp av AI