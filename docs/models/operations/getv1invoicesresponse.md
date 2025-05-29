# GetV1InvoicesResponse

Response containing a list of invoices and pagination metadata

## Example Usage

```typescript
import { GetV1InvoicesResponse } from "@midday-ai/sdk/models/operations";

let value: GetV1InvoicesResponse = {
  meta: {
    cursor: "25",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [
    {
      id: "b3b7e6e2-8c2a-4e2a-9b1a-2e4b5c6d7f8a",
      status: "paid",
      dueDate: "2024-06-30T23:59:59.000Z",
      issueDate: "2024-06-01T00:00:00.000Z",
      invoiceNumber: "INV-2024-001",
      amount: 1500.75,
      currency: "USD",
      customer: {
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        name: "Acme Corporation",
        website: "https://acme.com",
        email: "info@acme.com",
      },
      paidAt: "2024-06-15T12:00:00.000Z",
      reminderSentAt: "2024-06-10T09:00:00.000Z",
      note: "Thank you for your business.",
      vat: 120,
      tax: 80,
      discount: 50,
      subtotal: 1400,
      viewedAt: "2024-06-05T14:30:00.000Z",
      customerName: "Acme Corporation",
      sentTo: "billing@acme.com",
      sentAt: "2024-06-02T08:00:00.000Z",
      createdAt: "2024-06-01T07:00:00.000Z",
      updatedAt: "2024-06-15T10:00:00.000Z",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `meta`                                                                         | [operations.GetV1InvoicesMeta](../../models/operations/getv1invoicesmeta.md)   | :heavy_check_mark:                                                             | Pagination metadata                                                            |
| `data`                                                                         | [operations.GetV1InvoicesData](../../models/operations/getv1invoicesdata.md)[] | :heavy_check_mark:                                                             | Array of invoice objects                                                       |