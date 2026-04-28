
# Report_appRoles10

Kategori: Report / Business Roles


## Formål

Genererer en rapport over alle virksomhetsroller (business roles) i 
idautoPersonAppRoles10 og viser kombinasjoner av roller som brukere har.
Identifiserer hvilke roller som ofte forekommer sammen.

Brukes til:
- Få oversikt over alle business roles i bruk
- Identifisere vanlige rollekombinasjon
- Analysere rollestrukturer og mønstre
- Oppdage roller som alltid forekommer sammen (100% overlap)
- Dokumentasjon av rollemodell
- Planlegge rollekonsolidering


## Hvordan kjøre

ActionSet har ingen input-parametere og kjøres uten argumenter.

### Eksempel:
- Report_appRoles10()

ActionSet henter alle brukere fra Portal LDAP som har verdier i 
idautoPersonAppRoles10-attributtet.


## Resultat

Genererer HTML-fil: /reports/idautoPersonAppRoles10.html

Rapporten viser:
- Alle business roles sortert alfabetisk
- Antall brukere per rolle (i parentes)
- Kollapsbare paneler med Bootstrap-styling

For hver rolle:
1. HOVEDINFORMASJON
   - Rollenavn
   - Antall brukere med denne rollen

2. ROLLEKOMBINASJON
   Liste over andre roller som forekommer hos brukere med denne rollen:
   - Andre rollenavn
   - Antall brukere med begge roller
   - Total antall brukere med den andre rollen
   
   Format: "rollenavn (X of Y)"
   - X = antall brukere som har begge rollene
   - Y = totalt antall brukere med den andre rollen

   **Indikerer 100% overlap (X = Y)**
   - Betyr at alle brukere med den andre rollen også har hovedrollen
   - Potensielt kandidat for rollekonsolidering

Rapporten er interaktiv med kollapsbare seksjoner for enkel navigering.

Logger også antall unike roller funnet til konsoll.

EKSEMPEL:
Hvis "iam:employee" (50 brukere) vises med:
- **iam:adm (10 of 10)**: Alle 10 adm-brukere er også employees (fet skrift)
- iam:manager (15 of 30): 15 av 30 managers er employees (vanlig skrift)

Skrevet med hjelp av AI