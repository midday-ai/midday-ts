# ListInvoicesResponse

Response containing a list of invoices and pagination metadata

## Example Usage

```typescript
import { ListInvoicesResponse } from "@midday-ai/sdk/models/operations";

let value: ListInvoicesResponse = {
  meta: {
    cursor: "25",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `meta`                                                                       | [operations.ListInvoicesMeta](../../models/operations/listinvoicesmeta.md)   | :heavy_check_mark:                                                           | Pagination metadata                                                          |
| `data`                                                                       | [operations.ListInvoicesData](../../models/operations/listinvoicesdata.md)[] | :heavy_check_mark:                                                           | Array of invoice objects                                                     |