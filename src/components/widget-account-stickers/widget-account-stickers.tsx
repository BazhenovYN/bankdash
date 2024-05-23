import { Sticker, StickerList } from '@/components/sticker';
import { getCurrentBalance } from '@/services/finances';
import { formatAmount } from '@/utils';
import { ExpenseIcon, IncomeIcon, MoneyIcon, SavingIcon } from './icons';

export async function WidgetAccountStickers() {
  const balance = await getCurrentBalance();
  return (
    <StickerList>
      <Sticker
        title="My balance"
        content={formatAmount(balance.currentBalance, balance.currency)}
        icon={<MoneyIcon />}
      />
      <Sticker
        title="Income"
        content={formatAmount(balance.income, balance.currency)}
        icon={<IncomeIcon />}
      />
      <Sticker
        title="Expense"
        content={formatAmount(balance.expense, balance.currency)}
        icon={<ExpenseIcon />}
      />
      <Sticker
        title="Total saving"
        content={formatAmount(balance.totalSaving, balance.currency)}
        icon={<SavingIcon />}
      />
    </StickerList>
  );
}
