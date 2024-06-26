import clsx from 'clsx';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  percent: number;
}

export function ColoredPercent({ percent, className }: Props) {
  return (
    <div
      className={clsx(className, {
        'text-green-500': percent >= 0,
        'text-red-500': percent < 0,
      })}
    >
      {percent > 0 && '+'}
      {percent}%
    </div>
  );
}
