---
title: TopDesk
---

## PortalLDAPToTopDesk 
 ### Description
This script synchronizes user data from the Portal LDAP directory to TopDesk. It processes user records, performs necessary transformations, and updates or creates user accounts in TopDesk. The script also handles enabling, disabling, and archiving user accounts based on specific conditions.

### Input Parameters
- `key_field`: String (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `report_file`: Boolean (optional)
- `debug`: Boolean (optional)
- `reprocess_all`: Boolean (optional)
- `reprocess_unprovisioned_users`: Boolean (optional)

### Local Variables
- `arrCountryCodesToStrip`: Array of country codes to strip from phone numbers.
- `targetSystem`: The target system, which is TopDesk.
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalEnable`, `totalEnableFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `policyFile`: The policy file for TopDesk ruleset.
- `processedAccounts`: Array to keep track of processed accounts.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `extraFieldAEntries`, `resultBranchRecords`, `resultDepartmentRecords`, `resultBudgetHolderRecords`, `resultArchivingReasons`: Arrays to store records fetched from TopDesk.
- `archivingReasonID`: ID for the archiving reason.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `isEntitled`, `isProvisioned`, `isEntitledReq`, `isProvisionedReq`: Booleans indicating the user's entitlements and provisioning status.
- `selectedUsername`, `selectedEmail`: The username and email selected for the user.
- `roles`: Array of roles for the user.
- `optionalFields1`: Record for optional fields.
- `personExtraFieldA`, `branch`, `department`, `budgetHolder`, `recordManager`, `recordPrivateDetails`: Records for various attributes.
- `currentID`, `recordTopDesk`, `isArchived`, `currentOperatorID`, `recordTopDeskOperator`, `isOperatorArchived`, `arrayEntitlementsSucessfullyProvisioned`, `recordEntitlementsSucessfullyDeprovisioned`: Variables for handling TopDesk records and statuses.

### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP and MV.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Fetch Records from TopDesk**
- Fetch various records from TopDesk, including branches, departments, budget holders, and archiving reasons.

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
- Set various attributes like `firstName`, `surName`, `jobTitle`, `networkLoginName`, `email`, `mobileNumber`, etc.
- Create and set records for branch, department, budget holder, manager, and private details.

7. **Query System For User**
- Check for a current ID and query TopDesk for the user based on the information available.
- Handle the results and update the record with the ID if found.

8. **Logging and Reporting**
- Log the record and update counters based on the operation performed.
- Write the record to the report file if `report_file` is enabled.

9. **Save the Person Record to TopDesk**
- Save the person record to TopDesk and handle enabling, disabling, and archiving based on entitlements and provisioning status.

10. **Operator Sync**
- Create and update operator records in TopDesk based on entitlements and provisioning status.

11. **Deprovision Requestables**
- Deprovision requestable entitlements if necessary and update Portal LDAP.

12. **Archive Operator**
- Archive operator and person records if all entitlements are successfully deprovisioned.

13. **Close Connections**
- Close all established connections to Portal LDAP and MV.

14. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query organizational levels.
- **TopDesk**: The target system where user accounts are created, updated, enabled, disabled, and archived.

### Response Codes/Outputs
- None explicitly mentioned.

### Summary
This script synchronizes user data from the Portal LDAP directory to TopDesk. It handles various operations such as creating, updating, enabling, disabling, and archiving user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 
