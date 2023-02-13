import { z } from "zod";
import type { Sheet } from "../../../../../pages/api/smartsheet/smartsheetTypes";
import { createTRPCRouter, publicProcedure } from "../../../trpc";

const sheetRouter = createTRPCRouter({
  getSheets: publicProcedure.query(({ ctx }) => {
    const options = {
      queryParameters: {
        include: "attachments",
        includeAll: true,
      },
    };
    const res: Sheet[] = ctx.smartsheet.sheets.listSheets(options);
    return res;
  }),
  getSheet: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    const res: Sheet = ctx.smartsheet.sheets.getSheet({ id: input });
    return res;
  }),
});
export default sheetRouter;
