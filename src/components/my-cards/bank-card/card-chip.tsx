import clsx from 'clsx';
import Image from 'next/image';

type Props = React.HTMLAttributes<HTMLDivElement>;

export function CardChip({ className }: Readonly<Props>) {
  return (
    <div className={clsx('relative h-7 w-7 lg:h-9 lg:w-9', className)}>
      <Image src="/img/chip-card.png" alt="chip card" width={36} height={36} />
    </div>
  );
}
