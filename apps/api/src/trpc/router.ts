import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';

import { Context } from './context';

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter: ({ error, shape }) => {
    if (error.code === 'INTERNAL_SERVER_ERROR' && process.env.NODE_ENV === 'production') {
      return { ...shape, message: 'Internal server error' };
    }
    return shape;
  },
});

const isAuth = t.middleware(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const router = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuth);
