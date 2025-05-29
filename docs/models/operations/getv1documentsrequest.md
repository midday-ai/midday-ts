# GetV1DocumentsRequest

## Example Usage

```typescript
import { GetV1DocumentsRequest } from "@midday-ai/sdk/models/operations";

let value: GetV1DocumentsRequest = {
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

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `cursor`           | *string*           | :heavy_minus_sign: | N/A                | 20                 |
| `sort`             | *string*[]         | :heavy_minus_sign: | N/A                |                    |
| `pageSize`         | *number*           | :heavy_minus_sign: | N/A                | 20                 |
| `q`                | *string*           | :heavy_minus_sign: | N/A                | invoice            |
| `tags`             | *string*[]         | :heavy_minus_sign: | N/A                | [<br/>"tag1",<br/>"tag2"<br/>] |