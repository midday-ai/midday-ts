# GetV1TeamsIdMembersResponse

Team members

## Example Usage

```typescript
import { GetV1TeamsIdMembersResponse } from "@midday/sdk/models/operations";

let value: GetV1TeamsIdMembersResponse = {
  data: [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      role: "owner",
      fullName: "John Doe",
      avatarUrl: "https://cdn.midday.ai/avatars/john-doe.png",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [operations.GetV1TeamsIdMembersData](../../models/operations/getv1teamsidmembersdata.md)[] | :heavy_check_mark:                                                                         | Array of team members with their roles and information                                     |