import { z } from "zod";
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
  getAllUsersByLetter: protectedProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const usersByLetter = alphabet.map((letter) => ({
      letter,
      users: users.filter((user) =>
        user.name?.split(" ")[1]?.startsWith(letter)
      ),
    }));
    return { usersByLetter, count: users.length };
  }),
  getUserById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});

export default usersRouter;
