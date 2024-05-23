import clsx from 'clsx';

type Props = React.HTMLAttributes<HTMLDivElement>;

export function StickerList({ children, className, ...rest }: Readonly<Props>) {
  return (
    <div className={clsx(className, 'flex justify-between gap-6 lg:gap-7')} {...rest}>
      {children}
    </div>
  );
}
