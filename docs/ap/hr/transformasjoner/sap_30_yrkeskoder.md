# sap_30_yrkeskoder

## Formål
- Etablere dimensjonen **dim_yrkeskode** i Analyseplattformen.
- Tilgjengeliggjøre yrkeskoder og yrkestitler basert på norsk yrkesklassifisering (NOYK).

## Datakilder
| Tabell | Formål / Rolle | Filtre |
|--------|----------------|--------|
| **T710ST** | Kilde for yrkeskoder og yrkestitler | `type_kode = 'NOYK'` |

## Kalkulerte kolonner
Ingen kalkulerte kolonner. Alle verdier leses direkte fra T710ST.

## Transformasjonslogikk
- Leser SAP-yrkeskoder fra `silver_sap.T710ST`.
- Filtrerer på `type_kode = 'NOYK'` for å kun hente relevant norsk yrkesklassifisering.
- Velger relevante kolonner:
  - `yrkeskode`
  - `yrkestittel`
  - metadatafelt (`zx_institusjonskode`, `zx_tidspunkt_*`)
- Skriver resultattabellen til `transformation_hr.sap_30_yrkeskoder`.

## Nøkler
- **Primærnøkkel:** `yrkeskode`