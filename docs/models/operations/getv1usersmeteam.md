# GetV1UsersMeTeam

Team information that the user belongs to

## Example Usage

```typescript
import { GetV1UsersMeTeam } from "@midday-ai/sdk/models/operations";

let value: GetV1UsersMeTeam = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Acme Corporation",
  logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
  plan: "pro",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_check_mark:                        | Unique identifier of the team             | 123e4567-e89b-12d3-a456-426614174000      |
| `name`                                    | *string*                                  | :heavy_check_mark:                        | Name of the team or organization          | Acme Corporation                          |
| `logoUrl`                                 | *string*                                  | :heavy_check_mark:                        | URL to the team's logo image              | https://cdn.midday.ai/logos/acme-corp.png |
| `plan`                                    | *string*                                  | :heavy_check_mark:                        | Current subscription plan of the team     | pro                                       |