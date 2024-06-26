import Logo from '@web/assets/svg/logo.svg';
import { NavLinks } from './nav-links';

export function SideNav() {
  return (
    <nav className="hidden w-full flex-col items-center border-r border-r-blue-400 md:flex md:max-w-[230px] lg:max-w-[250px]">
      <h1 className="my-6 lg:my-8">
        <span className="sr-only">BankDash</span>
        <Logo />
      </h1>
      <NavLinks />
    </nav>
  );
}
