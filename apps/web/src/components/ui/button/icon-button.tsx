import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function IconButton({ variant = 'primary', children, className, ...rest }: Readonly<Props>) {
  return (
    <button
      className={clsx(
        className,
        'rounded-full p-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        {
          'h-[40px] w-[40px] bg-blue-200 fill-gray-600 hover:bg-blue-300 focus-visible:outline-blue-300 lg:h-[50px] lg:w-[50px]':
            variant === 'primary',
          'h-10 w-10 bg-blue-800 fill-white hover:bg-blue-600 focus-visible:outline-blue-600 md:h-6 md:w-6 md:p-1.5 lg:h-8 lg:w-8 lg:p-2':
            variant === 'secondary',
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
