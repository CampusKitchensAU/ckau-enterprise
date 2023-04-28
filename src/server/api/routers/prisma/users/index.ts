import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../../trpc";

const userRouter = createTRPCRouter({
  getCurrentUser: protectedProcedure.query(async ({ ctx }) => {
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
  updateUserPersonalInfo: protectedProcedure
    .input(
      z.object({ name: z.string(), phone: z.string(), birthday: z.string() })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.auth.userId) {
        return ctx.prisma.user.update({
          where: {
            id: ctx.auth.userId,
          },
          data: {
            name: input.name,
            phone: input.phone,
            birthday: new Date(input.birthday),
          },
        });
      }
    }),
  updateUserSchoolInfo: protectedProcedure
    .input(z.object({ year: z.string(), major: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (ctx.auth.userId) {
        return ctx.prisma.user.update({
          where: {
            id: ctx.auth.userId,
          },
          data: {
            year: parseInt(input.year),
            major: input.major,
          },
        });
      }
    }),
});

export default userRouter;
