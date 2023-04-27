import { createTRPCRouter } from "./trpc";
import { smartsheetRouter } from "./routers/smartsheet";
import authRouter from "./routers/prisma/auth";
import userRouter from "./routers/prisma/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  smartsheet: smartsheetRouter,
  auth: authRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
