# ListDocumentsResponse

Response containing a list of documents and pagination metadata.

## Example Usage

```typescript
import { ListDocumentsResponse } from "@midday-ai/sdk/models/operations";

let value: ListDocumentsResponse = {
  meta: {
    cursor: "20",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `meta`                                                                         | [operations.ListDocumentsMeta](../../models/operations/listdocumentsmeta.md)   | :heavy_check_mark:                                                             | Pagination metadata for the documents list.                                    |
| `data`                                                                         | [operations.ListDocumentsData](../../models/operations/listdocumentsdata.md)[] | :heavy_check_mark:                                                             | Array of document objects.                                                     |