import { HTMLAttributes } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

interface Props extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
  src?: string;
  alt?: string;
}

export function Avatar({ src, width, height, alt = '', className, children }: Readonly<Props>) {
  return (
    <div className={clsx('overflow-hidden rounded-full', className)}>
      {src ? <Image src={src} alt={alt} width={width} height={height} /> : <>{children}</>}
    </div>
  );
}
