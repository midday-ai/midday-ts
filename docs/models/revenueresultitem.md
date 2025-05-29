# RevenueResultItem

## Example Usage

```typescript
import { RevenueResultItem } from "@midday-ai/sdk";

let value: RevenueResultItem = {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `date`                                                     | *string*                                                   | :heavy_check_mark:                                         | Date for the metric (ISO 8601)                             | 2023-01-31                                                 |
| `precentage`                                               | [models.RevenuePercentage](../models/revenuepercentage.md) | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `current`                                                  | [models.RevenueCurrent](../models/revenuecurrent.md)       | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `previous`                                                 | [models.RevenuePrevious](../models/revenueprevious.md)     | :heavy_check_mark:                                         | N/A                                                        |                                                            |