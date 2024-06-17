import { z } from 'zod';
import { createCallerFactory, publicProcedure, router } from './router';
import { authRouter } from './routers/auth';
import { transactionsRouter } from './routers/transactions';

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
      })
    )
    .query(({ input }) => {
      const { name } = input;
      return {
        greeting: `Hello ${name ? name : `Bilbo`}`,
      };
    }),
  transactions: transactionsRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
