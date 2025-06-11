# UpdateTransactionsResponse

Transactions updated

## Example Usage

```typescript
import { UpdateTransactionsResponse } from "@midday-ai/sdk/models/operations";

let value: UpdateTransactionsResponse = {
  meta: {
    cursor: "eyJpZCI6IjQ1NiJ9",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `meta`                                                                                 | [operations.UpdateTransactionsMeta](../../models/operations/updatetransactionsmeta.md) | :heavy_check_mark:                                                                     | Pagination metadata for the transactions response                                      |
| `data`                                                                                 | [models.TransactionResponse](../../models/transactionresponse.md)[]                    | :heavy_check_mark:                                                                     | Array of transactions matching the query criteria                                      |