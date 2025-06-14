# ListTeamsResponse

Retrieve a list of teams for the authenticated user.

## Example Usage

```typescript
import { ListTeamsResponse } from "@midday-ai/sdk/models/operations";

let value: ListTeamsResponse = {
  data: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [operations.ListTeamsData](../../models/operations/listteamsdata.md)[] | :heavy_check_mark:                                                     | Array of teams that the user has access to                             |