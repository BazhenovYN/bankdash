import type { Balance, SentInvoice, TotalInvestStatistic, TotalLoansStatistic } from '@web/types';

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

export const lastSentInvoices: SentInvoice[] = [
  {
    id: '1',
    description: 'Apple Store',
    category: 'apple',
    date: new Date(2024, 4, 24, 9, 37, 28),
    amount: 450,
    currency: 'USD',
  },
  {
    id: '2',
    description: 'Michael',
    category: 'transfer',
    date: new Date(2024, 4, 20, 17, 37, 3),
    amount: 160,
    currency: 'USD',
  },
  {
    id: '3',
    description: 'Playstation',
    category: 'playstation',
    date: new Date(2024, 4, 18, 15, 23, 11),
    amount: 1085,
    currency: 'USD',
  },
  {
    id: '4',
    description: 'William',
    category: 'transfer',
    date: new Date(2024, 4, 14, 8, 22, 22),
    amount: 90,
    currency: 'USD',
  },
];
