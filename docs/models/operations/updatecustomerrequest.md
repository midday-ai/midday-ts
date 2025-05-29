# UpdateCustomerRequest

## Example Usage

```typescript
import { UpdateCustomerRequest } from "@midday/sdk/models/operations";

let value: UpdateCustomerRequest = {
  id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  requestBody: {
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    name: "Acme Corporation",
    email: "contact@acme.com",
    country: "United States",
    addressLine1: "123 Main Street",
    addressLine2: "Suite 400",
    city: "San Francisco",
    state: "California",
    zip: "94105",
    phone: "+1-555-123-4567",
    website: "https://acme.com",
    note: "Preferred contact method is email. Large enterprise client.",
    vatNumber: "US123456789",
    countryCode: "US",
    contact: "John Smith",
    tags: [
      {
        id: "e7a9c1a2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
        name: "VIP",
      },
      {
        id: "f1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
        name: "Enterprise",
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4                                                         |
| `requestBody`                                                                                | [operations.UpdateCustomerRequestBody](../../models/operations/updatecustomerrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |