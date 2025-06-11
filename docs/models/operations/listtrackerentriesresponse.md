# ListTrackerEntriesResponse

List all tracker entries for the authenticated team.

## Example Usage

```typescript
import { ListTrackerEntriesResponse } from "@midday-ai/sdk/models/operations";

let value: ListTrackerEntriesResponse = {
  meta: {
    totalDuration: 86400,
    totalAmount: 1800,
    from: "2024-04-01",
    to: "2024-04-30",
  },
  result: {},
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `meta`                                                                                                                                    | [operations.ListTrackerEntriesMeta](../../models/operations/listtrackerentriesmeta.md)                                                    | :heavy_check_mark:                                                                                                                        | Metadata about the tracker entries response including totals and date range                                                               |
| `result`                                                                                                                                  | Record<string, [operations.Result](../../models/operations/result.md)[]>                                                                  | :heavy_check_mark:                                                                                                                        | Tracker entries grouped by date, where each key is a date in YYYY-MM-DD format and the value is an array of tracker entries for that date |