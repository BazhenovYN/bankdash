'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Tab({ href = '', className, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div role="tab" className="flex flex-col">
      <Link
        href={href}
        className={clsx(className, 'link px-3.5 text-sm font-medium capitalize lg:text-base', {
          'text-gray-600': !isActive,
          'text-blue-800': isActive,
        })}
      >
        {children}
      </Link>
      <div
        className={clsx('h-[3px] rounded-t-lg', {
          'bg-transparent': !isActive,
          'bg-blue-800': isActive,
        })}
      ></div>
    </div>
  );
}
