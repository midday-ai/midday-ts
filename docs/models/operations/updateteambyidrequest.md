# UpdateTeamByIdRequest

## Example Usage

```typescript
import { UpdateTeamByIdRequest } from "@midday-ai/sdk/models/operations";

let value: UpdateTeamByIdRequest = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  requestBody: {
    name: "Acme Corporation",
    email: "team@acme.com",
    logoUrl: "https://cdn.midday.ai/logos/acme-corp.png",
    baseCurrency: "USD",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | 123e4567-e89b-12d3-a456-426614174000                                                         |
| `requestBody`                                                                                | [operations.UpdateTeamByIdRequestBody](../../models/operations/updateteambyidrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |