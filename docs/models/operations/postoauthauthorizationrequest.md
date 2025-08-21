# PostOAuthAuthorizationRequest

## Example Usage

```typescript
import { PostOAuthAuthorizationRequest } from "@midday-ai/sdk/models/operations";

let value: PostOAuthAuthorizationRequest = {
  clientId: "mid_client_abcdef123456789",
  decision: "allow",
  scopes: [
    "transactions.read",
    "invoices.read",
  ],
  redirectUri: "https://myapp.com/callback",
  state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
  codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
  teamId: "123e4567-e89b-12d3-a456-426614174000",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `clientId`                                                             | *string*                                                               | :heavy_check_mark:                                                     | Client ID of the OAuth application                                     | mid_client_abcdef123456789                                             |
| `decision`                                                             | [operations.Decision](../../models/operations/decision.md)             | :heavy_check_mark:                                                     | User's authorization decision                                          | allow                                                                  |
| `scopes`                                                               | [operations.Scope](../../models/operations/scope.md)[]                 | :heavy_check_mark:                                                     | Scopes the user has approved                                           | [<br/>"transactions.read",<br/>"invoices.read"<br/>]                   |
| `redirectUri`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Redirect URI for OAuth callback                                        | https://myapp.com/callback                                             |
| `state`                                                                | *string*                                                               | :heavy_check_mark:                                                     | State parameter for CSRF protection (min 32 chars, alphanumeric + _.-) | abc123xyz789_secure-random-state-value-with-sufficient-entropy         |
| `codeChallenge`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Code challenge for PKCE (S256 method assumed)                          | E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM                            |
| `teamId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | Team ID to authorize the application for                               | 123e4567-e89b-12d3-a456-426614174000                                   |