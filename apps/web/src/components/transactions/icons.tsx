import clsx from 'clsx';

import ArrowIcon from '@web/assets/svg/arrow.svg';

type Props = {
  isIncome: boolean;
};

export function Icon({ isIncome }: Props) {
  return (
    <ArrowIcon
      className={clsx(
        'h-[35px] w-[35px] stroke-gray-600 md:h-[20px] md:w-[20px] lg:h-[30px] lg:w-[30px]',
        {
          'rotate-180': isIncome,
        }
      )}
    />
  );
}
