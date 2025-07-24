# GetTimerStatusData

## Example Usage

```typescript
import { GetTimerStatusData } from "@midday-ai/sdk/models/operations";

let value: GetTimerStatusData = {
  isRunning: true,
  currentEntry: {
    id: "095c0349-1e37-4a9a-8fe8-8c861b86e825",
    start: null,
    description:
      "colligate actually artistic mid fooey override warmly defrag incidentally",
    projectId: "0153e652-2880-49ea-b2dc-d9bc264d7b0a",
    trackerProject: {
      id: "0aa650ab-697e-4edd-9fd6-c05268ab3be7",
      name: "<value>",
    },
  },
  elapsedTime: 1800,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `isRunning`                                                        | *boolean*                                                          | :heavy_check_mark:                                                 | Whether there is currently a running timer                         | true                                                               |
| `currentEntry`                                                     | [operations.CurrentEntry](../../models/operations/currententry.md) | :heavy_check_mark:                                                 | Current running timer details, null if not running                 |                                                                    |
| `elapsedTime`                                                      | *number*                                                           | :heavy_check_mark:                                                 | Elapsed time in seconds for the current running timer              | 1800                                                               |