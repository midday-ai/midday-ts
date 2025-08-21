# GetOAuthAuthorizationResponse

Application information for consent screen

## Example Usage

```typescript
import { GetOAuthAuthorizationResponse } from "@midday-ai/sdk/models/operations";

let value: GetOAuthAuthorizationResponse = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "My Raycast Extension",
  description: "A Raycast extension for managing transactions",
  overview:
    "This application provides advanced transaction management features including:\n"
    + "- Real-time sync\n"
    + "- Advanced filtering",
  developerName: "Acme Corp",
  logoUrl: "https://example.com/logo.png",
  website: "https://myapp.com",
  installUrl: "https://myapp.com/install",
  screenshots: [
    "https://example.com/screenshot1.png",
    "https://example.com/screenshot2.png",
  ],
  clientId: "mid_client_abcdef123456789",
  scopes: [
    "transactions.read",
    "invoices.read",
  ],
  redirectUri: "https://myapp.com/callback",
  state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
  status: "approved",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Application ID                                                                                                      | 123e4567-e89b-12d3-a456-426614174000                                                                                |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Application name                                                                                                    | My Raycast Extension                                                                                                |
| `description`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Application description                                                                                             | A Raycast extension for managing transactions                                                                       |
| `overview`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Application overview                                                                                                | This application provides advanced transaction management features including:<br/>- Real-time sync<br/>- Advanced filtering |
| `developerName`                                                                                                     | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The person or company developing this application                                                                   | Acme Corp                                                                                                           |
| `logoUrl`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Application logo URL                                                                                                | https://example.com/logo.png                                                                                        |
| `website`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Application website                                                                                                 | https://myapp.com                                                                                                   |
| `installUrl`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | An optional URL for installing the application                                                                      | https://myapp.com/install                                                                                           |
| `screenshots`                                                                                                       | *string*[]                                                                                                          | :heavy_check_mark:                                                                                                  | Up to 4 screenshots that will be displayed on the apps page                                                         | [<br/>"https://example.com/screenshot1.png",<br/>"https://example.com/screenshot2.png"<br/>]                        |
| `clientId`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Client ID                                                                                                           | mid_client_abcdef123456789                                                                                          |
| `scopes`                                                                                                            | *string*[]                                                                                                          | :heavy_check_mark:                                                                                                  | Requested scopes                                                                                                    | [<br/>"transactions.read",<br/>"invoices.read"<br/>]                                                                |
| `redirectUri`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Redirect URI                                                                                                        | https://myapp.com/callback                                                                                          |
| `state`                                                                                                             | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | State parameter (min 32 chars, alphanumeric + _.-)                                                                  | abc123xyz789_secure-random-state-value-with-sufficient-entropy                                                      |
| `status`                                                                                                            | [operations.GetOAuthAuthorizationStatus](../../models/operations/getoauthauthorizationstatus.md)                    | :heavy_check_mark:                                                                                                  | Application verification status                                                                                     | approved                                                                                                            |