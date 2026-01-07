# CreateInvoicePaymentIntentResponse

Payment intent created

## Example Usage

```typescript
import { CreateInvoicePaymentIntentResponse } from "@midday-ai/sdk/models/operations";

let value: CreateInvoicePaymentIntentResponse = {
  clientSecret: "<value>",
  amount: 5862.8,
  currency: "Surinam Dollar",
  stripeAccountId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `clientSecret`     | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_check_mark: | N/A                |
| `stripeAccountId`  | *string*           | :heavy_check_mark: | N/A                |