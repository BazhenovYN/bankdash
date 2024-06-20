import { createCallerFactory, router } from './router';
import { authRouter, transactionsRouter, userRouter } from './routers';

export const appRouter = router({
  transactions: transactionsRouter,
  auth: authRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
