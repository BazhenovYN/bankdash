import clsx from 'clsx';

import DollarIcon from '@/assets/svg/category/dollar.svg';
import PersonIcon from '@/assets/svg/category/person.svg';
import ServiceIcon from '@/assets/svg/category/service.svg';
import ShoppingIcon from '@/assets/svg/category/shopping.svg';
import type { Size, TransactionCategory } from '@/types';

type Props = {
  category: TransactionCategory;
  size: Size;
  rounded?: boolean;
};

export function IconCategory({ category, size, rounded = false }: Readonly<Props>) {
  const className = clsx(
    'flex justify-center items-center',
    rounded ? 'rounded-full' : 'rounded-xl md:rounded-2xl lg:rounded-[20px]',
    {
      'h-[45px] w-[45px] md:h-[40px] md:w-[40px] lg:h-[55px] lg:w-[55px] p-3 lg:p-4': size === 'sm',
      'h-[45px] w-[45px] md:h-[45px] md:w-[45px] lg:h-[60px] lg:w-[60px] p-3 lg:p-4': size === 'md',
      'h-[45px] w-[45px] md:h-[50px] md:w-[50px] lg:h-[70px] lg:w-[70px] p-3 lg:p-4': size === 'lg',
    }
  );

  switch (category) {
    case 'service':
      return (
        <div className={clsx(className, 'bg-[#E7EDFF]')}>
          <ServiceIcon className="fill-[#396AFF]" />
        </div>
      );
    case 'shopping':
      return (
        <div className={clsx(className, 'bg-[#FFF5D9]')}>
          <ShoppingIcon className="fill-[#FFBB38]" />
        </div>
      );
    case 'transfer':
      return (
        <div className={clsx(className, 'bg-[#FFE0EB]')}>
          <PersonIcon className="fill-[#FF82AC]" />
        </div>
      );
    default:
      return (
        <div className={clsx(className, 'bg-[#DCFAF8]')}>
          <DollarIcon className="fill-[#16DBCC]" />
        </div>
      );
  }
}
