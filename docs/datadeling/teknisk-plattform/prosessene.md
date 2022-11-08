---
description:
  "M\xE5 svare ut:\n\n\nHva m\xE5 Uninett gjøre? Hva m\xE5 USIT gjøre?\
  \ Hva kan/m\xE5 institusjonene gjøre?"
title: Prosessene for teknisk plattform
---

# Prosessene for teknisk plattform

Må svare ut:

Hva må Uninett gjøre? Hva må USIT gjøre? Hva kan/må institusjonene gjøre?

Teknisk plattform skal dekke prosessene beskrevet i referansearkitekturen for datadeling i UHF-sektoren:

![](/datadeling/img/arch-datautveksling.png)

TODO:![](/datadeling/img/todo-prosesser.png)

## Prosessene

Use case: IAM-prosjektet skal sette opp integrasjon mellom FS og RI for HiMolde.

### API manager

Sette opp FS API:

1. Dataeier må sikre at det juridiske er på plass. Uninett kan bistå med maler og rådgiving.
2. Registrere API
   1. Studieadministrasjonen (tjenesteeier/datatilbyder/dataeier/dataforvalter) får tilkoblingsinformasjon fra FS (Unit). Treng evt dialog om oppsett.
      - Generelt: Dataeier har dialog med leverandør av tjenesten, og får tilkoblingsinformasjon fra tenesteleverandøren.
      - Kven: Dataeier **bør** gjøre dette (kan delegeres internt), men USIT/Uninett kan bistå med det tekniske, så lenge dataeier har dialog med FS (Unit) om å godkjenne at vi får tilgang til passord etc.
   2. HiMolde sin Studieadm (dataeier) registrerer FS API i Gravitee.
      - Generelt: Dataeier konfigurerer og publiserer API-et i Gravitee.
      - Kven: Dataeier kan gjøre det (kan delegeres internt), men USIT/Uninett kan gjøre det på vegne.
      - Kommentar: Vi ønsker at planer settes opp likest mulig mellom institusjonene, for å sikre at integrasjoner trenger minst mulig tilpasninger. Homogenisering av planer for kjente API, slik som FS. Kan enten gjøres ved bistand, eventuelt legge ut maler/templates for kjente API som institusjonen kan bruke, inkl. veileder.
3. Registrere datakonsument (application)
   1. Tjenesteeier for RI hos HiMolde registrerer application i Gravitee.
      - Hvem: Teknisk sett kan alle med Feide-konto logge på og registrere, om institusjonen har tillatt det. Kan trolig gjøres av RI selv, men det er praktiske ulemper med det. Er trolig også uryddig ansvar? Kunne hende at Uninett kunne registrert applikasjonen, som tjenesteleverandør av RI. Bør diskuteres. Hos UiO sier vi at det er tjenesteeier som skal registrere og eie applikasjonen, da det virker ryddigst. Fordeler og ulemper - gir td. tilgang til å feilsøke.
   2. Tjenesteeier for RI hos HiMolde ber om tilgang tli FS API
      - Generelt: Tjenesteeier/datakonsument ber om tilgang til API
      - Hvem: Dataeier (kan delegeres internt). Se punktet over, tilsvarende.
      - Kommentar: Søknad bør ha god beskrivelse eller referanse.
   3. HiMolde sin Studieadm (dataeier) godkjenner tilgangen i Gravitee.
      - Generelt:
      - Hvem: Dette bør/må vere dataeier, i alle fall ansvaret. Juridisk sett. Ønsker ikke delegere, for å tvinge et eierskap til tilgangsoversikt.
      - Kommentar: Avtaler må på plass først, og evt. ROS-analyse og andre formaliteter. TODO: Lenk til dokumentasjonen/veileder.
   4. HiMolde sender API-nøkkel til Uninett IAM.
      - Generelt:
      - Hvem: Hvis delegert til Uninett faller det bort, siden det går internt.
      - Kommentar: Nøkkel må sendes på sikker måte.

(Mulig Gravitee Cockpit kan forenkle oppsettet av FS-API, men tilganger må fremdeles styres hos institusjonen)

### RabbitMQ

BROM er på samme måte som API manager.

1. Tjenesteeier må registrere datatilbyders system i BROM (kalles applikasjon i BROM)
   - Fyll inn dokumentasjon etc
   - (Dette påvirker RabbitMQ direkte - setter opp en vhost ferdig satt opp)
2. Tjenesteeier/datatilbyder registrerer i BROM at systemet sitt publiserer notifikasjoner.
3. Delegere tilgang til application i BROM til teknikere, så de kan hente hemmeligheter(?) etc. og sette opp notifikasjonsutsendinger mot riktig punkt.
4. Teknikere må sette opp tjenesten til å koble til rabbitmq
5. Konsumenter må opprette sin applikasjon i BROM
6. Konsumenter må abonnere (søke) på applikasjonen til datatilbyder (fra punkt 1)
7. Tjenesteeier må akseptere abonnementet til konsument, i BROM.
   - (Dette setter opp overføringen fra datatilbyder til konsument)
8. Konsument henter ut tilkoblingsdetaljer i BROM for applikasjonstilgangen
   - Må sendes på sikker måte.

BROM bruker dataporten-grupper for tilgang (ad hoc). Ikke så optimalt.

Bør trolig ikke gi noen tilgang til RabbitMQ direkte. Bruk BROM. Tvinger folk til riktig oppsett.
