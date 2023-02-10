import { z } from 'zod';
import {
  CategoryType,
  Prisma,
  ProductColor,
  ProductSize,
  ShippingMethod,
  ShippingZone,
} from '@prisma/client';
import { publicProcedure, createTRPCRouter } from '../trpc';
import { defaultCategorySelect } from './category';

const defaultProductSelect = Prisma.validator<Prisma.ProductSelect>()({
  id: true,
  name: true,
  description: true,
  price: true,
  ratings: {
    select: {
      rating: true,
      title: true,
      description: true,
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  },
  images: {
    select: {
      url: true,
      key: true,
      id: true,
    },
  },
  categories: {
    select: {
      ...defaultCategorySelect,
      types: true,
    }
  },
});

export const productRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z.object({
        categories: z.nativeEnum(CategoryType),
        slug: z.string().optional(),
        page: z.number().optional(),
        price: z.number().optional(),
        shippingMethod: z.nativeEnum(ShippingMethod),
        shippingZone: z.nativeEnum(ShippingZone),
        sizes: z.nativeEnum(ProductSize).array().optional(),
        colors: z.nativeEnum(ProductColor).array().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const {
        categories = '',
        slug,
        page = 1,
        price,
        sizes = [],
        colors = [],
      } = input;

      const take = 12;
      const skip = take * (page - 1);

      const where: Prisma.ProductWhereInput = {

        published: true,
        price: { gte, lte },
        sizes: sizes.length > 0 ? { hasSome: sizes } : undefined,
        colors: colors.length > 0 ? { hasSome: colors } : undefined,
      };

      if (slug) {
        const isParent = await ctx.prisma.category.findFirst({
          where: {
            slug,
            parent: {
              is: null,
            },
          },
        });

        where.categories = isParent ? { parentId: isParent.id } : { slug };
      }

      const [products, totalCount] = await ctx.prisma.$transaction([
        ctx.prisma.product.findMany({
          select: defaultProductSelect,
          where,
          orderBy: { id: 'asc' },
          take,
          skip,
        }),
        ctx.prisma.product.count({ where }),
      ]);

      return {
        products,
        totalCount,
      };
    }),
});