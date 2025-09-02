# NotificationsResponseSchemaMeta

Pagination metadata

## Example Usage

```typescript
import { NotificationsResponseSchemaMeta } from "@midday-ai/sdk/models";

let value: NotificationsResponseSchemaMeta = {
  cursor: "40",
  hasPreviousPage: true,
  hasNextPage: false,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `cursor`                                      | *string*                                      | :heavy_check_mark:                            | Cursor for pagination (null if no more pages) | 40                                            |
| `hasPreviousPage`                             | *boolean*                                     | :heavy_check_mark:                            | Whether there are previous pages available    | true                                          |
| `hasNextPage`                                 | *boolean*                                     | :heavy_check_mark:                            | Whether there are more pages available        | false                                         |