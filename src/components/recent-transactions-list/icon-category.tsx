import DollarSvg from '@/assets/svg/dollar.svg';
import PersonSvg from '@/assets/svg/person.svg';
import ServiceSvg from '@/assets/svg/service-v2.svg';
import ShoppingSvg from '@/assets/svg/shopping.svg';
import { SvgIcon } from '@/components/ui/svg-icon';
import type { Size } from '@/types';

type Props = {
  category: string;
  size: Size;
  rounded?: boolean;
};

export function IconCategory({ category, size, rounded = false }: Readonly<Props>) {
  switch (category) {
    case 'service':
      return (
        <SvgIcon size={size} rounded={rounded} className="bg-[#E7EDFF]">
          <ServiceSvg className="fill-[#396AFF]" />
        </SvgIcon>
      );
    case 'shopping':
      return (
        <SvgIcon size={size} rounded className="bg-[#FFF5D9]">
          <ShoppingSvg className="fill-[#FFBB38]" />
        </SvgIcon>
      );
    case 'transfer':
      return (
        <SvgIcon size={size} rounded className="bg-[#FFE0EB]">
          <PersonSvg className="fill-[#FF82AC]" />
        </SvgIcon>
      );
    default:
      return (
        <SvgIcon size={size} rounded className="bg-[#DCFAF8]">
          <DollarSvg className="fill-[#16DBCC]" />
        </SvgIcon>
      );
  }
}
