import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  page: string;
  href: string;
  isActive: boolean;
};

export function PaginationNumber({ page, href, isActive }: Props) {
  const className = clsx(
    'flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 rounded-lg text-xs lg:text-base',
    {
      'text-blue-800': !isActive,
      'text-white bg-blue-800': isActive,
    }
  );

  if (page === '...') {
    return <div className={clsx(className, 'cursor-default')}>{page}</div>;
  }

  return (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}
