---
title: Passordpolicy
---



## Valid characters

Password can only contain characters that are part of ISO 8859-1.


## Maximum password length

The password cannot be more than 127 characters.  

## Minimum password complexity

The password must have a complexity of more than 32 points.

Algorithm for calculating password complexity points:

Kompleksiteten av et passord måles i poeng. Poengsummen et passord vil få er avhengig av bl.a. lengde og antall tegngrupper som er representert i passordet.

* 4 poeng for det første tegnet i passordet
* 2 poeng for hvert av de neste syv tegn
* Hvert tegn fra tegn 9 til og med tegn 20 får 1.5 poeng
* Hvert tegn etter tegn 20 får 1 poeng
* 6 poeng bonus hvis passordet inneholder tegn av minst tre av de fire tegngruppene (store bokstaver, små bokstaver, tall og spesialtegn)
* 8 poeng (total) bonus dersom passordet inneholder minst to tegn for hver av de tre tegngruppene beskrevet over


Felles IAM har valgt å gjenbruke [samme passord policy som er brukt ved UiO](https://www.uio.no/tjenester/it/brukernavn-passord/passordtjenester/hjelp/kompleksitet.html), som er godt begrunnet.

## Password cannot be reused

The password cannot be set to one of the previous passwords (of the same user).

## Password expiration policy

*We will propose to remove this part of the policy. Given the password rules above enforcing srong passwords for all accounts, and the extended use of MFA, password expiration will be re-evaluated.*

The password should expire 13 months after it is set. The user will be notified and encouraged to set a new password before it expires.
