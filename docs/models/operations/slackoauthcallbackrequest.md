# SlackOAuthCallbackRequest

## Example Usage

```typescript
import { SlackOAuthCallbackRequest } from "@midday-ai/sdk/models/operations";

let value: SlackOAuthCallbackRequest = {
  code: "<value>",
  state: "Kentucky",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `code`                                    | *string*                                  | :heavy_check_mark:                        | OAuth authorization code from Slack       |
| `state`                                   | *string*                                  | :heavy_check_mark:                        | OAuth state parameter for CSRF protection |