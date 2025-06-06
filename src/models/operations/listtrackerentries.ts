/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListTrackerEntriesRequest = {
  from: string;
  to: string;
  projectId?: string | undefined;
};

/**
 * Metadata about the tracker entries response including totals and date range
 */
export type ListTrackerEntriesMeta = {
  /**
   * Total duration of all tracker entries in the response in seconds
   */
  totalDuration: number;
  /**
   * Total monetary amount for all tracker entries in the response
   */
  totalAmount: number;
  /**
   * Start date of the queried range in YYYY-MM-DD format
   */
  from: string;
  /**
   * End date of the queried range in YYYY-MM-DD format
   */
  to: string;
};

/**
 * User information for the person who created this tracker entry
 */
export type User = {
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
export type ListTrackerEntriesCustomer = {
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
export type Project = {
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
  rate: number;
  /**
   * Currency code for the project rate in ISO 4217 format
   */
  currency: string;
  /**
   * Current status of the project
   */
  status: string;
  /**
   * Description of the project
   */
  description: string;
  /**
   * Name of the project
   */
  name: string;
  /**
   * Whether the project is billable to the customer
   */
  billable: boolean;
  /**
   * Estimated total hours for the project
   */
  estimate: number;
  /**
   * Customer information associated with the project
   */
  customer: ListTrackerEntriesCustomer;
};

export type Result = {
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
  user: User;
  /**
   * Project information associated with this tracker entry
   */
  project: Project;
};

/**
 * List all tracker entries for the authenticated team.
 */
export type ListTrackerEntriesResponse = {
  /**
   * Metadata about the tracker entries response including totals and date range
   */
  meta: ListTrackerEntriesMeta;
  /**
   * Tracker entries grouped by date, where each key is a date in YYYY-MM-DD format and the value is an array of tracker entries for that date
   */
  result: { [k: string]: Array<Result> };
};

/** @internal */
export const ListTrackerEntriesRequest$inboundSchema: z.ZodType<
  ListTrackerEntriesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  from: z.string(),
  to: z.string(),
  projectId: z.string().optional(),
});

/** @internal */
export type ListTrackerEntriesRequest$Outbound = {
  from: string;
  to: string;
  projectId?: string | undefined;
};

/** @internal */
export const ListTrackerEntriesRequest$outboundSchema: z.ZodType<
  ListTrackerEntriesRequest$Outbound,
  z.ZodTypeDef,
  ListTrackerEntriesRequest
> = z.object({
  from: z.string(),
  to: z.string(),
  projectId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTrackerEntriesRequest$ {
  /** @deprecated use `ListTrackerEntriesRequest$inboundSchema` instead. */
  export const inboundSchema = ListTrackerEntriesRequest$inboundSchema;
  /** @deprecated use `ListTrackerEntriesRequest$outboundSchema` instead. */
  export const outboundSchema = ListTrackerEntriesRequest$outboundSchema;
  /** @deprecated use `ListTrackerEntriesRequest$Outbound` instead. */
  export type Outbound = ListTrackerEntriesRequest$Outbound;
}

export function listTrackerEntriesRequestToJSON(
  listTrackerEntriesRequest: ListTrackerEntriesRequest,
): string {
  return JSON.stringify(
    ListTrackerEntriesRequest$outboundSchema.parse(listTrackerEntriesRequest),
  );
}

export function listTrackerEntriesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTrackerEntriesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTrackerEntriesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTrackerEntriesRequest' from JSON`,
  );
}

/** @internal */
export const ListTrackerEntriesMeta$inboundSchema: z.ZodType<
  ListTrackerEntriesMeta,
  z.ZodTypeDef,
  unknown
> = z.object({
  totalDuration: z.number(),
  totalAmount: z.number(),
  from: z.string(),
  to: z.string(),
});

/** @internal */
export type ListTrackerEntriesMeta$Outbound = {
  totalDuration: number;
  totalAmount: number;
  from: string;
  to: string;
};

/** @internal */
export const ListTrackerEntriesMeta$outboundSchema: z.ZodType<
  ListTrackerEntriesMeta$Outbound,
  z.ZodTypeDef,
  ListTrackerEntriesMeta
> = z.object({
  totalDuration: z.number(),
  totalAmount: z.number(),
  from: z.string(),
  to: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTrackerEntriesMeta$ {
  /** @deprecated use `ListTrackerEntriesMeta$inboundSchema` instead. */
  export const inboundSchema = ListTrackerEntriesMeta$inboundSchema;
  /** @deprecated use `ListTrackerEntriesMeta$outboundSchema` instead. */
  export const outboundSchema = ListTrackerEntriesMeta$outboundSchema;
  /** @deprecated use `ListTrackerEntriesMeta$Outbound` instead. */
  export type Outbound = ListTrackerEntriesMeta$Outbound;
}

export function listTrackerEntriesMetaToJSON(
  listTrackerEntriesMeta: ListTrackerEntriesMeta,
): string {
  return JSON.stringify(
    ListTrackerEntriesMeta$outboundSchema.parse(listTrackerEntriesMeta),
  );
}

export function listTrackerEntriesMetaFromJSON(
  jsonString: string,
): SafeParseResult<ListTrackerEntriesMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTrackerEntriesMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTrackerEntriesMeta' from JSON`,
  );
}

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    fullName: z.string(),
    avatarUrl: z.string(),
  });

/** @internal */
export type User$Outbound = {
  id: string;
  fullName: string;
  avatarUrl: string;
};

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> =
  z.object({
    id: z.string(),
    fullName: z.string(),
    avatarUrl: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User$ {
  /** @deprecated use `User$inboundSchema` instead. */
  export const inboundSchema = User$inboundSchema;
  /** @deprecated use `User$outboundSchema` instead. */
  export const outboundSchema = User$outboundSchema;
  /** @deprecated use `User$Outbound` instead. */
  export type Outbound = User$Outbound;
}

export function userToJSON(user: User): string {
  return JSON.stringify(User$outboundSchema.parse(user));
}

export function userFromJSON(
  jsonString: string,
): SafeParseResult<User, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => User$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'User' from JSON`,
  );
}

/** @internal */
export const ListTrackerEntriesCustomer$inboundSchema: z.ZodType<
  ListTrackerEntriesCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type ListTrackerEntriesCustomer$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const ListTrackerEntriesCustomer$outboundSchema: z.ZodType<
  ListTrackerEntriesCustomer$Outbound,
  z.ZodTypeDef,
  ListTrackerEntriesCustomer
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTrackerEntriesCustomer$ {
  /** @deprecated use `ListTrackerEntriesCustomer$inboundSchema` instead. */
  export const inboundSchema = ListTrackerEntriesCustomer$inboundSchema;
  /** @deprecated use `ListTrackerEntriesCustomer$outboundSchema` instead. */
  export const outboundSchema = ListTrackerEntriesCustomer$outboundSchema;
  /** @deprecated use `ListTrackerEntriesCustomer$Outbound` instead. */
  export type Outbound = ListTrackerEntriesCustomer$Outbound;
}

export function listTrackerEntriesCustomerToJSON(
  listTrackerEntriesCustomer: ListTrackerEntriesCustomer,
): string {
  return JSON.stringify(
    ListTrackerEntriesCustomer$outboundSchema.parse(listTrackerEntriesCustomer),
  );
}

export function listTrackerEntriesCustomerFromJSON(
  jsonString: string,
): SafeParseResult<ListTrackerEntriesCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTrackerEntriesCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTrackerEntriesCustomer' from JSON`,
  );
}

/** @internal */
export const Project$inboundSchema: z.ZodType<Project, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string(),
    createdAt: z.string(),
    rate: z.number(),
    currency: z.string(),
    status: z.string(),
    description: z.string(),
    name: z.string(),
    billable: z.boolean(),
    estimate: z.number(),
    customer: z.lazy(() => ListTrackerEntriesCustomer$inboundSchema),
  });

/** @internal */
export type Project$Outbound = {
  id: string;
  createdAt: string;
  rate: number;
  currency: string;
  status: string;
  description: string;
  name: string;
  billable: boolean;
  estimate: number;
  customer: ListTrackerEntriesCustomer$Outbound;
};

/** @internal */
export const Project$outboundSchema: z.ZodType<
  Project$Outbound,
  z.ZodTypeDef,
  Project
> = z.object({
  id: z.string(),
  createdAt: z.string(),
  rate: z.number(),
  currency: z.string(),
  status: z.string(),
  description: z.string(),
  name: z.string(),
  billable: z.boolean(),
  estimate: z.number(),
  customer: z.lazy(() => ListTrackerEntriesCustomer$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Project$ {
  /** @deprecated use `Project$inboundSchema` instead. */
  export const inboundSchema = Project$inboundSchema;
  /** @deprecated use `Project$outboundSchema` instead. */
  export const outboundSchema = Project$outboundSchema;
  /** @deprecated use `Project$Outbound` instead. */
  export type Outbound = Project$Outbound;
}

export function projectToJSON(project: Project): string {
  return JSON.stringify(Project$outboundSchema.parse(project));
}

export function projectFromJSON(
  jsonString: string,
): SafeParseResult<Project, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Project$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Project' from JSON`,
  );
}

/** @internal */
export const Result$inboundSchema: z.ZodType<Result, z.ZodTypeDef, unknown> = z
  .object({
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
    user: z.lazy(() => User$inboundSchema),
    project: z.lazy(() => Project$inboundSchema),
  });

/** @internal */
export type Result$Outbound = {
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
  user: User$Outbound;
  project: Project$Outbound;
};

/** @internal */
export const Result$outboundSchema: z.ZodType<
  Result$Outbound,
  z.ZodTypeDef,
  Result
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
  user: z.lazy(() => User$outboundSchema),
  project: z.lazy(() => Project$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Result$ {
  /** @deprecated use `Result$inboundSchema` instead. */
  export const inboundSchema = Result$inboundSchema;
  /** @deprecated use `Result$outboundSchema` instead. */
  export const outboundSchema = Result$outboundSchema;
  /** @deprecated use `Result$Outbound` instead. */
  export type Outbound = Result$Outbound;
}

export function resultToJSON(result: Result): string {
  return JSON.stringify(Result$outboundSchema.parse(result));
}

export function resultFromJSON(
  jsonString: string,
): SafeParseResult<Result, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Result$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Result' from JSON`,
  );
}

/** @internal */
export const ListTrackerEntriesResponse$inboundSchema: z.ZodType<
  ListTrackerEntriesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: z.lazy(() => ListTrackerEntriesMeta$inboundSchema),
  result: z.record(z.array(z.lazy(() => Result$inboundSchema))),
});

/** @internal */
export type ListTrackerEntriesResponse$Outbound = {
  meta: ListTrackerEntriesMeta$Outbound;
  result: { [k: string]: Array<Result$Outbound> };
};

/** @internal */
export const ListTrackerEntriesResponse$outboundSchema: z.ZodType<
  ListTrackerEntriesResponse$Outbound,
  z.ZodTypeDef,
  ListTrackerEntriesResponse
> = z.object({
  meta: z.lazy(() => ListTrackerEntriesMeta$outboundSchema),
  result: z.record(z.array(z.lazy(() => Result$outboundSchema))),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTrackerEntriesResponse$ {
  /** @deprecated use `ListTrackerEntriesResponse$inboundSchema` instead. */
  export const inboundSchema = ListTrackerEntriesResponse$inboundSchema;
  /** @deprecated use `ListTrackerEntriesResponse$outboundSchema` instead. */
  export const outboundSchema = ListTrackerEntriesResponse$outboundSchema;
  /** @deprecated use `ListTrackerEntriesResponse$Outbound` instead. */
  export type Outbound = ListTrackerEntriesResponse$Outbound;
}

export function listTrackerEntriesResponseToJSON(
  listTrackerEntriesResponse: ListTrackerEntriesResponse,
): string {
  return JSON.stringify(
    ListTrackerEntriesResponse$outboundSchema.parse(listTrackerEntriesResponse),
  );
}

export function listTrackerEntriesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListTrackerEntriesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTrackerEntriesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTrackerEntriesResponse' from JSON`,
  );
}
