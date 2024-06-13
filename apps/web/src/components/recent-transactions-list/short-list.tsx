import { ColoredAmount } from '@web/components/colored-amount';
import { IconCategory } from '@web/components/icon-category';
import { Container } from '@web/components/ui/container';
import { LastTransactionsOutput } from '@web/types';
import { formateDate } from '@web/utils';

type Props = {
  transactions: LastTransactionsOutput['data'];
};

export function ShortList({ transactions }: Readonly<Props>) {
  return (
    <Container title="Recent transactions" className="max-w-[350px]">
      <div className="white-background flex flex-col justify-between gap-2 p-6">
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
              isIncome={transaction.isIncome}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
