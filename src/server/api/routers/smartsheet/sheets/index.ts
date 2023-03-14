import { z } from "zod";
import type { Sheet } from "../smartsheetTypes";
import { createTRPCRouter, publicProcedure } from "../../../trpc";

const sheetRouter = createTRPCRouter({
  getSheet: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    const res: Sheet = ctx.smartsheet.sheets.getSheet({ id: input });
    return res;
  }),
});
export default sheetRouter;
