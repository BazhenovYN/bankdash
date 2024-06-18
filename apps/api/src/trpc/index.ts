import { createCallerFactory, router } from './router';
import { authRouter } from './routers/auth';
import { transactionsRouter } from './routers/transactions';

export const appRouter = router({
  transactions: transactionsRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
