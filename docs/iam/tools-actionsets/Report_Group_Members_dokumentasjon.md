
# Report_Group_Members

Kategori: Rapportering


## Formål

Genererer en interaktiv HTML-rapport med oversikt over medlemskap i alle 
grupper/roller i RapidIdentity. Rapporten viser både statiske og dynamiske 
medlemmer, deaktiverte brukere, ekskluderinger samt synkronisering til 
målsystemer (AD, Feide LDAP, Portal).

Brukes til:
- Dokumentasjon av gruppemedlemskap på tvers av institusjonen
- Verifisering av statiske vs dynamiske medlemmer
- Identifisere deaktiverte brukere i grupper
- Kontrollere gruppesynkronisering til målsystemer
- Oversikt over eiere og medeiere av grupper
- Troubleshooting av medlemskap og gruppetilhørighet


## Hvordan kjøre

Ingen input-parametere kreves.

Start ActionSet direkte fra RI Connect.

ActionSettet leser konfigurasjonsfil:
- configuration/RapidIdentity/config_report_group_members.json

Konfigurasjonsfilen definerer:
- Kategorier: Grupperinger basert på gruppenavn (start/end pattern)
- target_attribute: Felt som indikerer synkronisering til målsystemer
- default category: Standardkategori for grupper som ikke matcher filter

ActionSettet beregner medlemskap on-the-fly basert på:
- Dynamic include/exclude filters (LDAP-filter)
- Static includes/excludes
- Brukers aktiveringsstatus (idAutoDisabled)


## Resultat

Genererer HTML-fil: reports/group_members.html

Rapporten viser:
- Grupper organisert i collapsible kategorier
- For hver gruppe:
  * Antall medlemmer
  * Beskrivelse
  * Eiere og medeiere (med navn)
  * Synkronisering til målsystemer [AD|Feide|Portal]
  * Fullstendig medlemsliste med styling:
    - Fet skrift: Statiske medlemmer
    - Fet + kursiv: Både statisk og dynamisk inkludert
    - Overstreket: Statisk ekskludert
    - Grå tekst: Deaktiverte brukere

Systemroller (f.eks. RI Administrator, Portal Administrator) grupperes automatisk.

HTML-rapporten er interaktiv med Bootstrap-styling og collapse-funksjonalitet.

I loggen:
- Kategorinavn for hver kategori
- Gruppenavn med ID (brun farge)
- Advarsler for deaktiverte eiere/medeiere (orange farge)
- Feilmeldinger for manglende brukere (rød farge)

Skrevet med hjelp av AI