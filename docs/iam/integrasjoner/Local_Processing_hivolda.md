---
title: Local Processing - Høgskulen i Volda
---

## G3_Local_Processing 

### PortalLdapToGoogle on 
 #### Description
This script synchronizes user data from a portal directory to Google. It processes user records, performs necessary transformations, and updates or creates user accounts in Google. The script also handles enabling, disabling, renaming, and moving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `uhid`, `uh-username` (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `process_all`: Boolean (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionPortal`: Connection object for Cloud Portal.
- `sessionMV`: Connection object for MV (RIDB).
- `sessionGoogle`: Connection object for Google.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedSystemEntitlementsProvisioned`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToGoogle`: Boolean indicating if the user is entitled to Google.
- `hasGoogleAsBirthright`: Boolean indicating if the user has Google as a birthright.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `primaryOrgUnit`: The primary organizational unit of the user.
- `record`: The record formatted for provisioning to Google.
- `exists`: Boolean indicating if the user exists in Google.
- `recordGoogle`: The Google record of the user.
- `recordDisable`: The record used to disable the user in Google.
- `recordAdd`: The record used to add attributes in Portal LDAP.
- `recordRemove`: The record used to remove attributes in Portal LDAP.
- `extProperties`: Extended properties for the user.
- `hasChanges`: Boolean indicating if there are changes in the record.
- `fieldNames`: The field names of the changes.
- `result`: The result of the API call.
- `aliasResult`: The result of adding an alias in Google.
- `personalGoogleSession`: The personal Google session for the user.
- `recordSendAsEmail`: The record used to set the sendAsEmail attribute in Google.
- `attempts`: The number of attempts made to add the sendAsEmail attribute.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP, Cloud Portal, MV, and Google.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

4. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

5. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

6. **Transform Record**
- Perform static and dynamic transformations on the record.
- Set various attributes like `id`, `userName`, `primaryEmail`, `suspended`, etc.
- Remove attributes that should not be provisioned to Google.

7. **Match and Update Google**
- **Check Existence in Google**:
    - Check if the user exists in Google.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Google and is entitled to Google, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Google, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP, Cloud Portal, MV, and Google.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used to fetch password policies and generate passwords.
- **MV (RIDB)**: Used to query organizational levels.
- **Google**: The target system where user accounts are created, updated, enabled, disabled, moved, and renamed.

#### Response Codes/Outputs
- Return a `200 OK` response if the operation to synchronize the user data was successful.

#### Summary
This script synchronizes user data from a portal directory to Google. It handles various operations such as creating, updating, enabling, disabling, moving, and renaming user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 


### PortalLdapToLdap on 
 #### Description
This script synchronizes user data from a portal directory to Feide LDAP. It processes user records, performs necessary transformations, and updates or creates user accounts in Feide LDAP. The script also handles enabling, disabling, renaming, and moving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalDelete`, `totalDeleteFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionPortal`: Connection object for Cloud Portal.
- `sessionMV`: Connection object for MV (RIDB).
- `sessionLDAP`: Connection object for Feide LDAP.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedEntitlementsProvisioned`, `arrBusRoles`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToLDAP`, `isEntitledToLDAPByRequestable`: Booleans indicating if the user is entitled to LDAP.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `primaryAffiliation`: The primary affiliation of the user.
- `record`: The record formatted for provisioning to LDAP.
- `orgLevels`, `orgUnitDN`, `orgUnitFullname`, `orgUnit`: Organizational levels and unit details.
- `correctDN`: The correct distinguished name for the user.
- `fieldNames`: The field names of the changes.
- `exists`: Boolean indicating if the user exists in LDAP.
- `recordFeideLDAP`: The Feide LDAP record of the user.
- `extProperties`: Extended properties for the user.
- `changes`: The changes detected in the record.
- `field`: The current field being processed.
- `recordAdd`, `recordRemove`: Records for adding and removing attributes.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP, Cloud Portal, MV, and Feide LDAP.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

4. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

5. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

6. **Transform Record**
- Perform static and dynamic transformations on the record.
- Set various attributes like `cn`, `employeeType`, `department`, `title`, etc.
- Remove attributes that should not be provisioned to LDAP.

7. **Match and Update LDAP**
- **Check Existence in LDAP**:
    - Check if the user exists in LDAP.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in LDAP and is entitled to LDAP, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in LDAP, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP, Cloud Portal, MV, and Feide LDAP.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used to fetch password policies and generate passwords.
- **MV (RIDB)**: Used to query organizational levels.
- **Feide LDAP**: The target system where user accounts are created, updated, enabled, disabled, moved, and renamed.

#### Response Codes/Outputs
- Return a `true` value if the operation was successful.

#### Summary
This script synchronizes user data from a portal directory to Feide LDAP. It handles various operations such as creating, updating, enabling, disabling, moving, and renaming user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 


### OfficeLocationToPortalLDAP on 
 #### Description
This script synchronizes office location data from an Office Location database to a Portal LDAP directory. It processes user records, performs necessary transformations, and updates or creates user records in the Portal LDAP. The script also handles logging and error handling based on specific conditions.

#### Input Parameters
- `ansattnr`: The employee number (optional).
- `log_only`: Boolean indicating if the script should only log changes without applying them (optional).
- `process`: Enum: `all`, `today` (optional).
- `debug`: Boolean indicating if debug information should be logged (optional).

#### Local Variables
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionOfficeLocation`: Connection object for the Office Location database.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from the Office Location database.
- `recordOffice`: The current record being processed from the Office Location database.
- `recordLDAP`: Detailed LDAP record of the current user.
- `newrecord`: The new record to be created or updated in Portal LDAP.
- `ldapAddArr`, `ldapAddArrBuilding`, `ldapAddArrOfficeNr`: Arrays and variables for handling LDAP address attributes.
- `hasRecordChanged`: Boolean indicating if the record has changed.
- `saveResult`: Result of the save operation to LDAP.
- `extProperties`: Extended properties for the user.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.

2. **Create Connections**
- Establish connections to the Office Location database and Portal LDAP.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on the `log_only` parameter.

4. **Query Records**
- Fetch records from the Office Location database based on `ansattnr` or `process` parameters.
- If no specific key is provided, use a change iterator to fetch records.

5. **Iterate Over Records**
- For each record, fetch the corresponding LDAP record from Portal LDAP.
- Skip if essential attributes are missing.
- Log processing information.

6. **Transform Record**
- Perform necessary transformations on the record.
- Set various attributes like `idautoPersonWorkStreetAddress`.
- Remove attributes that should not be provisioned to LDAP.

7. **Check and Update LDAP**
- **Check Existence in LDAP**:
    - Check if the user exists in LDAP.
    - Handle errors and missing records.
- **Update Existing Record**:
    - If the user exists in LDAP, compare changes and update the record if necessary.
    - Log the update process and handle errors.

8. **Close Connections**
- Close all established connections to the Office Location database and Portal LDAP.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Office Location Database**: Used to fetch user records and update user attributes.
- **Portal LDAP**: The target system where user records are created, updated, and logged.

#### Response Codes/Outputs
- The script returns `true` if the operation was successful, `false` otherwise.

#### Summary
This script synchronizes office location data from an Office Location database to a Portal LDAP directory. It handles various operations such as creating, updating, and logging user records based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 


### PortalLDAPToOfficePhone on 
 #### Description
This script synchronizes user data from a portal directory to an Office Phone database. It processes user records, performs necessary transformations, and updates or creates user accounts in the Office Phone database. The script also handles enabling, disabling, and updating user phone numbers based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `idautoID`, `uh-username` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean (optional)
- `process_total`: Number (optional)
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionOfficePhone`: Connection object for Office Phone database.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedEntitlementsProvisioned`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToOfficePhone`: Boolean indicating if the user is entitled to an office phone.
- `selectedUsername`, `selectedEmail`: The username and email address selected for the user.
- `payrollID`, `payrollIDWithout`: The payroll ID of the user.
- `exists`: Boolean indicating if the user exists in the Office Phone database.
- `availableNumber`: The available phone number for the user.
- `updateSql`, `queryAvailableNumber`, `resultsAvailableNumber`, `updateNumberResult`: SQL queries and their results.
- `releaseDate`: The release date for the phone number.
- `recordAdd`, `recordUpdate`, `recordRemove`: Records for adding, updating, and removing user data.
- `extProperties`: Extended properties for the user.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP and Office Phone database.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

4. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

5. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

6. **Match and Update Office Phone Database**
- **Check Existence in Office Phone Database**:
    - Check if the user exists in the Office Phone database.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in the Office Phone database and is entitled to an office phone, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in the Office Phone database, compare changes and update the account if necessary.
    - Handle enabling, disabling, and updating the phone number based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

7. **Close Connections**
- Close all established connections to Portal LDAP and Office Phone database.

8. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Office Phone Database**: The target system where user phone numbers are created, updated, and disabled.

#### Response Codes/Outputs
- The script returns `true` if the synchronization process is successful, otherwise `false`.

#### Summary
This script synchronizes user data from a portal directory to an Office Phone database. It handles various operations such as creating, updating, and disabling user phone numbers based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 


### PortalLdapToSalto on 
 #### Description
This script synchronizes user data from a portal directory to Salto via API. It processes user records, performs necessary transformations, and updates or creates user accounts in Salto. The script also handles enabling, disabling, renaming, and moving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)
- `processByGroupName`: String (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedEntitlementsProvisioned`, `arrBusinessRoles`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToSalto`: Boolean indicating if the user is entitled to Salto.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `primaryAffiliation`: The primary affiliation of the user.
- `record`: The record formatted for provisioning to Salto.
- `arrCalculatedAccessZones`, `arrCalculatedAccessZonesTemp`, `arrExistingAccessZones`, `arrAccessZonesToAdd`, `arrAccessZonesToRemove`, `arrAccessZonesToKeep`: Arrays for handling access zones.
- `hasAccessZoneChanges`: Boolean indicating if there are changes in access zones.
- `changes`: The changes detected in the record.
- `fieldNames`: The field names of the changes.
- `exists`: Boolean indicating if the user exists in Salto.
- `recordSalto`: The Salto record of the user.
- `recordTemp`: Temporary record for processing.
- `extProperties`: Extended properties for the user.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP and MV.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

4. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

5. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

6. **Transform Record**
- Perform static and dynamic transformations on the record.
- Set various attributes like `FirstName`, `LastName`, `GPF1`, `GPF2`, `GPF3`, `GPF4`, `IsBanned`, etc.
- Remove attributes that should not be provisioned to Salto.

7. **Match and Update Salto**
- **Check Existence in Salto**:
    - Check if the user exists in Salto.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Salto and is entitled to Salto, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Salto, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP and MV.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query user roles and affiliations.
- **Salto**: The target system where user accounts are created, updated, enabled, disabled, moved, and renamed.

#### Response Codes/Outputs
- Return a `true` response if the operation to synchronize the user data was successful.

#### Summary
This script synchronizes user data from a portal directory to Salto via API. It handles various operations such as creating, updating, enabling, disabling, moving, and renaming user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 

