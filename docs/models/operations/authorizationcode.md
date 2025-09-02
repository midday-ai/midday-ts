# AuthorizationCode

## Example Usage

```typescript
import { AuthorizationCode } from "@midday-ai/sdk/models/operations";

let value: AuthorizationCode = {
  grantType: "authorization_code",
  code: "mid_authorization_code_abcdef123456789",
  redirectUri: "https://myapp.com/callback",
  clientId: "mid_client_abcdef123456789",
  clientSecret: "mid_secret_abcdef123456789",
  codeVerifier: "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `grantType`                                                                                    | [operations.GrantTypeAuthorizationCode](../../models/operations/granttypeauthorizationcode.md) | :heavy_check_mark:                                                                             | OAuth grant type, must be 'authorization_code'                                                 | authorization_code                                                                             |
| `code`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | Authorization code received from authorization endpoint                                        | mid_authorization_code_abcdef123456789                                                         |
| `redirectUri`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | Redirect URI used in authorization request                                                     | https://myapp.com/callback                                                                     |
| `clientId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | Client ID of the OAuth application                                                             | mid_client_abcdef123456789                                                                     |
| `clientSecret`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Client secret of the OAuth application (required for confidential clients)                     | mid_secret_abcdef123456789                                                                     |
| `codeVerifier`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Code verifier for PKCE (required for public clients using PKCE)                                | dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk                                                    |