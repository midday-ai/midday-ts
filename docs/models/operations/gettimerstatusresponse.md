# GetTimerStatusResponse

Timer status retrieved successfully.

## Example Usage

```typescript
import { GetTimerStatusResponse } from "@midday-ai/sdk/models/operations";

let value: GetTimerStatusResponse = {
  data: {
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
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.GetTimerStatusData](../../models/operations/gettimerstatusdata.md) | :heavy_check_mark:                                                             | N/A                                                                            |