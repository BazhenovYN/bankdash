import type { AppRouter } from '@bankdash/api';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type LastTransactionsOutput = RouterOutput['transactions']['getLastTransactions'];
