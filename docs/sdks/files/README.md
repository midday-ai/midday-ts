# Files
(*files*)

## Overview

File operations

### Available Operations

* [proxy](#proxy) - Proxy file from storage
* [downloadFile](#downloadfile) - Download file from vault
* [downloadInvoice](#downloadinvoice) - Download invoice PDF

## proxy

Proxies a file from storage. Requires team file key (fk) query parameter for access.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="proxyFile" method="get" path="/files/proxy" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.files.proxy({
    filePath: "vault/documents/2024/invoice.pdf",
    fk: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { filesProxy } from "@midday-ai/sdk/funcs/filesProxy.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await filesProxy(midday, {
    filePath: "vault/documents/2024/invoice.pdf",
    fk: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesProxy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ProxyFileRequest](../../models/operations/proxyfilerequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.ProxyFileBadRequestError     | 400                                 | application/json                    |
| errors.ProxyFileNotFoundError       | 404                                 | application/json                    |
| errors.ProxyFileInternalServerError | 500                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## downloadFile

Downloads a file from the vault storage bucket. Requires team file key (fk) query parameter for access.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="downloadFile" method="get" path="/files/download/file" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.files.downloadFile({
    path: "vault/documents/2024/invoice.pdf",
    filename: "invoice.pdf",
    fk: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { filesDownloadFile } from "@midday-ai/sdk/funcs/filesDownloadFile.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await filesDownloadFile(midday, {
    path: "vault/documents/2024/invoice.pdf",
    filename: "invoice.pdf",
    fk: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesDownloadFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadFileRequest](../../models/operations/downloadfilerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.DownloadFileBadRequestError     | 400                                    | application/json                       |
| errors.DownloadFileUnauthorizedError   | 401                                    | application/json                       |
| errors.DownloadFileNotFoundError       | 404                                    | application/json                       |
| errors.DownloadFileInternalServerError | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## downloadInvoice

Downloads an invoice as a PDF. Can be accessed with an invoice ID (requires team file key via fk query parameter) or invoice token (public access).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="downloadInvoice" method="get" path="/files/download/invoice" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.files.downloadInvoice({
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    fk: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { filesDownloadInvoice } from "@midday-ai/sdk/funcs/filesDownloadInvoice.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await filesDownloadInvoice(midday, {
    id: "b3b7c1e2-4c2a-4e7a-9c1a-2b7c1e24c2a4",
    fk: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filesDownloadInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadInvoiceRequest](../../models/operations/downloadinvoicerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.DownloadInvoiceBadRequestError     | 400                                       | application/json                          |
| errors.DownloadInvoiceUnauthorizedError   | 401                                       | application/json                          |
| errors.DownloadInvoiceNotFoundError       | 404                                       | application/json                          |
| errors.DownloadInvoiceInternalServerError | 500                                       | application/json                          |
| errors.APIError                           | 4XX, 5XX                                  | \*/\*                                     |