import { Loan, TotalLoansStatistic } from '@web/types';

export const totalLoansStatistic: TotalLoansStatistic = {
  personalLoans: 50000,
  corporateLoans: 100000,
  businessLoans: 500000,
  educationLoans: 200000,
  currency: 'USD',
};

export const activeLoans: Loan[] = [
  {
    id: '1',
    loanMoney: 100000,
    leftToRepay: 40500,
    duration: 8,
    interestRate: 12,
    installment: 2000,
    currency: 'USD',
  },
  {
    id: '2',
    loanMoney: 500000,
    leftToRepay: 250000,
    duration: 36,
    interestRate: 10,
    installment: 8000,
    currency: 'USD',
  },
  {
    id: '3',
    loanMoney: 900000,
    leftToRepay: 40500,
    duration: 12,
    interestRate: 12,
    installment: 5000,
    currency: 'USD',
  },
  {
    id: '4',
    loanMoney: 50000,
    leftToRepay: 40500,
    duration: 25,
    interestRate: 5,
    installment: 2000,
    currency: 'USD',
  },
  {
    id: '5',
    loanMoney: 50000,
    leftToRepay: 40500,
    duration: 5,
    interestRate: 16,
    installment: 10000,
    currency: 'USD',
  },
  {
    id: '6',
    loanMoney: 80000,
    leftToRepay: 25500,
    duration: 14,
    interestRate: 8,
    installment: 2000,
    currency: 'USD',
  },
  {
    id: '7',
    loanMoney: 12000,
    leftToRepay: 5500,
    duration: 9,
    interestRate: 13,
    installment: 500,
    currency: 'USD',
  },
  {
    id: '8',
    loanMoney: 160000,
    leftToRepay: 100800,
    duration: 3,
    interestRate: 12,
    installment: 90,
    currency: 'USD',
  },
  {
    id: '9',
    loanMoney: 160000,
    leftToRepay: 100800,
    duration: 3,
    interestRate: 12,
    installment: 90,
    currency: 'USD',
  },
];
