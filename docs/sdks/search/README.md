# Search
(*search*)

## Overview

### Available Operations

* [search](#search) - Search

## search

Search across all data, invoices, documents, customers, transactions, and more.

### Example Usage

```typescript
import { Midday } from "@midday/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await midday.search.search({
    searchTerm: "Acme",
    language: "en",
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
import { searchSearch } from "@midday/sdk/funcs/searchSearch.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await searchSearch(midday, {
    searchTerm: "Acme",
    language: "en",
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
| `request`                                                                                                                                                                      | [operations.SearchRequest](../../models/operations/searchrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchResponse[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |