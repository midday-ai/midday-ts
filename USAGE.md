<!-- Start SDK Example Usage [usage] -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  token: "MIDDAY_API_KEY",
});

async function run() {
  const result = await midday.transactions.list({
    cursor: "eyJpZCI6IjEyMyJ9",
    sort: [
      "date",
      "desc",
    ],
    pageSize: 50,
    q: "office supplies",
    categories: [
      "office-supplies",
      "travel",
    ],
    tags: [
      "tag-1",
      "tag-2",
    ],
    start: "2024-04-01T00:00:00.000Z",
    end: "2024-04-30T23:59:59.999Z",
    accounts: [
      "account-1",
      "account-2",
    ],
    assignees: [
      "user-1",
      "user-2",
    ],
    statuses: [
      "pending",
      "completed",
    ],
    recurring: [
      "monthly",
      "annually",
    ],
    attachments: "include",
    amountRange: [
      100,
      1000,
    ],
    amount: [
      "150.75",
      "299.99",
    ],
    type: "expense",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->