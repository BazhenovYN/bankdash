export function TabList({ children }: React.PropsWithChildren) {
  return (
    <div role="tablist" className="inline-flex w-full gap-6 border-b border-gray-300 lg:gap-14">
      {children}
    </div>
  );
}
