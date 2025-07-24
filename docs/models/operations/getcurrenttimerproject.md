# GetCurrentTimerProject

Project information associated with this tracker entry

## Example Usage

```typescript
import { GetCurrentTimerProject } from "@midday-ai/sdk/models/operations";

let value: GetCurrentTimerProject = {
  id: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  createdAt: "2024-03-01T10:00:00.000Z",
  rate: 75,
  currency: "USD",
  status: "in_progress",
  description: "Complete website redesign with modern UI/UX",
  name: "Website Redesign Project",
  billable: true,
  estimate: 120,
  customer: {
    id: "customer-1234",
    name: "Acme Corporation",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier of the project                                                         | b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2                                                     |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Date and time when the project was created in ISO 8601 format                            | 2024-03-01T10:00:00.000Z                                                                 |
| `rate`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | Default hourly rate for the project                                                      | 75                                                                                       |
| `currency`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | Currency code for the project rate in ISO 4217 format                                    | USD                                                                                      |
| `status`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | Current status of the project                                                            | in_progress                                                                              |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | Description of the project                                                               | Complete website redesign with modern UI/UX                                              |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | Name of the project                                                                      | Website Redesign Project                                                                 |
| `billable`                                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether the project is billable to the customer                                          | true                                                                                     |
| `estimate`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | Estimated total hours for the project                                                    | 120                                                                                      |
| `customer`                                                                               | [operations.GetCurrentTimerCustomer](../../models/operations/getcurrenttimercustomer.md) | :heavy_check_mark:                                                                       | Customer information associated with the project                                         |                                                                                          |