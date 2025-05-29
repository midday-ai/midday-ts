# RevenueCurrent

## Example Usage

```typescript
import { RevenueCurrent } from "@midday-ai/sdk";

let value: RevenueCurrent = {
  date: "2023-01-31",
  value: 1000,
  currency: "USD",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `date`                     | *string*                   | :heavy_check_mark:         | Date for the current value | 2023-01-31                 |
| `value`                    | *number*                   | :heavy_check_mark:         | Current value              | 1000                       |
| `currency`                 | *string*                   | :heavy_check_mark:         | Currency code (ISO 4217)   | USD                        |