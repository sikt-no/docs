---
title: Passordpolicy
---



## Gyldige tegn

Passordet kan kun inneholde tegn som er en del av ISO 8859-1.


## Passordlengde

Passordet kan maksimalt inneholde 127 tegn.

Minimum lengde varierer basert på kompleksiteten til passordet.

## Beregning av passord kompleksitet

Kompleksiteten av et passord måles i poeng. Poengsummen et passord vil få er avhengig av bl.a. lengde og antall tegngrupper som er representert i passordet.
Passordet må ha en kompleksitet på minst 32 poeng for å være gyldig.


Algoritmen for å kalkulere kompleksitets poeng:
* 4 poeng for det første tegnet i passordet
* 2 poeng for hvert av de neste syv tegn
* Hvert tegn fra tegn 9 til og med tegn 20 får 1.5 poeng
* Hvert tegn etter tegn 20 får 1 poeng
* 6 poeng bonus hvis passordet inneholder tegn av minst tre av de fire tegngruppene (store bokstaver, små bokstaver, tall og spesialtegn)
* 8 poeng (total) bonus dersom passordet inneholder minst to tegn for hver av de tre tegngruppene beskrevet over


Felles IAM har valgt å gjenbruke [samme passord policy som er brukt ved UiO](https://www.uio.no/tjenester/it/brukernavn-passord/passordtjenester/hjelp/kompleksitet.html), som er godt begrunnet.

## Gjenbruk av passord

En bruker kan ikke gjenbruke et tidligere brukt passord.

## Utløpstid på passord

Vi praktiserer ikke utløpstid på passord basert på anbefalinger fra blant annet [National Institute of Standards and Technology (NIST)](https://pages.nist.gov/800-63-FAQ/#q-b05).

Med et høyt kompleksitetskrav og bruk av tofaktorautentisering vil utløp av passord gjøre mer skade enn gagn.

## Anbefalinger
Bruk helst et helt nytt og unikt passord som ikke er det samme eller ligner på det du bruker på andre nettsteder.

Vi støtter råd og anbefalinger fra [Nasjonal Sikkerhetsmyndighet (NSM)](https://nsm.no/fagomrader/digital-sikkerhet/rad-og-anbefalinger-innenfor-digital-sikkerhet/rad-og-anbefalinger-om-passord).
