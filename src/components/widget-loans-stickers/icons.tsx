import PersonSvg from '@/assets/svg/accounts.svg';
import BriefcaseSvg from '@/assets/svg/briefcase.svg';
import GraphSvg from '@/assets/svg/graph.svg';
import SupportSvg from '@/assets/svg/support.svg';
import { SvgIcon } from '@/components/common/svg-icon';

export function PersonIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#E7EDFF]">
      <PersonSvg className="fill-[#396AFF]" />
    </SvgIcon>
  );
}

export function BriefcaseIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#FFF5D9]">
      <BriefcaseSvg className="fill-[#FFBB38]" />
    </SvgIcon>
  );
}

export function GraphIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#FFE0EB]">
      <GraphSvg className="fill-[#FF82AC]" />
    </SvgIcon>
  );
}

export function SupportIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#DCFAF8]">
      <SupportSvg className="fill-[#16DBCC]" />
    </SvgIcon>
  );
}
