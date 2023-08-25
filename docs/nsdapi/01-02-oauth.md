---
title: OAuth 2.0
order: 3
permalink: oauth
layout: doc
---

The NSD GraphQL API uses OAuth 2.0/OpenID Connect both internally and for external applications to make API calls on behalf of your organization.


## Request an access token (Service-to-service)

To obtain an access token you will first need to register a client application, then use the generated client ID and client secret to get an access token.


### Example

```bash
$ CLIENT_ID=c3b7c6cf-9bd2-4053-be11-5fe94d6d4566
$ CLIENT_SECRET=password
$ SCOPE=org:0e7ecd50-650a-425d-a6e7-462eb1b3f1f2
$ curl https://sso.nsd.no/oauth/token \
    -u $CLIENT_ID:$CLIENT_SECRET \
    -d "grant_type=client_credentials&scope=$SCOPE"

{
    "scope": "org:0e7ecd50-650a-425d-a6e7-462eb1b3f1f2",
    "access_token": "eyJraWQiOiJjQTdxRz...",
    "expires_in": 3600,
    "token_type": "Bearer"
}
```

You can now make API calls by passing the access token in the `Authorization` header:

```bash
$ TOKEN=...
$ QUERY='query{organization(id: \"af6fdcec-fcd6-4af2-8d61-03838b992344\"){name}}'
$ curl -H 'Content-Type: application/json' \
    -H "Authorization: Bearer $TOKEN" \
    -X POST \
    -d "{\"query\": \"$QUERY\"}" \
    https://api.nsd.no/graphql

{
    "data": {
        "organization": {
            "name": "NSD – Norsk senter for forskningsdata AS"
        }
    }
}
```


Note: The current token endpoint, supported protocols and other metadata is available at https://sso.nsd.no/.well-known/openid-configuration


Further reading:
* https://oauth.net/2/
* https://tools.ietf.org/html/rfc6749#section-4.4

