# GetProfitResponseSchema

## Example Usage

```typescript
import { GetProfitResponseSchema } from "@midday-ai/sdk/models";

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
  result: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `summary`                                                  | [models.ProfitSummary](../models/profitsummary.md)         | :heavy_check_mark:                                         | N/A                                                        |
| `meta`                                                     | [models.ProfitMeta](../models/profitmeta.md)               | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [models.ProfitResultItem](../models/profitresultitem.md)[] | :heavy_check_mark:                                         | N/A                                                        |