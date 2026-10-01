# OAuth
(*oAuth*)

## Overview

OAuth authorization flow

### Available Operations

* [postOAuthRegister](#postoauthregister) - Dynamic Client Registration
* [getOAuthAuthorization](#getoauthauthorization) - OAuth Authorization Endpoint
* [postOAuthAuthorization](#postoauthauthorization) - OAuth Authorization Decision
* [postOAuthToken](#postoauthtoken) - OAuth Token Exchange
* [postOAuthRevoke](#postoauthrevoke) - OAuth Token Revocation

## postOAuthRegister

Register an OAuth client dynamically (RFC 7591). Used by MCP clients like ChatGPT and Claude.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="postOAuthRegister" method="post" path="/oauth/register" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.postOAuthRegister({
    clientName: "ChatGPT",
    redirectUris: [
      "https://chatgpt.com/connector/oauth/callback",
    ],
    grantTypes: [
      "authorization_code",
      "refresh_token",
    ],
    scope: "transactions.read invoices.read",
    logoUri: "https://example.com/logo.png",
    clientUri: "https://example.com",
    responseTypes: [
      "code",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { oAuthPostOAuthRegister } from "@midday-ai/sdk/funcs/oAuthPostOAuthRegister.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await oAuthPostOAuthRegister(midday, {
    clientName: "ChatGPT",
    redirectUris: [
      "https://chatgpt.com/connector/oauth/callback",
    ],
    grantTypes: [
      "authorization_code",
      "refresh_token",
    ],
    scope: "transactions.read invoices.read",
    logoUri: "https://example.com/logo.png",
    clientUri: "https://example.com",
    responseTypes: [
      "code",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthPostOAuthRegister failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostOAuthRegisterRequest](../../models/operations/postoauthregisterrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostOAuthRegisterResponse](../../models/operations/postoauthregisterresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.OAuthErrorResponse | 400                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## getOAuthAuthorization

Initiate OAuth authorization flow and get consent screen information

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOAuthAuthorization" method="get" path="/oauth/authorize" -->
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
    state: "abc123xyz789_secure-random-state-value",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
    codeChallengeMethod: "S256",
    resource: "https://api.midday.ai",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { oAuthGetOAuthAuthorization } from "@midday-ai/sdk/funcs/oAuthGetOAuthAuthorization.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await oAuthGetOAuthAuthorization(midday, {
    responseType: "code",
    clientId: "mid_client_abcdef123456789",
    redirectUri: "https://myapp.com/callback",
    scope: "transactions.read invoices.read",
    state: "abc123xyz789_secure-random-state-value",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
    codeChallengeMethod: "S256",
    resource: "https://api.midday.ai",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthGetOAuthAuthorization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOAuthAuthorizationRequest](../../models/operations/getoauthauthorizationrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOAuthAuthorizationResponse](../../models/operations/getoauthauthorizationresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.OAuthErrorResponse | 400                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## postOAuthAuthorization

Process user's authorization decision (allow/deny)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="postOAuthAuthorization" method="post" path="/oauth/authorize" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.postOAuthAuthorization({
    clientId: "mid_client_abcdef123456789",
    decision: "allow",
    scopes: [
      "transactions.read",
      "invoices.read",
    ],
    redirectUri: "https://myapp.com/callback",
    state: "abc123xyz789_secure-random-state-value",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
    teamId: "123e4567-e89b-12d3-a456-426614174000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { oAuthPostOAuthAuthorization } from "@midday-ai/sdk/funcs/oAuthPostOAuthAuthorization.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await oAuthPostOAuthAuthorization(midday, {
    clientId: "mid_client_abcdef123456789",
    decision: "allow",
    scopes: [
      "transactions.read",
      "invoices.read",
    ],
    redirectUri: "https://myapp.com/callback",
    state: "abc123xyz789_secure-random-state-value",
    codeChallenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
    teamId: "123e4567-e89b-12d3-a456-426614174000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthPostOAuthAuthorization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostOAuthAuthorizationRequest](../../models/operations/postoauthauthorizationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostOAuthAuthorizationResponse](../../models/operations/postoauthauthorizationresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.PostOAuthAuthorizationBadRequestError   | 400                                            | application/json                               |
| errors.PostOAuthAuthorizationUnauthorizedError | 401                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## postOAuthToken

Exchange authorization code for access token or refresh an access token. Accepts application/json or application/x-www-form-urlencoded.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="postOAuthToken" method="post" path="/oauth/token" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.postOAuthToken();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { oAuthPostOAuthToken } from "@midday-ai/sdk/funcs/oAuthPostOAuthToken.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await oAuthPostOAuthToken(midday);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthPostOAuthToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostOAuthTokenResponse](../../models/operations/postoauthtokenresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.OAuthErrorResponse | 400                       | application/json          |
| errors.APIError           | 4XX, 5XX                  | \*/\*                     |

## postOAuthRevoke

Revoke an access token or refresh token. Accepts application/json or application/x-www-form-urlencoded.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="postOAuthRevoke" method="post" path="/oauth/revoke" -->
```typescript
import { Midday } from "@midday-ai/sdk";

const midday = new Midday({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await midday.oAuth.postOAuthRevoke();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MiddayCore } from "@midday-ai/sdk/core.js";
import { oAuthPostOAuthRevoke } from "@midday-ai/sdk/funcs/oAuthPostOAuthRevoke.js";

// Use `MiddayCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const midday = new MiddayCore({
  security: {
    oauth2: process.env["MIDDAY_OAUTH2"] ?? "",
  },
});

async function run() {
  const res = await oAuthPostOAuthRevoke(midday);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("oAuthPostOAuthRevoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostOAuthRevokeResponse](../../models/operations/postoauthrevokeresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |