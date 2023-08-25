---
title: Introduction
---

Welcome to [Sikt](https://sikt.no/en/home)'s API documentation for our [Data Protection Services](https://sikt.no/en/omrade/Data-Protection). Sikt is developing a new unified API that exposes the Data Protection Services' domain resources like "Meldeskjema" to consuming clients and services. Currently external access to the API is limited to user actions, but we are working to support access for external services and APIs some time in the future.

Broadly speaking the API surfaces some of the core domain resource types at Data Protection Services:

* Data Management Plan
* Meldeskjema (Notification form)
* Project
* Submission Information Package
* User

### Why use Data Protection Services API?
The API allows information hosted by Data Protection Services-services to be retrieved to update other systems. Similarly, Data Protection Services-services can retrieve information from other systems via their APIs.

When multiple systems exchange information automatically, users save from manually registering the same information in the different systems. Gives enhanced user experience, reduces manual work, saves times and improves integrity and quality of data. It also reduces development costs and efforts that would otherwise be needed to capture the same data needed for diverse services. Exchange of data and services via APIs ensures that modern systems are no more locked up in isolated silos but are integrated into federated landscape.

Institutions can retrieve information registered with Data Protection Services that corresponds to them, such as Notification Forms, Data Management Plans and archived research data. Institutions can retrieve this information to create reports, get overview or use in their internal/external systems as needed.

### Technical Information
The API is implemented as a [GraphQL](https://graphql.org/) server to facilitate graph shaped queries across these domain types. This allows you to perform queries across data in a single request. For example you could run a query to fetch your own user's name and email, as well as the title, summary, and creation date of all your projects:

```graphql
{
  me {
    name
    email
    projects {
      title
      summary
      created
    }
  }
}

```
