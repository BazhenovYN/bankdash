import { Header } from '@/components/header';
import { SideNav } from '@/components/sidenav';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SideNav />
      <div className="flex w-full flex-col">
        <Header />
        <main className="grow border-t border-t-blue-400 bg-blue-200 px-10 pb-8 pt-6">
          {children}
        </main>
      </div>
    </>
  );
}
