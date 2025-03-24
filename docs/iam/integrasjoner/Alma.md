---
title: Alma
---

## PortalLdapToAlma
 ### Description
This script handles the provisioning and deprovisioning of employees to Alma (Bibsys). It processes user records, performs necessary transformations, and updates or creates user accounts in Alma. The script also handles enabling, disabling, moving, and deleting user accounts based on specific conditions.

### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean
- `debug`: Boolean (optional)

### Local Variables
- `actionsSetName`: The name of the current action set.
- `almaBaseUrl`: The base URL for Alma API.
- `institution`: The institution name.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDelete`, `totalDeleteFail`, `totalMove`, `totalMoveFail`: Counters for tracking various operations and their outcomes.
- `headers`: A record to store HTTP headers.
- `cookie`: The cookie used for LDAP change tracking.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrSystemEntitlements`, `arrSystemEntitlementsProvisioned`, `arrRequestedEntitlements`, `arrRequestedEntitlementsProvisioned`: Arrays of system entitlements and provisioned entitlements for the user.
- `almaEntitled`, `almaProvisioned`: Booleans indicating if the user is entitled to and provisioned in Alma.
- `selectedUsername`, `selectedEmail`: The username and email address selected for the user.
- `record`: The record formatted for provisioning to Alma.
- `workAddressObject`: The work address object in contact_info.
- `privatePostalCode`, `privateCity`, `privateAddress`, `privateMobile`: Private address and phone information.
- `arrUserIdentifier`: Array of user identifiers.
- `resultCampusCode`, `resultRsLibrary`, `resultUserGroup`, `resultUserRole`: Results from ruleset calculations.
- `recordAlma`: The Alma record of the user.
- `hasChanges`, `hasUserGroupChanges`: Booleans indicating if there are changes to be updated.
- `arrayAddress`, `arrayEmail`, `arrayPhone`: Arrays for contact information.
- `updateWorkAddress`, `updateWorkEmail`, `updateMobilePhone`, `updateOfficePhone`: Booleans indicating if contact information needs to be updated.
- `extProperties`: Extended properties for the user.

### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Define Headers**
- Set HTTP headers for Alma API requests.

3. **Check Global Configurations**
- Verify that necessary global variables for Alma are defined.

4. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

5. **Create Connections**
- Establish connections to Portal LDAP and MV.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

6. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

7. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

8. **Transform Record**
- Perform static and dynamic transformations on the record.
- Set various attributes like `record_type`, `name`, `primary_id`, `job_description`, etc.
- Define local attributes for later use in Create or Update operations.

9. **Match and Update Alma**
- **Check Existence in Alma**:
    - Check if the user exists in Alma.
    - Handle errors and missing users.
- **Create New Account**:
    - If the user does not exist in Alma and is entitled to Alma, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Alma, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.
- **Delete Account**:
    - If the user is disabled or lost Alma entitlement, delete the account or move to a student group.
    - Log the deletion process and update Portal LDAP.

10. **Close Connections**
- Close all established connections to Portal LDAP and MV.

11. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query user roles and affiliations.
- **Alma (Bibsys)**: The target system where user accounts are created, updated, moved, and deleted.

### Response Codes/Outputs
- None explicitly mentioned.

### Summary
This script handles the provisioning and deprovisioning of employees to Alma. It processes user records, performs necessary transformations, and updates or creates user accounts in Alma. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 