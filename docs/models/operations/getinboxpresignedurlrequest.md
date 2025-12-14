# GetInboxPreSignedUrlRequest

## Example Usage

```typescript
import { GetInboxPreSignedUrlRequest } from "@midday-ai/sdk/models/operations";

let value: GetInboxPreSignedUrlRequest = {
  id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  download: true,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                  | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | Unique identifier of the inbox item to generate a pre-signed URL for                                                                                  | b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4                                                                                                                  |
| `download`                                                                                                                                            | *boolean*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                    | Whether to force download the file. If true, the file will be downloaded. If false or omitted, the file will be displayed in the browser if possible. | true                                                                                                                                                  |