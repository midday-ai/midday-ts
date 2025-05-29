# ProfitResultItem

## Example Usage

```typescript
import { ProfitResultItem } from "@midday/sdk";

let value: ProfitResultItem = {
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

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `date`                                                   | *string*                                                 | :heavy_check_mark:                                       | Date for the metric (ISO 8601)                           | 2023-01-31                                               |
| `precentage`                                             | [models.ProfitPercentage](../models/profitpercentage.md) | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `current`                                                | [models.ProfitCurrent](../models/profitcurrent.md)       | :heavy_check_mark:                                       | N/A                                                      |                                                          |
| `previous`                                               | [models.ProfitPrevious](../models/profitprevious.md)     | :heavy_check_mark:                                       | N/A                                                      |                                                          |