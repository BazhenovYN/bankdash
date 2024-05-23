import clsx from 'clsx';

import { Container } from '@/components/ui/container';
import { Transaction } from '@/types';
import { formatAmount, formateDate, maskCardNumber } from '@/utils';
import { IconCategory } from './icon-category';

type Props = {
  transactions: Transaction[];
};

export function DetailedList({ transactions }: Readonly<Props>) {
  return (
    <Container title="Recent transactions" className="max-w-[730px]">
      <div className="bg-white p-4">
        <table className="w-full">
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-2 py-1">
                  <IconCategory category={transaction.category} size="sm" />
                </td>
                <td>
                  <div className="flex flex-col">
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-gray-600">
                      {formateDate(transaction.date, 'DD MMM YYYY')}
                    </div>
                  </div>
                </td>
                <td className="capitalize text-gray-600">{transaction.category}</td>
                <td className="capitalize text-gray-600">
                  {maskCardNumber(transaction.card, 'end')}
                </td>
                <td className="capitalize text-gray-600">{transaction.status}</td>
                <td>
                  <div
                    className={clsx('text-end', {
                      'text-green-500': transaction.type === 'income',
                      'text-red-500': transaction.type === 'expense',
                    })}
                  >
                    {transaction.type === 'income' ? '+' : '-'}
                    {formatAmount(transaction.amount, transaction.currency)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
