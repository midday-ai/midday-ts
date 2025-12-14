# Webhooks

## Overview

### Available Operations

* [inboxWebhook](#inboxwebhook) - Inbox webhook

## inboxWebhook

Webhook endpoint for receiving inbox emails from Postmark

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inboxWebhook" method="post" path="/webhook/inbox" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.webhooks.inboxWebhook();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { webhooksInboxWebhook } from "@midday-ai/sdk/funcs/webhooksInboxWebhook.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await webhooksInboxWebhook(midday);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhooksInboxWebhook failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [any](../../models/.md)                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.InboxWebhookResponse](../../models/operations/inboxwebhookresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.InboxWebhookBadRequestError     | 400                                    | application/json                       |
| errors.InboxWebhookInternalServerError | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |