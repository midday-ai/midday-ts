# CreateTransactionAttachment

## Example Usage

```typescript
import { CreateTransactionAttachment } from "@midday-ai/sdk/models/operations";

let value: CreateTransactionAttachment = {
  path: [
    "/private",
  ],
  name: "<value>",
  size: 6946.41,
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