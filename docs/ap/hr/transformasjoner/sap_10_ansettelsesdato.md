# Oppsummering – sap_10_ansettelsesdato

## Formål
Henter ansettelsesdato fra PA0041 ved å søke gjennom 24 datotype/dato-kolonnepar. Prioriterer datotype '01' for HVL, deretter 'VB' for alle institusjoner.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0041** | Datoer knyttet til ansatte | Ingen | Hovedtabell med 24 datotype/dato-kolonnepar |
| **PA0001** | Hovedstillingsdata | medarbeidergruppe_kode != '8' (i final select) | Sekundærtabell for datointervaller, brukes til å filtrere bort perioder med MG=8 |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **dato_ansettelse** | COALESCE over 24 kolonnepar: først dato_type='01' (kun HVL), deretter dato_type='VB' |

## Transformasjonslogikk

### 1. Datointervallgenerering
Kombinerer historikk fra følgende tabeller:
- **Hovedtabell:** PA0041 definerer gyldige datointervaller per ansatt
- **Sekundærtabell:** PA0001 bidrar med datogrenser fra stillingsdata
- **Nøkkelkolonner:** ansatt_nummer

### 2. Tabellkoblinger
Etter datointervallgenerering kobles følgende tabeller:
- **PA0041** (alias `t`): Left join med datooverlapp
- **PA0001** (alias `hovedstillinger`): Left join med datooverlapp

### 3. Filtrering
- Ekskluderer rader der medarbeidergruppe_kode = '8' (ekstern tilsettingstype)
- Beholder rader uten match i PA0001 (null)

### 4. Ansettelsesdato-logikk
Bruker COALESCE over betingede uttrykk for å finne første gyldige ansettelsesdato:

**HVL:**
1. Sjekker dato_type_1 til dato_type_24 for verdi '01' – returnerer tilhørende dato
2. Sjekker dato_type_1 til dato_type_24 for verdi 'VB' – returnerer tilhørende dato

**Andre institusjoner:**
1. Sjekker dato_type_1 til dato_type_24 for verdi 'VB' – returnerer tilhørende dato