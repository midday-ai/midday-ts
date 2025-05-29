# ListTrackerEntriesMeta

Metadata about the tracker entries response including totals and date range

## Example Usage

```typescript
import { ListTrackerEntriesMeta } from "@midday/sdk/models/operations";

let value: ListTrackerEntriesMeta = {
  totalDuration: 86400,
  totalAmount: 1800,
  from: "2024-04-01",
  to: "2024-04-30",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `totalDuration`                                                  | *number*                                                         | :heavy_check_mark:                                               | Total duration of all tracker entries in the response in seconds | 86400                                                            |
| `totalAmount`                                                    | *number*                                                         | :heavy_check_mark:                                               | Total monetary amount for all tracker entries in the response    | 1800                                                             |
| `from`                                                           | *string*                                                         | :heavy_check_mark:                                               | Start date of the queried range in YYYY-MM-DD format             | 2024-04-01                                                       |
| `to`                                                             | *string*                                                         | :heavy_check_mark:                                               | End date of the queried range in YYYY-MM-DD format               | 2024-04-30                                                       |