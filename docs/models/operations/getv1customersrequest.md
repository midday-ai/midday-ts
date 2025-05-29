# GetV1CustomersRequest

## Example Usage

```typescript
import { GetV1CustomersRequest } from "@midday/sdk/models/operations";

let value: GetV1CustomersRequest = {
  q: "acme",
  sort: [
    "name",
    "asc",
  ],
  cursor: "eyJpZCI6IjEyMyJ9",
  pageSize: 20,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `q`                | *string*           | :heavy_minus_sign: | N/A                | acme               |
| `sort`             | *string*[]         | :heavy_minus_sign: | N/A                | [<br/>"name",<br/>"asc"<br/>] |
| `cursor`           | *string*           | :heavy_minus_sign: | N/A                | eyJpZCI6IjEyMyJ9   |
| `pageSize`         | *number*           | :heavy_minus_sign: | N/A                | 20                 |