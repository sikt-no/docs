# sap_10_stillingsansiennitet

## Formål
Henter stillingsansiennitet (`dato_ansiennitet_stilling`) fra PA0041 basert på `dato_type = 'ST'`. Benyttes som lookup-tabell for å berike stillinger fra PA0001 med ansiennitetsdato.

## Datakilder
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **PA0041** | Datoer | `dato_type_X = 'ST'` | Inneholder stillingsansiennitetsdato (kan ligge i ett av 24 datofelt) |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **dato_ansiennitet_stilling** | Søker gjennom `dato_type_1`–`dato_type_24` etter `'ST'` og returnerer tilhørende `dato_X`. CASE-implementasjon som stopper ved første match. |

## Transformasjonslogikk

### 1. Filtrering på dato_type = 'ST'
- Filtrerer PA0041 for rader hvor minst én av `dato_type_1`–`dato_type_24` er `'ST'`  
- `ST` = Stillingsansiennitet (seniority in position)  
- WHERE-klausulen sjekker alle 24 datotype-kolonner (OR-logikk)

### 2. Ekstraksjon av ansiennitetsdato
- Går systematisk gjennom `dato_type_1` → `dato_type_24`  
- Når `'ST'` finnes: hent `dato_X`  
- Første match prioriteres (laveste X vinner)  

**Eksempel:**  
Hvis `dato_type_3 = 'ST'` → `dato_3` brukes som `dato_ansiennitet_stilling`.

### 3. Ingen datointervallgenerering
- Benytter eksisterende `dato_fra` / `dato_til` fra PA0041  
- Ingen CTE-basert intervallkonstruksjon  
- Direkte SELECT fra kildetabell