---
title: Apex
---

## PortalLdapToApex
 ### Description
This script synchronizes user data from the Portal LDAP directory to the UiB Target - Apex system. It processes user records, performs necessary transformations, and updates or creates user accounts in Apex. The script also handles enabling, disabling, and updating user accounts based on specific conditions.

### Input Parameters
- `key_field`: String (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `report_file`: Boolean (optional)

### Local Variables
- `log_only`: Boolean indicating if the script should only log actions without making changes.
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalInsert`, `totalInsertFail`, `totalUpdate`, `totalUpdateFail`, `totalUpdateLDAP`, `totalUpdateLDAPFail`: Counters for tracking various operations and their outcomes.
- `errorHandlerTargetSystem`: The target system for error handling, set to "apex".
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionApex`: Connection object for Apex.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arraySystemEntitlements`, `arrayProvisionedSystems`: Arrays of system entitlements and provisioned systems for the user.
- `apexAuthorized`, `apexAlreadyProvisioned`: Booleans indicating if the user is authorized or already provisioned for Apex.
- `record`: The record formatted for provisioning to Apex.
- `arrayPersonerRecords`: Array of records for Apex personer.
- `selectedUsername`, `selectedEmail`: The username and email selected for the user.
- `idautoPersonAffiliations`: Array of affiliations for the user.
- `isEmployee`, `isLongTermGuest`, `isStudent`: Booleans indicating the user's affiliations.
- `apex_personer`, `apex_sted`, `apex_f_lonnsdag`, `apex_s_lonnsdag`, `apex_studenter`, `apex_telefon`: Records for various Apex tables.
- `exists`: Boolean indicating if the user exists in Apex.
- `arrayDuplicateEvaluation`, `arrayDeduplicatedPersoner`, `arrayPersonerEvaluator`, `arrayExistsEvaluator`: Arrays for evaluating duplicates and changes.
- `changeRequired`: Boolean indicating if changes are required.
- `recordAdd`, `recordRemove`: Records for adding or removing attributes in Portal LDAP.
- `tableNames`: Array of table names for deletion.
- `query`: SQL query for deletion.

### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `log_only` parameter if undefined.

2. **Create Connections**
- Establish connections to Portal LDAP and Apex.
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
- Set various attributes like `FORNAVN`, `ETTERNAVN`, `BRUKERNAVN`, `EPOST`, `STILLING`, `JOBBRANG`, `TJ_FORH`, `STEDKODE`, etc.
- Remove attributes that should not be provisioned to Apex.

7. **Match and Update Apex**
- **Check Existence in Apex**:
    - Check if the user exists in Apex.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Apex and is authorized, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Apex, compare changes and update the account if necessary.
    - Handle enabling, disabling, and updating of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP and Apex.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Apex**: The target system where user accounts are created, updated, and managed.

### Response Codes/Outputs
- None explicitly mentioned.

### Summary
This script synchronizes user data from the Portal LDAP directory to the UiB Target - Apex system. It handles various operations such as creating, updating, enabling, and disabling user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

This text was generated by AI. 

 --- 

