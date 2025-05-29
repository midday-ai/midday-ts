# UpdateCurrentUserResponse

The updated user

## Example Usage

```typescript
import { UpdateCurrentUserResponse } from "@midday-ai/sdk/models/operations";

let value: UpdateCurrentUserResponse = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  fullName: "Jane Doe",
  email: "jane.doe@acme.com",
  avatarUrl: "https://cdn.midday.ai/avatars/jane-doe.jpg",
  locale: "en-US",
  weekStartsOnMonday: true,
  timezone: "America/New_York",
  timeFormat: 24,
  dateFormat: "yyyy-MM-dd",
  team: {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Acme Corporation",
    logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
    plan: "pro",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Unique identifier of the user                                                                                    | 123e4567-e89b-12d3-a456-426614174000                                                                             |
| `fullName`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Full name of the user                                                                                            | Jane Doe                                                                                                         |
| `email`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Email address of the user                                                                                        | jane.doe@acme.com                                                                                                |
| `avatarUrl`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | URL to the user's avatar image                                                                                   | https://cdn.midday.ai/avatars/jane-doe.jpg                                                                       |
| `locale`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | User's preferred locale for internationalization (language and region)                                           | en-US                                                                                                            |
| `weekStartsOnMonday`                                                                                             | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the user's calendar week starts on Monday (true) or Sunday (false)                                       | true                                                                                                             |
| `timezone`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | User's timezone identifier in IANA Time Zone Database format                                                     | America/New_York                                                                                                 |
| `timeFormat`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | User's preferred time format: 12 for 12-hour format, 24 for 24-hour format                                       | 24                                                                                                               |
| `dateFormat`                                                                                                     | [operations.UpdateCurrentUserDateFormatResponse](../../models/operations/updatecurrentuserdateformatresponse.md) | :heavy_check_mark:                                                                                               | User's preferred date format. Available options: 'dd/MM/yyyy', 'MM/dd/yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy'          | yyyy-MM-dd                                                                                                       |
| `team`                                                                                                           | [operations.UpdateCurrentUserTeam](../../models/operations/updatecurrentuserteam.md)                             | :heavy_check_mark:                                                                                               | Team information that the user belongs to                                                                        |                                                                                                                  |