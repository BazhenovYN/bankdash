import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ children, className, ...rest }: Readonly<Props>) {
  return (
    <button
      className={clsx(
        className,
        'h-[40px] w-[40px] rounded-full bg-blue-200 fill-gray-600 p-3 transition-colors hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300 lg:h-[50px] lg:w-[50px]'
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
