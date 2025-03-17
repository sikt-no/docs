## G3_internal_processing 

### PortalLdapExpireEntitlementsOrgChange.js 
 #### Description
This script evaluates and revokes non-requestable entitlements based on changes in organization and status for users. It processes user records, checks for specific criteria, and revokes entitlements if necessary.

#### Input Parameters
- `uhid`: The unique identifier for the user (optional).
- `log_only`: Boolean indicating if the script should only log actions without performing them (optional).
- `evaluate_studyright`: Boolean indicating if study rights should be evaluated (optional).
- `evaluate_studentassessments`: Boolean indicating if student assessments should be evaluated (optional).

#### Local Variables
- `evaluated`: Counter for the number of evaluated records.
- `revoked`: Counter for the number of revoked entitlements.
- `arrayEntitlementNamesNoRevoke`: Array to store entitlements that should not be revoked.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionPortal`: Connection object for Cloud Portal.
- `sessionMV`: Connection object for MetaVault (RIDB).
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrayPortalEntitlementIDs`: Array of entitlement IDs from the portal.
- `arrayEntitlementsToRevoke`: Array of entitlements to be revoked.
- `arrayCurrentEntitlements`: Array of current entitlements for the user.

#### Workflow
1. **Initialize Variables**
   - Set initial values for counters and other variables.
   - Adjust `evaluate_studyright` and `evaluate_studentassessments` based on input parameters.

2. **Create Connections**
   - Establish connections to Portal LDAP, Cloud Portal, and MetaVault.
   - Handle connection errors by logging and returning.

3. **Set Cookie**
   - Determine the appropriate cookie based on `log_only` parameter.

4. **Query Records**
   - Fetch records from Portal LDAP using a change iterator.

5. **Iterate Over Records**
   - For each record, skip if the change type is 'delete' or 'add'.
   - Fetch detailed LDAP record and skip if essential attributes are missing.
   - Evaluate if the record meets criteria for entitlement revocation based on status, department codes, location codes, study rights, and student assessments.

6. **Load Entitlements**
   - Load entitlements into memory if not already loaded.
   - Filter entitlements based on their status and requestability.

7. **Evaluate Criteria**
   - Check if the record meets criteria for entitlement revocation based on various conditions.
   - Log the evaluation process.

8. **Revoke Entitlements**
   - If criteria are met, determine which entitlements to revoke.
   - Log the entitlements to be revoked.
   - If `log_only` is false, perform the revocation using `FnBulkRequestEntitlements`.

9. **Return**
   - Log the results of the evaluation and revocation process.
   - Close all established connections.
   - Return `true` to indicate successful completion.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used to fetch entitlements and perform revocation.
- **MetaVault (RIDB)**: Used to query user roles and affiliations.

#### Response Codes/Outputs
- The script logs the number of evaluated and revoked entitlements.
- Returns `true` if the operation was successful.

#### Summary
This script evaluates and revokes non-requestable entitlements based on changes in organization and status for users. It ensures that entitlements are revoked when specific criteria are met, and logs the process for auditing purposes. 

 --- 


### EmailDisablementNotifications.js 
 #### Description
This script emails users with a notification that their account is going to expire when they are within the expiration/notification window. It handles different user types (employees, students, guests) and sends notifications accordingly.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `uhid` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean
- `debug`: Boolean (optional)

#### Local Variables
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `varNow`: Current date formatted as `yyyyMMdd`.
- `currentDate`: Current date formatted as `yyyy-MM-dd`.
- `results`: The set of user records fetched from Portal LDAP.
- `isEmployee`, `isStudent`, `isGuest`: Booleans indicating the user's affiliations.
- `employeeEndDate`, `lastDate`, `notificationDays`: Dates and notification window for the user.
- `selectedUsername`, `userEmail`: Username and email address of the user.
- `dateNow`, `daysTillEndDate`: Current date and days until the user's end date.
- `sendNotification`: Boolean indicating if a notification should be sent.
- `previousNotifications`: Array of previous notifications sent to the user.
- `TemplateValues`: Record containing values for the email template.
- `email`, `sendEmailResult`: Email object and result of the email sending operation.
- `managers`, `manager`: Manager's LDAP record and email address.
- `saveResults`: Result of saving the LDAP record.

#### Workflow
1. **Connect to Portal LDAP**
   - Establish connection to Portal LDAP.
   - Handle connection errors by logging and invoking `G3_ErrorHandler`.

2. **Initialize Variables**
   - Set initial values for date variables.

3. **Get the Users**
   - Fetch user records from Portal LDAP based on `key_field` and `key_value`.
   - If no specific key is provided, fetch records based on end date and term date.

4. **Iterate Over Users**
   - For each user, determine the exit date and affiliation.
   - Check if the user is a student with an extended end date.
   - Set the user's email address.
   - Calculate if the end date is within the notification window.
   - Skip users with an end date of '9999-12-31', users who have expired in the past, users who have not claimed their account, users outside the notification window, and users who have already been notified.

5. **Send Notification Email**
   - Log user information.
   - Generate and send the notification email to the user.
   - If applicable, send a notification email to the user's manager.

6. **Update User Record**
   - Update the user record to indicate that the separation email has been sent.
   - Save the updated LDAP record.

7. **Return**
   - Close the Portal LDAP connection.
   - Return `true` to indicate successful completion.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **AWS SES**: Used to send notification emails.

#### Response Codes/Outputs
- Return `true` if the operation was successful.

#### Summary
This script emails users with a notification that their account is going to expire when they are within the expiration/notification window. It handles different user types and sends notifications accordingly, ensuring that users and their managers are informed about the upcoming account expiration. 

 --- 


### SendClaimAccountNotifications.js 
 #### Description
This script generates a claim code and sends an email to users requiring account claim. It processes user records from the Portal LDAP, determines the appropriate email address and claim process, generates the claim code, and sends the email notification.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `uhid` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean

#### Local Variables
- `sessionPD`: Connection object for Portal LDAP.
- `employeePostponeClaimMailDays`: Number of days to postpone claim mail for employees.
- `varNow`: Current date formatted as `yyyyMMdd`.
- `results`: The set of records fetched from Portal LDAP.
- `affiliation`, `isStudent`, `isEmployee`, `isFaculty`, `isSponsored`: Variables to determine the user's affiliation.
- `startDateDiff`: Difference between the start date and current date.
- `arraySystemEntitlements`, `arrayProvisionedSystems`, `arrayRequestedEntitlements`: Arrays of system entitlements and provisioned systems for the user.
- `isEntitledLdap`, `isEntitledAd`, `isProvisionedLdap`, `isProvisionedAd`, `hasADAndLDAPRequested`: Booleans indicating the user's entitlements and provisioning status.
- `emailAddress`: The email address to send the claim notification.
- `isFnr`, `isDnr`: Booleans indicating if the user's national ID is a Fnr or Dnr.
- `claimProcess`: The claim process to use (1 or 2).
- `claimCode`: The generated claim code.
- `saveClaimCodeRecord`: The record to save the claim code.
- `claimLink`: The claim link to include in the email.
- `TemplateValues`: Record containing template values for the email.
- `email`: The generated email.
- `sendEmailResult`: Result of the email sending operation.
- `saveRecordResult`: Result of saving the LDAP record.

#### Workflow
1. **Create Connections**
- Establish connection to Portal LDAP.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

2. **Get Accounts Requiring Claim Email**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a filter to fetch records requiring claim email.

3. **Iterate Over Accounts**
- For each record, skip if disabled or if claimFlag/idautoPersonExtBool4 is true.
- Determine the user's affiliation and start date difference.
- Skip records that don't apply based on entitlements and provisioning status.

4. **Determine Email Address**
- Use the user's home email address if available.
- Log an error and skip the record if the home email is missing.

5. **Determine Claim Process**
- Check if the user's national ID is a Fnr or Dnr.
- Set the claim process to 1 or 2 based on the national ID.

6. **Generate Claim Code**
- Generate a claim code if the claim process is 2.
- Save the claim code to the user's LDAP record.

7. **Generate Claim Email**
- Generate the claim link based on the claim process.
- Create template values for the email.
- Generate the email using `FnGenerateEmail`.

8. **Send Email Notification**
- Send the email using `FnSendEmail`.
- Handle email sending errors by logging and invoking `G3_ErrorHandler`.

9. **Mark Account as Claim Email Sent**
- Update the user's LDAP record to indicate that the claim email has been sent.
- Handle errors by logging and invoking `G3_ErrorHandler`.

10. **Return**
- Close the connection to Portal LDAP.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Claim API**: Used to send claim email notifications.

#### Response Codes/Outputs
- None explicitly mentioned.

#### Summary
This script generates a claim code and sends an email to users requiring account claim. It handles various user affiliations and entitlements, ensuring that the claim process is appropriate and the email notification is sent successfully. 

 --- 


### PortalLdapAssignBusinessEngagementRoles.js 
 #### Description
This script is designed to assign or remove business and engagement roles for changed Portal LDAP user objects. It processes changes to LDAP records and updates the roles accordingly.

#### Input Parameters
- `key_field`: String (optional)
- `key_value`: String (optional)
- `log_only`: Boolean (optional)
- `debug`: Boolean (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalEnable`, `totalEnableFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionPortal`: Connection object for Cloud Portal.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `recordPortalEntitlements`: Record of Portal entitlements.
- `arrayPortalEntitlements`, `arrayPortalEntitlementIDs`: Arrays of Portal entitlements and their IDs.
- `addOnly`, `orgOnly`: Booleans indicating the type of change.
- `recordRoles`: Record of assigned roles.
- `arrayBusinessRoles`, `arrayEngagementRoles`: Arrays of business and engagement roles.
- `recordOriginalVals`, `recordNewVals`: Original and new values of the record.
- `hasChanged`: Boolean indicating if the record has changed.
- `arrayEntitlementIDs`, `arrayEntitlementsToGrant`, `arrayEntitlementsToRevoke`: Arrays of entitlement IDs to grant and revoke.
- `resultEntitlementSubmit`: Result of the entitlement submission.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.

2. **Create Connections**
- Establish connections to Portal LDAP and Cloud Portal.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

4. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

5. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Log processing information.

6. **Load Portal Entitlements**
- If Portal entitlements are not in memory, load them from the Portal API.
- Extract and store entitlements based on their classification.

7. **Evaluate Change Type**
- Determine if the change is an addition only or an organizational change.
- Log the evaluation results.

8. **Assign Roles**
- Call `FnAssignBusinessEngagementRoles` to assign business and engagement roles.
- Update the LDAP record with the assigned roles.

9. **Evaluate for Change**
- Compare original and new values of the record to detect changes.
- Log the evaluation results.

10. **Save Record**
- Save the updated LDAP record.
- Log the update process and handle errors.
- Evaluate Portal entitlements and submit requests to grant or revoke entitlements.

11. **Close Connections**
- Close all established connections to Portal LDAP and Cloud Portal.

12. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used to fetch entitlements and submit requests.

#### Response Codes/Outputs
- None explicitly mentioned.

#### Summary
This script assigns or removes business and engagement roles for changed Portal LDAP user objects. It handles various operations such as querying records, evaluating changes, assigning roles, and updating LDAP records. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 


### PDDeleteAccounts.js 
 #### Description
This script processes PortalDirectory accounts and deletes any that meet the specified deletion criteria. It handles deprovisioning from various systems before deleting the account from the PortalDirectory.

#### Input Parameters
- `logOnly`: Boolean indicating if the script should only log actions without performing deletions.
- `key_field`: String specifying the LDAP field to filter records (optional).
- `key_value`: String specifying the value for the `key_field` to filter records (optional).
- `debug`: Boolean indicating if debug information should be logged (optional).

#### Local Variables
- `sessionPD`: Connection object for Portal LDAP.
- `sessionAD`: Connection object for Active Directory.
- `process_id`: The name of the current process job.
- `accountsDeleted`: Counter for the number of accounts deleted.
- `dateNow`, `currentDate`: Current date formatted as `yyyyMMdd` and `yyyy-MM-dd` respectively.
- `outFileName`, `outFile`: Name and object for the output file logging deleted accounts.
- `results`: The set of records fetched from Portal LDAP.
- `okToDelete`, `deprovisionFailed`: Booleans indicating if the account is okay to delete and if deprovisioning failed.
- `selectedUsername`: The username selected for the user.
- `affiliations`, `isEmployee`, `isSeparatedEmployee`, `isStudent`, `isSeparatedStudent`, `isDeceased`, `isGuest`, `isLongTermGuest`, `isOverridden`: Variables indicating the user's affiliations and statuses.
- `allAccessTermDate`, `deleteDate`, `deleteDateDiff`: Dates and differences used to determine if the account should be deleted.
- `arrayProvisionedSystems`, `arrayAccounts`, `arrayAccountsDeprovisioned`: Arrays for tracking provisioned systems and deprovisioned accounts.
- `preferredEmail`: The preferred email address for the user.
- `isExternalSensor`: Boolean indicating if the user is an external sensor.
- `adRecords`, `adRecord`, `adDeleteHomeDir`, `adDeleteRecord`: Variables for handling AD records and deletions.
- `deleteResults`, `mvDeleteResults`, `recordUpdate`, `resultUpdateLDAP`: Variables for handling LDAP record updates and deletions.

#### Workflow
1. **Create Connections**
- Establish connections to Portal LDAP and Active Directory.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

2. **Initialize Variables**
- Set initial values for counters and other variables.
- Determine the process job name and set the output file name.

3. **Fetch Inactive Accounts**
- Query Portal LDAP for inactive accounts based on `key_field` and `key_value` or default criteria.
- Handle cases where no records are found.

4. **Iterate Over Records**
- For each record, log the result and reset variables.
- Skip users provisioned to `ldap` or `fs fagperson`.
- Determine user affiliations and statuses.
- Calculate deletion dates and determine if the account should be deleted.

5. **Deprovision Accounts**
- Deprovision accounts from various systems (e.g., Inspera, Active Directory).
- Handle deprovisioning failures and log actions.

6. **Delete Portal Directory Account**
- Ensure other deprovisioning jobs have completed before deleting the Portal Directory account.
- Handle deprovisioning failures and log actions.
- Delete the Portal Directory account and log the deletion.

7. **Update Portal Directory Account**
- If deprovisioning failed, update the Portal Directory account to remove deprovisioned systems from `idautoPersonAppRoles5`.

8. **Return**
- Log the number of accounts deleted and close connections.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch and delete user records.
- **Active Directory**: Used to delete user accounts and home directories.
- **Inspera**: Used to delete user accounts.

#### Response Codes/Outputs
- The script logs the number of accounts deleted and any errors encountered.

#### Summary
This script processes PortalDirectory accounts, deprovisioning them from various systems before deleting the account from the PortalDirectory. It handles different user affiliations and statuses, ensuring that only accounts meeting the deletion criteria are removed. 

 --- 

