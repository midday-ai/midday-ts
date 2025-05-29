# midday-ts

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [midday-ts](#midday-ts)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @midday-ai/sdk
```

### PNPM

```bash
pnpm add @midday-ai/sdk
```

### Bun

```bash
bun add @midday-ai/sdk
```

### Yarn

```bash
yarn add @midday-ai/sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Midday": {
      "command": "npx",
      "args": [
        "-y", "--package", "@midday-ai/sdk",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Midday": {
      "command": "npx",
      "args": [
        "-y", "--package", "@midday-ai/sdk",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @midday-ai/sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type   | Scheme  | Environment Variable |
| ------------ | ------ | ------- | -------------------- |
| `bearerAuth` | apiKey | API key | `MIDDAY_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [bankAccounts](docs/sdks/bankaccounts/README.md)

* [list](docs/sdks/bankaccounts/README.md#list) - List all bank accounts
* [create](docs/sdks/bankaccounts/README.md#create) - Create a bank account
* [get](docs/sdks/bankaccounts/README.md#get) - Retrieve a bank account
* [update](docs/sdks/bankaccounts/README.md#update) - Update a bank account
* [delete](docs/sdks/bankaccounts/README.md#delete) - Delete a bank account

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List all customers
* [create](docs/sdks/customers/README.md#create) - Create customer
* [get](docs/sdks/customers/README.md#get) - Retrieve a customer
* [update](docs/sdks/customers/README.md#update) - Update a customer
* [delete](docs/sdks/customers/README.md#delete) - Delete a customer

### [documents](docs/sdks/documents/README.md)

* [list](docs/sdks/documents/README.md#list) - List all documents
* [get](docs/sdks/documents/README.md#get) - Retrieve a document
* [delete](docs/sdks/documents/README.md#delete) - Delete a document

### [inbox](docs/sdks/inbox/README.md)

* [list](docs/sdks/inbox/README.md#list) - List all inbox items
* [get](docs/sdks/inbox/README.md#get) - Retrieve a inbox item
* [delete](docs/sdks/inbox/README.md#delete) - Delete a inbox item
* [update](docs/sdks/inbox/README.md#update) - Update a inbox item

### [invoices](docs/sdks/invoices/README.md)

* [list](docs/sdks/invoices/README.md#list) - List all invoices
* [getInvoicesPaymentStatus](docs/sdks/invoices/README.md#getinvoicespaymentstatus) - Payment status
* [summary](docs/sdks/invoices/README.md#summary) - Invoice summary
* [get](docs/sdks/invoices/README.md#get) - Retrieve a invoice
* [delete](docs/sdks/invoices/README.md#delete) - Delete a invoice

### [metrics](docs/sdks/metrics/README.md)

* [revenue](docs/sdks/metrics/README.md#revenue) - Revenue metrics
* [profit](docs/sdks/metrics/README.md#profit) - Profit metrics
* [burnRate](docs/sdks/metrics/README.md#burnrate) - Burn rate metrics
* [runway](docs/sdks/metrics/README.md#runway) - Runway metrics
* [expenses](docs/sdks/metrics/README.md#expenses) - Expense metrics
* [spending](docs/sdks/metrics/README.md#spending) - Spending metrics


### [search](docs/sdks/search/README.md)

* [search](docs/sdks/search/README.md#search) - Search

### [tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List all tags
* [create](docs/sdks/tags/README.md#create) - Create a new tag
* [get](docs/sdks/tags/README.md#get) - Retrieve a tag
* [update](docs/sdks/tags/README.md#update) - Update a tag
* [delete](docs/sdks/tags/README.md#delete) - Delete a tag

### [teams](docs/sdks/teams/README.md)

* [list](docs/sdks/teams/README.md#list) - List all teams
* [get](docs/sdks/teams/README.md#get) - Retrieve a team
* [update](docs/sdks/teams/README.md#update) - Update a team
* [members](docs/sdks/teams/README.md#members) - List all team members

### [tracker](docs/sdks/tracker/README.md)

* [delete](docs/sdks/tracker/README.md#delete) - Delete a tracker entry

### [trackerEntries](docs/sdks/trackerentries/README.md)

* [list](docs/sdks/trackerentries/README.md#list) - List all tracker entries

### [trackerProjects](docs/sdks/trackerprojects/README.md)

* [list](docs/sdks/trackerprojects/README.md#list) - List all tracker projects
* [create](docs/sdks/trackerprojects/README.md#create) - Create a tracker project
* [update](docs/sdks/trackerprojects/README.md#update) - Update a tracker project
* [get](docs/sdks/trackerprojects/README.md#get) - Retrieve a tracker project
* [delete](docs/sdks/trackerprojects/README.md#delete) - Delete a tracker project

### [transactions](docs/sdks/transactions/README.md)

* [list](docs/sdks/transactions/README.md#list) - List all transactions
* [create](docs/sdks/transactions/README.md#create) - Create a transaction
* [get](docs/sdks/transactions/README.md#get) - Retrieve a transaction
* [update](docs/sdks/transactions/README.md#update) - Update a transaction
* [delete](docs/sdks/transactions/README.md#delete) - Delete a transaction
* [updateMany](docs/sdks/transactions/README.md#updatemany) - Bulk update transactions
* [createMany](docs/sdks/transactions/README.md#createmany) - Bulk create transactions
* [deleteMany](docs/sdks/transactions/README.md#deletemany) - Bulk delete transactions

### [users](docs/sdks/users/README.md)

* [get](docs/sdks/users/README.md#get) - Retrieve the current user
* [update](docs/sdks/users/README.md#update) - Update the current user

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`bankAccountsCreate`](docs/sdks/bankaccounts/README.md#create) - Create a bank account
- [`bankAccountsDelete`](docs/sdks/bankaccounts/README.md#delete) - Delete a bank account
- [`bankAccountsGet`](docs/sdks/bankaccounts/README.md#get) - Retrieve a bank account
- [`bankAccountsList`](docs/sdks/bankaccounts/README.md#list) - List all bank accounts
- [`bankAccountsUpdate`](docs/sdks/bankaccounts/README.md#update) - Update a bank account
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create customer
- [`customersDelete`](docs/sdks/customers/README.md#delete) - Delete a customer
- [`customersGet`](docs/sdks/customers/README.md#get) - Retrieve a customer
- [`customersList`](docs/sdks/customers/README.md#list) - List all customers
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update a customer
- [`documentsDelete`](docs/sdks/documents/README.md#delete) - Delete a document
- [`documentsGet`](docs/sdks/documents/README.md#get) - Retrieve a document
- [`documentsList`](docs/sdks/documents/README.md#list) - List all documents
- [`inboxDelete`](docs/sdks/inbox/README.md#delete) - Delete a inbox item
- [`inboxGet`](docs/sdks/inbox/README.md#get) - Retrieve a inbox item
- [`inboxList`](docs/sdks/inbox/README.md#list) - List all inbox items
- [`inboxUpdate`](docs/sdks/inbox/README.md#update) - Update a inbox item
- [`invoicesDelete`](docs/sdks/invoices/README.md#delete) - Delete a invoice
- [`invoicesGet`](docs/sdks/invoices/README.md#get) - Retrieve a invoice
- [`invoicesGetInvoicesPaymentStatus`](docs/sdks/invoices/README.md#getinvoicespaymentstatus) - Payment status
- [`invoicesList`](docs/sdks/invoices/README.md#list) - List all invoices
- [`invoicesSummary`](docs/sdks/invoices/README.md#summary) - Invoice summary
- [`metricsBurnRate`](docs/sdks/metrics/README.md#burnrate) - Burn rate metrics
- [`metricsExpenses`](docs/sdks/metrics/README.md#expenses) - Expense metrics
- [`metricsProfit`](docs/sdks/metrics/README.md#profit) - Profit metrics
- [`metricsRevenue`](docs/sdks/metrics/README.md#revenue) - Revenue metrics
- [`metricsRunway`](docs/sdks/metrics/README.md#runway) - Runway metrics
- [`metricsSpending`](docs/sdks/metrics/README.md#spending) - Spending metrics
- [`searchSearch`](docs/sdks/search/README.md#search) - Search
- [`tagsCreate`](docs/sdks/tags/README.md#create) - Create a new tag
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Delete a tag
- [`tagsGet`](docs/sdks/tags/README.md#get) - Retrieve a tag
- [`tagsList`](docs/sdks/tags/README.md#list) - List all tags
- [`tagsUpdate`](docs/sdks/tags/README.md#update) - Update a tag
- [`teamsGet`](docs/sdks/teams/README.md#get) - Retrieve a team
- [`teamsList`](docs/sdks/teams/README.md#list) - List all teams
- [`teamsMembers`](docs/sdks/teams/README.md#members) - List all team members
- [`teamsUpdate`](docs/sdks/teams/README.md#update) - Update a team
- [`trackerDelete`](docs/sdks/tracker/README.md#delete) - Delete a tracker entry
- [`trackerEntriesList`](docs/sdks/trackerentries/README.md#list) - List all tracker entries
- [`trackerProjectsCreate`](docs/sdks/trackerprojects/README.md#create) - Create a tracker project
- [`trackerProjectsDelete`](docs/sdks/trackerprojects/README.md#delete) - Delete a tracker project
- [`trackerProjectsGet`](docs/sdks/trackerprojects/README.md#get) - Retrieve a tracker project
- [`trackerProjectsList`](docs/sdks/trackerprojects/README.md#list) - List all tracker projects
- [`trackerProjectsUpdate`](docs/sdks/trackerprojects/README.md#update) - Update a tracker project
- [`transactionsCreate`](docs/sdks/transactions/README.md#create) - Create a transaction
- [`transactionsCreateMany`](docs/sdks/transactions/README.md#createmany) - Bulk create transactions
- [`transactionsDelete`](docs/sdks/transactions/README.md#delete) - Delete a transaction
- [`transactionsDeleteMany`](docs/sdks/transactions/README.md#deletemany) - Bulk delete transactions
- [`transactionsGet`](docs/sdks/transactions/README.md#get) - Retrieve a transaction
- [`transactionsList`](docs/sdks/transactions/README.md#list) - List all transactions
- [`transactionsUpdate`](docs/sdks/transactions/README.md#update) - Update a transaction
- [`transactionsUpdateMany`](docs/sdks/transactions/README.md#updatemany) - Bulk update transactions
- [`usersGet`](docs/sdks/users/README.md#get) - Retrieve the current user
- [`usersUpdate`](docs/sdks/users/README.md#update) - Update the current user

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `APIError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.APIError | 4XX, 5XX    | \*/\*        |

```typescript
import { Midday } from "@midday-ai/sdk";
import { SDKValidationError } from "@midday-ai/sdk/models/errors";

const midday = new Midday({
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await midday.transactions.list({
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

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        apierror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof APIError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  serverURL: "https://api.midday.ai",
  bearerAuth: process.env["MIDDAY_BEARER_AUTH"] ?? "",
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Midday } from "@midday-ai/sdk";
import { HTTPClient } from "@midday-ai/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Midday({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Midday } from "@midday-ai/sdk";

const sdk = new Midday({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `MIDDAY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
