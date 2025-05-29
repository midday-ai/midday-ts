# Transactions
(*transactions*)

## Overview

### Available Operations

* [getV1Transactions](#getv1transactions) - List all transactions
* [postV1Transactions](#postv1transactions) - Create a transaction
* [getV1TransactionsId](#getv1transactionsid) - Retrieve a transaction
* [patchV1TransactionsId](#patchv1transactionsid) - Update a transaction
* [deleteV1TransactionsId](#deletev1transactionsid) - Delete a transaction
* [patchV1TransactionsBulk](#patchv1transactionsbulk) - Bulk update transactions
* [postV1TransactionsBulk](#postv1transactionsbulk) - Bulk create transactions
* [deleteV1TransactionsBulk](#deletev1transactionsbulk) - Bulk delete transactions

## getV1Transactions

Retrieve a list of transactions for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.transactions.getV1Transactions({
    cursor: "eyJpZCI6IjEyMyJ9",
    sort: [
      "date",
      "desc",
    ],
    pageSize: 50,
    q: "office supplies",
    categories: [
      "office-supplies",
      "travel",
    ],
    tags: [
      "tag-1",
      "tag-2",
    ],
    start: "2024-04-01T00:00:00.000Z",
    end: "2024-04-30T23:59:59.999Z",
    accounts: [
      "account-1",
      "account-2",
    ],
    assignees: [
      "user-1",
      "user-2",
    ],
    statuses: [
      "pending",
      "completed",
    ],
    recurring: [
      "monthly",
      "annually",
    ],
    attachments: "include",
    amountRange: [
      100,
      1000,
    ],
    amount: [
      "150.75",
      "299.99",
    ],
    type: "expense",
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
import { transactionsGetV1Transactions } from "@midday/sdk/funcs/transactionsGetV1Transactions.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsGetV1Transactions(midday, {
    cursor: "eyJpZCI6IjEyMyJ9",
    sort: [
      "date",
      "desc",
    ],
    pageSize: 50,
    q: "office supplies",
    categories: [
      "office-supplies",
      "travel",
    ],
    tags: [
      "tag-1",
      "tag-2",
    ],
    start: "2024-04-01T00:00:00.000Z",
    end: "2024-04-30T23:59:59.999Z",
    accounts: [
      "account-1",
      "account-2",
    ],
    assignees: [
      "user-1",
      "user-2",
    ],
    statuses: [
      "pending",
      "completed",
    ],
    recurring: [
      "monthly",
      "annually",
    ],
    attachments: "include",
    amountRange: [
      100,
      1000,
    ],
    amount: [
      "150.75",
      "299.99",
    ],
    type: "expense",
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
| `request`                                                                                                                                                                      | [operations.GetV1TransactionsRequest](../../models/operations/getv1transactionsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1TransactionsResponse](../../models/operations/getv1transactionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV1Transactions

Create a transaction

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.transactions.postV1Transactions();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday/sdk/core.js";
import { transactionsPostV1Transactions } from "@midday/sdk/funcs/transactionsPostV1Transactions.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsPostV1Transactions(midday);

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
| `request`                                                                                                                                                                      | [operations.PostV1TransactionsRequest](../../models/operations/postv1transactionsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionResponse](../../models/transactionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getV1TransactionsId

Retrieve a transaction by its ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.transactions.getV1TransactionsId({
    id: "ce861801-120b-49a4-a5a7-09559f21a513",
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
import { transactionsGetV1TransactionsId } from "@midday/sdk/funcs/transactionsGetV1TransactionsId.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsGetV1TransactionsId(midday, {
    id: "ce861801-120b-49a4-a5a7-09559f21a513",
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
| `request`                                                                                                                                                                      | [operations.GetV1TransactionsIdRequest](../../models/operations/getv1transactionsidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionResponse](../../models/transactionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## patchV1TransactionsId

Update a transaction for the authenticated team. If there's no change, returns it as it is.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.transactions.patchV1TransactionsId({
    id: "3e23a76e-9765-4857-98e7-6aa23026b68a",
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
import { transactionsPatchV1TransactionsId } from "@midday/sdk/funcs/transactionsPatchV1TransactionsId.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsPatchV1TransactionsId(midday, {
    id: "3e23a76e-9765-4857-98e7-6aa23026b68a",
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
| `request`                                                                                                                                                                      | [operations.PatchV1TransactionsIdRequest](../../models/operations/patchv1transactionsidrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionResponse](../../models/transactionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteV1TransactionsId

Delete a transaction for the authenticated team. Only manually created transactions can be deleted via this endpoint or the form. Transactions inserted by bank connections cannot be deleted, but can be excluded by updating the status.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.transactions.deleteV1TransactionsId({
    id: "43827877-53bb-4c82-bbff-54cb45455899",
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
import { transactionsDeleteV1TransactionsId } from "@midday/sdk/funcs/transactionsDeleteV1TransactionsId.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsDeleteV1TransactionsId(midday, {
    id: "43827877-53bb-4c82-bbff-54cb45455899",
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
| `request`                                                                                                                                                                      | [operations.DeleteV1TransactionsIdRequest](../../models/operations/deletev1transactionsidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1TransactionsIdResponse](../../models/operations/deletev1transactionsidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## patchV1TransactionsBulk

Bulk update transactions for the authenticated team. If there's no change, returns it as it is.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.transactions.patchV1TransactionsBulk();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday/sdk/core.js";
import { transactionsPatchV1TransactionsBulk } from "@midday/sdk/funcs/transactionsPatchV1TransactionsBulk.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsPatchV1TransactionsBulk(midday);

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
| `request`                                                                                                                                                                      | [operations.PatchV1TransactionsBulkRequest](../../models/operations/patchv1transactionsbulkrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV1TransactionsBulkResponse](../../models/operations/patchv1transactionsbulkresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV1TransactionsBulk

Bulk create transactions for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.transactions.postV1TransactionsBulk();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday/sdk/core.js";
import { transactionsPostV1TransactionsBulk } from "@midday/sdk/funcs/transactionsPostV1TransactionsBulk.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsPostV1TransactionsBulk(midday);

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
| `request`                                                                                                                                                                      | [operations.RequestBody[]](../../models/.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionResponse[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteV1TransactionsBulk

Bulk delete transactions for the authenticated team. Only manually created transactions can be deleted via this endpoint or the form. Transactions inserted by bank connections cannot be deleted, but can be excluded by updating the status.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.transactions.deleteV1TransactionsBulk();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday/sdk/core.js";
import { transactionsDeleteV1TransactionsBulk } from "@midday/sdk/funcs/transactionsDeleteV1TransactionsBulk.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transactionsDeleteV1TransactionsBulk(midday);

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
| `request`                                                                                                                                                                      | [string[]](../../models/.md)                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1TransactionsBulkResponse[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |