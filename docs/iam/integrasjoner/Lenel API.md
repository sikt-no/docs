---
title: Lenel API
---

## PortalLdapToLenel
 ### Description
This script synchronizes user data from a portal directory to Lenel via API. It processes user records, performs necessary transformations, and updates or creates user accounts in Lenel. The script also handles enabling, disabling, and logging results based on specific conditions.

### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean
- `process_total`: Number (optional)
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)

### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `url`: The base URL for Lenel API.
- `processedAccounts`: Array to keep track of processed accounts.
- `lenelSessionToken`: Session token for Lenel API.
- `headers`: Record to store HTTP headers.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `selectedUsername`, `selectedEmail`: The username and email selected for the user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedEntitlementsProvisioned`, `arrBusinessRoles`: Arrays of entitlements and business roles for the user.
- `isEntitledToLenel`: Boolean indicating if the user is entitled to Lenel.
- `primaryAffiliation`: The primary affiliation of the user.
- `record`: The record formatted for provisioning to Lenel.
- `firstName`, `lastName`: The first name and last name of the user.
- `arrCalculatedAccessZones`: Array of calculated access zones for the user.
- `exists`: Array to store existing Lenel records.
- `arrIDs`: Array of IDs for the user.
- `recordLenel`: The Lenel record of the user.
- `changes`: The changes detected in the record.
- `extProperties`: Extended properties for the user.
- `recordBadge`: Record for creating a badge.
- `recordAdd`, `recordRemove`: Records for adding and removing attributes in Portal LDAP.
- `accessZoneUpdateSuccessful`: Boolean indicating if the access zone update was successful.
- `arrBadges`, `arrExistingAccessZones`, `arrAccessLevels`, `arrAccessZonesToAdd`, `arrAccessZonesToRemove`: Arrays for handling access zones.

### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Lenel, Portal LDAP, and MV.
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
- Set various attributes like `firstname`, `lastname`, `ssno`, `ext`, etc.

7. **Match and Update Lenel**
- **Check Existence in Lenel**:
    - Check if the user exists in Lenel.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Lenel and is entitled to Lenel, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Lenel, compare changes and update the account if necessary.
    - Handle enabling, disabling, and updating of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP and MV.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

### External Systems and Communications
- **Lenel**: The script interacts with the Lenel API to perform user account creation, updates, and access zone management.
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query user roles and affiliations.

### Response Codes/Outputs
- None explicitly mentioned.

### Summary
This script synchronizes user data from a portal directory to Lenel via API. It handles various operations such as creating, updating, enabling, disabling, and logging results based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

This text was generated by AI. 

 --- 
