import type { AppRouter } from '@bankdash/api';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type LastTransactions = RouterOutput['transactions']['getLastTransactions'];

export type Profile = RouterOutput['user']['getProfile'];
export type Preferences = RouterOutput['user']['getPreferences'];
export type SecurityPreferences = RouterOutput['user']['getSecurityPreferences'];
export type Notifications = RouterOutput['user']['getPreferences']['notifications'];
