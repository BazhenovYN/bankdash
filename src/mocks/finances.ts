import { Balance, TotalInvestStatistic, TotalLoansStatistic } from '@/types';

export const currentBalance: Balance = {
  currentBalance: 12750,
  income: 5600,
  expense: 3460,
  totalSaving: 7920,
  currency: 'USD',
};

export const totalInvestmentStatistic: TotalInvestStatistic = {
  totalAmount: 150000,
  numberOfInvestments: 1250,
  rateOfReturn: 5.8,
  currency: 'USD',
};

export const totalLoansStatistic: TotalLoansStatistic = {
  personalLoans: 50000,
  corporateLoans: 100000,
  businessLoans: 500000,
  educationLoans: 200000,
  currency: 'USD',
};
