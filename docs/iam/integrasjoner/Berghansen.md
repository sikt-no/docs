---
title: Berg Hansen
---

## Portalldaptoberghansen

#### Description
This script synchronizes user data from a portal directory to Berg Hansen via API. It processes user records, performs necessary transformations, and updates or creates user accounts in Berg Hansen. The script also handles enabling, disabling, and updating user accounts based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `debug`: Boolean (optional)
- `log_only`: Boolean
- `process_all`: Boolean (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `processedAccounts`: Array to keep track of processed accounts.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`: Counters for various operations.
- `baseUrl`: Base URL for Berg Hansen API.
- `inst`: Customer identifier for Berg Hansen.

#### Workflow
1. **Create Connections**
   - Establish connections to Portal LDAP and fetch session token from Berg Hansen.
   - Perform a health check to verify Berg Hansen API is working.
   - **Error Handling**:
     - Log errors and invoke `ErrorHandler` if any connection fails.
   - **Error Codes**:
     - `LDAP_CONNECTION_FAILED`: Failed to connect to Portal LDAP.
     - `BERG_HANSEN_CONNECTION_FAILED`: Failed to connect to Berg Hansen.

2. **Fetch and Transform Data**
   - Fetch all users from Berg Hansen and iterate for matching.
   - Query records based on `key_field` and `key_value` or `process_all`.
   - **Error Handling**:
     - Log and skip records with missing essential attributes.

3. **Perform Berg Hansen Operations**
   - **Disable**: Disable users by setting the active flag to false.
     - **Error Handling**:
       - Log errors and invoke `ErrorHandler` on failure.
     - **Error Codes**:
       - `BERG_HANSEN_DISABLE_FAILED`: Failed to disable a user in Berg Hansen.
   - **Create**: Add new users to Berg Hansen.
     - **Error Handling**:
       - Log errors and invoke `ErrorHandler` on failure.
     - **Error Codes**:
       - `BERG_HANSEN_CREATE_FAILED`: Failed to create a user in Berg Hansen.
   - **Update**: Update existing users in Berg Hansen.
     - **Error Handling**:
       - Log errors and invoke `ErrorHandler` on failure.
     - **Error Codes**:
       - `BERG_HANSEN_UPDATE_FAILED`: Failed to update a user in Berg Hansen.

4. **Close Connections**
   - Close all established connections.

5. **Log Results**
   - Log summaries of operations, including successes and failures.

#### External Systems and Communications
- **Berg Hansen**: Target system where user accounts are managed.
- **Portal LDAP**: Source system for user data.

#### Response Codes/Outputs
- **Error Codes**:
  - `LDAP_CONNECTION_FAILED`: Failure in connecting to LDAP.
  - `BERG_HANSEN_CONNECTION_FAILED`: Failure in connecting to Berg Hansen.
  - `BERG_HANSEN_DISABLE_FAILED`: Failed to disable a user in Berg Hansen.
  - `BERG_HANSEN_CREATE_FAILED`: Failed to create a user in Berg Hansen.
  - `BERG_HANSEN_UPDATE_FAILED`: Failed to update a user in Berg Hansen.
- **Success Outputs**:
  - Log messages confirming the successful addition, update, or disablement of user accounts.

#### Summary
This script synchronizes user data from a portal directory to Berg Hansen via API. It handles various operations such as creating, updating, and disabling user accounts while logging all results and errors.


---

_Written by AI (2025-10-30)_
