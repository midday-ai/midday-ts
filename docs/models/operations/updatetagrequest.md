# UpdateTagRequest

## Example Usage

```typescript
import { UpdateTagRequest } from "@midday-ai/sdk/models/operations";

let value: UpdateTagRequest = {
  id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
  requestBody: {
    name: "Urgent",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the tag to update.                                                       | b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f                                               |
| `requestBody`                                                                      | [operations.UpdateTagRequestBody](../../models/operations/updatetagrequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |