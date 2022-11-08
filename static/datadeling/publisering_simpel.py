#!/usr/bin/env python
# -*- coding: utf-8 -*-
""" Eksempel på hvordan publisere til en meldingskø.

Dette er et kodeeksempel fra UH:IntArk -
https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/kode/.

"""

import argparse
import pika
import sys

HOSTNAME = 'mq-uio.intark.uh-it.no'
PORT = 5671
VIRTUALHOST = '/'
EXCHANGE = 'amqp_exchange'

BRUKERNAVN = 'mrtest'
PASSORD = 'ikke-lagre-dette-i-klartekst'


def main():
    parser = argparse.ArgumentParser(
        description='Simpelt eksempel på meldingspublisering i AMQP')
    parser.add_argument('routing-key', default='system.event.message.add',
                        help='Routing key (topic)')
    parser.add_argument('message', nargs='+', help='Meldingsinnholdet')
    args = parser.parse_args()

    creds_broker = pika.PlainCredentials(BRUKERNAVN, PASSORD)
    conn_params = pika.ConnectionParameters(HOSTNAME,
                                            PORT,
                                            virtual_host=VIRTUALHOST,
                                            ssl=True,
                                            credentials=creds_broker)
    conn_broker = pika.BlockingConnection(conn_params)
    channel = conn_broker.channel()

    msg_properties = pika.BasicProperties(
        content_type='text/plain',
        delivery_mode=2  # persistent
    )
    print('Sender melding...')
    result = channel.basic_publish(
        body=args.message,
        exchange=EXCHANGE,
        properties=msg_properties,
        routing_key=args.routing_key,
        mandatory=True,  # return an unroutable message with a Return method
        immediate=False  # require an immediate consumer
    )
    print("Resultat: {}".format(result))
    return(result)


if __name__ == '__main__':
    sys.exit(not bool(main()))