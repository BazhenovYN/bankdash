import type { AppRouter } from '@api/trpc';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type LastTransactionsOutput = RouterOutput['transactions']['getLastTransactions'];
