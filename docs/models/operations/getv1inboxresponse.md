# GetV1InboxResponse

Retrieve a list of inbox items for the authenticated team.

## Example Usage

```typescript
import { GetV1InboxResponse } from "@midday/sdk/models/operations";

let value: GetV1InboxResponse = {
  meta: {
    cursor: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [
    {
      id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
      fileName: "invoice-123.pdf",
      filePath: [
        "inbox",
        "2024",
        "05",
        "invoice-123.pdf",
      ],
      displayName: "Invoice May 2024",
      amount: 123.45,
      currency: "USD",
      contentType: "application/pdf",
      date: "2024-05-01",
      status: "pending",
      createdAt: "2024-05-01T12:34:56.789Z",
      website: "https://vendor.com",
      description: "Invoice for May 2024 services",
      transaction: {
        id: "a1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
        amount: 123.45,
        currency: "USD",
        name: "Acme Corp",
        date: "2024-05-01",
      },
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `meta`                                                                   | [operations.GetV1InboxMeta](../../models/operations/getv1inboxmeta.md)   | :heavy_check_mark:                                                       | Pagination metadata for the inbox list response.                         |
| `data`                                                                   | [operations.GetV1InboxData](../../models/operations/getv1inboxdata.md)[] | :heavy_check_mark:                                                       | List of inbox items                                                      |