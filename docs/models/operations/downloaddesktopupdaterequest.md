# DownloadDesktopUpdateRequest

## Example Usage

```typescript
import { DownloadDesktopUpdateRequest } from "@midday-ai/sdk/models/operations";

let value: DownloadDesktopUpdateRequest = {
  url:
    "https://github.com/midday-ai/midday/releases/download/midday-v1.0.0/Midday.app.tar.gz",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `url`                                                                                 | *string*                                                                              | :heavy_check_mark:                                                                    | The artifact download URL to proxy                                                    | https://github.com/midday-ai/midday/releases/download/midday-v1.0.0/Midday.app.tar.gz |