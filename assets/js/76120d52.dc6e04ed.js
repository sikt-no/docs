"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[1188],{779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"datadeling/veiledere/meldingsk\xf8/opprett-tjeneste","title":"Registrer din tjeneste for meldingsutsending","description":"Hvordan du registrerer din tjeneste i Selvbetjeningsportalen for RabbitMQ for \xe5","source":"@site/docs/datadeling/veiledere/meldingsk\xf8/opprett-tjeneste.md","sourceDirName":"datadeling/veiledere/meldingsk\xf8","slug":"/datadeling/veiledere/meldingsk\xf8/opprett-tjeneste","permalink":"/docs/datadeling/veiledere/meldingsk\xf8/opprett-tjeneste","draft":false,"unlisted":false,"editUrl":"https://github.com/sikt-no/docs/tree/master/docs/datadeling/veiledere/meldingsk\xf8/opprett-tjeneste.md","tags":[],"version":"current","lastUpdatedAt":1736497741000,"frontMatter":{"title":"Registrer din tjeneste for meldingsutsending"},"sidebar":"datadeling","previous":{"title":"Varsling av nye subscriptions o.l.","permalink":"/docs/datadeling/veiledere/api-manager/varsling-for-api-eiere"}}');var i=t(4848),r=t(8453);const d={title:"Registrer din tjeneste for meldingsutsending"},o=void 0,l={},a=[];function g(e){const n={a:"a",br:"br",code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Hvordan du registrerer din tjeneste i Selvbetjeningsportalen for RabbitMQ for \xe5\nhente eller sende meldinger:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Logg inn i din institusjons selvbetjeningsportal for RabbitMQ. Se ",(0,i.jsx)(n.a,{href:"/docs/datadeling/teknisk-plattform/oversikt",children:"oversikt\nover den tekniske plattformen"}),"\nom du ikke kjenner adressen.\n",(0,i.jsx)(n.img,{alt:"Skjermskudd av startsiden til selvbetjeningsportalen",src:t(756).A+"",width:"1064",height:"699"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Velg "Opprett ny applikasjon".',(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"Skjermskudd av tom f\xf8rsteside i selvbetjeningsportalen",src:t(327).A+"",width:"840",height:"304"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Legg inn detaljene om tjenesten din. Velg et godt og beskrivende navn, da\ndette hjelper andre \xe5 finne din tjeneste.\n",(0,i.jsx)(n.img,{alt:"Skjermskudd av opprettingsvinduet i selvbetjeningsportalen",src:t(1005).A+"",width:"1235",height:"608"}),"\nNavnet f\xe5r en prefiks basert p\xe5 form\xe5let. Dette gj\xf8r det enklere \xe5 skille\nmellom test-, utviklings- og produksjonsmilj\xf8."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Hvis din tjeneste produserer notifikasjoner, velger du "Registrer notifikasjonskilde":',(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"Skjermskudd av hovedsiden til en applikasjon i selvbetjeningsportalen",src:t(8857).A+"",width:"1353",height:"872"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Legg inn dokumentajon om notifikasjonene fra din tjeneste, eller lenke til\nhvor det er tilgjengelig. Dette er nyttig for konsumentene som \xf8nsker \xe5\nintegrere med din tjeneste, s\xe5 de h\xe5ndterer og tolker notifikasjonene\nriktig."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Hent ut tilkoblingsdetaljene for din tjeneste, og legg de inn i tjenesten\ndin.\n",(0,i.jsx)(n.img,{alt:"Skjermskudd fra &quot;hvordan publisere notifikasjoner&quot; i selvbetjeningsportalen",src:t(2066).A+"",width:"1234",height:"1331"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Selvbetjeningsportalen snakker med RabbitMQ fortl\xf8pende, s\xe5 straks dette er\ngjort, har din institusjons RabbitMQ-instans allerede opprettet det som trengs\nfor \xe5 publisere notifikasjoner:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"virtual host"})," som er navngitt etter navnet p\xe5 tjenesten/applikasjonen\n(feks ",(0,i.jsx)(n.code,{children:"system-production-my_service"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Et ",(0,i.jsx)(n.em,{children:"exchange"})," med navn basert p\xe5 tjenesten/applikasjonen (feks\n",(0,i.jsx)(n.code,{children:"outgoing_system-production-my_service"}),"). Det er her din tjeneste kan\npublisere sine meldinger."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Selvbetjeningsportalen gir deg en del forklaringer, og til og med eksempel-kode\nfor b\xe5de uthenting og publisering av meldinger. Du kan ogs\xe5 se ",(0,i.jsx)(n.a,{href:"https://www.rabbitmq.com/documentation.html",children:"RabbitMQ sin\negen dokumentasjon"})," for mer\ntekniske detaljer rundt meldingsutveksling."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},1005:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/brom-create-application-c894e9c45bf8c97cd4a82e9d4e870f3b.png"},756:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/brom-intro-fab83a2bc55b39bd3c71b2beac0fb2d3.png"},327:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/brom-oversikt-ba1f22bebda494a9efa3ce755ba0ab12.png"},2066:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/brom-publish-messages-8a618322f18f3c80e2903afc589986ed.png"},8857:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/brom-register-notification-source-178522de7e265e8f2219f2fce468b27a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);