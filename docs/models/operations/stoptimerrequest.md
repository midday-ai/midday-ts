# StopTimerRequest

## Example Usage

```typescript
import { StopTimerRequest } from "@midday-ai/sdk/models/operations";

let value: StopTimerRequest = {
  entryId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  assignedId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  stop: new Date("2024-04-15T17:00:00.000Z"),
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `entryId`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Unique identifier of the specific timer entry to stop. If not provided, will stop the current running timer for the user | b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2                                                                                     |
| `assignedId`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Unique identifier of the user whose timer should be stopped. If not provided, will use the authenticated user            | a1b2c3d4-e5f6-7890-abcd-ef1234567890                                                                                     |
| `stop`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_minus_sign:                                                                                                       | Stop time in ISO 8601 format. If not provided, will use current time                                                     | 2024-04-15T17:00:00.000Z                                                                                                 |