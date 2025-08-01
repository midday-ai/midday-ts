/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListInvoicesRequest = {
  cursor?: string | null | undefined;
  sort?: Array<string> | null | undefined;
  pageSize?: number | undefined;
  q?: string | null | undefined;
  start?: string | null | undefined;
  end?: string | null | undefined;
  statuses?: Array<string> | null | undefined;
  customers?: Array<string> | null | undefined;
};

/**
 * Pagination metadata
 */
export type ListInvoicesMeta = {
  /**
   * Cursor for pagination; null if there is no next page
   */
  cursor: string | null;
  /**
   * Indicates if there is a previous page of results
   */
  hasPreviousPage: boolean;
  /**
   * Indicates if there is a next page of results
   */
  hasNextPage: boolean;
};

/**
 * Current status of the invoice
 */
export const ListInvoicesStatus = {
  Draft: "draft",
  Overdue: "overdue",
  Paid: "paid",
  Unpaid: "unpaid",
  Canceled: "canceled",
  Scheduled: "scheduled",
} as const;
/**
 * Current status of the invoice
 */
export type ListInvoicesStatus = ClosedEnum<typeof ListInvoicesStatus>;

/**
 * Customer details
 */
export type ListInvoicesCustomer = {
  /**
   * Unique identifier for the customer
   */
  id: string;
  /**
   * Name of the customer
   */
  name: string;
  /**
   * Website URL of the customer
   */
  website: string | null;
  /**
   * Email address of the customer
   */
  email: string | null;
};

/**
 * Invoice object
 */
export type ListInvoicesData = {
  /**
   * Unique identifier for the invoice
   */
  id: string;
  /**
   * Current status of the invoice
   */
  status: ListInvoicesStatus;
  /**
   * Due date of the invoice in ISO 8601 format
   */
  dueDate: string;
  /**
   * Issue date of the invoice in ISO 8601 format
   */
  issueDate: string;
  /**
   * Invoice number as shown to the customer
   */
  invoiceNumber: string;
  /**
   * Total amount of the invoice
   */
  amount: number;
  /**
   * Currency code (ISO 4217) for the invoice amount
   */
  currency: string;
  /**
   * Customer details
   */
  customer: ListInvoicesCustomer;
  /**
   * Timestamp when the invoice was paid (ISO 8601), or null if unpaid
   */
  paidAt: string | null;
  /**
   * Timestamp when a payment reminder was sent (ISO 8601), or null if never sent
   */
  reminderSentAt: string | null;
  /**
   * Optional note attached to the invoice
   */
  note: string | null;
  /**
   * Value-added tax amount, or null if not applicable
   */
  vat: number | null;
  /**
   * Tax amount, or null if not applicable
   */
  tax: number | null;
  /**
   * Discount amount applied to the invoice, or null if none
   */
  discount: number | null;
  /**
   * Subtotal before taxes and discounts, or null if not calculated
   */
  subtotal: number | null;
  /**
   * Timestamp when the invoice was viewed by the customer (ISO 8601), or null if never viewed
   */
  viewedAt: string | null;
  /**
   * Name of the customer as shown on the invoice, or null if not set
   */
  customerName: string | null;
  /**
   * Email address to which the invoice was sent, or null if not sent
   */
  sentTo: string | null;
  /**
   * Timestamp when the invoice was sent (ISO 8601), or null if not sent
   */
  sentAt: string | null;
  /**
   * Timestamp when the invoice was created (ISO 8601)
   */
  createdAt: string;
  /**
   * Timestamp when the invoice was last updated (ISO 8601)
   */
  updatedAt: string;
};

/**
 * Response containing a list of invoices and pagination metadata
 */
export type ListInvoicesResponse = {
  /**
   * Pagination metadata
   */
  meta: ListInvoicesMeta;
  /**
   * Array of invoice objects
   */
  data: Array<ListInvoicesData>;
};

/** @internal */
export const ListInvoicesRequest$inboundSchema: z.ZodType<
  ListInvoicesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.nullable(z.string()).optional(),
  sort: z.nullable(z.array(z.string())).optional(),
  pageSize: z.number().optional(),
  q: z.nullable(z.string()).optional(),
  start: z.nullable(z.string()).optional(),
  end: z.nullable(z.string()).optional(),
  statuses: z.nullable(z.array(z.string())).optional(),
  customers: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type ListInvoicesRequest$Outbound = {
  cursor?: string | null | undefined;
  sort?: Array<string> | null | undefined;
  pageSize?: number | undefined;
  q?: string | null | undefined;
  start?: string | null | undefined;
  end?: string | null | undefined;
  statuses?: Array<string> | null | undefined;
  customers?: Array<string> | null | undefined;
};

/** @internal */
export const ListInvoicesRequest$outboundSchema: z.ZodType<
  ListInvoicesRequest$Outbound,
  z.ZodTypeDef,
  ListInvoicesRequest
> = z.object({
  cursor: z.nullable(z.string()).optional(),
  sort: z.nullable(z.array(z.string())).optional(),
  pageSize: z.number().optional(),
  q: z.nullable(z.string()).optional(),
  start: z.nullable(z.string()).optional(),
  end: z.nullable(z.string()).optional(),
  statuses: z.nullable(z.array(z.string())).optional(),
  customers: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInvoicesRequest$ {
  /** @deprecated use `ListInvoicesRequest$inboundSchema` instead. */
  export const inboundSchema = ListInvoicesRequest$inboundSchema;
  /** @deprecated use `ListInvoicesRequest$outboundSchema` instead. */
  export const outboundSchema = ListInvoicesRequest$outboundSchema;
  /** @deprecated use `ListInvoicesRequest$Outbound` instead. */
  export type Outbound = ListInvoicesRequest$Outbound;
}

export function listInvoicesRequestToJSON(
  listInvoicesRequest: ListInvoicesRequest,
): string {
  return JSON.stringify(
    ListInvoicesRequest$outboundSchema.parse(listInvoicesRequest),
  );
}

export function listInvoicesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListInvoicesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListInvoicesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListInvoicesRequest' from JSON`,
  );
}

/** @internal */
export const ListInvoicesMeta$inboundSchema: z.ZodType<
  ListInvoicesMeta,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.nullable(z.string()),
  hasPreviousPage: z.boolean(),
  hasNextPage: z.boolean(),
});

/** @internal */
export type ListInvoicesMeta$Outbound = {
  cursor: string | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

/** @internal */
export const ListInvoicesMeta$outboundSchema: z.ZodType<
  ListInvoicesMeta$Outbound,
  z.ZodTypeDef,
  ListInvoicesMeta
> = z.object({
  cursor: z.nullable(z.string()),
  hasPreviousPage: z.boolean(),
  hasNextPage: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInvoicesMeta$ {
  /** @deprecated use `ListInvoicesMeta$inboundSchema` instead. */
  export const inboundSchema = ListInvoicesMeta$inboundSchema;
  /** @deprecated use `ListInvoicesMeta$outboundSchema` instead. */
  export const outboundSchema = ListInvoicesMeta$outboundSchema;
  /** @deprecated use `ListInvoicesMeta$Outbound` instead. */
  export type Outbound = ListInvoicesMeta$Outbound;
}

export function listInvoicesMetaToJSON(
  listInvoicesMeta: ListInvoicesMeta,
): string {
  return JSON.stringify(
    ListInvoicesMeta$outboundSchema.parse(listInvoicesMeta),
  );
}

export function listInvoicesMetaFromJSON(
  jsonString: string,
): SafeParseResult<ListInvoicesMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListInvoicesMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListInvoicesMeta' from JSON`,
  );
}

/** @internal */
export const ListInvoicesStatus$inboundSchema: z.ZodNativeEnum<
  typeof ListInvoicesStatus
> = z.nativeEnum(ListInvoicesStatus);

/** @internal */
export const ListInvoicesStatus$outboundSchema: z.ZodNativeEnum<
  typeof ListInvoicesStatus
> = ListInvoicesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInvoicesStatus$ {
  /** @deprecated use `ListInvoicesStatus$inboundSchema` instead. */
  export const inboundSchema = ListInvoicesStatus$inboundSchema;
  /** @deprecated use `ListInvoicesStatus$outboundSchema` instead. */
  export const outboundSchema = ListInvoicesStatus$outboundSchema;
}

/** @internal */
export const ListInvoicesCustomer$inboundSchema: z.ZodType<
  ListInvoicesCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  website: z.nullable(z.string()),
  email: z.nullable(z.string()),
});

/** @internal */
export type ListInvoicesCustomer$Outbound = {
  id: string;
  name: string;
  website: string | null;
  email: string | null;
};

/** @internal */
export const ListInvoicesCustomer$outboundSchema: z.ZodType<
  ListInvoicesCustomer$Outbound,
  z.ZodTypeDef,
  ListInvoicesCustomer
> = z.object({
  id: z.string(),
  name: z.string(),
  website: z.nullable(z.string()),
  email: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInvoicesCustomer$ {
  /** @deprecated use `ListInvoicesCustomer$inboundSchema` instead. */
  export const inboundSchema = ListInvoicesCustomer$inboundSchema;
  /** @deprecated use `ListInvoicesCustomer$outboundSchema` instead. */
  export const outboundSchema = ListInvoicesCustomer$outboundSchema;
  /** @deprecated use `ListInvoicesCustomer$Outbound` instead. */
  export type Outbound = ListInvoicesCustomer$Outbound;
}

export function listInvoicesCustomerToJSON(
  listInvoicesCustomer: ListInvoicesCustomer,
): string {
  return JSON.stringify(
    ListInvoicesCustomer$outboundSchema.parse(listInvoicesCustomer),
  );
}

export function listInvoicesCustomerFromJSON(
  jsonString: string,
): SafeParseResult<ListInvoicesCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListInvoicesCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListInvoicesCustomer' from JSON`,
  );
}

/** @internal */
export const ListInvoicesData$inboundSchema: z.ZodType<
  ListInvoicesData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  status: ListInvoicesStatus$inboundSchema,
  dueDate: z.string(),
  issueDate: z.string(),
  invoiceNumber: z.string(),
  amount: z.number(),
  currency: z.string(),
  customer: z.lazy(() => ListInvoicesCustomer$inboundSchema),
  paidAt: z.nullable(z.string()),
  reminderSentAt: z.nullable(z.string()),
  note: z.nullable(z.string()),
  vat: z.nullable(z.number()),
  tax: z.nullable(z.number()),
  discount: z.nullable(z.number()),
  subtotal: z.nullable(z.number()),
  viewedAt: z.nullable(z.string()),
  customerName: z.nullable(z.string()),
  sentTo: z.nullable(z.string()),
  sentAt: z.nullable(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

/** @internal */
export type ListInvoicesData$Outbound = {
  id: string;
  status: string;
  dueDate: string;
  issueDate: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  customer: ListInvoicesCustomer$Outbound;
  paidAt: string | null;
  reminderSentAt: string | null;
  note: string | null;
  vat: number | null;
  tax: number | null;
  discount: number | null;
  subtotal: number | null;
  viewedAt: string | null;
  customerName: string | null;
  sentTo: string | null;
  sentAt: string | null;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const ListInvoicesData$outboundSchema: z.ZodType<
  ListInvoicesData$Outbound,
  z.ZodTypeDef,
  ListInvoicesData
> = z.object({
  id: z.string(),
  status: ListInvoicesStatus$outboundSchema,
  dueDate: z.string(),
  issueDate: z.string(),
  invoiceNumber: z.string(),
  amount: z.number(),
  currency: z.string(),
  customer: z.lazy(() => ListInvoicesCustomer$outboundSchema),
  paidAt: z.nullable(z.string()),
  reminderSentAt: z.nullable(z.string()),
  note: z.nullable(z.string()),
  vat: z.nullable(z.number()),
  tax: z.nullable(z.number()),
  discount: z.nullable(z.number()),
  subtotal: z.nullable(z.number()),
  viewedAt: z.nullable(z.string()),
  customerName: z.nullable(z.string()),
  sentTo: z.nullable(z.string()),
  sentAt: z.nullable(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInvoicesData$ {
  /** @deprecated use `ListInvoicesData$inboundSchema` instead. */
  export const inboundSchema = ListInvoicesData$inboundSchema;
  /** @deprecated use `ListInvoicesData$outboundSchema` instead. */
  export const outboundSchema = ListInvoicesData$outboundSchema;
  /** @deprecated use `ListInvoicesData$Outbound` instead. */
  export type Outbound = ListInvoicesData$Outbound;
}

export function listInvoicesDataToJSON(
  listInvoicesData: ListInvoicesData,
): string {
  return JSON.stringify(
    ListInvoicesData$outboundSchema.parse(listInvoicesData),
  );
}

export function listInvoicesDataFromJSON(
  jsonString: string,
): SafeParseResult<ListInvoicesData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListInvoicesData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListInvoicesData' from JSON`,
  );
}

/** @internal */
export const ListInvoicesResponse$inboundSchema: z.ZodType<
  ListInvoicesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  meta: z.lazy(() => ListInvoicesMeta$inboundSchema),
  data: z.array(z.lazy(() => ListInvoicesData$inboundSchema)),
});

/** @internal */
export type ListInvoicesResponse$Outbound = {
  meta: ListInvoicesMeta$Outbound;
  data: Array<ListInvoicesData$Outbound>;
};

/** @internal */
export const ListInvoicesResponse$outboundSchema: z.ZodType<
  ListInvoicesResponse$Outbound,
  z.ZodTypeDef,
  ListInvoicesResponse
> = z.object({
  meta: z.lazy(() => ListInvoicesMeta$outboundSchema),
  data: z.array(z.lazy(() => ListInvoicesData$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInvoicesResponse$ {
  /** @deprecated use `ListInvoicesResponse$inboundSchema` instead. */
  export const inboundSchema = ListInvoicesResponse$inboundSchema;
  /** @deprecated use `ListInvoicesResponse$outboundSchema` instead. */
  export const outboundSchema = ListInvoicesResponse$outboundSchema;
  /** @deprecated use `ListInvoicesResponse$Outbound` instead. */
  export type Outbound = ListInvoicesResponse$Outbound;
}

export function listInvoicesResponseToJSON(
  listInvoicesResponse: ListInvoicesResponse,
): string {
  return JSON.stringify(
    ListInvoicesResponse$outboundSchema.parse(listInvoicesResponse),
  );
}

export function listInvoicesResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListInvoicesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListInvoicesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListInvoicesResponse' from JSON`,
  );
}
