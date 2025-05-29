# UpdateTransactionsRequest

## Example Usage

```typescript
import { UpdateTransactionsRequest } from "@midday-ai/sdk/models/operations";

let value: UpdateTransactionsRequest = {
  ids: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `ids`                                                                                            | *string*[]                                                                                       | :heavy_check_mark:                                                                               | Array of transaction IDs to update.                                                              |
| `categorySlug`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | Category slug for the transactions.                                                              |
| `status`                                                                                         | [operations.UpdateTransactionsStatus](../../models/operations/updatetransactionsstatus.md)       | :heavy_minus_sign:                                                                               | Status to set for the transactions.                                                              |
| `frequency`                                                                                      | [operations.UpdateTransactionsFrequency](../../models/operations/updatetransactionsfrequency.md) | :heavy_minus_sign:                                                                               | Recurring frequency to set for the transactions.                                                 |
| `internal`                                                                                       | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether the transactions are internal.                                                           |
| `note`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | Note to set for the transactions.                                                                |
| `assignedId`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | Assigned user ID for the transactions.                                                           |
| `recurring`                                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether the transactions are recurring.                                                          |
| `tagId`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Tag ID to set for the transactions.                                                              |