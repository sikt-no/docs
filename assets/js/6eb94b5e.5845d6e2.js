"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[587],{4206:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=i(4848),r=i(8453);const t={title:"Grunnleggende feils\xf8king ved problemer i lokalnett"},l=void 0,d={id:"cnaas/grunnleggende-feilsok-lokalnett",title:"Grunnleggende feils\xf8king ved problemer i lokalnett",description:"Innledning",source:"@site/docs/cnaas/grunnleggende-feilsok-lokalnett.md",sourceDirName:"cnaas",slug:"/cnaas/grunnleggende-feilsok-lokalnett",permalink:"/docs/cnaas/grunnleggende-feilsok-lokalnett",draft:!1,unlisted:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/cnaas/grunnleggende-feilsok-lokalnett.md",tags:[],version:"current",lastUpdatedAt:1725279838e3,frontMatter:{title:"Grunnleggende feils\xf8king ved problemer i lokalnett"},sidebar:"cnaas",previous:{title:'Driftsinstruks for kunder av "Lokalnett fra Sikt - CNaaS"',permalink:"/docs/cnaas/driftsinstruks-kunde"},next:{title:"N\xf8dvendig informasjon f\xf8r eskalering av lokalnett-relaterte saker til Sikt.",permalink:"/docs/cnaas/info-ved-eskalering"}},o={},a=[{value:"Innledning",id:"innledning",level:2},{value:"Feils\xf8kingsscript",id:"feils\xf8kingsscript",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Tr\xe5dbasert tilkobling",id:"tr\xe5dbasert-tilkobling",level:2},{value:"Sjekk at brukerpunktet er tilkoblet svitsjen i etasjefordeler/kommunikasjonsrom.",id:"sjekk-at-brukerpunktet-er-tilkoblet-svitsjen-i-etasjefordelerkommunikasjonsrom",level:3},{value:"Sjekk om det er link p\xe5 nettkortet.",id:"sjekk-om-det-er-link-p\xe5-nettkortet",level:3},{value:"Tr\xe5dl\xf8s tilkobling (Wi-Fi)",id:"tr\xe5dl\xf8s-tilkobling-wi-fi",level:2},{value:"Tilkobling til eduroam",id:"tilkobling-til-eduroam",level:3},{value:"Tilkobling til gjestenett",id:"tilkobling-til-gjestenett",level:3},{value:"Sjekk kvaliteten p\xe5 signalet",id:"sjekk-kvaliteten-p\xe5-signalet",level:3},{value:"Windows",id:"windows-1",level:4},{value:"Mac",id:"mac",level:4},{value:"Linux",id:"linux-1",level:4},{value:"Sjekk om brukeren f\xe5r IPv4/IPv6-adresse og identifisering av brukerens MAC-adresse.",id:"adresser",level:2},{value:"Windows",id:"windows-2",level:3},{value:"Mac",id:"mac-1",level:3},{value:"Linux",id:"linux-2",level:3},{value:"Sjekk n\xe5barhet til ressurser",id:"sjekk-n\xe5barhet-til-ressurser",level:2},{value:"Sjekk om det er mulig \xe5 kj\xf8re ping mot default gateway.",id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-ping-mot-default-gateway",level:3},{value:"Windows",id:"windows-3",level:4},{value:"Mac",id:"mac-2",level:4},{value:"Linux",id:"linux-3",level:4},{value:"Sjekk om det er mulig \xe5 kj\xf8re navneoppslag mot f.eks www.google.com",id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-navneoppslag-mot-feks-wwwgooglecom",level:3},{value:"Windows",id:"windows-4",level:4},{value:"Mac",id:"mac-3",level:4},{value:"Linux",id:"linux-4",level:4}];function k(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"innledning",children:"Innledning"}),"\n",(0,s.jsx)(n.p,{children:"Denne artikkelen har som m\xe5l \xe5 gi hjelp til brukerst\xf8tte n\xe5r brukere har problemer med tilkobling til eller bruk av lokalnettet. Den inneholder da litt tips og triks slik at brukerst\xf8tte kan isolere problemet og gir viktig grunnlag for feils\xf8king ved eskalering til Sikt."}),"\n",(0,s.jsx)(n.h2,{id:"feils\xf8kingsscript",children:"Feils\xf8kingsscript"}),"\n",(0,s.jsx)(n.p,{children:"Vi har utarbeidet en liste over kommandoer som kan kj\xf8res p\xe5 en klient for \xe5 f\xe5 mer info for feils\xf8king. Disse kommandoene har vi lagt inn i script-filer som kan lastes ned og kj\xf8res p\xe5 maskinene. MERK: Kj\xf8r dette n\xe5r maskinen har problemer!! Det er liten vits \xe5 kj\xf8re dette n\xe5r maskinen IKKE har problemer."}),"\n",(0,s.jsx)(n.p,{children:"Under kan du se en liste over script som kan kj\xf8res p\xe5 de forskellige operativsystemene."}),"\n",(0,s.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["Kopier koden nedenfor og legg den i en fil som heter ",(0,s.jsx)(n.code,{children:"netinfo.cmd"}),". Kj\xf8r s\xe5 denne p\xe5 maskina som har problemer. N\xe5r dette scriptet kj\xf8res s\xe5 blir det laget en fil ",(0,s.jsx)(n.code,{children:"netinfo.log"})," som kan vidersendes til CNaaS for dypere feils\xf8king."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"@echo off\nnetsh wlan show interface > netinfo.log\nnetsh interface ipv4 show route >> netinfo.log\nnetsh interface ipv4 show addresses >> netinfo.log\nnetsh interface ipv6 show route >> netinfo.log\nnetsh interface ipv6 show neig >> netinfo.log\nnetsh interface ipv6 show addresses >> netinfo.log\nnetsh interface ipv6 show dnsservers >> netinfo.log\narp -a >> netinfo.log\nnslookup www.vg.no >> netinfo.log\nnslookup dns-resolver1.uninett.no >> netinfo.log\nping -4 8.8.8.8 >> netinfo.log\nping -4 158.38.0.1 >> netinfo.log\nping -6 2001:700:0:ff00::1 >> netinfo.log\nping -6 2001:4860:4860::8888 >> netinfo.log\n"})}),"\n",(0,s.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,s.jsx)(n.p,{children:"Coming soon!"}),"\n",(0,s.jsx)(n.h2,{id:"tr\xe5dbasert-tilkobling",children:"Tr\xe5dbasert tilkobling"}),"\n",(0,s.jsx)(n.h3,{id:"sjekk-at-brukerpunktet-er-tilkoblet-svitsjen-i-etasjefordelerkommunikasjonsrom",children:"Sjekk at brukerpunktet er tilkoblet svitsjen i etasjefordeler/kommunikasjonsrom."}),"\n",(0,s.jsx)(n.p,{children:"Verifiser at brukerpunktet er tilkoblet i etasjefordeler/kommunikasjonsrom og at patche-kabelen er tilstrekkelig koblet inn i panelet og switchen."}),"\n",(0,s.jsx)(n.h3,{id:"sjekk-om-det-er-link-p\xe5-nettkortet",children:"Sjekk om det er link p\xe5 nettkortet."}),"\n",(0,s.jsx)(n.p,{children:"Dersom det ikke er link p\xe5 nettkortet s\xe5..."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"... kan det v\xe6re feil p\xe5 kabelen mellom brukerpunkt og maskin. Bytt kabelen og sjekk igjen."}),"\n",(0,s.jsx)(n.li,{children:'... nettkortet p\xe5 brukerens maskin kan v\xe6re "disablet" i operativsystemet til brukeren. Sjekk at nettkortet er skrudd p\xe5 i operativsystemet.'}),"\n",(0,s.jsx)(n.li,{children:"... kan det v\xe6re feil med kablingen. Vurder m\xe5ling (via elektromont\xf8r) av punktet dersom du allerede byttet patchekabel i punkt 1."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tr\xe5dl\xf8s-tilkobling-wi-fi",children:"Tr\xe5dl\xf8s tilkobling (Wi-Fi)"}),"\n",(0,s.jsx)(n.h3,{id:"tilkobling-til-eduroam",children:"Tilkobling til eduroam"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Verifiser at brukeren har brukernavn/passord i lokalt brukerdatabase.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Om dette er en eduroam gjestebruker skal sp\xf8rsm\xe5l om brukernavn, passord og oppsett g\xe5 direkte fra bruker til egen institusjon."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Sjekk at tr\xe5dl\xf8snettet eduroam er synlig for klienten."}),"\n",(0,s.jsxs)(n.li,{children:["Kj\xf8r eduroam-oppsett p\xe5 ",(0,s.jsx)(n.a,{href:"https://www.eduroam.no/connect"})]}),"\n",(0,s.jsx)(n.li,{children:"Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"tilkobling-til-gjestenett",children:"Tilkobling til gjestenett"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sjekk at det tr\xe5dl\xf8se gjestenettet er synlig for klienten."}),"\n",(0,s.jsx)(n.li,{children:"Sjekk eventuell feilmelding ved oppkobling og gi informasjon om dette ved eskalering."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"sjekk-kvaliteten-p\xe5-signalet",children:"Sjekk kvaliteten p\xe5 signalet"}),"\n",(0,s.jsx)(n.p,{children:"Kvaliteten p\xe5 signalet sett fra klienten kan gi en pekepinn p\xe5 om problemet er basert p\xe5 signalstyrke og ogs\xe5 gi nyttig informasjon ved eventuell eskalering. Dette kan sjekkes p\xe5 de forskjellige operativsystemene slik:"}),"\n",(0,s.jsx)(n.h4,{id:"windows-1",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["Kj\xf8r kommandoen ",(0,s.jsx)(n.code,{children:"netsh wlan show interface"}),". Her f\xe5r du masse nyttig informasjon, men f\xf8rst og fremst s\xe5 b\xf8r det kikkes p\xe5 linjen ",(0,s.jsx)(n.em,{children:"Signal"})," som angi signalstyrken i prosent."]}),"\n",(0,s.jsx)(n.p,{children:"Denne informasjonen b\xf8r v\xe6re med i en eventuell eskalering uavhengig om det er d\xe5rlig eller bra signal, siden det gir informasjon om SSID (tr\xe5dl\xf8snettnavn), MAC-adressen til klienten, kanal/b\xe5nd, protokoller med mer."}),"\n",(0,s.jsx)(n.h4,{id:"mac",children:"Mac"}),"\n",(0,s.jsx)(n.p,{children:"HER KOMMER MER SNART!"}),"\n",(0,s.jsx)(n.h4,{id:"linux-1",children:"Linux"}),"\n",(0,s.jsxs)(n.p,{children:["P\xe5 Linux kan man installere ",(0,s.jsx)(n.code,{children:"wavemon"})," og kj\xf8re dette. Da vil man f\xe5 masse nyttig informasjon, slik som signalkvalitet og signalstyrke."]}),"\n",(0,s.jsx)(n.p,{children:"Denne informasjonen b\xf8r v\xe6re med i en eventuell eskalering uavhengig om det er d\xe5rlig eller bra signal, siden det gir informasjon om SSID (tr\xe5dl\xf8snettnavn), MAC-adressen til klienten, kanal/b\xe5nd, protokoller med mer."}),"\n",(0,s.jsx)(n.h2,{id:"adresser",children:"Sjekk om brukeren f\xe5r IPv4/IPv6-adresse og identifisering av brukerens MAC-adresse."}),"\n",(0,s.jsx)(n.h3,{id:"windows-2",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["F\xf8rst finn rett nettkort \xe5 feils\xf8ke. Dette kan finnes ved \xe5 kj\xf8re ",(0,s.jsx)(n.code,{children:"netsh interface show interface"})," som gir deg en liste over nettkort. Nettkortet du skal feils\xf8ke m\xe5 ha status ",(0,s.jsx)(n.em,{children:"Tilkoblet"})," eller ",(0,s.jsx)(n.em,{children:"Connected"}),". For tr\xe5dbasert tilkobling heter det ofte noe som starter med ",(0,s.jsx)(n.em,{children:"Ethernet"}),". Nettkort som heter noe med ",(0,s.jsx)(n.em,{children:"vEthernet"})," er IKKE de som du skal se p\xe5 n\xe5."]}),"\n",(0,s.jsxs)(n.p,{children:["Kj\xf8r kommandoen: ",(0,s.jsx)(n.code,{children:"ipconfig"}),". Finn s\xe5 rett innslag basert p\xe5 nettkort-navnet du fant over. Sjekk deretter f\xf8lgende:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Finnes det en IP-adresse for IPv4?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Denne skal IKKE v\xe6re noe som starter p\xe5 169.254.x.x. Dette betyr i prinsippet kortet ikke har IPv4-adresse."}),"\n",(0,s.jsx)(n.li,{children:'Dersom maskinen ikke har IPv4-adresse, s\xe5 er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Finnes det en IP-adresse for IPv6?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Merk at det ikke er nok at maskinen har en adresse som starter p\xe5 fe80::. Den skal ogs\xe5 ha en fullverdig IPv6-adresse som f.eks starter p\xe5 2001:700:"}),"\n",(0,s.jsx)(n.li,{children:"Dersom maskinen ikke har IPv6-adresse, s\xe5 KAN dette v\xe6re grunnen til problemene dersom IPv6 er skrudd p\xe5 p\xe5 dette nettet. Uansett s\xe5 kan dette meldes inn ved eskalering."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Noter deg ogs\xe5 kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som ",(0,s.jsx)(n.em,{children:"Fysisk adresse"}),"/",(0,s.jsx)(n.em,{children:"Physical address"})," i resultatet av kommandoen over."]}),"\n",(0,s.jsx)(n.h3,{id:"mac-1",children:"Mac"}),"\n",(0,s.jsx)(n.p,{children:"HER KOMMER MER SNART!"}),"\n",(0,s.jsx)(n.h3,{id:"linux-2",children:"Linux"}),"\n",(0,s.jsxs)(n.p,{children:["Kj\xf8r kommandoen: ",(0,s.jsx)(n.code,{children:"ip a"}),". Da vil IPv4 vises som ",(0,s.jsx)(n.em,{children:"inet"})," og IPv6 vises som ",(0,s.jsx)(n.em,{children:"inet6"}),". Finn rett nettkort og sjekk f\xf8lgende:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Finnes det en IP-adresse for IPv4?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Dersom maskinen ikke har IPv4-adresse, s\xe5 er feilen DHCP-tildeling. Da er dette "problemet" som kan meldes inn ved eskalering.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Finnes det en IP-adresse for IPv6?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Merk at det ikke er nok at maskinen har en adresse som starter p\xe5 fe80::. Den skal ogs\xe5 ha en fullverdig IPv6-adresse som f.eks starter p\xe5 2001:700:"}),"\n",(0,s.jsx)(n.li,{children:"Dersom maskinen ikke har IPv6-adresse, s\xe5 KAN dette v\xe6re grunnen til problemene dersom IPv6 er skrudd p\xe5 p\xe5 dette nettet. Uansett s\xe5 kan dette meldes inn ved eskalering."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Noter deg ogs\xe5 kortets MAC-adresse slik at du har dette til eventuell eskalering. Dette finner du som ",(0,s.jsx)(n.em,{children:"link/ether"})," i resultatet av kommandoen over."]}),"\n",(0,s.jsx)(n.h2,{id:"sjekk-n\xe5barhet-til-ressurser",children:"Sjekk n\xe5barhet til ressurser"}),"\n",(0,s.jsx)(n.p,{children:"Dersom brukeren har IPv4-/IPv6-adresse og er tilkoblet nettet, men det fortsatt er problemer med nettet, s\xe5 m\xe5 f\xf8lgende sjekkes:"}),"\n",(0,s.jsx)(n.h3,{id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-ping-mot-default-gateway",children:"Sjekk om det er mulig \xe5 kj\xf8re ping mot default gateway."}),"\n",(0,s.jsx)(n.h4,{id:"windows-3",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["IPv4: Kj\xf8r kommandoen: ",(0,s.jsx)(n.code,{children:"route print 0.0.0.0"}),". Finn IP-adressen til default gateway og fors\xf8k en ping mot denne adressen.\nIPv6: Kj\xf8r kommandoen: ",(0,s.jsx)(n.code,{children:"ping ::1"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Fungerer ikke en eller begge dissee, s\xe5 bruk dette som informasjon ved eskalering."}),"\n",(0,s.jsx)(n.h4,{id:"mac-2",children:"Mac"}),"\n",(0,s.jsx)(n.p,{children:"HER KOMMER MER SNART!"}),"\n",(0,s.jsx)(n.h4,{id:"linux-3",children:"Linux"}),"\n",(0,s.jsxs)(n.p,{children:["IPv4: Kj\xf8r kommandoen: ",(0,s.jsx)(n.code,{children:"ip route"})," og finn default-rute. Ping denne adressen.\nIPv6: Kj\xf8r kommandoen: ",(0,s.jsx)(n.code,{children:"ping ::1"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Fungerer ikke en eller begge dissee, s\xe5 bruk dette som informasjon ved eskalering."}),"\n",(0,s.jsxs)(n.h3,{id:"sjekk-om-det-er-mulig-\xe5-kj\xf8re-navneoppslag-mot-feks-wwwgooglecom",children:["Sjekk om det er mulig \xe5 kj\xf8re navneoppslag mot f.eks ",(0,s.jsx)(n.a,{href:"http://www.google.com",children:"www.google.com"})]}),"\n",(0,s.jsx)(n.h4,{id:"windows-4",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["Kj\xf8r kommandoen ",(0,s.jsx)(n.code,{children:"nslookup www.google.com"}),". Da skal du f\xe5 svar med IP-adressen til denne siden. Fungerer ikke dette, s\xe5 bruk dette som informasjon ved eskalering."]}),"\n",(0,s.jsx)(n.h4,{id:"mac-3",children:"Mac"}),"\n",(0,s.jsx)(n.p,{children:"HER KOMMER MER SNART!"}),"\n",(0,s.jsx)(n.h4,{id:"linux-4",children:"Linux"}),"\n",(0,s.jsxs)(n.p,{children:["Kj\xf8r kommandoen ",(0,s.jsx)(n.code,{children:"host www.google.com"}),". Da skal du f\xe5 svar med IP-adressen til denne siden. Fungerer ikke dette, s\xe5 bruk dette som informasjon ved eskalering."]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var s=i(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);