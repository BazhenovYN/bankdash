import { MyCards } from '@web/components/my-cards';
import { RecentTransactionsList } from '@web/components/recent-transactions-list';

export default function DashboardPage() {
  return (
    <div className="grid auto-rows-auto grid-cols-12 gap-8">
      <div className="col-span-8">
        <MyCards quantity={2} />
      </div>
      <div className="col-span-4 col-start-9">
        <RecentTransactionsList quantity={3} />
      </div>
      <div className="col-span-8">Weekly Activity</div>
      <div className="col-span-4 col-start-9">Expense Statistics</div>
      <div className="col-span-5">Quick Transfer</div>
      <div className="col-span-7 col-start-6">Balance History</div>
    </div>
  );
}
