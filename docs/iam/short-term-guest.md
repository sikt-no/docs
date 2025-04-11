---
title: Kortvarig Gjest
---

## Kortvarig Gjest funksjonaliteten 
En kortvarig gjest er en brukerkonto som opprettes direkte i RI, og som skal ha begrensede tilganger i en kort tidsperiode. Dette er typisk brukerkontoer som trenger kortvarig tilgang hos institusjonen, og som ikke blir registrert i et kildesystem som SAP eller FS.

Som standard vil en kortvarig gjest ha en utløpsdato på maks 30 dager. I registreringsvinduet bestemmer man sluttdatoen og den vil være opptil 30 dager frem i tid. Disse 30 dagene er konfigurierbar for hver institusjon, og kan justeres i People-modulen &rarr; Settings &rarr; Sponsorship settings.

Kortvarige gjester kan opprettes av brukerne som er medlem av gruppen "Portal Sponsor". Hvem som er gruppemedlemmer bestemmes av institusjonen selv, enten ved manuell prosedyre eller ved bruk av dynamisk filter.

### Actionsettene
Fire actionsets benyttes for kortvarige gjester og disse finnes i prosjektet 'Internal_Processing':
- AltActionCertifyShortTermGuest
    - Gir muligheten til å forlenge utløpsdatoen til de kortvarige gjestene.
- AltActionCreateShortTermGuest
    - Et actionset som kjøres når en kortvarig gjest blir opprettet.
- AltActionEditShortTermGuest
    - Gir muligheten til å endre en eksisterende kortvarig gjest.
- AltActionExpireShortTermGuest
    - Gir muligheten til å angi utløpsdato til nåværende tidspunkt for kortvarige gjester.

Actionsettet 'AltActionCreateShortTermGuest' vil ikke opprette den kortvarige gjesten hvis det private telefonnummeret eller den private e-posten som registreres allerede finnes hos en bruker i RI Portalen.

### Brukernavn
Brukernavnet til de kortvarige gjestene er formatert slik;
- Første bokstaven i fornavnet
- Hele etternavnet
For eksempel Ola Normann &rarr; onordmann.

'ShortTermGuestUsernamePrefix' er en konfigurerbar variabel i SharedGlobals, som kan brukes til å sette prefix på brukernavnet.

Ved bruk av 'ShortTermGuestUsernamePrefix' kan brukernavnet bli formatert slik: 'ext-onormann'.

### Forretningsroller og system tilganger
Kortvarige gjester får tilknytning (idautoPersonAffiliation): Short-Term Guest.

Kortvarige gjester skal få forretningsrollen 'iam:shorttermguest'. Verifiser gjerne at logikken for rollen finnes i actionsettet G3_Internal_Processing.FnAssignBusinessEngagementRoles. Det skal finnes en egen seksjon for "KORTVARIG_GJEST", som sjekker mot 'Short-Term Guest' og legger til "iam:shorttermguest"

Hvilke systemtilganger brukeren skal få, må defineres av institusjon i filen system_entitlements.json. Denne finnes i prosjektet G3_Internal_Processing &rarr; Files &rarr; json_policies. Avhengig av behov må listen av roller til de ulike ressursene oppdateres med "iam:shorttermguest".

For å kunne gi ulike systemtilganger til personer med samme forretningsrolle (iam:shorttermguest), kan bestillbare rettigheter tilpasses og tilordnes, slik at den enkelte selv eller deres sponsor kan bestille basert på tjenestlig behov. For at Kortvarig gjest selv skal kunne gjøre dette, forutsetter det at "iam:shorttermguest" blir provisjonert til AD/LDAP først, for etter kontoaktivering å kunne logge seg på Felles IAM og gjennomføre bestilling.

### Hvordan ta i bruk kortvarig gjest
Institusjoner som ønsker å ta i bruk kortvarig gjest funksjonaliteten, må ta hensyn til konfigurasjonsmulighetene nevnt over og verifisere at forretningsroller og systemtilganger er korrekte.

I tillegg til dette må det i noen tilfeller også gjøres justeringer på actionsettene som provisjonerer til målsystemer. Det kan blant annet være ønskelig å plassere disse i en egen OU i AD for bedre oversikt, eller gi dem spesielle attributtverdier som skiller seg fra vanlige ansatte eller studenter. Dette kan justeres i integrasjonene av institusjonen selv, eller av SIKT ved å sende en forespørsel til kontakt@sikt.no

### Slik vil en kortvarig gjest se ut:
```json
{
"@dn": "idautoID=xxxxx-xxxx-xxxx-xxxx-xxxxxxx,ou=Accounts,dc=meta",
    "displayName": "Ola Nordmann",
    "givenName": "Ola",
    "idautoID": "xxxxx-xxxx-xxxx-xxxx-xxxxxxx",
    "idautoPersonAffiliation": "Short-Term Guest",
    "idautoPersonAffiliations": "Short-Term Guest",
    "idautoPersonAllAccessTermDate": "202503050000Z",
    "idautoPersonAppRoles10": "iam:shorttermguest",
    "idautoPersonAppRoles2": [
        "active directory",
        "ldap"
    ],
    "idautoPersonAppRoles5": [
        "active directory",
        "ldap"
    ],
    "idautoPersonEndDate": "20250305000000Z",
    "idautoPersonExt6": "xxxxx-xxxx-xxxx-xxxx-xxxxxxx",
    "idautoPersonHomeEmail": "olanordmann@mail.com",
    "idautoPersonSAMAccountName": "onordmann",
    "idautoPersonSystem5ID": "onordmann@feide.no",
    "idautoPersonUserNameMV": "onordmann",
    "idautoRequestAssociations": [
        "ee4db7ab-c9aa-4f70-a462-5eb36cb3fa46",
        "399e415c-a360-47aa-973d-52b123e47a40",
        "1ae7eaa0-218a-4a25-ac1a-0518cb7e2f9d"
    ],
    "mail": "onordmann@mail.com",
    "manager": "idautoID=xxxxx-xxxx-xxxx-xxxx-xxxxxxx,ou=Accounts,dc=meta",
    "mobile": "+4712345678",
    "objectClass": "idautoPerson",
    "sn": "Nordmann"
}
```