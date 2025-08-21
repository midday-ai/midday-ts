# GetOAuthAuthorizationBadRequestError

Invalid request

## Example Usage

```typescript
import { GetOAuthAuthorizationBadRequestError } from "@midday-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `error`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | Error code                                                                   | invalid_request                                                              |
| `errorDescription`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | Human-readable error description                                             | The request is missing a required parameter                                  |
| `errorUri`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | URI to a human-readable error page                                           | https://docs.midday.ai/errors/invalid_request                                |
| `state`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | State parameter from the original request (min 32 chars, alphanumeric + _.-) | abc123xyz789_secure-random-state-value-with-sufficient-entropy               |