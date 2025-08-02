<div align="center">
  <img src="https://github.com/midday-ai/midday-ts/raw/main/hero.jpg" alt="Midday TypeScript SDK to interact with APIs.">
  <h3>Midday TypeScript SDK</h3>
  <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
  </a>
</div>

<br/>


Learn more about the Midday TypeScript SDK in the [official documentation](https://docs.midday.ai/sdks/typescript/overview).

<!-- Start Summary [summary] -->
## Summary

Midday API: Midday is a platform for Invoicing, Time tracking, File reconciliation, Storage, Financial Overview & your own Assistant.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
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
        "--oauth2", "...",
        "--api-token", "..."
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
        "--oauth2", "...",
        "--api-token", "..."
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
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.getOAuthAuthorization({
    responseType: "code",
    clientId: "mid_client_abcdef123456789",
    redirectUri: "https://myapp.com/callback",
    scope: "transactions.read invoices.read",
    state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name     | Type   | Scheme      | Environment Variable |
| -------- | ------ | ----------- | -------------------- |
| `oauth2` | apiKey | API key     | `MIDDAY_OAUTH2`      |
| `token`  | http   | HTTP Bearer | `MIDDAY_TOKEN`       |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.getOAuthAuthorization({
    responseType: "code",
    clientId: "mid_client_abcdef123456789",
    redirectUri: "https://myapp.com/callback",
    scope: "transactions.read invoices.read",
    state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
  });

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


### [oAuth](docs/sdks/oauth/README.md)

* [getOAuthAuthorization](docs/sdks/oauth/README.md#getoauthauthorization) - OAuth Authorization Endpoint
* [postOAuthAuthorization](docs/sdks/oauth/README.md#postoauthauthorization) - OAuth Authorization Decision
* [postOAuthToken](docs/sdks/oauth/README.md#postoauthtoken) - OAuth Token Exchange
* [postOAuthRevoke](docs/sdks/oauth/README.md#postoauthrevoke) - OAuth Token Revocation

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

### [trackerEntries](docs/sdks/trackerentries/README.md)

* [list](docs/sdks/trackerentries/README.md#list) - List all tracker entries
* [create](docs/sdks/trackerentries/README.md#create) - Create a tracker entry
* [createBulk](docs/sdks/trackerentries/README.md#createbulk) - Create multiple tracker entries
* [update](docs/sdks/trackerentries/README.md#update) - Update a tracker entry
* [delete](docs/sdks/trackerentries/README.md#delete) - Delete a tracker entry

### [trackerProjects](docs/sdks/trackerprojects/README.md)

* [list](docs/sdks/trackerprojects/README.md#list) - List all tracker projects
* [create](docs/sdks/trackerprojects/README.md#create) - Create a tracker project
* [update](docs/sdks/trackerprojects/README.md#update) - Update a tracker project
* [get](docs/sdks/trackerprojects/README.md#get) - Retrieve a tracker project
* [delete](docs/sdks/trackerprojects/README.md#delete) - Delete a tracker project

### [trackerTimer](docs/sdks/trackertimer/README.md)

* [startTimer](docs/sdks/trackertimer/README.md#starttimer) - Start a timer
* [stopTimer](docs/sdks/trackertimer/README.md#stoptimer) - Stop a timer
* [getCurrentTimer](docs/sdks/trackertimer/README.md#getcurrenttimer) - Get current timer
* [getTimerStatus](docs/sdks/trackertimer/README.md#gettimerstatus) - Get timer status

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
- [`oAuthGetOAuthAuthorization`](docs/sdks/oauth/README.md#getoauthauthorization) - OAuth Authorization Endpoint
- [`oAuthPostOAuthAuthorization`](docs/sdks/oauth/README.md#postoauthauthorization) - OAuth Authorization Decision
- [`oAuthPostOAuthRevoke`](docs/sdks/oauth/README.md#postoauthrevoke) - OAuth Token Revocation
- [`oAuthPostOAuthToken`](docs/sdks/oauth/README.md#postoauthtoken) - OAuth Token Exchange
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
- [`trackerEntriesCreate`](docs/sdks/trackerentries/README.md#create) - Create a tracker entry
- [`trackerEntriesCreateBulk`](docs/sdks/trackerentries/README.md#createbulk) - Create multiple tracker entries
- [`trackerEntriesDelete`](docs/sdks/trackerentries/README.md#delete) - Delete a tracker entry
- [`trackerEntriesList`](docs/sdks/trackerentries/README.md#list) - List all tracker entries
- [`trackerEntriesUpdate`](docs/sdks/trackerentries/README.md#update) - Update a tracker entry
- [`trackerProjectsCreate`](docs/sdks/trackerprojects/README.md#create) - Create a tracker project
- [`trackerProjectsDelete`](docs/sdks/trackerprojects/README.md#delete) - Delete a tracker project
- [`trackerProjectsGet`](docs/sdks/trackerprojects/README.md#get) - Retrieve a tracker project
- [`trackerProjectsList`](docs/sdks/trackerprojects/README.md#list) - List all tracker projects
- [`trackerProjectsUpdate`](docs/sdks/trackerprojects/README.md#update) - Update a tracker project
- [`trackerTimerGetCurrentTimer`](docs/sdks/trackertimer/README.md#getcurrenttimer) - Get current timer
- [`trackerTimerGetTimerStatus`](docs/sdks/trackertimer/README.md#gettimerstatus) - Get timer status
- [`trackerTimerStartTimer`](docs/sdks/trackertimer/README.md#starttimer) - Start a timer
- [`trackerTimerStopTimer`](docs/sdks/trackertimer/README.md#stoptimer) - Stop a timer
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
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.getOAuthAuthorization({
    responseType: "code",
    clientId: "mid_client_abcdef123456789",
    redirectUri: "https://myapp.com/callback",
    scope: "transactions.read invoices.read",
    state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
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
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.getOAuthAuthorization({
    responseType: "code",
    clientId: "mid_client_abcdef123456789",
    redirectUri: "https://myapp.com/callback",
    scope: "transactions.read invoices.read",
    state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`MiddayError`](./src/models/errors/middayerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Midday } from "@midday-ai/sdk";
import * as errors from "@midday-ai/sdk/models/errors";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  try {
    const result = await midday.oAuth.getOAuthAuthorization({
      responseType: "code",
      clientId: "mid_client_abcdef123456789",
      redirectUri: "https://myapp.com/callback",
      scope: "transactions.read invoices.read",
      state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
      codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.MiddayError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.GetOAuthAuthorizationBadRequestError) {
        console.log(error.data$.error); // string
        console.log(error.data$.errorDescription); // string
        console.log(error.data$.errorUri); // string
        console.log(error.data$.state); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`MiddayError`](./src/models/errors/middayerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (10)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`MiddayError`](./src/models/errors/middayerror.ts)**:
* [`GetOAuthAuthorizationBadRequestError`](./src/models/errors/getoauthauthorizationbadrequesterror.ts): Invalid request. Status code `400`. Applicable to 1 of 66 methods.*
* [`PostOAuthAuthorizationBadRequestError`](./src/models/errors/postoauthauthorizationbadrequesterror.ts): Invalid request. Status code `400`. Applicable to 1 of 66 methods.*
* [`PostOAuthTokenBadRequestError`](./src/models/errors/postoauthtokenbadrequesterror.ts): Invalid request. Status code `400`. Applicable to 1 of 66 methods.*
* [`UnauthorizedError`](./src/models/errors/unauthorizederror.ts): Unauthorized. Status code `401`. Applicable to 1 of 66 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  serverURL: "https://api.midday.ai",
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.getOAuthAuthorization({
    responseType: "code",
    clientId: "mid_client_abcdef123456789",
    redirectUri: "https://myapp.com/callback",
    scope: "transactions.read invoices.read",
    state: "abc123xyz789_secure-random-state-value-with-sufficient-entropy",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
  });

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
