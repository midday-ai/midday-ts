# NotificationResponseSchema

## Example Usage

```typescript
import { NotificationResponseSchema } from "@midday-ai/sdk/models";

let value: NotificationResponseSchema = {
  data: {
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
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [models.NotificationSchema](../models/notificationschema.md) | :heavy_check_mark:                                           | N/A                                                          |