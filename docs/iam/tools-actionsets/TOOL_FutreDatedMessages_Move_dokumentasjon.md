
# TOOL_FutreDatedMessages_Move

Kategori: Tools


## Formål


Flytter meldinger fra message_queue_future_dated til message_queue_futuredated (tabellkonvertering).

Brukes til:
- Engangskonvertering mellom gamle og nye tabellstrukturer
- Migrere future-dated meldinger til ny stored procedure-basert løsning
- Rydde opp etter navneendring (future_dated → futuredated)

MERK: Dette er et engangsverktøy for konvertering (beskrivelse: "1 time run for conversions")


## Hvordan kjøre


### Input-parametere: Ingen

### Eksempel:

Kjør konvertering
- TOOL_FutreDatedMessages_Move()


## Resultat


Konsoll-output:

INITIAL STATS
message_queue_future_dated entries: [antall]
message_queue_futuredated entries: [antall]

Messages to move: [antall]         (per batch, maks 250)
Removed from future_dated table: [antall]

FINAL STATS
message_queue_future_dated entries: 0
message_queue_futuredated entries: [totalt antall]

Prosess:
1. Teller meldinger i begge tabeller (initial stats)
2. Henter maks 250 meldinger om gangen fra message_queue_future_dated
3. Parser message-feltet som JSON for å hente message.id
4. Inserterer i message_queue_futuredated via stored procedure (message_queue_futuredated_sp)
5. Sletter vellykkede inserts fra message_queue_future_dated
6. Gjentar til ingen flere meldinger finnes
7. Viser final stats

Dataflyt:
- UHID, inserted_on, message_id, message, valid_after, ansatte → message_queue_futuredated
- Bruker message_queue_futuredated_type og message_queue_futuredated_sp
- ansatte hentes fra JSON: message.message.id (konvertert til string)

Returverdi: true ved suksess, false ved DB-tilkoblingsfeil

Skrevet med hjelp av AI