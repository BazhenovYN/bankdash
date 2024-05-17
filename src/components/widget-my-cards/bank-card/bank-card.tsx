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
        fontLato.className,
        'relative flex h-[170px] w-[231px] flex-col justify-between overflow-hidden rounded-3xl lg:h-[235px] lg:w-[350px]',
        {
          'border border-blue-400 bg-white': !isPrimaryCard,
          'bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] text-white': isPrimaryCard,
        }
      )}
    >
      <div className="flex h-full flex-col justify-between p-5 lg:p-6">
        <div className="flex justify-between">
          <div>
            <div className={clsx('text-xs', { 'text-gray-600': !isPrimaryCard })}>Balance</div>
            <div className={clsx('text-base font-semibold lg:text-xl')}>
              {formatAmount(card.balance, card.currency)}
            </div>
          </div>
          <CardChip className={clsx({ 'invert-70': !isPrimaryCard })} />
        </div>

        <div className="flex lg:pb-3">
          <div className="flex w-1/2 flex-col">
            <div
              className={clsx(
                'text-s uppercase lg:text-xs',
                isPrimaryCard ? 'text-white/70' : 'text-gray-600'
              )}
            >
              Card holder
            </div>
            <div className="text-xs font-semibold capitalize lg:text-base">{card.cardHolder}</div>
          </div>
          <div className="flex w-1/2 flex-col">
            <div
              className={clsx(
                'text-s uppercase lg:text-xs',
                isPrimaryCard ? 'text-white/70' : 'text-gray-600'
              )}
            >
              Valid thru
            </div>
            <div className="text-xs font-semibold capitalize lg:text-base">{card.valid}</div>
          </div>
        </div>
      </div>

      <div
        className={clsx('bg-gradient-to-b from-white/15 to-transparent', {
          'border-t border-blue-400': !isPrimaryCard,
        })}
      >
        <div className="flex items-center justify-between px-5 py-4 lg:px-6 lg:py-5">
          <div className="text-base font-semibold lg:text-xl">
            {maskCardNumber(card.cardNumber)}
          </div>
          <MasterCartLogo
            className={clsx(
              'h-[30px] w-[20px] lg:h-[30px] lg:w-[44px]',
              { 'fill-white': isPrimaryCard },
              isPrimaryCard ? 'fill-white' : 'fill-[#9199AF]'
            )}
          />
        </div>
      </div>
    </div>
  );
}
