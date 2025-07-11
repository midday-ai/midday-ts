# RevenueMeta

## Example Usage

```typescript
import { RevenueMeta } from "@midday-ai/sdk/models";

let value: RevenueMeta = {
  type: "revenue",
  currency: "USD",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | [models.RevenueMetaType](../models/revenuemetatype.md) | :heavy_check_mark:                                     | Type of metric                                         | revenue                                                |
| `currency`                                             | *string*                                               | :heavy_check_mark:                                     | Currency code (ISO 4217)                               | USD                                                    |