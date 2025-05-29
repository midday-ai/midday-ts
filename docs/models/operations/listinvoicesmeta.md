# ListInvoicesMeta

Pagination metadata

## Example Usage

```typescript
import { ListInvoicesMeta } from "@midday/sdk/models/operations";

let value: ListInvoicesMeta = {
  cursor: "25",
  hasPreviousPage: false,
  hasNextPage: true,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `cursor`                                             | *string*                                             | :heavy_check_mark:                                   | Cursor for pagination; null if there is no next page | 25                                                   |
| `hasPreviousPage`                                    | *boolean*                                            | :heavy_check_mark:                                   | Indicates if there is a previous page of results     | false                                                |
| `hasNextPage`                                        | *boolean*                                            | :heavy_check_mark:                                   | Indicates if there is a next page of results         | true                                                 |