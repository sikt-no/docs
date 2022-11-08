---
title: Infrastrukturen til IntArks tekniske plattform
---

IntArk sin tekniske plattform kjører på en Kubernetes-distribusjon som er
installert i [NREC](https://nrec.no), i osl-sonen.

### OKD OpenShift Kubernetes

[OKD](https://okd.io) er "The Community Distribution of Kubernetes that powers
[Red Hat OpenShift](https://www.openshift.com)", og er upstream-versjonen av
OpenShift. Det blir i dagligtale ofte omtalt som _OpenShift_.

IntArk-plattformen har egne clustre som kjører på NREC i osl-sonen. De er
installert med _ovs-multitenant SDN plugin_, og hvert prosjekt (namespace) er
nettverksmessig isolert.

Hver institusjon som bruker IntArk-plattformen har hvert sitt prosjekt hvor
Gravitee, RabbitMQ og BROM kjører.

Oppgraderinger av OKD er basert på blue-green-metodikk. Det vil si at
oppgraderinger skjer ved å installere nytt cluster med nyeste versjon av
alle komponenter, og deretter flytte applikasjonene fra et cluster til et
annet. Dette betyr at alle tjenester vil bytte IP-adresse ved oppgraderinger.

### Lastbalanserer

Det står en lastbalanserer i forkant som sender trafikk til riktig cluster.
Denne har samme IP-adresse for alle, og bruker [Server Name Indication
(SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication) for å route
trafikken til riktig sted. I web-verdenen har dette vært standard lenge og man
behøver vanligvis ikke tenke på dette. Når man skal koble til en meldingskø må
man derimot ofte spesifisere at man skal bruke SNI.

![Tekniske komponenter i IntArk-plattformen](/datadeling/img/intark-komponenter.png)

### IP-ranges

IntArk sin tekniske plattform kjører i regionen _osl_ til NREC. Hvis du ønsker
å lage brannmurregler som ikke trenger hyppige oppdateringer anbefaler vi å
åpne for alle subnettene til NREC. Se [NREC sin oversikt hvilke nettverk de
bruker](https://iaas.readthedocs.io/team/installation/ip.html).

Vi anbefaler **ikke** å sperre ned til spesifikke IP-adresser, fordi:

1. IntArk-installasjonene bytter cluster ved oppgraderinger
2. Tjenester kan bytte IP-adresse
3. Cluster utvides fortløpende med nye servere

Ulempen ved å åpne for alle subnettene til NREC, eller til et spesifikt
cluster, er at de deles av andre institusjoner. Hvis du har API med strenge
krav til brannmurregler anbefaler vi at du kjører dette via en
http-proxy-server som krever brukernavn og passord.
