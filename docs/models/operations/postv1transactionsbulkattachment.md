# PostV1TransactionsBulkAttachment

## Example Usage

```typescript
import { PostV1TransactionsBulkAttachment } from "@midday-ai/sdk/models/operations";

let value: PostV1TransactionsBulkAttachment = {
  path: [
    "/home",
  ],
  name: "<value>",
  size: 8333.74,
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