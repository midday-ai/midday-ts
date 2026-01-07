# ListInvoicesRequest

## Example Usage

```typescript
import { ListInvoicesRequest } from "@midday-ai/sdk/models/operations";

let value: ListInvoicesRequest = {
  cursor: "25",
  sort: [
    "createdAt",
    "desc",
  ],
  pageSize: 25,
  q: "Acme",
  start: "2024-01-01",
  end: "2024-01-31",
  statuses: [
    "paid",
    "unpaid",
  ],
  customers: [
    "customer-uuid-1",
    "customer-uuid-2",
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `cursor`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | A cursor for pagination, representing the last item from the previous page.   | 25                                                                            |
| `sort`                                                                        | *string*[]                                                                    | :heavy_minus_sign:                                                            | Sorting order as a tuple: [field, direction]. Example: ['createdAt', 'desc']. | [<br/>"createdAt",<br/>"desc"<br/>]                                           |
| `pageSize`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | Number of invoices to return per page (1-100).                                | 25                                                                            |
| `q`                                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | Search query string to filter invoices by text.                               | Acme                                                                          |
| `start`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Start date (inclusive) for filtering invoices, in ISO 8601 format.            | 2024-01-01                                                                    |
| `end`                                                                         | *string*                                                                      | :heavy_minus_sign:                                                            | End date (inclusive) for filtering invoices, in ISO 8601 format.              | 2024-01-31                                                                    |
| `statuses`                                                                    | *string*[]                                                                    | :heavy_minus_sign:                                                            | List of invoice statuses to filter by (e.g., 'paid', 'unpaid', 'overdue').    | [<br/>"paid",<br/>"unpaid"<br/>]                                              |
| `customers`                                                                   | *string*[]                                                                    | :heavy_minus_sign:                                                            | List of customer IDs to filter invoices.                                      | [<br/>"customer-uuid-1",<br/>"customer-uuid-2"<br/>]                          |