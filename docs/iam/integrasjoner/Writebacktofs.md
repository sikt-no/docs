---
title: WritebackToFS
---

## Portalldapwritebacktofs

#### Description
This script performs a writeback operation to update user information in FS (Felles Studentsystem). It processes user records from Portal LDAP and updates or creates user accounts in FS, including setting attributes such as username, email, and FS Fagperson status.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `debug`: Boolean (optional)
- `log_only`: Boolean
- `process_all`: Boolean (optional)
- `process_remaining`: Boolean (optional)

#### Local Variables
- `actionSetName`: Name of the current action set.
- `processedAccounts`: Array to keep track of processed accounts.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`: Counters for various operations.
- `fsWritebackEmployeeID`, `fsWritebackMobilePhoneNumber`, `fsWritebackOfficeNumber`, `fsWritebackWithDomainName`, `fsWritebackEmailAsSystem2ID`: Global variables for FS writeback settings.
- `inst`, `rolesToUseIdPorten`, `landIdTable`, `orgTable`, `campusTable`, `fagpersonTable`: Global variables for various tables and settings.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.

2. **Create Connections**
- Establish connections to Portal LDAP and FS GraphQL.
- **Error Handling**:
    - Log errors and invoke `ErrorHandler` if any connection fails.
    - **Error Codes**:
        - `LDAP_CONNECTION_FAILED`: Failed to connect to Portal LDAP.
        - `FS_GRAPHQL_CONNECTION_FAILED`: Failed to connect to FS GraphQL.

3. **Fetch and Transform Data**
- Query records based on `key_field` and `key_value`, or process all or remaining records.
- **Error Handling**:
    - Log and skip records with missing essential attributes.

4. **Perform FS Operations**
- **Create**: Add new users to FS.
    - **Error Handling**:
        - Log errors and invoke `ErrorHandler` on failure.
        - **Error Codes**:
            - `FS_USER_CREATE_FAILED`: Failed to create a user in FS.
- **Update**: Update existing users in FS.
    - **Error Handling**:
        - Log errors and invoke `ErrorHandler` on failure.
        - **Error Codes**:
            - `FS_USER_UPDATE_FAILED`: Failed to update a user in FS.
- **Disable**: Disable users by removing username, email, and FS Fagperson status.
    - **Error Handling**:
        - Log errors and invoke `ErrorHandler` on failure.
        - **Error Codes**:
            - `FS_USER_DISABLE_FAILED`: Failed to disable a user in FS.

5. **Close Connections**
- Close all established connections.

6. **Log Results**
- Log summaries of operations, including successes and failures.

#### External Systems and Communications
- **FS (Felles Studentsystem)**: Target system where user accounts are managed.
- **Portal LDAP**: Source system for user data.

#### Response Codes/Outputs
- **Error Codes**:
    - `LDAP_CONNECTION_FAILED`: Failure in connecting to LDAP.
    - `FS_GRAPHQL_CONNECTION_FAILED`: Failed to connect to FS GraphQL.
    - `FS_USER_CREATE_FAILED`: Failed to create a user in FS.
    - `FS_USER_UPDATE_FAILED`: Failed to update a user in FS.
    - `FS_USER_DISABLE_FAILED`: Failed to disable a user in FS.
    - Other codes as defined in the workflow.

#### Summary
This script performs a writeback operation to update user information in FS. It handles various operations such as creating, updating, and disabling user accounts while logging all results and errors.


---

_Written by AI (2025-10-30)_
