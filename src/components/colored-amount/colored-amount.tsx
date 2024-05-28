import clsx from 'clsx';

import { Currency, TransactionType } from '@/types';
import { formatAmount } from '@/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  currency: Currency;
  type: TransactionType;
}

export function ColoredAmount({ amount, currency, type, className }: Props) {
  return (
    <div
      className={clsx(className, {
        'text-green-500': type === 'income',
        'text-red-500': type === 'expense',
      })}
    >
      {type === 'income' ? '+' : '-'}
      {formatAmount(amount, currency)}
    </div>
  );
}
