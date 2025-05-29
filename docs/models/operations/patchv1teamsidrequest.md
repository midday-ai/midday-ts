# PatchV1TeamsIdRequest

## Example Usage

```typescript
import { PatchV1TeamsIdRequest } from "@midday/sdk/models/operations";

let value: PatchV1TeamsIdRequest = {
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
| `requestBody`                                                                                | [operations.PatchV1TeamsIdRequestBody](../../models/operations/patchv1teamsidrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |