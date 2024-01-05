# Protect data endpoint

When receiving a request for data. You should perform the proper token
validation and variable authorization to identify if the requester rightfully
has access to claimed resource.

## Validate Feide token

1. Extract JSON Web Token (JWT) from the HTTP request's Authorization header
   using Bearer schema.
2. Locate the public key needed for decoding the token by visiting
   https://auth.dataporten.no/.well-known/openid-configuration and look for
   property `jwks_uri`.
3. Extract the public key found in the JSON Web Key Set (JWKS) URL from the
   previous step.
4. Verify that the JWK's key identifier (kid) is the same as the received
   token's kid.
5. Decode the received token using public key, expected audience (being your
   datasource's identifier) and RS256 algorithm.
6. Validate token. See the
   [JSON Web Token (JWT) Profile for OAuth 2.0 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068.html#section-4)
   for full details about JWT access token validation.
   1. Ensure `iss` has to be `https://auth.dataporten.no`
   2. Ensure `aud` contains your datasource's identifier.
   3. Ensure current time is in the interval between the `iat` and `exp` timestamps.

## Data authorization

1. Having validated the Feide token you should extract subject identifier `sub`
   in the token.
2. Make a GET request to
   https://kudaf-core.paas2.uninett.no/api/v1/permissions/{SUBJECT_ID}/{DATASOURCE_ID}
   with parameters `SUBJECT_ID` from previous step and `DATASOURCE_ID` being
   your known datasource identifier from Kundeportalen.
3. In the response, extract the token from the property `authroizations`.
4. Validate KUDAF token
   1. Extract JSON Web Token (JWT) from the HTTP request's Authorization header
      using Bearer schema.
   2. Locate the public key needed for decoding the token by visiting
      https://kudaf-core.paas2.uninett.no/api/v1/auth/.well-known/openid-configuration
      and look for property `jwks_uri`.
   3. Extract the public key found in the JSON Web Key Set (JWKS) URL from the
      previous step.
   4. Verify that the JWK's key identifier (kid) is the same as the received
      token's kid.
   5. Decode the received token using public key, expected audience
      (being your datasource's identifier) and RS256 algorithm.
   6. Validate token. See the
      [JSON Web Token (JWT) Profile for OAuth 2.0 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068.html#section-4)
      for full details about JWT access token validation.
      1. Ensure `iss` has to be `kudaf-core.paas2.uninett.no/api/v1/auth`
      2. Ensure `aud` contains your datasource's identifier.
      3. Ensure current time is in the interval between the `iat` and `exp` timestamps.
5. Decode the token and map out the array of variables inside the datasource property.
6. Authorize access to data based on permitted variables from previous step.
