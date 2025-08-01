# BankAccounts
(*bankAccounts*)

## Overview

### Available Operations

* [list](#list) - List all bank accounts
* [create](#create) - Create a bank account
* [get](#get) - Retrieve a bank account
* [update](#update) - Update a bank account
* [delete](#delete) - Delete a bank account

## list

Retrieve a list of bank accounts for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listBankAccounts" method="get" path="/bank-accounts" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.bankAccounts.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { bankAccountsList } from "@midday-ai/sdk/funcs/bankAccountsList.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await bankAccountsList(midday, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankAccountsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBankAccountsRequest](../../models/operations/listbankaccountsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListBankAccountsResponse](../../models/operations/listbankaccountsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Create a new bank account for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createBankAccount" method="post" path="/bank-accounts" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.bankAccounts.create({
    name: "Checking Account",
    currency: "USD",
    manual: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { bankAccountsCreate } from "@midday-ai/sdk/funcs/bankAccountsCreate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await bankAccountsCreate(midday, {
    name: "Checking Account",
    currency: "USD",
    manual: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankAccountsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBankAccountRequest](../../models/operations/createbankaccountrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateBankAccountResponse](../../models/operations/createbankaccountresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Retrieve a bank account by ID for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBankAccountById" method="get" path="/bank-accounts/{id}" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.bankAccounts.get({
    id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { bankAccountsGet } from "@midday-ai/sdk/funcs/bankAccountsGet.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await bankAccountsGet(midday, {
    id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankAccountsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBankAccountByIdRequest](../../models/operations/getbankaccountbyidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBankAccountByIdResponse](../../models/operations/getbankaccountbyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update a bank account by ID for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateBankAccount" method="patch" path="/bank-accounts/{id}" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.bankAccounts.update({
    id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
    requestBody: {
      id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
      name: "Checking Account",
      enabled: true,
      balance: 1500.75,
      type: "depository",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { bankAccountsUpdate } from "@midday-ai/sdk/funcs/bankAccountsUpdate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await bankAccountsUpdate(midday, {
    id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
    requestBody: {
      id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
      name: "Checking Account",
      enabled: true,
      balance: 1500.75,
      type: "depository",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankAccountsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBankAccountRequest](../../models/operations/updatebankaccountrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateBankAccountResponse](../../models/operations/updatebankaccountresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Delete a bank account by ID for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteBankAccount" method="delete" path="/bank-accounts/{id}" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.bankAccounts.delete({
    id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { bankAccountsDelete } from "@midday-ai/sdk/funcs/bankAccountsDelete.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await bankAccountsDelete(midday, {
    id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankAccountsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBankAccountRequest](../../models/operations/deletebankaccountrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteBankAccountResponse](../../models/operations/deletebankaccountresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |