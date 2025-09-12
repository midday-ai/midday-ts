# ConflictError

Conflict. Invoice number already exists.

## Example Usage

```typescript
import { ConflictError } from "@midday-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `message`                                                                                                                 | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Error message about the conflict                                                                                          | Invoice number 'INV-2024-001' is already used. Please provide a different invoice number or omit it to auto-generate one. |