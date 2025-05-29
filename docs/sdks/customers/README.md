# Customers
(*customers*)

## Overview

### Available Operations

* [list](#list) - List all customers
* [create](#create) - Create customer
* [get](#get) - Retrieve a customer
* [update](#update) - Update a customer
* [delete](#delete) - Delete a customer

## list

Retrieve a list of customers for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.customers.list({
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
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { customersList } from "@midday-ai/sdk/funcs/customersList.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await customersList(midday, {
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
| `request`                                                                                                                                                                      | [operations.ListCustomersRequest](../../models/operations/listcustomersrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListCustomersResponse](../../models/operations/listcustomersresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Create a new customer for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.customers.create({
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
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { customersCreate } from "@midday-ai/sdk/funcs/customersCreate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await customersCreate(midday, {
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
| `request`                                                                                                                                                                      | [operations.CreateCustomerRequest](../../models/operations/createcustomerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerResponse](../../models/operations/createcustomerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Retrieve a customer by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.customers.get({
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
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { customersGet } from "@midday-ai/sdk/funcs/customersGet.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await customersGet(midday, {
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
| `request`                                                                                                                                                                      | [operations.GetCustomerByIdRequest](../../models/operations/getcustomerbyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCustomerByIdResponse](../../models/operations/getcustomerbyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update a customer by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.customers.update({
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
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { customersUpdate } from "@midday-ai/sdk/funcs/customersUpdate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await customersUpdate(midday, {
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
| `request`                                                                                                                                                                      | [operations.UpdateCustomerRequest](../../models/operations/updatecustomerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateCustomerResponse](../../models/operations/updatecustomerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Delete a customer by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.customers.delete({
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
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { customersDelete } from "@midday-ai/sdk/funcs/customersDelete.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await customersDelete(midday, {
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
| `request`                                                                                                                                                                      | [operations.DeleteCustomerRequest](../../models/operations/deletecustomerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteCustomerResponse](../../models/operations/deletecustomerresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |