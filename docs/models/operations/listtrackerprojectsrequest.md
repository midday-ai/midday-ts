# ListTrackerProjectsRequest

## Example Usage

```typescript
import { ListTrackerProjectsRequest } from "@midday-ai/sdk/models/operations";

let value: ListTrackerProjectsRequest = {
  cursor: "eyJpZCI6IjEyMyJ9",
  pageSize: 20,
  q: "website",
  start: "2024-04-01",
  end: "2024-04-30",
  status: "in_progress",
  customers: [
    "customer-1",
    "customer-2",
  ],
  tags: [
    "tag-1",
    "tag-2",
  ],
  sort: [
    "created_at",
    "desc",
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                                | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Cursor for pagination, representing the last item from the previous page                                                | eyJpZCI6IjEyMyJ9                                                                                                        |
| `pageSize`                                                                                                              | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | Number of projects to return per page (1-100)                                                                           | 20                                                                                                                      |
| `q`                                                                                                                     | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Search query string to filter projects by name or description                                                           | website                                                                                                                 |
| `start`                                                                                                                 | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Start date for filtering projects by creation date in YYYY-MM-DD format                                                 | 2024-04-01                                                                                                              |
| `end`                                                                                                                   | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | End date for filtering projects by creation date in YYYY-MM-DD format                                                   | 2024-04-30                                                                                                              |
| `status`                                                                                                                | [operations.ListTrackerProjectsStatus](../../models/operations/listtrackerprojectsstatus.md)                            | :heavy_minus_sign:                                                                                                      | Filter projects by status                                                                                               | in_progress                                                                                                             |
| `customers`                                                                                                             | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | Array of customer IDs to filter projects by specific customers                                                          | [<br/>"customer-1",<br/>"customer-2"<br/>]                                                                              |
| `tags`                                                                                                                  | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | Array of tag IDs to filter projects by specific tags                                                                    | [<br/>"tag-1",<br/>"tag-2"<br/>]                                                                                        |
| `sort`                                                                                                                  | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | Sort as [column, direction]. Columns: name, created_at, time, amount, assigned, customer, tags. Direction: asc or desc. | [<br/>"created_at",<br/>"desc"<br/>]                                                                                    |