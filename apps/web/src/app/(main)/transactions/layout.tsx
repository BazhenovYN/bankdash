import { MyCards } from '@web/components/my-cards';
import { Container } from '@web/components/ui/container';
import { NUMBER_OF_DISPLAYED_CARDS } from './constants';

export default function TransactionsLayout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <div className="grid auto-rows-auto grid-cols-3 gap-8">
      <div className="col-span-2">
        <MyCards quantity={NUMBER_OF_DISPLAYED_CARDS} />
      </div>
      <div className="col-start-3">My Expense</div>
      <div className="col-span-3">
        <Container title="Recent transactions">{tabs}</Container>
      </div>
    </div>
  );
}
