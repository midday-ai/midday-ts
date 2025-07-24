# Entry

## Example Usage

```typescript
import { Entry } from "@midday-ai/sdk/models/operations";

let value: Entry = {
  start: new Date("2024-04-15T09:00:00.000Z"),
  stop: new Date("2024-04-15T17:00:00.000Z"),
  dates: [
    "2024-04-15",
    "2024-04-16",
  ],
  assignedId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  description: "Worked on implementing user authentication feature",
  duration: 28800,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start time of the tracker entry in ISO 8601 format                                            | 2024-04-15T09:00:00.000Z                                                                      |
| `stop`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Stop time of the tracker entry in ISO 8601 format                                             | 2024-04-15T17:00:00.000Z                                                                      |
| `dates`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Array of dates for which to create tracker entries                                            | [<br/>"2024-04-15",<br/>"2024-04-16"<br/>]                                                    |
| `assignedId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the user assigned to this tracker entry                                  | a1b2c3d4-e5f6-7890-abcd-ef1234567890                                                          |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the project associated with this tracker entry                           | b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2                                                          |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional description or notes for the tracker entry                                           | Worked on implementing user authentication feature                                            |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Duration of the tracker entry in seconds                                                      | 28800                                                                                         |