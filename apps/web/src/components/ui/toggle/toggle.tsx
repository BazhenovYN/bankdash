interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Toggle({ id, name, label, ...rest }: Readonly<Props>) {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" id={id} name={name ?? id} className="peer sr-only" {...rest} />
      <div className="relative h-6 min-w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-teal-500 peer-checked:after:translate-x-full peer-focus:outline peer-focus:outline-2 peer-focus:outline-offset-2 peer-focus:outline-blue-300 lg:h-8 lg:min-w-15 lg:after:h-7 lg:after:w-7"></div>
      <span className="ms-4 text-sm text-gray-900 lg:ms-5 lg:text-base">{label}</span>
    </label>
  );
}
