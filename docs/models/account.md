# Account

Bank account information associated with the transaction

## Example Usage

```typescript
import { Account } from "@midday-ai/sdk/models";

let value: Account = {
  id: "a43dc3a5-6925-4d91-ac9c-4c1a34bdb388",
  name: "Company Credit Card",
  currency: "USD",
  connection: {
    id: "a43dc3a5-6925-4d91-ac9c-4c1a34bdb388",
    name: "Chase Bank",
    logoUrl: "https://cdn.midday.ai/logos/chase-bank.png",
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Unique identifier of the bank account                                                                                           | a43dc3a5-6925-4d91-ac9c-4c1a34bdb388                                                                                            |
| `name`                                                                                                                          | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Display name of the bank account                                                                                                | Company Credit Card                                                                                                             |
| `currency`                                                                                                                      | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Currency of the bank account in ISO 4217 format                                                                                 | USD                                                                                                                             |
| `connection`                                                                                                                    | [models.Connection](../models/connection.md)                                                                                    | :heavy_check_mark:                                                                                                              | Bank connection information associated with the account                                                                         | {<br/>"id": "a43dc3a5-6925-4d91-ac9c-4c1a34bdb388",<br/>"name": "Chase Bank",<br/>"logoUrl": "https://cdn.midday.ai/logos/chase-bank.png"<br/>} |