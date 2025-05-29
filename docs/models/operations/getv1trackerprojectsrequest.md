# GetV1TrackerProjectsRequest

## Example Usage

```typescript
import { GetV1TrackerProjectsRequest } from "@midday/sdk/models/operations";

let value: GetV1TrackerProjectsRequest = {
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
    "-createdAt",
    "name",
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `cursor`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | eyJpZCI6IjEyMyJ9                                                                               |
| `pageSize`                                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | 20                                                                                             |
| `q`                                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | website                                                                                        |
| `start`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | 2024-04-01                                                                                     |
| `end`                                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            | 2024-04-30                                                                                     |
| `status`                                                                                       | [operations.GetV1TrackerProjectsStatus](../../models/operations/getv1trackerprojectsstatus.md) | :heavy_minus_sign:                                                                             | Filter projects by status                                                                      | in_progress                                                                                    |
| `customers`                                                                                    | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            | [<br/>"customer-1",<br/>"customer-2"<br/>]                                                     |
| `tags`                                                                                         | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            | [<br/>"tag-1",<br/>"tag-2"<br/>]                                                               |
| `sort`                                                                                         | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            | [<br/>"-createdAt",<br/>"name"<br/>]                                                           |