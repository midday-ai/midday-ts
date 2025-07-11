# RevenuePercentage

## Example Usage

```typescript
import { RevenuePercentage } from "@midday-ai/sdk/models";

let value: RevenuePercentage = {
  value: 25,
  status: "positive",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `value`                                                                | *number*                                                               | :heavy_check_mark:                                                     | Percentage change compared to previous period                          | 25                                                                     |
| `status`                                                               | [models.RevenuePercentageStatus](../models/revenuepercentagestatus.md) | :heavy_check_mark:                                                     | Status of the change                                                   | positive                                                               |