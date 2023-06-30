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











