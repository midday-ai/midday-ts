# PatchV1TrackerProjectsIdRequest

## Example Usage

```typescript
import { PatchV1TrackerProjectsIdRequest } from "@midday-ai/sdk/models/operations";

let value: PatchV1TrackerProjectsIdRequest = {
  id: "b7e6c8e2-1f2a-4c3b-9e2d-1a2b3c4d5e6f",
  requestBody: {
    name: "Website Redesign",
    description:
      "Complete redesign of the company website with modern UI/UX and improved performance",
    estimate: 120,
    rate: 75,
    currency: "USD",
    status: "in_progress",
    customerId: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
    tags: [
      {
        id: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
        value: "Design",
      },
      {
        id: "e2d3c4b5-a6f1-7890-1234-567890abcdef",
        value: "Frontend",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | b7e6c8e2-1f2a-4c3b-9e2d-1a2b3c4d5e6f                                                                             |
| `requestBody`                                                                                                    | [operations.PatchV1TrackerProjectsIdRequestBody](../../models/operations/patchv1trackerprojectsidrequestbody.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |                                                                                                                  |