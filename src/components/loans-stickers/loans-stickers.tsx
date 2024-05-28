import { Sticker, StickerList } from '@/components/sticker';
import { getTotalLoansStatistic } from '@/services/loans';
import { formatAmount } from '@/utils';
import { BriefcaseIcon, GraphIcon, PersonIcon, SupportIcon } from './icons';

export async function LoansStickers() {
  const loans = await getTotalLoansStatistic();
  return (
    <StickerList>
      <Sticker
        title="Personal loans"
        content={formatAmount(loans.personalLoans, loans.currency)}
        icon={<PersonIcon />}
      />
      <Sticker
        title="Corporate loans"
        content={formatAmount(loans.corporateLoans, loans.currency)}
        icon={<BriefcaseIcon />}
      />
      <Sticker
        title="Business loans"
        content={formatAmount(loans.businessLoans, loans.currency)}
        icon={<GraphIcon />}
      />
      <Sticker
        title="Education loans"
        content={formatAmount(loans.educationLoans, loans.currency)}
        icon={<SupportIcon />}
      />
    </StickerList>
  );
}
