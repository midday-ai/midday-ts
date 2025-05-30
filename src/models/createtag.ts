/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type CreateTag = {
  /**
   * The name of the tag.
   */
  name: string;
};

/** @internal */
export const CreateTag$inboundSchema: z.ZodType<
  CreateTag,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type CreateTag$Outbound = {
  name: string;
};

/** @internal */
export const CreateTag$outboundSchema: z.ZodType<
  CreateTag$Outbound,
  z.ZodTypeDef,
  CreateTag
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTag$ {
  /** @deprecated use `CreateTag$inboundSchema` instead. */
  export const inboundSchema = CreateTag$inboundSchema;
  /** @deprecated use `CreateTag$outboundSchema` instead. */
  export const outboundSchema = CreateTag$outboundSchema;
  /** @deprecated use `CreateTag$Outbound` instead. */
  export type Outbound = CreateTag$Outbound;
}

export function createTagToJSON(createTag: CreateTag): string {
  return JSON.stringify(CreateTag$outboundSchema.parse(createTag));
}

export function createTagFromJSON(
  jsonString: string,
): SafeParseResult<CreateTag, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTag$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTag' from JSON`,
  );
}
