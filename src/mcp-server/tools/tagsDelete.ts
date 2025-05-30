/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tagsDelete } from "../../funcs/tagsDelete.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteTagRequest$inboundSchema,
};

export const tool$tagsDelete: ToolDefinition<typeof args> = {
  name: "tags-delete",
  description: `Delete a tag

Delete a tag by ID for the authenticated team.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await tagsDelete(
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

    return formatResult(void 0, apiCall);
  },
};
