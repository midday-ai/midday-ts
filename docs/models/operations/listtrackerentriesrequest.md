# ListTrackerEntriesRequest

## Example Usage

```typescript
import { ListTrackerEntriesRequest } from "@midday-ai/sdk/models/operations";

let value: ListTrackerEntriesRequest = {
  from: "2024-04-01",
  to: "2024-04-30",
  projectId: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `from`                                                            | *string*                                                          | :heavy_check_mark:                                                | Start date of the range (inclusive) in YYYY-MM-DD format          | 2024-04-01                                                        |
| `to`                                                              | *string*                                                          | :heavy_check_mark:                                                | End date of the range (inclusive) in YYYY-MM-DD format            | 2024-04-30                                                        |
| `projectId`                                                       | *string*                                                          | :heavy_minus_sign:                                                | Optional project ID to filter tracker entries by specific project | b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2                              |