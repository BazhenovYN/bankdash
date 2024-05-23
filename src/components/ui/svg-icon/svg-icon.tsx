import clsx from 'clsx';

import { Size } from '@/types';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size: Size;
  rounded?: boolean;
}

export function SvgIcon({ children, className, size, rounded = false }: Readonly<Props>) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        rounded ? 'rounded-full' : 'rounded-xl md:rounded-2xl lg:rounded-[20px]',
        {
          'h-[45px] w-[45px] md:h-[40px] md:w-[40px] lg:h-[55px] lg:w-[55px]': size === 'sm',
          'h-[45px] w-[45px] md:h-[45px] md:w-[45px] lg:h-[60px] lg:w-[60px]': size === 'md',
          'h-[45px] w-[45px] md:h-[50px] md:w-[50px] lg:h-[70px] lg:w-[70px]': size === 'lg',
        },
        className
      )}
    >
      <div
        className={clsx('flex justify-center', size === 'lg' ? 'h-5 w-5 lg:h-8 lg:w-8' : 'h-6 w-6')}
      >
        {children}
      </div>
    </div>
  );
}
