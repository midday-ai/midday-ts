# SearchResponse


## Supported Types

### `operations.SearchResponseBody[]`

```typescript
const value: operations.SearchResponseBody[] = [
  {
    id: "b3b7e6e2-8c2a-4e2a-9b1a-2e4b5c6d7f8a",
    type: "invoice",
    relevance: 0.92,
    createdAt: "2024-06-01T00:00:00.000Z",
    data: {
      "invoiceNumber": "INV-2024-001",
      "customerName": "Acme Corporation",
      "amount": 1500.75,
    },
  },
];
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```

