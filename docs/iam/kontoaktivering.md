---
title: Account Claim 
---

![](/img/iam/aktivl3.png)
Account Claim (kontoaktivering) er et eget brukergrensesnitt opprettet for å gjøre det mulig 
for nye brukere å aktivere brukerkontoene sine. Kort fortalt benytter Account Claim 
ID-porten, SMS og e-post eller Feide for å autentisere personer og lar dem utføre noen basis 
funksjoner gjeldende sin egen konto. Standardfunksjonalitet inkluderer aktivering av 
brukerkonto, endring av passord og oppretting nytt passord hvis man har glemt det 
nåværende.

I tillegg til dette har applikasjonen støtte for endring av PIN-kode til adgangskort og 
bestilling av nytt adgangskort samt opplasting og sletting av bilde av bruker.
De sistnevnte funksjonene finner man under "Min konto", hvis institusjonen har aktivert 
dette i konfigurasjonen.

Hvis noe går galt under disse prosessene, får brukeren informative feilmeldinger og om 
mulig oppgitt hvordan man kan endre det. Men hvis noe uventet oppstår eller et problem er 
vedvarende, blir brukeren bedt om å kontakte Helpdesk. Meldingen inneholder 
kontaktinformasjonen til institusjonens egen Helpdesk.

## Aktivere brukerkonto (norsk fødselsnummer)

Når en person registreres i SAP, UBW, GREG eller FS ved en virksomhet opprettes det automatisk 
en brukerkonto i Rapid Identity. Basert på konfigurerbart antall dager i forkant av startdato, 
sendes en e-post fra Rapid Identity til brukeren sin privat e-postadresse, med informasjon 
og vedlagt lenke. 

Dersom brukeren har norsk e-ID, vil lenken som oppgis føre brukeren til kontoaktivering 
(Account Claim) hvor han/hun kan velge den autentiseringsmetoden i ID-porten de ønsker.

## Brukerveiledning for aktivering av konto

1. Velg “Aktivere brukerkontoen”.
![](/img/iam/kontoaktl3.png)

2. Klikk “Logg inn med ID-porten".
![](/img/iam/idportl3.png)

3. Velg foretrukket elektronisk ID for å bekrefte identiteten din. 
![](/img/iam/idportll3.png)

4. Etter at du har logget inn må du gå gjennom en introduksjon til universitetets IKT-reglement. 
![](/img/iam/iktreg1.png)

5. Etter du har gått gjennom IKT-reglementet, må du akseptere dine plikter og bekrefte at du er kjent med virksomhetens personvernerklæring. Klikk deretter “Bekreft”. 

![](/img/iam/sikke1.png)

6. Nå kan du opprette et passord, skriv inn ønsket passord og gjenta ønsket passord. Deretter klikk på "lagre passord". Det er krav til hvordan et passord skal se ut. Hvis du er usikker, kan du klikke på "Hvordan lage gode passord" for å se hvilke retningslinjer som gjelder. 

![](/img/iam/lagpass1.png)

7. Når det er gjort har du aktivert brukerkontoen din. 

![](/img/iam/actko1.png)


8. Husk brukernavnet ditt (1) og den nye e-postadressen din (2) som vises på denne siden. De vil du 
trenge senere. 
I etterkant av aktiveringen vil du også få tilsendt denne informasjon til din institusjonelle 
e-postadresse (som student eller ansatt) og til din private e-postadresse.

![](/img/iam/epostl4.png)


## Aktivere brukerkonto (uten fødselsnummer) 

Hvis brukeren ikke har norsk fødselsnummer (National Identification Number), må 
identiteten bekreftes ved hjelp av standard tofaktorautentisering. Dette inkluderer e-post til privat e-postadresse samt en SMS eller automatisk taleoppringning (hvis valgt) til privat mobilnummer. 

For å autentisere via denne fremgangsmåten må brukeren klikke på lenken i e-posten for å starte prosessen for å aktivere kontoen. Deretter vil brukeren motta en bekreftelseskode gitt på SMS eller automatisk taleoppringning (hvis valgt) som må skrives inn i feltet for bekreftelseskode.

Denne tjenesten er tilgjengelig både på norsk og engelsk. 


## Brukerveiledning for aktivering av konto (uten fødselsnummer) 

1.  Eksempel på e-post til person uten fødselsnummer;

Noen e-postsystemer kan sortere denne meldingen som spam/søppelpost. Sjekk derfor i 
mappen for spam/søppelpost dersom du ikke har fått en ventet melding.

![](/img/iam/velcome1.png)

2.  Når du har fullført stegene du kommer til etter å ha klikket på lenken i e-posten, vil du komme til følgende steg hvor du skal be om å få tilsendt en SMS med en engangskode.

![](/img/iam/smsak1.png)

3. Du må deretter bekrefte innloggingen med engangskoden som du fikk tilsendt i forrige 
steg. Skriv inn koden du fikk tilsendt på SMS eller automatisk taleoppringning, og trykk “Enter” for å bekrefte. 

![](/img/iam/logsms1.png)

4. Etter at du har skrevet inn koden må du gå gjennom en introduksjon til universitetets IKT-reglement.

![](/img/iam/sikke1.png)

5. Etter du har gått gjennom IKT-reglementet, må du akseptere dine plikter og bekrefte at du er kjent med universitetets personvernerklæring. Klikk deretter “Bekreft”.

![](/img/iam/sikke1.png)


6. Nå kan du opprette et passord. Skriv inn ønsket passord og gjenta ønsket passord. Deretter 
klikk på “Lagre passord”. 

![](/img/iam/lagpass1.png)

7. Når det er gjort, har du aktivert brukerkontoen din. 

![](/img/iam/actko1.png)

Husk brukernavnet ditt (1) og den nye e-postadressen din (2) som vises på denne siden. De vil du 
trenge senere. 
I etterkant av aktiveringen vil du også få tilsendt denne informasjon til din institusjonelle 
epost som student eller ansatt, og til din private e-postadresse. 

## Feide-innlogging  

Feide-innlogging er tilgjengelig for brukere som har aktivert brukerkontoen sin og selv ønsker å endre passord eller PIN-kode i ettertid. Hvordan innloggingsalternativet Feide er konfigurert, avhenger av institusjonens egen konfigurasjon. 

## Retningslinjer for passord Felles IAM 

Ved førstegangs pålogging ved kontoaktivering (Account Claim) må alle brukere sette et førstegangs passord. Se under her passordpolicy basert på anbefalinger fra NIST og forslag fra sikkerhetsavdelingen i Sikt. 

•  Passordet må bestå av minst 8 tegn. Dette kan konfigureres av Sikt per  institusjon, i tillegg må institusjonenes egne oppsett og retningslinjer for passord samstemmes med dette. 

•  Maks passordlengde skal være minst 64 tegn, AD begrenser dette til 127. Dette kan 
   konfigureres av Sikt per institusjon. 

•  Passordet blir ikke trimmet. 

•  Passordtips vil ikke bli brukt. 

•  Passord vil bli sjekket mot en liste over passord fra datainnbrudd. Til dette benyttes 
   https://haveibeenpwned.com/API/v3.

•  Passord som er vanlige, forventede eller kontekstspesifikke, bør ikke tillates. 

•  Komposisjonsregler for passordet vil ikke bli brukt. 

•  En måler for passordstyrke vil bli brukt til å hjelpe brukeren med å velge et 
   sterkt passord.
  
•  Passord vil bli sjekket for gjentatte tegn. 

•  Det vil være mulig å lime inn et passord i passordinngangen. 

•  Standard er at de siste fem brukte passordene lagres, men dette er konfigurerbart 
   for hver institusjon 

•  Gjenbruk av tidligere passord vil ikke være tillatt.

## Glemt passord

Hvis brukere glemmer passordet sitt, kan de via lenke ledes til alternativet "Glemt passord" i 
Account Claim. Brukeren må først autentisere seg enten via ID-porten eller tofaktorautentisering for så kunne sette et nytt passord i samsvar med passordpolicyen. 
Det er institusjonen som avgjør hvor funksjonen “Glemt passord” skal tilgjengeliggjøres. 

![](/img/iam/bruksl2.png)


## Brukerveiledning ved glemt passord 

1. Når du klikker på “Glemt passord” ledes du først til autentisering som utføres ved hjelp av “Logg inn med ID-porten", eller alternativet som inkluderer E-post og SMS. 

![](/img/iam/idportl3.png)

2. Velger du alternativet “Kan ikke bruke ID-porten" blir du spurt om brukernavn eller e-postadresse. Når du har oppgitt dette vil du få tilsendt en e-post til din 
institusjonelle e-post som student eller ansatt og til din private e-postadresse. 
Eposten inneholder en lenke som du kan bruke for å opprette nytt passord. 

3. Etter å ha utført autentiseringen, ledes du videre til Account Claims hovedside og kan velge “Glemt passord”. 

![](/img/iam/glmepl3.png)

4. Velg “Nytt passord”, opprett og avslutt med “Lagre passord”

![](/img/iam/glempll3.png)

5. Du får følgende melding som bekrefter når passordet er endret;  

![](/img/iam/bekrefl3.png)
 

## Min konto

Under "Min konto" er det også mulig å bytte et passord. Ved utførelse bytte av passord under “Min konto” er det en forutsetning at du husker eksisterende passord, og har logget inn med det passordet som skal byttes.

<!--![](/img/iam/minko2.png)-->

MERK: Du bør bytte passord hvis du har mistanke 
om at det kan bli misbrukt, eller f.eks. hvis samme passord har vært brukt på andre 
tjenester.

## Tilleggsfunksjoner under “Min konto”

Følgende funksjoner stiller krav til arkitektur hos aktuell institusjonen

• Endre PIN-kode 

• Endre bilde 

• Bestille adgangskort

<!--![](/img/iam/minko3.png)-->

### Endre PIN-kode

For å Lage ny PIN-kode for første gang eller endre PIN-kode, logger du deg inn på Account Claim via Feide og velger "Min konto". 
For å endre koden klikker du på "Endre PIN-kode", For å lagre PIN-koden trykker du "Lagre PIN-kode".

![](/img/iam/epin1.png)

En PIN-kode må inneholde fire tegn og består kun av tall.

### Endre bilde

Endre bilde-funksjonen lar deg laste opp og oppdatere profilbilder, som kan sendes til 
tjenester som "Studentbevisappen", Office365, adgangskortsystemer osv. 
For å endre bildet må du navigere til "Min konto" etterfulgt av "Endre bilde", der kan du laste opp et bilde, hvis ikke noe bilde er lagret i systemet, eller erstatte et opplastet bilde med et nytt. 

Du kan laste opp et bilde på inntil 5MB. Hvis bilde overstiger 3000pixler i høyde/bredde blir bildet skalert til 3000pixler. Sideforholdet på bildet blir bevart. Hvis bildet overstiger 0.5MB så nedjusteres kvaliteten på bildet gradvis til det er nede på 0.5MB.
<!-- gitlab707 RT415669 -->





### Bestill adgangskort

Ved bruk av alternativet "Bestill adgangskort" blir du samtidig presentert for institusjonens 
retningslinjer for foto- og adgangskort gjennom lenker. 

For å fullføre handlingen må du eventuelt velge hentested, hvis det er aktuelt, og deretter 
trykke på "bestill"-knappen som sender bestillingen til RapidIdentity.


























