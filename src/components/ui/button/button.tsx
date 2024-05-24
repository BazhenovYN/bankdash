import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export function Button({ startIcon, endIcon, className, children, ...rest }: Readonly<Props>) {
  return (
    <button
      className={clsx(
        'flex justify-center gap-2 rounded-lg bg-blue-800 px-4 py-3 text-sm font-medium capitalize text-white shadow-sm hover:bg-blue-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 lg:text-base',
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
