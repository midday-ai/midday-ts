# PostOAuthRevokeRequest

## Example Usage

```typescript
import { PostOAuthRevokeRequest } from "@midday-ai/sdk/models/operations";

let value: PostOAuthRevokeRequest = {
  token: "mid_access_token_abcdef123456789",
  tokenTypeHint: "access_token",
  clientId: "mid_client_abcdef123456789",
  clientSecret: "mid_secret_abcdef123456789",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `token`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | Token to revoke (access token or refresh token)                            | mid_access_token_abcdef123456789                                           |
| `tokenTypeHint`                                                            | [operations.TokenTypeHint](../../models/operations/tokentypehint.md)       | :heavy_minus_sign:                                                         | Hint about the token type                                                  | access_token                                                               |
| `clientId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | Client ID of the OAuth application                                         | mid_client_abcdef123456789                                                 |
| `clientSecret`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | Client secret of the OAuth application (required for confidential clients) | mid_secret_abcdef123456789                                                 |