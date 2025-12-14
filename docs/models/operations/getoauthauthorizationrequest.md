# GetOAuthAuthorizationRequest

## Example Usage

```typescript
import { GetOAuthAuthorizationRequest } from "@midday-ai/sdk/models/operations";

let value: GetOAuthAuthorizationRequest = {
  responseType: "code",
  clientId: "mid_client_abcdef123456789",
  redirectUri: "https://myapp.com/callback",
  scope: "transactions.read invoices.read",
  state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
  codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `responseType`                                                         | [operations.ResponseType](../../models/operations/responsetype.md)     | :heavy_check_mark:                                                     | OAuth response type, must be 'code'                                    | code                                                                   |
| `clientId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Client ID of the OAuth application                                     | mid_client_abcdef123456789                                             |
| `redirectUri`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Redirect URI for OAuth callback                                        | https://myapp.com/callback                                             |
| `scope`                                                                | *string*                                                               | :heavy_check_mark:                                                     | Space-separated list of requested scopes                               | transactions.read invoices.read                                        |
| `state`                                                                | *string*                                                               | :heavy_check_mark:                                                     | State parameter for CSRF protection (min 32 chars, alphanumeric + _.-) | abc123xyz789_secure-random-state-value-with-sufficient-entropy         |
| `codeChallenge`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Code challenge for PKCE                                                | E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM                            |