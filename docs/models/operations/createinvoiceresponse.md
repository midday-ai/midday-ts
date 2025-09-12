# CreateInvoiceResponse

Response after creating a draft invoice

## Example Usage

```typescript
import { CreateInvoiceResponse } from "@midday-ai/sdk/models/operations";

let value: CreateInvoiceResponse = {
  id: "b3b7e6e2-8c2a-4e2a-9b1a-2e4b5c6d7f8a",
  status: "draft",
  createdAt: "2024-06-01T07:00:00.000Z",
  updatedAt: "2024-06-01T07:00:00.000Z",
  pdfUrl: "https://app.midday.ai/api/download/invoice?token=eyJ...",
  previewUrl: "https://app.midday.ai/i/eyJ...",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | Unique identifier for the draft invoice                                          | b3b7e6e2-8c2a-4e2a-9b1a-2e4b5c6d7f8a                                             |
| `status`                                                                         | [operations.CreateInvoiceStatus](../../models/operations/createinvoicestatus.md) | :heavy_check_mark:                                                               | Current status of the invoice                                                    | draft                                                                            |
| `createdAt`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Timestamp when the invoice was created (ISO 8601)                                | 2024-06-01T07:00:00.000Z                                                         |
| `updatedAt`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | Timestamp when the invoice was last updated (ISO 8601)                           | 2024-06-01T07:00:00.000Z                                                         |
| `pdfUrl`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Direct URL to download the invoice PDF                                           | https://app.midday.ai/api/download/invoice?token=eyJ...                          |
| `previewUrl`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Direct URL to preview the invoice in browser                                     | https://app.midday.ai/i/eyJ...                                                   |