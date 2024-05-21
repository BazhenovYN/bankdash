import { getLastTransactions } from '@/services/transactions';
import { DetailedList } from './detailed-list';
import { ShortList } from './short-list';

type Props = {
  quantity: number;
  detailed?: boolean;
};

export async function WidgetRecentTransactionsList({
  quantity,
  detailed = false,
}: Readonly<Props>) {
  const transactions = await getLastTransactions(quantity);

  if (detailed) {
    return <DetailedList transactions={transactions} />;
  }

  return <ShortList transactions={transactions} />;
}
