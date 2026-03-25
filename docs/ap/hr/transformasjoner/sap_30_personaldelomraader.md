# sap_30_personaldelomraader

## Formål
- Etablere transformasjonstabell **sap_30_personaldelomraader** som danner grunnlaget for dim_personaldelomraade i Analyseplattformen.

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **t001p** | Personaldelområde-data | `molga = 20` (filtrert til silver) |
| **t5v0p** | Bedriftsnummer-kobling | Kobles på personalområde og personaldelområde |
| **t5v2g** | Organisasjonsnummer og AGA-sone | Aggregert til siste gyldige rad per bedrift |
| **t5v2l** | Bedriftsnavn | Kobles på bedriftsnummer |

## Behandling
1. Henter data fra t001p knyttet til MOLGA = 20 (Norge).
2. Kobler med t5v0p for å få bedriftsnummer.
3. Kobler med t5v2g for å få organisasjonsnummer og AGA-sone (kun siste gyldige rad per bedrift).
4. Kobler med t5v2l for å få bedriftsnavn.

## Nøkler
- **personaldelomraade_kode**
