import { HTMLAttributes } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  linkAdd?: string;
  linkSeeAll?: string;
}

export function WidgetContainer({
  children,
  className,
  title,
  linkSeeAll,
  linkAdd,
}: Readonly<Props>) {
  return (
    <div className={clsx('flex h-full w-full flex-col gap-5', className)}>
      <div className="flex justify-between font-semibold capitalize text-blue-900">
        <h3 className="font-semibold capitalize lg:text-xl">{title}</h3>
        <div className="flex gap-4">
          {linkAdd && <Link href={linkAdd}>+ Add</Link>}
          {linkSeeAll && <Link href={linkSeeAll}>See all</Link>}
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl">{children}</div>
    </div>
  );
}
