import { z } from "zod";
import { env } from "../../../../../env/server.mjs";
import type { Sheet } from "../../../../../pages/api/smartsheet/smartsheetTypes";
import { createTRPCRouter, publicProcedure } from "../../../trpc";
const client = require("smartsheet");

const sheetRouter = createTRPCRouter({
  getSheets: publicProcedure
    .input(z.number().optional())
    .query(async ({ input }) => {
      const smartsheet = client.createClient({
        accessToken: env.SMARTSHEET_KEY,
        logLevel: "info",
      });
      let options;
      if (input) {
        options = {
          id: input,
        };
      } else {
        options = {
          queryParameters: {
            include: "attachments",
            includeAll: true,
          },
        };
      }

      const t: Sheet = smartsheet.sheets.listSheets(options);
      return t;
    }),
});
export default sheetRouter;
