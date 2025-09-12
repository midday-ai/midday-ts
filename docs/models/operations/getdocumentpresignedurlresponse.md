# GetDocumentPreSignedUrlResponse

Pre-signed URL generated successfully

## Example Usage

```typescript
import { GetDocumentPreSignedUrlResponse } from "@midday-ai/sdk/models/operations";

let value: GetDocumentPreSignedUrlResponse = {
  url:
    "https://service.midday.ai/storage/v1/object/sign/vault/documents/2024/invoice.pdf?token=abc123&expires=1640995200",
  expiresAt: new Date("2024-04-15T10:01:00.000Z"),
  fileName: "invoice-april-2024.pdf",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Pre-signed URL for accessing the document, valid for 60 seconds                                                   | https://service.midday.ai/storage/v1/object/sign/vault/documents/2024/invoice.pdf?token=abc123&expires=1640995200 |
| `expiresAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | ISO 8601 timestamp when the URL expires                                                                           | 2024-04-15T10:01:00.000Z                                                                                          |
| `fileName`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Original filename of the document                                                                                 | invoice-april-2024.pdf                                                                                            |