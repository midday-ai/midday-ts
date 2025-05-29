# GetInvoiceSummaryResponse

## Example Usage

```typescript
import { GetInvoiceSummaryResponse } from "@midday/sdk/models/operations";

let value: GetInvoiceSummaryResponse = {
  currency: "SEK",
  totalAmount: 224171.25,
  invoiceCount: 15,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `currency`                           | *string*                             | :heavy_check_mark:                   | Currency of the invoice              | SEK                                  |
| `totalAmount`                        | *number*                             | :heavy_check_mark:                   | Total amount of the invoice          | 224171.25                            |
| `invoiceCount`                       | *number*                             | :heavy_check_mark:                   | Number of invoices for this currency | 15                                   |