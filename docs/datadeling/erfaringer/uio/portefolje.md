---
author:
  - Einar Jerpseth
title: "Tjenesteportefølje"
---

Her beskrives det hvilken informasjon som bør finnes i en tjenesteportefølje versus en tjenestekatalog for å underbygge god og kostnadseffektiv integrasjon. Dokumentet er veiledende og det oppfordres til å ha en pragmatisk holdning i vurderingen av hva som er praktisk informasjon og detaljeringsnivå.

I dette dokumentet er de fire termene tjenesteportefølje, tjenestekatalog, tjenesteoversikt og tjenesteregister definert som følger:

- En tjenesteportefølje er et forvaltningsverktøy for flere tjenester under samme forvaltning. Dette gjøres fordi tjenestene har et avhengighetsforhold til hverandre. Dette avhengighetsforholdet kan medføre at optimalisering av en tjeneste medfører uplanlagt merarbeid hos andre, slik at totalen går i minus. Formålet med en tjenesteportefølje er altså å få forutsigbarhet mht. kostnader, leveringstider og ressursbruk for tjenestene i porteføljen under ett. Bruksområdet er internt.
- En tjenestekatalog er den delen av tjenesteporteføljen som virksomheten viser sine (potensielle) konsumenter. Essensiell informasjon i en tjenestekatalog er tjenestens innhold, kontaktpunkter og regler for bruk. En tjenestekatalog kan sy sammen informasjon fra flere tjenesteporteføljer, men en tjenesteportefølje kan også ha flere tjenestekataloger. Dette avhenger av hvordan virksomheten opplever det mest hensiktsmessig å formidle informasjon om sine tjenester.
- En tjenesteoversikt er en opplisting av tjenester i en eller flere tjenestekataloger. Tjenestene er beskrevet svært overfladisk og normalt lenker tjenesteoversikten til den mer informasjonsrike tjenestekatalogen.
- Et tjenesteregister er en samling av dokumenterte integrasjonsgrensesnitt. Tjenesteregisteret er en del av tjenestekatalogen. Da informasjonen i registeret er detaljert og bare av interesse for utviklere, er denne delen av tjenestekatalogen trukket ut i en egen tjeneste. Et tjenesteregister kan igjen sy sammen eller segregere informasjon fra en eller flere tjenestekataloger.

Husk at dette er skrevet med fokus på integrasjonsgrensesnitt (API). Det er på ingen måte noen opplisting over generelle felter i en tjenesteportefølje/-katalog.

## Felter til bruk i tjenesteportefølje

Tjenesteporteføljen trenger informasjon om API innen tre overordnede kategorier: forankring, forvaltning og validering.Detaljnivå kan variere mht. hva interessentene opplever som hensiktsmessig. Ofte vil hensikt og mål begrunnes på et høyere nivå for tjenesten.

Innen forankring bør det sies noe om hva hensikten med API er. Dette inkluderer kort- og langsiktige mål og målekriterier. I vurdering av hensikt bør det også inngå vurderinger som er gjort mht. legalitet/konfidensialitet, intendert målgruppe og API-kategori. API-kategori vil si om API er ment for offentligheten eller internt, om det har en betalingsmodell, om det krever en registerering, er underlagt lovgivning eller annet. Om API er for strengt begrenset bruk (produsentens egne utviklere) er det ikke nødvendig for integrasjonsarkitekturen at det er oppført i tjenesteporteføljen. Systemeier kan allikevel ønske oppføring mht. dokumentasjon, budsjettering eller måling av ressursbruk.

Under forvaltning bør det være:

- Lenker til dokumentasjon rundt tekniske implementasjon. I det tekniske designet bør det være gjort vurdering mht. gjenbruk, hvordan delte data holdes konsistente på tvers av tjenester, samt i hvilken grad man det vil påvirke konsumentene om man skiller ut funksjonalitet fra kildesystemet eller bytter kildesystem.
- Det bør være beskrevet hvilke delegeringer som er gjort. F.eks. kan utviklere være delegert rettighet til selv å utvikle mer funksjonalitet eller andre grupperinger kan være delegert muligheten til å gi tilganger til systemeierens data. Sistnevnte skjer typisk i situasjoner hvor det er laget uttrekk sammensatt fra forskjellige kildesystemer og som er lagt under sentral forvaltning.
- Det bør beskrives eventuell juridiske forhold, f.eks. hvorvidt det kreves en databehandleravtale og hvorvidt denne er standardisert og elektronisk

Validering av en tjeneste bør foregå på et tidspunkt planlagt da tjenesten sist ble validert. Vi skal ikke her gi noen fasit på validering, men kan kort nevne at måloppnåelse, ROS-analyse, compliance med lovverk og interne føringer, samt brukerundersøkelser er vanlig tiltak i et valideringsprogram. Integrasjonsarkitekturen tilfører et krav om validering av kvaliteten på egne data. (Som oftest finner man at kvaliteten på dataene er lavere enn antatt).

## Felter til bruk i tjenestekatalog

Husk: All informasjon i tjenestekatalogen skal være hentet fra tjenesteporteføljen. Det skal altså ikke dukke opp nye informasjonsområder; tjenestekatalogen skal tilrettelegge den informasjon som er relevant for konsumenten. Grovt sett kan API-informasjonen i tjenestekatalogen deles i overordnede forretningsmessige forhold og deres praktiske implikasjoner. Overgangen har en tendens til å være gradvis. I tabellen under er dette illustrert:

| Forretningsmessige forhold      | Beskrivelse                                                                                                                                                                                                                         |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Masterdata                      | Beskrivelse av hvilke overordnede typer data kan man forvente å finne og hvordan dataene henger sammen med relevante data i andre tjenester                                                                                         |
| Kategori                        | Dette feltet bør besvare spørsmål som: Er API tilgjenglig for alle? Krever det registrering? Er det begrenset ved lovgivning? Er det en betalingstjeneste?                                                                          |
|                                 |                                                                                                                                                                                                                                     |
| **Praktiske implikasjoner**     |                                                                                                                                                                                                                                     |
| Tilgang til API                 | Informasjon om hvor API er å finne og hvordan man får tilgang. Lenker til standardisert avtaleverk.                                                                                                                                 |
| Informasjon om kontraktsforhold | Dette er både overordnet informasjon om hvilke lover og regler som gjelder. Det er også informasjon av annen art, som løfter om ytelse og oppetid (SLA) eller i hvilken grad produsent forplikter seg til versjonering av sine API. |
| Dokumentasjon                   | Lenker til tekniske dokumentasjon eller annen informasjon som tjenestens forvaltningssyklus og valideringskriteria.                                                                                                                 |

## Felter til bruk i tjenesteregister

I tjenesteregister må det være lenker til tjenestekatalog/-portefølje avhengig av APIs kategori eller utviklers rolle. (En tjenesteportefølje/-katalog er ofte samme programvare hvor tilgangen til informasjon er segregert på rolle). Det bør også være lenker til utvidet teknisk informasjon. Videre kan det være felt for egne kontaktpunkt for utviklere.
