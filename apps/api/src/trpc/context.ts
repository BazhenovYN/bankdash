import prisma from '@api/lib/prisma';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

export const createContext = ({ req, res }: CreateFastifyContextOptions) => {
  return { req, res, prisma };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
