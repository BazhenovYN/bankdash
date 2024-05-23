import { Sticker, StickerList } from '@/components/sticker';
import { getTotalInvestStatistic } from '@/services/finances';
import { formatAmount } from '@/utils';
import { MoneyBagIcon, PieChartIcon, RepeatIcon } from './icons';

export async function InvestmentsStickers() {
  const totalInvestment = await getTotalInvestStatistic();
  return (
    <StickerList>
      <Sticker
        title="Total invested amount"
        content={formatAmount(totalInvestment.totalAmount, totalInvestment.currency)}
        icon={<MoneyBagIcon />}
      />
      <Sticker
        title="Number of investments"
        content={formatAmount(totalInvestment.numberOfInvestments, totalInvestment.currency)}
        icon={<PieChartIcon />}
      />
      <Sticker
        title="Rate of return"
        content={formatAmount(totalInvestment.rateOfReturn, totalInvestment.currency)}
        icon={<RepeatIcon />}
      />
    </StickerList>
  );
}
