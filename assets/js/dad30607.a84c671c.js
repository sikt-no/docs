"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[8492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},k=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),m=d(r),g=a,u=m["".concat(o,".").concat(g)]||m[g]||p[g]||i;return r?n.createElement(u,s(s({ref:t},k),{},{components:r})):n.createElement(u,s({ref:t},k))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={title:"Se bruken av ditt API"},s=void 0,l={unversionedId:"datadeling/veiledere/api-manager/se-bruk-av-api",id:"datadeling/veiledere/api-manager/se-bruk-av-api",title:"Se bruken av ditt API",description:"Hvordan du f\xe5r innsikt i bruken av ditt API.",source:"@site/docs/datadeling/veiledere/api-manager/se-bruk-av-api.md",sourceDirName:"datadeling/veiledere/api-manager",slug:"/datadeling/veiledere/api-manager/se-bruk-av-api",permalink:"/docs/datadeling/veiledere/api-manager/se-bruk-av-api",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/veiledere/api-manager/se-bruk-av-api.md",tags:[],version:"current",lastUpdatedAt:1696398656,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{title:"Se bruken av ditt API"},sidebar:"datadeling",previous:{title:"Egne roller i Gravitee (f.eks. for innsyn)",permalink:"/docs/datadeling/veiledere/api-manager/rolle-internrevisjon"},next:{title:"Varsling av nye subscriptions o.l.",permalink:"/docs/datadeling/veiledere/api-manager/varsling-for-api-eiere"}},o={},d=[{value:"Se hvem som har tilgang",id:"se-hvem-som-har-tilgang",level:3},{value:"Se statistikk over bruk",id:"se-statistikk-over-bruk",level:3},{value:"Eksempler p\xe5 feilsituasjoner",id:"eksempler-p\xe5-feilsituasjoner",level:3},{value:"Hvordan ser jeg hvem som er mest ressurskrevende mot mitt API",id:"hvordan-ser-jeg-hvem-som-er-mest-ressurskrevende-mot-mitt-api",level:3},{value:"Se logger over API-kall",id:"se-logger-over-api-kall",level:3},{value:"Utvidet logging",id:"utvidet-logging",level:3}],k={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hvordan du f\xe5r innsikt i bruken av ditt API."),(0,a.kt)("h3",{id:"se-hvem-som-har-tilgang"},"Se hvem som har tilgang"),(0,a.kt)("p",null,"G\xe5 til siden hvor du konfigurerer API-et ditt. Under Portal i venstre sidemeny velg Subscriptions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bilde av abonnementer av et API",src:r(3339).Z,width:"2489",height:"1023"})),(0,a.kt)("h3",{id:"se-statistikk-over-bruk"},"Se statistikk over bruk"),(0,a.kt)("p",null,"For \xe5 se status og bruk av alle APIene du eier kan du g\xe5 p\xe5 Dashboard \xf8verst i menyen p\xe5 venstre side. Det er det 3 undersider. Home gir raskt overblikk, perdefault ut i fra bruk siste minutt men man kan endre til \xe5 se siste time, siste dag, siste uke eller siste m\xe5ned. Om man har satt opp helsesjekker vil man se status p\xe5 disse under APIs status. Analytics viser mer detaljer med blant annet grafer over bruk, respons-tider og status p\xe5 API-kall."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bilde av API Dashboard",src:r(727).Z,width:"2213",height:"1251"})),(0,a.kt)("p",null,"Ved \xe5 g\xe5 til et enkelt API kan man se fler detaljer. Velg API og g\xe5 til siden som heter analytics."),(0,a.kt)("p",null,"Her ser man b\xe5de status for API-kall basert p\xe5 HTTP-returkoder og antall API-kall fordelt p\xe5 planet, applikasjoner etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bilde av API analyse-dashboard",src:r(2903).Z,width:"2484",height:"1315"})),(0,a.kt)("p",null,"Naviger lenger ned p\xe5 siden for \xe5 f\xe5 graf over antall over tid og deres status og over hvor lang tid hvert API-kall bruker. Merk at om standard ser man kun for siste 5 minuttene, det kan man endre ved enten \xe5 g\xe5 p\xe5 hurtigvalgene 5m, 30m, 1h etc. (for \xe5 se for siste 5 minutter,siste halvtimen, siste timen) eller velge fra og til-tidspunkt \xf8verst p\xe5 siden. Man kan ogs\xe5 velge \xe5 f\xe5 oppdatert siden automatisk."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bilde av API analyse-dashboard",src:r(2369).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,"Ut i fra disse grafene er det lett \xe5 se om noe har forandret seg, men for \xe5 finne feil b\xf8r man kjenne til hvordan det ser ut n\xe5r ting fungerer som normalt. For eksempel vil noen applikasjoner ofte ha mange 403 og/eller 404-returkoder (betyr at man ikke har lov til \xe5 se en ressurs eller ressursen ikke finnes) mens andre applikasjoner ikke har slike feil til vanlig. I kakediagrammet er returkoder mellom 400 og 499 farget oransje og kan v\xe6re problem, men ikke alltid. Returkoder mellom 500 og 599 er vist i r\xf8dt, de betyr alltid at noe er feil (men det betyr ikke n\xf8dvendigvis at det er problem. De fleste applikasjoner vil bare pr\xf8ve p\xe5 nytt og om det er f\xe5 slike feil, og de g\xe5r gjennom p\xe5 fors\xf8k nummer to, er som oftest alt OK) Ser man mange 500-feilmelmdinger i noen sekunder som deretter forsvinner betyr det gjerne at backend-APIet er restartet."),(0,a.kt)("h3",{id:"eksempler-p\xe5-feilsituasjoner"},"Eksempler p\xe5 feilsituasjoner"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bilde av graf for API med feil",src:r(2803).Z,width:"1918",height:"637"})),(0,a.kt)("p",null,"Skjermskuddet over viser en graf fra et API hvor backend sluttet \xe5 svare helt. Som du ser skjedde det litt etter tre p\xe5 natta. Feilen man oftest fikk var 504 Gateway Timeout. Legg ogs\xe5 merke til at responstiden er uvanlig jevn, i dette tilfellet kommer det av at man traff p\xe5 connect timeout, som er 5 sekunder som standard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bilde av graf for API med feil",src:r(6695).Z,width:"1938",height:"671"})),(0,a.kt)("p",null,"Denne grafen viser et API hvor man opplevde feil fra 12:35. Feilen er 401 Unauthorized og kom av feil ved autentisernig mot backend-API. Dette kan f.eks. komme av passord som er endret i backend, men ikke i Gravitee."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bilde av graf for API med feil",src:r(2857).Z,width:"1941",height:"617"})),(0,a.kt)("p",null,"For APIet som blir vist i grafen over var det feil med en policy som gjorde at alle API-kall ble feil og backend ikke klarte \xe5 h\xe5ndtere requestene, men svarte i stedet med 400 Bad Request. Dette skjer heldigvis sjelden."),(0,a.kt)("h3",{id:"hvordan-ser-jeg-hvem-som-er-mest-ressurskrevende-mot-mitt-api"},"Hvordan ser jeg hvem som er mest ressurskrevende mot mitt API"),(0,a.kt)("p",null,'Hvilke API-kall som brukes mest ressurser vil v\xe6re forskjellig fra API til API, men generelt b\xf8r man se p\xe5 hvilke applikasjoner som har flest API-kall og hvilke applikasjoner som har lengst responstid. P\xe5 analytics-siden til et API ser man de p\xe5 "Top applications" og "Top slow applications", samt grafen "Hits by applications" nederst p\xe5 siden. Denne siste grafen er fin \xe5 se p\xe5 over tid for \xe5 sjekke om en applikasjon plutselig benytter APIet mye oftere.'),(0,a.kt)("p",null,"Man kan ogs\xe5 se p\xe5 logger og se hvilke API-kall som bruker lengst tid. Noen s\xf8k kan ta veldig lang tid. Om man ser slike og det finnes m\xe5ter \xe5 aksessere ressursen p\xe5 som er raskere b\xf8r man sp\xf8rre de som eier applikasjonen om de kan endre. For eksempel vil det ofte v\xe6re raskere og mindre ressurskrevende \xe5 kalle en ressurs direkte med ",(0,a.kt)("inlineCode",{parentName:"p"},"/ressurs/1234")," enn \xe5 s\xf8ke den opp med ",(0,a.kt)("inlineCode",{parentName:"p"},"/ressurs?id+eq+1234")," eller liknende. Dette er ogs\xe5 lurt \xe5 ha med i dokumentasjonen."),(0,a.kt)("p",null,"En appliksjon b\xf8r ikke hente alle ressurser av en type flere ganger i l\xf8pet av kort tid. Om dette skjer kan man sp\xf8rre de eier applikasjonen om de kan endre slik at de bare sp\xf8r etter den ressursen de trenger eller mellomlagre resultatet."),(0,a.kt)("h3",{id:"se-logger-over-api-kall"},"Se logger over API-kall"),(0,a.kt)("p",null,'Oppe til h\xf8yre p\xe5 siden er det en link hvor det st\xe5r "VIEW LOGS". Klik p\xe5 denne og man ser oversikt over alle API-kall. Dette kan v\xe6re kjekt ved feils\xf8king, men det er vanskelig \xe5 f\xe5 oversikt. Det er mulig \xe5 filtrer p\xe5 tid go etter kriterie alik som planer, applikasjoner, responstid og HTTP-returkoder. Ved \xe5 klikke p\xe5 tidspunktet f\xe5r man opp litt fler detaljer om enkelt-kall, men som standard er det ikke mye ekstra informasjon man kan se.'),(0,a.kt)("h3",{id:"utvidet-logging"},"Utvidet logging"),(0,a.kt)("p",null,"Ved \xe5 konfigurere utvidet logging kan man logge alt ved et API-kall, inkludert hele svar. Ikke bruk dette un\xf8dvendig, da man risikerr \xe5 lagre sensitiv informasjon og kan skape problemer med lagringsplass. Som standard blir utvidet logging skrudd av igjen etter en time hos oss, men administrator kan endre dette."),(0,a.kt)("p",null,'For \xe5 skru p\xe5 utvidet logging klikk p\xe5 "Configure the logging", endre boksen for Enabled/Disabled, velg hva som skal logges og eventuelle ekstra kriterier for logging (f.eks. kun logge for en applikasjon eller en plan) og klikke p\xe5 save. Etter dette m\xe5 man deploye APIet p\xe5 nytt. Etter redeploy kan man klike p\xe5 tidspunktet for et API-kall og se akkurat hva som blir mottatt og sendt til og fra Gravitee.'))}p.isMDXComponent=!0},3339:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api-abonnementer-ad36d1d452b6fcbf2accf11cfa1b5d72.png"},727:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api-bruk-dashboard-9914e22cf71f39d14de666ab3c84ba70.png"},2803:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api-feil-1-04560fe130f0451c28e144f251391625.png"},6695:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api-feil-2-539e2f1654ccde58f63291d7abdb73fb.png"},2857:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api-feil-3-b72108a7d6f831033e0737d84c2fc6c8.png"},2903:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api-graf-1-f08bf79a8a44ecfb164f6266b916740a.png"},2369:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/api-graf-2-c541774a427136e99340fa22eabcd0d4.png"}}]);