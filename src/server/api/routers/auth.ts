import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getUser: protectedProcedure.query(({ ctx }) => {
    const id = ctx.session.user.id;
    return ctx.prisma.user.findUnique({
      where: { id },
      include: {
        orders: true,
      },
    });
  }),
});