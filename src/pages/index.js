import React from "react";

import { Topic, TopicList } from "../components/topiclist";

const topics = (
  <>
    <Topic title="IAM" link="docs/iam">
      Identitets- og tilgangsstyring (IAM) handler om å gi studenter, forskere
      og ansatte riktig tilgang til digitale systemer, tjenester og ressurser,
      samt avslutte tilgang for brukere som ikke lenger skal ha det.
    </Topic>
    <Topic title="Datadeling (IntArk)" link="docs/datadeling">
      Fellestjeneste for Datadeling (IntArk). Denne dokumentasjonen er under
      utvikling. Send en e-post til kontakt@sikt.no med eventuelle spørsmål
      eller forslag til forbedringer.
    </Topic>
    <Topic title="Feide" link="https://docs.feide.no" imageUrl="img/feide.svg">
      Som tjenesteleverandør kan brukerne logge inn på tjenesten din med Feide.
      Tjenesten blir også tilgjengelig for et stort marked med 1,3 millioner
      potensielle Feide-brukere.
    </Topic>
    <Topic
      title="Sikt fagspesifikasjoner"
      link="https://www.uninett.no/en/node/2055"
    >
      Sikts beste praksis fagspesifikasjoner (SFS). Fagspesifikasjonene er
      nedskrevne og vedtatte anbefalinger tuftet på universitets- og
      høyskolesektorens kollektive IT-faglige erfaringer.
    </Topic>
    <Topic title="Lokalnett - CNaaS" link="docs/cnaas">
      Lokalnett fra Sikt - CNaaS leverer lokalnett for organisasjoner og
      bedrifter i kunnskaps-Norge! Vårt lokalnett er en forlengelse av
      forskningsnettet - Sikts internett med høy hastighet, høy oppetid og
      sikkerhet i høysete. Vi leverer fastnett, trådløst nettverk, rutere,
      brannmurer og dataromnett.
    </Topic>
  </>
);

export default function Home() {
  return (
    <>
      <TopicList>{topics}</TopicList>
    </>
  );
}
