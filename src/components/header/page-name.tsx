'use client';

import { sections } from '@/constants/sections';
import { usePathname } from 'next/navigation';

export function PageName() {
  const pathname = usePathname();
  const section = sections.find((section) => section.href === pathname);

  return (
    <h2 className="text-xl font-semibold capitalize md:text-2xl lg:text-3xl">
      {section?.pageName}
    </h2>
  );
}
