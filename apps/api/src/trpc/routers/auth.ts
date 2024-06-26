import { z } from 'zod';

import { getUserByEmail } from '@api/data';
import { comparePasswords } from '@api/lib/crypt';
import { TRPCError } from '@trpc/server';
import { publicProcedure, router } from '../router';

export const authRouter = router({
  signin: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .output(z.string())
    .mutation(async ({ input, ctx: { prisma, res } }) => {
      const { email, password } = input;
      const user = await getUserByEmail(prisma, email);

      if (!user) {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }

      const isPasswordMatch = await comparePasswords(password, user.password);
      if (!isPasswordMatch) {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }

      const token = await res.jwtSign({
        userId: user.id,
      });

      return token;
    }),
});
