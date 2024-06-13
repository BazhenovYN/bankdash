import clsx from 'clsx';

import { formatAmount } from '@web/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  amount: number;
  currency: string;
  isIncome: boolean;
}

export function ColoredAmount({ amount, currency, isIncome, className }: Props) {
  return (
    <div
      className={clsx(className, {
        'text-green-500': isIncome,
        'text-red-500': !isIncome,
      })}
    >
      {isIncome ? '+' : '-'}
      {formatAmount(amount, currency)}
    </div>
  );
}
