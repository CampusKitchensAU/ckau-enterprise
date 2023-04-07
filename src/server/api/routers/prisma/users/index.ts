import { createTRPCRouter, protectedProcedure } from "../../../trpc";

const usersRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.auth.userId) {
      return ctx.prisma.user.findUnique({
        where: {
          id: ctx.auth.userId,
        },
      });
    }
    return null;
  }),
});

export default usersRouter;
