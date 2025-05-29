# UpdateBankAccountRequestBody

Schema for updating a bank account.

## Example Usage

```typescript
import { UpdateBankAccountRequestBody } from "@midday-ai/sdk/models/operations";

let value: UpdateBankAccountRequestBody = {
  id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
  name: "Checking Account",
  enabled: true,
  balance: 1500.75,
  type: "depository",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The unique identifier of the bank account.                                           | b7e6c2a0-1f2d-4c3b-9a8e-123456789abc                                                 |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The name of the bank account.                                                        | Checking Account                                                                     |
| `enabled`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Whether the bank account is enabled.                                                 | true                                                                                 |
| `balance`                                                                            | *number*                                                                             | :heavy_minus_sign:                                                                   | Current balance of the bank account.                                                 | 1500.75                                                                              |
| `currency`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | The currency code for the bank account (ISO 4217).                                   | USD                                                                                  |
| `type`                                                                               | [operations.UpdateBankAccountType](../../models/operations/updatebankaccounttype.md) | :heavy_minus_sign:                                                                   | Type of the bank account.                                                            | depository                                                                           |