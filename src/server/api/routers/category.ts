import { createTRPCRouter, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";

export const defaultCategorySelect = Prisma.validator<Prisma.CategorySelect>()({
  id: true,
  name: true,
  slug: true,
  types: true,
  children: {
    select: {
      id: true,
      name: true,
      slug: true,
      types: true,
    },
  },
});

export const categoryRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    await ctx.prisma.category.findMany({
      select: defaultCategorySelect,
      where: {
        parentId: null,
      },
      orderBy: {
        id: "asc",
      },
    });
  }),
});
