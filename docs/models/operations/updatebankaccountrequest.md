# UpdateBankAccountRequest

## Example Usage

```typescript
import { UpdateBankAccountRequest } from "@midday/sdk/models/operations";

let value: UpdateBankAccountRequest = {
  id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
  requestBody: {
    id: "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",
    name: "Checking Account",
    enabled: true,
    balance: 1500.75,
    type: "depository",
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                    | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     | b7e6c2a0-1f2d-4c3b-9a8e-123456789abc                                                                                                    |
| `requestBody`                                                                                                                           | [operations.UpdateBankAccountRequestBody](../../models/operations/updatebankaccountrequestbody.md)                                      | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     | {<br/>"id": "b7e6c2a0-1f2d-4c3b-9a8e-123456789abc",<br/>"name": "Checking Account",<br/>"enabled": true,<br/>"balance": 1500.75,<br/>"type": "depository"<br/>} |