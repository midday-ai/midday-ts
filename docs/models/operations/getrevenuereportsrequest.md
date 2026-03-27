# GetRevenueReportsRequest

## Example Usage

```typescript
import { GetRevenueReportsRequest } from "@midday-ai/sdk/models/operations";

let value: GetRevenueReportsRequest = {
  from: "2023-01-01",
  to: "2023-12-31",
  currency: "USD",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `from`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Start date (ISO 8601 format)                                                                       | 2023-01-01                                                                                         |
| `to`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | End date (ISO 8601 format)                                                                         | 2023-12-31                                                                                         |
| `currency`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Currency code (ISO 4217)                                                                           | USD                                                                                                |
| `revenueType`                                                                                      | [operations.GetRevenueReportsRevenueType](../../models/operations/getrevenuereportsrevenuetype.md) | :heavy_minus_sign:                                                                                 | Type of revenue calculation                                                                        | net                                                                                                |