import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

import type { AppRouter } from '@api/trpc';

let token: string | undefined;
let time = Date.now();

export function setToken(newToken: string) {
  token = newToken;
  time = Date.now();
}

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_API_SERVER}/trpc`,
      headers() {
        console.log('token=', token, '; time=', time);
        if (!token) return {};
        return {
          Authorization: `Bearer ${token}`,
        };
      },
    }),
  ],
  transformer: superjson,
});
