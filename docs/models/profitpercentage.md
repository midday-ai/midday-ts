# ProfitPercentage

## Example Usage

```typescript
import { ProfitPercentage } from "@midday/sdk";

let value: ProfitPercentage = {
  value: 25,
  status: "positive",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `value`                                                              | *number*                                                             | :heavy_check_mark:                                                   | Percentage change compared to previous period                        | 25                                                                   |
| `status`                                                             | [models.ProfitPercentageStatus](../models/profitpercentagestatus.md) | :heavy_check_mark:                                                   | Status of the change                                                 | positive                                                             |