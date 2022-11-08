---
title: Sanntidsoppdatering
---

Meldingskøer kan benyttes til forskjellige formål, men i utgangspunktet skiller vi mellom tynne og tykke meldinger. Det vil si om innholdet i meldingen er informasjonsbærende, eller om innholdet i meldingen bare er en peker til der informasjonen er å finne. I IntArk har vi valgt å gå for tynne meldinger, slik at mange typer meldinger kan gå til samme kø. Granulert tilgangskontroll gjøres i WS. Alternativet (litt satt på spissen) er en kø per meldingstype, per konsument, noe som vil øke kompleksiteten.

Akkurat som med WS, er det aspekter rundt sanntidsoppdatering og meldingskø man må ta i betraktning når man skal anskaffe eller integrere.

- Sanntidsoppdatering er ikke synonymt med meldingskø. Begrepet brukes om andre teknologier (som RSS, SOAP og Web push), om tjenester som deler datalager eller benytter katalogtjenester i bakgrunn.
- Det er på ingen måte selvsagt at programvare man anskaffer kommer med støtte for verken å sende eller hente meldinger til MQ. Dessuten er det vanligste (når funksjonaliteten tilbys) at systemet sender tykke meldinger.
- For å selv bygge noe som sender ut meldinger ved endring, bør applikasjonen være hendelsesbasert. Dvs. at data sendes (fra bruker/presentasjonslag) gjennom standardiserte API som gjør at man har kontroll på akkurat hvor i databasen/datalageret endring av data skjer henger sammen med hverandre, og ikke må gjøres med logiske valideringer (gjetninger) i database/-lager ut fra tidspunkt eller annet.
- Sanntidsoppdatering av skytjenester skjer som oftest gjennom at man må dytte data til dem gjennom deres WS. Dvs. at konsumentens MQ-klient (som oftest må være egenutviklet) må hente meldingen fra MQ og poste den til skytjenesten i stedet for å poste til eget API eller database.

Vi har laget meldingskøagenter for Linux og Windows. Dette er kode som i stor grad kan gjenbrukes, slik at det å utvikle en egen meldingskøagent er en overkommelig oppgave. Videre er det mulig å lage tjenester som konverterer fra det leverandøren tilbyr (f.eks. RSS) til vår meldingskø. Videre kan det være hindre som i hvilken grad det i utgangspunktet tilbys, om hvor enkelt det er å hente meldinger, og lisensmessige aspekter for i hvilken grad man har lov til å lage egne integrasjoner. For skytjenester er man ofte helt begrenset til data tilbudt i deres standard API.
