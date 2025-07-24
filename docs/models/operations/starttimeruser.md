# StartTimerUser

User information for the person who created this tracker entry

## Example Usage

```typescript
import { StartTimerUser } from "@midday-ai/sdk/models/operations";

let value: StartTimerUser = {
  id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  fullName: "Jane Doe",
  avatarUrl: "https://cdn.midday.ai/avatar.jpg",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Unique identifier of the user        | a1b2c3d4-e5f6-7890-abcd-ef1234567890 |
| `fullName`                           | *string*                             | :heavy_check_mark:                   | Full name of the user                | Jane Doe                             |
| `avatarUrl`                          | *string*                             | :heavy_check_mark:                   | URL to the user's avatar image       | https://cdn.midday.ai/avatar.jpg     |