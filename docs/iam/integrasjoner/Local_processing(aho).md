
## G3_Local_Processing 

### PortalLdapToMoodle on 
 #### Description
This script handles user provisioning and enrollment of courses per user to Moodle. It processes user records, performs necessary transformations, and updates or creates user accounts in Moodle. The script also handles enabling, disabling, and enrolling users in courses based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `uhid` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean
- `process_total`: Number (optional)
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)
- `arrUsersToProcess`: List of UHIDs to process. Usually passed on from PortalLdapToMoodle_Courses (optional)
- `portalldap_session`: Object (optional)
- `mv_session`: Object (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchangedUser`, `totalAddUser`, `totalAddUserFail`, `totalUpdateUser`, `totalUpdateUserFail`, `totalDisableUser`, `totalDisableUserFail`, `totalUpdateCourses`, `totalUpdateCoursesFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedEntitlementsProvisioned`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToMoodle`: Boolean indicating if the user is entitled to Moodle.
- `selectedUsername`, `selectedEmail`: The username and email address selected for the user.
- `primaryAffiliation`: The primary affiliation of the user.
- `record`: The record formatted for provisioning to Moodle.
- `firstName`, `lastName`: The given name and surname of the user.
- `held_by`: The institution and student ID for the user.
- `arrCalculatedStudentCourses`, `arrCalculatedTeacherCourses`: Arrays of calculated courses for the user.
- `arrExistingCourses`: Array of existing courses for the user in Moodle.
- `arrAddCourses`, `arrCalculatedCourses`, `arrCoursesToRemove`: Arrays of courses to add, calculated courses, and courses to remove for the user.
- `courseShortname`, `term`, `year`, `course_id`, `role_id`: Variables for course details.
- `addCourseRecord`, `removeCourseRecord`: Records for adding and removing courses.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP and MV.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

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
- Set various attributes like `username`, `email`, `idnumber`, `firstname`, `lastname`, `department`, etc.
- Remove attributes that should not be provisioned to Moodle.

7. **Match and Update Moodle**
- **Check Existence in Moodle**:
    - Check if the user exists in Moodle.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Moodle and is entitled to Moodle, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Moodle, compare changes and update the account if necessary.
    - Handle enabling, disabling, and updating the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Enroll in Courses**
- Calculate and update the user's entitled courses, including role type.
- Fetch the existing user's courses from Moodle.
- Calculate which courses to add and remove based on the user's entitlements.
- Log the enrollment process and handle any errors.

9. **Close Connections**
- Close all established connections to Portal LDAP and MV.

10. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query user roles and affiliations.
- **Moodle**: The target system where user accounts are created, updated, enabled, disabled, and enrolled in courses.

#### Response Codes/Outputs
- Return a `200 OK` response if the operation to update Moodle was successful.

#### Summary
This script synchronizes user data from a portal directory to Moodle. It handles various operations such as creating, updating, enabling, disabling, and enrolling users in courses based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 


### PortalLdapToLenel on 
 #### Description
This script synchronizes user data from a portal directory to Lenel via API. It processes user records, performs necessary transformations, and updates or creates user accounts in Lenel. The script also handles enabling, disabling, renaming, and moving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `process_all`: Boolean (optional)
- `debug`: Boolean (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `lenelSessionToken`: Session token for Lenel API.
- `headers`: HTTP headers for API requests.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrEntitlements`, `arrEntitlementsProvisioned`, `arrRequestedSystemEntitlements`, `arrRequestedEntitlementsProvisioned`, `arrBusinessRoles`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToLenel`: Boolean indicating if the user is entitled to Lenel.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `primaryAffiliation`: The primary affiliation of the user.
- `record`: The record formatted for provisioning to Lenel.
- `exists`: Boolean indicating if the user exists in Lenel.
- `recordLenel`: The Lenel record of the user.
- `arrBadges`: Array of badges for the user.
- `arrExistingAccessZones`, `arrAccessLevels`, `arrCalculatedAccessZones`, `arrAccessZonesToAdd`, `arrAccessZonesToRemove`: Arrays for managing access zones.
- `accessZoneUpdateSuccessful`: Boolean indicating if the access zone update was successful.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP, MV, and Lenel.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

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
- Set various attributes like `firstname`, `lastname`, `ssno`, `ext`, etc.
- Remove attributes that should not be provisioned to Lenel.

7. **Match and Update Lenel**
- **Check Existence in Lenel**:
    - Check if the user exists in Lenel.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Lenel and is entitled to Lenel, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Lenel, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP and MV.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query user roles and affiliations.
- **Lenel**: The target system where user accounts are created, updated, enabled, disabled, moved, and renamed.

#### Response Codes/Outputs
- Return a `true` value if the operation was successful.

#### Summary
This script synchronizes user data from a portal directory to Lenel via API. It handles various operations such as creating, updating, enabling, disabling, moving, and renaming user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 


### PortalLdapToMoodle_Courses on 
 #### Description
This script handles the provisioning of courses to Moodle. It first builds the category hierarchy and then populates the different courses. The script also processes users related to the courses that have been created in Moodle.

#### Input Parameters
- `source_id` (optional, string): Iterate a single course from `master_topics`. Format: `institution:code:version`.
- `log_only` (boolean): If true, the script will only log actions without making changes.
- `skip_users` (boolean): If true, the script will skip reprocessing users related to the course.

#### Local Variables
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalAdd`, `totalAddFail`: Counters for tracking various operations and their outcomes.
- `moodleUrl`, `institution`, `this_year`, `this_month`: Configuration variables for Moodle and the current date.
- `arrCoursesToReprocess`, `arrSemesters`, `arrExistingEmnetyper`, `arrUsersToReprocess`: Arrays for storing courses, semesters, existing course types, and users to reprocess.
- `sessionPortalLDAP`, `sessionMV`: Connection objects for Portal LDAP and MetaVault (RIDB).
- `token`: The access token fetched from Moodle.
- `standardTemplateName`, `standardTemplateID`: Variables for the standard course template in Moodle.
- `current_semester`, `semester`, `current_semester_name`, `current_semester_id`, `year`: Variables for the current semester and year.
- `courseShortName`, `courseIdNumber`, `courseCategoryID`, `courseStartDate`, `courseEndDate`: Variables for course details.

#### Workflow
1. **Initialize Variables**
   - Set initial values for counters and other variables.
   - Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
   - Establish connections to Portal LDAP and MetaVault (RIDB).
   - Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Fetch Access Token from Moodle**
   - Make an HTTP POST request to fetch the access token from Moodle.
   - Handle errors if the token fetch fails.

4. **Fetch Standard Template for Courses**
   - Fetch the standard template for a course from Moodle.
   - Handle errors if the template fetch fails.

5. **Calculate Semesters to Process**
   - Determine if only the current semester or the next semester should be processed based on the current month.
   - Append the calculated semesters to `arrSemesters`.

6. **Iterate Through Semesters**
   - For each semester, reset variables and verify that the categories exist in Moodle.
   - Create top-level and sub-level categories based on the semester and course types.

7. **Create Courses**
   - Query `master_topics` to fetch relevant courses.
   - For each course, check if it already exists in Moodle.
   - If the course does not exist, create it in Moodle and insert the standard template.
   - Handle errors and log actions accordingly.

8. **Process Users Related to Courses**
   - If `skip_users` is false, reprocess users related to the courses that have been created in Moodle.
   - Fetch users from `master_persons` and reprocess them.

9. **Close Connections**
   - Close all established connections to Portal LDAP and MetaVault (RIDB).

10. **Log Results**
   - Log the results of the provisioning process, including totals for each operation and failures.

#### External Systems and Communications
- **Moodle**: The script interacts with the Moodle API to create categories and courses, and to fetch the access token and standard template.
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MetaVault (RIDB)**: Used to query course and user data.

#### Response Codes/Outputs
- The script returns `true` if the provisioning process is successful, and `false` otherwise.

#### Summary
This script provisions courses to Moodle by building the category hierarchy and populating the courses. It handles various operations such as creating categories, fetching templates, and processing users related to the courses. The script ensures data consistency and logs detailed results of the provisioning process. 

 --- 


### PortalLdapToAD on 
 #### Description
This script synchronizes user data from a portal directory to Active Directory (AD). It processes user records, performs necessary transformations, and updates or creates user accounts in AD. The script also handles enabling, disabling, renaming, and moving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `username`, `uh-username`, `idautoID` (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `process_all`: Boolean (optional)

#### Local Variables
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalRename`, `totalRenameFail`, `totalEnable`, `totalEnableFail`, `totalDisable`, `totalDisableFail`, `totalMove`, `totalMoveFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionPortal`: Connection object for Cloud Portal.
- `sessionMV`: Connection object for MV (RIDB).
- `sessionAD`: Connection object for Active Directory.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrSystemEntitlements`, `arrSystemEntitlementsProvisioned`: Arrays of system entitlements and provisioned entitlements for the user.
- `isEntitledToAD`: Boolean indicating if the user is entitled to AD.
- `isProvisionedToAD`: Boolean indicating if the user is provisioned to AD.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `hasReservationFlag`: Boolean indicating if the user has a reservation flag.
- `title`: The job title of the user.
- `affiliation`: The affiliation of the user.
- `primaryAffiliation`: The primary affiliation of the user.
- `record`: The record formatted for provisioning to AD.
- `cn`: The common name of the user.
- `orgLevels`: Organizational levels fetched from MV.
- `orgLevel`: The formatted organizational level.
- `stedkode`: The location code.
- `arrBusinessroles`: Array of business roles for the user.
- `extensionAttribute1`: The extension attribute for the user.
- `departmentNumber`: The department number for the user.
- `givenName`, `sn`: The given name and surname of the user.
- `fullNameEmailAddress`: The full name email address for the user.
- `fneaCreated`: Boolean indicating if the full name email address was created.
- `recordManager`: The LDAP record of the user's manager.
- `managerUsername`: The username of the user's manager.
- `recordADManagers`: The AD records of the user's manager.
- `arrFieldNames`: Array of field names in the record.
- `exists`: Boolean indicating if the user exists in AD.
- `adRecord`: The AD record of the user.
- `arrProxyAddresses`: Array of proxy addresses for the user.
- `passwordPolicy`: The password policy ID.
- `password`: The generated password for the user.
- `extProperties`: Extended properties for the user.
- `changes`: The changes detected in the record.
- `fieldNames`: The field names of the changes.
- `isDisabledInAD`: Boolean indicating if the user is disabled in AD.
- `currentPlacement`, `newPlacement`: The current and new placements of the user in AD.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP, Cloud Portal, MV, and AD.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

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
- Set various attributes like `cn`, `employeeType`, `department`, `title`, etc.
- Remove attributes that should not be provisioned to AD.

7. **Match and Update AD**
- **Check Existence in AD**:
    - Check if the user exists in AD.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in AD and is entitled to AD, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in AD, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP, Cloud Portal, MV, and AD.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **Cloud Portal**: Used to fetch password policies and generate passwords.
- **MV (RIDB)**: Used to query organizational levels.
- **Active Directory (AD)**: The target system where user accounts are created, updated, enabled, disabled, moved, and renamed.

#### Response Codes
- None explicitly mentioned.

#### Summary
This script synchronizes user data from a portal directory to Active Directory. It handles various operations such as creating, updating, enabling, disabling, moving, and renaming user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 



### PortalLdapToWISEflow  
 #### Description
This script provisions users and roles to WISEflow. It processes user records from a portal directory, performs necessary transformations, and updates or creates user accounts in WISEflow. The script also handles enabling, disabling, and updating user roles based on specific conditions.

#### Input Parameters
- `key_field`: String (optional)
- `key_value`: String (optional)
- `log_only`: Boolean (optional)
- `debug`: Boolean (optional)
- `process_all`: Boolean (optional)
- `load`: Boolean

#### Local Variables
- `fnr`, `feideID`, `pln`: Local user data types.
- `rolesToProvision`: Array of roles that RI is allowed to provision/deprovision.
- `langMap`: Mapping of languages to their respective codes.
- `actionSetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalEnable`, `totalEnableFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `policyFile`: The policy file for WISEflow ruleset.
- `processedAccounts`: Array to keep track of processed accounts.
- `targetSystem`: The target system, which is WISEflow.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `arrAllRoles`: Array of all roles retrieved from WISEflow.
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `isAssignedReq`, `isProvisionedReq`: Booleans indicating if the user is assigned or provisioned for the target system.
- `arrTargetSystemAssignedReq`, `arrTargetSystemProvisionedReq`: Arrays of assigned and provisioned requests for the target system.
- `isDisabled`: Boolean indicating if the user is disabled.
- `arrEmails`, `arrEmailsToAdd`, `arrEmailsToRemove`, `arrayEmailsRemoved`, `arrayEmailsFailedToRemove`: Arrays for managing user emails.
- `arrExternalIDs`, `arrExtIDsToAdd`, `arrExtIDsToRemove`, `arrExtIDSRemoved`, `arrExtIDSFailedToRemove`: Arrays for managing user external IDs.
- `arrBusRoles`: Array of business roles for the user.
- `isExternalSensor`: Boolean indicating if the user is an external sensor.
- `hasFnrChanged`, `hasFnr`: Booleans indicating if the user's national ID has changed or exists.
- `selectedUsername`: The username selected for the user.
- `primaryEmail`, `secondaryEmail`: The primary and secondary email addresses for the user.
- `arrEmailObjects`: Array of email objects for the user.
- `preferred_language`: The preferred language of the user.
- `recordePPNIdentifier`, `recordBirthnumberIdentifier`, `recordFSIdentifier`: Records for external IDs.
- `authorizedAccesses`, `arrayAuthorizedAccesses`: Authorized accesses for the user.
- `arrRoles`: Array of roles for the user.
- `exists`, `baseObject`: Objects for checking if the user exists in WISEflow.
- `isLoginDeactivated`, `existingPreferredLanguage`: Booleans and strings for managing user login status and preferred language.
- `recordUpdate`, `recordRemove`: Records for updating and removing user data in Portal LDAP.
- `oldRoles`, `arrOldEmails`, `existingPrimaryEmail`, `existingOtherEmails`, `existingOtherEmailsArr`: Arrays and objects for managing existing user roles and emails.
- `arrOldExtIds`, `arrNewRoles`, `arrNewExtIds`: Arrays for managing existing and new user roles and external IDs.
- `recordCheckChangeNew`, `recordCheckChangeOld`: Records for checking changes in user data.
- `hasBaseRecordChanged`, `hasRolesChanged`, `hasExternalIdsChanged`, `hasEmailChanged`: Booleans indicating if the base record, roles, external IDs, or emails have changed.
- `arrRolesToAdd`, `arrRolesToRemove`: Arrays for managing roles to add or remove.
- `arrPatchExtID`, `arrPatchClean`: Arrays for managing external IDs to patch.
- `arrExtIDsToAdd`, `arrExtIDsToRemove`: Arrays for managing external IDs to add or remove.
- `arrEmailsToAdd`, `arrEmailsToRemove`: Arrays for managing emails to add or remove.
- `isUpdateSuccessful`: Boolean indicating if the update was successful.
- `recordUpdateWf`, `recordDisableWf`: Records for updating and disabling user data in WISEflow.
- `extCreate`, `extPutRecord`, `extDisableRecord`, `extLDAPUpdate`: Extended properties for logging audit events.
- `resultAddRoles`, `resultRemoveRole`, `resultPostEmails`, `resultPatchPrimaryEmail`, `resultPatchExtId`, `resultDeleteExtIDs`, `resultPostExtIDs`: Results of various operations.
- `arrRemovedRoles`, `arrRolesFailedToRemove`, `arrExtIDSRemoved`, `arrExtIDSFailedToRemove`: Arrays for managing removed roles and external IDs.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Retrieve Roles from WISEflow**
- Fetch all roles from WISEflow and handle errors if any.

4. **Set Cookie**
- Determine the appropriate cookie based on `log_only` parameter.

5. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

6. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Determine user entitlements and provisioning status.
- Log processing information.

7. **Transform Record**
- Perform static and dynamic transformations on the record.
- Set various attributes like `firstName`, `lastName`, `emails`, `phone`, `preferred_language`, `externalIds`, etc.

8. **Access Logic**
- Determine authorized accesses for the user based on the policy file.
- Append accesses to the record.

9. **Query System for User**
- Check if the user exists in WISEflow using various identifiers.
- Handle errors and duplicate accounts.

10. **Create or Update User**
- **Create New User**:
    - If the user does not exist in WISEflow and is assigned or requested, create a new user.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update or Disable User**:
    - If the user exists in WISEflow, compare changes and update the account if necessary.
    - Handle enabling, disabling, and updating roles, emails, and external IDs based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

11. **Update Portal LDAP**
- Update or remove user data in Portal LDAP based on the changes made in WISEflow.
- Log the update process and handle errors if any.

12. **Close Connections**
- Close all established connections to Portal LDAP.

13. **Log Results**
- Log the results of the provisioning process, including totals for each operation and failures.

#### External Systems and Communications
- **WISEflow**: The script interacts with the WISEflow API to perform user provisioning, updating, and disabling. The primary endpoints used are for retrieving roles, creating users, updating users, and managing user roles, emails, and external IDs.
- **Portal LDAP**: Used to fetch user records and update user attributes.

#### Response Codes/Outputs
- None explicitly mentioned.

#### Summary
This script provisions users and roles to WISEflow by processing user records from a portal directory, performing necessary transformations, and updating or creating user accounts in WISEflow. It handles various operations such as enabling, disabling, and updating user roles, emails, and external IDs based on specific conditions. The script ensures data consistency and logs detailed results of the provisioning process. 

 --- 

