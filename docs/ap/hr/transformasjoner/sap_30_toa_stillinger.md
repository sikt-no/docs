# Oppsummering – sap_30_toa_stillinger

## Formål
- Lage grunnlagstabell for fak_toa_stillinger i lag 30.
- Erstatter nullverdier i attributtkolonner med APs standardverdier.
- Fjerner prefiks med to bokstaver fra `delprosjekt_nummer` for å matche delprosjekt mot Unit4-data.

## Datakilder (lag 20)
| Tabell | Rolle | Filtre |
|--------|-------|--------|
| **sap_20_stillinger_pa9024** | TOA-stillinger | Ingen |

## Transformasjonslogikk

### 1. Håndtering av nullverdier
Nullverdier i sentrale attributter erstattes for å:
- sikre stabil join mot dimensjoner,
- sikre sammenlignbar hashing av rader,
- unngå brudd i datointervaller.

### 2. Rensing av delprosjekt
Fjerner prefiks med to bokstaver (f.eks. *UT*, *UB*) fra `delprosjekt_nummer` for å speile praksis fra Unit4.

## Skriving til mål
- Resultatet skrives til:  
  **`{catalog}.transformation_hr.sap_30_toa_stillinger`**
- Format: Delta  
- Mode: `overwrite`  
- Skjemautvidelser tillates (`overwriteSchema = true`)