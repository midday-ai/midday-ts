# GetRevenueResponseSchema

## Example Usage

```typescript
import { GetRevenueResponseSchema } from "@midday-ai/sdk/models";

let value: GetRevenueResponseSchema = {
  summary: {
    currentTotal: 10000,
    prevTotal: 8000,
    currency: "USD",
  },
  meta: {
    type: "revenue",
    currency: "USD",
  },
  result: [
    {
      date: "2023-01-31",
      percentage: {
        value: 25,
        status: "positive",
      },
      current: {
        date: "2023-01-31",
        value: 1000,
        currency: "USD",
      },
      previous: {
        date: "2022-01-31",
        value: 800,
        currency: "USD",
      },
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `summary`                                                    | [models.RevenueSummary](../models/revenuesummary.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `meta`                                                       | [models.RevenueMeta](../models/revenuemeta.md)               | :heavy_check_mark:                                           | N/A                                                          |
| `result`                                                     | [models.RevenueResultItem](../models/revenueresultitem.md)[] | :heavy_check_mark:                                           | N/A                                                          |