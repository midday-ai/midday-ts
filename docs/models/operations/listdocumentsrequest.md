# ListDocumentsRequest

## Example Usage

```typescript
import { ListDocumentsRequest } from "@midday-ai/sdk/models/operations";

let value: ListDocumentsRequest = {
  cursor: "20",
  pageSize: 20,
  q: "invoice",
  tags: [
    "tag1",
    "tag2",
  ],
  start: "2024-01-01",
  end: "2024-12-31",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | A cursor for pagination. Pass the value returned from the previous response to get the next page. | 20                                                                                                |
| `sort`                                                                                            | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | Sort as [column, direction]. Currently documents are sorted by created date descending.           |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_minus_sign:                                                                                | Number of documents to return per page.                                                           | 20                                                                                                |
| `q`                                                                                               | *string*                                                                                          | :heavy_minus_sign:                                                                                | Search query string to filter documents by text.                                                  | invoice                                                                                           |
| `tags`                                                                                            | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | Array of tag IDs to filter documents by tags.                                                     | [<br/>"tag1",<br/>"tag2"<br/>]                                                                    |
| `start`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | Start date for filtering documents (ISO 8601 date).                                               | 2024-01-01                                                                                        |
| `end`                                                                                             | *string*                                                                                          | :heavy_minus_sign:                                                                                | End date for filtering documents (ISO 8601 date).                                                 | 2024-12-31                                                                                        |