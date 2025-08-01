/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * User's preferred date format. Available options: 'dd/MM/yyyy', 'MM/dd/yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy'
 */
export const GetCurrentUserDateFormat = {
  DdSlashMMSlashyyyy: "dd/MM/yyyy",
  MMSlashddSlashyyyy: "MM/dd/yyyy",
  YyyyDashMMDashdd: "yyyy-MM-dd",
  DdDotMMDotyyyy: "dd.MM.yyyy",
} as const;
/**
 * User's preferred date format. Available options: 'dd/MM/yyyy', 'MM/dd/yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy'
 */
export type GetCurrentUserDateFormat = ClosedEnum<
  typeof GetCurrentUserDateFormat
>;

/**
 * Team information that the user belongs to
 */
export type GetCurrentUserTeam = {
  /**
   * Unique identifier of the team
   */
  id: string;
  /**
   * Name of the team or organization
   */
  name: string;
  /**
   * URL to the team's logo image
   */
  logoUrl: string;
  /**
   * Current subscription plan of the team
   */
  plan: string;
};

/**
 * Retrieve the current user for the authenticated team.
 */
export type GetCurrentUserResponse = {
  /**
   * Unique identifier of the user
   */
  id: string;
  /**
   * Full name of the user
   */
  fullName: string;
  /**
   * Email address of the user
   */
  email: string;
  /**
   * URL to the user's avatar image
   */
  avatarUrl: string | null;
  /**
   * User's preferred locale for internationalization (language and region)
   */
  locale: string | null;
  /**
   * Whether the user's calendar week starts on Monday (true) or Sunday (false)
   */
  weekStartsOnMonday: boolean | null;
  /**
   * User's timezone identifier in IANA Time Zone Database format
   */
  timezone: string | null;
  /**
   * Whether to automatically sync timezone with browser timezone
   */
  timezoneAutoSync: boolean | null;
  /**
   * User's preferred time format: 12 for 12-hour format, 24 for 24-hour format
   */
  timeFormat: number | null;
  /**
   * User's preferred date format. Available options: 'dd/MM/yyyy', 'MM/dd/yyyy', 'yyyy-MM-dd', 'dd.MM.yyyy'
   */
  dateFormat: GetCurrentUserDateFormat | null;
  /**
   * Team information that the user belongs to
   */
  team: GetCurrentUserTeam | null;
};

/** @internal */
export const GetCurrentUserDateFormat$inboundSchema: z.ZodNativeEnum<
  typeof GetCurrentUserDateFormat
> = z.nativeEnum(GetCurrentUserDateFormat);

/** @internal */
export const GetCurrentUserDateFormat$outboundSchema: z.ZodNativeEnum<
  typeof GetCurrentUserDateFormat
> = GetCurrentUserDateFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCurrentUserDateFormat$ {
  /** @deprecated use `GetCurrentUserDateFormat$inboundSchema` instead. */
  export const inboundSchema = GetCurrentUserDateFormat$inboundSchema;
  /** @deprecated use `GetCurrentUserDateFormat$outboundSchema` instead. */
  export const outboundSchema = GetCurrentUserDateFormat$outboundSchema;
}

/** @internal */
export const GetCurrentUserTeam$inboundSchema: z.ZodType<
  GetCurrentUserTeam,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string(),
  plan: z.string(),
});

/** @internal */
export type GetCurrentUserTeam$Outbound = {
  id: string;
  name: string;
  logoUrl: string;
  plan: string;
};

/** @internal */
export const GetCurrentUserTeam$outboundSchema: z.ZodType<
  GetCurrentUserTeam$Outbound,
  z.ZodTypeDef,
  GetCurrentUserTeam
> = z.object({
  id: z.string(),
  name: z.string(),
  logoUrl: z.string(),
  plan: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCurrentUserTeam$ {
  /** @deprecated use `GetCurrentUserTeam$inboundSchema` instead. */
  export const inboundSchema = GetCurrentUserTeam$inboundSchema;
  /** @deprecated use `GetCurrentUserTeam$outboundSchema` instead. */
  export const outboundSchema = GetCurrentUserTeam$outboundSchema;
  /** @deprecated use `GetCurrentUserTeam$Outbound` instead. */
  export type Outbound = GetCurrentUserTeam$Outbound;
}

export function getCurrentUserTeamToJSON(
  getCurrentUserTeam: GetCurrentUserTeam,
): string {
  return JSON.stringify(
    GetCurrentUserTeam$outboundSchema.parse(getCurrentUserTeam),
  );
}

export function getCurrentUserTeamFromJSON(
  jsonString: string,
): SafeParseResult<GetCurrentUserTeam, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCurrentUserTeam$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCurrentUserTeam' from JSON`,
  );
}

/** @internal */
export const GetCurrentUserResponse$inboundSchema: z.ZodType<
  GetCurrentUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  avatarUrl: z.nullable(z.string()),
  locale: z.nullable(z.string()),
  weekStartsOnMonday: z.nullable(z.boolean()),
  timezone: z.nullable(z.string()),
  timezoneAutoSync: z.nullable(z.boolean()),
  timeFormat: z.nullable(z.number()),
  dateFormat: z.nullable(GetCurrentUserDateFormat$inboundSchema),
  team: z.nullable(z.lazy(() => GetCurrentUserTeam$inboundSchema)),
});

/** @internal */
export type GetCurrentUserResponse$Outbound = {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string | null;
  locale: string | null;
  weekStartsOnMonday: boolean | null;
  timezone: string | null;
  timezoneAutoSync: boolean | null;
  timeFormat: number | null;
  dateFormat: string | null;
  team: GetCurrentUserTeam$Outbound | null;
};

/** @internal */
export const GetCurrentUserResponse$outboundSchema: z.ZodType<
  GetCurrentUserResponse$Outbound,
  z.ZodTypeDef,
  GetCurrentUserResponse
> = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  avatarUrl: z.nullable(z.string()),
  locale: z.nullable(z.string()),
  weekStartsOnMonday: z.nullable(z.boolean()),
  timezone: z.nullable(z.string()),
  timezoneAutoSync: z.nullable(z.boolean()),
  timeFormat: z.nullable(z.number()),
  dateFormat: z.nullable(GetCurrentUserDateFormat$outboundSchema),
  team: z.nullable(z.lazy(() => GetCurrentUserTeam$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCurrentUserResponse$ {
  /** @deprecated use `GetCurrentUserResponse$inboundSchema` instead. */
  export const inboundSchema = GetCurrentUserResponse$inboundSchema;
  /** @deprecated use `GetCurrentUserResponse$outboundSchema` instead. */
  export const outboundSchema = GetCurrentUserResponse$outboundSchema;
  /** @deprecated use `GetCurrentUserResponse$Outbound` instead. */
  export type Outbound = GetCurrentUserResponse$Outbound;
}

export function getCurrentUserResponseToJSON(
  getCurrentUserResponse: GetCurrentUserResponse,
): string {
  return JSON.stringify(
    GetCurrentUserResponse$outboundSchema.parse(getCurrentUserResponse),
  );
}

export function getCurrentUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCurrentUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCurrentUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCurrentUserResponse' from JSON`,
  );
}
