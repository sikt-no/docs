---
title: WritebackToDFO
---

## Portalldapwritebacktodfo

#### Description
This script performs a writeback operation to update external identifiers, email addresses, and user IDs in the DFO system. It processes user records from the Portal LDAP and updates the corresponding records in SAP.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `process_all`: Boolean (optional)
- `log_only`: Boolean

#### Local Variables
- `sapAnsattBaseUrl`: Base URL for SAP API.
- `sapKey`: API key for SAP.
- `sapReadOnly`: Flag indicating if the operation is read-only.
- `sapWritebackBrukerident`: Flag indicating if the employee ID should be written back as `brukerident`.
- `sapWritebackBusinessRoleException`: List of business roles to be excluded from writeback.
- `actionSetName`: Name of the current action set.
- `processedAccounts`: Array to keep track of processed accounts.
- `total`, `totalSkipped`, `totalUnchanged`, `totalUpdate`, `totalUpdateFail`: Counters for various operations.

#### Workflow
1. **Initialize Variables**
   - Set initial values for counters and other variables.

2. **Create Connections**
   - Establish connections to Portal LDAP.
   - **Error Handling**:
     - Log errors and invoke `ErrorHandler` if the connection fails.
   - **Error Codes**:
     - `LDAP_CONNECTION_FAILED`: Failed to connect to Portal LDAP.

3. **Fetch and Process Records**
   - Query records based on `key_field` and `key_value` or process all records.
   - **Error Handling**:
     - Skip records that are deleted, disabled, missing essential attributes, or not entitled to Active Directory.
     - Log errors and increment counters for skipped records.

4. **Create Writeback Record**
   - Create a record with `eksternIdent`, `epost`, and optionally `brukerident`.

5. **Fetch Existing Record from SAP**
   - Perform an HTTP GET request to fetch the existing record from SAP.
   - **Error Handling**:
     - Log errors and invoke `ErrorHandler` if the fetch operation fails.
     - **Error Codes**:
       - `SAP_FETCH_FAILED`: Failed to fetch the user from SAP.

6. **Check for Changes and Update SAP**
   - Compare the calculated record with the fetched record from SAP.
   - **Error Handling**:
     - Skip updating `brukerident` if it already exists.
     - Log errors and invoke `ErrorHandler` if the update operation fails.
     - **Error Codes**:
       - `SAP_UPDATE_FAILED`: Failed to update the user in SAP.

7. **Close Connections**
   - Close the Portal LDAP connection.

8. **Log Results**
   - Log summaries of operations, including successes and failures.

#### External Systems and Communications
- **SAP**: Target system where user records are updated.
- **Portal LDAP**: Source system for user data.

#### Response Codes/Outputs
- **Error Codes**:
  - `LDAP_CONNECTION_FAILED`: Failure in connecting to LDAP.
  - `SAP_FETCH_FAILED`: Failed to fetch the user from SAP.
  - `SAP_UPDATE_FAILED`: Failed to update the user in SAP.
  - Other codes as defined in the workflow.

#### Summary
This script updates external identifiers, email addresses, and user IDs in the DFO system by processing user records from Portal LDAP and updating the corresponding records in SAP. It handles various conditions to ensure accurate and efficient updates while logging all results and errors.


---

_Written by AI (2025-10-30)_
