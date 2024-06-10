import { Transactions } from '@web/components/transactions';
import { Suspense } from 'react';
import { NUMBER_OF_DISPLAYED_TRANSACTIONS } from '../constants';

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default function AllTransactions({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <Suspense key={currentPage} fallback="Loading...">
      <Transactions limitPerPage={NUMBER_OF_DISPLAYED_TRANSACTIONS} currentPage={currentPage} />
    </Suspense>
  );
}
