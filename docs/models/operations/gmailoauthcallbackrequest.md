# GmailOAuthCallbackRequest

## Example Usage

```typescript
import { GmailOAuthCallbackRequest } from "@midday-ai/sdk/models/operations";

let value: GmailOAuthCallbackRequest = {
  state: "North Carolina",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `code`                                   | *string*                                 | :heavy_minus_sign:                       | OAuth authorization code from Google     |
| `state`                                  | *string*                                 | :heavy_check_mark:                       | Encrypted OAuth state parameter          |
| `error`                                  | *string*                                 | :heavy_minus_sign:                       | OAuth error code if authorization failed |