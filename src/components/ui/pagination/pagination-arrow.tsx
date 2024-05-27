import clsx from 'clsx';
import Link from 'next/link';

interface Props extends React.PropsWithChildren {
  href: string;
  isDisabled: boolean;
}

export function PaginationArrow({ href, isDisabled, children }: Props) {
  const className = 'flex justify-center items-center text-xs lg:text-base';
  if (isDisabled) {
    return <div className={clsx(className, 'cursor-not-allowed text-gray-400')}>{children}</div>;
  }
  return (
    <Link href={href} className={clsx(className, 'text-blue-800')}>
      {children}
    </Link>
  );
}
