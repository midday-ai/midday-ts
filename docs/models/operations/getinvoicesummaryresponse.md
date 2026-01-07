# GetInvoiceSummaryResponse

Invoice summary object containing total amount converted to team's base currency and total invoice count.

## Example Usage

```typescript
import { GetInvoiceSummaryResponse } from "@midday-ai/sdk/models/operations";

let value: GetInvoiceSummaryResponse = {
  currency: "USD",
  totalAmount: 224171.25,
  invoiceCount: 15,
  breakdown: [
    {
      currency: "EUR",
      originalAmount: 15000.5,
      convertedAmount: 16250.75,
      count: 5,
    },
    {
      currency: "GBP",
      originalAmount: 8000.25,
      convertedAmount: 9200.5,
      count: 3,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            | Example                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                                                                             | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Base currency of the team                                                                                                                                                              | USD                                                                                                                                                                                    |
| `totalAmount`                                                                                                                                                                          | *number*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Total amount of all invoices converted to base currency                                                                                                                                | 224171.25                                                                                                                                                                              |
| `invoiceCount`                                                                                                                                                                         | *number*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Total number of invoices                                                                                                                                                               | 15                                                                                                                                                                                     |
| `breakdown`                                                                                                                                                                            | [operations.Breakdown](../../models/operations/breakdown.md)[]                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Currency breakdown when multiple currencies are involved                                                                                                                               | [<br/>{<br/>"currency": "EUR",<br/>"originalAmount": 15000.5,<br/>"convertedAmount": 16250.75,<br/>"count": 5<br/>},<br/>{<br/>"currency": "GBP",<br/>"originalAmount": 8000.25,<br/>"convertedAmount": 9200.5,<br/>"count": 3<br/>}<br/>] |