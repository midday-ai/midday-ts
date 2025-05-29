# ProfitSummary

## Example Usage

```typescript
import { ProfitSummary } from "@midday/sdk";

let value: ProfitSummary = {
  currentTotal: 10000,
  prevTotal: 8000,
  currency: "USD",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `currentTotal`                       | *number*                             | :heavy_check_mark:                   | Total profit for the current period  | 10000                                |
| `prevTotal`                          | *number*                             | :heavy_check_mark:                   | Total profit for the previous period | 8000                                 |
| `currency`                           | *string*                             | :heavy_check_mark:                   | Currency code (ISO 4217)             | USD                                  |