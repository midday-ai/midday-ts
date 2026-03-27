# ListDocumentsResponse


## Supported Types

### `operations.ListDocumentsResponseBody`

```typescript
const value: operations.ListDocumentsResponseBody = {
  meta: {
    cursor: "20",
    hasPreviousPage: false,
    hasNextPage: true,
  },
  data: [
    {
      id: "doc_1234567890abcdef",
      title: "Invoice April 2024",
      pathTokens: [
        "invoices",
        "2024",
        "april",
        "invoice-123.pdf",
      ],
      metadata: {
        size: 204800,
        mimetype: "application/pdf",
      },
      processingStatus: "processed",
      summary: "Invoice for April 2024, total $1,200.00",
      date: "2024-04-30",
    },
  ],
};
```

### `models.ErrorResponse`

```typescript
const value: models.ErrorResponse = {
  error: "Internal Server Error",
  code: 500,
};
```

