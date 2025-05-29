# Inbox
(*inbox*)

## Overview

### Available Operations

* [list](#list) - List all inbox items
* [get](#get) - Retrieve a inbox item
* [delete](#delete) - Delete a inbox item
* [update](#update) - Update a inbox item

## list

Retrieve a list of inbox items for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.inbox.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday/sdk/core.js";
import { inboxList } from "@midday/sdk/funcs/inboxList.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await inboxList(midday, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInboxItemsRequest](../../models/operations/listinboxitemsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListInboxItemsResponse](../../models/operations/listinboxitemsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Retrieve a inbox item by its unique identifier for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.inbox.get({
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday/sdk/core.js";
import { inboxGet } from "@midday/sdk/funcs/inboxGet.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await inboxGet(midday, {
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInboxItemByIdRequest](../../models/operations/getinboxitembyidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetInboxItemByIdResponse](../../models/operations/getinboxitembyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Delete a inbox item by its unique identifier for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.inbox.delete({
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday/sdk/core.js";
import { inboxDelete } from "@midday/sdk/funcs/inboxDelete.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await inboxDelete(midday, {
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteInboxItemRequest](../../models/operations/deleteinboxitemrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteInboxItemResponse](../../models/operations/deleteinboxitemresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update fields of an inbox item by its unique identifier for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.inbox.update({
    id: "<id>",
    requestBody: {
      status: "archived",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday/sdk/core.js";
import { inboxUpdate } from "@midday/sdk/funcs/inboxUpdate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await inboxUpdate(midday, {
    id: "<id>",
    requestBody: {
      status: "archived",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInboxItemRequest](../../models/operations/updateinboxitemrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateInboxItemResponse](../../models/operations/updateinboxitemresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |