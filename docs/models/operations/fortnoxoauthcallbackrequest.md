# FortnoxOAuthCallbackRequest

## Example Usage

```typescript
import { FortnoxOAuthCallbackRequest } from "@midday-ai/sdk/models/operations";

let value: FortnoxOAuthCallbackRequest = {
  state: "Washington",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `code`                                    | *string*                                  | :heavy_minus_sign:                        | OAuth authorization code from Fortnox     |
| `state`                                   | *string*                                  | :heavy_check_mark:                        | OAuth state parameter for CSRF protection |
| `error`                                   | *string*                                  | :heavy_minus_sign:                        | OAuth error code if authorization failed  |