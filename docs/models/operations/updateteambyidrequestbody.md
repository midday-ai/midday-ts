# UpdateTeamByIdRequestBody

## Example Usage

```typescript
import { UpdateTeamByIdRequestBody } from "@midday-ai/sdk/models/operations";

let value: UpdateTeamByIdRequestBody = {
  name: "Acme Corporation",
  email: "team@acme.com",
  logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
  baseCurrency: "USD",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Name of the team or organization. Must be between 2 and 32 characters  | Acme Corporation                                                       |
| `email`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Primary contact email address for the team                             | team@acme.com                                                          |
| `logoUrl`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | URL to the team's logo image. Must be hosted on midday.ai domain       | https://cdn.midday.ai/logos/acme-corp.png                              |
| `baseCurrency`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | Base currency for the team in ISO 4217 format (3-letter currency code) | USD                                                                    |