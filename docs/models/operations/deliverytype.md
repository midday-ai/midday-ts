# DeliveryType

How the invoice should be processed: 'create' - finalize immediately, 'create_and_send' - finalize and send to customer, 'scheduled' - schedule for automatic processing at specified date

## Example Usage

```typescript
import { DeliveryType } from "@midday-ai/sdk/models/operations";

let value: DeliveryType = "create";
```

## Values

```typescript
"create" | "create_and_send" | "scheduled"
```