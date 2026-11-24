# Innlogging til eduCSC-tjenester (eduCSC SSO)

Cybersikkerhetssenteret har et eget bruker- og tilgangshåndteringssystem. I dette systemet får brukere en eduCSC-konto opprettet lokalt. Det gjør at virksomheter som ikke har Feide kan bruke eduCSC-tjenester, og at vi er mer robuste for nedetid. 

De fleste virksomheter logger inn med Feide, men Feide er ikke et krav: Virksomheter uten Feide logger inn med passord og 2-faktorautentisering.

Følgende eduCSC-tjenester er innrullert i eduCSC SSO:
- [eduCSC Portal](educsc-portal.md)
- [Peiling](peiling.md)
- [MISP](misp.md)


## Aktivering av tjenesten i Feide
Virksomheter som vil benytte Feide for innlogging må først aktivere den tilhørende Feide-applikasjonen. Virksomhetens Feide-administrator må logge inn i [Feide Kundeportal](https://kunde.feide.no/) og aktivere applikasjonen «eduCSC SSO». Virksomheter uten Feide kan hoppe over dette steget. 
 
## Legge til nye brukere 
En ny eduCSC-bruker opprettes i Portalen av en eksisterende administrator. Gå til venstremenyen > Min virksomhet > Tilgangsstyring og trykk på knappen «Legg til bruker». Fyll inn brukerens e-postadresse i virksomheten og hvilke tilganger den skal ha. 

## Første innlogging 
Før første gang man prøver å logge inn i en tjeneste som benytter eduCSC SSO for innlogging må man være lagt til som bruker hos en virksomhet i Portalen (se seksjonen over). 

I virksomheter som har aktivert Feide-integrasjon kan brukere benytte Feide allerede ved første innlogging. Brukere i virksomheter uten Feide benytter et engangspassord. I begge tilfeller blir man spurt om å sette et lokalt passord og å konfigurere 2-faktorautentisering. Etter første innlogging har man mulighet til å benytte valgt passord og 2-faktorautentisering ved behov. 
