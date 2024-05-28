import { currentBalance, lastSentInvoices, totalInvestmentStatistic } from '@/mocks/finances';
import type { Balance, SentInvoice, TotalInvestStatistic } from '@/types';
import { delay } from '@/utils';

export const getCurrentBalance = async (): Promise<Balance> => {
  await delay(2000);
  return currentBalance;
};

export const getTotalInvestStatistic = async (): Promise<TotalInvestStatistic> => {
  await delay(2000);
  return totalInvestmentStatistic;
};

export const getLastSentInvoices = async (): Promise<SentInvoice[]> => {
  await delay(1500);
  return lastSentInvoices;
};
