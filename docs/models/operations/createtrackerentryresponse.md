# CreateTrackerEntryResponse

Response schema for created tracker entries

## Example Usage

```typescript
import { CreateTrackerEntryResponse } from "@midday-ai/sdk/models/operations";

let value: CreateTrackerEntryResponse = {
  data: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.CreateTrackerEntryData](../../models/operations/createtrackerentrydata.md)[] | :heavy_check_mark:                                                                       | Array of created tracker entries                                                         |