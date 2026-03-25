# Oppsummering – sap_20_stillinger_pa0001

## Formål
- Sammenstiller informasjon relatert til stillinger i PA0001 fra 10-tabellene til én tabell.
- Inkluderer beregnet årsverk, alder, ansiennitet og kostnadsfordeling.

## Datakilder (lag 10)
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **sap_10_stillinger_pa0001** | Hovedstillingsdata, definerer datointervaller | Ingen |
| **sap_10_fodselsdager** | Fødselsdager, genererer datobrudd for korrekt aldersberegning | Ingen |
| **sap_10_grunnlonn_pa0001** | Grunnlønn, prosent_stilling, fungering | Ingen |
| **sap_10_kontering_pa0001_pa0509** | Kostnadsfordeling | `kostnadstype_fordeling_kode = '01'` |
| **sap_10_kronetillegg_pa0001** | Kronetillegg | Ingen |
| **sap_10_stillingsansiennitet** | Ansiennitetsdato | Ingen |
| **sap_10_fravaer_permisjon** | Fravær/permisjon til bruk i årsverk eks. permisjon | Ingen |
| **sap_10_fravaer_dbh** | DBH-fravær | Ingen |
| **sap_10_personer** | Personinformasjon (demografi, alder, kjønn, statsborgerskap) | Ingen |
| **sap_10_terminslutt** | Terminslutt for hovedstilling | `terminslutt_kode = '72'` |
| **sap_10_organisasjonsenheter** | Organisasjonsstruktur (nivå 0–10) | Join på `organisasjon_id_nivaa_10` |
| **sap_10_medarbeidergrupper** | Lookup for tilknytningsform | Ingen |
| **sap_10_medarbeiderundergrupper** | Lookup for avlønningsform | Ingen |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **aaremaal** | `CASE WHEN medarbeidergruppe_kode = '3' THEN 'Ja' ELSE 'Nei' END` |
| **alder** | Validerer fødselsdato og beregner alder basert på dato_fra/dato_til/GETDATE(). Ugyldig: 1900-01-01 eller utenfor 16–110 → `-1`. |
| **prosent_stilling** | Hentet fra `sap_10_grunnlonn_pa0001.prosent_stilling` |
| **aarsverk** | Gjelder kun MAA: `(prosent_stilling - COALESCE(prosent_stilling_fungering, 0)) × (prosent_kontering / 100) / 100` |
| **aarsverk_eks_permisjon** | Som over, men multiplisert med `(prosent_arbeidsfor / 100)` |
| **aarsverk_dbh** | Som over, men multiplisert med `(prosent_arbeidsfor_dbh / 100)` |

## Transformasjonslogikk

### 1. Datointervallgenerering
Bygger konsistente datointervaller ved å:
- samle alle start-/sluttdatoer fra ~10 Layer 10-tabeller  
- identifisere datobrudd  
- generere nye intervaller når attributter endrer seg  

Gir én rad per ansatt/stilling per konsistent periode.

### 2. Årsverksberegning
Gjelder **kun** månedslønnede (`avlonningsform_kode = 'MAA'`):

- **aarsverk:**  
  `(prosent_stilling - fungering) × kostnadsfordeling / 100`
- **aarsverk_eks_permisjon:**  
  `(prosent_stilling - fungering) × kostnadsfordeling × arbeidsforhold_permisjon / 100`
- **aarsverk_dbh:**  
  `… × arbeidsforhold_dbh / 100`

Andre avlønningsformer → `0`.

### 3. Aldersberegning
Kontrollerer datokvalitet og beregner alder i tre scenarier:

**Historiske rader (dato_til < dagens dato)**  
`alder = DATEDIFF(year, dato_fodt, LEAST(GETDATE(), dato_til))`

**Aktive rader (dato_fra ≤ dagens dato ≤ dato_til)**  
`alder = DATEDIFF(year, dato_fodt, GETDATE())`

**Fremtidige rader (dato_fra > dagens dato)**  
`alder = DATEDIFF(year, dato_fodt, dato_fra)`

Feilaktige/ugyldige fødselsdatoer → `-1`.

### 4. Åremål-identifisering
- `medarbeidergruppe_kode = '3'` → Åremål = **Ja**  
- Alle andre → **Nei**