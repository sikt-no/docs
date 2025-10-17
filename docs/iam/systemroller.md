---
title: System roles in Rapid Identity
---

The following system roles are configured and in use for Felles IAM from G4.

<table>
  <tr>
    <th>Security Group Name<br />(Groups Module)</th>
    <th>Appliance Role Name<br />(Configuration)</th>
    <th>Privileges</th>
  </tr>
  <tr>
  <td>Sikt Administrator</td>
  <td>System Admin/Tenant Admin</td>
  <td>
  Provides full access to all modules and functions across all modules

  Note! Only for Sikt personell
  </td>
  </tr>
  <tr>
      <td>
      System Manager Institution
    </td>
     <td>
      District Manager
    </td>
     <td>
      <ul>
        <li>Configuration</li>
        <ul>
          <li>General</li>
          <ul>
            <li>Email Templates</li>
            <ul>
            <li>Sponsorship</li>
            <li>People</li>
            <li>Requests</li>
            <li>Mobile</li>
            </ul> 
          </ul>
          <li>Security</li>
          <ul>
          <li>Session Management</li>
          <li>Grant Support Access</li>
          </ul>
          <li>Systems</li>
          <ul>
          <li>Identity Bridge</li>
          </ul>
        </ul>
        <li>People</li>
        <ul>
            <li>Add Person</li>
            <li>Settings</li>
            <ul>
            <li>Delegations</li>
            <li>Sponsorship Attributes</li>
            <li>Sponsorship Templates</li>
            </ul> 
          </ul>
        <li>Roles</li>
        <ul>
            <li>My Roles</li>
            <ul>
            <li>Add Role</li>
            <li>Reports</li>
            </ul> 
          </ul>
        <li>Reports</li>
        <ul>
            <li>Shared with me</li>
            <ul>
            <li>There will be a set of pre-configured reports shared here. District Managers are not able to create these.</li>
            </ul> 
          </ul>
        <li>Requests</li>
        <ul>
            <li>Entitlements</li>
            <ul>
            <li>My Entitlements</li>
            <li>Catalog</li>
            </ul> 
            <li>Tasks</li>
            <ul>
            <li>Approvals</li>
            <li>Certifications</li>
            </ul> 
          </ul>
      </ul>
    </td>
  </tr>
  <!--neste linje-->
  <tr>
  <td>Connect Administrator</td>
  <td>Connect Admin</td>
  <td>
  Provides full access to the “Institution Name” project and Internal_processing  in the Connect Module:
  <ul>
    <li>Can see all Connect Module Information</li>
    <li>Can do all things related to files, jobs, logs, and status</li>
    <li>Can do all things related to action sets</li>
    <li>Can do all things related to RESTPoints, OAuth1, and OAuth2</li>
  </ul>
  </td>
  </tr>
  <!--neste linje-->
  <tr>
  <td>Connect Operator</td>
  <td>Connect Operator</td>
  <td>
  Provides a read-only view with processing and export capabilities to all other projects than Main in the Connect Module:
  <ul>
    <li>Can see all Connect module information</li>
    <li>Can do all things related to files, jobs, logs, and status</li>
    <li>Can view, export, and run Action Sets</li>
    <li>Can view details of existing RESTPoints, OAuth1 Consumers, and OAuth2 Credentials</li>
  </ul>
  </td>
  </tr>
<!--neste linje-->
  <tr>
  <td>Connect Auditor</td>
  <td>Connect Auditor</td>
  <td>
    Provides limited access to all projects in the Connect Module:
  <ul>
    <li>Can view and export files, jobs, and logs</li>
    <li>Can view and export action sets</li>
    <li>Can view details of existing RESTPoints, OAuth1 Consumers, and OAuth2 Credentials</li>
  </ul>
    Note! Avoid assigning the combination of Connect Administrator and Connect Auditor as that only grants access as Connect Auditor to the Connect Projects 
  </td>
  </tr>
<!--neste linje-->
  <tr>
  <td>Portal Administrator</td>
  <td>Portal Profiles Admin</td>
  <td>
    Acts as the administrator for the following Portal modules:
  <ul>
    <li>People, Accounts, and Profiles</li>
    <li>Roles</li>
    <li>Reporting and Sponsorship</li>
    <li>General Workflow</li>
  </ul>
    Note! This role alone cannot access the Configuration module.
  </td>
  </tr>
  <!--neste linje-->
  <tr>
  <td>Portal Group Manager</td>
  <td>Portal Group Manager</td>
  <td>
    Provides access to the Roles module.

    As a Portal Role Manager, you:
  <ul>
    <li>Gain access to My Roles in the Roles Modules</li>
    <li>Gain access to Team Roles in the Roles Module</li>
  </ul>
    Can become the owner or manager of a RapidIdentity Role
  </td>
  </tr>
<!--neste linje-->
  <tr>
  <td>Portal Group Viewer</td>
  <td>Portal Group Viewer</td>
  <td>
Provides access to the Roles module

As a Portal Role Viewer, you:
 <ul>
    <li>Gain access to Other Roles in the Roles module</li>
  </ul>
  </td>
  </tr>
<!--neste linje-->
  <tr>
  <td>Portal Help Desk</td>
  <td>Portal Profiles Helpdesk</td>
  <td>
Provides limited access to the People, Roles, and Requests module:
 <ul>
    <li>Access to Other Profiles in the People module</li>
    <li>Access to the Other Sponsored Accounts in the People module</li>
    <li>Access to create sponsored accounts for other sponsors</li>
    <li>Access to Other Roles in the Roles module</li>
    <li>Access to Activity in the Requests module</li>
  </ul>
  </td>
  </tr>
<!--neste linje-->
  <tr>
  <td>Portal Reporting Manager</td>
  <td>Portal Reporting Manager</td>
  <td>
Has a medium-level role within the Reports module:
 <ul>
    <li>Can create and manage saved Reports module reports</li>
    <li>Can import Community reports</li>
    <li>Can run reports</li>
  </ul>
  </td>
  </tr>
<!--neste linje-->
  <tr>
  <td>Portal Reporting Viewer</td>
  <td>Portal Reporting Viewer</td>
  <td>
A limited view of the Reports module:
 <ul>
    <li>Can only view and run saved Reports module reports</li>
  </ul>
  </td>
  </tr>
  <!--neste linje-->
  <tr>
  <td>Portal Sponsor</td>
  <td>Portal Sponsorship Sponsor</td>
  <td>
Enables an individual to be a sponsor

As a Portal Sponsor, you:
 <ul>
    <li>Gain access to the My Sponsored Accounts system delegation in the People module</li>
    <li>Can create sponsored accounts or sponsored accounts can be assigned to you to manage by another sponsor</li>
  </ul>
  </td>
  </tr>
</table>
