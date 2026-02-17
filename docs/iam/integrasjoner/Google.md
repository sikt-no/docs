---
title: Google
---

# Google

## 1. Description

The **PortalLdapToGoogle** actionset synchronizes user accounts from RapidIdentity's Portal LDAP directory to Google Workspace based on entitlement assignments. It performs full lifecycle management including user creation, updates, and deletion while maintaining bidirectional tracking of provisioning status.

**Version**: v4.0

The actionset determines which users to provision by checking for the presence of "google" in either `idautoPersonAppRoles2` (birthright entitlements) or `idautoPersonAppRoles6` (requested system entitlements). If a user has `idautoDisabled` set to "TRUE", the entitlement is automatically revoked regardless of other settings.

Based on the user's current state in both systems, the actionset determines the appropriate operation:

- **CREATE**: User doesn't exist in Google AND is entitled to Google
- **UPDATE**: User exists in Google AND is entitled AND has attribute changes
- **UNCHANGED**: User exists AND is entitled AND no changes detected (still updates Portal LDAP tracking)
- **DELETE**: User exists in Google AND is NOT entitled

After successful provisioning operations, the actionset updates Portal LDAP to track provisioning status. If the entitlement came from birthright (`idautoPersonAppRoles2`), it adds "google" to `idautoPersonAppRoles5`. If it came from requested entitlements (`idautoPersonAppRoles6`), it adds "google" to `idautoPersonAppRoles8`. This bidirectional tracking ensures RapidIdentity maintains awareness of which users are actively provisioned in Google Workspace.

For efficiency, the actionset uses OpenLDAP's change log mechanism with cookie files to process only records that have changed since the last run, rather than scanning the entire directory each time.

---

## 2. Input Parameters

The actionset accepts 5 input parameters to control its behavior:

### **key_field** (optional)
Specifies which LDAP attribute to use when looking up a specific user for targeted processing.

- **Accepted values**:
  - `"username"` - Maps to `idautoPersonSystem1ID`
  - `"uh-username"` - Maps to `idautoPersonSAMAccountName`
  - `"idautoID"` - Uses the value as-is
- **Purpose**: Enables targeted processing of a single user rather than batch processing all changed users
- **Use Case**: Useful for testing, troubleshooting, or immediate provisioning of a specific user
- **Default**: When not provided, the actionset processes users based on change log or full directory query

### **key_value** (optional)
The specific value to search for when `key_field` is specified.

- **Accepted values**: String value matching the specified key field
- **Purpose**: Works in conjunction with `key_field` to identify the target user
- **Example**: If `key_field` is "username" and `key_value` is "john.doe", the actionset will only process the user with `idautoPersonSystem1ID` = "john.doe"
- **Default**: When not provided, targeted user lookup is not performed

### **log_only** (required)
Enables dry-run mode where the actionset logs all operations it would perform without making actual changes.

- **Accepted values**: 
  - `true` - Dry-run mode (log only)
  - `false` - Normal operation mode
- **Purpose**: Allows safe testing and validation of what the actionset will do before making actual changes to Google Workspace or Portal LDAP
- **Impact**: 
  - Changes which cookie file is used for change tracking
  - Prevents actual API calls to Google and Portal LDAP updates
  - Still performs all validation, transformation logic, and change detection
  - Logs detailed information about operations that would be performed
- **Default**: Must be explicitly set; typically use `true` for testing and `false` for production runs

### **process_total** (optional)
Limits the number of users to process in a single execution.

- **Accepted values**: Positive integer
- **Purpose**: Provides throttling capability to limit the scope of a single run
- **Use Case**: 
  - Testing with a small subset before full deployment
  - Spreading large provisioning jobs across multiple scheduled runs
  - Managing API rate limits or system load
- **Default**: When not provided, all eligible users are processed (limited only by change log or query results)

### **process_all** (optional)
Forces the actionset to process all users entitled to Google, bypassing the incremental change log.

- **Accepted values**: 
  - `true` - Process all entitled users
  - `false` - Use incremental change log processing
- **Purpose**: Enables full synchronization runs rather than incremental updates
- **Use Case**:
  - Initial provisioning to Google Workspace
  - Recovery after service disruptions
  - Validation that all entitled users are properly provisioned
  - Resolving synchronization drift between systems
- **Default**: When not provided or set to `false`, uses incremental processing via OpenLDAP change log
- **Note**: Can be combined with `process_total` to process all users in manageable batches

---

## 3. Attribute Mapping

The following table shows how RapidIdentity (RI) attributes are mapped to Google Workspace attributes:

### Core Direct Mappings

| RapidIdentity Attribute | Google Workspace Attribute | Notes |
|------------------------|---------------------------|-------|
| `idautoPersonSystem1ID` | `id`, `userName` | Primary identifier; falls back to SAMAccountName if System1ID is null |
| `idautoPersonSAMAccountName` | Fallback for username | Used when System1ID is not set |
| `idautoPersonSystem2ID` | `primaryEmail` (user's primary Google email address) | Falls back to username@inst_domain if null |
| `givenName` | `name.givenName` | Overridden by PreferredName if present |
| `sn` | `name.familyName` | Overridden by PreferredLastName if present |
| `idautoPersonPreferredName` | `name.givenName` | Takes precedence over givenName when populated |
| `idautoPersonPreferredLastName` | `name.familyName` | Takes precedence over sn when populated |

### Computed and Transformed Attributes

**selectedUsername**:
- Logic: Uses `idautoPersonSystem1ID` if populated; otherwise uses `idautoPersonSAMAccountName`
- Purpose: Determines the base identifier used across Google Workspace
- Used for: `id`, `userName`, and email construction

**selectedEmail**:
- Logic: Uses `idautoPersonSystem2ID` if populated; otherwise constructs `selectedUsername + "@" + Global.inst_domain`
- Purpose: The user's primary email address in Google Workspace
- Used for: `primaryEmail` field and as an email alias with sendAsEmail capabilities
- Note: This is typically the user's institutional email address for continuity

**primaryAffiliation**:
- Determined by matching `idautoPersonAffiliation` against global affiliation lists:
  - If affiliation is in `Global.employeeAffiliations` → "employee"
  - If affiliation is in `Global.studentAffiliations` → "student"
  - If affiliation is in `Global.guestAffiliations` → "guest"
- Purpose: Drives organizational unit assignment and potential policy application

**orgUnitPath**:
- If primaryAffiliation == "employee" OR "guest" → `Global.googleOrgUnitPathAnsatt`
- Otherwise (student) → `Global.googleOrgUnitPathStudent`
- Note: Guest and employee sharing the same org unit path is configurable per institution's organizational structure

**password** (create only):
- Generated using Portal's default password policy
- Hashed with SHA-512 algorithm
- `hashFunction` set to "crypt" for Google compatibility
- Only set during user creation; not updated during subsequent updates

**languages** (create only):
- Set to: `{"languageCode": "no", "preference": "preferred"}`
- Norwegian language preference
- Only set during initial user creation

**Static Values** (set for all records):
- `userNameDomain`: `Global.googleBaseUrl` (the Google Workspace domain)
- `suspended`: `false` (users are created active)
- `changePasswordAtNextLogin`: `false` (users are not forced to change password)

### Entitlement-Based Processing

The actionset determines eligibility for Google provisioning based on:

- **isEntitledToGoogle** = TRUE if:
  - "google" exists in `idautoPersonAppRoles2` (birthright system entitlements), OR
  - "google" exists in `idautoPersonAppRoles6` (requested system entitlements)
  - AND `idautoDisabled` is not "TRUE"

- **hasGoogleAsBirthright** = TRUE if:
  - "google" exists in `idautoPersonAppRoles2`
  - Determines which AppRoles field to update for tracking (AppRoles5 vs AppRoles8)

After successful provisioning operations, the actionset updates Portal LDAP:
- If birthright entitlement: adds "google" to `idautoPersonAppRoles5`
- If requested entitlement: adds "google" to `idautoPersonAppRoles8`
- On delete: removes "google" from the appropriate AppRoles5 or AppRoles8 field

This bidirectional tracking ensures RapidIdentity always knows which users are actively provisioned in Google Workspace versus merely entitled to access.

---

## 4. Workflow

The actionset follows this high-level workflow:

### Initialization
1. **Initialize counters** to track operations (totalAdd, totalUpdate, totalDelete, totalUnchanged, totalSkipped, totalAddFail, totalUpdateFail, totalDeleteFail, totalRenameFail)
2. **Process input parameters**:
   - Map `key_field` values to actual LDAP attribute names
   - Select appropriate cookie file based on `log_only` parameter
3. **Establish connections** to required systems:
   - Portal LDAP (metadir connection) for reading user records
   - Portal Cloud API for password generation and policy access
   - Google Workspace (OAuth with domain impersonation using service account)

### Fetch Users to Process

The query strategy depends on input parameters:

- **If `process_all` is true**: Query all users with "(|(idautoPersonAppRoles2=google)(idautoPersonAppRoles6=google))" from Portal LDAP base DN
- **Else if `key_field` and `key_value` are provided**: Query specific user matching the key field and value
- **Otherwise**: Use OpenLDAP change iterator with cookie file to process only records that have changed since the last run
  - Reads from the OpenLDAP change log DN
  - Filters by inetOrgPerson and idautoPerson object classes
  - Tracks progress using cookie file for incremental processing

After retrieving records, the actionset calls `FnFetchUsersToProcess` to refine the record set based on actionset-specific criteria.

### Process Each User

For each record in the query results:

1. **Validation**:
   - Skip if `changetype` is "delete"
   - Skip if no `idautoID` present
   - Skip if no `idautoPersonSAMAccountName` (logs warning, increments totalSkipped)
   - Skip if no `idautoPersonAffiliation` (logs warning, increments totalSkipped)
   - Skip if already processed in current run (duplicate detection)
   - Stop processing if `process_total` limit reached

2. **Data Preparation**:
   - Retrieve full LDAP record with all attributes
   - Determine `selectedUsername` (System1ID or SAMAccountName fallback)
   - Determine `selectedEmail` (System2ID or username@inst_domain fallback)
   - Parse entitlement arrays from AppRoles2, AppRoles5, AppRoles6, AppRoles8
   - Calculate `isEntitledToGoogle` based on entitlements and disabled status
   - Calculate `hasGoogleAsBirthright` to determine tracking field
   - Compute `primaryAffiliation` from affiliation code
   - Set `orgUnitPath` based on affiliation
   - Transform name fields (preferred names take precedence)

3. **Check Existence**:
   - Query Google Workspace to check if user exists using minimal data fetch
   - Stores result for operation routing

4. **Determine Operation**:

   **A. ERROR Path** (if Google fetch failed):
   - Log error details
   - Increment `totalUpdateFail`
   - Call `ErrorHandler` for notification
   - Call `FnMarkUserForReprocessing` to retry in next run
   - Continue to next record

   **B. CREATE Path** (if user doesn't exist in Google):
   - Skip if not entitled to Google (no provisioning needed)
   - Add create-only fields:
     - `languages` (Norwegian preferred)
     - `changePasswordAtNextLogin` (false)
     - `password` (generated and hashed)
     - Format `name` as nested object with givenName and familyName
   - If `log_only`: Log intended operation without executing
   - Else: POST user to Google Admin Directory API
   - On success:
     - Log success, increment `totalAdd`
     - Log audit event
     - If `selectedEmail` ≠ `primaryEmail`: Add as email alias with 3-second delay
     - Configure sendAsEmail with retry logic:
       - Create personal OAuth session impersonating the new user
       - Attempt to set sendAsEmail up to 3 times with 6-second delays between attempts
       - Retry mechanism accommodates Google's propagation delay after alias creation
     - Update Portal LDAP: Add "google" to AppRoles5 (birthright) or AppRoles8 (requested)
   - On failure: Log error, increment `totalAddFail`, call ErrorHandler, mark for reprocessing

   **C. UPDATE Path** (if user exists and is entitled):
   - Copy existing Google record
   - Check if `selectedEmail` needs to be added as alias/sendAsEmail
   - Reuse existing `id` and `userName` from Google (don't transform)
   - Call `FnHasRecordChanged` to detect attribute differences
   - If no changes detected:
     - Log as unchanged, increment `totalUnchanged`
     - Still update Portal LDAP tracking if "google" not in AppRoles5/8 (ensures tracking consistency)
   - If changes detected:
     - Filter record to only include changed fields
     - If `log_only`: Log intended changes
     - Else: Call `saveGoogleUser` to update Google Workspace
     - On success:
       - Log update details, increment `totalUpdate`
       - Log audit event
       - Add alias/sendAsEmail if needed (same retry logic as create)
       - Update Portal LDAP tracking
     - On failure: Log error, increment `totalUpdateFail`, call ErrorHandler, mark for reprocessing

   **D. DELETE Path** (if user exists but not entitled):
   - If `log_only`: Log intended deletion
   - Else: Call `deleteGoogleUser` with user's Google ID
   - On success:
     - Log deletion, increment `totalDelete`
     - Log audit event
     - Update Portal LDAP: Remove "google" from AppRoles5 or AppRoles8
   - On failure: Log error, increment `totalDeleteFail`, call ErrorHandler, mark for reprocessing

5. **Error Handling**:
   - All failures call `ErrorHandler` actionset for centralized error notification
   - All failures call `FnMarkUserForReprocessing` to flag user for retry in next run
   - Audit events logged for all operations (both success and failure) with detailed extended properties
   - Failed operations don't stop processing; actionset continues with remaining users

### Cleanup
1. **Close all connections** to Portal LDAP and Portal Cloud API
2. **Log summary statistics**:
   - Total processed
   - Total unchanged
   - Total skipped
   - Total added, updated, renamed (counter exists but no rename logic), and deleted
   - Total failures for each operation type (add, update, rename, delete)

---

## 5. Dependencies

### Global Configuration Variables

The actionset references these Google Workspace-specific global configuration values:

- `Global.googleBaseUrl`: The Google Workspace domain (e.g., "example.com")
- `Global.googleUserID`: Service account email address used for OAuth domain-wide delegation and impersonation
- `Global.googleOrgUnitPathAnsatt`: Organizational unit path for employees and guests (e.g., "/Employees")
- `Global.googleOrgUnitPathStudent`: Organizational unit path for students (e.g., "/Students")
- `Global.portalLdapToGoogleCookie`: File path for change tracking cookie in normal operation mode
- `Global.portalLdapToGoogleLogOnlyCookie`: File path for change tracking cookie in log-only mode
- `Global.employeeAffiliations`: Comma-separated list of affiliation codes that classify users as employees
- `Global.studentAffiliations`: Comma-separated list of affiliation codes that classify users as students
- `Global.guestAffiliations`: Comma-separated list of affiliation codes that classify users as guests
- `Global.inst_domain`: Institution domain used for email address fallback (e.g., "university.edu")

**Note on Organizational Structure**: The org unit path configuration is flexible and configurable per institution's needs. The example mapping of guests and employees to the same org unit reflects one common organizational structure but can be adjusted based on policy requirements.

### Required Permissions

- **Google Workspace**: Domain-wide delegated service account with the following OAuth 2.0 scopes:
  - `https://www.googleapis.com/auth/admin.directory.user` - Create, read, update, and delete user accounts
  - `https://www.googleapis.com/auth/admin.directory.orgunit` - Read and assign organizational unit paths
  - `https://www.googleapis.com/auth/admin.directory.userschema` - Access user schema definitions
  - `https://www.googleapis.com/auth/gmail.settings.basic` - Configure Gmail settings
  - `https://www.googleapis.com/auth/gmail.settings.sharing` - Configure sendAs email settings
  - `https://www.googleapis.com/auth/userinfo.email` - Access user email information
  - `https://www.googleapis.com/auth/userinfo.profile` - Access user profile information

**Required Setup**:
- Service account must be created in Google Cloud Console
- Domain-wide delegation must be enabled for the service account
- OAuth client ID must be authorized in Google Workspace Admin Console with the scopes listed above
- Service account credentials must be configured in RapidIdentity Connect with an empty credential name (" ")

---

## Documentation Notes

**Documentation Level**: High-level, business-focused  

**Key Business Features**:
- **Entitlement-Driven**: Provisioning is controlled entirely by RapidIdentity entitlement attributes, ensuring consistent access governance
- **Bidirectional Tracking**: Portal LDAP maintains awareness of provisioning status through AppRoles5/8 fields
- **Incremental Processing**: Cookie-based change log processing ensures efficiency for large directories
- **Email Continuity**: Institutional email addresses are maintained as primary emails in Google with proper alias and sendAsEmail configuration
- **Affiliation-Based Organization**: Users are automatically placed in appropriate Google org units based on their institutional affiliation
- **Robust Error Handling**: Failed operations are tracked, reported, and automatically queued for retry without stopping the entire batch
- **Safe Testing**: Log-only mode enables validation and testing before production changes

**Special Considerations**:
- The sendAsEmail retry mechanism (3 attempts with 6-second delays) is necessary to accommodate Google's backend propagation delays after alias creation
- Password generation uses RapidIdentity Portal's default password policy, ensuring consistency with organizational security standards
- Users are created in an active state (`suspended: false`) and are not forced to change passwords on first login
- The actionset processes deletes (deprovisions) based on entitlement removal, supporting full lifecycle management

---
 AI Generated Documentation