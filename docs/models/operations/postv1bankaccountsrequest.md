# PostV1BankAccountsRequest

Schema for creating a new bank account.

## Example Usage

```typescript
import { PostV1BankAccountsRequest } from "@midday-ai/sdk/models/operations";

let value: PostV1BankAccountsRequest = {
  name: "Checking Account",
  currency: "USD",
  manual: false,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The name of the bank account.                      | Checking Account                                   |
| `currency`                                         | *string*                                           | :heavy_minus_sign:                                 | The currency code for the bank account (ISO 4217). | USD                                                |
| `manual`                                           | *boolean*                                          | :heavy_minus_sign:                                 | Whether the bank account is a manual account.      | false                                              |