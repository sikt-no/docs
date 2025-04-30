---
title: IknowBase
---

## PortalLdapToIKnowBase
 ### Description
This script provisions user data to the target system iKnowBase. It processes user records, performs necessary transformations, and updates or creates user accounts and personcards in iKnowBase. The script also handles enabling, disabling, and deprovisioning user accounts based on specific conditions.

### Input Parameters
- `key_field`: Enum: `idautoID`, `uh-un`, `username` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean (optional)
- `debug`: Boolean

### Local Variables
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`, `totalDelete`, `totalDeleteFail`: Counters for tracking various operations and their outcomes.
- `arrayProcessedAccounts`: Array to keep track of processed accounts.
- `institution`: The name of the institution.
- `institutionNumber`: The institution number.
- `policyFile`: Path to the JSON policy file.
- `todayDate`: The current date formatted as `yyyy-MM-dd`.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionPortal`: Connection object for Cloud Portal.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `recordUser`, `recordPersoncard`: Copies of the LDAP record for transformations.
- `arraySystemEntitlements`, `arrayProvisionedSystemEntitlements`, `arrayAppRoles7`: Arrays of system entitlements and provisioned entitlements for the user.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `isReserved`: Boolean indicating if the user is reserved from publishing.
- `arrayUserGroups`: Array of user groups.
- `arrayMGMUG`: Array of MG and MUG for Personcard-provisioning rules.
- `arrayAuthorizedAccesses`: Array of authorized accesses.
- `isAuthorized`, `isAuthorizedPersoncard`: Booleans indicating if the user is authorized for iKnowBase and personcard.
- `resultIKBUser`, `resultIKBPersoncard`: Results of querying iKnowBase for user and personcard.
- `recordAdd`, `recordRemove`: Records for adding or removing attributes in Portal LDAP.
- `hasRecordChange`, `hasPersoncardChanged`: Booleans indicating if the record has changed.
- `disableResult`, `resultDeactivatePersoncard`: Results of disabling user and personcard in iKnowBase.
- `addResult`, `removeResult`: Results of modifying LDAP records.

### Workflow
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
- Set various attributes like `firstname`, `lastname`, `email`, `username`, `groups`, etc.
- Remove attributes that should not be provisioned to iKnowBase.

7. **Auth Engine**
- Determine authorized accesses based on the policy file.
- Set `isAuthorized` and `isAuthorizedPersoncard` based on the authorized accesses.

8. **Query iKnowBase**
- Query iKnowBase for user and personcard.
- Handle errors and log results.

9. **Provision/Deprovision**
- **Provision**:
    - Create or update user and personcard in iKnowBase if authorized and record has changed.
    - Log the creation or update process and update Portal LDAP with provisioning status.
- **Deprovision**:
    - Disable user and personcard in iKnowBase if not authorized.
    - Log the deprovisioning process and update Portal LDAP with deprovisioning status.

10. **Close Connections**
- Close all established connections to Portal LDAP and Cloud Portal.

11. **Log Results**
- Log the results of the provisioning process, including totals for each operation and failures.

### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used to define connections and handle policies.
- **iKnowBase**: The target system where user accounts and personcards are created, updated, and disabled.

### Response Codes/Outputs
- None explicitly mentioned.

## Summary
This script provisions user data to the target system iKnowBase. It handles various operations such as creating, updating, enabling, disabling, and deprovisioning user accounts and personcards based on specific conditions. The script ensures data consistency and logs detailed results of the provisioning process. 

This text was generated by AI. 

 --- 