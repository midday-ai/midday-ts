# ListCustomersRequest

## Example Usage

```typescript
import { ListCustomersRequest } from "@midday/sdk/models/operations";

let value: ListCustomersRequest = {
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