import React from 'react';

import {
  Topic,
  TopicList,
} from '../components/topiclist';



const topics = <>
  <Topic
    title="IAM"
    link="docs/iam/index"
    imageUrl="img/uninett_logo.svg"
  >
    Identitets- og tilgangsstyring (IAM) handler om å gi studenter, forskere og ansatte riktig tilgang til digitale systemer, tjenester og ressurser, samt avslutte tilgang for brukere som ikke lenger skal ha det.
  </Topic>
  <Topic
    title="Datadeling"
    link="docs/datadeling/index"
    imageUrl="img/uninett_logo.svg"
  >
    Datadeling. Tilgangsstyring for API-er.
  </Topic>
  <Topic
    title="Feide"
    link="https://docs.feide.no"
    imageUrl="img/feide.svg"
  >
    Som tjenesteleverandør kan brukerne logge inn på tjenesten din med Feide. Tjenesten blir også tilgjengelig for et stort marked med 1,3 millioner potensielle Feide-brukere.
  </Topic>
  <Topic
    title="Uninett fagspesifikasjoner"
    link="https://www.uninett.no/en/node/2055"
    imageUrl="img/uninett_logo.svg"
  >
     Uninetts beste praksis fagspesifikasjoner (UFS). Fagspesifikasjonene er nedskrevne og vedtatte anbefalinger tuftet på universitets- og høyskolesektorens kollektive IT-faglige erfaringer.
  </Topic>
  <Topic
    title="Lokalnett - CNaaS"
    link="docs/cnaas/index"
    imageUrl="img/uninett_logo.svg"
  >
     Lokalnett fra Uninett - CNaaS leverer lokalnett for organisasjoner og bedrifter i kunnskaps-Norge! Vårt lokalnett er en forlengelse av forskningsnettet - Uninetts internett med høy hastighet, høy oppetid og sikkerhet i høysete. Vi leverer fastnett, trådløst nettverk, rutere, brannmurer og dataromnett.
  </Topic>

</>;

export default function Home() {
  return <>
    <TopicList>{topics}</TopicList>
  </>;
}
