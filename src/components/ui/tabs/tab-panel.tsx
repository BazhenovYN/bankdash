export function TabPanel({ children }: React.PropsWithChildren) {
  return (
    <div role="tabpanel" className="mt-5 lg:mt-6">
      {children}
    </div>
  );
}
