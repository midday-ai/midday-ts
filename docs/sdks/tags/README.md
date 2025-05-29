# Tags
(*tags*)

## Overview

### Available Operations

* [list](#list) - List all tags
* [create](#create) - Create a new tag
* [get](#get) - Retrieve a tag
* [update](#update) - Update a tag
* [delete](#delete) - Delete a tag

## list

Retrieve a list of tags for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.tags.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { tagsList } from "@midday-ai/sdk/funcs/tagsList.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await tagsList(midday);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TagsResponse](../../models/tagsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Create a new tag for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.tags.create({
    name: "Important",
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
import { tagsCreate } from "@midday-ai/sdk/funcs/tagsCreate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await tagsCreate(midday, {
    name: "Important",
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
| `request`                                                                                                                                                                      | [models.CreateTag](../../models/createtag.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TagsResponse](../../models/tagsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Retrieve a tag by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.tags.get({
    id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
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
import { tagsGet } from "@midday-ai/sdk/funcs/tagsGet.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await tagsGet(midday, {
    id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
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
| `request`                                                                                                                                                                      | [operations.GetTagByIdRequest](../../models/operations/gettagbyidrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TagResponse](../../models/tagresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update a tag by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.tags.update({
    id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
    requestBody: {
      name: "Urgent",
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
import { tagsUpdate } from "@midday-ai/sdk/funcs/tagsUpdate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await tagsUpdate(midday, {
    id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
    requestBody: {
      name: "Urgent",
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
| `request`                                                                                                                                                                      | [operations.UpdateTagRequest](../../models/operations/updatetagrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TagResponse](../../models/tagresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Delete a tag by ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  await midday.tags.delete({
    id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { tagsDelete } from "@midday-ai/sdk/funcs/tagsDelete.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await tagsDelete(midday, {
    id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTagRequest](../../models/operations/deletetagrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |