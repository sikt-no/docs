---
title: Registrer din tjeneste for meldingsutsending
---

Hvordan du registrerer din tjeneste i Selvbetjeningsportalen for RabbitMQ for å
hente eller sende meldinger:

1. Logg inn i din institusjons selvbetjeningsportal for RabbitMQ. Se [oversikt
   over den tekniske plattformen](/docs/datadeling/teknisk-plattform/oversikt)
   om du ikke kjenner adressen.
   ![Skjermskudd av startsiden til selvbetjeningsportalen](/datadeling/img/brom-intro.png)

2. Velg "Opprett ny applikasjon".  
   ![Skjermskudd av tom førsteside i selvbetjeningsportalen](/datadeling/img/brom-oversikt.png)

3. Legg inn detaljene om tjenesten din. Velg et godt og beskrivende navn, da
   dette hjelper andre å finne din tjeneste.
   ![Skjermskudd av opprettingsvinduet i selvbetjeningsportalen](/datadeling/img/brom-create-application.png)
   Navnet får en prefiks basert på formålet. Dette gjør det enklere å skille
   mellom test-, utviklings- og produksjonsmiljø.

4. Hvis din tjeneste produserer notifikasjoner, velger du "Registrer notifikasjonskilde":  
   ![Skjermskudd av hovedsiden til en applikasjon i selvbetjeningsportalen](/datadeling/img/brom-register-notification-source.png)

5. Legg inn dokumentajon om notifikasjonene fra din tjeneste, eller lenke til
   hvor det er tilgjengelig. Dette er nyttig for konsumentene som ønsker å
   integrere med din tjeneste, så de håndterer og tolker notifikasjonene
   riktig.

6. Hent ut tilkoblingsdetaljene for din tjeneste, og legg de inn i tjenesten
   din.
   ![Skjermskudd fra "hvordan publisere notifikasjoner" i selvbetjeningsportalen](/datadeling/img/brom-publish-messages.png)

Selvbetjeningsportalen snakker med RabbitMQ fortløpende, så straks dette er
gjort, har din institusjons RabbitMQ-instans allerede opprettet det som trengs
for å publisere notifikasjoner:

- En _virtual host_ som er navngitt etter navnet på tjenesten/applikasjonen
  (feks `system-production-my_service`).

- Et _exchange_ med navn basert på tjenesten/applikasjonen (feks
  `outgoing_system-production-my_service`). Det er her din tjeneste kan
  publisere sine meldinger.

Selvbetjeningsportalen gir deg en del forklaringer, og til og med eksempel-kode
for både uthenting og publisering av meldinger. Du kan også se [RabbitMQ sin
egen dokumentasjon](https://www.rabbitmq.com/documentation.html) for mer
tekniske detaljer rundt meldingsutveksling.
