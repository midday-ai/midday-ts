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

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `cursor`                                 | *string*                                 | :heavy_minus_sign:                       | N/A                                      | 25                                       |
| `sort`                                   | *string*[]                               | :heavy_minus_sign:                       | N/A                                      | [<br/>"createdAt",<br/>"desc"<br/>]      |
| `pageSize`                               | *number*                                 | :heavy_minus_sign:                       | N/A                                      | 25                                       |
| `q`                                      | *string*                                 | :heavy_minus_sign:                       | N/A                                      | Acme                                     |
| `start`                                  | *string*                                 | :heavy_minus_sign:                       | N/A                                      | 2024-01-01                               |
| `end`                                    | *string*                                 | :heavy_minus_sign:                       | N/A                                      | 2024-01-31                               |
| `statuses`                               | *string*[]                               | :heavy_minus_sign:                       | N/A                                      | [<br/>"paid",<br/>"unpaid"<br/>]         |
| `customers`                              | *string*[]                               | :heavy_minus_sign:                       | N/A                                      | [<br/>"customer-uuid-1",<br/>"customer-uuid-2"<br/>] |