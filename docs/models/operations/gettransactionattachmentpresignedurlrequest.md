# GetTransactionAttachmentPreSignedUrlRequest

## Example Usage

```typescript
import { GetTransactionAttachmentPreSignedUrlRequest } from "@midday-ai/sdk/models/operations";

let value: GetTransactionAttachmentPreSignedUrlRequest = {
  transactionId: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  attachmentId: "a43dc3a5-6925-4d91-ac9c-4c1a34bdb388",
  download: true,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `transactionId`                      | *string*                             | :heavy_check_mark:                   | N/A                                  | b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4 |
| `attachmentId`                       | *string*                             | :heavy_check_mark:                   | N/A                                  | a43dc3a5-6925-4d91-ac9c-4c1a34bdb388 |
| `download`                           | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |