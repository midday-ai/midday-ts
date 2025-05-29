# UpdateTransactionsResponse

Transactions updated

## Example Usage

```typescript
import { UpdateTransactionsResponse } from "@midday/sdk/models/operations";

let value: UpdateTransactionsResponse = {
  meta: {
    cursor: "eyJpZCI6IjQ1NiJ9",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [
    {
      id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
      name: "Office Supplies Purchase",
      amount: 150.75,
      currency: "USD",
      date: "2024-05-01T12:00:00.000Z",
      category: {
        id: "office-supplies",
        name: "Office Supplies",
        color: "#FF5733",
        slug: "office-supplies",
      },
      status: "completed",
      internal: false,
      recurring: false,
      manual: false,
      frequency: "monthly",
      isFulfilled: true,
      note: "Paid with company credit card for office renovation",
      account: {
        id: "a43dc3a5-6925-4d91-ac9c-4c1a34bdb388",
        name: "Company Credit Card",
        currency: "USD",
        connection: {
          id: "a43dc3a5-6925-4d91-ac9c-4c1a34bdb388",
          name: "Chase Bank",
          logoUrl: "https://cdn.midday.ai/logos/chase-bank.png",
        },
      },
      tags: [
        {
          id: "b7e2f8c1-3d4a-4e2b-9f1a-2c3d4e5f6a7b",
          name: "invoice",
        },
        {
          id: "c8e2f8c1-3d4a-4e2b-9f1a-2c3d4e5f6a7c",
          name: "travel",
        },
      ],
      attachments: [
        {
          id: "b7e2f8c1-3d4a-4e2b-9f1a-2c3d4e5f6a7b",
          path: [
            "e1f2d3c4-b5a6-7d8e-9f0a-1b2c3d4e5f6a",
            "transactions",
            "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
            "receipt.pdf",
          ],
          size: 1928716,
          type: "application/pdf",
          filename: "receipt.pdf",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `meta`                                                                                 | [operations.UpdateTransactionsMeta](../../models/operations/updatetransactionsmeta.md) | :heavy_check_mark:                                                                     | Pagination metadata for the transactions response                                      |
| `data`                                                                                 | [models.TransactionResponse](../../models/transactionresponse.md)[]                    | :heavy_check_mark:                                                                     | Array of transactions matching the query criteria                                      |