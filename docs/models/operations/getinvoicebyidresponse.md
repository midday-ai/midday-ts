# GetInvoiceByIdResponse

Invoice object

## Example Usage

```typescript
import { GetInvoiceByIdResponse } from "@midday-ai/sdk/models/operations";

let value: GetInvoiceByIdResponse = {
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
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `id`                                                                                      | *string*                                                                                  | :heavy_check_mark:                                                                        | Unique identifier for the invoice                                                         | b3b7e6e2-8c2a-4e2a-9b1a-2e4b5c6d7f8a                                                      |
| `status`                                                                                  | [operations.GetInvoiceByIdStatus](../../models/operations/getinvoicebyidstatus.md)        | :heavy_check_mark:                                                                        | Current status of the invoice                                                             | paid                                                                                      |
| `dueDate`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | Due date of the invoice in ISO 8601 format                                                | 2024-06-30T23:59:59.000Z                                                                  |
| `issueDate`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | Issue date of the invoice in ISO 8601 format                                              | 2024-06-01T00:00:00.000Z                                                                  |
| `invoiceNumber`                                                                           | *string*                                                                                  | :heavy_check_mark:                                                                        | Invoice number as shown to the customer                                                   | INV-2024-001                                                                              |
| `amount`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | Total amount of the invoice                                                               | 1500.75                                                                                   |
| `currency`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | Currency code (ISO 4217) for the invoice amount                                           | USD                                                                                       |
| `customer`                                                                                | [operations.GetInvoiceByIdCustomer](../../models/operations/getinvoicebyidcustomer.md)    | :heavy_check_mark:                                                                        | Customer details                                                                          |                                                                                           |
| `paidAt`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | Timestamp when the invoice was paid (ISO 8601), or null if unpaid                         | 2024-06-15T12:00:00.000Z                                                                  |
| `reminderSentAt`                                                                          | *string*                                                                                  | :heavy_check_mark:                                                                        | Timestamp when a payment reminder was sent (ISO 8601), or null if never sent              | 2024-06-10T09:00:00.000Z                                                                  |
| `note`                                                                                    | *string*                                                                                  | :heavy_check_mark:                                                                        | Optional note attached to the invoice                                                     | Thank you for your business.                                                              |
| `vat`                                                                                     | *number*                                                                                  | :heavy_check_mark:                                                                        | Value-added tax amount, or null if not applicable                                         | 120                                                                                       |
| `tax`                                                                                     | *number*                                                                                  | :heavy_check_mark:                                                                        | Tax amount, or null if not applicable                                                     | 80                                                                                        |
| `discount`                                                                                | *number*                                                                                  | :heavy_check_mark:                                                                        | Discount amount applied to the invoice, or null if none                                   | 50                                                                                        |
| `subtotal`                                                                                | *number*                                                                                  | :heavy_check_mark:                                                                        | Subtotal before taxes and discounts, or null if not calculated                            | 1400                                                                                      |
| `viewedAt`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | Timestamp when the invoice was viewed by the customer (ISO 8601), or null if never viewed | 2024-06-05T14:30:00.000Z                                                                  |
| `customerName`                                                                            | *string*                                                                                  | :heavy_check_mark:                                                                        | Name of the customer as shown on the invoice, or null if not set                          | Acme Corporation                                                                          |
| `sentTo`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | Email address to which the invoice was sent, or null if not sent                          | billing@acme.com                                                                          |
| `sentAt`                                                                                  | *string*                                                                                  | :heavy_check_mark:                                                                        | Timestamp when the invoice was sent (ISO 8601), or null if not sent                       | 2024-06-02T08:00:00.000Z                                                                  |
| `createdAt`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | Timestamp when the invoice was created (ISO 8601)                                         | 2024-06-01T07:00:00.000Z                                                                  |
| `updatedAt`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | Timestamp when the invoice was last updated (ISO 8601)                                    | 2024-06-15T10:00:00.000Z                                                                  |