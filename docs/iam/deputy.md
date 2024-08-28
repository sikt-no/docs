---
title: Deputy
---

### SAP managers and deputies through autWf 

Include deputy as a supplement to the process of identifying a user’s manager.  

#### Background 
In many cases, the formal manager of an organisation has delegated tasks such as access approval to a deputy. In SAP, this information is stored in ‘autWf’ from DFO Organisation, containing an array of deputies.  

organisasjoner 




![](/img/iam/tekstboks3.png)

![](/img/iam/tekstboks4.png)



#### Solution 
The primary deputy is identified by the one autWf.bruker having autWf.type = ‘AZWF’ and autWf.type = ‘A290’. End date is evaluated run-time, if the date is earlier than today – or if there is no match on AZWF = A290, deputy is set to null.  

The construct of autWf.bruker is related to Ansatte.brukerident, which is by default NOT the employee number. In order for RI to resolve the identity of the deputy, the institution must allow RI to take control over Ansatte.brukerident by enabling writeback of this attribute through  
 
Global.sapWritebackEmployeeIDAsBrukerident=true 

The selected deputy (or the actual manager if null) is stored in idautoPersonExt13 (dn) in addition to whatever goes into idautoPersonExt12 (uhid) and manager (dn). This requires amendments to FnGetManager which is used by workflows to determine an adequate manager. 

#### Globals 
Global.sapUseDeputyAsApprover = true | false 

![](/img/iam/tekstboks5.png)



