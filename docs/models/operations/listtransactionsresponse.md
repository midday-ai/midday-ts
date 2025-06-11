# ListTransactionsResponse

Retrieve a list of transactions for the authenticated team.

## Example Usage

```typescript
import { ListTransactionsResponse } from "@midday-ai/sdk/models/operations";

let value: ListTransactionsResponse = {
  meta: {
    cursor: "eyJpZCI6IjQ1NiJ9",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `meta`                                                                             | [operations.ListTransactionsMeta](../../models/operations/listtransactionsmeta.md) | :heavy_check_mark:                                                                 | Pagination metadata for the transactions response                                  |
| `data`                                                                             | [models.TransactionResponse](../../models/transactionresponse.md)[]                | :heavy_check_mark:                                                                 | Array of transactions matching the query criteria                                  |