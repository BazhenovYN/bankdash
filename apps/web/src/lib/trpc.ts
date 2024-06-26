import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { cookies } from 'next/headers';
import superjson from 'superjson';

import type { AppRouter } from '@bankdash/api';
import { ACCESS_TOKEN_KEY } from '@web/constants';

const getAccessToken = () => {
  const token = cookies().get(ACCESS_TOKEN_KEY)?.value;
  return token && `Bearer ${token}`;
};

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_API_SERVER}/trpc`,
      headers() {
        return {
          Authorization: getAccessToken(),
        };
      },
    }),
  ],
  transformer: superjson,
});
