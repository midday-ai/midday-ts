# CreateTransactionsAttachment

## Example Usage

```typescript
import { CreateTransactionsAttachment } from "@midday-ai/sdk/models/operations";

let value: CreateTransactionsAttachment = {
  path: [
    "/opt/lib",
    "/private/var",
    "/usr/X11R6",
  ],
  name: "<value>",
  size: 7284.97,
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