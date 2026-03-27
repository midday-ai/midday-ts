# PostOAuthRegisterRequest

## Example Usage

```typescript
import { PostOAuthRegisterRequest } from "@midday-ai/sdk/models/operations";

let value: PostOAuthRegisterRequest = {
  clientName: "ChatGPT",
  redirectUris: [
    "https://chatgpt.com/connector/oauth/callback",
  ],
  grantTypes: [
    "authorization_code",
    "refresh_token",
  ],
  scope: "transactions.read invoices.read",
  logoUri: "https://example.com/logo.png",
  clientUri: "https://example.com",
  responseTypes: [
    "code",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `clientName`                                       | *string*                                           | :heavy_check_mark:                                 | Human-readable name of the client                  | ChatGPT                                            |
| `redirectUris`                                     | *string*[]                                         | :heavy_check_mark:                                 | Array of redirect URIs                             | [<br/>"https://chatgpt.com/connector/oauth/callback"<br/>] |
| `grantTypes`                                       | *string*[]                                         | :heavy_minus_sign:                                 | Requested grant types                              | [<br/>"authorization_code",<br/>"refresh_token"<br/>] |
| `tokenEndpointAuthMethod`                          | *string*                                           | :heavy_minus_sign:                                 | Token endpoint authentication method               | none                                               |
| `scope`                                            | *string*                                           | :heavy_minus_sign:                                 | Space-separated requested scopes                   | transactions.read invoices.read                    |
| `logoUri`                                          | *string*                                           | :heavy_minus_sign:                                 | URL of the client logo                             | https://example.com/logo.png                       |
| `clientUri`                                        | *string*                                           | :heavy_minus_sign:                                 | URL of the client homepage                         | https://example.com                                |
| `responseTypes`                                    | *string*[]                                         | :heavy_minus_sign:                                 | Requested response types                           | [<br/>"code"<br/>]                                 |