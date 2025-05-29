# GetV1InboxMeta

Pagination metadata for the inbox list response.

## Example Usage

```typescript
import { GetV1InboxMeta } from "@midday/sdk/models/operations";

let value: GetV1InboxMeta = {
  cursor: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  hasPreviousPage: false,
  hasNextPage: true,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | A cursor for pagination, representing the last item from the previous page. | b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4                                        |
| `hasPreviousPage`                                                           | *boolean*                                                                   | :heavy_check_mark:                                                          | Whether there is a previous page of results.                                | false                                                                       |
| `hasNextPage`                                                               | *boolean*                                                                   | :heavy_check_mark:                                                          | Whether there is a next page of results.                                    | true                                                                        |