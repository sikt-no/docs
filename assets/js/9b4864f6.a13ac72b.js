"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[199],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,k=g["".concat(l,".").concat(m)]||g[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9646:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Identitets og tilgangsstyring (Felles IAM)",disableTitleTagline:!0},l=void 0,p={unversionedId:"iam/index",id:"iam/index",title:"Identitets og tilgangsstyring (Felles IAM)",description:"Identitets- og tilgangsstyring (IAM) handler om \xe5 gi studenter, forskere og ansatte riktig tilgang til digitale systemer, tjenester og ressurser, samt avslutte tilgang for brukere som ikke lenger skal ha det.",source:"@site/docs/iam/index.md",sourceDirName:"iam",slug:"/iam/",permalink:"/docs/iam/",editUrl:"https://github.com/sikt-no/docs/tree/master/docs/iam/index.md",tags:[],version:"current",lastUpdatedAt:1663933949,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"Identitets og tilgangsstyring (Felles IAM)",disableTitleTagline:!0},sidebar:"iam",next:{title:"Gevinster ved Felles IAM",permalink:"/docs/iam/gevinster"}},u={},d=[],g={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Identitets- og tilgangsstyring (IAM) handler om \xe5 gi studenter, forskere og ansatte riktig tilgang til digitale systemer, tjenester og ressurser, samt avslutte tilgang for brukere som ikke lenger skal ha det."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://sikt.no/artikkel/status-identitets-og-tilgangsstyring-iam"},"Les mer om IAM-tjenesten p\xe5 sikt.no")),(0,i.kt)("p",null,"Her vil du finne overordnet systemdokumentasjon, og etterhvert brukerdokumentasjon. ",(0,i.kt)("a",{parentName:"p",href:"./arkitektur"},"En overordnet arkitektur for IAM")," og ",(0,i.kt)("a",{parentName:"p",href:"./gevinster"},"gevinster")," vil v\xe6re en gode steder \xe5 starte for \xe5 bedre forst\xe5 IAM."),(0,i.kt)("p",null,"Felles IAM vil ",(0,i.kt)("a",{parentName:"p",href:"./livssyklus"},"livssyklusen til studenter, ansatte og gjester"),", og opprette, endre og fjerne digitale kontoer basert p\xe5 data fra ",(0,i.kt)("a",{parentName:"p",href:"./kildedata"},"kildesystemer"),". Felles IAM kan identifisere en person p\xe5 tvers av utdanningsinstitusjoner, og ",(0,i.kt)("a",{parentName:"p",href:"./brukernavn"},"generere et nasjonalt unikt brukernavn og en identifikator"),". N\xe5r en bruker m\xf8ter en utdanningsinstisujon for f\xf8rste gang vil vedkommende m\xf8te ",(0,i.kt)("a",{parentName:"p",href:"./kontoaktivering"},"en brukervennlig kontoaktivering"),", hvor man blant annet setter passordet, i henhold til ",(0,i.kt)("a",{parentName:"p",href:"./passordpolicy"},"felles passordpolicy"),". Noe av den mest sentrale funksjonaliteten i Felles IAM er ",(0,i.kt)("a",{parentName:"p",href:"./tilgangsstyring"},"tilgangsstyring til m\xe5lsystemer"),", hvor tilganger kan settes basert p\xe5 ",(0,i.kt)("a",{parentName:"p",href:"./virksomhetsroller"},"virksomhetsroller"),"."),(0,i.kt)("p",null,"N\xe5r tilgangsstyring er samlet og kontrollert fra et sted vil ",(0,i.kt)("a",{parentName:"p",href:"./rapportering"},"rapportering")," gi oversikt og kontroll, og bidra til \xe5 hjelpe med \xe5 etterlevere lovverk og standarder."),(0,i.kt)("p",null,"Forvaltning av IAM p\xe5 en institusjon er et samarbeid, hvor ",(0,i.kt)("a",{parentName:"p",href:"./ansvar"},"ansvar fordeles ut i organisasjonen"),", og er ikke begrenset til IT-avdelingen."),(0,i.kt)("p",null,"Felles IAM er realisert med produktet ",(0,i.kt)("a",{parentName:"p",href:"./produkt"},"Rapid Identity")," levert av Identity Automations."),(0,i.kt)("p",null,"For mer tekniske dypdykk:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./datamodell"},"Felles IAM datamodell")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./datamodell"},"REST API for integrasjoner mot m\xe5lsystemer"))),(0,i.kt)("p",null,"I ",(0,i.kt)("a",{parentName:"p",href:"./referanser"},"referanser")," vil du finne flere lenker til andre kilder som dokumenterer l\xf8sningen ytterligere."))}m.isMDXComponent=!0}}]);