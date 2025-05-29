# PatchV1InboxIdResponse

Inbox item object

## Example Usage

```typescript
import { PatchV1InboxIdResponse } from "@midday/sdk/models/operations";

let value: PatchV1InboxIdResponse = {
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | Inbox item ID (UUID)                                                                         | b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4                                                         |
| `fileName`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | Original file name of the uploaded document                                                  | invoice-123.pdf                                                                              |
| `filePath`                                                                                   | *string*[]                                                                                   | :heavy_check_mark:                                                                           | Path segments to the file in storage                                                         | [<br/>"inbox",<br/>"2024",<br/>"05",<br/>"invoice-123.pdf"<br/>]                             |
| `displayName`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | Display name for the inbox item                                                              | Invoice May 2024                                                                             |
| `amount`                                                                                     | *number*                                                                                     | :heavy_check_mark:                                                                           | Amount detected or entered for the inbox item                                                | 123.45                                                                                       |
| `currency`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | Currency code (ISO 4217) for the amount                                                      | USD                                                                                          |
| `contentType`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | MIME type of the uploaded file                                                               | application/pdf                                                                              |
| `date`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Date associated with the inbox item (ISO 8601)                                               | 2024-05-01                                                                                   |
| `status`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | Status of the inbox item                                                                     | pending                                                                                      |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | Date and time when the inbox item was created (ISO 8601)                                     | 2024-05-01T12:34:56.789Z                                                                     |
| `website`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | Website associated with the inbox item, if any                                               | https://vendor.com                                                                           |
| `description`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | Description or notes for the inbox item                                                      | Invoice for May 2024 services                                                                |
| `transaction`                                                                                | [operations.PatchV1InboxIdTransaction](../../models/operations/patchv1inboxidtransaction.md) | :heavy_check_mark:                                                                           | Matched transaction for this inbox item, if any                                              |                                                                                              |