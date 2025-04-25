---
title: Google
---

## PortalLdapToGoogle
 ### Description
This script synchronizes user data from a portal directory to Google Workspace. It processes user records, performs necessary transformations, and updates or creates user accounts in Google Workspace. The script also handles enabling, disabling, renaming, and moving user accounts based on specific conditions.

### Input Parameters
- `key_field`: Enum: `username`, `uhid`, `uh-username` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean
- `process_total`: Number (optional)
- `process_all`: Boolean (optional)

### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionPortal`: Connection object for Cloud Portal.
- `sessionMV`: Connection object for MV (RIDB).
- `sessionGoogle`: Connection object for Google Workspace.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `selectedUsername`, `selectedEmail`: The username and email selected for the user.
- `primaryOrgUnit`: The primary organizational unit of the user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedSystemEntitlementsProvisioned`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToGoogle`, `hasGoogleAsBirthright`: Booleans indicating the user's entitlement to Google Workspace.
- `record`: The record formatted for provisioning to Google Workspace.
- `firstName`, `lastName`: The first name and last name of the user.
- `exists`: Boolean indicating if the user exists in Google Workspace.
- `recordGoogle`: The Google Workspace record of the user.
- `addUhMailAsAlias`, `addSendAsEmail`: Booleans indicating if the user's email should be added as an alias and send-as email.
- `hasChanges`: Boolean indicating if there are changes to be updated in Google Workspace.
- `recordDisable`: The record formatted for disabling the user in Google Workspace.

### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP, Cloud Portal, MV, and Google Workspace.
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
- Set various attributes like `id`, `userName`, `primaryEmail`, `givenName`, `familyName`, etc.

7. **Match and Update Google Workspace**
- **Check Existence in Google Workspace**:
    - Check if the user exists in Google Workspace.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Google Workspace and is entitled to Google Workspace, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Google Workspace, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.
- **Disable User**:
    - If the user exists in Google Workspace but is not entitled to Google Workspace, disable the user.
    - Log the disable process and update Portal LDAP accordingly.

8. **Close Connections**
- Close all established connections to Portal LDAP, Cloud Portal, MV, and Google Workspace.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

## External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used to fetch password policies and generate passwords.
- **MV (RIDB)**: Used to query organizational levels.
- **Google Workspace**: The target system where user accounts are created, updated, enabled, disabled, moved, and renamed.

### Response Codes/Outputs
- None explicitly mentioned.

### Summary
This script synchronizes user data from a portal directory to Google Workspace. It handles various operations such as creating, updating, enabling, disabling, moving, and renaming user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

This text was generated by AI. 

 --- 