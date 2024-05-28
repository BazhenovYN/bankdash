import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export function Button({
  variant = 'contained',
  startIcon,
  endIcon,
  className,
  children,
  ...rest
}: Readonly<Props>) {
  return (
    <button
      className={clsx(
        'flex justify-center gap-2 px-4 text-sm font-medium capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 lg:text-base',
        {
          'rounded-lg bg-blue-800 py-3 text-white shadow-sm hover:bg-blue-800/80':
            variant === 'contained',
        },
        {
          'rounded-full border border-gray-900 py-1 text-gray-900 hover:border-blue-800 hover:text-blue-800':
            variant === 'outlined',
        },
        className
      )}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}
