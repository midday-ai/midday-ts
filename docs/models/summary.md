# Summary

## Example Usage

```typescript
import { Summary } from "@midday-ai/sdk";

let value: Summary = {
  averageExpense: 121054.86,
  currency: "SEK",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `averageExpense`                | *number*                        | :heavy_check_mark:              | Average expense over the period | 121054.86                       |
| `currency`                      | *string*                        | :heavy_check_mark:              | Currency code (ISO 4217)        | SEK                             |