# GetV1DocumentsData

A single document object response.

## Example Usage

```typescript
import { GetV1DocumentsData } from "@midday-ai/sdk/models/operations";

let value: GetV1DocumentsData = {
  id: "doc_1234567890abcdef",
  title: "Invoice April 2024",
  pathTokens: [
    "invoices",
    "2024",
    "april",
    "invoice-123.pdf",
  ],
  metadata: {
    size: 204800,
    mimetype: "application/pdf",
  },
  processingStatus: "processed",
  summary: "Invoice for April 2024, total $1,200.00",
  date: "2024-04-30",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for the document.                                                    | doc_1234567890abcdef                                                                   |
| `title`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | Title of the document.                                                                 | Invoice April 2024                                                                     |
| `pathTokens`                                                                           | *string*[]                                                                             | :heavy_check_mark:                                                                     | Array of path tokens representing the document's location.                             | [<br/>"invoices",<br/>"2024",<br/>"april",<br/>"invoice-123.pdf"<br/>]                 |
| `metadata`                                                                             | [operations.GetV1DocumentsMetadata](../../models/operations/getv1documentsmetadata.md) | :heavy_check_mark:                                                                     | Metadata about the document.                                                           |                                                                                        |
| `processingStatus`                                                                     | *string*                                                                               | :heavy_check_mark:                                                                     | Processing status of the document.                                                     | processed                                                                              |
| `summary`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Summary or extracted content from the document.                                        | Invoice for April 2024, total $1,200.00                                                |
| `date`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Date associated with the document (ISO 8601).                                          | 2024-04-30                                                                             |