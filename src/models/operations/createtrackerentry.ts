/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTrackerEntryRequest = {
  /**
   * Start time of the tracker entry in ISO 8601 format
   */
  start: Date;
  /**
   * Stop time of the tracker entry in ISO 8601 format
   */
  stop: Date;
  /**
   * Array of dates for which to create tracker entries
   */
  dates: Array<string>;
  /**
   * Unique identifier of the user assigned to this tracker entry
   */
  assignedId: string | null;
  /**
   * Unique identifier of the project associated with this tracker entry
   */
  projectId: string;
  /**
   * Optional description or notes for the tracker entry
   */
  description?: string | null | undefined;
  /**
   * Duration of the tracker entry in seconds
   */
  duration: number;
};

/**
 * User information for the person who created this tracker entry
 */
export type CreateTrackerEntryUser = {
  /**
   * Unique identifier of the user
   */
  id: string;
  /**
   * Full name of the user
   */
  fullName: string;
  /**
   * URL to the user's avatar image
   */
  avatarUrl: string;
};

/**
 * Customer information associated with the project
 */
export type CreateTrackerEntryCustomer = {
  /**
   * Unique identifier of the customer
   */
  id: string;
  /**
   * Name of the customer or organization
   */
  name: string;
};

/**
 * Project information associated with this tracker entry
 */
export type CreateTrackerEntryProject = {
  /**
   * Unique identifier of the project
   */
  id: string;
  /**
   * Date and time when the project was created in ISO 8601 format
   */
  createdAt: string;
  /**
   * Default hourly rate for the project
   */
  rate: number | null;
  /**
   * Currency code for the project rate in ISO 4217 format
   */
  currency: string | null;
  /**
   * Current status of the project
   */
  status: string;
  /**
   * Description of the project
   */
  description: string | null;
  /**
   * Name of the project
   */
  name: string;
  /**
   * Whether the project is billable to the customer
   */
  billable: boolean | null;
  /**
   * Estimated total hours for the project
   */
  estimate: number | null;
  /**
   * Customer information associated with the project
   */
  customer: CreateTrackerEntryCustomer | null;
};

export type CreateTrackerEntryData = {
  /**
   * Unique identifier of the tracker entry
   */
  id: string;
  /**
   * Date and time when the tracker entry was created in ISO 8601 format
   */
  createdAt: string;
  /**
   * Duration of the tracker entry in seconds
   */
  duration: number;
  /**
   * Start time of the tracker entry in ISO 8601 format
   */
  start: string;
  /**
   * Stop time of the tracker entry in ISO 8601 format
   */
  stop: string;
  /**
   * Unique identifier of the team that owns this tracker entry
   */
  teamId: string;
  /**
   * Description or notes for the tracker entry
   */
  description: string | null;
  /**
   * Hourly rate applied to this tracker entry
   */
  rate: number | null;
  /**
   * Currency code for the rate in ISO 4217 format
   */
  currency: string | null;
  /**
   * Whether this tracker entry has been billed to the customer
   */
  billed: boolean;
  /**
   * Date of the tracker entry in YYYY-MM-DD format
   */
  date: string;
  /**
   * User information for the person who created this tracker entry
   */
  user: CreateTrackerEntryUser;
  /**
   * Project information associated with this tracker entry
   */
  project: CreateTrackerEntryProject;
};

/**
 * Response schema for created tracker entries
 */
export type CreateTrackerEntryResponse = {
  /**
   * Array of created tracker entries
   */
  data: Array<CreateTrackerEntryData>;
};

/** @internal */
export const CreateTrackerEntryRequest$inboundSchema: z.ZodType<
  CreateTrackerEntryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  start: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  stop: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  dates: z.array(z.string()),
  assignedId: z.nullable(z.string()),
  projectId: z.string(),
  description: z.nullable(z.string()).optional(),
  duration: z.number(),
});

/** @internal */
export type CreateTrackerEntryRequest$Outbound = {
  start: string;
  stop: string;
  dates: Array<string>;
  assignedId: string | null;
  projectId: string;
  description?: string | null | undefined;
  duration: number;
};

/** @internal */
export const CreateTrackerEntryRequest$outboundSchema: z.ZodType<
  CreateTrackerEntryRequest$Outbound,
  z.ZodTypeDef,
  CreateTrackerEntryRequest
> = z.object({
  start: z.date().transform(v => v.toISOString()),
  stop: z.date().transform(v => v.toISOString()),
  dates: z.array(z.string()),
  assignedId: z.nullable(z.string()),
  projectId: z.string(),
  description: z.nullable(z.string()).optional(),
  duration: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTrackerEntryRequest$ {
  /** @deprecated use `CreateTrackerEntryRequest$inboundSchema` instead. */
  export const inboundSchema = CreateTrackerEntryRequest$inboundSchema;
  /** @deprecated use `CreateTrackerEntryRequest$outboundSchema` instead. */
  export const outboundSchema = CreateTrackerEntryRequest$outboundSchema;
  /** @deprecated use `CreateTrackerEntryRequest$Outbound` instead. */
  export type Outbound = CreateTrackerEntryRequest$Outbound;
}

export function createTrackerEntryRequestToJSON(
  createTrackerEntryRequest: CreateTrackerEntryRequest,
): string {
  return JSON.stringify(
    CreateTrackerEntryRequest$outboundSchema.parse(createTrackerEntryRequest),
  );
}

export function createTrackerEntryRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTrackerEntryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTrackerEntryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTrackerEntryRequest' from JSON`,
  );
}

/** @internal */
export const CreateTrackerEntryUser$inboundSchema: z.ZodType<
  CreateTrackerEntryUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  fullName: z.string(),
  avatarUrl: z.string(),
});

/** @internal */
export type CreateTrackerEntryUser$Outbound = {
  id: string;
  fullName: string;
  avatarUrl: string;
};

/** @internal */
export const CreateTrackerEntryUser$outboundSchema: z.ZodType<
  CreateTrackerEntryUser$Outbound,
  z.ZodTypeDef,
  CreateTrackerEntryUser
> = z.object({
  id: z.string(),
  fullName: z.string(),
  avatarUrl: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTrackerEntryUser$ {
  /** @deprecated use `CreateTrackerEntryUser$inboundSchema` instead. */
  export const inboundSchema = CreateTrackerEntryUser$inboundSchema;
  /** @deprecated use `CreateTrackerEntryUser$outboundSchema` instead. */
  export const outboundSchema = CreateTrackerEntryUser$outboundSchema;
  /** @deprecated use `CreateTrackerEntryUser$Outbound` instead. */
  export type Outbound = CreateTrackerEntryUser$Outbound;
}

export function createTrackerEntryUserToJSON(
  createTrackerEntryUser: CreateTrackerEntryUser,
): string {
  return JSON.stringify(
    CreateTrackerEntryUser$outboundSchema.parse(createTrackerEntryUser),
  );
}

export function createTrackerEntryUserFromJSON(
  jsonString: string,
): SafeParseResult<CreateTrackerEntryUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTrackerEntryUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTrackerEntryUser' from JSON`,
  );
}

/** @internal */
export const CreateTrackerEntryCustomer$inboundSchema: z.ZodType<
  CreateTrackerEntryCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type CreateTrackerEntryCustomer$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const CreateTrackerEntryCustomer$outboundSchema: z.ZodType<
  CreateTrackerEntryCustomer$Outbound,
  z.ZodTypeDef,
  CreateTrackerEntryCustomer
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTrackerEntryCustomer$ {
  /** @deprecated use `CreateTrackerEntryCustomer$inboundSchema` instead. */
  export const inboundSchema = CreateTrackerEntryCustomer$inboundSchema;
  /** @deprecated use `CreateTrackerEntryCustomer$outboundSchema` instead. */
  export const outboundSchema = CreateTrackerEntryCustomer$outboundSchema;
  /** @deprecated use `CreateTrackerEntryCustomer$Outbound` instead. */
  export type Outbound = CreateTrackerEntryCustomer$Outbound;
}

export function createTrackerEntryCustomerToJSON(
  createTrackerEntryCustomer: CreateTrackerEntryCustomer,
): string {
  return JSON.stringify(
    CreateTrackerEntryCustomer$outboundSchema.parse(createTrackerEntryCustomer),
  );
}

export function createTrackerEntryCustomerFromJSON(
  jsonString: string,
): SafeParseResult<CreateTrackerEntryCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTrackerEntryCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTrackerEntryCustomer' from JSON`,
  );
}

/** @internal */
export const CreateTrackerEntryProject$inboundSchema: z.ZodType<
  CreateTrackerEntryProject,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  createdAt: z.string(),
  rate: z.nullable(z.number()),
  currency: z.nullable(z.string()),
  status: z.string(),
  description: z.nullable(z.string()),
  name: z.string(),
  billable: z.nullable(z.boolean()),
  estimate: z.nullable(z.number()),
  customer: z.nullable(z.lazy(() => CreateTrackerEntryCustomer$inboundSchema)),
});

/** @internal */
export type CreateTrackerEntryProject$Outbound = {
  id: string;
  createdAt: string;
  rate: number | null;
  currency: string | null;
  status: string;
  description: string | null;
  name: string;
  billable: boolean | null;
  estimate: number | null;
  customer: CreateTrackerEntryCustomer$Outbound | null;
};

/** @internal */
export const CreateTrackerEntryProject$outboundSchema: z.ZodType<
  CreateTrackerEntryProject$Outbound,
  z.ZodTypeDef,
  CreateTrackerEntryProject
> = z.object({
  id: z.string(),
  createdAt: z.string(),
  rate: z.nullable(z.number()),
  currency: z.nullable(z.string()),
  status: z.string(),
  description: z.nullable(z.string()),
  name: z.string(),
  billable: z.nullable(z.boolean()),
  estimate: z.nullable(z.number()),
  customer: z.nullable(z.lazy(() => CreateTrackerEntryCustomer$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTrackerEntryProject$ {
  /** @deprecated use `CreateTrackerEntryProject$inboundSchema` instead. */
  export const inboundSchema = CreateTrackerEntryProject$inboundSchema;
  /** @deprecated use `CreateTrackerEntryProject$outboundSchema` instead. */
  export const outboundSchema = CreateTrackerEntryProject$outboundSchema;
  /** @deprecated use `CreateTrackerEntryProject$Outbound` instead. */
  export type Outbound = CreateTrackerEntryProject$Outbound;
}

export function createTrackerEntryProjectToJSON(
  createTrackerEntryProject: CreateTrackerEntryProject,
): string {
  return JSON.stringify(
    CreateTrackerEntryProject$outboundSchema.parse(createTrackerEntryProject),
  );
}

export function createTrackerEntryProjectFromJSON(
  jsonString: string,
): SafeParseResult<CreateTrackerEntryProject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTrackerEntryProject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTrackerEntryProject' from JSON`,
  );
}

/** @internal */
export const CreateTrackerEntryData$inboundSchema: z.ZodType<
  CreateTrackerEntryData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  createdAt: z.string(),
  duration: z.number(),
  start: z.string(),
  stop: z.string(),
  teamId: z.string(),
  description: z.nullable(z.string()),
  rate: z.nullable(z.number()),
  currency: z.nullable(z.string()),
  billed: z.boolean(),
  date: z.string(),
  user: z.lazy(() => CreateTrackerEntryUser$inboundSchema),
  project: z.lazy(() => CreateTrackerEntryProject$inboundSchema),
});

/** @internal */
export type CreateTrackerEntryData$Outbound = {
  id: string;
  createdAt: string;
  duration: number;
  start: string;
  stop: string;
  teamId: string;
  description: string | null;
  rate: number | null;
  currency: string | null;
  billed: boolean;
  date: string;
  user: CreateTrackerEntryUser$Outbound;
  project: CreateTrackerEntryProject$Outbound;
};

/** @internal */
export const CreateTrackerEntryData$outboundSchema: z.ZodType<
  CreateTrackerEntryData$Outbound,
  z.ZodTypeDef,
  CreateTrackerEntryData
> = z.object({
  id: z.string(),
  createdAt: z.string(),
  duration: z.number(),
  start: z.string(),
  stop: z.string(),
  teamId: z.string(),
  description: z.nullable(z.string()),
  rate: z.nullable(z.number()),
  currency: z.nullable(z.string()),
  billed: z.boolean(),
  date: z.string(),
  user: z.lazy(() => CreateTrackerEntryUser$outboundSchema),
  project: z.lazy(() => CreateTrackerEntryProject$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTrackerEntryData$ {
  /** @deprecated use `CreateTrackerEntryData$inboundSchema` instead. */
  export const inboundSchema = CreateTrackerEntryData$inboundSchema;
  /** @deprecated use `CreateTrackerEntryData$outboundSchema` instead. */
  export const outboundSchema = CreateTrackerEntryData$outboundSchema;
  /** @deprecated use `CreateTrackerEntryData$Outbound` instead. */
  export type Outbound = CreateTrackerEntryData$Outbound;
}

export function createTrackerEntryDataToJSON(
  createTrackerEntryData: CreateTrackerEntryData,
): string {
  return JSON.stringify(
    CreateTrackerEntryData$outboundSchema.parse(createTrackerEntryData),
  );
}

export function createTrackerEntryDataFromJSON(
  jsonString: string,
): SafeParseResult<CreateTrackerEntryData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTrackerEntryData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTrackerEntryData' from JSON`,
  );
}

/** @internal */
export const CreateTrackerEntryResponse$inboundSchema: z.ZodType<
  CreateTrackerEntryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(z.lazy(() => CreateTrackerEntryData$inboundSchema)),
});

/** @internal */
export type CreateTrackerEntryResponse$Outbound = {
  data: Array<CreateTrackerEntryData$Outbound>;
};

/** @internal */
export const CreateTrackerEntryResponse$outboundSchema: z.ZodType<
  CreateTrackerEntryResponse$Outbound,
  z.ZodTypeDef,
  CreateTrackerEntryResponse
> = z.object({
  data: z.array(z.lazy(() => CreateTrackerEntryData$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTrackerEntryResponse$ {
  /** @deprecated use `CreateTrackerEntryResponse$inboundSchema` instead. */
  export const inboundSchema = CreateTrackerEntryResponse$inboundSchema;
  /** @deprecated use `CreateTrackerEntryResponse$outboundSchema` instead. */
  export const outboundSchema = CreateTrackerEntryResponse$outboundSchema;
  /** @deprecated use `CreateTrackerEntryResponse$Outbound` instead. */
  export type Outbound = CreateTrackerEntryResponse$Outbound;
}

export function createTrackerEntryResponseToJSON(
  createTrackerEntryResponse: CreateTrackerEntryResponse,
): string {
  return JSON.stringify(
    CreateTrackerEntryResponse$outboundSchema.parse(createTrackerEntryResponse),
  );
}

export function createTrackerEntryResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateTrackerEntryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTrackerEntryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTrackerEntryResponse' from JSON`,
  );
}
