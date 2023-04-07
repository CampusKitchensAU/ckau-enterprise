import { createTRPCRouter } from "../../trpc";
import authRouter from "./auth";

export const prismaRouter = createTRPCRouter({
  auth: authRouter,
});
