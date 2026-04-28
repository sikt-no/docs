
# Report_ManageReportFiles

Kategori: Filhåndtering / Vedlikehold


## Formålmål

Automatisk arkivering og sletting av gamle rapportfiler basert på alder og 
konfigurerbare regler. Holder rapportmappene ryddige ved å flytte gamle 
rapporter til .history mappe eller slette dem helt.

Brukes til:
- Vedlikehold av rapportfiler for å unngå at filsystemet blir fylt opp
- Arkivering av historiske rapporter i .history mappe
- Sletting av svært gamle rapporter som ikke lenger er relevante
- Automatisk opprydding via schedulerte jobber

Konfigurasjonsfilen definerer:
- Hvilke mapper som skal prosesseres
- Filtre (filnavn-mønstre) for matching
- Operasjon (archive eller delete)
- Alder i dager før filer prosesseres


## Hvordan kjøre

Input-parameter:
- logOnly (boolean, valgfri, default: true): Dry-run modus eller reell kjøring

Konfigurasjonsfil:
configuration/RapidIdentity/config_report_manage_report_files.json

### Eksempler:
- Report_ManageReportFiles()              # Test-modus (logOnly=true)
- Report_ManageReportFiles(false)         # Reell kjøring med faktiske endringer

ActionSettet kan kjøres manuelt fra RapidIdentity Connect eller scheduleres 
for automatisk vedlikehold (f.eks. daglig/ukentlig).


## Resultat

I logg-modus (logOnly=true):
- Lister alle filer som matcher konfigurerte filtre
- Viser operasjon som ville blitt utført (archive/delete)
- Viser filenes alder i dager
- Ingen faktiske endringer gjøres

I aktiv modus (logOnly=false):
- Arkiverer filer til .history mappe (operation=archive)
- Sletter filer permanent (operation=delete)
- Logger suksess/feil for hver operasjon
- Filer som er nyere enn angitt alder (age) ignoreres

Fargekodet logg:
- ORANSJE: Planlagt operasjon (med antall dager)
- GRØNN: Vellykket flytting/sletting
- RØD: Feilet operasjon
- GRÅ: Ingen handling (ikke gammel nok)
- SØLV: Ingen match, ignorert

Eksempel output:
"reports/PortalAnalytics_v3_01-12-2025.html (38 days old) - moving to .history folder"
"    Moved: /reports/PortalAnalytics_v3_01-12-2025.html"

Skrevet med hjelp av AI