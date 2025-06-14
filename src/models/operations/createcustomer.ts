/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateCustomerTagRequest = {
  /**
   * Unique identifier of the tag
   */
  id: string;
  /**
   * Display name of the tag
   */
  name: string;
};

export type CreateCustomerRequest = {
  /**
   * Unique identifier of the customer. Required for updates, omit for new customers
   */
  id?: string | undefined;
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
  billingEmail?: string | null | undefined;
  /**
   * Country name where the customer is located
   */
  country?: string | null | undefined;
  /**
   * First line of the customer's address
   */
  addressLine1?: string | null | undefined;
  /**
   * Second line of the customer's address (suite, apartment, etc.)
   */
  addressLine2?: string | null | undefined;
  /**
   * City where the customer is located
   */
  city?: string | null | undefined;
  /**
   * State or province where the customer is located
   */
  state?: string | null | undefined;
  /**
   * ZIP or postal code of the customer's address
   */
  zip?: string | null | undefined;
  /**
   * Primary phone number of the customer
   */
  phone?: string | null | undefined;
  /**
   * Website URL of the customer
   */
  website?: string | null | undefined;
  /**
   * Internal notes about the customer for team reference
   */
  note?: string | null | undefined;
  /**
   * VAT (Value Added Tax) number of the customer
   */
  vatNumber?: string | null | undefined;
  /**
   * Country code in ISO 3166-1 alpha-2 format
   */
  countryCode?: string | null | undefined;
  /**
   * Primary contact person's name at the customer organization
   */
  contact?: string | null | undefined;
  /**
   * Array of tags to associate with the customer for categorization
   */
  tags?: Array<CreateCustomerTagRequest> | undefined;
};

export type CreateCustomerTagResponse = {
  /**
   * Unique identifier of the tag
   */
  id: string;
  /**
   * Display name of the tag
   */
  name: string;
};

/**
 * Customer created
 */
export type CreateCustomerResponse = {
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
  tags: Array<CreateCustomerTagResponse>;
};

/** @internal */
export const CreateCustomerTagRequest$inboundSchema: z.ZodType<
  CreateCustomerTagRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type CreateCustomerTagRequest$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const CreateCustomerTagRequest$outboundSchema: z.ZodType<
  CreateCustomerTagRequest$Outbound,
  z.ZodTypeDef,
  CreateCustomerTagRequest
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomerTagRequest$ {
  /** @deprecated use `CreateCustomerTagRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCustomerTagRequest$inboundSchema;
  /** @deprecated use `CreateCustomerTagRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCustomerTagRequest$outboundSchema;
  /** @deprecated use `CreateCustomerTagRequest$Outbound` instead. */
  export type Outbound = CreateCustomerTagRequest$Outbound;
}

export function createCustomerTagRequestToJSON(
  createCustomerTagRequest: CreateCustomerTagRequest,
): string {
  return JSON.stringify(
    CreateCustomerTagRequest$outboundSchema.parse(createCustomerTagRequest),
  );
}

export function createCustomerTagRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomerTagRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCustomerTagRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomerTagRequest' from JSON`,
  );
}

/** @internal */
export const CreateCustomerRequest$inboundSchema: z.ZodType<
  CreateCustomerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  billingEmail: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  addressLine1: z.nullable(z.string()).optional(),
  addressLine2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  zip: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
  website: z.nullable(z.string()).optional(),
  note: z.nullable(z.string()).optional(),
  vatNumber: z.nullable(z.string()).optional(),
  countryCode: z.nullable(z.string()).optional(),
  contact: z.nullable(z.string()).optional(),
  tags: z.array(z.lazy(() => CreateCustomerTagRequest$inboundSchema))
    .optional(),
});

/** @internal */
export type CreateCustomerRequest$Outbound = {
  id?: string | undefined;
  name: string;
  email: string;
  billingEmail?: string | null | undefined;
  country?: string | null | undefined;
  addressLine1?: string | null | undefined;
  addressLine2?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  zip?: string | null | undefined;
  phone?: string | null | undefined;
  website?: string | null | undefined;
  note?: string | null | undefined;
  vatNumber?: string | null | undefined;
  countryCode?: string | null | undefined;
  contact?: string | null | undefined;
  tags?: Array<CreateCustomerTagRequest$Outbound> | undefined;
};

/** @internal */
export const CreateCustomerRequest$outboundSchema: z.ZodType<
  CreateCustomerRequest$Outbound,
  z.ZodTypeDef,
  CreateCustomerRequest
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  billingEmail: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  addressLine1: z.nullable(z.string()).optional(),
  addressLine2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  zip: z.nullable(z.string()).optional(),
  phone: z.nullable(z.string()).optional(),
  website: z.nullable(z.string()).optional(),
  note: z.nullable(z.string()).optional(),
  vatNumber: z.nullable(z.string()).optional(),
  countryCode: z.nullable(z.string()).optional(),
  contact: z.nullable(z.string()).optional(),
  tags: z.array(z.lazy(() => CreateCustomerTagRequest$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomerRequest$ {
  /** @deprecated use `CreateCustomerRequest$inboundSchema` instead. */
  export const inboundSchema = CreateCustomerRequest$inboundSchema;
  /** @deprecated use `CreateCustomerRequest$outboundSchema` instead. */
  export const outboundSchema = CreateCustomerRequest$outboundSchema;
  /** @deprecated use `CreateCustomerRequest$Outbound` instead. */
  export type Outbound = CreateCustomerRequest$Outbound;
}

export function createCustomerRequestToJSON(
  createCustomerRequest: CreateCustomerRequest,
): string {
  return JSON.stringify(
    CreateCustomerRequest$outboundSchema.parse(createCustomerRequest),
  );
}

export function createCustomerRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCustomerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomerRequest' from JSON`,
  );
}

/** @internal */
export const CreateCustomerTagResponse$inboundSchema: z.ZodType<
  CreateCustomerTagResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type CreateCustomerTagResponse$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const CreateCustomerTagResponse$outboundSchema: z.ZodType<
  CreateCustomerTagResponse$Outbound,
  z.ZodTypeDef,
  CreateCustomerTagResponse
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomerTagResponse$ {
  /** @deprecated use `CreateCustomerTagResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCustomerTagResponse$inboundSchema;
  /** @deprecated use `CreateCustomerTagResponse$outboundSchema` instead. */
  export const outboundSchema = CreateCustomerTagResponse$outboundSchema;
  /** @deprecated use `CreateCustomerTagResponse$Outbound` instead. */
  export type Outbound = CreateCustomerTagResponse$Outbound;
}

export function createCustomerTagResponseToJSON(
  createCustomerTagResponse: CreateCustomerTagResponse,
): string {
  return JSON.stringify(
    CreateCustomerTagResponse$outboundSchema.parse(createCustomerTagResponse),
  );
}

export function createCustomerTagResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomerTagResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCustomerTagResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomerTagResponse' from JSON`,
  );
}

/** @internal */
export const CreateCustomerResponse$inboundSchema: z.ZodType<
  CreateCustomerResponse,
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
  tags: z.array(z.lazy(() => CreateCustomerTagResponse$inboundSchema)),
});

/** @internal */
export type CreateCustomerResponse$Outbound = {
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
  tags: Array<CreateCustomerTagResponse$Outbound>;
};

/** @internal */
export const CreateCustomerResponse$outboundSchema: z.ZodType<
  CreateCustomerResponse$Outbound,
  z.ZodTypeDef,
  CreateCustomerResponse
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
  tags: z.array(z.lazy(() => CreateCustomerTagResponse$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCustomerResponse$ {
  /** @deprecated use `CreateCustomerResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCustomerResponse$inboundSchema;
  /** @deprecated use `CreateCustomerResponse$outboundSchema` instead. */
  export const outboundSchema = CreateCustomerResponse$outboundSchema;
  /** @deprecated use `CreateCustomerResponse$Outbound` instead. */
  export type Outbound = CreateCustomerResponse$Outbound;
}

export function createCustomerResponseToJSON(
  createCustomerResponse: CreateCustomerResponse,
): string {
  return JSON.stringify(
    CreateCustomerResponse$outboundSchema.parse(createCustomerResponse),
  );
}

export function createCustomerResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateCustomerResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCustomerResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCustomerResponse' from JSON`,
  );
}
