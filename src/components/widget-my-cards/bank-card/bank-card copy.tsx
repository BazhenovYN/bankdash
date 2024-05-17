import clsx from 'clsx';

import MasterCartLogo from '@/assets/svg/mc-logo.svg';
import { fontLato } from '@/styles/fonts';
import { Card } from '@/types';
import { formatAmount, maskCardNumber } from '@/utils';
import { CardChip } from './card-chip';

type Props = {
  card: Card;
  type: 'primary' | 'secondary';
};

export function BankCard({ card, type = 'secondary' }: Readonly<Props>) {
  const isPrimaryCard = type === 'primary';
  return (
    <div
      className={clsx(
        'relative flex h-[235px] w-[350px] flex-col justify-between overflow-hidden rounded-3xl p-6',
        fontLato.className,
        {
          'border border-blue-400 bg-white': !isPrimaryCard,
          'bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white': isPrimaryCard,
        }
      )}
    >
      <div className="flex justify-between">
        <div>
          <div className={clsx('text-xs', { 'text-gray-600': !isPrimaryCard })}>Balance</div>
          <div className={clsx('text-xl font-semibold')}>
            {formatAmount(card.balance, card.currency)}
          </div>
        </div>
        <CardChip className={clsx({ 'invert-70': !isPrimaryCard })} />
      </div>

      <div className="flex">
        <div className="flex w-1/2 flex-col">
          <div
            className={clsx('text-xs uppercase', isPrimaryCard ? 'text-white/70' : 'text-gray-600')}
          >
            Card holder
          </div>
          <div className="capitalize">{card.cardHolder}</div>
        </div>
        <div className="flex w-1/2 flex-col">
          <div
            className={clsx('text-xs uppercase', isPrimaryCard ? 'text-white/70' : 'text-gray-600')}
          >
            Valid thru
          </div>
          <div>{card.valid}</div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-xl font-semibold">{maskCardNumber(card.cardNumber)}</div>
        <MasterCartLogo
          className={clsx(
            ' h-[30px] w-[44px]',
            { 'fill-white': isPrimaryCard },
            isPrimaryCard ? 'fill-white' : 'fill-[#9199AF]'
          )}
        />
      </div>

      <div
        className={clsx(
          'absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-b from-[#FFFFFF26] to-[#FFFFFF00]',
          { 'border-t border-blue-400': !isPrimaryCard }
        )}
      />
    </div>
  );
}
