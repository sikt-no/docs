---
title: OfficePhone
---

## Portalldaptoofficephone

#### Description
This script is designed to create users in an OfficePhone JSON file and assign a phone number to each user. The script processes user records, performs necessary transformations, and updates or creates user accounts in the JSON file. It also handles enabling, disabling, and updating user phone numbers based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `idautoID`, `uh-username` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean (optional)
- `process_total`: Number (optional)
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `processedAccounts`: An array to store processed accounts.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`: Counters for various operations.
- `fetchUpdatedFile`: A flag to indicate if the JSON file needs to be reloaded.
- Others as defined in the workflow.

#### Workflow
1. **Initialize Variables**
   - Set initial values for counters and other variables.

2. **Create Connections**
   - Load the OfficePhone JSON file.
   - Establish a connection to Portal LDAP.
   - **Error Handling**:
     - Log errors and invoke `ErrorHandler` if any connection fails.
   - **Error Codes**:
     - `JSON_FILE_NOT_FOUND`: Failed to find the JSON file.
     - `LDAP_CONNECTION_FAILED`: Failed to connect to Portal LDAP.

3. **Fetch and Transform Data**
   - Query records based on `key_field` and `key_value` or `process_all`.
   - **Error Handling**:
     - Log and skip records with missing essential attributes.

4. **Perform JSON Operations**
   - **Add**: Add new users to the JSON file.
     - Find the oldest available phone number in the JSON file.
     - Update the JSON file with user data.
     - **Error Handling**:
       - Log errors and invoke `ErrorHandler` on failure.
     - **Error Codes**:
       - `JSON_UPDATE_FAILED`: Failed to update the JSON file.
   - **Update**: Update existing users in the JSON file.
     - Compare the phone number in the JSON file and Portal LDAP.
     - **Error Handling**:
       - Log errors and invoke `ErrorHandler` on failure.
     - **Error Codes**:
       - `JSON_UPDATE_FAILED`: Failed to update the JSON file.
   - **Disable**: Remove users from the JSON file.
     - **Error Handling**:
       - Log errors and invoke `ErrorHandler` on failure.
     - **Error Codes**:
       - `JSON_UPDATE_FAILED`: Failed to update the JSON file.

5. **Close Connections**
   - Close all established connections and the JSON file.

6. **Log Results**
   - Log summaries of operations, including successes and failures.

#### External Systems and Communications
- **Portal LDAP**: Source system for user data.
- **OfficePhone JSON File**: Target system where user phone numbers are managed.

#### Response Codes/Outputs
- **Error Codes**:
  - `JSON_FILE_NOT_FOUND`: Failure in finding the JSON file.
  - `LDAP_CONNECTION_FAILED`: Failure in connecting to LDAP.
  - `JSON_UPDATE_FAILED`: Failed to update the JSON file.
  - Other codes as defined in the workflow.

#### Summary
This script synchronizes user data from Portal LDAP to an OfficePhone JSON file. It handles various operations such as creating, updating, and disabling user phone numbers while logging all results and errors.


---

_Written by AI (2025-10-30)_
