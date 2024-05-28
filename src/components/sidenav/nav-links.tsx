'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sections } from '@/constants/sections';

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="mt-3 w-full list-none">
      {sections.map((section) => {
        const LinkIcon = section.icon;
        const isActive = pathname.startsWith(section.href);
        return (
          <li
            key={section.id}
            className={clsx(
              'flex items-center gap-5 py-0.5 font-medium transition-colors hover:fill-blue-600 hover:text-blue-600 lg:gap-8',
              isActive ? 'fill-blue-600 text-blue-600' : 'fill-gray-400  text-gray-400'
            )}
          >
            <div
              className={clsx('mr-0.5 h-[50px] w-[5px] rounded-r-[10px] lg:h-[60px] lg:w-[6px]', {
                'bg-blue-600': isActive,
              })}
            ></div>
            <LinkIcon className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]" />
            <Link href={section.href} className="text-base capitalize lg:text-lg">
              {section.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
