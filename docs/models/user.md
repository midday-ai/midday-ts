# User

## Example Usage

```typescript
import { User } from "@midday/sdk";

let value: User = {
  id: "f1e2d3c4-b5a6-7890-abcd-1234567890ef",
  fullName: "Jane Doe",
  avatarUrl: "https://cdn.midday.ai/avatar.jpg",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | Unique identifier of the user        | f1e2d3c4-b5a6-7890-abcd-1234567890ef |
| `fullName`                           | *string*                             | :heavy_check_mark:                   | Full name of the user                | Jane Doe                             |
| `avatarUrl`                          | *string*                             | :heavy_check_mark:                   | URL to the user's avatar image       | https://cdn.midday.ai/avatar.jpg     |