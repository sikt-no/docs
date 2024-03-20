---
title: Kildedata
---

## Krav til registrering av kildedata

Studentregistreringen skjer automatisk eller manuelt hvor alle nødvendige kildedata registreres. Tildeling av tilganger initieres når aktivStudent eller aktivKlasse er sant. For ansatte så må følgende krav oppfylles for at tildeling av tilganger vil initieres:

* I tillegg til verifiserbar personalia, må fødselsnummer eller D-nummer registreres. I fravær av dette må fødselsdato, passnummer og nasjonalitet registreres
* Organisasjonstilhørighet
* Medarbeidergruppe (MG) og medarbeiderundergruppe (MUG)
* Stillingskode (SKO) og yrkeskode (YRK) for ansatte, oppdragstakere og langvarige gjester; for uhonorerte stillinger settes relevant YRK der det er hensiktmessig
* Startdato
* Sluttdato for oppdragstakere og langvarige gjester


## Organisasjonsstruktur

Løsningen forutsetter at det finnes et organisasjonsregister som minimum inneholder organisasjonsenheter i SAP som har sin make i FS. Knytningen må være en-til-en, og minimum inneholde:

* Informasjon om foreldreenhet
* Unik id for hver enhet, eksempelvis orgid for SAP og FS-id for FS
* Unikt kortnavn/akronym

Løsningen vil benytte kortnavn/akronym som felles identifikator i en del prosesseringer, eksempelvis i å kunne adressere samme mål bare skilt av engasjementstype, som MN-II_Ansatt og MN-II_Student.

### Prosess for organisasjonsendring
Organisasjonsendringer forekommer, og det stilles krav til implementeringsrekkefølge slik at integriteten i tilgangsmodellene opprettholdes. Figuren viser rekkefølgen på endringer som må skje før en registrerer ansatte/studenter på en ny enhet:

1.	Opprette organisasjonsenhet i SAP og/eller FS (antas være maker)
2.	Opprette knytningen i OrgReg med nødvendig metadata
3.	Opprette organisasjonsenhet i de målsystemer som er berørt, og som ikke håndterer endringen automatisk
4.	Oppdatere regelsettet i RI

![](/img/iam/orgendring.png)
