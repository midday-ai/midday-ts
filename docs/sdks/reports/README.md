# Reports
(*reports*)

## Overview

### Available Operations

* [revenue](#revenue) - Revenue reports
* [profit](#profit) - Profit reports
* [burnRate](#burnrate) - Burn rate reports
* [runway](#runway) - Runway reports
* [expenses](#expenses) - Expense reports
* [spending](#spending) - Spending reports

## revenue

Revenue reports for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRevenueReports" method="get" path="/reports/revenue" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.reports.revenue({
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { reportsRevenue } from "@midday-ai/sdk/funcs/reportsRevenue.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await reportsRevenue(midday, {
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsRevenue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRevenueReportsRequest](../../models/operations/getrevenuereportsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetRevenueResponseSchema](../../models/getrevenueresponseschema.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## profit

Profit reports for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getProfitReports" method="get" path="/reports/profit" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.reports.profit({
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { reportsProfit } from "@midday-ai/sdk/funcs/reportsProfit.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await reportsProfit(midday, {
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsProfit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProfitReportsRequest](../../models/operations/getprofitreportsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetProfitResponseSchema](../../models/getprofitresponseschema.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## burnRate

Burn rate reports for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBurnRateReports" method="get" path="/reports/burn-rate" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.reports.burnRate({
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { reportsBurnRate } from "@midday-ai/sdk/funcs/reportsBurnRate.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await reportsBurnRate(midday, {
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsBurnRate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBurnRateReportsRequest](../../models/operations/getburnratereportsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetBurnRateResponseSchema[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## runway

Runway reports for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRunwayReports" method="get" path="/reports/runway" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.reports.runway({
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { reportsRunway } from "@midday-ai/sdk/funcs/reportsRunway.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await reportsRunway(midday, {
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsRunway failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRunwayReportsRequest](../../models/operations/getrunwayreportsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[number](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## expenses

Expense reports for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getExpensesReports" method="get" path="/reports/expenses" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.reports.expenses({
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { reportsExpenses } from "@midday-ai/sdk/funcs/reportsExpenses.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await reportsExpenses(midday, {
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsExpenses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExpensesReportsRequest](../../models/operations/getexpensesreportsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetExpensesResponseSchema](../../models/getexpensesresponseschema.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## spending

Spending reports for the authenticated team.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSpendingReports" method="get" path="/reports/spending" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.reports.spending({
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { reportsSpending } from "@midday-ai/sdk/funcs/reportsSpending.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await reportsSpending(midday, {
    from: "2023-01-01",
    to: "2023-12-31",
    currency: "USD",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsSpending failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpendingReportsRequest](../../models/operations/getspendingreportsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpendingResultArray[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |