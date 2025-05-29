# CreateTransactionRequest

## Example Usage

```typescript
import { CreateTransactionRequest } from "@midday-ai/sdk/models/operations";

let value: CreateTransactionRequest = {
  name: "<value>",
  amount: 2654.98,
  currency: "Cedi",
  date: "2024-12-18",
  bankAccountId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Name of the transaction.                                                                           |
| `amount`                                                                                           | *number*                                                                                           | :heavy_check_mark:                                                                                 | Amount of the transaction.                                                                         |
| `currency`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | Currency of the transaction.                                                                       |
| `date`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | Date of the transaction (ISO 8601).                                                                |
| `bankAccountId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | Bank account ID associated with the transaction.                                                   |
| `assignedId`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Assigned user ID for the transaction.                                                              |
| `categorySlug`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Category slug for the transaction.                                                                 |
| `note`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Note for the transaction.                                                                          |
| `internal`                                                                                         | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether the transaction is internal.                                                               |
| `attachments`                                                                                      | [operations.CreateTransactionAttachment](../../models/operations/createtransactionattachment.md)[] | :heavy_minus_sign:                                                                                 | Array of attachments for the transaction.                                                          |