/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  ProfitMeta,
  ProfitMeta$inboundSchema,
  ProfitMeta$Outbound,
  ProfitMeta$outboundSchema,
} from "./profitmeta.js";
import {
  ProfitResultItem,
  ProfitResultItem$inboundSchema,
  ProfitResultItem$Outbound,
  ProfitResultItem$outboundSchema,
} from "./profitresultitem.js";
import {
  ProfitSummary,
  ProfitSummary$inboundSchema,
  ProfitSummary$Outbound,
  ProfitSummary$outboundSchema,
} from "./profitsummary.js";

export type GetProfitResponseSchema = {
  summary: ProfitSummary;
  meta: ProfitMeta;
  result: Array<ProfitResultItem>;
};

/** @internal */
export const GetProfitResponseSchema$inboundSchema: z.ZodType<
  GetProfitResponseSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  summary: ProfitSummary$inboundSchema,
  meta: ProfitMeta$inboundSchema,
  result: z.array(ProfitResultItem$inboundSchema),
});

/** @internal */
export type GetProfitResponseSchema$Outbound = {
  summary: ProfitSummary$Outbound;
  meta: ProfitMeta$Outbound;
  result: Array<ProfitResultItem$Outbound>;
};

/** @internal */
export const GetProfitResponseSchema$outboundSchema: z.ZodType<
  GetProfitResponseSchema$Outbound,
  z.ZodTypeDef,
  GetProfitResponseSchema
> = z.object({
  summary: ProfitSummary$outboundSchema,
  meta: ProfitMeta$outboundSchema,
  result: z.array(ProfitResultItem$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProfitResponseSchema$ {
  /** @deprecated use `GetProfitResponseSchema$inboundSchema` instead. */
  export const inboundSchema = GetProfitResponseSchema$inboundSchema;
  /** @deprecated use `GetProfitResponseSchema$outboundSchema` instead. */
  export const outboundSchema = GetProfitResponseSchema$outboundSchema;
  /** @deprecated use `GetProfitResponseSchema$Outbound` instead. */
  export type Outbound = GetProfitResponseSchema$Outbound;
}

export function getProfitResponseSchemaToJSON(
  getProfitResponseSchema: GetProfitResponseSchema,
): string {
  return JSON.stringify(
    GetProfitResponseSchema$outboundSchema.parse(getProfitResponseSchema),
  );
}

export function getProfitResponseSchemaFromJSON(
  jsonString: string,
): SafeParseResult<GetProfitResponseSchema, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProfitResponseSchema$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProfitResponseSchema' from JSON`,
  );
}
