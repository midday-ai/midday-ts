# StopTimerData2

## Example Usage

```typescript
import { StopTimerData2 } from "@midday-ai/sdk/models/operations";

let value: StopTimerData2 = {
  id: "196af448-00b2-4b2c-aa79-264403b1eb31",
  discarded: true,
  duration: 1907.06,
  start: "<value>",
  stop: "<value>",
  description: null,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `discarded`                                                                              | *boolean*                                                                                | :heavy_check_mark:                                                                       | Always true for discarded timer entries (duration < 60s)                                 | true                                                                                     |
| `duration`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `project`                                                                                | [operations.StopTimerProject2](../../models/operations/stoptimerproject2.md)             | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `trackerProject`                                                                         | [operations.StopTimerTrackerProject](../../models/operations/stoptimertrackerproject.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `start`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `stop`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |