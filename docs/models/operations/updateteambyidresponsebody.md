# UpdateTeamByIdResponseBody

Team updated

## Example Usage

```typescript
import { UpdateTeamByIdResponseBody } from "@midday-ai/sdk/models/operations";

let value: UpdateTeamByIdResponseBody = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Acme Corporation",
  logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
  plan: "pro",
  email: "team@acme.com",
  baseCurrency: "USD",
  countryCode: "US",
  fiscalYearStartMonth: 1,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier of the team                                                  | 123e4567-e89b-12d3-a456-426614174000                                           |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | Name of the team or organization                                               | Acme Corporation                                                               |
| `logoUrl`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | URL to the team's logo image                                                   | https://cdn.midday.ai/logos/acme-corp.png                                      |
| `plan`                                                                         | [operations.UpdateTeamByIdPlan](../../models/operations/updateteambyidplan.md) | :heavy_check_mark:                                                             | Current subscription plan of the team                                          | pro                                                                            |
| `email`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | Primary contact email address for the team                                     | team@acme.com                                                                  |
| `baseCurrency`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | Base currency for the team in ISO 4217 format (3-letter currency code)         | USD                                                                            |
| `countryCode`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Country code for the team in ISO 3166-1 alpha-2 format                         | US                                                                             |
| `fiscalYearStartMonth`                                                         | *number*                                                                       | :heavy_minus_sign:                                                             | Month when the fiscal year starts (1-12). Null for trailing 12 months.         | 1                                                                              |