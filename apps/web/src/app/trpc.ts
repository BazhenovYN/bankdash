import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

import type { AppRouter } from '@api/trpc';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_API_SERVER}/trpc`,
    }),
  ],
  transformer: superjson,
});
