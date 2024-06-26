import { z } from 'zod';

import { getLastTransactions, getTransactionsTotalPages } from '@api/data';
import { protectedProcedure, router } from '../router';

export const transactionsRouter = router({
  getLastTransactions: protectedProcedure
    .input(
      z.object({
        limitPerPage: z.number().max(100),
        currentPage: z.number().default(1),
        type: z.enum(['income', 'expense']).optional(),
      })
    )
    .query(async ({ input, ctx: { prisma, user } }) => {
      const { limitPerPage, currentPage, type } = input;
      const data = await getLastTransactions(prisma, user, limitPerPage, currentPage, type);
      const totalPages = await getTransactionsTotalPages(prisma, user, limitPerPage, type);
      return {
        data,
        info: {
          currentPage,
          totalPages,
        },
      };
    }),
});
