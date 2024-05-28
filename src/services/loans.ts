import { activeLoans, totalLoansStatistic } from '@/mocks/loans';
import { ActiveLoans, TotalLoansStatistic } from '@/types';
import { delay, sliceData } from '@/utils';

export const getTotalLoansStatistic = async (): Promise<TotalLoansStatistic> => {
  return totalLoansStatistic;
};

export const getActiveLoans = async (limit: number, currentPage: number): Promise<ActiveLoans> => {
  const data = sliceData(activeLoans, limit, currentPage);

  return {
    data,
    totals: {
      loanMoney: activeLoans.reduce((acc, loan) => acc + loan.loanMoney, 0),
      leftToRepay: activeLoans.reduce((acc, loan) => acc + loan.leftToRepay, 0),
      installment: activeLoans.reduce((acc, loan) => acc + loan.installment, 0),
      currency: 'USD',
    },
    info: {
      currentPage,
      totalPages: Math.ceil(activeLoans.length / limit),
    },
  };
};
