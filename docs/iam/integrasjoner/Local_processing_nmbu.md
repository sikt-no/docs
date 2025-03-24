---
title: Local Processing - NMBU
---

## G3_Local_Processing 

### PortalLDAPToTopDesk  
 #### Description
This script synchronizes user data from the Portal LDAP directory to TopDesk. It processes user records, performs necessary transformations, and updates or creates user accounts in TopDesk. The script also handles enabling, disabling, and archiving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: String (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `report_file`: Boolean (optional)
- `debug`: Boolean (optional)
- `reprocess_all`: Boolean (optional)
- `reprocess_unprovisioned_users`: Boolean (optional)

#### Local Variables
- `arrCountryCodesToStrip`: Array of country codes to strip from phone numbers.
- `targetSystem`: The target system, which is TopDesk.
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalEnable`, `totalEnableFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `roles`: Array of roles for the user.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `isEntitled`, `isProvisioned`, `isEntitledReq`, `isProvisionedReq`: Booleans indicating the user's entitlements and provisioning status.
- `branch`, `department`, `budgetHolder`, `recordManager`, `recordPrivateDetails`, `optionalFields1`, `personExtraFieldA`: Various records and objects used for transformations and provisioning.
- `currentID`, `currentOperatorID`: Current IDs for the user in TopDesk.
- `recordTopDesk`, `recordTopDeskOperator`: Records fetched from TopDesk.
- `isArchived`, `isOperatorArchived`: Booleans indicating if the user or operator is archived in TopDesk.
- `isDeprovisionSuccessful`: Boolean indicating if the deprovisioning process was successful.
- `recordEntitlementsSucessfullyDeprovisioned`: Record of entitlements successfully deprovisioned.
- `arrayEntitlementsSucessfullyProvisioned`: Array of entitlements successfully provisioned.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP and MV.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Fetch Data from TopDesk**
- Fetch branches, departments, budget holders, and archiving reasons from TopDesk.
- Handle errors by logging and invoking `G3_ErrorHandler`.

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
- Set various attributes like `firstName`, `surName`, `jobTitle`, `networkLoginName`, `email`, `mobileNumber`, etc.
- Create and set objects for branch, department, budget holder, manager, and private details.
- Filter record fields to only include attributes being provisioned.

8. **Sync Person Data to TopDesk**
- Query TopDesk for the user based on the current ID or username.
- Handle errors and log results.
- Save the person record to TopDesk and update Portal LDAP with provisioning status.
- Handle archiving and unarchiving of users based on entitlements.

9. **Sync Operator Data to TopDesk**
- Create and transform the operator record.
- Query TopDesk for the operator based on the current ID or email.
- Handle errors and log results.
- Save the operator record to TopDesk and update Portal LDAP with provisioning status.
- Handle archiving and unarchiving of operators based on entitlements.

10. **Deprovision Requestables**
- Deprovision requestable entitlements if necessary.
- Handle errors and log results.

11. **Close Connections**
- Close all established connections to Portal LDAP and MV.

12. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query organizational levels.
- **TopDesk**: The target system where user accounts are created, updated, enabled, disabled, and archived.

#### Response Codes/Outputs
- None explicitly mentioned.

#### Summary
This script synchronizes user data from the Portal LDAP directory to TopDesk. It handles various operations such as creating, updating, enabling, disabling, and archiving user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 


## G3_Local_Processing 

### PortalLDAPToTopDesk  
 #### Description
This script synchronizes user data from the Portal LDAP directory to TopDesk. It processes user records, performs necessary transformations, and updates or creates user accounts in TopDesk. The script also handles enabling, disabling, and archiving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: String (optional)
- `key_value`: String (optional)
- `process_total`: Number (optional)
- `log_only`: Boolean (optional)
- `report_file`: Boolean (optional)
- `debug`: Boolean (optional)
- `reprocess_all`: Boolean (optional)
- `reprocess_unprovisioned_users`: Boolean (optional)

#### Local Variables
- `arrCountryCodesToStrip`: Array of country codes to strip from phone numbers.
- `targetSystem`: The target system, which is TopDesk.
- `actionSetName`: The name of the current action set.
- `fileDate`: The current date formatted as `yyyyMMdd`.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdd`, `totalAddFail`, `totalUpdate`, `totalUpdateFail`, `totalEnable`, `totalEnableFail`, `totalDisable`, `totalDisableFail`: Counters for tracking various operations and their outcomes.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `cookie`: The cookie used for LDAP change tracking.
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `roles`: Array of roles for the user.
- `selectedUsername`: The username selected for the user.
- `selectedEmail`: The email address selected for the user.
- `isEntitled`, `isProvisioned`, `isEntitledReq`, `isProvisionedReq`: Booleans indicating the user's entitlements and provisioning status.
- `branch`, `department`, `budgetHolder`, `recordManager`, `recordPrivateDetails`: Various records for user attributes.
- `isArchived`, `isOperatorArchived`: Booleans indicating if the user or operator is archived.
- `currentID`, `currentOperatorID`: Current IDs for the user and operator in TopDesk.
- `recordTopDesk`, `recordTopDeskOperator`: Records fetched from TopDesk for the user and operator.
- `isDeprovisionSuccessful`: Boolean indicating if deprovisioning was successful.
- `recordEntitlementsSucessfullyDeprovisioned`: Record of successfully deprovisioned entitlements.
- `arrayEntitlementsSucessfullyProvisioned`: Array of successfully provisioned entitlements.

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
- Set various attributes like `firstName`, `surName`, `jobTitle`, `networkLoginName`, `email`, `mobileNumber`, etc.
- Create and set additional records for `branch`, `department`, `budgetHolder`, `manager`, and `privateDetails`.

7. **Match and Update TopDesk**
- **Check Existence in TopDesk**:
    - Check if the user exists in TopDesk.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in TopDesk and is entitled, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in TopDesk, compare changes and update the account if necessary.
    - Handle enabling, disabling, and archiving of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP and MV.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query organizational levels.
- **TopDesk**: The target system where user accounts are created, updated, enabled, disabled, and archived.

#### Response Codes/Outputs
- None explicitly mentioned.

#### Summary
This script synchronizes user data from the Portal LDAP directory to TopDesk. It handles various operations such as creating, updating, enabling, disabling, and archiving user accounts based on specific conditions. The script ensures data consistency and logs detailed results of the synchronization process. 

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
- `isAssigned`, `isProvisioned`, `isAssignedReq`, `isProvisionedReq`: Booleans indicating the user's assignment and provisioning status.
- `isDisabled`: Boolean indicating if the user is disabled.
- `arrEmails`, `arrEmailsToAdd`, `arrEmailsToRemove`, `arrayEmailsRemoved`, `arrayEmailsFailedToRemove`: Arrays for managing user emails.
- `arrExternalIDs`, `arrExtIDsToAdd`, `arrExtIDsToRemove`, `arrExtIDSRemoved`, `arrExtIDSFailedToRemove`: Arrays for managing user external IDs.
- `record`: The record formatted for provisioning to WISEflow.
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
- `exists`, `baseObject`: Objects indicating if the user exists in WISEflow.
- `isLoginDeactivated`, `existingPreferredLanguage`: Booleans indicating if the user's login is deactivated and their existing preferred language.
- `recordUpdate`, `recordRemove`: Records for updating and removing user data in Portal LDAP.
- `oldRoles`, `arrOldRoles`, `arrNewRoles`: Arrays for managing old and new roles.
- `arrOldEmails`, `existingPrimaryEmail`, `existingOtherEmails`, `existingOtherEmailsArr`: Arrays and objects for managing old emails.
- `arrOldExtIds`, `arrNewExtIds`, `arrPatchExtID`: Arrays for managing old and new external IDs.
- `hasBaseRecordChanged`, `hasRolesChanged`, `hasExternalIdsChanged`, `hasEmailChanged`, `hasRecordChanged`: Booleans indicating if various parts of the record have changed.
- `arrRolesToAdd`, `arrRolesToRemove`: Arrays for managing roles to add and remove.
- `arrExtIDsToAdd`, `arrExtIDsToRemove`, `arrPatchExtID`: Arrays for managing external IDs to add, remove, and patch.
- `isUpdateSuccessful`: Boolean indicating if the update was successful.
- `recordUpdateWf`, `recordDisableWf`: Records for updating and disabling user data in WISEflow.
- `putResults`, `disableResults`: Results of the PUT operations in WISEflow.
- `extCreate`, `extPutRecord`, `extDisableRecord`: Extended properties for the user.
- `resultAddRoles`, `resultRemoveRole`, `resultPostEmails`, `resultPatchPrimaryEmail`, `resultPatchExtId`, `resultDeleteExtIDs`, `resultPostExtIDs`: Results of various operations in WISEflow.
- `arrRemovedRoles`, `arrRolesFailedToRemove`: Arrays for managing removed and failed-to-remove roles.
- `arrExtIDSRemoved`, `arrExtIDSFailedToRemove`: Arrays for managing removed and failed-to-remove external IDs.
- `extAddRoles`, `extRoles`, `extPatchExtID`, `extRemoveExtID`, `extFailedRemoveExtID`, `extLDAPUpdate`: Extended properties for various operations.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Retrieve Roles from WISEflow**
- Fetch all roles from WISEflow.
- Handle errors by logging and invoking `G3_ErrorHandler`.

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
- Set roles for the user.

9. **Query System for User**
- Check if the user exists in WISEflow using various identifiers.
- Handle errors and duplicate accounts.

10. **Create or Update User**
- **Create New User**:
    - If the user does not exist in WISEflow and is assigned or requested, create a new user.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update or Disable User**:
    - If the user exists in WISEflow, compare changes and update the account if necessary.
    - Handle enabling, disabling, and updating roles, emails, and external IDs.
    - Log the update process and update Portal LDAP with provisioning status if needed.

11. **Update Portal LDAP**
- Update or remove user data in Portal LDAP based on the changes made in WISEflow.

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
This script provisions users and roles to WISEflow by processing user records from a portal directory, performing necessary transformations, and updating or creating user accounts in WISEflow. It handles various operations such as creating, updating, enabling, disabling, and managing user roles, emails, and external IDs. The script ensures data consistency and logs detailed results of the provisioning process. 

 --- 


### PortalLdapToBergHansenCSV  
 #### Description
This script generates a CSV file containing employee data formatted for Berg-Hansen. It retrieves data from a Portal LDAP, processes it, and optionally uploads the file to a remote SFTP server.

#### Input Parameters
- `log_only`: Boolean indicating whether to only log the output without uploading it to the remote server.

#### Local Variables
- `genderTitleMap`: A mapping of gender codes to titles (Mr/Ms).
- `gender`: A variable to store the gender of the employee.
- `date`: The current date formatted as `yyyyMMdd`.
- `hours`: The current time formatted as `HHmmss`.
- `outputFileName`: The name of the output CSV file.
- `localFilePath`: The local directory path where the output file will be saved.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `fileOut`: The file output object for writing the CSV file.
- `remoteFileSys`: The remote filesystem object for SFTP connection.
- `ldapRecords`: The set of records fetched from Portal LDAP.
- `outputData`: An array to store the formatted output data.
- `recordBergHansen`: A record object to store the formatted data for each employee.
- `formattedBirthdate`: The formatted birthdate of the employee.
- `selectedUsername`: The selected username for the employee.
- `selectedEmail`: The selected email address for the employee.
- `splitDeptCode`: An array containing the split department code.
- `numRecords`: The number of records in the output data array.
- `formattedTime`: The current date and time formatted as `yyyy-MM-dd HH:mm:ss:ms`.
- `outputStr`: The final output string to be written to the CSV file.
- `result`: The result of the file save operation.

#### Workflow
1. **Initialize Variables**
- Set initial values for variables and format the current date and time.

2. **Create Connections**
- Establish a connection to Portal LDAP.
- Handle connection errors by logging and returning.

3. **Open Output File**
- Open the local output file for writing in ISO-8859-1 character set.
- If `log_only` is false, establish a remote SFTP connection.

4. **Query Records**
- Fetch employee records from Portal LDAP based on specific filters and attributes.

5. **Process Records**
- Iterate over each LDAP record and format the data for Berg-Hansen.
- Populate the `recordBergHansen` object with formatted values.
- Append the formatted record to the `outputData` array.

6. **Write Data**
- Insert the header row into the `outputData` array.
- Join the array into a single string and write it to the local output file.
- If `log_only` is false, upload the file to the remote SFTP server.

7. **Close Connections**
- Close the local output file and the Portal LDAP connection.
- If a remote SFTP connection was established, close it as well.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch employee records and attributes.
- **Remote SFTP Server**: Optionally used to upload the generated CSV file.

#### Response Codes/Outputs
- The script logs the output data and the result of the file save operation.
- If `log_only` is false, the script uploads the file to the remote SFTP server and logs the result.

#### Summary
This script generates a CSV file containing employee data formatted for Berg-Hansen. It retrieves data from Portal LDAP, processes it, and optionally uploads the file to a remote SFTP server. The script handles various data formatting requirements and ensures that the output is correctly structured for Berg-Hansen's needs. 

 --- 


### PortalLdapToCristin  
 #### Description
This script generates an XML file for uploading to Cristin via SFTP. It collects organization and person data, formats it into the required XML structure, validates the XML, and uploads it to the Cristin server. The script also updates the provisioning status for users after the file is successfully uploaded.

#### Input Parameters
- `verbose`: Boolean (optional) to enable verbose logging.

#### Local Variables
- `sessionMV`: Connection object for MetaVault (RIDB).
- `sessionPortalLDAP`: Connection object for MetaDirectory LDAP.
- `configuration_file`: The configuration file loaded as a string.
- `configuration`: Parsed JSON configuration.
- `today_date`, `today_date_filename`: Current date in different formats.
- `filename`, `filepath`: Name and path of the output XML file.
- `keyword`: Keyword for provisioning status.
- `orgdata_file`: Organization data file loaded as a string.
- `orgdata`: Parsed JSON organization data.
- `organizations`: Array of organization data.
- `org_lookup`: Lookup table for organization keys.
- `master_persons`: Array of master person data.
- `master_person_lookup`: Lookup table for master person data.
- `userRecords`: Array of user records fetched from LDAP.
- `people`, `new_users`, `removed_users`: Arrays to store processed user data.
- `encoding`: Character encoding for the XML file.
- `file`: File output object for the XML file.
- `fileAsString`: XML file content as a string.
- `xml_object`: Parsed XML object.
- `is_valid_xml`: Boolean indicating if the XML is valid.
- `sftpPrivKey`: SFTP private key loaded as a string.
- `remoteFileSys`: Remote filesystem object for SFTP.
- `cristin_file`: XML file content for uploading.
- `result`: Result of the file upload operation.
- `list`: List of files on the remote server.

#### Workflow
1. **Initialize Variables**
- Establish connections to MetaVault and MetaDirectory.
- Load and parse the configuration file.
- Set the current date and filename for the XML file.

2. **Collect Organization Data**
- Load and parse the organization data file.
- Populate the `organizations` array and `org_lookup` table.

3. **Person Position Lookup**
- Query the master person data from MetaVault.
- Populate the `master_person_lookup` table.

4. **Collect Person Data**
- Fetch user records from MetaDirectory based on specific filters.
- Process each user record to extract relevant information and populate the `people`, `new_users`, and `removed_users` arrays.

5. **Write XML File**
- Open the XML file for writing with the specified encoding.
- Write the XML header, description, institution, organization, and person data to the file.
- Close the XML file.

6. **Validate XML Format**
- Load the XML file as a string and parse it to check if it is valid XML.
- Log the validation result.

7. **Transfer File to Cristin**
- Establish an SFTP connection to the Cristin server.
- Upload the XML file to the server.
- Log the upload result and list the files on the remote server.
- Close the SFTP connection.

8. **Update Provisioning Status**
- Update the provisioning status for new and removed users in MetaDirectory.

#### External Systems and Communications
- **MetaVault (RIDB)**: Used to query master person data.
- **MetaDirectory LDAP**: Used to fetch user records and update provisioning status.
- **Cristin Server**: The target system for uploading the XML file via SFTP.

#### Response Codes/Outputs
- The script logs various messages indicating the progress and results of each step.
- The XML file is uploaded to the Cristin server, and the provisioning status for users is updated.

#### Summary
This script automates the process of generating and uploading an XML file to Cristin. It ensures that the data is correctly formatted and validated before uploading. The script also handles updating the provisioning status for users, making it a comprehensive solution for Cristin data synchronization. 

 --- 


### IntegraToPortalLDAP_OrgAccessZones  
 #### Description
This script fetches access zones from Integra based on organizational units and updates the ruleset in the `integra_org_accesszones on` file. The script iterates through organizational units, fetches corresponding access zones from Integra, and updates the ruleset accordingly.

#### Input Parameters
- `log_only`: Boolean indicating whether to run the script in log-only mode.

#### Local Variables
- `actionsetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdded`, `totalAddedFail`: Counters for tracking various operations and their outcomes.
- `arrRules`: Array to store the rules to be added to the ruleset.
- `sessionPortalLDAP`: Connection object for Portal LDAP.
- `sessionMV`: Connection object for MV (RIDB).
- `orgunits`: The set of organizational units fetched from the database.
- `stedkode`: The location code derived from the organizational unit.
- `arrTypes`: Array of types to be processed (e.g., `ANSATT`, `ASSOSIERT`).
- `integraId`: The ID of the access zone fetched from Integra.
- `recordOrg`: The record object for the organizational unit.
- `perpetrator`: The perpetrator object for the organizational unit.
- `rules`: The ruleset object to be saved to the file.
- `success`: Boolean indicating whether the file update was successful.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.

2. **Create Connections**
- Establish connections to Portal LDAP and MV.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Query Organizational Units**
- Fetch organizational units from the `orgreg_load` table in MV.
- Log the number of organizational units fetched.

4. **Iterate Through Organizational Units**
- For each organizational unit, derive the `stedkode` and iterate through the types (`ANSATT`, `ASSOSIERT`).
- Fetch the access zone ID from Integra using the `FnIntegraOperations` function.
- If the access zone is not found, log the message and continue to the next type.
- Create a record for the organizational unit and set its fields.
- Append the record to the `arrRules` array.
- Increment the `totalAdded` counter.

5. **Update Ruleset File**
- Create a ruleset object and set its `rules` field to the `arrRules` array.
- If running in log-only mode, log the ruleset object.
- Otherwise, save the ruleset object to the `integra_org_accesszones on` file.
- Log the success or failure of the file update.

6. **Close Connections**
- Close all established connections to Portal LDAP and MV.

7. **Log Results**
- Log the results of the script execution, including totals for each operation and failures.

#### External Systems and Communications
- **Integra**: Used to fetch access zone IDs based on organizational unit names.
- **Portal LDAP**: Used to establish a connection for potential future operations.
- **MV (RIDB)**: Used to query organizational units from the `orgreg_load` table.

#### Response Codes/Outputs
- The script logs the results of the execution, including totals for each operation and failures.

#### Summary
This script fetches access zones from Integra based on organizational units and updates the ruleset in the `integra_org_accesszones on` file. It handles various operations such as fetching organizational units, querying access zones, creating records, and updating the ruleset file. The script ensures data consistency and logs detailed results of the execution process. 

 --- 


### PortalLDAPToIntegra  
 #### Description
This script handles the provisioning of new and updated users to Integra. It processes user records, performs necessary transformations, and updates or creates user accounts in Integra. The script also handles enabling, disabling, and moving user accounts based on specific conditions.

#### Input Parameters
- `key_field`: Enum: `idautoPersonSystem1ID`, `idautoPersonSAMAccountName`, `idautoID` (optional)
- `key_value`: String (optional)
- `log_only`: Boolean
- `debug`: Boolean (optional)

#### Local Variables
- `actionsetName`: The name of the current action set.
- `total`, `totalSkipped`, `totalUnchanged`, `totalAdded`, `totalAddedFail`, `totalUpdated`, `totalUpdatedFail`, `totalDisabled`, `totalDisabledFail`: Counters for tracking various operations and their outcomes.
- `norwegianTime`, `formatter`, `timeNow`: Variables for handling the current time in Norwegian time zone.
- `processedAccounts`: Array to keep track of processed accounts.
- `cookie`: The cookie used for LDAP change tracking.
- `fileAccessZones`, `fileOrgAccessZones`: JSON files containing access zone rules.
- `arrAccessZonesMaintainedByRI`: Array of access zones maintained by RI.
- `sessionPortalLDAP`, `sessionMV`: Connection objects for Portal LDAP and MV (RIDB).
- `recordChanges`: The set of records fetched from Portal LDAP.
- `recordChange`: The current record being processed.
- `recordLDAP`: Detailed LDAP record of the current user.
- `arrEntitlements`, `arrAppRoles4`, `arrEntitlementsProvisioned`, `arrRequestedEntitlements`, `arrRequestedEntitlementsProvisioned`, `arrBusinessRoles`: Arrays of entitlements and roles for the user.
- `isEntitledToIntegra`: Boolean indicating if the user is entitled to Integra.
- `selectedUsername`, `selectedEmail`: The username and email address selected for the user.
- `record`: The record formatted for provisioning to Integra.
- `givenName`, `sn`: The given name and surname of the user.
- `startDate`: The start date for the user.
- `employeeType`: The type of employee (e.g., `ansatt`, `assosiert`, `student`).
- `arrCalculatedAccessZones`, `arrStedkode`: Arrays for calculated access zones and location codes.
- `arrParentFolderPath`: Array for the parent folder path.
- `exists`: Boolean indicating if the user exists in Integra.
- `recordIntegra`: The Integra record of the user.
- `accessCards`: Array of access cards for the user.
- `hasUserChanges`, `hasAccessZoneChanges`: Booleans indicating if there are changes to the user or access zones.
- `arrExistingAccessZones`, `arrAccessZonesToAdd`, `arrAccessZonesToRemove`: Arrays for existing, added, and removed access zones.
- `changes`, `changedFieldNames`: The changes detected in the record and their field names.
- `recordAdd`, `recordRemove`: Records for adding and removing attributes in Portal LDAP.
- `extProperties`: Extended properties for the user.

#### Workflow
1. **Initialize Variables**
- Set initial values for counters and other variables.
- Adjust `key_field` and `key_value` based on input parameters.

2. **Create Connections**
- Establish connections to Portal LDAP and MV.
- Handle connection errors by logging and invoking `G3_ErrorHandler`.

3. **Fetch Access Zones**
- Load and parse JSON files for access zones.
- Populate `arrAccessZonesMaintainedByRI` with access zones maintained by RI.

4. **Query Records**
- Fetch records from Portal LDAP based on `key_field` and `key_value`.
- If no specific key is provided, use a change iterator to fetch records.

5. **Iterate Over Records**
- For each record, skip if the change type is "delete".
- Fetch detailed LDAP record and skip if essential attributes are missing.
- Skip accounts already processed.
- Determine user entitlements and provisioning status.
- Log processing information.

6. **Transform Record**
- Perform static and dynamic transformations on the record.
- Set various attributes like `FirstName`, `Surname`, `ControlNumber`, `ExtendedInfo1`, `ExtendedInfo2`, `ExtendedInfo3`, `ExtendedInfo4`, `ExtendedInfo5`, `ExtendedInfo7`, `FreeInfo1`, `accessZones`, `ParentFolderPath`, etc.
- Remove attributes that should not be provisioned to Integra.

7. **Match and Update Integra**
- **Check Existence in Integra**:
    - Check if the user exists in Integra.
    - Handle errors and duplicate accounts.
- **Create New Account**:
    - If the user does not exist in Integra and is entitled to Integra, create a new account.
    - Perform necessary data formation and set attributes.
    - Log the creation process and update Portal LDAP with provisioning status.
- **Update Existing Account**:
    - If the user exists in Integra, compare changes and update the account if necessary.
    - Handle enabling, disabling, moving, and renaming of the account based on the user's entitlements and changes.
    - Log the update process and update Portal LDAP with provisioning status if needed.

8. **Close Connections**
- Close all established connections to Portal LDAP and MV.

9. **Log Results**
- Log the results of the synchronization process, including totals for each operation and failures.

#### External Systems and Communications
- **Portal LDAP**: Used to fetch user records and update user attributes.
- **MV (RIDB)**: Used to query user roles and affiliations.
- **Integra**: The target system where user accounts are created, updated, enabled, disabled, and moved.

#### Response Codes/Outputs
- None explicitly mentioned.

#### Summary
This script handles the provisioning of new and updated users to Integra. It processes user records, performs necessary transformations, and updates or creates user accounts in Integra. The script ensures data consistency and logs detailed results of the synchronization process. 

 --- 

