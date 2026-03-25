# sap_10_medarbeidergrupper

## Formål
Tabell for medarbeidergrupper med BOT-definert gruppering av alle medarbeidergrupper i `tilknytningsform`.

## Datakilde
| Tabell | Formål | Filtre | Rolle |
|--------|--------|--------|-------|
| **T501T** | Medarbeidergrupper (SAP-standard) | Ingen | Gir medarbeidergruppekoder og -navn |

## Kalkulerte kolonner
| Kolonne | Formel / Logikk |
|---------|-----------------|
| **tilknytningsform_kode** | CASE-logikk som mapper medarbeidergruppe til kode (FA/AA/MA/NAV/EMO/EUO/-1) |
| **tilknytningsform_navn** | CASE-logikk som mapper medarbeidergruppe til beskrivelse (Fast ansatt / Åremålsansatt / Midlertidig ansatt / Tiltak NAV / Ekstern med oppdrag / Ekstern uten oppdrag / Ukjent) |

## Transformasjonslogikk

### Tilknytningsform-mapping
BOT-definert klassifisering basert på medarbeidergruppe.

| Medarbeidergruppe | Tilknytningsform kode | Tilknytningsform navn |
|-------------------|-----------------------|------------------------|
| 1, 2 | FA | Fast ansatt |
| 3 | AA | Åremålsansatt |
| 4, 5, 6 | MA | Midlertidig ansatt |
| 7 | NAV | Tiltak NAV |
| 8 | EMO | Ekstern med oppdrag |
| 9 | EUO | Ekstern uten oppdrag |
| B, E, F, L, M, P, S, T, V, X | -1 | Ukjent |
| Andre | -1 | Ukjent |