import clsx from 'clsx';

import { Container } from '@/components/ui/container';
import { Transaction } from '@/types';
import { formatAmount, formateDate } from '@/utils';
import { IconCategory } from './icon-category';

type Props = {
  transactions: Transaction[];
};

export function ShortList({ transactions }: Readonly<Props>) {
  return (
    <Container title="Recent transactions" className="max-w-[350px]">
      <div className="flex flex-col justify-between gap-2 bg-white p-6">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <IconCategory category={transaction.category} size="sm" rounded />
              <div className="flex flex-col">
                <div className="font-medium">{transaction.description}</div>
                <div className="text-gray-600">{formateDate(transaction.date, 'DD MMMM YYYY')}</div>
              </div>
            </div>
            <div
              className={clsx({
                'text-green-500': transaction.type === 'income',
                'text-red-500': transaction.type === 'expense',
              })}
            >
              {transaction.type === 'income' ? '+' : '-'}
              {formatAmount(transaction.amount, transaction.currency)}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
