# TrackerProjectsResponse

## Example Usage

```typescript
import { TrackerProjectsResponse } from "@midday-ai/sdk";

let value: TrackerProjectsResponse = {
  meta: {
    hasNextPage: true,
    hasPreviousPage: false,
  },
  data: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `meta`                                                                         | [models.TrackerProjectsResponseMeta](../models/trackerprojectsresponsemeta.md) | :heavy_check_mark:                                                             | Pagination metadata for the projects response                                  |
| `data`                                                                         | [models.TrackerProjectResponse](../models/trackerprojectresponse.md)[]         | :heavy_check_mark:                                                             | Array of tracker projects matching the query criteria                          |