# GetInvoiceSummaryRequest

## Example Usage

```typescript
import { GetInvoiceSummaryRequest } from "@midday-ai/sdk/models/operations";

let value: GetInvoiceSummaryRequest = {
  statuses: [
    "draft",
    "unpaid",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `statuses`                                                                                 | [operations.GetInvoiceSummaryStatus](../../models/operations/getinvoicesummarystatus.md)[] | :heavy_minus_sign:                                                                         | Filter summary by invoice statuses                                                         | [<br/>"draft",<br/>"unpaid"<br/>]                                                          |