# ListInvoicesRequest

## Example Usage

```typescript
import { ListInvoicesRequest } from "@midday-ai/sdk/models/operations";

let value: ListInvoicesRequest = {
  cursor: "25",
  sort: [
    "created_at",
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
  ids: [
    "invoice-uuid-1",
    "invoice-uuid-2",
  ],
  recurringIds: [
    "recurring-uuid-1",
    "recurring-uuid-2",
  ],
  recurring: true,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                                  | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | A cursor for pagination, representing the last item from the previous page.                                                               | 25                                                                                                                                        |
| `sort`                                                                                                                                    | *string*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | Sort as [column, direction]. Columns: created_at, due_date, issue_date, amount, status, customer, invoice_number. Direction: asc or desc. | [<br/>"created_at",<br/>"desc"<br/>]                                                                                                      |
| `pageSize`                                                                                                                                | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Number of invoices to return per page (1-100).                                                                                            | 25                                                                                                                                        |
| `q`                                                                                                                                       | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Search query string to filter invoices by text.                                                                                           | Acme                                                                                                                                      |
| `start`                                                                                                                                   | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | Start date (inclusive) for filtering invoices, in ISO 8601 format.                                                                        | 2024-01-01                                                                                                                                |
| `end`                                                                                                                                     | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | End date (inclusive) for filtering invoices, in ISO 8601 format.                                                                          | 2024-01-31                                                                                                                                |
| `statuses`                                                                                                                                | *string*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | List of invoice statuses to filter by (e.g., 'paid', 'unpaid', 'overdue').                                                                | [<br/>"paid",<br/>"unpaid"<br/>]                                                                                                          |
| `customers`                                                                                                                               | *string*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | List of customer IDs to filter invoices.                                                                                                  | [<br/>"customer-uuid-1",<br/>"customer-uuid-2"<br/>]                                                                                      |
| `ids`                                                                                                                                     | *string*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | List of invoice IDs to filter by.                                                                                                         | [<br/>"invoice-uuid-1",<br/>"invoice-uuid-2"<br/>]                                                                                        |
| `recurringIds`                                                                                                                            | *string*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | List of recurring series IDs to filter invoices by (shows all invoices from these series).                                                | [<br/>"recurring-uuid-1",<br/>"recurring-uuid-2"<br/>]                                                                                    |
| `recurring`                                                                                                                               | *boolean*                                                                                                                                 | :heavy_minus_sign:                                                                                                                        | Filter by recurring status. true = only recurring invoices, false = only non-recurring invoices.                                          | true                                                                                                                                      |