import { Sticker, StickerList } from '@web/components/sticker';
import { getTotalInvestStatistic } from '@web/services/finances';
import { formatAmount } from '@web/utils';
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
