---
title: Maskinporten som token-tjeneste i Gravitee
---

# Maskinporten som token-tjeneste i Gravitee

## Standardoppsett

Dette er standardopsett om man vil opprette en token-tjeneste i API Manager som gir deg token fra maskinporten som du kan bruke  for å autentisere mot APIer som krever dette

For mer informasjon og forklaring av oppsett [se denne siden](/docs/datadeling/veiledere/api-manager/jwt-mot-backend)

## Hvordan sette opp API-et

1. Sørg for å ha en nøkkel som gir tilgang til APIet. Dette kan være virksomhetssertifikat, men vi anbefaler å ha eget nøkkelpar. Se bruksanvisning her
2. [Anbefalt, men ikke påkrevd] Overfør sertifikatet på en sikker måte til Intark drift. Lag zip-fil av nøkkelen og kontakt support for å avtale hvordan vi overfører.
3. Kontakt support for å få fil med standardoppsett, og opprett tjenesten i API manager. Se [veileder for å registrere en tjeneste i API manager via fil](/docs/datadeling/veiledere/api-manager/importer-api).
4. Om dette er mot produksjonsystem i stedet for test, naviger til proxy og endpoint (under backend services) . Klikk på tannhjulet for PROD, fjern haken for backup endpoint. Slett TEST eller huk av for at test skal være backup endpint. Husk å lagre
5. Gå på design. Klikk på policy "Generate JWT" Fyll inn:
   - "Key alias",
   - "Store password" (passordet til filen med nøkkepar)
   - Hvis prod: endre audience slik at det står https://maskinporten.no/
   - Private key. Enten filstien om filen er lagt på filsystemet i gatewayen (punkt 2), eller lim inn hele innholdet
   - Husk å lagre
6. Gå til Portal og details. Klikk på START THE API og PUBLISH THE API. Vi anbefaler at du for dette APIet ikke klikker på MAKE PUBLIC
