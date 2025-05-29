# Teams
(*teams*)

## Overview

### Available Operations

* [list](#list) - List all teams
* [get](#get) - Retrieve a team
* [update](#update) - Update a team
* [members](#members) - List all team members

## list

Retrieve a list of teams for the authenticated user.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.teams.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { teamsList } from "@midday-ai/sdk/funcs/teamsList.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await teamsList(midday);

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

**Promise\<[operations.ListTeamsResponse](../../models/operations/listteamsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

Retrieve a team by its ID for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.teams.get({
    id: "123e4567-e89b-12d3-a456-426614174000",
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
import { teamsGet } from "@midday-ai/sdk/funcs/teamsGet.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await teamsGet(midday, {
    id: "123e4567-e89b-12d3-a456-426614174000",
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
| `request`                                                                                                                                                                      | [operations.GetTeamByIdRequest](../../models/operations/getteambyidrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTeamByIdResponse](../../models/operations/getteambyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update a team for the authenticated workspace. If there’s no change, returns it as it is.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.teams.update({
    id: "123e4567-e89b-12d3-a456-426614174000",
    requestBody: {
      name: "Acme Corporation",
      email: "team@acme.com",
      logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
      baseCurrency: "USD",
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
import { teamsUpdate } from "@midday-ai/sdk/funcs/teamsUpdate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await teamsUpdate(midday, {
    id: "123e4567-e89b-12d3-a456-426614174000",
    requestBody: {
      name: "Acme Corporation",
      email: "team@acme.com",
      logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
      baseCurrency: "USD",
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
| `request`                                                                                                                                                                      | [operations.UpdateTeamByIdRequest](../../models/operations/updateteambyidrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateTeamByIdResponse](../../models/operations/updateteambyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## members

List all team members for the authenticated team.

### Example Usage

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.teams.members({
    id: "123e4567-e89b-12d3-a456-426614174000",
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
import { teamsMembers } from "@midday-ai/sdk/funcs/teamsMembers.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearer: "MIDDAY_API_KEY",
});

async function run() {
  const res = await teamsMembers(midday, {
    id: "123e4567-e89b-12d3-a456-426614174000",
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
| `request`                                                                                                                                                                      | [operations.ListTeamMembersRequest](../../models/operations/listteammembersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTeamMembersResponse](../../models/operations/listteammembersresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |