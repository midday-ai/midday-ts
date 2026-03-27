# PostOAuthRegisterResponseBody2

Client registered successfully

## Example Usage

```typescript
import { PostOAuthRegisterResponseBody2 } from "@midday-ai/sdk/models/operations";

let value: PostOAuthRegisterResponseBody2 = {
  clientId: "mid_client_abcdef123456789",
  clientName: "ChatGPT",
  redirectUris: [
    "https://chatgpt.com/connector/oauth/callback",
  ],
  grantTypes: [
    "authorization_code",
    "refresh_token",
  ],
  tokenEndpointAuthMethod: "none",
  responseTypes: [
    "code",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `clientId`                                         | *string*                                           | :heavy_check_mark:                                 | Assigned client ID                                 | mid_client_abcdef123456789                         |
| `clientName`                                       | *string*                                           | :heavy_check_mark:                                 | Human-readable name of the client                  | ChatGPT                                            |
| `redirectUris`                                     | *string*[]                                         | :heavy_check_mark:                                 | Registered redirect URIs                           | [<br/>"https://chatgpt.com/connector/oauth/callback"<br/>] |
| `grantTypes`                                       | *string*[]                                         | :heavy_check_mark:                                 | Granted grant types                                | [<br/>"authorization_code",<br/>"refresh_token"<br/>] |
| `tokenEndpointAuthMethod`                          | *string*                                           | :heavy_check_mark:                                 | Token endpoint authentication method               | none                                               |
| `responseTypes`                                    | *string*[]                                         | :heavy_check_mark:                                 | Supported response types                           | [<br/>"code"<br/>]                                 |