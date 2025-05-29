# GetExpensesResponseSchema

## Example Usage

```typescript
import { GetExpensesResponseSchema } from "@midday-ai/sdk";

let value: GetExpensesResponseSchema = {
  summary: {
    averageExpense: 121054.86,
    currency: "SEK",
  },
  meta: {
    type: "expense",
    currency: "SEK",
  },
  result: [
    {
      date: "2024-01-01 00:00:00",
      value: 637898.68,
      currency: "SEK",
      recurring: 9467.76,
      total: 647366.44,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `summary`                                                                          | [models.Summary](../models/summary.md)                                             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `meta`                                                                             | [models.GetExpensesResponseSchemaMeta](../models/getexpensesresponseschemameta.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ExpensesResultArray](../models/expensesresultarray.md)[]                   | :heavy_check_mark:                                                                 | N/A                                                                                |