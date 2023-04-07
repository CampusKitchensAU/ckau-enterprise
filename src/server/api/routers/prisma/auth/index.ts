import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../../../trpc";
import { clerkClient } from "@clerk/nextjs/server";

const authRouter = createTRPCRouter({
  checkWhitelist: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.auth.userId) {
      const user = await clerkClient.users.getUser(ctx.auth.userId);
      return ctx.prisma.whiteList.findMany({
        where: {
          email: {
            in: user.emailAddresses.map((email) => email.emailAddress),
          },
        },
      });
    }
    return [];
  }),
  checkUserExits: protectedProcedure.query(({ ctx }) => {
    if (ctx.auth.userId) {
      return ctx.prisma.user.findUnique({
        where: {
          id: ctx.auth.userId,
        },
      });
    }
    return null;
  }),
  createNewUser: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        birthday: z.string(),
        year: z.string(),
        major: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.create({
        data: {
          id: ctx.auth.userId,
          name: input.name,
          email: input.email,
          phone: input.phone,
          year: parseInt(input.year),
          major: input.major,
          birthday: new Date(input.birthday),
          experience: 0,
          completedShifts: 0,
          shiftLeaderOfWeek: 0,
          roleId: 1,
        },
      });
      return user;
    }),
});
export default authRouter;
