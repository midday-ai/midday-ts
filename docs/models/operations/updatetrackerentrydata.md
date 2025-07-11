# UpdateTrackerEntryData

## Example Usage

```typescript
import { UpdateTrackerEntryData } from "@midday-ai/sdk/models/operations";

let value: UpdateTrackerEntryData = {
  id: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  createdAt: "2024-04-15T09:00:00.000Z",
  duration: 28800,
  start: "2024-04-15T09:00:00.000Z",
  stop: "2024-04-15T17:00:00.000Z",
  teamId: "team-1234",
  description: "Worked on implementing user authentication feature",
  rate: 75,
  currency: "USD",
  billed: false,
  date: "2024-04-15",
  user: {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    fullName: "Jane Doe",
    avatarUrl: "https://cdn.midday.ai/avatar.jpg",
  },
  project: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique identifier of the tracker entry                                                       | b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2                                                         |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | Date and time when the tracker entry was created in ISO 8601 format                          | 2024-04-15T09:00:00.000Z                                                                     |
| `duration`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | Duration of the tracker entry in seconds                                                     | 28800                                                                                        |
| `start`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | Start time of the tracker entry in ISO 8601 format                                           | 2024-04-15T09:00:00.000Z                                                                     |
| `stop`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Stop time of the tracker entry in ISO 8601 format                                            | 2024-04-15T17:00:00.000Z                                                                     |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique identifier of the team that owns this tracker entry                                   | team-1234                                                                                    |
| `description`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | Description or notes for the tracker entry                                                   | Worked on implementing user authentication feature                                           |
| `rate`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | Hourly rate applied to this tracker entry                                                    | 75                                                                                           |
| `currency`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | Currency code for the rate in ISO 4217 format                                                | USD                                                                                          |
| `billed`                                                                                     | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether this tracker entry has been billed to the customer                                   | false                                                                                        |
| `date`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Date of the tracker entry in YYYY-MM-DD format                                               | 2024-04-15                                                                                   |
| `user`                                                                                       | [operations.UpdateTrackerEntryUser](../../models/operations/updatetrackerentryuser.md)       | :heavy_check_mark:                                                                           | User information for the person who created this tracker entry                               |                                                                                              |
| `project`                                                                                    | [operations.UpdateTrackerEntryProject](../../models/operations/updatetrackerentryproject.md) | :heavy_check_mark:                                                                           | Project information associated with this tracker entry                                       |                                                                                              |