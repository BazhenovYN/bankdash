import { trpc } from '@web/lib/trpc';
import { DetailedList } from './detailed-list';
import { ShortList } from './short-list';

type Props = {
  quantity: number;
  detailed?: boolean;
};

export async function RecentTransactionsList({ quantity, detailed = false }: Readonly<Props>) {
  const { data } = await trpc.transactions.getLastTransactions.query({
    limitPerPage: quantity,
  });

  if (detailed) {
    return <DetailedList transactions={data} />;
  }

  return <ShortList transactions={data} />;
}
