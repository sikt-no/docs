#!/usr/bin/env python
# -*- coding: utf-8 -*-
""" Eksempel på hvordan koble til meldingskø.

Dette er et kodeeksempel fra UH:IntArk -
https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/kode/.

"""

import pika


def consumer_callback(channel, method, header, body):
    print('Notifikasjon mottatt:')
    print(method)
    print(header)
    print(body)
    # Gi meldingskø ack på at melding er mottatt:
    channel.basic_ack(delivery_tag=method.delivery_tag)
    # Gjør det du skal med meldingen, for eksempel kall på URL til API ut fra
    # notifikasjonens innhold.


def main():
    HOSTNAME = 'mq-uio.intark.uh-it.no'
    PORT = 5671
    VIRTUALHOST = '/'
    QUEUE = 'amqp_queue'

    BRUKERNAVN = 'mrtest'
    PASSORD = 'ikke-lagre-dette-i-klartekst'

    creds_broker = pika.PlainCredentials(BRUKERNAVN, PASSORD)
    conn_params = pika.ConnectionParameters(HOSTNAME,
                                            PORT,
                                            virtual_host=VIRTUALHOST,
                                            ssl=True,
                                            credentials=creds_broker)
    conn_broker = pika.BlockingConnection(conn_params)
    channel = conn_broker.channel()
    channel.basic_consume(
        consumer_callback,  # the callback callable
        queue=QUEUE,
        no_ack=False,  # tell the broker to not expect a response
        exclusive=False,  # don’t allow other consumers on the queue
    )
    print('Konsument aktivert. Starter lytte til notifikasjoner...')
    channel.start_consuming()


if __name__ == '__main__':
    main()