import clsx from 'clsx';

type Props = {
  title: string;
  content: string;
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Wrapper({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div className="flex w-full max-w-[350px] items-center justify-center gap-4 rounded-3xl bg-white px-4 py-5 lg:py-6">
      {children}
    </div>
  );
}

export function Sticker({ title, content, icon, variant = 'primary' }: Readonly<Props>) {
  return (
    <Wrapper>
      <div className="flex items-center justify-center gap-3 lg:gap-4">
        {icon}
        <div className={clsx('flex', variant === 'primary' ? 'flex-col' : 'flex-col-reverse')}>
          <div className="text-xs capitalize text-gray-600 lg:text-base">{title}</div>
          <div className="text-base font-semibold lg:text-xl">{content}</div>
        </div>
      </div>
    </Wrapper>
  );
}
