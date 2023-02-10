import { createTRPCRouter } from "./trpc";
import { authRouter } from "./routers/auth";
import { postRouter } from "./routers/post";
import { productRouter } from "./routers/product";
import { categoryRouter } from "./routers/category";
import { commentRouter } from "./routers/comment";
import { cartRouter } from "./routers/cart";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  comment: commentRouter,
  product: productRouter,
  category: categoryRouter,
  cart: cartRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
