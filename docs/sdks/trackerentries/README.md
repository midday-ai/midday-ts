# TrackerEntries
(*trackerEntries*)

## Overview

### Available Operations

* [list](#list) - List all tracker entries
* [create](#create) - Create a tracker entry
* [update](#update) - Update a tracker entry
* [delete](#delete) - Delete a tracker entry

## list

List all tracker entries for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.trackerEntries.list({
    from: "2024-04-01",
    to: "2024-04-30",
    projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { trackerEntriesList } from "@midday-ai/sdk/funcs/trackerEntriesList.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await trackerEntriesList(midday, {
    from: "2024-04-01",
    to: "2024-04-30",
    projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("trackerEntriesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTrackerEntriesRequest](../../models/operations/listtrackerentriesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTrackerEntriesResponse](../../models/operations/listtrackerentriesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Create a tracker entry for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.trackerEntries.create({
    start: new Date("2024-04-15T09:00:00.000Z"),
    stop: new Date("2024-04-15T17:00:00.000Z"),
    dates: [
      "2024-04-15",
      "2024-04-16",
    ],
    assignedId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
    description: "Worked on implementing user authentication feature",
    duration: 28800,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { trackerEntriesCreate } from "@midday-ai/sdk/funcs/trackerEntriesCreate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await trackerEntriesCreate(midday, {
    start: new Date("2024-04-15T09:00:00.000Z"),
    stop: new Date("2024-04-15T17:00:00.000Z"),
    dates: [
      "2024-04-15",
      "2024-04-16",
    ],
    assignedId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
    description: "Worked on implementing user authentication feature",
    duration: 28800,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("trackerEntriesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTrackerEntryRequest](../../models/operations/createtrackerentryrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTrackerEntryResponse](../../models/operations/createtrackerentryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update a tracker entry for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.trackerEntries.update({
    id: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
    requestBody: {
      start: new Date("2024-04-15T09:00:00.000Z"),
      stop: new Date("2024-04-15T17:00:00.000Z"),
      dates: [
        "2024-04-15",
        "2024-04-16",
      ],
      assignedId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
      description: "Worked on implementing user authentication feature",
      duration: 28800,
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
import { trackerEntriesUpdate } from "@midday-ai/sdk/funcs/trackerEntriesUpdate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await trackerEntriesUpdate(midday, {
    id: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
    requestBody: {
      start: new Date("2024-04-15T09:00:00.000Z"),
      stop: new Date("2024-04-15T17:00:00.000Z"),
      dates: [
        "2024-04-15",
        "2024-04-16",
      ],
      assignedId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
      description: "Worked on implementing user authentication feature",
      duration: 28800,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("trackerEntriesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTrackerEntryRequest](../../models/operations/updatetrackerentryrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateTrackerEntryResponse](../../models/operations/updatetrackerentryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Delete a tracker entry for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.trackerEntries.delete({
    id: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { trackerEntriesDelete } from "@midday-ai/sdk/funcs/trackerEntriesDelete.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const res = await trackerEntriesDelete(midday, {
    id: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("trackerEntriesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTrackerEntryRequest](../../models/operations/deletetrackerentryrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteTrackerEntryResponse](../../models/operations/deletetrackerentryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |