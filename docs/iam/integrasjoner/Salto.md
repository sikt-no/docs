---
title: Salto
---

## PortalLdapToSalto
 ### Description
This script synchronizes user data from a portal directory to Salto via API. It processes user records, performs necessary transformations, and updates or creates user accounts in Salto. The script also handles enabling, disabling, and renaming user accounts based on specific conditions.

### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean
- `process_total`: Number (optional)
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)
- `processByGroupName`: String (optional)

### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `processedAccounts`: Array to keep track of processed accounts.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `selectedUsername`, `selectedEmail`: The username and email selected for the user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedEntitlementsProvisioned`, `arrBusinessRoles`: Arrays of entitlements and roles for the user.
- `isEntitledToSalto`: Boolean indicating if the user is entitled to Salto.
- `primaryAffiliation`: The primary affiliation of the user.
- `record`: The record formatted for provisioning to Salto.
- `firstName`, `lastName`: The first name and last name of the user.
- `employeeNumber`, `studentNumber`: The employee and student numbers of the user.
- `arrCalculatedAccessZones`, `arrCalculatedAccessZonesTemp`: Arrays of calculated access zones for the user.
- `exists`: Array indicating if the user exists in Salto.
- `recordSalto`, `recordTemp`: Temporary records for Salto operations.
- `changes`: The changes detected in the record.
- `arrExistingAccessZones`, `arrAccessZonesToAdd`, `arrAccessZonesToRemove`: Arrays for handling access zone changes.

### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP and MV.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

4. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value` or `processByGroupName`.
- If no specific key is provided, use a change iterator to fetch records.

5. **Fetch Access Zones**
- Fetch the access zones controlled by RI from JSON files.

6. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

7. **Transform Record**
- Perform static and dynamic transformations on the record.
- Set various attributes like `FirstName`, `LastName`, `GPF1`, `GPF2`, `GPF3`, `GPF4`, `IsBanned`, etc.
- Calculate the user's access zones.

8. **Match and Update Salto**
- **Check Existence in Salto**:
    - Check if the user exists in Salto.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Salto and is entitled to Salto, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Salto, compare changes and update the account if necessary.
    - Handle enabling, disabling, and access zone changes based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.
- **Disable Account**:
    - If the user exists in Salto but is not entitled, disable the account and remove access zones where RI is authoritative.
    - Log the disable process and update Portal LDAP accordingly.

9. **Close Connections**
- Close all established connections to Portal LDAP and MV.

10. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query user roles and affiliations.
- **Salto**: The target system where user accounts are created, updated, and disabled.

### Response Codes/Outputs
- None explicitly mentioned.

### Summary
This script synchronizes user data from a portal directory to Salto via API. It handles various operations such as creating, updating, enabling, disabling, and renaming user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 