# GetBurnRateResponseSchema

## Example Usage

```typescript
import { GetBurnRateResponseSchema } from "@midday-ai/sdk";

let value: GetBurnRateResponseSchema = {
  date: "2024-01-01",
  value: 647366.44,
  currency: "SEK",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `date`                             | *string*                           | :heavy_check_mark:                 | Date for the burn rate value       | 2024-01-01                         |
| `value`                            | *number*                           | :heavy_check_mark:                 | Burn rate value for the given date | 647366.44                          |
| `currency`                         | *string*                           | :heavy_check_mark:                 | Currency code (ISO 4217)           | SEK                                |