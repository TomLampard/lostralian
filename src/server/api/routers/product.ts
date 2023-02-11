import { z } from 'zod';
import {
  CategoryType,
  Prisma,
  ProductColor,
  ProductSize,
  ShippingZone,
} from '@prisma/client';
import { publicProcedure, createTRPCRouter } from '../trpc';
import { defaultCategorySelect, defaultSubCategorySelect } from './category';

const defaultProductSelect = Prisma.validator<Prisma.ProductSelect>()({
  id: true,
  name: true,
  description: true,
  price: true,
  quantity: true,
  published: true,
  alt: true,
  slug: true,
  sizes: true,
  colors: true,
  shippingZones: true,
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
    }
  },
  subCategories: {
    select: {
      ...defaultSubCategorySelect,
    }
  }
});

export const productRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z.object({
        categories: z.nativeEnum(CategoryType),
        slug: z.string().optional(),
        page: z.number().optional(),
        price: z.number().optional(),
        shippingZone: z.nativeEnum(ShippingZone),
        sizes: z.nativeEnum(ProductSize).array().optional(),
        colors: z.nativeEnum(ProductColor).array().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const {
        categories = [],
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
      };

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