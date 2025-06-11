# ListInboxItemsResponse

Retrieve a list of inbox items for the authenticated team.

## Example Usage

```typescript
import { ListInboxItemsResponse } from "@midday-ai/sdk/models/operations";

let value: ListInboxItemsResponse = {
  meta: {
    cursor: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `meta`                                                                           | [operations.ListInboxItemsMeta](../../models/operations/listinboxitemsmeta.md)   | :heavy_check_mark:                                                               | Pagination metadata for the inbox list response.                                 |
| `data`                                                                           | [operations.ListInboxItemsData](../../models/operations/listinboxitemsdata.md)[] | :heavy_check_mark:                                                               | List of inbox items                                                              |