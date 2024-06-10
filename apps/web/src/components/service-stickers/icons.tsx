import BagSvg from '@web/assets/svg/bag.svg';
import InsuranceSvg from '@web/assets/svg/life-insurance.svg';
import ShieldSvg from '@web/assets/svg/shield.svg';
import { SvgIcon } from '@web/components/ui/svg-icon';

export function InsuranceIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#E7EDFF]">
      <InsuranceSvg className="fill-[#396AFF]" />
    </SvgIcon>
  );
}

export function ShoppingIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#FFF5D9]">
      <BagSvg className="fill-[#FFBB38]" />
    </SvgIcon>
  );
}

export function SafetyIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#DCFAF8]">
      <ShieldSvg className="fill-[#16DBCC]" />
    </SvgIcon>
  );
}
