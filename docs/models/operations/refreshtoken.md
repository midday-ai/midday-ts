# RefreshToken

## Example Usage

```typescript
import { RefreshToken } from "@midday-ai/sdk/models/operations";

let value: RefreshToken = {
  grantType: "refresh_token",
  refreshToken: "mid_rt_abcdef123456789",
  clientId: "mid_client_abcdef123456789",
  clientSecret: "mid_secret_abcdef123456789",
  scope: "transactions.read invoices.read",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `grantType`                                                                          | [operations.GrantTypeRefreshToken](../../models/operations/granttyperefreshtoken.md) | :heavy_check_mark:                                                                   | OAuth grant type, must be 'refresh_token'                                            | refresh_token                                                                        |
| `refreshToken`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | Refresh token received from token endpoint                                           | mid_rt_abcdef123456789                                                               |
| `clientId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Client ID of the OAuth application                                                   | mid_client_abcdef123456789                                                           |
| `clientSecret`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | Client secret of the OAuth application (required for confidential clients)           | mid_secret_abcdef123456789                                                           |
| `scope`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Space-separated list of requested scopes (optional)                                  | transactions.read invoices.read                                                      |