import ExpenseSvg from '@web/assets/svg/expense.svg';
import IncomeSvg from '@web/assets/svg/income.svg';
import MoneySvg from '@web/assets/svg/money.svg';
import SavingSvg from '@web/assets/svg/saving.svg';
import { SvgIcon } from '@web/components/ui/svg-icon';

export function MoneyIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#FFF5D9]">
      <MoneySvg className="fill-[#FFBB38]" />
    </SvgIcon>
  );
}

export function IncomeIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#E7EDFF]">
      <IncomeSvg className="fill-[#396AFF]" />
    </SvgIcon>
  );
}

export function ExpenseIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#FFE0EB]">
      <ExpenseSvg className="fill-[#FF82AC]" />
    </SvgIcon>
  );
}

export function SavingIcon() {
  return (
    <SvgIcon size="lg" rounded className="bg-[#DCFAF8]">
      <SavingSvg className="fill-[#16DBCC]" />
    </SvgIcon>
  );
}
