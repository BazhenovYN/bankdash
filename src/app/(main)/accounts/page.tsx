import { WidgetRecentTransactionsList } from '@/components/widget-recent-transactions-list';

export default function AccountsPage() {
  return (
    <div>
      <WidgetRecentTransactionsList quantity={3} detailed />
    </div>
  );
}
