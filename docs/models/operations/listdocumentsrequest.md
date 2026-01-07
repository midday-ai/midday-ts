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
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | A cursor for pagination. Pass the value returned from the previous response to get the next page. | 20                                                                                                |
| `sort`                                                                                            | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | Sorting order as a tuple: [field, direction]. Example: ['name', 'asc'].                           |                                                                                                   |
| `pageSize`                                                                                        | *number*                                                                                          | :heavy_minus_sign:                                                                                | Number of documents to return per page.                                                           | 20                                                                                                |
| `q`                                                                                               | *string*                                                                                          | :heavy_minus_sign:                                                                                | Search query string to filter documents by text.                                                  | invoice                                                                                           |
| `tags`                                                                                            | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | Array of tag IDs to filter documents by tags.                                                     | [<br/>"tag1",<br/>"tag2"<br/>]                                                                    |