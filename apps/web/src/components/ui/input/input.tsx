import clsx from 'clsx';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ id, name, label, className, ...rest }: Readonly<Props>) {
  return (
    <div>
      <label htmlFor={name ?? id} className="text-xs capitalize lg:text-base">
        {label}
      </label>
      <div className="relative mt-2 flex w-full items-center gap-4 rounded-2xl border border-gray-200 px-6 py-4 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-300">
        <input
          id={id}
          name={name ?? id}
          className={clsx(
            'w-full border-0 bg-transparent leading-4 text-gray-600 placeholder:text-gray-500 focus:outline-none',
            className
          )}
          {...rest}
        />
      </div>
    </div>
  );
}
