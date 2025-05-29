# ListCustomersMeta

Pagination metadata for the customers response

## Example Usage

```typescript
import { ListCustomersMeta } from "@midday/sdk/models/operations";

let value: ListCustomersMeta = {
  cursor: "eyJpZCI6IjQ1NiJ9",
  hasPreviousPage: false,
  hasNextPage: true,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `cursor`                                                        | *string*                                                        | :heavy_check_mark:                                              | Cursor for the next page of results, null if no more pages      | eyJpZCI6IjQ1NiJ9                                                |
| `hasPreviousPage`                                               | *boolean*                                                       | :heavy_check_mark:                                              | Whether there are more customers available on the previous page | false                                                           |
| `hasNextPage`                                                   | *boolean*                                                       | :heavy_check_mark:                                              | Whether there are more customers available on the next page     | true                                                            |