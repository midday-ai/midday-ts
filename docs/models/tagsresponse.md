# TagsResponse

## Example Usage

```typescript
import { TagsResponse } from "@midday-ai/sdk/models";

let value: TagsResponse = {
  data: [
    {
      id: "b3b7c8e2-1f2a-4c3d-9e4f-5a6b7c8d9e0f",
      name: "Important",
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `data`                                           | [models.TagResponse](../models/tagresponse.md)[] | :heavy_check_mark:                               | List of tags.                                    |