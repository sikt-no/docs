---
title: ServiceNow
---

## Portalldaptoservicenow

#### Description
This script iterates through changed employee records to provision or deprovision them to ServiceNow. It handles creating, updating, and disabling user accounts based on their entitlements and affiliations.

#### Input Parameters
- `resetCookie`: Boolean (optional) - Resets the cookie file if true.
- `logOnly`: Boolean (optional) - If true, only logs actions without making changes.
- `key_field`: String (optional) - Field to filter records.
- `key_value`: String (optional) - Value to filter records.
- `verbose`: Boolean (optional) - Enables verbose logging.

#### Local Variables
- `total`, `totalSkipped`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalDisable`, `totalDisableFail`: Counters for tracking operations.
- `processedAccounts`: Dictionary to track processed records.
- `ldapConn`, `sessionMV`: Connection objects for LDAP and MetaVault.
- `headers`: Record to store HTTP headers.

#### Workflow
1. **Initialize Variables**
   - Set initial values for counters and other variables.
   - Check and reset the cookie file if necessary.
   - Establish connections to Portal LDAP and MetaVault.
   - Set HTTP headers.

2. **Collect Data**
   - Query LDAP for changed records based on `key_field` and `key_value` or iterate through change logs.

3. **Iterate Through Records**
   - Skip deleted and already processed records.
   - Fetch full record from LDAP.
   - Calculate primary affiliation and determine provisioning status.
   - Fetch user from ServiceNow based on various identifiers.
   - Create or update ServiceNow user object based on LDAP record.
   - Perform necessary HTTP operations to create or update the user in ServiceNow.
   - Log events and update entitlements.

4. **Close Connections**
   - Close all established connections.

5. **Log Results**
   - Log summaries of operations, including successes and failures.

#### External Systems and Communications
- **ServiceNow**: Target system where user accounts are managed.
- **Portal LDAP**: Source system for user data.
- **MetaVault**: Used to query user roles and affiliations.

#### Response Codes/Outputs
- **Error Codes**:
  - `LDAP_CONNECTION_FAILED`: Failure in connecting to LDAP.
  - `MV_CONNECTION_FAILED`: MetaVault connection error.
  - `USER_NOT_FOUND`: User not found in ServiceNow.
  - `SERVICE_NOW_USER_CREATE_FAILED`: Failed to create a user in ServiceNow.
  - `SERVICE_NOW_USER_UPDATE_FAILED`: Failed to update a user in ServiceNow.
  - Other codes as encountered during execution.

#### Summary
This script iterates through changed employee records to provision or deprovision them to ServiceNow. It handles creating, updating, and disabling user accounts based on their entitlements and affiliations, ensuring accurate and up-to-date user management in ServiceNow.


---

_Written by AI (2025-10-30)_
