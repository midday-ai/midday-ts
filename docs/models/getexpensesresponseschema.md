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
  result: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `summary`                                                                          | [models.Summary](../models/summary.md)                                             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `meta`                                                                             | [models.GetExpensesResponseSchemaMeta](../models/getexpensesresponseschemameta.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `result`                                                                           | [models.ExpensesResultArray](../models/expensesresultarray.md)[]                   | :heavy_check_mark:                                                                 | N/A                                                                                |