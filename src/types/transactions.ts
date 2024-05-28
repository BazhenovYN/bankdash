import { Currency } from './common';

export type TransactionType = 'income' | 'expense';

export type TransactionCategory = 'shopping' | 'transfer' | 'service';

export type TransactionStatus = 'pending' | 'completed';

export type Transaction = {
  id: string;
  description: string;
  type: TransactionType;
  category: TransactionCategory;
  card: string;
  date: Date;
  amount: number;
  currency: Currency;
  status: TransactionStatus;
};
