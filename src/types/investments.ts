import { Currency } from './common';

export type TotalInvestStatistic = {
  totalAmount: number;
  numberOfInvestments: number;
  rateOfReturn: number;
  currency: Currency;
};
