import { ColoredAmount } from '@/components/colored-amount';
import { IconCategory } from '@/components/icon-category';
import { Container } from '@/components/ui/container';
import { Transaction } from '@/types';
import { formateDate } from '@/utils';

type Props = {
  transactions: Transaction[];
};

export function ShortList({ transactions }: Readonly<Props>) {
  return (
    <Container title="Recent transactions" className="max-w-[350px]">
      <div className="flex flex-col justify-between gap-2 rounded-3xl bg-white p-6">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <IconCategory category={transaction.category} size="sm" rounded />
              <div className="flex flex-col">
                <div className="font-medium">{transaction.description}</div>
                <div className="text-gray-600">{formateDate(transaction.date, 'DD MMMM YYYY')}</div>
              </div>
            </div>
            <ColoredAmount
              amount={transaction.amount}
              currency={transaction.currency}
              type={transaction.type}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
