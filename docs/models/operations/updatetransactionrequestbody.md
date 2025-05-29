# UpdateTransactionRequestBody

## Example Usage

```typescript
import { UpdateTransactionRequestBody } from "@midday-ai/sdk/models/operations";

let value: UpdateTransactionRequestBody = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `categorySlug`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Category slug for the transaction.                                                             |
| `status`                                                                                       | [operations.UpdateTransactionStatus](../../models/operations/updatetransactionstatus.md)       | :heavy_minus_sign:                                                                             | Status of the transaction.                                                                     |
| `internal`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether the transaction is internal.                                                           |
| `recurring`                                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether the transaction is recurring.                                                          |
| `frequency`                                                                                    | [operations.UpdateTransactionFrequency](../../models/operations/updatetransactionfrequency.md) | :heavy_minus_sign:                                                                             | Recurring frequency of the transaction.                                                        |
| `note`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | Note for the transaction.                                                                      |
| `assignedId`                                                                                   | *string*                                                                                       | :heavy_minus_sign:                                                                             | Assigned user ID for the transaction.                                                          |