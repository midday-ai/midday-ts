# RequestBody

## Example Usage

```typescript
import { RequestBody } from "@midday/sdk/models/operations";

let value: RequestBody = {
  name: "<value>",
  amount: 4562.73,
  currency: "Norwegian Krone",
  date: "2024-08-07",
  bankAccountId: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Name of the transaction.                                                                                     |
| `amount`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Amount of the transaction.                                                                                   |
| `currency`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Currency of the transaction.                                                                                 |
| `date`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Date of the transaction (ISO 8601).                                                                          |
| `bankAccountId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Bank account ID associated with the transaction.                                                             |
| `assignedId`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Assigned user ID for the transaction.                                                                        |
| `categorySlug`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Category slug for the transaction.                                                                           |
| `note`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Note for the transaction.                                                                                    |
| `internal`                                                                                                   | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether the transaction is internal.                                                                         |
| `attachments`                                                                                                | [operations.PostV1TransactionsBulkAttachment](../../models/operations/postv1transactionsbulkattachment.md)[] | :heavy_minus_sign:                                                                                           | Array of attachments for the transaction.                                                                    |