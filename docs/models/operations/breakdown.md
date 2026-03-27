# Breakdown

## Example Usage

```typescript
import { Breakdown } from "@midday-ai/sdk/models/operations";

let value: Breakdown = {
  currency: "EUR",
  originalAmount: 15000.5,
  convertedAmount: 16250.75,
  count: 5,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `currency`                          | *string*                            | :heavy_check_mark:                  | Original currency of the invoices   | EUR                                 |
| `originalAmount`                    | *number*                            | :heavy_check_mark:                  | Total amount in original currency   | 15000.5                             |
| `convertedAmount`                   | *number*                            | :heavy_check_mark:                  | Amount converted to base currency   | 16250.75                            |
| `count`                             | *number*                            | :heavy_check_mark:                  | Number of invoices in this currency | 5                                   |