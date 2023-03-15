import { createTRPCRouter } from "../../trpc";
import sheetsRouter from "./sheets";

export const smartsheetRouter = createTRPCRouter({
  sheets: sheetsRouter,
});
