import PersonSvg from '@web/assets/svg/accounts.svg';
import BriefcaseSvg from '@web/assets/svg/briefcase.svg';
import GraphSvg from '@web/assets/svg/graph.svg';
import SupportSvg from '@web/assets/svg/support.svg';
import { SvgIcon } from '@web/components/ui/svg-icon';

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
