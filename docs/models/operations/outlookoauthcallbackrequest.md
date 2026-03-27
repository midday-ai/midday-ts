# OutlookOAuthCallbackRequest

## Example Usage

```typescript
import { OutlookOAuthCallbackRequest } from "@midday-ai/sdk/models/operations";

let value: OutlookOAuthCallbackRequest = {
  state: "North Carolina",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `code`                                   | *string*                                 | :heavy_minus_sign:                       | OAuth authorization code from Microsoft  |
| `state`                                  | *string*                                 | :heavy_check_mark:                       | Encrypted OAuth state parameter          |
| `error`                                  | *string*                                 | :heavy_minus_sign:                       | OAuth error code if authorization failed |