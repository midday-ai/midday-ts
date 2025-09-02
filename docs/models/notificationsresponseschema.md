# NotificationsResponseSchema

## Example Usage

```typescript
import { NotificationsResponseSchema } from "@midday-ai/sdk/models";

let value: NotificationsResponseSchema = {
  data: [],
  meta: {
    cursor: "40",
    hasPreviousPage: true,
    hasNextPage: false,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [models.NotificationSchema](../models/notificationschema.md)[]                         | :heavy_check_mark:                                                                     | Array of notifications                                                                 |
| `meta`                                                                                 | [models.NotificationsResponseSchemaMeta](../models/notificationsresponseschemameta.md) | :heavy_check_mark:                                                                     | Pagination metadata                                                                    |