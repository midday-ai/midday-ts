/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsExpenses } from "../../funcs/metricsExpenses.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetExpensesMetricsRequest$inboundSchema,
};

export const tool$metricsExpenses: ToolDefinition<typeof args> = {
  name: "metrics-expenses",
  description: `Expense metrics

Expense metrics for the authenticated team.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await metricsExpenses(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
