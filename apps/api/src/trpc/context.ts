import { getUserById } from '@api/data';
import prisma from '@api/lib/prisma';

import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

export const createContext = async ({ req, res }: CreateFastifyContextOptions) => {
  const getUserIdFromHeader = async () => {
    try {
      const payload = await req.jwtVerify();
      return getUserById(prisma, payload.userId);
    } catch {
      return null;
    }
  };

  const user = await getUserIdFromHeader();
  return { req, res, prisma, user };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
