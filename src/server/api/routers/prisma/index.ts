import { createTRPCRouter } from "../../trpc";
import authRouter from "./auth";
import usersRouter from "./users";

export const prismaRouter = createTRPCRouter({
  auth: authRouter,
  users: usersRouter,
});
