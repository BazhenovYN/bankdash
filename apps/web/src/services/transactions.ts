import { unstable_noStore as noStore } from 'next/cache';

import { transactions } from '@web/mocks/transactions';
import type { Transaction, TransactionType } from '@web/types';
import { sliceData } from '@web/utils';

const getTransactionsByType = async (type?: TransactionType) => {
  if (type) {
    return transactions.filter((transaction) => transaction.type === type);
  }
  return transactions;
};

export const getLastTransactions = async (
  limit: number,
  currentPage: number = 1,
  type?: TransactionType
): Promise<Transaction[]> => {
  noStore();
  const data = await getTransactionsByType(type);
  return sliceData(data, limit, currentPage);
};

export const getTransactionsTotalPages = async (limitPerPage: number, type?: TransactionType) => {
  noStore();
  const data = await getTransactionsByType(type);
  return Math.ceil(data.length / limitPerPage);
};
