# GetV1TransactionsMeta

Pagination metadata for the transactions response

## Example Usage

```typescript
import { GetV1TransactionsMeta } from "@midday-ai/sdk/models/operations";

let value: GetV1TransactionsMeta = {
  cursor: "eyJpZCI6IjQ1NiJ9",
  hasPreviousPage: false,
  hasNextPage: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cursor`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Cursor for the next page of results, undefined if no more pages    | eyJpZCI6IjQ1NiJ9                                                   |
| `hasPreviousPage`                                                  | *boolean*                                                          | :heavy_check_mark:                                                 | Whether there are more transactions available on the previous page | false                                                              |
| `hasNextPage`                                                      | *boolean*                                                          | :heavy_check_mark:                                                 | Whether there are more transactions available on the next page     | true                                                               |