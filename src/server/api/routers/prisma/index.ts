import { createTRPCRouter } from "../../trpc";
import authRouter from "./auth";
import userRouter from "./users";

export const prismaRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
});
