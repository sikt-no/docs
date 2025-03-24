---
title: Active Directory
---

## PortalLdapToAD
 ### Description
This script synchronizes user data from a portal directory to Active Directory (AD). It processes user records, performs necessary transformations, and updates or creates user accounts in AD. The script also handles enabling, disabling, renaming, and moving user accounts based on specific conditions.

### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)

### Local Variables
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `institution`: The institution name from global settings.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalEnable`, `totalEnableFail`, `totalDisable`, `totalDisableFail`, `totalMove`, `totalMoveFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionPortal`: Connection object for Cloud Portal.
- `sessionMV`: Connection object for MV (RIDB).
- `sessionAD`: Connection object for Active Directory.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrSystemEntitlements`, `arrSystemEntitlementsProvisioned`, `arrRequestedEntitlements`, `arrRequestedEntitlementsProvisioned`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToAD`: Boolean indicating if the user is entitled to AD.
- `isProvisionedToAD`: Boolean indicating if the user is provisioned to AD.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `hasReservationFlag`: Boolean indicating if the user has a reservation flag.
- `title`, `englishTitle`: The job title and its English version of the user.
- `affiliation`: The affiliation of the user.
- `primaryAffiliation`: The primary affiliation of the user.
- `arrAffiliations`: Array of affiliations for the user.
- `record`: The record formatted for provisioning to AD.
- `cn`: The common name of the user.
- `orgLevels`: Organizational levels fetched from MV.
- `orgLevel`: The formatted organizational level.
- `stedkode`: The location code.
- `arrBusinessroles`: Array of business roles for the user.
- `extensionAttribute10`, `extensionAttribute11`: Extension attributes for the user.
- `splitDeptCode`: Split department code.
- `facultyValue`, `instituteValue`, `groupValue`: Values for faculty, institute, and group.
- `campusShortName`: Short name for the campus.
- `heldBy`: Identifier for the held by field.
- `extensionAttribute6`: Extension attribute for the user.
- `fullNameEmailAddress`: The full name email address for the user.
- `fneaCreated`: Boolean indicating if the full name email address was created.
- `recordManager`: The LDAP record of the user's manager.
- `managerUsername`: The username of the user's manager.
- `recordADManagers`: The AD records of the user's manager.
- `arrFieldNames`: Array of field names in the record.
- `exists`: Boolean indicating if the user exists in AD.
- `adRecord`: The AD record of the user.
- `arrProxyAddresses`: Array of proxy addresses for the user.
- `passwordPolicy`: The password policy ID.
- `password`: The generated password for the user.
- `extProperties`: Extended properties for the user.
- `changes`: The changes detected in the record.
- `fieldNames`: The field names of the changes.
- `isDisabledInAD`: Boolean indicating if the user is disabled in AD.
- `currentPlacement`, `newPlacement`: The current and new placements of the user in AD.

### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Verify Ruleset**
- Check if the ruleset file exists.
- Log an error and return false if the file does not exist.

3. **Create Connections**
- Establish connections to Portal LDAP, Cloud Portal, MV, and AD.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

4. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

5. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

6. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

7. **Transform Record**
- Perform static and dynamic transformations on the record.
- Set various attributes like `cn`, `employeeType`, `department`, `title`, etc.
- Remove attributes that should not be provisioned to AD.

8. **Match and Update AD**
- **Check Existence in AD**:
    - Check if the user exists in AD.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in AD and is entitled to AD, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in AD, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

9. **Close Connections**
- Close all established connections to Portal LDAP, Cloud Portal, MV, and AD.

10. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used to fetch password policies and generate passwords.
- **MV (RIDB)**: Used to query organizational levels.
- **Active Directory (AD)**: The target system where user accounts are created, updated, enabled, disabled, moved, and renamed.

### Response Codes/Outputs
- None explicitly mentioned.

### Summary
This script synchronizes user data from a portal directory to Active Directory. It handles various operations such as creating, updating, enabling, disabling, moving, and renaming user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 
