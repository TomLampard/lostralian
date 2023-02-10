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

  images: z.array({
    required_error: "Product images are required",
  })
});