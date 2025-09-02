# NotificationSchema

## Example Usage

```typescript
import { NotificationSchema } from "@midday-ai/sdk/models";

let value: NotificationSchema = {
  id: "b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2",
  createdAt: "2024-04-15T09:00:00.000Z",
  teamId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  userId: "c2d3e4f5-a6b7-8901-bcde-f23456789012",
  type: "transactions_created",
  priority: 3,
  source: "system",
  status: "unread",
  metadata: {
    "transactionCount": 5,
    "dateRange": {
      "from": "2024-04-01",
      "to": "2024-04-15",
    },
  },
  lastUsedAt: "2024-04-15T11:00:00.000Z",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier of the notification                                                | b3b6e2c2-1f2a-4e3b-9c1d-2a4b6e2c21f2                                                 |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ISO timestamp when the notification was created                                      | 2024-04-15T09:00:00.000Z                                                             |
| `teamId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier of the team                                                        | a1b2c3d4-e5f6-7890-abcd-ef1234567890                                                 |
| `userId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier of the user (if applicable)                                        | c2d3e4f5-a6b7-8901-bcde-f23456789012                                                 |
| `type`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Type of notification                                                                 | transactions_created                                                                 |
| `priority`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | Priority level of the notification (1-3 = user notifications, 4-10 = insights)       | 3                                                                                    |
| `source`                                                                             | [models.Source](../models/source.md)                                                 | :heavy_check_mark:                                                                   | Source of the notification                                                           | system                                                                               |
| `status`                                                                             | [models.NotificationSchemaStatus](../models/notificationschemastatus.md)             | :heavy_check_mark:                                                                   | Current status of the notification                                                   | unread                                                                               |
| `metadata`                                                                           | Record<string, *any*>                                                                | :heavy_check_mark:                                                                   | Additional metadata for the notification                                             | {<br/>"transactionCount": 5,<br/>"dateRange": {<br/>"from": "2024-04-01",<br/>"to": "2024-04-15"<br/>}<br/>} |
| `lastUsedAt`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | ISO timestamp when the notification was last used by the system                      | 2024-04-15T11:00:00.000Z                                                             |