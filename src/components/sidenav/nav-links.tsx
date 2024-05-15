'use client';

import { FC, SVGProps } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AccountsIcon from '@/assets/svg/accounts.svg';
import CreditCardIcon from '@/assets/svg/credit-card.svg';
import HomeIcon from '@/assets/svg/home.svg';
import Investments from '@/assets/svg/investments.svg';
import LoanIcon from '@/assets/svg/loan.svg';
import ServiceIcon from '@/assets/svg/service.svg';
import SettingsIcon from '@/assets/svg/settings.svg';
import TransactionsIcon from '@/assets/svg/transactions.svg';

type LinkItem = {
  id: string;
  name: string;
  href: string;
  icon: FC<SVGProps<SVGElement>>;
};

const links: LinkItem[] = [
  {
    id: 'dashboard',
    name: 'dashboard',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    id: 'transactions',
    name: 'transactions',
    href: '/transactions',
    icon: TransactionsIcon,
  },
  {
    id: 'accounts',
    name: 'accounts',
    href: '/accounts',
    icon: AccountsIcon,
  },
  {
    id: 'investments',
    name: 'investments',
    href: '/investments',
    icon: Investments,
  },
  {
    id: 'creditCards',
    name: 'credit cards',
    href: '/credit-cards',
    icon: CreditCardIcon,
  },
  {
    id: 'loans',
    name: 'loans',
    href: '/loans',
    icon: LoanIcon,
  },
  {
    id: 'services',
    name: 'services',
    href: '/services',
    icon: ServiceIcon,
  },
  {
    id: 'settings',
    name: 'settings',
    href: '/settings',
    icon: SettingsIcon,
  },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="mt-3 w-full list-none">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <li
            key={link.id}
            className={clsx(
              'flex items-center gap-5 py-0.5 font-medium transition-colors hover:fill-blue-600 hover:text-blue-600 lg:gap-8',
              isActive ? 'fill-blue-600 text-blue-600' : 'fill-gray-400  text-gray-400'
            )}
          >
            <div
              className={clsx('mr-0.5 h-[50px] w-[5px]  rounded-r-[10px] lg:h-[60px] lg:w-[6px]', {
                'bg-blue-600': isActive,
              })}
            ></div>
            <LinkIcon className="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]" />
            <Link href={link.href} className="text-base capitalize lg:text-lg">
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
