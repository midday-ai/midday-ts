# UpdateAllNotificationsStatusSchema

## Example Usage

```typescript
import { UpdateAllNotificationsStatusSchema } from "@midday-ai/sdk/models";

let value: UpdateAllNotificationsStatusSchema = {
  status: "read",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                 | [models.UpdateAllNotificationsStatusSchemaStatus](../models/updateallnotificationsstatusschemastatus.md) | :heavy_check_mark:                                                                                       | The new status to apply to all notifications for the authenticated user                                  | read                                                                                                     |