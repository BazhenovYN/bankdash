import { WidgetMyCards } from '@/components/widget-my-cards';
import { WidgetRecentTransactionsList } from '@/components/widget-recent-transactions-list';

export default function DashboardPage() {
  return (
    <div>
      <WidgetMyCards quantity={2} />
      <WidgetRecentTransactionsList quantity={3} />
    </div>
  );
}
