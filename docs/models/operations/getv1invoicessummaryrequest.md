# GetV1InvoicesSummaryRequest

## Example Usage

```typescript
import { GetV1InvoicesSummaryRequest } from "@midday/sdk/models/operations";

let value: GetV1InvoicesSummaryRequest = {
  status: "paid",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `status`                                                                                       | [operations.GetV1InvoicesSummaryStatus](../../models/operations/getv1invoicessummarystatus.md) | :heavy_minus_sign:                                                                             | Filter summary by invoice status                                                               | paid                                                                                           |