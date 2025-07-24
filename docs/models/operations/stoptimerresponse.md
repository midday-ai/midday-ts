# StopTimerResponse

Timer stopped successfully.

## Example Usage

```typescript
import { StopTimerResponse } from "@midday-ai/sdk/models/operations";

let value: StopTimerResponse = {
  data: {
    id: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
    createdAt: "2024-04-15T09:00:00.000Z",
    duration: -1,
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [operations.StopTimerData](../../models/operations/stoptimerdata.md) | :heavy_check_mark:                                                   | N/A                                                                  |