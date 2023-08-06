import { postRouter } from './router/post';
import { createTRPCRouter, publicProcedure } from './trpc';

export const appRouter = createTRPCRouter({

  post: postRouter,
})

export type AppRouter = typeof appRouter;