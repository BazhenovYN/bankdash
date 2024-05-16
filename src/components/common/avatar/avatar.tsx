import { HTMLAttributes } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
}

export function Avatar({ src, alt = '', className, children }: Readonly<Props>) {
  return (
    <div className={clsx(className, 'relative')}>
      {src ? (
        <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-full" />
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
