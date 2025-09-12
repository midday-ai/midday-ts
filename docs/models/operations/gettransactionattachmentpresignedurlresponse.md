# GetTransactionAttachmentPreSignedUrlResponse

Pre-signed URL generated successfully

## Example Usage

```typescript
import { GetTransactionAttachmentPreSignedUrlResponse } from "@midday-ai/sdk/models/operations";

let value: GetTransactionAttachmentPreSignedUrlResponse = {
  url:
    "https://service.midday.ai/storage/v1/object/sign/vault/transactions/receipt.pdf?token=abc123&expires=1640995200",
  expiresAt: new Date("2024-04-15T10:01:00.000Z"),
  fileName: "receipt.pdf",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                           | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Pre-signed URL for accessing the attachment, valid for 60 seconds                                               | https://service.midday.ai/storage/v1/object/sign/vault/transactions/receipt.pdf?token=abc123&expires=1640995200 |
| `expiresAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | ISO 8601 timestamp when the URL expires                                                                         | 2024-04-15T10:01:00.000Z                                                                                        |
| `fileName`                                                                                                      | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Original filename of the attachment                                                                             | receipt.pdf                                                                                                     |