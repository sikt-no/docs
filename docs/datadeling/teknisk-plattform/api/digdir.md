---
description: "Hjelp til oppsett av Digdir sine REST API'er  mot Folkeregisteret og KRR (Kontakt og reservasjonsregisteret)."
title: "Digdir Folkeregisteret og KRR"
---

# Digdir API'er mot Folkeregisteret og KRR

Hjelp til oppsett av Digdir sine REST API'er  mot Folkeregisteret og KRR (Kontakt og reservasjonsregisteret).

## Om API-ene

Folkeregisteret API gir tilgang til å hente ut opplysninger om persondata fra Folkeregisteret. Se [Folkeregisteret API-portal](https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/om-tjenestene/) for mer informasjon.

KRR API gir tilgang til å hente ut kontakt- og reservasjonsopplysninger fra kontakt- og reservasjonsregisteret. Se [KRR API-portal](https://docs.digdir.no/docs/Kontaktregisteret/oppslagstjenesten_rest) for mer informasjon.

API'ene krever autentisering via [Maskinporten](https://samarbeid.digdir.no/maskinporten/maskinporten/25), så institusjonen må registrere seg der før integrasjonen kan opprettes. Maskinporten bruker virksomhetssertifikater eller selvsignerte nøkler for autentisering.

## Standardoppsett

Folkeregisteret API og KRR API er statlige fellestjenester, og må/bør derfor settes opp likt hos alle institusjoner. Du kan sette dette opp ved å laste inn fil med standardoppsett:

[digdir-freg-api-template.json](digdir-freg-api-template.json)

[digdir-krr-api-template.json](digdir-krr-api-template.json)

Standardoppsettene er satt opp med et utgående kall mot Maskinporten for å få utstedt et token for autentisering. Tjenesten som utsteder token kan enten settes opp i Gravitee ([se bruksanvisning her](/docs/datadeling/teknisk-plattform/api/maskinporten)) eller hos den enkelte institusjon. Oppsettfilene er i utgangspunktet satt opp til å gå mot en slik intern tjeneste.

## Hvordan sette opp API-ene

1. Registrer din institusjon hos Maskinporten, [se planleggingsaktiviteten her](https://samarbeid.digdir.no/maskinporten/konsument/119). Registrer deretter en integrasjon i maskinporten, se veiledning her(https://docs.digdir.no/docs/Maskinporten/maskinporten_sjolvbetjening_web.html) Sluttresultatet er at du har en integrasjon hvor du kan autentisere vha. virksomhetssertifikat eller selvsignerte nøkler (og som bare brukes mot denne integrasjonen). Integrasjonen må ha blitt tildelt de nødvendige scopes (se [Oppsett detaljer](#oppsett-detaljer)) og du må ha issuer-ID tilgjengelig
2. Opprett tokentjeneste om du ikke har gjort det tidligere og gi APIet tilgang.
   - Om du vil lage en i gravitee [se veiledning her](/docs/datadeling/teknisk-plattform/api/maskinporten) Gi deretter APIet tilgang ved å opprette en applikasjon for dette og søk om tilgang til maskinporten-APIet. Når tilgangen er gitt får du en API-nøkkel som vi bruker i neste steg
3. Last ned standardoppsettet over, og opprett tjenesten i API manager. Se [veileder for å registrere en tjeneste i API manager via fil](/docs/datadeling/veiledere/api-manager/importer-api).
   1. Inne på API'et du nettop importerte, gå til _Design_
   2. Klikk på ```[ALL] /**``` under _API Flows_ og så på _HTTP Callout_
   3. Endre URL til den interne tokentjenesten
   4. Gå videre til _Properties_ (oppe til høyre)
   5. Legg inn property med _key_ ```maskinporten_api_key``` og value er API-nøkkel du ble tildelt i punkt 2 over
   6. Legg inn property med _key_ ```maskinporten_api_iss``` og value er _Integrasjons-ID_ til integrasjonen du satte opp i Maskinporten i punkt 1 overmaskinporten-integrasjonen
4. Andre verdier du eventuelt kan endre:
   1. Hvis du skal sette opp mot prod: gå inn på _Proxy_ -\> _Endpoints_ under _Backend services_ og endre URL til produksjonsmiljøet (se [Oppsett detaljer](#oppsett-detaljer))
   2. _Gateway context path_ under _**Entry**points_
   3. Navn og beskrivelse

API-et er nå satt opp.

### Oppsett detaljer
#### Folkeregisteret API
- Endpoint:
  - Prod: https://folkeregisteret.api.skatteetaten.no/
  - Test: https://folkeregisteret-api-konsument.sits.no/
- Scope: ```folkeregister:deling/offentligutenhjemmel``` og/eller ```folkeregister:deling/offentligmedhjemmel```

#### KRR
- Enpoint
  - Prod: https://kontaktregisteret.no/rest/v1/personer
  - Test: https://test.kontaktregisteret.no/rest/v1/personer
- Scope: ```krr:global/kontaktinformasjon.read```


### Hvordan verifisere at API-et fungerer:

1. Opprett din egen klient (applikasjon) i API manager, om du ikke har dette allerede.
2. Be om tilgang til API-et.
3. Godkjenn tilgangen til API-et. Du har nå fått en egen API-nøkkel for din klient.
4. Bruk klientens API-nøkkel, og sjekk at du får hentet ut data:

   - Test av Folkeregisteret API med curl (husk å endre det som står i uthevet tekst):

   ```
   curl --include -H "X-Gravitee-Api-Key: **API-nøkkel**" https://gw-**INSTANS**.intark.uh-it.no/test/digidir/freg/personer/18906299204
   ```

   - Test av KRR API (husk å endre det som står i uthevet tekst):

   ```
   curl --include -H "X-Gravitee-Api-Key: **API-nøkkel**" -H "Content-Type: application/json" -d '{"personidentifikatorer":["23079422568"]}' -X POST https://gw-**INSTANS**.intark.uh-it.no/test/digdir/krr/personer
   ```

   - Hvis alt er ok kan du forvente å få tilbake noe som starter med "HTTP 200" og JSON-data.
