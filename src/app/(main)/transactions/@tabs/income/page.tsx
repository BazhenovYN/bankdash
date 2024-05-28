import { Transactions } from '@/components/transactions';
import { NUMBER_OF_DISPLAYED_TRANSACTIONS } from '../../constants';

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default function IncomeTransactions({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Transactions
      limitPerPage={NUMBER_OF_DISPLAYED_TRANSACTIONS}
      type="income"
      currentPage={currentPage}
    />
  );
}
