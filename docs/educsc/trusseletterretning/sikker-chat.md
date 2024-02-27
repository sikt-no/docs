# Sikker chat

## 1. Beskrivelse av tjenesten

Sikker chatløsning for sektoren dekker både IRT-chat for operativt hendelseshåndteringspersonell og CISO-chat for informasjonssikkerhetsansvarlige. Tjenesten forutsetter basisabonnement pluss en kostnadsfri tilleggsavtale som formaliserer et IRT (incident response team eller hendelseshåndteringsteam) og binder begge parter til å behandle informasjon som utveksles etter trafikklysprotokollen (TLP).

*Trafikklysprotokollen (TLP) kan du lese mer om [her](https://www.first.org/tlp/). Kort sagt er all informasjon som ikke eksplisitt er markert som noe annet TLP:AMBER, noe som betyr at den kan deles med andre medlemmer av eget sikkerhetsteam eller andre personer i egen virksomhet som har tjenestlig behov for den.*

## 2. Formålet med tjenesten

Formålet med tjenesten er primært å ha en etablert kryptert kanal mellom sikkerhetsmiljøene tilgjengelig i det et behov for dette oppstår. Den har flere svært verdifulle sekundære effekter. Fremst blant disse er at jevnlig dialog fremmer tillit og økt delingsvilje, noe som styrker hvert team enkeltvis og sektorens samlede resiliens.

## 3. Tjenestens struktur

Tjenesten består av programvaren «Mattermost» som kjøres på en tjenermaskin som er lokalisert hos Sikt og driftes av eduCSC-personell. All informasjonsutveksling skjer kryptert etter moderne protokoller, og dekryptert informasjon er aldri tilgjengelig for noen tredjepart. 

### 3.1 IRT-chat

IRT-chat inneholder felleskanaler for hendelseskoordinering, diskusjon og småprat, samt lukkede kanaler mellom hvert enkelt IRT og eduCSC. Det finnes også kanaler for smalere temaer og for enkelthendelser av større omfang; IRT-ene står også fritt til å opprette lukkede kanaler for eget bruk.

### 3.2 CISO-chat 

CISO-chat har en mer begrenset omfang, og har kun en faglig og en sosial felleskanal. Man kan også benytte løsningen til direktekommunikasjon med enkeltpersoner fra begge fagmiljøene.

## 4. Oppretting av kontoer

Kontoer opprettes av eduCSC når et nytt IRT opprettes, og når eksisterende IRT-medlemmer etterspør tilgang for nye IRT-medlemmer. Også brukere til CISO-chat opprettes ved forespørsel via et etablert IRT. For å få konto må man bekrefte at man kjenner trafikklysprotokollen og at all informasjon i chatten skal behandles etter restriksjonene satt av denne.

## 5. Innlogging og bruk

Ved første innlogging må det settes et varig passord, og tofaktorautentisering via mobiltelefon må settes opp. Kontoen kan aksesseres fra nettleser, applikasjon eller mobil-app, men mobil-app kan først benyttes etter at tofaktorautentisering er satt opp.

Merk at tjenesten er relativt streng på klientadressens geografiske tilknytning, så ved reise til utland eller opphold tett opp mot riksgrensen kan VPN hjem til egen institusjon være nødvendig.

## 6. Kanaler

Nye IRT-brukere blir i utgangspunktet påmeldt kanalene «Diskusjon» og «Sosialt», men bør også legges til «Hendelser» og «SRM – virksomhetsnavn», samt «Nyheter», «Konferanser» og «Sårbarhetsscan» dersom disse er av interesse.

## 7. Vedlikehold av kontoer

Kontoer som ikke er i aktiv bruk sperres etter en tid, men kan raskt gjenåpnes ved kontakt med eduCSC. 

## 8. Glemt passord

For maksimalt sikkerhetsnivå er "Glemt passord"-funksjonaliteten slått av. Kontakt eduCSC for tilbakestilling av passord og få tilgang til brukeren

## 9. Push-varsling

Spesielt for de som er ansvarlige for et IRT eller inngår i en vaktordning anbefaler vi å sette opp push-varsling til mobil. Uansett om man ønsker å bruke mobil-appen eller bare få et mobilvarsel om at man bør kikke innom grensesnittet på PCen forutsetter dette at man installerer mobil-appen «Mattermost» fra Play Store eller App Store og sette opp denne til å bruke https://irt-chat.uninett.no med egen bruker. Under «Settings» (tannhjul til høyre på verktøylinja) → «Notifications» finner man «Mobile Push Notifications» hvor man kan velge mellom varsel for all aktivitet eller «mentions and direct messages» (samt «Never» for å skru av varslingen, for eksempel når man går av vakt). Valget nedenfor, «Words That Trigger Mentions» brukes til å konfigurere hva som skal oppfylle kriteriet for «mentions and direct messages». Her anbefaler vi å legge inn kortnavnet på teamet og eventuelle andre navn som refererer til det.
