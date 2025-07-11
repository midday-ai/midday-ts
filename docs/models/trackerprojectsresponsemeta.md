# TrackerProjectsResponseMeta

Pagination metadata for the projects response

## Example Usage

```typescript
import { TrackerProjectsResponseMeta } from "@midday-ai/sdk/models";

let value: TrackerProjectsResponseMeta = {
  hasNextPage: true,
  hasPreviousPage: false,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `hasNextPage`                                                  | *boolean*                                                      | :heavy_check_mark:                                             | Whether there are more projects available on the next page     | true                                                           |
| `hasPreviousPage`                                              | *boolean*                                                      | :heavy_check_mark:                                             | Whether there are more projects available on the previous page | false                                                          |