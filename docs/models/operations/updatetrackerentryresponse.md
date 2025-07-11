# UpdateTrackerEntryResponse

Response schema for created tracker entries

## Example Usage

```typescript
import { UpdateTrackerEntryResponse } from "@midday-ai/sdk/models/operations";

let value: UpdateTrackerEntryResponse = {
  data: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.UpdateTrackerEntryData](../../models/operations/updatetrackerentrydata.md)[] | :heavy_check_mark:                                                                       | Array of created tracker entries                                                         |