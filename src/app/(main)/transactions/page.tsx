import { MyCards } from '@/components/my-cards';

export default function TransactionsPage() {
  return (
    <div className="grid auto-rows-auto grid-cols-3 gap-8">
      <div className="col-span-2">
        <MyCards quantity={2} />
      </div>
      <div className="col-start-3">My Expense</div>
      <div className="col-span-3">Recent Transactions</div>
    </div>
  );
}
