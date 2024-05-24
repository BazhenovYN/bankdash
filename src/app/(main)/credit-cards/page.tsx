import { AddNewCard } from '@/components/add-new-card';
import { MyCards } from '@/components/my-cards';

export default function CreditCardsPage() {
  return (
    <div className="grid auto-rows-auto grid-cols-3 gap-8">
      <div className="col-span-3">
        <MyCards quantity={3} hideSeeAllLink />
      </div>
      <div className="row-start-2">Card Expense Statistics</div>
      <div className="col-span-2">Card List</div>
      <div className="col-span-2">
        <AddNewCard />
      </div>
      <div className="col-start-3">Card Setting</div>
    </div>
  );
}
