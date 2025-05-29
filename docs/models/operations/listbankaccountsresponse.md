# ListBankAccountsResponse

Response containing a list of bank accounts.

## Example Usage

```typescript
import { ListBankAccountsResponse } from "@midday/sdk/models/operations";

let value: ListBankAccountsResponse = {
  data: [
    {
      id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
      name: "Checking Account",
      currency: "USD",
      type: "depository",
      enabled: true,
      balance: 1500.75,
      manual: false,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.ListBankAccountsData](../../models/operations/listbankaccountsdata.md)[] | :heavy_check_mark:                                                                   | Array of bank account objects.                                                       |