import { FastifyTRPCPluginOptions, fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

import { appRouter, createContext, type AppRouter } from '@api/trpc';

const TRPC_ENDPOINT = '/trpc';

export default fp(
  async function (fastify: FastifyInstance) {
    fastify.register(fastifyTRPCPlugin, {
      prefix: TRPC_ENDPOINT,
      trpcOptions: {
        router: appRouter,
        createContext,
        onError({ path, error }) {
          console.error(`Error in tRPC handler on path '${path}':`, error);
        },
      } satisfies FastifyTRPCPluginOptions<AppRouter>['trpcOptions'],
    });
  },
  {
    name: 'trpc',
    dependencies: [],
  }
);
