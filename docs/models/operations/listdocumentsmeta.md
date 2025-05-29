# ListDocumentsMeta

Pagination metadata for the documents list.

## Example Usage

```typescript
import { ListDocumentsMeta } from "@midday/sdk/models/operations";

let value: ListDocumentsMeta = {
  cursor: "20",
  hasPreviousPage: false,
  hasNextPage: true,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `cursor`                          | *string*                          | :heavy_minus_sign:                | Cursor for pagination.            | 20                                |
| `hasPreviousPage`                 | *boolean*                         | :heavy_check_mark:                | Whether there is a previous page. | false                             |
| `hasNextPage`                     | *boolean*                         | :heavy_check_mark:                | Whether there is a next page.     | true                              |