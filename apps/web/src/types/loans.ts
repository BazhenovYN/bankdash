import { Currency } from './common';

export type TotalLoansStatistic = {
  personalLoans: number;
  corporateLoans: number;
  businessLoans: number;
  educationLoans: number;
  currency: Currency;
};

export type Loan = {
  id: string;
  loanMoney: number;
  leftToRepay: number;
  duration: number;
  interestRate: number;
  installment: number;
  currency: Currency;
};

export type ActiveLoanStatistic = {
  loanMoney: number;
  leftToRepay: number;
  installment: number;
  currency: Currency;
};

export type ActiveLoans = {
  data: Loan[];
  totals: ActiveLoanStatistic;
  info: {
    currentPage: number;
    totalPages: number;
  };
};
