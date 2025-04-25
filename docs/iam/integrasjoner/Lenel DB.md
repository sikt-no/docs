---
title: Lenel DB
---

## PortalLdapToLenel 
 ### Description
This script handles the provisioning and deprovisioning of users in Lenel by updating the 'Bruker' table. It sets specific values into columns RecordRequest and RecordStatus. The script also interacts with the Portal LDAP and MetaVault (RIDB) to fetch user data and update the Lenel system accordingly.

### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean
- `debug`: Boolean (optional)

### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MetaVault (RIDB).
- `sessionLenel`: Connection object for Lenel.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedEntitlements`, `arrRequestedEntitlementsProvisioned`: Arrays of entitlements and provisioned entitlements for the user.
- `isEntitledToLenel`, `hasLenelAsBirthright`, `isProvisionedToLenel`: Booleans indicating the user's entitlements and provisioning status.
- `selectedUsername`: The username selected for the user.
- `hasReservationFlag`: Boolean indicating if the user has a reservation flag.
- `title`: The job title of the user.
- `arrUsernames`: Array of usernames for the user.
- `affiliations`: The affiliations of the user.
- `isActive`, `isEmployee`, `isStudent`: Booleans indicating the user's active status and roles.
- `record`: The record formatted for provisioning to Lenel.
- `firstName`, `lastName`: The first name and last name of the user.
- `exists`: Boolean indicating if the user exists in Lenel.
- `recordLenel`: The existing record in Lenel.
- `extProperties`: Extended properties for the user.
- `changes`: The changes detected in the record.

### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP, MetaVault, and Lenel.
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
- Set various attributes like `Bruker_ID`, `Fornavn`, `Etternavn`, `TypeBruker`, `Stilling`, etc.

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
- **Disable Account**:
    - If the user is not entitled to Lenel, set the account to 'deaktiver'.
    - Log the disable process and update Portal LDAP accordingly.

8. **Close Connections**
- Close all established connections to Lenel, Portal LDAP, and MetaVault.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MetaVault (RIDB)**: Used to query user roles and affiliations.
- **Lenel**: The target system where user accounts are created, updated, and disabled.

### Response Codes/Outputs
- None explicitly mentioned.

### Summary
This script handles the provisioning and deprovisioning of users in Lenel by updating the 'Bruker' table. It ensures data consistency and logs detailed results of the synchronization process. The script interacts with Portal LDAP and MetaVault to fetch user data and update the Lenel system accordingly. 

This text was generated by AI. 

 --- 