---
title: Passordpolicy
---

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

### Passord algoritme
- Må ha lengde over institusjonens minimumskrav (typisk 16 men kan konfigureres per institusjon).
- Må ha lengde under institusjonens maksimalkrav (typisk 127 på grunn av AD).
- Kontekstbasert passord er ikke tillatt. F.eks. universitetetitroms, arcticuniversityofnorway etc.
- Kan ikke inneholde brukernavn.
- Kan ikke inneholde brukerens navn.

Etter dette kommer en algoritme som kalkulerer passordets styrke. Poengsummen for at passordet skal godkjennes er 32 eller høyere.
Karakterene i passordet deles inn i 4 kategorier: store bokstaver, små bokstaver, siffer og spesialtegn.
Det itereres gjennom hver karakter.
- Bare de 4 første forekomster av en karakter får poeng.
- Bare forekomster som er ulikt den foregående karakteren får poeng.
- Første karakter: +4 poeng.
- 2-8 karakter: +2 poeng hver.
- 9-20 karakter: + 1.5 poeng hver.
- 21+ karakter: + 1 poeng hver.

Bonuspoeng:
- Hvis alle 4 kategoriene er oppfylt to ganger: +8 poeng.
- Hvis tre av kategoriene er oppfylt: +6 poeng.

Du kan kun få en av bonusene. Oppfyller du kravene for begge vil du få +8 poeng.