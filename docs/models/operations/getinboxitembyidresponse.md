# GetInboxItemByIdResponse


## Supported Types

### `operations.GetInboxItemByIdResponseBody`

```typescript
const value: operations.GetInboxItemByIdResponseBody = {
  id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
  fileName: "invoice-123.pdf",
  filePath: [
    "inbox",
    "2024",
    "05",
    "invoice-123.pdf",
  ],
  displayName: "Invoice May 2024",
  amount: 123.45,
  currency: "USD",
  contentType: "application/pdf",
  date: "2024-05-01",
  status: "pending",
  createdAt: "2024-05-01T12:34:56.789Z",
  website: "https://vendor.com",
  description: "Invoice for May 2024 services",
  transaction: {
    id: "a1b2c3d4-5678-4e7a-9c1a-2b7c1e24c2a4",
    amount: 123.45,
    currency: "USD",
    name: "Acme Corp",
    date: "2024-05-01",
  },
};
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```

