# CreateTrackerEntryResponseBody

Response schema for created tracker entries

## Example Usage

```typescript
import { CreateTrackerEntryResponseBody } from "@midday-ai/sdk/models/operations";

let value: CreateTrackerEntryResponseBody = {
  data: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.CreateTrackerEntryData](../../models/operations/createtrackerentrydata.md)[] | :heavy_check_mark:                                                                       | Array of created tracker entries                                                         |