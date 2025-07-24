# StartTimerRequest

## Example Usage

```typescript
import { StartTimerRequest } from "@midday-ai/sdk/models/operations";

let value: StartTimerRequest = {
  projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  assignedId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  description: "Working on implementing timer feature",
  start: new Date("2024-04-15T09:00:00.000Z"),
  continueFromEntry: "c4d5e6f7-2a3b-4c5d-8e9f-3a4b5c6d7e8f",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier of the project to track time for                                                     | b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2                                                                   |
| `assignedId`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Unique identifier of the user to assign the timer to. If not provided, will use the authenticated user | a1b2c3d4-e5f6-7890-abcd-ef1234567890                                                                   |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Optional description for the timer session                                                             | Working on implementing timer feature                                                                  |
| `start`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | Start time in ISO 8601 format. If not provided, will use current time                                  | 2024-04-15T09:00:00.000Z                                                                               |
| `continueFromEntry`                                                                                    | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Continue from a specific paused entry ID                                                               | c4d5e6f7-2a3b-4c5d-8e9f-3a4b5c6d7e8f                                                                   |