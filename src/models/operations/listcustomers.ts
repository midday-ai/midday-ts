/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCustomersRequest = {
  q?: string | null | undefined;
  sort?: Array<string> | null | undefined;
  cursor?: string | undefined;
  pageSize?: number | undefined;
};

/**
 * Pagination metadata for the customers response
 */
export type ListCustomersMeta = {
  /**
   * Cursor for the next page of results, null if no more pages
   */
  cursor: string | null;
  /**
   * Whether there are more customers available on the previous page
   */
  hasPreviousPage: boolean;
  /**
   * Whether there are more customers available on the next page
   */
  hasNextPage: boolean;
};

export type ListCustomersTag = {
  /**
   * Unique identifier of the tag
   */
  id: string;
  /**
   * Display name of the tag
   */
  name: string;
};

export type ListCustomersData = {
  /**
   * Unique identifier of the customer
   */
  id: string;
  /**
   * Name of the customer or organization
   */
  name: string;
  /**
   * Primary email address of the customer
   */
  email: string;
  /**
   * Billing email address of the customer
   */
  billingEmail: string | null;
  /**
   * Primary phone number of the customer
   */
  phone: string | null;
  /**
   * Website URL of the customer
   */
  website: string | null;
  /**
   * Date and time when the customer was created in ISO 8601 format
   */
  createdAt: string;
  /**
   * Country name where the customer is located
   */
  country: string | null;
  /**
   * First line of the customer's address
   */
  addressLine1: string | null;
  /**
   * Second line of the customer's address (suite, apartment, etc.)
   */
  addressLine2: string | null;
  /**
   * City where the customer is located
   */
  city: string | null;
  /**
   * State or province where the customer is located
   */
  state: string | null;
  /**
   * ZIP or postal code of the customer's address
   */
  zip: string | null;
  /**
   * Internal notes about the customer for team reference
   */
  note: string | null;
  /**
   * VAT (Value Added Tax) number of the customer
   */
  vatNumber: string | null;
  /**
   * Country code in ISO 3166-1 alpha-2 format
   */
  countryCode: string | null;
  /**
   * Unique token for the customer (used for internal identification)
   */
  token: string;
  /**
   * Primary contact person's name at the customer organization
   */
  contact: string | null;
  /**
   * Total number of invoices created for this customer
   */
  invoiceCount: number;
  /**
   * Total number of projects associated with this customer
   */
  projectCount: number;
  /**
   * Array of tags associated with the customer for categorization
   */
  tags: Array<ListCustomersTag>;
};

/**
 * Retrieve a list of customers for the authenticated team.
 */
export type ListCustomersResponse = {
  /**
   * Pagination metadata for the customers response
   */
  meta: ListCustomersMeta;
  /**
   * Array of customers matching the query criteria
   */
  data: Array<ListCustomersData>;
};

/** @internal */
export const ListCustomersRequest$inboundSchema: z.ZodType<
  ListCustomersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  q: z.nullable(z.string()).optional(),
  sort: z.nullable(z.array(z.string())).optional(),
  cursor: z.string().optional(),
  pageSize: z.number().optional(),
});

/** @internal */
export type ListCustomersRequest$Outbound = {
  q?: string | null | undefined;
  sort?: Array<string> | null | undefined;
  cursor?: string | undefined;
  pageSize?: number | undefined;
};

/** @internal */
export const ListCustomersRequest$outboundSchema: z.ZodType<
  ListCustomersRequest$Outbound,
  z.ZodTypeDef,
  ListCustomersRequest
> = z.object({
  q: z.nullable(z.string()).optional(),
  sort: z.nullable(z.array(z.string())).optional(),
  cursor: z.string().optional(),
  pageSize: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersRequest$ {
  /** @deprecated use `ListCustomersRequest$inboundSchema` instead. */
  export const inboundSchema = ListCustomersRequest$inboundSchema;
  /** @deprecated use `ListCustomersRequest$outboundSchema` instead. */
  export const outboundSchema = ListCustomersRequest$outboundSchema;
  /** @deprecated use `ListCustomersRequest$Outbound` instead. */
  export type Outbound = ListCustomersRequest$Outbound;
}

export function listCustomersRequestToJSON(
  listCustomersRequest: ListCustomersRequest,
): string {
  return JSON.stringify(
    ListCustomersRequest$outboundSchema.parse(listCustomersRequest),
  );
}

export function listCustomersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersRequest' from JSON`,
  );
}

/** @internal */
export const ListCustomersMeta$inboundSchema: z.ZodType<
  ListCustomersMeta,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.nullable(z.string()),
  hasPreviousPage: z.boolean(),
  hasNextPage: z.boolean(),
});

/** @internal */
export type ListCustomersMeta$Outbound = {
  cursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

/** @internal */
export const ListCustomersMeta$outboundSchema: z.ZodType<
  ListCustomersMeta$Outbound,
  z.ZodTypeDef,
  ListCustomersMeta
> = z.object({
  cursor: z.nullable(z.string()),
  hasPreviousPage: z.boolean(),
  hasNextPage: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersMeta$ {
  /** @deprecated use `ListCustomersMeta$inboundSchema` instead. */
  export const inboundSchema = ListCustomersMeta$inboundSchema;
  /** @deprecated use `ListCustomersMeta$outboundSchema` instead. */
  export const outboundSchema = ListCustomersMeta$outboundSchema;
  /** @deprecated use `ListCustomersMeta$Outbound` instead. */
  export type Outbound = ListCustomersMeta$Outbound;
}

export function listCustomersMetaToJSON(
  listCustomersMeta: ListCustomersMeta,
): string {
  return JSON.stringify(
    ListCustomersMeta$outboundSchema.parse(listCustomersMeta),
  );
}

export function listCustomersMetaFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersMeta' from JSON`,
  );
}

/** @internal */
export const ListCustomersTag$inboundSchema: z.ZodType<
  ListCustomersTag,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type ListCustomersTag$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const ListCustomersTag$outboundSchema: z.ZodType<
  ListCustomersTag$Outbound,
  z.ZodTypeDef,
  ListCustomersTag
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersTag$ {
  /** @deprecated use `ListCustomersTag$inboundSchema` instead. */
  export const inboundSchema = ListCustomersTag$inboundSchema;
  /** @deprecated use `ListCustomersTag$outboundSchema` instead. */
  export const outboundSchema = ListCustomersTag$outboundSchema;
  /** @deprecated use `ListCustomersTag$Outbound` instead. */
  export type Outbound = ListCustomersTag$Outbound;
}

export function listCustomersTagToJSON(
  listCustomersTag: ListCustomersTag,
): string {
  return JSON.stringify(
    ListCustomersTag$outboundSchema.parse(listCustomersTag),
  );
}

export function listCustomersTagFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersTag, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersTag$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersTag' from JSON`,
  );
}

/** @internal */
export const ListCustomersData$inboundSchema: z.ZodType<
  ListCustomersData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  billingEmail: z.nullable(z.string()),
  phone: z.nullable(z.string()),
  website: z.nullable(z.string()),
  createdAt: z.string(),
  country: z.nullable(z.string()),
  addressLine1: z.nullable(z.string()),
  addressLine2: z.nullable(z.string()),
  city: z.nullable(z.string()),
  state: z.nullable(z.string()),
  zip: z.nullable(z.string()),
  note: z.nullable(z.string()),
  vatNumber: z.nullable(z.string()),
  countryCode: z.nullable(z.string()),
  token: z.string(),
  contact: z.nullable(z.string()),
  invoiceCount: z.number(),
  projectCount: z.number(),
  tags: z.array(z.lazy(() => ListCustomersTag$inboundSchema)),
});

/** @internal */
export type ListCustomersData$Outbound = {
  id: string;
  name: string;
  email: string;
  billingEmail: string | null;
  phone: string | null;
  website: string | null;
  createdAt: string;
  country: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  note: string | null;
  vatNumber: string | null;
  countryCode: string | null;
  token: string;
  contact: string | null;
  invoiceCount: number;
  projectCount: number;
  tags: Array<ListCustomersTag$Outbound>;
};

/** @internal */
export const ListCustomersData$outboundSchema: z.ZodType<
  ListCustomersData$Outbound,
  z.ZodTypeDef,
  ListCustomersData
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  billingEmail: z.nullable(z.string()),
  phone: z.nullable(z.string()),
  website: z.nullable(z.string()),
  createdAt: z.string(),
  country: z.nullable(z.string()),
  addressLine1: z.nullable(z.string()),
  addressLine2: z.nullable(z.string()),
  city: z.nullable(z.string()),
  state: z.nullable(z.string()),
  zip: z.nullable(z.string()),
  note: z.nullable(z.string()),
  vatNumber: z.nullable(z.string()),
  countryCode: z.nullable(z.string()),
  token: z.string(),
  contact: z.nullable(z.string()),
  invoiceCount: z.number(),
  projectCount: z.number(),
  tags: z.array(z.lazy(() => ListCustomersTag$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersData$ {
  /** @deprecated use `ListCustomersData$inboundSchema` instead. */
  export const inboundSchema = ListCustomersData$inboundSchema;
  /** @deprecated use `ListCustomersData$outboundSchema` instead. */
  export const outboundSchema = ListCustomersData$outboundSchema;
  /** @deprecated use `ListCustomersData$Outbound` instead. */
  export type Outbound = ListCustomersData$Outbound;
}

export function listCustomersDataToJSON(
  listCustomersData: ListCustomersData,
): string {
  return JSON.stringify(
    ListCustomersData$outboundSchema.parse(listCustomersData),
  );
}

export function listCustomersDataFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersData' from JSON`,
  );
}

/** @internal */
export const ListCustomersResponse$inboundSchema: z.ZodType<
  ListCustomersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: z.lazy(() => ListCustomersMeta$inboundSchema),
  data: z.array(z.lazy(() => ListCustomersData$inboundSchema)),
});

/** @internal */
export type ListCustomersResponse$Outbound = {
  meta: ListCustomersMeta$Outbound;
  data: Array<ListCustomersData$Outbound>;
};

/** @internal */
export const ListCustomersResponse$outboundSchema: z.ZodType<
  ListCustomersResponse$Outbound,
  z.ZodTypeDef,
  ListCustomersResponse
> = z.object({
  meta: z.lazy(() => ListCustomersMeta$outboundSchema),
  data: z.array(z.lazy(() => ListCustomersData$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersResponse$ {
  /** @deprecated use `ListCustomersResponse$inboundSchema` instead. */
  export const inboundSchema = ListCustomersResponse$inboundSchema;
  /** @deprecated use `ListCustomersResponse$outboundSchema` instead. */
  export const outboundSchema = ListCustomersResponse$outboundSchema;
  /** @deprecated use `ListCustomersResponse$Outbound` instead. */
  export type Outbound = ListCustomersResponse$Outbound;
}

export function listCustomersResponseToJSON(
  listCustomersResponse: ListCustomersResponse,
): string {
  return JSON.stringify(
    ListCustomersResponse$outboundSchema.parse(listCustomersResponse),
  );
}

export function listCustomersResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersResponse' from JSON`,
  );
}
