# ListTeamMembersData

## Example Usage

```typescript
import { ListTeamMembersData } from "@midday/sdk/models/operations";

let value: ListTeamMembersData = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  role: "owner",
  fullName: "John Doe",
  avatarUrl: "https://cdn.midday.ai/avatars/john-doe.png",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Unique identifier of the user                                                           | 123e4567-e89b-12d3-a456-426614174000                                                    |
| `role`                                                                                  | [operations.Role](../../models/operations/role.md)                                      | :heavy_check_mark:                                                                      | Role of the team member. 'owner' has full permissions, 'member' has limited permissions | owner                                                                                   |
| `fullName`                                                                              | *string*                                                                                | :heavy_check_mark:                                                                      | Full name of the team member                                                            | John Doe                                                                                |
| `avatarUrl`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | URL to the team member's avatar image                                                   | https://cdn.midday.ai/avatars/john-doe.png                                              |