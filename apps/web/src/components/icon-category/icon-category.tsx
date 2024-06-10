import AppleSvg from '@web/assets/svg/apple.svg';
import DollarSvg from '@web/assets/svg/dollar.svg';
import PersonSvg from '@web/assets/svg/person.svg';
import PlaystationSvg from '@web/assets/svg/playstation.svg';
import ServiceSvg from '@web/assets/svg/service-v2.svg';
import ShoppingSvg from '@web/assets/svg/shopping.svg';
import { SvgIcon } from '@web/components/ui/svg-icon';
import type { Size } from '@web/types';

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
        <SvgIcon size={size} rounded={rounded} className="bg-[#FFF5D9]">
          <ShoppingSvg className="fill-[#FFBB38]" />
        </SvgIcon>
      );
    case 'transfer':
      return (
        <SvgIcon size={size} rounded={rounded} className="bg-[#FFE0EB]">
          <PersonSvg className="fill-[#FF82AC]" />
        </SvgIcon>
      );
    case 'apple':
      return (
        <SvgIcon size={size} rounded={rounded} className="bg-[#DCFAF8]">
          <AppleSvg className="fill-[#16DBCC]" />
        </SvgIcon>
      );
    case 'playstation':
      return (
        <SvgIcon size={size} rounded={rounded} className="bg-[#E7EDFF]">
          <PlaystationSvg className="fill-[#396AFF]" />
        </SvgIcon>
      );
    default:
      return (
        <SvgIcon size={size} rounded={rounded} className="bg-[#DCFAF8]">
          <DollarSvg className="fill-[#16DBCC]" />
        </SvgIcon>
      );
  }
}
