import { Sticker, StickerList } from '@web/components/sticker';
import { getCurrentBalance } from '@web/services/finances';
import { formatAmount } from '@web/utils';
import { ExpenseIcon, IncomeIcon, MoneyIcon, SavingIcon } from './icons';

export async function AccountStickers() {
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
