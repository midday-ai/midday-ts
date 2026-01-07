# QuickBooksOAuthCallbackRequest

## Example Usage

```typescript
import { QuickBooksOAuthCallbackRequest } from "@midday-ai/sdk/models/operations";

let value: QuickBooksOAuthCallbackRequest = {
  state: "Florida",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `code`                                    | *string*                                  | :heavy_minus_sign:                        | OAuth authorization code from QuickBooks  |
| `state`                                   | *string*                                  | :heavy_check_mark:                        | OAuth state parameter for CSRF protection |
| `realmId`                                 | *string*                                  | :heavy_minus_sign:                        | QuickBooks company/realm ID               |
| `error`                                   | *string*                                  | :heavy_minus_sign:                        | OAuth error code if authorization failed  |