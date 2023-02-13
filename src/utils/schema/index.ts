import { z } from "zod";
import { ProductSize, ProductColor, ShippingZone } from "@prisma/client";

export const CreateProductSchema = z.object({
  title: z
    .string({
      required_error: "Product title is required",
    })
    .min(2)
    .max(86),
  description: z
    .string({
      required_error: "Product description is required",
    })
    .min(2)
    .max(2000),

  price: z.number({
    required_error: "Product price in decimal required (e.g. 10.99)",
  }),

  quantity: z.number({
    required_error: "Product quantity is required",
  }),

  sizes: z.nativeEnum(ProductSize).optional(),

  colors: z.nativeEnum(ProductColor).optional(),

  shipping: z.nativeEnum(ShippingZone).optional(),

  category: z.array(
    z.object({
      name: z.string().min(1),
      slug: z.string().min(1),
      children: z.array(
        z.object({
          name: z.string().min(1),
          slug: z.string().min(1),
        })
      ),
    })
  ),

  published: z.boolean({
    required_error: "Product published status is required",
  }),

  images: z.array(
    z.object({
      url: z.string().min(1),
      key: z.string().min(1),
    })
  ),
});

export const UpdateProductSchema = z.object({});

export const CreateCategorySchema = z.object({});
export const UpdateCategorySchema = z.object({});




export const CreatePostSchema = z.object({
  title: z
    .string({
      required_error: "Post title is required",
    })
    .min(2)
    .max(86),
  description: z
    .string({
      required_error: "Post description is required",
    })
    .min(2)
    .max(2500),
  published: z.boolean({}),

  images: z.array(
    z.object({
      url: z.string().min(1),
      key: z.string().min(1),
    })
  ),
});
