# GetInvoicesPaymentStatusResponse

Payment status for the authenticated team.

## Example Usage

```typescript
import { GetInvoicesPaymentStatusResponse } from "@midday/sdk/models/operations";

let value: GetInvoicesPaymentStatusResponse = {
  score: 85,
  paymentStatus: "good",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `score`                                          | *number*                                         | :heavy_check_mark:                               | Score associated with the invoice payment status | 85                                               |
| `paymentStatus`                                  | *string*                                         | :heavy_check_mark:                               | The payment status of the invoice                | good                                             |