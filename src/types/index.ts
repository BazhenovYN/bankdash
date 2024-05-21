export type Size = 'sm' | 'md' | 'lg';

export type Currency = 'USD' | 'EUR';

export type User = {
  id: number;
  name: string;
  img: string;
};

export type Card = {
  id: number;
  cardService: string;
  cardNumber: string;
  cardHolder: string;
  valid: string;
  balance: number;
  currency: Currency;
};

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
