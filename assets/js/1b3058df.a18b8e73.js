"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[4747],{996:(l,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>M,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var a=t(5893),d=t(1151);const s={},M="KUDAF and Metadata standards",n={id:"kudaf/metadata-standard",title:"KUDAF and Metadata standards",description:"The KUDAF initiative relates to two different Metadata standards:",source:"@site/docs/kudaf/metadata-standard.md",sourceDirName:"kudaf",slug:"/kudaf/metadata-standard",permalink:"/docs/kudaf/metadata-standard",draft:!1,unlisted:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/kudaf/metadata-standard.md",tags:[],version:"current",lastUpdatedAt:1705484923,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{},sidebar:"kudaf",previous:{title:"KUDAF",permalink:"/docs/kudaf/"},next:{title:"Variables and Metadata",permalink:"/docs/kudaf/variables"}},i={},c=[{value:"DCAT-AP-NO (Data Catalog Vocabulary)",id:"dcat-ap-no-data-catalog-vocabulary",level:3},{value:"RAIRD Information Model",id:"raird-information-model",level:3},{value:"Datum-based data structure",id:"datum-based-data-structure",level:4}];function r(l){const e={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...l.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"kudaf-and-metadata-standards",children:"KUDAF and Metadata standards"}),"\n",(0,a.jsxs)(e.p,{children:["The KUDAF initiative relates to ",(0,a.jsx)(e.strong,{children:"two different Metadata standards"}),":"]}),"\n",(0,a.jsxs)(e.h3,{id:"dcat-ap-no-data-catalog-vocabulary",children:[(0,a.jsx)(e.a,{href:"https://data.norge.no/specification/dcat-ap-no",children:"DCAT-AP-NO"})," (Data Catalog Vocabulary)"]}),"\n",(0,a.jsxs)(e.p,{children:["This is the ",(0,a.jsx)(e.strong,{children:"Norwegian implementation"})," of the international ",(0,a.jsx)(e.a,{href:"https://www.w3.org/TR/vocab-dcat/",children:"DCAT"})," standard. At this level one can discover different data sources in the ",(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.a,{href:"https://data.norge.no/",children:"Felles datakatalog"})}),", for example."]}),"\n",(0,a.jsxs)(e.p,{children:["Among the many different concepts included in this standard, ",(0,a.jsx)(e.strong,{children:"three important concepts are relevant to the Kudaf architecture"}),":"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["A ",(0,a.jsx)(e.strong,{children:"Catalog"})," ",(0,a.jsxs)(e.a,{href:"https://www.w3.org/TR/vocab-dcat/#Class:Catalog",children:["dcat",":Catalog"]})," is defined as ",(0,a.jsx)(e.em,{children:'"a curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog)"'}),"."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["A ",(0,a.jsx)(e.strong,{children:"Dataset"})," ",(0,a.jsxs)(e.a,{href:"https://www.w3.org/TR/vocab-dcat/#Class:Dataset",children:["dcat",":Dataset"]})," is defined as ",(0,a.jsx)(e.em,{children:'"a collection of data, published or curated by a single agent, and available for access or download in one or more representations"'}),". This is a broad definition, which could fit a database as well as a table within a database. But also a view on a database or the results of a query. And then is the matter of the representation: a dataset could be a JSON or CSV file containing data."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["A ",(0,a.jsx)(e.strong,{children:"Data Service"})," ",(0,a.jsxs)(e.a,{href:"https://www.w3.org/TR/vocab-dcat/#Class:Data_Service",children:["dcat",":DataService"]})," is defined as ",(0,a.jsx)(e.em,{children:'"a collection of operations that provides access to one or more datasets or data processing functions"'}),". Here we can have, for example, an API."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"DCAT",src:t(2942).Z+"",width:"364",height:"314"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"raird-information-model",children:(0,a.jsx)(e.a,{href:"https://statswiki.unece.org/display/gsim/RAIRD+Information+Model+RIM+v1_0",children:"RAIRD Information Model"})}),"\n",(0,a.jsxs)(e.p,{children:["A Norwegian implementation of the international ",(0,a.jsx)(e.a,{href:"https://statswiki.unece.org/display/gsim/GSIM+v1.2+Communication+Paper",children:"GSIM"})," (General Statistical Information Model) standard. Designed to address the need to ",(0,a.jsx)(e.strong,{children:"describe statistical information"}),", this framework ",(0,a.jsx)(e.em,{children:'"provides a set of standardised, consistently described information objects, which can be used as inputs and outputs in the design and the production of statistics"'}),". It was created to facilitate making ",(0,a.jsx)(e.a,{href:"https://www.ssb.no/en/data-til-forskning",children:"Statistics Norway"})," data available for reserchers, for example through the ",(0,a.jsx)(e.a,{href:"https://www.microdata.no/en/",children:"microdata.no"})," portal and IDE."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"This level is where the Kudaf initiative concentrates"}),", because it enables the ",(0,a.jsx)(e.strong,{children:"description (through metadata) of all the data made publicly available"}),". The important concepts are:"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Variable"}),": Refers to ",(0,a.jsxs)(e.strong,{children:["the ",(0,a.jsx)(e.em,{children:"metadata"})," describing a ",(0,a.jsx)(e.em,{children:"minimalistic"})," unit of data"]})," that is useful for data analysis purposes. In order to make it ",(0,a.jsx)(e.em,{children:"minimalistic"})," and flexible for data analysis purposes we use a ",(0,a.jsx)(e.strong,{children:"datum-based data structure"})," (see description below)."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Unit identifier"}),": The unique identifier which singles out this unit of data."]}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"datum-based-data-structure",children:"Datum-based data structure"}),"\n",(0,a.jsxs)(e.p,{children:["A ",(0,a.jsx)(e.strong,{children:"multi-variable source dataset"}),", such that is commonly available from a data source, would be structured as ",(0,a.jsx)(e.a,{href:"https://statswiki.unece.org/display/gsim/RAIRD+Information+Model+RIM+v1_0#RAIRDInformationModelRIMv1_0-_Toc387424342",children:"GSIM Unit Data"}),":"]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"CASE_ID"}),(0,a.jsx)(e.th,{children:"DOB"}),(0,a.jsx)(e.th,{children:"MAR_STAT"}),(0,a.jsx)(e.th,{children:"GENDER"}),(0,a.jsx)(e.th,{children:"DATE_MAR"}),(0,a.jsx)(e.th,{children:"DATE_SEP"}),(0,a.jsx)(e.th,{children:"DATE_DIV"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"0937"}),(0,a.jsx)(e.td,{children:"1971-05-03"}),(0,a.jsx)(e.td,{children:"M"}),(0,a.jsx)(e.td,{children:"1"}),(0,a.jsx)(e.td,{children:"2003-08-04"}),(0,a.jsx)(e.td,{children:"-"}),(0,a.jsx)(e.td,{children:"-"})]})})]}),"\n",(0,a.jsxs)(e.p,{children:["This is the typical database structure that we know well, where the ",(0,a.jsx)(e.code,{children:"CASE_ID"})," field is the ",(0,a.jsx)(e.strong,{children:"identifier"})," (primary key) field for the whole row. ",(0,a.jsxs)(e.strong,{children:["The value found in a cell of that row would constitute a single ",(0,a.jsx)(e.a,{href:"https://statswiki.unece.org/display/clickablegsim/Datum",children:"DATUM"})]}),", i.e. the value that populates a ",(0,a.jsx)(e.strong,{children:"Data Point"}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"datum_concept_group",src:t(457).Z+"",width:"92",height:"165"})}),"\n",(0,a.jsxs)(e.p,{children:["In order to provide maximum ",(0,a.jsx)(e.strong,{children:"flexibility"})," to the data researcher, we could ",(0,a.jsxs)(e.strong,{children:["decompose this multi-variable dataset into stand-alone, SINGLE-VARIABLE DATASETS expressed in a ",(0,a.jsx)(e.em,{children:"datum-based"})," model"]}),". For example, the above information on the Marital Status alone could be expressed as:"]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"IDENTIFIER"}),(0,a.jsx)(e.th,{children:"VAR_REF"}),(0,a.jsx)(e.th,{children:"VALUE"}),(0,a.jsx)(e.th,{children:"START_DATE"}),(0,a.jsx)(e.th,{children:"END_DATE"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"0937"}),(0,a.jsx)(e.td,{children:"MAR_STAT"}),(0,a.jsx)(e.td,{children:"M"}),(0,a.jsx)(e.td,{children:"2003-08-04"}),(0,a.jsx)(e.td,{children:"-"})]})})]}),"\n",(0,a.jsx)(e.p,{children:"In fact we could model the entire multi-variable table from above according to the datum-based approach like this:"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"IDENTIFIER"}),(0,a.jsx)(e.th,{children:"VAR_REF"}),(0,a.jsx)(e.th,{children:"VALUE"}),(0,a.jsx)(e.th,{children:"START_DATE"}),(0,a.jsx)(e.th,{children:"END_DATE"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"0937"}),(0,a.jsx)(e.td,{children:"DOB"}),(0,a.jsx)(e.td,{children:"1971-05-03"}),(0,a.jsx)(e.td,{children:"1971-05-03"}),(0,a.jsx)(e.td,{children:"-"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"0937"}),(0,a.jsx)(e.td,{children:"MAR_STAT"}),(0,a.jsx)(e.td,{children:"M"}),(0,a.jsx)(e.td,{children:"2003-08-04"}),(0,a.jsx)(e.td,{children:"-"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"0937"}),(0,a.jsx)(e.td,{children:"GENDER"}),(0,a.jsx)(e.td,{children:"1"}),(0,a.jsx)(e.td,{children:"1971-05-03"}),(0,a.jsx)(e.td,{children:"-"})]})]})]}),"\n",(0,a.jsxs)(e.p,{children:["Each such ",(0,a.jsxs)(e.strong,{children:[(0,a.jsx)(e.em,{children:"datum"})," constitures the ",(0,a.jsx)(e.em,{children:"minimalistic unit of data"})]})," we were refering to above."]}),"\n",(0,a.jsxs)(e.p,{children:["And in order ",(0,a.jsxs)(e.strong,{children:["to ",(0,a.jsx)(e.em,{children:"describe"})," the data contained within the ",(0,a.jsx)(e.em,{children:"datum"})," we define a Variable"]}),". We use the siimple term Variable to refer thus to a Single-Variable Dataset."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsxs)(e.strong,{children:["A ",(0,a.jsx)(e.a,{href:"https://statswiki.unece.org/display/clickablegsim/Variable",children:"VARIABLE"})," combines the meaning of a Concept with a Unit Type, to define the characteristic that is to be measured"]}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Finally, the ",(0,a.jsx)(e.strong,{children:"metadata models for the Variable and for the Dataset are linked"})," as shown below:"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Simple Kudaf Metadata Model",src:t(7805).Z+"",width:"539",height:"433"})}),"\n",(0,a.jsx)(e.hr,{})]})}function h(l={}){const{wrapper:e}={...(0,d.a)(),...l.components};return e?(0,a.jsx)(e,{...l,children:(0,a.jsx)(r,{...l})}):r(l)}},457:(l,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAClCAYAAADRcpqJAAAAAXNSR0IArs4c6QAAEDx0RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJFbGVjdHJvbiUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMy0wNC0xM1QwOSUzQTU3JTNBMDcuNDg3WiUyMiUyMGFnZW50JTNEJTIyTW96aWxsYSUyRjUuMCUyMChYMTElM0IlMjBMaW51eCUyMHg4Nl82NCklMjBBcHBsZVdlYktpdCUyRjUzNy4zNiUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBkcmF3LmlvJTJGMjEuMS4yJTIwQ2hyb21lJTJGMTA2LjAuNTI0OS4xOTklMjBFbGVjdHJvbiUyRjIxLjQuMyUyMFNhZmFyaSUyRjUzNy4zNiUyMiUyMGV0YWclM0QlMjJ3OUIxMjRHYnUwR1RpLXZxLU9XNiUyMiUyMHZlcnNpb24lM0QlMjIyMS4xLjIlMjIlMjB0eXBlJTNEJTIyZGV2aWNlJTIyJTNFJTBBJTIwJTIwJTNDZGlhZ3JhbSUyMG5hbWUlM0QlMjJQYWdlLTElMjIlMjBpZCUzRCUyMjhBWURlLWFxTHVoYTk1RGRfQVJOJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTNDbXhHcmFwaE1vZGVsJTIwZHglM0QlMjI5MzQlMjIlMjBkeSUzRCUyMjQxNCUyMiUyMGdyaWQlM0QlMjIxJTIyJTIwZ3JpZFNpemUlM0QlMjIxMCUyMiUyMGd1aWRlcyUzRCUyMjElMjIlMjB0b29sdGlwcyUzRCUyMjElMjIlMjBjb25uZWN0JTNEJTIyMSUyMiUyMGFycm93cyUzRCUyMjElMjIlMjBmb2xkJTNEJTIyMSUyMiUyMHBhZ2UlM0QlMjIxJTIyJTIwcGFnZVNjYWxlJTNEJTIyMSUyMiUyMHBhZ2VXaWR0aCUzRCUyMjg1MCUyMiUyMHBhZ2VIZWlnaHQlM0QlMjIxMTAwJTIyJTIwbWF0aCUzRCUyMjAlMjIlMjBzaGFkb3clM0QlMjIwJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTNDcm9vdCUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyMCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMjAlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMmRUc3kwTHFCZGlrSU1nbFV5ZkFfLTIlMjIlMjB2YWx1ZSUzRCUyMiUyNmx0JTNCcCUyMHN0eWxlJTNEJTI2cXVvdCUzQm1hcmdpbiUzQTBweCUzQm1hcmdpbi10b3AlM0E0cHglM0J0ZXh0LWFsaWduJTNBY2VudGVyJTNCJTI2cXVvdCUzQiUyNmd0JTNCJTI2bHQlM0JiJTI2Z3QlM0JEYXR1bSUyNmx0JTNCJTJGYiUyNmd0JTNCJTI2bHQlM0IlMkZwJTI2Z3QlM0IlMjZsdCUzQmhyJTIwc2l6ZSUzRCUyNnF1b3QlM0IxJTI2cXVvdCUzQiUyNmd0JTNCJTI2bHQlM0JkaXYlMjBzdHlsZSUzRCUyNnF1b3QlM0JoZWlnaHQlM0EycHglM0IlMjZxdW90JTNCJTI2Z3QlM0IlMjZsdCUzQiUyRmRpdiUyNmd0JTNCJTIyJTIwc3R5bGUlM0QlMjJ2ZXJ0aWNhbEFsaWduJTNEdG9wJTNCYWxpZ24lM0RsZWZ0JTNCb3ZlcmZsb3clM0RmaWxsJTNCZm9udFNpemUlM0QxMiUzQmZvbnRGYW1pbHklM0RIZWx2ZXRpY2ElM0JodG1sJTNEMSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCZmlsbENvbG9yJTNEJTIzOTlGRkZGJTNCJTIyJTIwdmVydGV4JTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMjElMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteEdlb21ldHJ5JTIweCUzRCUyMjQwJTIyJTIweSUzRCUyMjE2MCUyMiUyMHdpZHRoJTNEJTIyOTAlMjIlMjBoZWlnaHQlM0QlMjI1MCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteENlbGwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMmRUc3kwTHFCZGlrSU1nbFV5ZkFfLTMlMjIlMjB2YWx1ZSUzRCUyMiUyNmx0JTNCcCUyMHN0eWxlJTNEJTI2cXVvdCUzQm1hcmdpbiUzQTBweCUzQm1hcmdpbi10b3AlM0E0cHglM0J0ZXh0LWFsaWduJTNBY2VudGVyJTNCJTI2cXVvdCUzQiUyNmd0JTNCJTI2bHQlM0JiJTI2Z3QlM0JEYXRhJTIwUG9pbnQlMjZsdCUzQiUyRmIlMjZndCUzQiUyNmx0JTNCJTJGcCUyNmd0JTNCJTI2bHQlM0JociUyMHNpemUlM0QlMjZxdW90JTNCMSUyNnF1b3QlM0IlMjZndCUzQiUyNmx0JTNCZGl2JTIwc3R5bGUlM0QlMjZxdW90JTNCaGVpZ2h0JTNBMnB4JTNCJTI2cXVvdCUzQiUyNmd0JTNCJTI2bHQlM0IlMkZkaXYlMjZndCUzQiUyMiUyMHN0eWxlJTNEJTIydmVydGljYWxBbGlnbiUzRHRvcCUzQmFsaWduJTNEbGVmdCUzQm92ZXJmbG93JTNEZmlsbCUzQmZvbnRTaXplJTNEMTIlM0Jmb250RmFtaWx5JTNESGVsdmV0aWNhJTNCaHRtbCUzRDElM0J3aGl0ZVNwYWNlJTNEd3JhcCUzQmZpbGxDb2xvciUzRCUyMzk5RkZGRiUzQiUyMiUyMHZlcnRleCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjIxJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMHglM0QlMjI0MCUyMiUyMHklM0QlMjI0NyUyMiUyMHdpZHRoJTNEJTIyOTAlMjIlMjBoZWlnaHQlM0QlMjI1MCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteENlbGwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMmRUc3kwTHFCZGlrSU1nbFV5ZkFfLTUlMjIlMjB2YWx1ZSUzRCUyMmhhcyUyMiUyMHN0eWxlJTNEJTIyZW5kQXJyb3clM0RvcGVuJTNCaHRtbCUzRDElM0JlbmRTaXplJTNEMTIlM0JzdGFydEFycm93JTNEZGlhbW9uZFRoaW4lM0JzdGFydFNpemUlM0QxNCUzQnN0YXJ0RmlsbCUzRDElM0JlZGdlU3R5bGUlM0RvcnRob2dvbmFsRWRnZVN0eWxlJTNCYWxpZ24lM0RsZWZ0JTNCdmVydGljYWxBbGlnbiUzRGJvdHRvbSUzQnJvdW5kZWQlM0QwJTNCZW50cnlYJTNEMC41JTNCZW50cnlZJTNEMCUzQmVudHJ5RHglM0QwJTNCZW50cnlEeSUzRDAlM0IlMjIlMjBlZGdlJTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMjElMjIlMjB0YXJnZXQlM0QlMjJkVHN5MExxQmRpa0lNZ2xVeWZBXy0yJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMHglM0QlMjIwLjM2ODIlMjIlMjB5JTNEJTIyLTUlMjIlMjByZWxhdGl2ZSUzRCUyMjElMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhQb2ludCUyMHglM0QlMjI4NC42NiUyMiUyMHklM0QlMjI5NyUyMiUyMGFzJTNEJTIyc291cmNlUG9pbnQlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteFBvaW50JTIweCUzRCUyMjIxMCUyMiUyMHklM0QlMjIxMTAlMjIlMjBhcyUzRCUyMnRhcmdldFBvaW50JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDQXJyYXklMjBhcyUzRCUyMnBvaW50cyUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214UG9pbnQlMjBhcyUzRCUyMm9mZnNldCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQyUyRm14R2VvbWV0cnklM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAl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"},2942:(l,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/dcat_catalog_dataset_dataservice-e512af509a3aaccfa1756d0d6ae5b4c4.png"},7805:(l,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/kudaf_metadata_model_simple-22487ebb4dc0d9b99329e7a1b2ea31ba.png"},1151:(l,e,t)=>{t.d(e,{Z:()=>n,a:()=>M});var a=t(7294);const d={},s=a.createContext(d);function M(l){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof l?l(e):{...e,...l}}),[e,l])}function n(l){let e;return e=l.disableParentContext?"function"==typeof l.components?l.components(d):l.components||d:M(l.components),a.createElement(s.Provider,{value:e},l.children)}}}]);