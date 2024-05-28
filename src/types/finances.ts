import { Currency } from './common';

export type Card = {
  id: number;
  cardService: string;
  cardNumber: string;
  cardHolder: string;
  valid: string;
  balance: number;
  currency: Currency;
};

export type Balance = {
  currentBalance: number;
  income: number;
  expense: number;
  totalSaving: number;
  currency: Currency;
};

export type SentInvoice = {
  id: string;
  description: string;
  category: string;
  date: Date;
  amount: number;
  currency: Currency;
};
