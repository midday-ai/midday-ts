# GetV1InvoicesSummaryResponse

## Example Usage

```typescript
import { GetV1InvoicesSummaryResponse } from "@midday-ai/sdk/models/operations";

let value: GetV1InvoicesSummaryResponse = {
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