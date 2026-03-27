# XeroOAuthCallbackRequest

## Example Usage

```typescript
import { XeroOAuthCallbackRequest } from "@midday-ai/sdk/models/operations";

let value: XeroOAuthCallbackRequest = {
  state: "Montana",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `code`                                    | *string*                                  | :heavy_minus_sign:                        | OAuth authorization code from Xero        |
| `state`                                   | *string*                                  | :heavy_check_mark:                        | OAuth state parameter for CSRF protection |
| `error`                                   | *string*                                  | :heavy_minus_sign:                        | OAuth error code if authorization failed  |