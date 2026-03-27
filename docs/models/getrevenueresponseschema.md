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
  result: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `summary`                                                    | [models.RevenueSummary](../models/revenuesummary.md)         | :heavy_check_mark:                                           | N/A                                                          |
| `meta`                                                       | [models.RevenueMeta](../models/revenuemeta.md)               | :heavy_check_mark:                                           | N/A                                                          |
| `result`                                                     | [models.RevenueResultItem](../models/revenueresultitem.md)[] | :heavy_check_mark:                                           | N/A                                                          |