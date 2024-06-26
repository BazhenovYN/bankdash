import { Currency } from './common';

export type TotalInvestStatistic = {
  totalAmount: number;
  numberOfInvestments: number;
  rateOfReturn: number;
  currency: Currency;
};

export type Stock = {
  id: string;
  name: string;
  price: number;
  currency: Currency;
  return: number;
};
