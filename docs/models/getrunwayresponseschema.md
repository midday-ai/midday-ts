# GetRunwayResponseSchema

## Example Usage

```typescript
import { GetRunwayResponseSchema } from "@midday-ai/sdk/models";

let value: GetRunwayResponseSchema = {
  months: 4494.85,
  medianBurn: 6495.9,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `months`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | Number of months of runway remaining, based on current burn rate and available cash. |
| `medianBurn`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | Median monthly burn rate (last 3 completed months) used to compute runway.           |