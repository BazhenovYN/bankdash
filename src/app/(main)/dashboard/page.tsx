import { MyCards } from '@/components/my-cards';
import { RecentTransactionsList } from '@/components/recent-transactions-list';

export default function DashboardPage() {
  return (
    <>
      <MyCards quantity={2} />
      <RecentTransactionsList quantity={3} />
    </>
  );
}
