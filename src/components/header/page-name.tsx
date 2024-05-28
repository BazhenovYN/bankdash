'use client';

import { sections } from '@/constants/sections';
import { usePathname } from 'next/navigation';

export function PageName() {
  const pathname = usePathname();
  const section = sections.find((section) => pathname.startsWith(section.href));

  return (
    <h2 className="text-xl font-semibold capitalize md:text-2xl lg:text-3xl">
      {section?.pageName}
    </h2>
  );
}
