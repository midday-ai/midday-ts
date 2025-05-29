# ListCustomersResponse

Retrieve a list of customers for the authenticated team.

## Example Usage

```typescript
import { ListCustomersResponse } from "@midday/sdk/models/operations";

let value: ListCustomersResponse = {
  meta: {
    cursor: "eyJpZCI6IjQ1NiJ9",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [
    {
      id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
      name: "Acme Corporation",
      email: "contact@acme.com",
      phone: "+1-555-123-4567",
      website: "https://acme.com",
      createdAt: "2024-05-01T12:34:56.789Z",
      country: "United States",
      addressLine1: "123 Main Street",
      addressLine2: "Suite 400",
      city: "San Francisco",
      state: "California",
      zip: "94105",
      note: "Preferred contact method is email. Large enterprise client.",
      vatNumber: "US123456789",
      countryCode: "US",
      token: "cus_abc123xyz789",
      contact: "John Smith",
      invoiceCount: 12,
      projectCount: 3,
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
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `meta`                                                                         | [operations.ListCustomersMeta](../../models/operations/listcustomersmeta.md)   | :heavy_check_mark:                                                             | Pagination metadata for the customers response                                 |
| `data`                                                                         | [operations.ListCustomersData](../../models/operations/listcustomersdata.md)[] | :heavy_check_mark:                                                             | Array of customers matching the query criteria                                 |