# ProfitPrevious

## Example Usage

```typescript
import { ProfitPrevious } from "@midday/sdk";

let value: ProfitPrevious = {
  date: "2022-01-31",
  value: 800,
  currency: "USD",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `date`                      | *string*                    | :heavy_check_mark:          | Date for the previous value | 2022-01-31                  |
| `value`                     | *number*                    | :heavy_check_mark:          | Previous value              | 800                         |
| `currency`                  | *string*                    | :heavy_check_mark:          | Currency code (ISO 4217)    | USD                         |