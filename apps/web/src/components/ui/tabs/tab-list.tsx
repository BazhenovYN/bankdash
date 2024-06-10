export function TabList({ children }: React.PropsWithChildren) {
  return (
    <div
      role="tablist"
      className="inline-flex w-full justify-between gap-6 border-b border-gray-300 md:justify-start lg:gap-14"
    >
      {children}
    </div>
  );
}
