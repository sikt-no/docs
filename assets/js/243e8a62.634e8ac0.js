"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[2172],{165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(4848),s=t(8453);const i={},a="Skanning av lokalt nett",l={id:"educsc/trusseletterretning/lokalskann",title:"Skanning av lokalt nett",description:"Lokalskann er ei teneste for \xe5 f\xe5 betre oversikt i eige nett. Dette kan bidra til",source:"@site/docs/educsc/trusseletterretning/lokalskann.md",sourceDirName:"educsc/trusseletterretning",slug:"/educsc/trusseletterretning/lokalskann",permalink:"/docs/educsc/trusseletterretning/lokalskann",draft:!1,unlisted:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/educsc/trusseletterretning/lokalskann.md",tags:[],version:"current",lastUpdatedAt:1725279838e3,frontMatter:{},sidebar:"educsc",previous:{title:"eduCSC Portal",permalink:"/docs/educsc/trusseletterretning/educsc-portal"},next:{title:"Defender-integrasjonen til eduCSC",permalink:"/docs/educsc/trusseletterretning/ms-defender"}},o={},d=[{value:"Etablering",id:"etablering",level:2}];function k(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"skanning-av-lokalt-nett",children:"Skanning av lokalt nett"}),"\n",(0,r.jsx)(n.p,{children:"Lokalskann er ei teneste for \xe5 f\xe5 betre oversikt i eige nett. Dette kan bidra til\n\xe5 oppdaga skugge-IT, s\xe5rbare eller kompromitterte tenester. Det blir dermed\nlettare \xe5 kvalitetssikre oversikta over informasjonsverdiar, sj\xe5 no-tilstanden\np\xe5 tenestene og f\xf8rebyggje hendingar."}),"\n",(0,r.jsx)(n.p,{children:"Tenesta baserer seg p\xe5\xa0dagens sensorinfrastruktur og kan skanne fr\xe5 valfritt\nVLAN. Vi kombinerer dette med ulike metodar for informasjonsinnhenting og\nkartlegging for \xe5 gje best mogleg dekning i nettverket."}),"\n",(0,r.jsx)(n.p,{children:"Det ferdige produktet vil tilby funksjon som minner om Shodan eller liknande\ntenester. Dette vil skje gjennom portalen til eduCSC."}),"\n",(0,r.jsxs)(n.p,{children:["Ta kontakt via ",(0,r.jsx)(n.a,{href:"mailto:kontakt@sikt.no",children:"kontakt@sikt.no"})," for \xe5 sj\xe5 om du \xf8nskjer \xe5 ta i bruk tenesten."]}),"\n",(0,r.jsx)(n.h2,{id:"etablering",children:"Etablering"}),"\n",(0,r.jsx)(n.p,{children:"Tenesta fordrar at du allereie har ein eller fleire sensorar."}),"\n",(0,r.jsx)(n.p,{children:"For \xe5 setje i gang treng vi:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ei liste over nett som skal skannast (prefiks)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Om ikkje kan vi ta utgangspunkt i prefiks som er delegert til dykk av\nForskningsnettet."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["IP-adresse og gateway (for b\xe5de IPv4 og IPv6) til skanning","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Dette inkluderer detaljar om nettmaske/CIDR."}),"\n",(0,r.jsx)(n.li,{children:"RFC1918 fungerer fint for IPv4, s\xe5 framt dette blir ruta riktig til alle\nnett som skal skannast av sensoren."}),"\n",(0,r.jsxs)(n.li,{children:["IP-adressa ",(0,r.jsx)(n.em,{children:"b\xf8r"})," opnast for i ulike brannmurar mot nett som skal skannast"]}),"\n",(0,r.jsx)(n.li,{children:"Vi kan ogs\xe5 tagge eit spesifikt VLAN om dette er ynskjeleg, typisk ved bruk\nav 802.1Q-trunk."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Adresse (URL) og API-token til NAV-instansen dykkar.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sj\xe5\n",(0,r.jsx)(n.a,{href:"https://nav.readthedocs.io/en/latest/howto/using_the_api.html?highlight=token#the-nav-api",children:"NAV-dokumentasjonen"}),"\nfor korleis de opprettar token."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Det kjem etter kvart meir funksjonalitet i eduCSC-portalen for \xe5 sj\xe5 rapportar\nog dashboard over funn fr\xe5 lokalskann. Verksemda di m\xe5 derfor vera innslusa i\nportalen for at de skal f\xe5 tilgang til denne. Sj\xe5\n",(0,r.jsx)(n.a,{href:"/docs/educsc/trusseletterretning/educsc-portal",children:"portal-dokumentasjonen"})," for meir\ninfo om korleis de kjem i gang."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);