# CreateTrackerProjectRequest

Tracker project to create

## Example Usage

```typescript
import { CreateTrackerProjectRequest } from "@midday-ai/sdk/models/operations";

let value: CreateTrackerProjectRequest = {
  name: "Website Redesign",
  description:
    "Complete redesign of the company website with modern UI/UX and improved performance",
  estimate: 120,
  billable: true,
  rate: 75,
  currency: "USD",
  status: "in_progress",
  customerId: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
  tags: [
    {
      id: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
      value: "Design",
    },
    {
      id: "e2d3c4b5-a6f1-7890-1234-567890abcdef",
      value: "Frontend",
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                         | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | Name of the project                                                                                                                            | Website Redesign                                                                                                                               |
| `description`                                                                                                                                  | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Detailed description of the project                                                                                                            | Complete redesign of the company website with modern UI/UX and improved performance                                                            |
| `estimate`                                                                                                                                     | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Estimated total hours required to complete the project                                                                                         | 120                                                                                                                                            |
| `billable`                                                                                                                                     | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | Whether the project is billable to the customer                                                                                                | true                                                                                                                                           |
| `rate`                                                                                                                                         | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Hourly rate for the project in the specified currency                                                                                          | 75                                                                                                                                             |
| `currency`                                                                                                                                     | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Currency code for the project rate in ISO 4217 format                                                                                          | USD                                                                                                                                            |
| `status`                                                                                                                                       | [operations.CreateTrackerProjectStatus](../../models/operations/createtrackerprojectstatus.md)                                                 | :heavy_minus_sign:                                                                                                                             | Current status of the project                                                                                                                  | in_progress                                                                                                                                    |
| `customerId`                                                                                                                                   | *string*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Unique identifier of the customer associated with this project                                                                                 | a1b2c3d4-e5f6-7890-abcd-1234567890ef                                                                                                           |
| `tags`                                                                                                                                         | [operations.CreateTrackerProjectTag](../../models/operations/createtrackerprojecttag.md)[]                                                     | :heavy_minus_sign:                                                                                                                             | Array of tags to associate with the project                                                                                                    | [<br/>{<br/>"id": "f1e2d3c4-b5a6-7890-1234-567890abcdef",<br/>"value": "Design"<br/>},<br/>{<br/>"id": "e2d3c4b5-a6f1-7890-1234-567890abcdef",<br/>"value": "Frontend"<br/>}<br/>] |