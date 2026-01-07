# StripeConnectCallbackRequest

## Example Usage

```typescript
import { StripeConnectCallbackRequest } from "@midday-ai/sdk/models/operations";

let value: StripeConnectCallbackRequest = {
  state: "Oklahoma",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `code`                                    | *string*                                  | :heavy_minus_sign:                        | OAuth authorization code from Stripe      |
| `state`                                   | *string*                                  | :heavy_check_mark:                        | OAuth state parameter for CSRF protection |
| `error`                                   | *string*                                  | :heavy_minus_sign:                        | OAuth error code if authorization failed  |
| `errorDescription`                        | *string*                                  | :heavy_minus_sign:                        | OAuth error description                   |