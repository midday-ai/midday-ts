# Customers
(*customers*)

## Overview

### Available Operations

* [getV1Customers](#getv1customers) - List all customers
* [postV1Customers](#postv1customers) - Create customer
* [getV1CustomersId](#getv1customersid) - Retrieve a customer
* [patchV1CustomersId](#patchv1customersid) - Update a customer
* [deleteV1CustomersId](#deletev1customersid) - Delete a customer

## getV1Customers

Retrieve a list of customers for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.customers.getV1Customers({
    q: "acme",
    sort: [
      "name",
      "asc",
    ],
    cursor: "eyJpZCI6IjEyMyJ9",
    pageSize: 20,
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
import { customersGetV1Customers } from "@midday/sdk/funcs/customersGetV1Customers.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customersGetV1Customers(midday, {
    q: "acme",
    sort: [
      "name",
      "asc",
    ],
    cursor: "eyJpZCI6IjEyMyJ9",
    pageSize: 20,
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
| `request`                                                                                                                                                                      | [operations.GetV1CustomersRequest](../../models/operations/getv1customersrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CustomersResponse](../../models/operations/getv1customersresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV1Customers

Create a new customer for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.customers.postV1Customers({
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    name: "Acme Corporation",
    email: "contact@acme.com",
    country: "United States",
    addressLine1: "123 Main Street",
    addressLine2: "Suite 400",
    city: "San Francisco",
    state: "California",
    zip: "94105",
    phone: "+1-555-123-4567",
    website: "https://acme.com",
    note: "Preferred contact method is email. Large enterprise client.",
    vatNumber: "US123456789",
    countryCode: "US",
    contact: "John Smith",
    tags: [
      {
        id: "e7a9c1a2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
        name: "VIP",
      },
      {
        id: "f1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
        name: "Enterprise",
      },
    ],
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
import { customersPostV1Customers } from "@midday/sdk/funcs/customersPostV1Customers.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customersPostV1Customers(midday, {
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    name: "Acme Corporation",
    email: "contact@acme.com",
    country: "United States",
    addressLine1: "123 Main Street",
    addressLine2: "Suite 400",
    city: "San Francisco",
    state: "California",
    zip: "94105",
    phone: "+1-555-123-4567",
    website: "https://acme.com",
    note: "Preferred contact method is email. Large enterprise client.",
    vatNumber: "US123456789",
    countryCode: "US",
    contact: "John Smith",
    tags: [
      {
        id: "e7a9c1a2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
        name: "VIP",
      },
      {
        id: "f1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
        name: "Enterprise",
      },
    ],
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
| `request`                                                                                                                                                                      | [operations.PostV1CustomersRequest](../../models/operations/postv1customersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CustomersResponse](../../models/operations/postv1customersresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getV1CustomersId

Retrieve a customer by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.customers.getV1CustomersId({
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
import { customersGetV1CustomersId } from "@midday/sdk/funcs/customersGetV1CustomersId.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customersGetV1CustomersId(midday, {
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
| `request`                                                                                                                                                                      | [operations.GetV1CustomersIdRequest](../../models/operations/getv1customersidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CustomersIdResponse](../../models/operations/getv1customersidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## patchV1CustomersId

Update a customer by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.customers.patchV1CustomersId({
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    requestBody: {
      id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
      name: "Acme Corporation",
      email: "contact@acme.com",
      country: "United States",
      addressLine1: "123 Main Street",
      addressLine2: "Suite 400",
      city: "San Francisco",
      state: "California",
      zip: "94105",
      phone: "+1-555-123-4567",
      website: "https://acme.com",
      note: "Preferred contact method is email. Large enterprise client.",
      vatNumber: "US123456789",
      countryCode: "US",
      contact: "John Smith",
      tags: [
        {
          id: "e7a9c1a2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
          name: "VIP",
        },
        {
          id: "f1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
          name: "Enterprise",
        },
      ],
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
import { customersPatchV1CustomersId } from "@midday/sdk/funcs/customersPatchV1CustomersId.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customersPatchV1CustomersId(midday, {
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    requestBody: {
      id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
      name: "Acme Corporation",
      email: "contact@acme.com",
      country: "United States",
      addressLine1: "123 Main Street",
      addressLine2: "Suite 400",
      city: "San Francisco",
      state: "California",
      zip: "94105",
      phone: "+1-555-123-4567",
      website: "https://acme.com",
      note: "Preferred contact method is email. Large enterprise client.",
      vatNumber: "US123456789",
      countryCode: "US",
      contact: "John Smith",
      tags: [
        {
          id: "e7a9c1a2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
          name: "VIP",
        },
        {
          id: "f1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
          name: "Enterprise",
        },
      ],
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
| `request`                                                                                                                                                                      | [operations.PatchV1CustomersIdRequest](../../models/operations/patchv1customersidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV1CustomersIdResponse](../../models/operations/patchv1customersidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteV1CustomersId

Delete a customer by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.customers.deleteV1CustomersId({
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
import { customersDeleteV1CustomersId } from "@midday/sdk/funcs/customersDeleteV1CustomersId.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await customersDeleteV1CustomersId(midday, {
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
| `request`                                                                                                                                                                      | [operations.DeleteV1CustomersIdRequest](../../models/operations/deletev1customersidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1CustomersIdResponse](../../models/operations/deletev1customersidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |