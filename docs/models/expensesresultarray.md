# ExpensesResultArray

## Example Usage

```typescript
import { ExpensesResultArray } from "@midday-ai/sdk";

let value: ExpensesResultArray = {
  date: "2024-01-01 00:00:00",
  value: 637898.68,
  currency: "SEK",
  recurring: 9467.76,
  total: 647366.44,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `date`                                     | *string*                                   | :heavy_check_mark:                         | Date for the expense value                 | 2024-01-01 00:00:00                        |
| `value`                                    | *number*                                   | :heavy_check_mark:                         | Expense value for the given date           | 637898.68                                  |
| `currency`                                 | *string*                                   | :heavy_check_mark:                         | Currency code (ISO 4217)                   | SEK                                        |
| `recurring`                                | *number*                                   | :heavy_check_mark:                         | Recurring expense value for the given date | 9467.76                                    |
| `total`                                    | *number*                                   | :heavy_check_mark:                         | Total expense for the given date           | 647366.44                                  |