---
title: Canvas
---

## Portalldaptocanvas

#### Description
This script synchronizes user data from the Portal LDAP directory to the Canvas Learning Management System (LMS). It processes user records, performs necessary transformations, and updates or creates user accounts in Canvas. The script also handles enabling, disabling, renaming, and moving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: String (optional) - The field to search for in the person object.
- `key_value`: String (optional) - The value to search for in the person object.
- `log_only`: Boolean (optional) - Run the action set or run in log-only mode.
- `debug`: Boolean (optional) - Enable debug mode.
- `process_options`: Enum: `process_all`, `process_unsynced_br` (optional) - Options for processing records.
- `write_to_file`: Boolean (optional) - Enable writing results to a file.
- `allow_username_change`: Boolean (optional) - Allow changing the username.

#### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalChange`, `totalChangeFail`, `totalEnable`, `totalEnableFail`, `totalDelete`, `totalDeleteFail`, `totalDisable`, `totalDisableFail`: Counters for various operations.
- `arrayProcessedAccounts`: Array to store processed accounts.
- `institutionNumber`: The institution number from global settings.
- `policyFile`: The policy file for Canvas ruleset.
- `targetSystem`: The target system, which is Canvas.
- `institutionDomain`: The domain of the institution.

#### Workflow
1. **Initialize Variables**
   - Set initial values for counters and other variables.

2. **Create Connections**
   - Establish connections to Portal LDAP and open the entitlements CSV file.
   - **Error Handling**:
     - Log errors and invoke `ErrorHandler` if any connection fails.
   - **Error Codes**:
     - `LDAP_CONNECTION_FAILED`: Failed to connect to Portal LDAP.
     - `CSV_FILE_OPEN_FAILED`: Failed to open the entitlements CSV file.

3. **Fetch and Transform Data**
   - Query records based on `key_field`, `key_value`, and `process_options`.
   - **Error Handling**:
     - Log and skip records with missing essential attributes.

4. **Perform Canvas Operations**
   - **Create**: Add new users to Canvas.
     - **Error Handling**:
       - Log errors and invoke `ErrorHandler` on failure.
     - **Error Codes**:
       - `CANVAS_USER_CREATE_FAILED`: Failed to create a user in Canvas.
   - **Update**: Update existing users in Canvas.
     - **Error Handling**:
       - Log errors and invoke `ErrorHandler` on failure.
     - **Error Codes**:
       - `CANVAS_USER_UPDATE_FAILED`: Failed to update a user in Canvas.
   - **Enable/Disable**: Toggle the enabled state based on entitlements.
   - **Move/Rename**: Adjust placements and names in Canvas.

5. **Close Connections**
   - Close all established connections.

6. **Log Results**
   - Log summaries of operations, including successes and failures.

#### External Systems and Communications
- **Canvas LMS**: The script interacts with the Canvas LMS API to perform user account operations.
- **Portal LDAP**: Source system for user data.

#### Response Codes/Outputs
- **Error Codes**:
  - `LDAP_CONNECTION_FAILED`: Failure in connecting to LDAP.
  - `CSV_FILE_OPEN_FAILED`: Failed to open the entitlements CSV file.
  - `CANVAS_USER_CREATE_FAILED`: Failed to create a user in Canvas.
  - `CANVAS_USER_UPDATE_FAILED`: Failed to update a user in Canvas.
  - Other codes as defined in the workflow.

#### Summary
This script synchronizes user data from the Portal LDAP directory to Canvas LMS. It handles various operations such as creating, updating, enabling, disabling, moving, and renaming user accounts while logging all results and errors.


---

_Written by AI (2025-10-30)_
