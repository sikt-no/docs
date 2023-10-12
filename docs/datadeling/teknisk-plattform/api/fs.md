---
description: Hjelp til oppsett av Felles Studentsystem sitt FS-API.
title: Felles Studentsystem - FS-API
---

# Felles Studentsystem - FS-API

Hjelp til oppsett av Felles Studentsystem sitt FS-API.

## Om API-et

Felles Studentsystem er en fellestjeneste i sektoren. Hver institusjon har sin instans, men FS leverer et felles REST API for alle institusjoner, der hver institusjon får ut **sine studiedata**.

Se [fellesstudentsystem.no](https://www.fellesstudentsystem.no/) for mer informasjon om tjenesten. Se mer [detaljer om FS API](https://www.fellesstudentsystem.no/dokumentasjon/brukerdok/fswebservice/fs-api/).

## Miljøer

Det finnes tre varianter av FS-API:

| Miljø      | URL                                      |
| ---------- | ---------------------------------------- |
| Produksjon | https://api.fellesstudentsystem.no/      |
| Test/Demo  | https://api-test.fellesstudentsystem.no/ |
| Utvikling  | https://api-utv.fellesstudentsystem.no/  |

Besøk `/version` for å se hvilken versjon miljøet kjører.

## Oppsett av FS-API

### Tilgang til FS-API

Du som er lokal tjenesteeier for FS må be FS sentralt om tilgang til FS-API for din institusjon.

Ta kontakt med [fs-support@sikt.no](mailto:fs-support@sikt.no) med ønske om å få opprettet et brukernavn og passord til FS-API for databasen det er aktuelt å sette opp tilgang til (prod/demo). _apigateway_ er et forslag til et beskrivende brukernavn. Denne bør ha lesetilgang til alle ressurser. Ved behov kan skrivetilganger legges på senere.

### Konfigurasjon av FS-API i Gravitee

Se den [generelle veilederen](/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api).

1. General: Sørg for at _context-path_ tydelig peker på miljøet du setter opp API-et for, f.eks. `/fs-api-test` eller `/fs-api-prod`
2. General: Sett navn og beskrivelse
3. General: Sett _version_ til 1
4. Gateway: Finn URL i miljøoversikten og fyll den inn under _backend_
5. Plan: Vi lager en plan som gir full lesetilgang. Senere kan det lages mer nedlåste planer.
6. Plan: Sett f.eks. navnet til _Full lesetilgang_
7. Plan: Velg _Security type: API key_
8. Plan: _Auto validate subscription_ skal **IKKE** være på
9. Plan: La _Characteristics_, _rate limit_ og _quota_ være tomme
10. Plan: Legg til _Ant pattern_ `/**` og _method_ `GET`
11. Doc: Hopp over dette steget. Dokumentasjon kan lastes opp senere.
12. Deployment: Velg _Create and start the API_
13. Konfigurer API-et til å autentisere med brukernavnet og passordet fra steg 1
14. Følg [veiledningen for konfigurering av backend](/docs/datadeling/veiledere/api-manager/backend)
15. FS-API forventer _basic access authentication_, altså skal det settes en _Authorization_-header med en verdi som vil minne om `Basic YnJ1a2VybmF2bjpoZWlwYWFkZWc`

### Test av API-et

1. Følg [veiledningen for å få tilgang til et API](/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang) og godkjenn selv tilgangen
2. Finn API-nøkkelen som gir tilgang til FS-API og riktig _context-path_
3. Sjekk at du får hentet ut en liste over emner:
   ```
   curl --include -H "X-Gravitee-Api-Key: DIN-NØKKEL" https://gw-INSTANS.intark.uh-it.no/CONTEXT-PATH/emner/
   ```
   Bytt ut _DIN-NØKKEL_, _INSTANS_ og _CONTEXT-PATH_.
   Om du får tilbake noe som starter med "HTTP 200" og en JSON-formatert liste med ulike emner, fungerer alt som det skal.
4. Sjekk at API-et krever autentisering:
   ```
   curl --include -H "X-Gravitee-Api-Key: DIN-NØKKEL" https://gw-INSTANS.intark.uh-it.no/CONTEXT-PATH/emner/
   ```
   Dette burde gi `HTTP 401` og `{"message":"Unauthorized","http_status_code":401}`.

### Grunnoppsett for FS Gemini API
Dette er et grunnoppsett mot FS Gemini API'et. Oppsettet kommer med en plan til bruk sammen med ServiceNow. Det er et oppsett satt opp mot [produksjonsmiljøet](fs-gemini-prod.json), samt et oppsett satt opp mot [utviklingsmiljøet](fs-gemini-preview.json).

**Før import:**
_Context path_ er satt til `/fs/gemini` og `/preview/fs/gemini`. Endre eventuelt denne om man benytter en annen _context path_ struktur.

**Etter import:**
Oppsettet bruker _API properties_ til å hente brukernavn og passord, og dette må derfor settes etter import av oppsettet:
1. Gå til _Design_ på API-menyen
2. Gå videre til _PROPERTIES_ i menyen oppe til høyre
3. Legg inn bas64 encoded string av `bruker:passord` i verdifeltet til `fs_fsapi_api_key`
4. Endre til _encrypted_
5. **Husk å lagre**


## Konfigurasjon av meldingskø

Les først om [RabbitMQ](/docs/datadeling/teknisk-plattform/rabbitmq) og (selvbetjeningsløsningen for RabbitMQ)[/docs/datadeling/teknisk-plattform/brom].

FS har mer [teknisk informasjon](https://www.fellesstudentsystem.no/dokumentasjon/brukerdok/fswebservice/fs-api/meldingsko.html) om sin støtte for meldingskøer. Spesielt relevant er avsnittet om _Integrasjonspunkter_.

### Opprette applikasjonen i selvbetjeningsportalen

1. Se [veiledningen for å opprette en applikasjon i selvbetjeningsløsningen](/docs/datadeling/veiledere/meldingskø/opprett-tjeneste) ved behov.
2. Bruk **FS** som navn uansett hvilket miljø (prod/test) du skal sette opp. Miljøtypen blir uansett automatisk lagt på som en del av navnet. Et _testmiljø_ med navn _FS_ får f.eks. identifikatoren _system-test-fs_.
3. Under _Publisering_, velg _Registrering notfikikasjonskilde_
   1. Som _Lenke til side med dokumentasjon_, bruk f.eks. [denne lenka](https://www.fellesstudentsystem.no/dokumentasjon/brukerdok/fswebservice/fs-api/meldingsko.html)
   2. Oppgi en sentral e-postadresse til IT hos egen institusjon
   3. Alle andre felt kan stå tomme
4. Under fanen _Applikasjonsinfo_ finnes nå brukernavn og passord

### Konfigurasjon av meldingskø i FS

1. Åpne FS-klienten mot miljøet det skal settes opp meldingskø mot
2. Finn menyvalget _WS Tjeneste_
3. Opprett en tjenestekode kalt _MQ_ med:

   - URL: `amqps:mq-INSTANS.intark.uh-it.no port:5671 vh:system-MILJØ-fs ex:outgoing_system-test-fs`

     _INSTANS_ erstattes med din institusjonskode og _system-MILJØ-fs_ matcher navnet på tjenesten som er opprettet i selvbetjeningsportalen.

   - Brukernavn og passord fra selvbetjeningsportalen

4. Opprett en tjenestekode kalt _WSINTERN_ med:

   - URL: `https://api.fellesstudentsystem.no` for produksjon, eller
   - URL: `https://fsapi-test.uio.no` for test

   Denne er lik URL-en til API-et hos FS, uten skråstrek på slutten.

5. Ta kontakt med [fs-support@sikt.no](mailto:fs-support@sikt.no) for videre konfigurasjon på FS sin side.

### Test av meldingskøoppsett

For å sjekke at meldinger kommer gjennom, bør det eksisterende en applikasjon som abonnerer på FS sine meldinger via selvbetjeningsløsningen. Abonnentet må være godkjent av en av de som står som eiere av FS i selvbetjeningsløsningen.

1. Gå til applikasjonen som har abonnert på FS-meldinger
2. Verifiser at _system-MILJØ-fs_ ligger under _Godkjente abonnement_ under _Abonnere_
3. Følg lenka til _RabbitMQ sitt brukergrensesnitt_ under _Applikasjonsinfo_
4. Logg på med applikasjonens brukernavn og passord
5. Ved nedtrekksmenyen _Virtual host_ øverst til høyre, velg _system-MILJØ-fs_
6. Finn køen med navn _from_system-MILJØ-fs_. Under _Messages_ kan man se antall meldinger som ligger i kø. Denne skal øke om det gjøres endringer i FS, med noe forsinkelse (0-5 minutter).
