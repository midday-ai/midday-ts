# GetProfitResponseSchema

## Example Usage

```typescript
import { GetProfitResponseSchema } from "@midday/sdk";

let value: GetProfitResponseSchema = {
  summary: {
    currentTotal: 10000,
    prevTotal: 8000,
    currency: "USD",
  },
  meta: {
    type: "profit",
    currency: "USD",
  },
  result: [
    {
      date: "2023-01-31",
      precentage: {
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

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `summary`                                                  | [models.ProfitSummary](../models/profitsummary.md)         | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.ProfitMeta](../models/profitmeta.md)               | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [models.ProfitResultItem](../models/profitresultitem.md)[] | :heavy_check_mark:                                         | N/A                                                        |