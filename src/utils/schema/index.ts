import { z } from "zod";

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
    required_error: "Product price is required",
  }),

  images: z.object({
    url: z.string(),
    key: z.string(),
  })
});