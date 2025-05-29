# Attachment

## Example Usage

```typescript
import { Attachment } from "@midday/sdk";

let value: Attachment = {
  id: "a43dc3a5-6925-4d91-ac9c-4c1a34bdb388",
  path: [
    "dd6a039e-d071-423a-9a4d-9ba71325d890",
    "transactions",
    "1d2c3753-79d7-45b0-9c40-60f482bac8e8",
    "receipt.pdf",
  ],
  size: 1928716,
  type: "application/pdf",
  filename: "receipt.pdf",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Unique identifier of the attachment                                                                               | a43dc3a5-6925-4d91-ac9c-4c1a34bdb388                                                                              |
| `path`                                                                                                            | *string*[]                                                                                                        | :heavy_check_mark:                                                                                                | Array of path segments for the attachment file storage location                                                   | [<br/>"dd6a039e-d071-423a-9a4d-9ba71325d890",<br/>"transactions",<br/>"1d2c3753-79d7-45b0-9c40-60f482bac8e8",<br/>"receipt.pdf"<br/>] |
| `size`                                                                                                            | *number*                                                                                                          | :heavy_check_mark:                                                                                                | Size of the attachment file in bytes                                                                              | 1928716                                                                                                           |
| `type`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | MIME type of the attachment file                                                                                  | application/pdf                                                                                                   |
| `filename`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Original filename of the attachment when uploaded                                                                 | receipt.pdf                                                                                                       |