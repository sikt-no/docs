
# Report_Entitlements

Kategori: Rapportering


## Formål

Genererer en interaktiv HTML-rapport med fullstendig oversikt over alle 
entitlements i RapidIdentity. Rapporten inkluderer kategorier, workflows, 
godkjenningsflyter, ACL-filtre og rollemedlemskap.

Brukes til:
- Dokumentasjon av aktiv entitlement-konfigurasjon
- Sammenligning med design-dokumenter
- Verifisering av godkjenningsflyter og roller
- Oversikt over hvilke workflows som er koblet til entitlements
- Identifisere hvem som godkjenner ulike tilganger


## Hvordan kjøre

Ingen input-parametere kreves. 

Start ActionSet direkte fra RI Connect.

ActionSettet henter automatisk data fra Portal REST API:
- Entitlements (resources)
- Workflows (workflowDefinitions)
- Roles/Groups (managedGroups)
- Categories
- Classifications


## Resultat

Genererer HTML-fil: reports/entitlements.html

Rapporten viser:
- Entitlements organisert i collapsible panels per kategori
- For hver entitlement:
  * ID, navn, beskrivelse og ikon
  * Binding, category og classification
  * ACL filters (LDAP-filter eller group/role-basert med medlemsliste)
  * Grant workflow: Navn, godkjenningstrinn med navngitte personer, form updates
  * Revoke workflow: Navn, godkjenningstrinn med navngitte personer, form updates

Godkjenningstyper:
- Group: Viser rollenavn og alle statiske medlemmer
- User: Viser navn på godkjenner
- Expression: Viser expression/formel

HTML-rapporten er interaktiv med Bootstrap-styling og collapse-funksjonalitet 
for enkel navigering mellom kategorier og entitlements.

I loggen listes alle entitlement-IDer og navn gruppert på category (brun farge).

Skrevet med hjelp av AI