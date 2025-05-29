# GetDocumentByIdMetadata

Metadata about the document.

## Example Usage

```typescript
import { GetDocumentByIdMetadata } from "@midday/sdk/models/operations";

let value: GetDocumentByIdMetadata = {
  size: 204800,
  mimetype: "application/pdf",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `size`                         | *number*                       | :heavy_check_mark:             | Size of the document in bytes. | 204800                         |
| `mimetype`                     | *string*                       | :heavy_check_mark:             | MIME type of the document.     | application/pdf                |