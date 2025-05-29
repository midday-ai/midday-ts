# GetInvoiceSummaryRequest

## Example Usage

```typescript
import { GetInvoiceSummaryRequest } from "@midday/sdk/models/operations";

let value: GetInvoiceSummaryRequest = {
  status: "paid",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `status`                                                                                 | [operations.GetInvoiceSummaryStatus](../../models/operations/getinvoicesummarystatus.md) | :heavy_minus_sign:                                                                       | Filter summary by invoice status                                                         | paid                                                                                     |