"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[8171],{6765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"iam/deputy","title":"Deputy","description":"SAP managers and deputies through autWf","source":"@site/docs/iam/deputy.md","sourceDirName":"iam","slug":"/iam/deputy","permalink":"/docs/iam/deputy","draft":false,"unlisted":false,"editUrl":"https://github.com/sikt-no/docs/tree/master/docs/iam/deputy.md","tags":[],"version":"current","lastUpdatedAt":1736497741000,"frontMatter":{"title":"Deputy"},"sidebar":"iam","previous":{"title":"Virksomhetsroller","permalink":"/docs/iam/virksomhetsroller"},"next":{"title":"Referanser","permalink":"/docs/iam/referanser"}}');var a=n(4848),i=n(8453);const r={title:"Deputy"},o=void 0,d={},u=[{value:"SAP managers and deputies through autWf",id:"sap-managers-and-deputies-through-autwf",level:3},{value:"Background",id:"background",level:4},{value:"Solution",id:"solution",level:4},{value:"Globals",id:"globals",level:4}];function l(e){const t={h3:"h3",h4:"h4",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"sap-managers-and-deputies-through-autwf",children:"SAP managers and deputies through autWf"}),"\n",(0,a.jsx)(t.p,{children:"Include deputy as a supplement to the process of identifying a user\u2019s manager."}),"\n",(0,a.jsx)(t.h4,{id:"background",children:"Background"}),"\n",(0,a.jsx)(t.p,{children:"In many cases, the formal manager of an organisation has delegated tasks such as access approval to a deputy. In SAP, this information is stored in \u2018autWf\u2019 from DFO Organisation, containing an array of deputies."}),"\n",(0,a.jsx)(t.p,{children:"organisasjoner"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(1958).A+"",width:"474",height:"318"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(6937).A+"",width:"463",height:"327"})}),"\n",(0,a.jsx)(t.h4,{id:"solution",children:"Solution"}),"\n",(0,a.jsx)(t.p,{children:"The primary deputy is identified by the one autWf.bruker having autWf.type = \u2018AZWF\u2019 and autWf.type = \u2018A290\u2019. End date is evaluated run-time, if the date is earlier than today \u2013 or if there is no match on AZWF = A290, deputy is set to null."}),"\n",(0,a.jsx)(t.p,{children:"The construct of autWf.bruker is related to Ansatte.brukerident, which is by default NOT the employee number. In order for RI to resolve the identity of the deputy, the institution must allow RI to take control over Ansatte.brukerident by enabling writeback of this attribute through"}),"\n",(0,a.jsx)(t.p,{children:"Global.sapWritebackEmployeeIDAsBrukerident=true"}),"\n",(0,a.jsx)(t.p,{children:"The selected deputy (or the actual manager if null) is stored in idautoPersonExt13 (dn) in addition to whatever goes into idautoPersonExt12 (uhid) and manager (dn). This requires amendments to FnGetManager which is used by workflows to determine an adequate manager."}),"\n",(0,a.jsx)(t.h4,{id:"globals",children:"Globals"}),"\n",(0,a.jsx)(t.p,{children:"Global.sapUseDeputyAsApprover = true | false"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(1184).A+"",width:"939",height:"102"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1958:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tekstboks3-47cadbfd1948b3b82695582da652ddef.png"},6937:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tekstboks4-f4ce59fa6b1b680a5762b724c2d2ab98.png"},1184:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tekstboks5-2b38bf5b6875ec43a2a19135d7dd547d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);