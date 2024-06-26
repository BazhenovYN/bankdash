import MoneyBagSvg from '@web/assets/svg/money-bag.svg';
import PieChartSvg from '@web/assets/svg/pie-chart.svg';
import RepeatSvg from '@web/assets/svg/repeat.svg';
import { SvgIcon } from '@web/components/ui/svg-icon';

export function MoneyBagIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#DCFAF8]">
      <MoneyBagSvg className="fill-[#16DBCC]" />
    </SvgIcon>
  );
}

export function PieChartIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#FFE0EB]">
      <PieChartSvg className="fill-[#FF82AC]" />
    </SvgIcon>
  );
}

export function RepeatIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#E7EDFF]">
      <RepeatSvg className="fill-[#396AFF]" />
    </SvgIcon>
  );
}
