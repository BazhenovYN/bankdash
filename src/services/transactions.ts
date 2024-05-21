import { transactions } from '@/mocks/transactions';
import { Transaction } from '@/types';

export const getLastTransactions = async (quantity: number): Promise<Transaction[]> => {
  return transactions.slice(0, quantity);
};
