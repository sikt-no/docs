# Enable data sharing with KUDAF

This section describes how to enable data sharing with KUDAF.

Prerequisite:

- A URL endpoint that exposes data you want to share

Users in KUDAF explore data in a catalogue. KUDAF does not store or fetch your data
and therefore depends on metadata to provide the users with relevant information
about your data.
It is therefore necessary to take your raw data and describe it in the form of metadata.

Steps to enable data sharing with KUDAF:

1. Describe your data as metadata by following [this guide](./data-describe.md)
2. Expose your metadata from an URL endpoint
3. Create a datasource in [Kundeportalen](https://kunde.feide.no/), providing both
   data and metadata endpoints.
4. Protect your data endpoint with token validation and authorization logic described
   in [this guide](./data-protect.md).
