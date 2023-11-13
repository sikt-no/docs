---
description:
  "I sammenheng med prosjekt UH:IAM laget UiB i 2020 retningslinjer for\
  \ navngivning i IntArk. Dette fordi at Datadelingsprosjektet ikke var kommet langt\
  \ nok.\n\n\nDette ble levert til leverand\xF8ren av IGA-l\xF8sningen, s\xE5 deres\
  \ utviklere kunne forholde seg til API manager og meldingsk\xF8.\n\n\n[Originalt\
  \ dokument er tilgjengelig i UiBs gitlab](https://git.app.uib.no/it-bott-integrasjoner/intark/-/blob/master/doc/naming.md)."
title: "UiB sine f\xF8ringer for navngivning"
---

# UiB sine føringer for navngivning

I sammenheng med prosjekt UH:IAM laget UiB i 2020 retningslinjer for navngivning i IntArk. Dette fordi at Datadelingsprosjektet ikke var kommet langt nok.

Dette ble levert til leverandøren av IGA-løsningen, så deres utviklere kunne forholde seg til API manager og meldingskø.

[Originalt dokument er tilgjengelig i UiBs gitlab](https://git.app.uib.no/it-bott-integrasjoner/intark/-/blob/master/doc/naming.md).

This is currently just capturing an outline of what this document will eventually be. The purpose is to describe a sector standard for naming stuff related to the intark components.

## What is this about

Main use case: APIs that expose data from a system. Integrations.

## What needs to be named related to the IntArk components

- domain name for mq and gw servers
- [https://api.\{owner}.no](https://api.%7Bowner%7D.no) as central entry point for all things API. Might just redirect to the API-gateway portal.
- api context paths
- api names
- api export files
- plan names
- application names
- api paths
- gw users (feide)
- gw groups
- gw roles
- mq topics
- (mq message types)
- mq virtual hosts
- mq exchanges
- mq queues
- mq users

## Meta variables

- \{owner} Data owner (behandlingsansvarlig/controller/system tenant) legal institution, typically represented by the domainname without ".no", eg "uib", "uio", "uit", "ntnu", "oslomet", "himolde".

- \{svc} Service name; example "iga", "mail", "dfo"

- \{sys} System or application name; example "fs", "tp", "ri", "sap"

- \{subsys} Sub system

- \{owner-div} System owner (behandlingsansvarlig avdeling); examples "sa", "it". Match up with acronym or shortname in orgreg.

- \{sysop} System operator (databehandler/Processor). Example "it", "idauto", "uninett", "unit", "dfo"

- \{api-name} An actual API identifier name or just the string "api" — name in context of a system. Example "scim", "fsapi", 'fsws'

- \{api-vers} api-version or "v1" — generation of the named api

- \{env} system environment (examples "prod", "test", "dev"). This is also used if there are for instance multiple test environments in use. They may then be called "test2", "test3", "test_foo", "test_bar" or something.

- \{endpoint} # URL path; resource name in the case of REST

- \{type} # serve same function as content types in HTTP; identifies the format used for a message

- \{op} # CRUD without the R: 'create', 'update', 'delete'

## Domain names

This documents the current practice in how the IntArk components (Gravitee/Rabbit MQ) is set up from USIT.

- api-\{owner}.intark.uh-it.no
- gw-\{owner}.intark.uh-it.no
- mq-\{owner}.intark.uh-it.no

## Gravitee

### context paths

The context paths must all be unique prefixes i Gravitee. This defines what is considered a single API in the Gallery as well.

There are two approaches to be considered. Making separate APIs in the Gallery for new versions and new environments or having a single entrypoint that represents the API and use internal paths and plans to diffentiate. With the second approach we would drop the \{api-vers} and \{env} part at the end of these paths.

We are showing the domain name in context just to document that the context paths are already qualified with the \{owner}.

- //gw-\{owner}.intark.uh-it.no/\{sys}/\{api-name}/\{api-vers}
- //gw-\{owner}.intark.uh-it.no/\{sys}/\{api-name}/\{env}
- //gw-\{owner}.intark.uh-it.no/\{owner-div}/\{sys}/\{api-name}/\{api-vers}
- //gw-\{owner}.intark.uh-it.no/\{owner-div}/\{sys}/\{api-name}/\{env}

Could also use \{svc} instead of \{sys} in places.

developers and other "personal" stuff

- //gw-\{owner}.intark.uh-it.no/u-\{username}/...
- //gw-\{owner}.intark.uh-it.no/z\{username}/...

virtual host mode (unclear if this will be supported by the USIT installation)

- //api.\{owner}.no/\{sys}/\{api-name}/\{env}
- //\{sys}.api.\{owner}.no/\{api-name}/\{api-vers}

## Rabbit MQ

### users

- s-\{sys} # when env=prod
- s-\{sys}-\{env}
- u-\{username} # developer

### vhost

- //mq-\{owner}.intark.uh-it.no/s-\{sys}
- //mq-\{owner}.intark.uh-it.no/s-\{sys}-\{env}
- //mq-\{owner}.intark.uh-it.no/\{owner}-admin

Note: We avoid '/' in vhost names as it has to be escaped in URLs as '%2F' and serves no real purpose in forming hierarchies.

Developers can experiment by getting access to their own vhost:

- //mq-\{owner}.intark.uh-it.no/u-\{username}
- //mq-\{owner}.intark.uh-it.no/u-\{username}-\{sys}
- //mq-\{owner}.intark.uh-it.no/z\{username}-\{sys}
- //mq-\{owner}.intark.uh-it.no/z\{username}-\{sys}

### exchanges

Messages are delivered to exchanges that live within the vhost space of the communicating system. The exchanges are named using this pattern:

- ex_from\_\{sys}
- ex_from\_\{sys}-\{env}

Where the \{sys} part can be the owner system (for events generated) or some other system for events consumed. The \{env}-part is dropped for production setup and when the environment is already established in the vhost name.

### queues

The application is free to use any convention it sees fit. They have their own vhost to spoil.

### topics

This just documents existing practice:

- no.\{owner}.\{sys}.\{env}.\{endpoint}.\{op}
- no.\{owner}.\{sys}.\{type}.\{endpoint}.\{op}
- \{endpoint}

I would hope to drop the 'no' part. It's shows up becuase we then end up the reversed domain name; but it's confusing if we want to generalize this to domain names that might have more segments.
