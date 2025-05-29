# GetV1TrackerEntriesResponse

List all tracker entries for the authenticated team.

## Example Usage

```typescript
import { GetV1TrackerEntriesResponse } from "@midday-ai/sdk/models/operations";

let value: GetV1TrackerEntriesResponse = {
  meta: {
    totalDuration: 86400,
    totalAmount: 1800,
    from: "2024-04-01",
    to: "2024-04-30",
  },
  result: {
    "key": [
      {
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
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                    | [operations.GetV1TrackerEntriesMeta](../../models/operations/getv1trackerentriesmeta.md)                                                  | :heavy_check_mark:                                                                                                                        | Metadata about the tracker entries response including totals and date range                                                               |
| `result`                                                                                                                                  | Record<string, [operations.Result](../../models/operations/result.md)[]>                                                                  | :heavy_check_mark:                                                                                                                        | Tracker entries grouped by date, where each key is a date in YYYY-MM-DD format and the value is an array of tracker entries for that date |