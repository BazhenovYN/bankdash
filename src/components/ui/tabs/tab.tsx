'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Tab({ href = '', className, children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === href;

  const handleTabClick = () => {
    router.push(href);
    router.refresh(); // forcing request to the server with the current path+searchParams
  };

  return (
    <div className="flex flex-col">
      <button
        role="tab"
        onClick={handleTabClick}
        className={clsx(className, 'link px-3.5 text-sm font-medium capitalize lg:text-base', {
          'text-gray-600': !isActive,
          'text-blue-800': isActive,
        })}
      >
        {children}
      </button>
      <div
        className={clsx('h-[3px] rounded-t-lg', {
          'bg-transparent': !isActive,
          'bg-blue-800': isActive,
        })}
      ></div>
    </div>
  );
}
