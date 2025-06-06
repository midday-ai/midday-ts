/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetDocumentByIdRequest = {
  id: string | null;
};

/**
 * Metadata about the document.
 */
export type GetDocumentByIdMetadata = {
  /**
   * Size of the document in bytes.
   */
  size: number | null;
  /**
   * MIME type of the document.
   */
  mimetype: string | null;
};

/**
 * A single document object response.
 */
export type GetDocumentByIdResponse = {
  /**
   * Unique identifier for the document.
   */
  id: string;
  /**
   * Title of the document.
   */
  title: string | null;
  /**
   * Array of path tokens representing the document's location.
   */
  pathTokens: Array<string>;
  /**
   * Metadata about the document.
   */
  metadata: GetDocumentByIdMetadata | null;
  /**
   * Processing status of the document.
   */
  processingStatus: string;
  /**
   * Summary or extracted content from the document.
   */
  summary: string | null;
  /**
   * Date associated with the document (ISO 8601).
   */
  date: string | null;
};

/** @internal */
export const GetDocumentByIdRequest$inboundSchema: z.ZodType<
  GetDocumentByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()),
});

/** @internal */
export type GetDocumentByIdRequest$Outbound = {
  id: string | null;
};

/** @internal */
export const GetDocumentByIdRequest$outboundSchema: z.ZodType<
  GetDocumentByIdRequest$Outbound,
  z.ZodTypeDef,
  GetDocumentByIdRequest
> = z.object({
  id: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocumentByIdRequest$ {
  /** @deprecated use `GetDocumentByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetDocumentByIdRequest$inboundSchema;
  /** @deprecated use `GetDocumentByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetDocumentByIdRequest$outboundSchema;
  /** @deprecated use `GetDocumentByIdRequest$Outbound` instead. */
  export type Outbound = GetDocumentByIdRequest$Outbound;
}

export function getDocumentByIdRequestToJSON(
  getDocumentByIdRequest: GetDocumentByIdRequest,
): string {
  return JSON.stringify(
    GetDocumentByIdRequest$outboundSchema.parse(getDocumentByIdRequest),
  );
}

export function getDocumentByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDocumentByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDocumentByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDocumentByIdRequest' from JSON`,
  );
}

/** @internal */
export const GetDocumentByIdMetadata$inboundSchema: z.ZodType<
  GetDocumentByIdMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  size: z.nullable(z.number()),
  mimetype: z.nullable(z.string()),
});

/** @internal */
export type GetDocumentByIdMetadata$Outbound = {
  size: number | null;
  mimetype: string | null;
};

/** @internal */
export const GetDocumentByIdMetadata$outboundSchema: z.ZodType<
  GetDocumentByIdMetadata$Outbound,
  z.ZodTypeDef,
  GetDocumentByIdMetadata
> = z.object({
  size: z.nullable(z.number()),
  mimetype: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocumentByIdMetadata$ {
  /** @deprecated use `GetDocumentByIdMetadata$inboundSchema` instead. */
  export const inboundSchema = GetDocumentByIdMetadata$inboundSchema;
  /** @deprecated use `GetDocumentByIdMetadata$outboundSchema` instead. */
  export const outboundSchema = GetDocumentByIdMetadata$outboundSchema;
  /** @deprecated use `GetDocumentByIdMetadata$Outbound` instead. */
  export type Outbound = GetDocumentByIdMetadata$Outbound;
}

export function getDocumentByIdMetadataToJSON(
  getDocumentByIdMetadata: GetDocumentByIdMetadata,
): string {
  return JSON.stringify(
    GetDocumentByIdMetadata$outboundSchema.parse(getDocumentByIdMetadata),
  );
}

export function getDocumentByIdMetadataFromJSON(
  jsonString: string,
): SafeParseResult<GetDocumentByIdMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDocumentByIdMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDocumentByIdMetadata' from JSON`,
  );
}

/** @internal */
export const GetDocumentByIdResponse$inboundSchema: z.ZodType<
  GetDocumentByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  title: z.nullable(z.string()),
  pathTokens: z.array(z.string()),
  metadata: z.nullable(z.lazy(() => GetDocumentByIdMetadata$inboundSchema)),
  processingStatus: z.string(),
  summary: z.nullable(z.string()),
  date: z.nullable(z.string()),
});

/** @internal */
export type GetDocumentByIdResponse$Outbound = {
  id: string;
  title: string | null;
  pathTokens: Array<string>;
  metadata: GetDocumentByIdMetadata$Outbound | null;
  processingStatus: string;
  summary: string | null;
  date: string | null;
};

/** @internal */
export const GetDocumentByIdResponse$outboundSchema: z.ZodType<
  GetDocumentByIdResponse$Outbound,
  z.ZodTypeDef,
  GetDocumentByIdResponse
> = z.object({
  id: z.string(),
  title: z.nullable(z.string()),
  pathTokens: z.array(z.string()),
  metadata: z.nullable(z.lazy(() => GetDocumentByIdMetadata$outboundSchema)),
  processingStatus: z.string(),
  summary: z.nullable(z.string()),
  date: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocumentByIdResponse$ {
  /** @deprecated use `GetDocumentByIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetDocumentByIdResponse$inboundSchema;
  /** @deprecated use `GetDocumentByIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetDocumentByIdResponse$outboundSchema;
  /** @deprecated use `GetDocumentByIdResponse$Outbound` instead. */
  export type Outbound = GetDocumentByIdResponse$Outbound;
}

export function getDocumentByIdResponseToJSON(
  getDocumentByIdResponse: GetDocumentByIdResponse,
): string {
  return JSON.stringify(
    GetDocumentByIdResponse$outboundSchema.parse(getDocumentByIdResponse),
  );
}

export function getDocumentByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDocumentByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDocumentByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDocumentByIdResponse' from JSON`,
  );
}
