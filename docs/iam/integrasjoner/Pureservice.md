# PureService

#### Description
This script iterates through changed employee records to provision or deprovision them to PureService. It handles creating, updating, and disabling user accounts based on their entitlements and provisioning status.

#### Input Parameters
- `resetCookie`: Boolean (optional) to reset the cookie file.
- `logOnly`: Boolean (optional) to run the script in log-only mode.
- `key_field`: String (optional) to specify the LDAP key field for filtering.
- `key_value`: String (optional) to specify the LDAP key value for filtering.
- `verbose`: Boolean (optional) to enable verbose logging.

#### Local Variables
- `ldapChangedAttributes`: Attributes to be fetched from LDAP.
- `cookieFile`: Path to the cookie file.
- `keyword`: Keyword for PureService entitlements.
- `pureService_header`: HTTP headers for PureService API requests.
- `baseUrl`: Base URL for PureService API.
- `total`, `totalSkipped`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`, `totalUnchanged`: Counters for tracking various operations and their outcomes.
- `processedAccounts`: Dictionary to track processed accounts.
- `role_sluttbruker`, `role_saksbehandler`, `role_administrator`: Role IDs for PureService.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `logOnly` and `verbose` parameters based on input.

2. **Create Connections**
- Establish connection to Portal LDAP.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Collect Data**
- Fetch changed records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

4. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

5. **Provision or Deprovision User**
- Check if PureService entry exists for the user.
- If the user is entitled to PureService, create or update the user account.
- If the user is not entitled to PureService, disable the user account.
- Log the provisioning or deprovisioning process.

6. **Update Teams and Phone Numbers**
- For users with specific roles, update team memberships and phone numbers in PureService.
- Log the update process.

7. **Update Provisioning Status**
- If not in log-only mode, update the provisioning status in Portal LDAP.

8. **Close Connections**
- Close the established connection to Portal LDAP.

9. **Log Results**
- Log the results of the provisioning process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **PureService**: The target system where user accounts are created, updated, and disabled.

#### Response Codes/Outputs
- None explicitly mentioned.

#### Summary
This script iterates through changed employee records to provision or deprovision them to PureService. It handles creating, updating, and disabling user accounts based on their entitlements and provisioning status. The script ensures data consistency and logs detailed results of the provisioning process.


---

_Written by AI (2025-06-19)_
