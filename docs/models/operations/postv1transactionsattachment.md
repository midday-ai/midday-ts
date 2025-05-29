# PostV1TransactionsAttachment

## Example Usage

```typescript
import { PostV1TransactionsAttachment } from "@midday/sdk/models/operations";

let value: PostV1TransactionsAttachment = {
  path: [
    "/usr/libdata",
  ],
  name: "<value>",
  size: 8363.53,
  type: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `path`                                | *string*[]                            | :heavy_check_mark:                    | Path(s) of the attachment file(s).    |
| `name`                                | *string*                              | :heavy_check_mark:                    | Name of the attachment file.          |
| `size`                                | *number*                              | :heavy_check_mark:                    | Size of the attachment file in bytes. |
| `type`                                | *string*                              | :heavy_check_mark:                    | MIME type of the attachment file.     |