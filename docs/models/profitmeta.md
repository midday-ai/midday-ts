# ProfitMeta

## Example Usage

```typescript
import { ProfitMeta } from "@midday-ai/sdk";

let value: ProfitMeta = {
  type: "profit",
  currency: "USD",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | [models.ProfitMetaType](../models/profitmetatype.md) | :heavy_check_mark:                                   | Type of metric                                       | profit                                               |
| `currency`                                           | *string*                                             | :heavy_check_mark:                                   | Currency code (ISO 4217)                             | USD                                                  |