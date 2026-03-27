# GetOAuthAuthorizationRequest

## Example Usage

```typescript
import { GetOAuthAuthorizationRequest } from "@midday-ai/sdk/models/operations";

let value: GetOAuthAuthorizationRequest = {
  responseType: "code",
  clientId: "mid_client_abcdef123456789",
  redirectUri: "https://myapp.com/callback",
  scope: "transactions.read invoices.read",
  state: "abc123xyz789_secure-random-state-value",
  codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
  codeChallengeMethod: "S256",
  resource: "https://api.midday.ai",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `responseType`                                                                   | [operations.ResponseType](../../models/operations/responsetype.md)               | :heavy_check_mark:                                                               | OAuth response type, must be 'code'                                              | code                                                                             |
| `clientId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | Client ID of the OAuth application                                               | mid_client_abcdef123456789                                                       |
| `redirectUri`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Redirect URI for OAuth callback                                                  | https://myapp.com/callback                                                       |
| `scope`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | Space-separated list of requested scopes                                         | transactions.read invoices.read                                                  |
| `state`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | Opaque state parameter for CSRF protection                                       | abc123xyz789_secure-random-state-value                                           |
| `codeChallenge`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | Code challenge for PKCE (S256)                                                   | E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM                                      |
| `codeChallengeMethod`                                                            | [operations.CodeChallengeMethod](../../models/operations/codechallengemethod.md) | :heavy_minus_sign:                                                               | Code challenge method, must be S256                                              | S256                                                                             |
| `resource`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | Resource parameter per RFC 9728 — identifies the MCP server                      | https://api.midday.ai                                                            |