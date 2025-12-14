# GetCurrentTimerRequest

## Example Usage

```typescript
import { GetCurrentTimerRequest } from "@midday-ai/sdk/models/operations";

let value: GetCurrentTimerRequest = {
  assignedId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `assignedId`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Unique identifier of the user whose current timer should be retrieved. If not provided, will use the authenticated user | a1b2c3d4-e5f6-7890-abcd-ef1234567890                                                                                    |