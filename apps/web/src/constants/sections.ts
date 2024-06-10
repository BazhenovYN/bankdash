import { FC, SVGProps } from 'react';

import AccountsIcon from '@web/assets/svg/accounts.svg';
import CreditCardIcon from '@web/assets/svg/credit-card.svg';
import HomeIcon from '@web/assets/svg/home.svg';
import Investments from '@web/assets/svg/investments.svg';
import LoanIcon from '@web/assets/svg/loan.svg';
import ServiceIcon from '@web/assets/svg/service-v1.svg';
import SettingsIcon from '@web/assets/svg/settings.svg';
import TransactionsIcon from '@web/assets/svg/transactions.svg';

type Section = {
  id: string;
  name: string;
  pageName: string;
  href: string;
  icon: FC<SVGProps<SVGElement>>;
};

export const sections: Section[] = [
  {
    id: 'dashboard',
    name: 'dashboard',
    pageName: 'Overview',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    id: 'transactions',
    name: 'transactions',
    pageName: 'Transactions',
    href: '/transactions',
    icon: TransactionsIcon,
  },
  {
    id: 'accounts',
    name: 'accounts',
    pageName: 'Accounts',
    href: '/accounts',
    icon: AccountsIcon,
  },
  {
    id: 'investments',
    name: 'investments',
    pageName: 'Investments',
    href: '/investments',
    icon: Investments,
  },
  {
    id: 'creditCards',
    name: 'credit cards',
    pageName: 'Credit Cards',
    href: '/credit-cards',
    icon: CreditCardIcon,
  },
  {
    id: 'loans',
    name: 'loans',
    pageName: 'Loans',
    href: '/loans',
    icon: LoanIcon,
  },
  {
    id: 'services',
    name: 'services',
    pageName: 'Services',
    href: '/services',
    icon: ServiceIcon,
  },
  {
    id: 'setting',
    name: 'Setting',
    pageName: 'Setting',
    href: '/setting',
    icon: SettingsIcon,
  },
];
