/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  ExpensesResultArray,
  ExpensesResultArray$inboundSchema,
  ExpensesResultArray$Outbound,
  ExpensesResultArray$outboundSchema,
} from "./expensesresultarray.js";

export type Summary = {
  /**
   * Average expense over the period
   */
  averageExpense: number;
  /**
   * Currency code (ISO 4217)
   */
  currency: string;
};

export type GetExpensesResponseSchemaMeta = {
  /**
   * Type of metric
   */
  type: string;
  /**
   * Currency code (ISO 4217)
   */
  currency: string;
};

export type GetExpensesResponseSchema = {
  summary: Summary;
  meta: GetExpensesResponseSchemaMeta;
  result: Array<ExpensesResultArray>;
};

/** @internal */
export const Summary$inboundSchema: z.ZodType<Summary, z.ZodTypeDef, unknown> =
  z.object({
    averageExpense: z.number(),
    currency: z.string(),
  });

/** @internal */
export type Summary$Outbound = {
  averageExpense: number;
  currency: string;
};

/** @internal */
export const Summary$outboundSchema: z.ZodType<
  Summary$Outbound,
  z.ZodTypeDef,
  Summary
> = z.object({
  averageExpense: z.number(),
  currency: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Summary$ {
  /** @deprecated use `Summary$inboundSchema` instead. */
  export const inboundSchema = Summary$inboundSchema;
  /** @deprecated use `Summary$outboundSchema` instead. */
  export const outboundSchema = Summary$outboundSchema;
  /** @deprecated use `Summary$Outbound` instead. */
  export type Outbound = Summary$Outbound;
}

export function summaryToJSON(summary: Summary): string {
  return JSON.stringify(Summary$outboundSchema.parse(summary));
}

export function summaryFromJSON(
  jsonString: string,
): SafeParseResult<Summary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Summary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Summary' from JSON`,
  );
}

/** @internal */
export const GetExpensesResponseSchemaMeta$inboundSchema: z.ZodType<
  GetExpensesResponseSchemaMeta,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  currency: z.string(),
});

/** @internal */
export type GetExpensesResponseSchemaMeta$Outbound = {
  type: string;
  currency: string;
};

/** @internal */
export const GetExpensesResponseSchemaMeta$outboundSchema: z.ZodType<
  GetExpensesResponseSchemaMeta$Outbound,
  z.ZodTypeDef,
  GetExpensesResponseSchemaMeta
> = z.object({
  type: z.string(),
  currency: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetExpensesResponseSchemaMeta$ {
  /** @deprecated use `GetExpensesResponseSchemaMeta$inboundSchema` instead. */
  export const inboundSchema = GetExpensesResponseSchemaMeta$inboundSchema;
  /** @deprecated use `GetExpensesResponseSchemaMeta$outboundSchema` instead. */
  export const outboundSchema = GetExpensesResponseSchemaMeta$outboundSchema;
  /** @deprecated use `GetExpensesResponseSchemaMeta$Outbound` instead. */
  export type Outbound = GetExpensesResponseSchemaMeta$Outbound;
}

export function getExpensesResponseSchemaMetaToJSON(
  getExpensesResponseSchemaMeta: GetExpensesResponseSchemaMeta,
): string {
  return JSON.stringify(
    GetExpensesResponseSchemaMeta$outboundSchema.parse(
      getExpensesResponseSchemaMeta,
    ),
  );
}

export function getExpensesResponseSchemaMetaFromJSON(
  jsonString: string,
): SafeParseResult<GetExpensesResponseSchemaMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetExpensesResponseSchemaMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetExpensesResponseSchemaMeta' from JSON`,
  );
}

/** @internal */
export const GetExpensesResponseSchema$inboundSchema: z.ZodType<
  GetExpensesResponseSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  summary: z.lazy(() => Summary$inboundSchema),
  meta: z.lazy(() => GetExpensesResponseSchemaMeta$inboundSchema),
  result: z.array(ExpensesResultArray$inboundSchema),
});

/** @internal */
export type GetExpensesResponseSchema$Outbound = {
  summary: Summary$Outbound;
  meta: GetExpensesResponseSchemaMeta$Outbound;
  result: Array<ExpensesResultArray$Outbound>;
};

/** @internal */
export const GetExpensesResponseSchema$outboundSchema: z.ZodType<
  GetExpensesResponseSchema$Outbound,
  z.ZodTypeDef,
  GetExpensesResponseSchema
> = z.object({
  summary: z.lazy(() => Summary$outboundSchema),
  meta: z.lazy(() => GetExpensesResponseSchemaMeta$outboundSchema),
  result: z.array(ExpensesResultArray$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetExpensesResponseSchema$ {
  /** @deprecated use `GetExpensesResponseSchema$inboundSchema` instead. */
  export const inboundSchema = GetExpensesResponseSchema$inboundSchema;
  /** @deprecated use `GetExpensesResponseSchema$outboundSchema` instead. */
  export const outboundSchema = GetExpensesResponseSchema$outboundSchema;
  /** @deprecated use `GetExpensesResponseSchema$Outbound` instead. */
  export type Outbound = GetExpensesResponseSchema$Outbound;
}

export function getExpensesResponseSchemaToJSON(
  getExpensesResponseSchema: GetExpensesResponseSchema,
): string {
  return JSON.stringify(
    GetExpensesResponseSchema$outboundSchema.parse(getExpensesResponseSchema),
  );
}

export function getExpensesResponseSchemaFromJSON(
  jsonString: string,
): SafeParseResult<GetExpensesResponseSchema, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetExpensesResponseSchema$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetExpensesResponseSchema' from JSON`,
  );
}
