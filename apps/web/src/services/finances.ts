import { currentBalance, lastSentInvoices, totalInvestmentStatistic } from '@web/mocks/finances';
import type { Balance, SentInvoice, TotalInvestStatistic } from '@web/types';
import { delay } from '@web/utils';

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
