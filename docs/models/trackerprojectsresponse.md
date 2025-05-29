# TrackerProjectsResponse

## Example Usage

```typescript
import { TrackerProjectsResponse } from "@midday/sdk";

let value: TrackerProjectsResponse = {
  meta: {
    hasNextPage: true,
    hasPreviousPage: false,
  },
  data: [
    {
      id: "b7e6c8e2-1f2a-4c3b-9e2d-1a2b3c4d5e6f",
      name: "Website Redesign",
      description:
        "Complete redesign of the company website with modern UI/UX and improved performance",
      status: "in_progress",
      estimate: 120,
      currency: "USD",
      createdAt: "2024-05-01T12:00:00.000Z",
      totalDuration: 43200,
      totalAmount: 3600,
      customer: {
        id: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
        name: "Acme Corporation",
        website: "https://acme.com",
      },
      tags: [
        {
          id: "d1e2f3a4-b5c6-7890-abcd-1234567890ef",
          name: "Design",
        },
      ],
      users: [
        {
          id: "f1e2d3c4-b5a6-7890-abcd-1234567890ef",
          fullName: "Jane Doe",
          avatarUrl: "https://cdn.midday.ai/avatar.jpg",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `meta`                                                                         | [models.TrackerProjectsResponseMeta](../models/trackerprojectsresponsemeta.md) | :heavy_check_mark:                                                             | Pagination metadata for the projects response                                  |
| `data`                                                                         | [models.TrackerProjectResponse](../models/trackerprojectresponse.md)[]         | :heavy_check_mark:                                                             | Array of tracker projects matching the query criteria                          |