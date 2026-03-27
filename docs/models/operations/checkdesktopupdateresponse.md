# CheckDesktopUpdateResponse

Update manifest in Tauri updater format

## Example Usage

```typescript
import { CheckDesktopUpdateResponse } from "@midday-ai/sdk/models/operations";

let value: CheckDesktopUpdateResponse = {
  version: "<value>",
  platforms: {
    "key": {
      signature: "<value>",
      url: "https://oddball-stock.name",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `version`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `notes`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `pubDate`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `platforms`                                                                  | Record<string, [operations.Platforms](../../models/operations/platforms.md)> | :heavy_check_mark:                                                           | N/A                                                                          |