# TrackerProjectResponse

## Example Usage

```typescript
import { TrackerProjectResponse } from "@midday-ai/sdk";

let value: TrackerProjectResponse = {
  id: "b7e6c8e2-1f2a-4c3b-9e2d-1a2b3c4d5e6f",
  name: "Website Redesign",
  description:
    "Complete redesign of the company website with modern UI/UX and improved performance",
  status: "in_progress",
  estimate: 120,
  currency: "USD",
  createdAt: "2024-05-01T12:00:00.000Z",
  totalDuration: 43200,
  totalAmount: 3600,
  customer: {
    id: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
    name: "Acme Corporation",
    website: "https://acme.com",
  },
  tags: [
    {
      id: "d1e2f3a4-b5c6-7890-abcd-1234567890ef",
      name: "Design",
    },
  ],
  users: [],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier of the project                                                    | b7e6c8e2-1f2a-4c3b-9e2d-1a2b3c4d5e6f                                                |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | Name of the project                                                                 | Website Redesign                                                                    |
| `description`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | Detailed description of the project                                                 | Complete redesign of the company website with modern UI/UX and improved performance |
| `status`                                                                            | [models.TrackerProjectResponseStatus](../models/trackerprojectresponsestatus.md)    | :heavy_check_mark:                                                                  | Current status of the project                                                       | in_progress                                                                         |
| `estimate`                                                                          | *number*                                                                            | :heavy_check_mark:                                                                  | Estimated total hours required to complete the project                              | 120                                                                                 |
| `currency`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | Currency code for the project rate in ISO 4217 format                               | USD                                                                                 |
| `createdAt`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | Date and time when the project was created in ISO 8601 format                       | 2024-05-01T12:00:00.000Z                                                            |
| `totalDuration`                                                                     | *number*                                                                            | :heavy_check_mark:                                                                  | Total tracked time for the project in seconds                                       | 43200                                                                               |
| `totalAmount`                                                                       | *number*                                                                            | :heavy_check_mark:                                                                  | Total monetary amount earned from the project                                       | 3600                                                                                |
| `customer`                                                                          | [models.Customer](../models/customer.md)                                            | :heavy_check_mark:                                                                  | Customer information associated with the project                                    |                                                                                     |
| `tags`                                                                              | [models.TrackerProjectResponseTag](../models/trackerprojectresponsetag.md)[]        | :heavy_check_mark:                                                                  | Array of tags associated with the project                                           |                                                                                     |
| `users`                                                                             | [models.User](../models/user.md)[]                                                  | :heavy_check_mark:                                                                  | Array of users assigned to work on the project                                      |                                                                                     |