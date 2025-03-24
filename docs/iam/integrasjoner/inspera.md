---
title: Inspera
---

## PortalLDAPToInspera
 ### Description
This script provisions user accounts in Inspera based on data from Portal LDAP. It processes user records, performs necessary transformations, and updates or creates user accounts in Inspera. The script also handles enabling, disabling, and reporting based on specific conditions.

## Input Parameters
- `key_field`: String (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `report_file`: Boolean (optional)
- `debug`: Boolean (optional)

## Local Variables
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalEnable`, `totalEnableFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `policyFile`: The file containing the Inspera ruleset.
- `orgsFile`: The file containing the Inspera organizations.
- `processedAccounts`: Array to store processed accounts.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `headers`: Record to store HTTP headers for Inspera authentication.
- `sessionPortal`: Connection object for Cloud Portal.
- `fileName`, `fileOut`: Name and output object for the report file.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `record`: The record formatted for provisioning to Inspera.
- `selectedUsername`: The username selected for the user.
- `preferredEmail`, `preferredEmailType`: The preferred email and its type for the user.
- `isExternalSensor`, `preferIdPorten`, `preferPrivateEmail`: Booleans indicating specific user preferences.
- `externalUserIds`: Array of external user IDs for the user.
- `myFeideID`: The Feide ID of the user.
- `matchingTypes`: Dictionary of matching types for user lookup.
- `jsonRuleset`: JSON object containing the Inspera ruleset.
- `arrayAuthorizedAccesses`, `arrayCleanAuthorizedAccesses`: Arrays for authorized accesses.
- `jsonLDAP`, `jsonPerpetrator`, `jsonRequest`: JSON objects for LDAP data and authorization requests.
- `isAuthorised`: Boolean indicating if the user is authorized.
- `recordInspera`: The Inspera record of the user.
- `csvRecord`: Record for CSV reporting.
- `arraySystemEntitlements`, `arrayProvisionedSystems`, `arrayRequestedEntitlements`: Arrays of system entitlements and provisioned systems for the user.
- `arrayCurrentTargetAccesses`, `arrayProvisionedTargetAccesses`: Arrays for current and provisioned target accesses.
- `recordAdd`, `recordRemove`: Records for adding or removing LDAP attributes.

## Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP and Cloud Portal.
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
- Set various attributes like `email`, `userType`, `status`, etc.
- Append external user IDs to the record.

7. **Authorization Logic**
- Fetch and apply authorization rules from the Inspera ruleset.
- Determine authorized accesses and append them to the record.

8. **Query Inspera for User**
- Match user in Inspera based on priority: `pln`, `FeideID`, `fnr`, `private preferredEmail`.

9. **Save Record to Inspera**
- If the user does not exist in Inspera, create a new account.
- If the user exists, update the account with necessary changes.
- Handle enabling, disabling, and reporting based on user status and authorization.

10. **Close Connections**
- Close all established connections to Portal LDAP and Cloud Portal.

11. **Log Results**
- Log the results of the provisioning process, including totals for each operation and failures.

## External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used for additional user data and authentication.
- **Inspera**: The target system where user accounts are created, updated, and managed.

## Response Codes/Outputs
- None explicitly mentioned.

## Summary
This script provisions user accounts in Inspera based on data from Portal LDAP. It handles various operations such as creating, updating, enabling, and disabling user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the provisioning process. 

 --- 