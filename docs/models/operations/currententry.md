# CurrentEntry

Current running timer details, null if not running

## Example Usage

```typescript
import { CurrentEntry } from "@midday-ai/sdk/models/operations";

let value: CurrentEntry = {
  id: "85e7df6e-c9d2-4efb-b7f9-abb5f57ba94b",
  start: "<value>",
  description: "seafood often sick repurpose bug",
  projectId: "34f0d89b-9766-4eae-b93a-2c8b5607eff0",
  trackerProject: {
    id: "0aa650ab-697e-4edd-9fd6-c05268ab3be7",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `start`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `trackerProject`                                                       | [operations.TrackerProject](../../models/operations/trackerproject.md) | :heavy_check_mark:                                                     | N/A                                                                    |