# GetV1TeamsResponse

Retrieve a list of teams for the authenticated user.

## Example Usage

```typescript
import { GetV1TeamsResponse } from "@midday-ai/sdk/models/operations";

let value: GetV1TeamsResponse = {
  data: [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      name: "Acme Corporation",
      logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
      plan: "pro",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.GetV1TeamsData](../../models/operations/getv1teamsdata.md)[] | :heavy_check_mark:                                                       | Array of teams that the user has access to                               |