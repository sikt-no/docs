---
title: Cristin
---

## PortalLdapToCristin
 ### Description
This script generates an XML file for uploading to Cristin via SFTP. It collects organization and person data, formats it according to Cristin's XML schema, and transfers the file to Cristin's server.

### Input Parameters
- `verbose`: Boolean (optional) to enable detailed logging.

### Local Variables
- `sessionMV`: Connection object for MetaVault (RIDB).
- `sessionPortalLDAP`: Connection object for MetaDirectory LDAP.
- `configuration_file`: Configuration file for Cristin settings.
- `configuration`: Parsed JSON configuration.
- `today_date`, `today_date_filename`: Current date in different formats.
- `filename`, `filepath`: Name and path of the output XML file.
- `keyword`: Keyword for Cristin.
- `orgdata_file`: File containing organization data.
- `orgdata`: Parsed JSON organization data.
- `organizations`: Array of organization records.
- `org_lookup`: Lookup table for organization keys.
- `master_persons`: Array of master person records.
- `master_person_lookup`: Lookup table for master person records.
- `userRecords`: Array of user records from LDAP.
- `people`, `new_users`, `removed_users`: Arrays to store processed user records.
- `encoding`: Encoding format for the XML file.
- `file`: File object for writing the XML file.
- `fileAsString`, `xml_object`, `is_valid_xml`: Variables for XML validation.
- `sftpPrivKey`, `remoteFileSys`, `cristin_file`, `result`, `list`: Variables for SFTP transfer.

### Workflow
1. **Initialize Variables**
   - Establish connections to MetaVault and MetaDirectory.
   - Load and parse configuration files.
   - Set date and filename variables.

2. **Collect Organization Data**
   - Load organization data from a JSON file.
   - Populate organization records and lookup table.

3. **Person Position Lookup**
   - Query master person records from MetaVault.
   - Populate master person lookup table.

4. **Collect Person Data**
   - Query user records from LDAP based on Cristin roles.
   - Validate and process user records.
   - Determine provisioning status and set end dates for deprovisioned users.

5. **Write XML File**
   - Open the XML file for writing.
   - Write header, description, institution, organization, and person data.
   - Close the file.

6. **Validate XML Format**
   - Load the XML file as a string and parse it.
   - Check if the file is valid XML.

7. **Transfer File to Cristin**
   - Establish SFTP connection to Cristin's server.
   - Upload the XML file.
   - List files on the server and close the connection.

8. **Update Provisioning Status**
   - Update provisioning status for new and removed users in LDAP.

### External Systems and Communications
- **MetaVault (RIDB)**: Used to query master person records.
- **MetaDirectory LDAP**: Used to fetch user records and update provisioning status.
- **Cristin**: Target system for uploading the XML file via SFTP.

### Response Codes/Outputs
- The script generates an XML file named `umb-cristin-<date>.xml` and uploads it to Cristin's server.

### Summary
This script automates the process of generating and uploading an XML file to Cristin. It ensures that organization and person data are correctly formatted and transferred, and updates provisioning status for users accordingly. 

 --- 
